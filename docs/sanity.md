# Sanity setup plan: blog dashboard at /admin/blogs

The plan for connecting the blog dashboard to Sanity, adding sign-in, and showing
dashboard posts on the live blog. Written for AI coding assistants and developers.

**Status (20 October 2026): the Sanity connection and the live blog integration are built
and tested on the `development` dataset; sign-in and `/admin/blogs` are not.** See "Implementation status" below. The
dashboard is described in [blog-studio.md](blog-studio.md). Record each phase in
[decision.md](../decision.md) when it is implemented. When this plan and the code
disagree, the code wins; update this plan.

## Implementation status

| Phase | State | Where |
|---|---|---|
| 0. Prerequisites | **Done.** Project `lk42drbi` has public `production` and `development` datasets. `.env` has the project ID, `NEXT_PUBLIC_SANITY_DATASET=development` and an Editor `SANITY_API_WRITE_TOKEN`. Adding them to Vercel has not been part of this work (not verified what Vercel has) | `.env`, `.env.example` |
| 1. Sanity connection | **Built** | `lib/sanity/client.ts`, `lib/sanity/blogPosts.ts` |
| 2. Sign-in | **Built as a shared team password** (D030), not Auth.js + Google: the user chose the password for speed; per-person accounts and roles are not built | `components/blog-studio/auth.ts`, `auth-core.ts`, `auth-actions.ts` |
| 3. Dashboard on Sanity | **Built**: the studio stays at `/sk-studio-ufn5xdafhll7`. It uses Sanity when signed in with the team password (D030), or under `npm run dev` when no sign-in is set up (D022). Not moved to `/admin/blogs` | `components/blog-studio/actions.ts`, `server.ts`, `store.ts` |
| 4. Live blog | **Built** (D024): `/blog/[slug]`, `/blog`, "Keep reading" and the sitemap include published Sanity posts; drafts never shown; 60 s ISR + on-demand revalidation on studio saves | `content/blog/live.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/layout.tsx`, `lib/sanity/image.ts` |
| 5–6. Scheduling, users page | Not built | — |
| 7. Testing | Sanity mode tested end to end on `development` (D023): 20/20 checks passed. Typecheck, build and the browser-mode flow pass. No browser requests to Sanity, no CORS errors | — |

Differences from the plan below, decided while building:
- `@sanity/client` **^7.27.0** (supports Node ≥20), not 8.x, so no Node upgrade is
  needed yet. 8.x requires Node ≥22.12.
- Env var names follow the user's `.env`: `NEXT_PUBLIC_SANITY_PROJECT_ID`,
  `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_WRITE_TOKEN`. The API version is a
  constant in `lib/sanity/client.ts` (`2026-10-20`), not an env var.
- Images are stored as plain URL strings (`cdn.sanity.io/...` or `/public` paths),
  not `{ assetId, url }`; the asset ID can be derived from the URL if needed.
- Image upload is a Server Action (`uploadStudioImageAction`) with
  `experimental.serverActions.bodySizeLimit: "4mb"` in `next.config.ts`, not a route
  handler. Server Actions get Next's built-in Origin/Host check. The action reads the file's
  bytes and accepts only a complete JPG, PNG or WebP whose signature matches the declared type
  (`lib/sanity/imageUpload.ts`); Sanity gets the detected type and a cleaned file name (D033).
- Public reads use `getSanityReadClient()`: no token, `perspective: 'published'`, `useCdn: false`.
- Images are optimised by `next/image` (hero, cards) and by Sanity's CDN parameters (article images, 1200x675 share crop) rather than `@sanity/image-url`.

### To test the Sanity connection
1. Sanity → API → Tokens: create an **Editor** token. Add `SANITY_API_WRITE_TOKEN=...`
   to `.env` (never paste it in chat or commit it). Recommended: create a
   `development` dataset and set `NEXT_PUBLIC_SANITY_DATASET=development` locally.
2. Restart `npm run dev` and open `/sk-studio-ufn5xdafhll7`. The sidebar should say
   "Saved in Sanity" and the dataset name.
3. Create a draft, upload an image, publish, unpublish (status → Draft), delete. Check in
   Sanity (Vision or the API) that drafts are `drafts.<id>` and published posts `<id>`.

### Write guard (D031)

Writes to Sanity pass `checkSanityWriteGuard()` ([lib/sanity/guard.ts](../lib/sanity/guard.ts)) every time:
`getSanityWriteClient()` runs it before returning a client, and `getStudioStorage()` runs it before a
signed-in visitor gets Sanity mode. It fails closed and never falls back to another dataset:

| Where it runs | Rule |
|---|---|
| Vercel Preview (`VERCEL_ENV=preview`) | Never writable. Sign-in is not offered either, even if the variables are present |
| Vercel Production, or any `next start` (`NODE_ENV=production`) | Project ID must be `lk42drbi`, `NEXT_PUBLIC_SANITY_DATASET` exactly `production`, a write token present, and a valid sign-in session. Otherwise a signed-in visitor sees "Publishing is blocked" and every action returns the reason: no silent browser-storage fall-back |
| `npm run dev` | Project `lk42drbi`, a valid dataset name and a token; no sign-in needed unless `STUDIO_*` is set |

Post ids must be UUIDs, documents are built from an explicit field list, an existing document of another
type under the same id is refused, and deletes only match `_type == "blogPost"`
([lib/sanity/blogPosts.ts](../lib/sanity/blogPosts.ts), [lib/sanity/postValidation.ts](../lib/sanity/postValidation.ts)).
`npm test` covers all of this against a fake Sanity client.

### Login rate limit (D031, D032)

Sign-in is its own endpoint, `POST /api/sk-studio-ufn5xdafhll7/login` (a Route Handler, not a Server Action), so a
rate-limit rule can target login attempts and nothing else. Saving, publishing, deleting and uploading are Server
Actions that all post to the studio page's own path; they are not affected by a rule on the login path. The path
repeats the studio's unguessable segment, so the endpoint cannot be found without knowing the studio URL. There is
no sign-in Server Action any more, so there is no second way to guess the password.

In-app protection stays as defence in depth: a 700 ms delay on a wrong password, 8 wrong passwords per client and
40 in total per 15 minutes per server instance (then HTTP 429 with `Retry-After`), a password of 12+ characters that is not guessable (same rule in development and Production), an
Origin check and a 1 KB body limit. Clients are counted by the address Vercel supplies: Vercel overwrites
`X-Forwarded-For` and does not forward external values to prevent spoofing (Vercel docs, "Request headers",
checked 21 October 2026); anywhere else no header is trusted. Serverless instances do not share memory, so the
shared, durable limit is a Vercel Firewall rule:

**Vercel configuration (to be done by the site owner; not set up by the code)**

1. Vercel → the project → **Firewall** → **Configure** → **+ New Rule**.
2. Name it, for example "Studio login rate limit".
3. **If** (all conditions must be true): request path **equals** `/api/sk-studio-ufn5xdafhll7/login` and request
   method **equals** `POST`.
4. **Then**: **Rate Limit**, algorithm **Fixed Window**, time window **60 s**, request limit **10**, counting key
   **IP**, action **Default (429)**. To watch first without blocking, choose **Log** and change it later.
5. **Save Rule**, then **Review Changes** → **Publish**.
6. Check: ten wrong sign-ins in a minute should end in HTTP 429 from Vercel, while saving a post still works.

Plans and pricing (Vercel docs, "WAF Rate Limiting", checked 21 October 2026): available on all plans. Hobby: 1
rate-limit rule per project (this would use it), fixed window of 10 s to 10 min, counting keys IP or JA4 digest,
1,000,000 included allowed requests. Pro: 40 rules per project, usage-based pricing (regional). Enterprise: more
keys and a token-bucket option. Counters are per region, so traffic spread over several regions can exceed the
limit in each one. No external service or dependency is needed. A durable store (Upstash Redis, Vercel KV) was
considered and not added: a new dependency, service, secrets and possibly cost, which need the owner's approval.

Facts below were checked on 20 October 2026 against npm, the Next.js 16 docs in
`node_modules/next/dist/docs/`, and the Sanity and Vercel websites (sources at
the end). Prices and plan limits change; re-check them before deciding.

---

## 1. What we are building

Chosen by the user (20 October 2026): **a custom dashboard in this Next.js app at
`/admin/blogs`. Writers sign in there and manage blog posts. The server talks to
Sanity securely.**

```
Writer's browser                   Next.js on Vercel                        Sanity
────────────────                   ─────────────────                        ──────
/admin/login  ── sign in ───────▶  Auth.js session (cookie)
/admin/blogs  ── save/publish ──▶  Server Action
                                     1. requireAdmin()   (who are you?)
                                     2. validate post    (checklist rules)
                                     3. write with token ───────────────▶  Content Lake
                                     4. revalidatePath('/blog', ...)        (documents +
/blog/<slug>  ◀── static page ───  reads published posts ◀──────────────   image assets)
```

- The SEO team never logs in to Sanity. Only the server talks to Sanity, with a
  secret token. Sanity seats are needed only for the people who own the project.
- Sanity is used as storage only: no Sanity Studio and no `sanity` package in this repo.
- The existing dashboard UI (`components/blog-studio/`) is kept and moved from
  `/sk-studio-ufn5xdafhll7` to `/admin/blogs`.

### Why these packages (and not others)

| Need | Use | Why |
|---|---|---|
| Talk to Sanity | `@sanity/client` (installed: ^7.27.0; latest is 8.10.0) | Server-side reads, writes, transactions and image uploads |
| Image URLs (optional) | `@sanity/image-url` (2.1.1) | Builds resized/cropped image URLs; plain URL parameters also work |
| Sign-in | Auth.js, `next-auth` v4 (4.24.15, stable) | Peer range includes `next ^16`; v5 is still beta (`5.0.0-beta.32`) |
| **Not** `next-sanity` | — | Version 13.3.4 lists `sanity` (the whole Studio) and `styled-components` as peer dependencies. AGENTS.md forbids extra UI libraries, and we do not embed the Studio |

Alternatives for sign-in, if the user prefers: **Clerk** (`@clerk/nextjs` 7.9.17,
supports `next ^16.0.10` and `react ~19.2.3`; hosted sign-in, invitations and
email/password, paid above its free tier) or Auth.js with an **email magic link**
(needs an email-sending service). Better Auth (1.7.12) supports Next 16 but expects
a SQL or Mongo database for users, which this project does not have.

---

## 2. Decisions needed before starting

| # | Decision | Recommendation |
|---|---|---|
| 1 | Sign-in method | Auth.js v4 with **Google sign-in**: free, no user database (JWT sessions). Every writer needs a Google account (Workspace or Gmail) |
| 2 | Who is an **admin** (publish, delete, manage users) and who is an **editor** (drafts only)? | Founder/team lead = admin; SEO team = editor. This also satisfies the AGENTS.md rule that content changes need approval |
| 3 | Sanity plan | Free plan to start (section 3.2). Upgrade only if a private dataset or more quota is needed |
| 4 | Who owns the Sanity project? | Create it with a company account (for example the founder's @sagekite.com), not a personal one |
| 5 | Vercel plan | Needed for scheduled publishing: Hobby cron jobs run **once per day** (section 9) |
| 6 | Is scheduled publishing needed at launch? | Optional. It can ship after the first launch |
| 7 | What happens to posts already written in the hidden studio? | Export them as JSON from each browser before the switch, then import (phase 3) |

---

## 3. Prerequisites (no code)

### 3.1 Node.js version

*Built with `@sanity/client` 7.27.0, which needs only Node ≥20, so this step is
deferred.* It applies when upgrading to `@sanity/client` 8 (or `sanity`/`next-sanity`).

`@sanity/client` 8 requires **Node `>=22.12.0`**. This machine runs **22.11.0**
(checked 20 October 2026), so:

- Upgrade local Node to 22.12+ (or the current LTS).
- In Vercel's project settings, set the Node.js version to one that resolves to
  22.12+ (22.x or newer). Confirm the version actually used in the build log.

### 3.2 Sanity Free plan limits that matter here

From sanity.io/pricing and the technical limits docs:

| Limit | Free plan | Our expected use (estimate) |
|---|---|---|
| Documents | 10,000 (drafts count; image asset documents do not) | ~200 posts + drafts + a few admin-user docs ≈ 400–500 |
| Assets | 100 GB | ~200–350 MB of images for 200 posts |
| Bandwidth | 100 GB / month | Low: pages are static; images served from Sanity's CDN |
| API requests | 250k / month | Low: reads at build/revalidation, writes from the dashboard |
| Datasets | 2, **public only** | `production` + `development` |
| Seats / roles | 20 seats; Administrator and Viewer only | Only project owners need seats; writers use our sign-in |
| Attributes | 2,000 unique per dataset, 1,000 per document | Our block types use a few dozen unique paths |
| Overages | Not allowed; a project can be temporarily disabled over quota | Monitor usage in sanity.io/manage |

**Public dataset = anyone can read published documents** without a token, using
the project ID. That is fine for published blog posts (they are public anyway).
Drafts stay private because of how Sanity treats IDs (section 4.2).

### 3.3 Create the Sanity project (in the browser)

1. Sign up or log in at sanity.io with the company account (decision 4).
2. Create a project, for example **"Sage Kite Blog"**. No Studio template is needed.
3. Datasets: create `production` (live) and `development` (local testing).
4. API → Tokens: create a token with **Editor** (read + write) permissions, named
   for example `nextjs-server`. Copy it once; Sanity will not show it again.
   Optionally create separate tokens for production and development.
5. API → CORS origins: **not needed.** All requests come from the server, and CORS
   only applies to browsers. Do not add origins unless browser code ever calls
   Sanity directly (it should not). *Verified 20 October 2026:* loading the studio in
   Chrome under `npm run dev` made no browser requests to `*.sanity.io` and logged no
   CORS errors; only `lib/sanity/client.ts` (marked `server-only`) imports
   `@sanity/client`. If CORS errors appear, browser code is calling Sanity: move the
   call to a Server Action rather than adding an origin. Origins are needed only for
   Sanity Studio or Vision run from a site origin (`http://localhost:3000`,
   `https://www.sagekite.com`; "Allow credentials" for the Studio). Images from
   `cdn.sanity.io` in `<img>` or `next/image` are not affected by CORS.
6. Note the **project ID** (shown in the project settings).

### 3.4 Environment variables

Add them to `.env` locally, to Vercel (Production and Preview), and document them
in `.env.example`. The project ID and dataset are public values; everything else is
**server-only** (no `NEXT_PUBLIC_` prefix).

| Variable | Example / source | Used by |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `lk42drbi` | `lib/sanity/client.ts` (in use) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` (Vercel), `development` (local) | `lib/sanity/client.ts` (in use) |
| `SANITY_API_WRITE_TOKEN` | Editor token from 3.3 step 4 | `lib/sanity/client.ts`, Server Actions, cron route (in use) |
| *(API version)* | constant `SANITY_API_VERSION = '2026-10-20'` in `lib/sanity/client.ts` | Pinned in code, not an env var |
| `NEXTAUTH_URL` | `https://www.sagekite.com` (Vercel), `http://localhost:3000` (local) | Auth.js v4 |
| `NEXTAUTH_SECRET` | random 32+ byte string | Auth.js v4 (signs session cookies) |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | Google Cloud Console OAuth client (redirect URI `/api/auth/callback/google`) | Auth.js Google provider |
| `ADMIN_BOOTSTRAP_EMAILS` | `founder@sagekite.com` | First admin(s) before any admin-user documents exist |
| `CRON_SECRET` | random 16+ character string | Scheduled publishing route (phase 5) |

The token must never reach the browser. Sanity's guidance: a token shipped in
browser JavaScript effectively makes the whole dataset public.

---

## 4. Data design in Sanity

Sanity's Content Lake is schemaless: we can write documents without a Studio schema.
The shape below is enforced by our TypeScript types and server-side validation.

### 4.1 `blogPost` document

Mirrors `StudioPost` in `components/blog-studio/types.ts`, with these changes:

| Field | In Sanity | Change from today |
|---|---|---|
| `_id` | `<uuid>` when published, `drafts.<uuid>` when draft or scheduled | Replaces `id` (section 4.2) |
| `_type` | `"blogPost"` | New |
| `blocks[]` | Each item gets `_key` (from `block.id`) and keeps `type` | Sanity array items need `_key` |
| `featuredImage` | URL string (built) | A `cdn.sanity.io` URL from an upload, a `/public` path or another URL. `data:` URLs are rejected by the save action |
| image block `src` | URL string (built) | Same as above |
| `scheduledFor` | ISO timestamp **with time zone** | Today a `datetime-local` value with no zone (section 7) |
| `savedBy` | signed-in user's email | New, for accountability |
| everything else | as in `StudioPost` | — |

Keep `slug` as a plain string. Sanity Studio's `{ current }` slug object is not needed
without the Studio.

### 4.2 Drafts and publishing with Sanity IDs

Unauthenticated reads of a public dataset only return documents whose `_id` has no
dot, so **`drafts.<uuid>` documents are private** (they need a token). The plan uses
that rule:

| Dashboard status | Documents in Sanity |
|---|---|
| Draft | `drafts.<uuid>` only |
| Scheduled | `drafts.<uuid>` only, with `status: "scheduled"` and `scheduledFor` |
| Published | `<uuid>` only (the draft is deleted in the same transaction) |
| Unpublish (Published → Draft) | write `drafts.<uuid>`, delete `<uuid>`, in one transaction |

Use a transaction (`client.transaction().createOrReplace(...).delete(...).commit()`)
so a post is never in both or neither state. Since API version `2025-02-19` the
default read perspective is `published`; the dashboard lists both kinds with a token
and `perspective: 'raw'`. Confirm perspective names in the current client docs.

### 4.3 `adminUser` document (who may sign in)

| Field | Notes |
|---|---|
| `_id` | `adminUser.<uuid>` (Sanity IDs allow only letters, digits, `.`, `_` and `-`, so an email cannot be used directly) |
| `email` | lowercased; matched against the Google account email |
| `role` | `"admin"` or `"editor"` |
| `active` | `false` removes access without deleting history |
| `name`, `addedBy`, `addedAt` | for the users page and audit |

An `_id` containing a dot (for example `adminUser.xyz`) is also private in a public
dataset. Use this so the list of admin emails is not publicly readable.

### 4.4 Queries the app needs (GROQ)

| Purpose | Query (sketch) | Client |
|---|---|---|
| Dashboard list | `*[_type == "blogPost"] \| order(savedAt desc)` | token, `perspective: 'raw'` |
| Live posts (blog, sitemap) | `*[_type == "blogPost" && !(_id in path("drafts.**")) && status == "published"]` | no token needed (public), `useCdn: false` at build |
| One live post | same filter + `&& slug == $slug][0]` | as above |
| Due scheduled posts | `*[_type == "blogPost" && _id in path("drafts.**") && status == "scheduled" && scheduledFor <= now()]` | token |
| Admin lookup | `*[_type == "adminUser" && email == $email && active == true][0]` | token |

---

## 5. Files to add or change

| File | Purpose |
|---|---|
| `lib/sanity/client.ts` | **Built:** server-only read client without token (`getSanityReadClient`) and write client (`getSanityWriteClient`). Never imported by a `'use client'` file |
| `lib/sanity/blogPosts.ts` | **Built:** mapping between `StudioPost` and the `blogPost` document (`id` ↔ `_id`, `block.id` ↔ `_key`), `drafts.` ids, `ALL_BLOG_POSTS_QUERY` |
| `components/blog-studio/server.ts` | **Built:** `getStudioStorage()` (Sanity only outside production until sign-in) and `getSitePostSummaries()`. Replace the production check with `requireAdmin()` in phase 2 |
| `lib/auth.ts` | Auth.js `authOptions` (Google provider, JWT sessions, `signIn` callback that rejects emails not in `adminUser` / `ADMIN_BOOTSTRAP_EMAILS`, role in the session) and `requireAdmin(role?)` |
| `app/api/auth/[...nextauth]/route.ts` | Auth.js route handler. `/api/` is already disallowed in `robots.ts` |
| `proxy.ts` (project root) | Next 16's renamed middleware. Redirects signed-out visitors from `/admin/*` (except `/admin/login`) to `/admin/login`. Redirect only; not the security check |
| `app/admin/layout.tsx` | `robots: { index: false, follow: false }`, `referrer: 'no-referrer'`; server-side session check |
| `app/admin/login/page.tsx` | "Sign in with Google" page; explains that access is invite-only |
| `app/admin/blogs/page.tsx` | The dashboard (moved from `app/sk-studio-ufn5xdafhll7/page.tsx`) |
| `app/admin/users/page.tsx` (optional) | Admins add/remove editors (writes `adminUser` docs) |
| `components/blog-studio/actions.ts` | **Built:** `'use server'` list, save (publish/unpublish by status), delete and image upload. Each re-checks the storage mode and validates on the server. Phase 2 adds `requireAdmin()` and role checks; later, a users action |
| ~~`app/api/admin/images/route.ts`~~ | Not needed: image upload is the `uploadStudioImageAction` Server Action (4mb body limit in `next.config.ts`) |
| `components/blog-studio/store.ts` | **Built:** `sanityStudioStore` (calls the actions, uploads inline images on save) beside `localStudioStore`; `getStudioStore(storage)` picks one. Remove the localStorage store after migration |
| `components/blog-studio/BlogStudio.tsx` | UI text: remove "Saved in this browser only" and "live site has not changed"; show the signed-in user and a sign-out button; hide Publish/Delete for editors |
| `app/blog/[slug]/page.tsx` | **Built:** renders Sanity posts with the existing `BlogArticleLayout` + `StudioArticle`; 404 for unknown/draft slugs |
| `content/blog/live.tsx` (new) | **Built:** async selectors merging code posts with published Sanity posts. The old sync selectors were removed from `content/blog/index.tsx`, which keeps the code registry |
| `app/blog/page.tsx`, `app/sitemap.ts`, `components/blog/BlogArticleLayout.tsx` | **Built:** await the async selectors; `app/blog/layout.tsx` and `app/sitemap.ts` set `revalidate = 60` |
| `components/blog/blogMetadata.ts`, `components/blog/blogJsonLd.ts` | **Built:** image URLs via `lib/sanity/image.ts` (unchanged output for `/public` paths) |
| `next.config.ts` | **Built:** `images.remotePatterns` for `cdn.sanity.io/images/<project>/**` (no query string) |
| `app/api/cron/publish-scheduled/route.ts` + `vercel.json` | Scheduled publishing (phase 5) |
| delete `app/sk-studio-ufn5xdafhll7/` | After `/admin/blogs` works |
| `package.json` | **Done:** `@sanity/client` ^7.27.0. Still to add: `next-auth` (and optionally `@sanity/image-url`) |
| docs | Update `AGENTS.md`, `docs/blog-studio.md`, `.env.example`, `decision.md` |

---

## 6. Phases

Rough estimates for one developer; they are guesses, not measurements.

### Phase 0 — Prerequisites (0.5 day)
Sections 2 and 3: decisions, Node upgrade, Sanity project, datasets, token, Google
OAuth client, environment variables.

### Phase 1 — Sanity connection (1 day)
- Add `@sanity/client`; create `lib/sanity/client.ts` and `lib/sanity/posts.ts`.
- Mapping `StudioPost` ↔ `blogPost` (section 4), with a round-trip test on the
  `development` dataset: save → read → identical post.
- Done when a post can be created, listed, published, unpublished and deleted on
  `development` from a temporary server script or action.

### Phase 2 — Sign-in and admin access (1–2 days)
- Auth.js v4 with Google; JWT sessions; `signIn` callback allows only active
  `adminUser` emails or `ADMIN_BOOTSTRAP_EMAILS`.
- `requireAdmin(role?)` reads the session and **re-checks the `adminUser` document**
  (so removing someone takes effect immediately, not when their cookie expires).
- `proxy.ts` redirect for `/admin/*`; the Next 16 proxy docs say to verify auth inside
  every Server Function too, because a matcher change can silently remove coverage.
- `app/admin/layout.tsx` (noindex, no-referrer) and `/admin/login`.
- Done when: signed-out visitors are redirected; a Google account not on the list is
  refused; an editor cannot publish or delete, even by calling the action directly.

### Phase 3 — Dashboard on Sanity (2 days)
- Move the dashboard to `app/admin/blogs/page.tsx`.
- `components/blog-studio/actions.ts` with server-side validation (slug pattern,
  slug not used by a code post or another Sanity post, required checklist items
  before publish, role check).
- Image uploads: keep the browser resize to 1600px WebP in `store.ts`, but send the
  **Blob** to `app/api/admin/images/route.ts` instead of storing a data URL. Two
  limits make this necessary: Server Action bodies are capped at 1 MB by default
  (`serverActions.bodySizeLimit`), and Vercel Functions cap request bodies at
  **4.5 MB on all plans**. Reject files that are still too large after resizing.
- Swap `studioStore` to the Sanity store; update UI text and role-based buttons.
- Migration: export JSON from each browser that used the hidden studio, import
  through the new dashboard (re-uploading any `data:` images first), then delete
  `app/sk-studio-ufn5xdafhll7/`.
- Done when two people on different devices see the same posts.

### Phase 4 — Posts on the live blog (3–4 days)
- `app/blog/[slug]/page.tsx` for Sanity posts (in Next 16, `params` is a Promise:
  `const { slug } = await params`), using `buildBlogMetadata`, `BlogArticleLayout`
  and `StudioArticle`, plus `toBlogFields()` for guide, FAQs and reading time.
- Code posts keep their folders. Static folders should take precedence over `[slug]`;
  the bundled App Router docs do not state this, so test it. The dashboard already
  refuses slugs used by code posts.
- Async selectors in `content/blog/index.tsx`; update `/blog`, sitemap and related posts.
- Image URL fixes in metadata/JSON-LD; `remotePatterns` for `cdn.sanity.io`.
- After each publish/unpublish/delete, call `revalidatePath` for `/blog`,
  `/blog/<slug>` and `/sitemap.xml` (`revalidatePath` works in Server Functions and
  Route Handlers; `revalidateTag` now needs two arguments, e.g. `revalidateTag(tag, 'max')`).
- Featured post: only one may be featured site-wide. `what-is-dubsado` is
  `featured: true` in code today; decide which wins and enforce it in one place.
- Done when a post published in the dashboard appears on `/blog`, at `/blog/<slug>`
  and in `/sitemap.xml` without a redeploy, and passes `docs/new-page-checklist.md`.

### Phase 5 — Scheduled publishing (0.5–1 day, optional)
- `app/api/cron/publish-scheduled/route.ts`: checks
  `Authorization: Bearer ${CRON_SECRET}` (Vercel sends it automatically when
  `CRON_SECRET` is set), publishes due drafts (section 4.4) with the same
  transaction as phase 3, then revalidates.
- `vercel.json` cron entry. **Hobby plans run cron once per day**, and a daily job can
  fire any time within its hour. On Hobby, a scheduled post can go live up to about a
  day late. Paid plans allow more frequent schedules; check Vercel's current limits.
- Do not trust the `user-agent` or `x-vercel-cron-schedule` headers; only `CRON_SECRET`.

### Phase 6 — Users page (0.5 day, optional)
`/admin/users` for admins: add an email with a role, deactivate a user. Until then,
users are added as `adminUser` documents with a one-off script or through
`ADMIN_BOOTSTRAP_EMAILS`.

### Phase 7 — Testing and launch (1–2 days)
- Typecheck and build pass; run the full flow on `development`, then on `production`.
- Security checks: signed-out request to every action and route returns an error;
  an editor's direct call to publish/delete fails; the token is absent from all
  browser JavaScript (search the built client bundles for the token value);
  `drafts.*` and `adminUser.*` documents are not readable without a token.
- Live checks from `docs/new-page-checklist.md` on a published dashboard post.
- Update AGENTS.md (where things live, known gaps, do-not rules), `docs/blog-studio.md`,
  `.env.example` and `decision.md`.

**Total: about 8–12 working days**, or 6.5–10 without phases 5 and 6.

---

## 7. Details that are easy to get wrong

- **Time zones:** `<input type="datetime-local">` has no zone (e.g. `2026-11-01T09:00`)
  and Vercel servers run in UTC. Convert in the browser (`new Date(value).toISOString()`)
  before sending.
- **Server-side validation:** the checklist runs in the browser and can be bypassed.
  The Server Actions must repeat the rules that matter (slug format and uniqueness,
  required fields before publish, role).
- **Never send `data:` images** in post JSON: they hit the 1 MB action limit and
  bloat documents. Upload first and store the URL.
- **`useCdn`:** use `useCdn: false` when reading right after a write and at build
  time, so pages do not get stale cached data.
- **Pin `apiVersion`** to a fixed date. Changing it can change query behaviour (for
  example the default perspective change on 2025-02-19).
- **Deleting images:** deleting a post does not delete its image assets. Clean up
  unused assets occasionally, or delete them when a post is deleted.
- **Analytics:** the GA tag in `app/layout.tsx` loads on `/admin/*` too. It is
  harmless with sign-in, but admin page views will appear in GA unless excluded.
- **Content approval:** AGENTS.md requires approval for website content changes. The
  admin/editor split (decision 2) is how dashboard publishing fits that rule; confirm
  it with the user before launch.

---

## 8. What stays the same

- The 8 existing posts in `app/blog/<slug>/` stay in code and keep working unchanged.
- Brand rules (`docs/brand.md`), SEO rules (`docs/blog-seo-schema.md`) and the content
  standard (`docs/content-standard.md`) apply to dashboard posts as well.
- The dashboard's UI, block types, checklist and preview (`docs/blog-studio.md`)
  carry over; only storage, routing and sign-in change.

---

## Sources (checked 20 October 2026)

- npm registry: `@sanity/client` 8.10.0 (`engines.node >=22.12.0`), `sanity` 6.20.0,
  `next-sanity` 13.3.4 (peers `next ^16`, `sanity`, `styled-components`),
  `@sanity/image-url` 2.1.1, `next-auth` 4.24.15 (peer `next ... ^16`; beta 5.0.0-beta.32),
  `@clerk/nextjs` 7.9.17, `better-auth` 1.7.12.
- Next.js 16 docs bundled in `node_modules/next/dist/docs/01-app/`: `proxy.md`
  (middleware renamed; verify auth in each Server Function), `revalidatePath.md`,
  `revalidateTag.md`, `server-actions.md` and `serverActions.md` (1 MB body limit),
  `dynamic-routes.md` (`params` is a Promise), `cookies.md` (async).
- [Sanity pricing](https://www.sanity.io/pricing)
- [Sanity technical limits](https://www.sanity.io/docs/content-lake/technical-limits)
- [Sanity: Keeping your data safe](https://www.sanity.io/docs/content-lake/keeping-your-data-safe)
- [Sanity roles](https://www.sanity.io/docs/user-guides/roles)
- [Vercel cron jobs: usage and pricing](https://vercel.com/docs/cron-jobs/usage-and-pricing)
- [Vercel: Managing cron jobs](https://vercel.com/docs/cron-jobs/manage-cron-jobs)
- [Vercel Functions limits](https://vercel.com/docs/functions/limitations)
