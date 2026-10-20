# Blog studio: the admin panel for uploading blog posts

What the blog studio is, how it works today, where every piece of code lives,
and how to add a database (Supabase or Sanity), authentication and admin access
later. Written for AI coding assistants and developers with no prior context.

Read [AGENTS.md](../AGENTS.md) first. The decision record is
[decision.md](../decision.md) **D019**. When this doc and the code disagree, the
code wins; fix this doc in the same change.

---

## 1. Status at a glance

The studio is a **frontend only** admin panel. It was built on 20 October 2026
from a prototype the user supplied (a "GHL Scale Up" blog CMS demo), restyled
with Sage Kite brand tokens and adapted to this site's blog rules.

| Area | State today |
|---|---|
| Writing, editing, previewing, checking posts | Works |
| Saving | Browser `localStorage` only (one browser, one device) |
| Images | Uploaded images are stored inside the post as WebP data URLs |
| Publishing to sagekite.com | **Not built.** "Published" and "Scheduled" are labels only |
| Studio posts on `/blog`, sitemap, JSON-LD | **Not built** |
| Authentication / admin accounts | **None.** Protected only by an unlisted URL |
| Backend (Supabase / Sanity) | **None.** The user has not chosen one yet |

Nothing saved in the studio can change the live site today.

---

## 2. Access and how the URL is hidden

- URL: **`/sk-studio-ufn5xdafhll7`** (local: `http://localhost:3000/sk-studio-ufn5xdafhll7`).
  The path segment is random so it cannot be guessed.
- No login. The user chose "hidden URL only" (D019) after being told the risk.
- The page metadata (in `app/sk-studio-ufn5xdafhll7/page.tsx`) sets:
  - `robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } }`
  - `referrer: 'no-referrer'`, so links clicked inside the studio do not send its URL to other sites.
  - No canonical, no Open Graph.
- It is **not** in `app/sitemap.ts`, and nothing on the site links to it.
- It is **deliberately not** in `app/robots.ts`. robots.txt is public, so a
  `Disallow` line would advertise the path. Do not add it.
- Known leak: the Google Analytics tag in `app/layout.tsx` loads on every page,
  including this one, so the path is recorded in GA.

**An unlisted URL is not security.** It is acceptable only while the studio
cannot write to the live site. Add authentication (section 8) before connecting
any backend that publishes.

---

## 3. Where the code lives

```
app/sk-studio-ufn5xdafhll7/
  page.tsx                  Server component. Sets the noindex/no-referrer metadata, reads the
                            code-based posts from content/blog (non-draft only) and passes
                            summaries, CATEGORIES, PLATFORM_PAGE_SLUGS, AUTHOR and AUTHOR_IMAGE
                            to <BlogStudio>. The comment at the top records why it is unlisted.

components/blog-studio/
  types.ts                  StudioPost, StudioBlock (union of block types), StudioStatus,
                            SitePostSummary. The data model (section 4).
  store.ts                  StudioStore interface + localStudioStore (localStorage) +
                            the exported `studioStore` the UI uses. The ONLY file to change
                            when a backend is added (section 9).
  postUtils.ts              Pure helpers, no React: slugify, ids, today(), emptyPost, newBlock,
                            BLOCK_LABELS, inline-format regexes (INLINE_PATTERN, LINK_PATTERN,
                            stripInline, safeHref), list/table parsing, youtubeId,
                            resolveBlocks (auto FAQ heading), headingAnchors, buildGuide,
                            buildFaqs, wordCount, readingTime, googleTitle, postUrl,
                            checklist() (the publishing rules) and toBlogFields().
  StudioArticle.tsx         Renders blocks as plain HTML elements (h2, h3, p, ul/ol, figure,
                            blockquote, table, iframe, hr) that the existing .article-content
                            styles format. No hooks and no 'use client', so a future server
                            route can reuse it to render studio posts on the live site.
  BlogStudio.tsx            'use client'. The whole UI: BlogStudio (state, save/publish logic),
                            PostList, Editor, BlockCard, AddBlockMenu, FormatTextarea,
                            ImageField, Field, Checklist, CreateModal, ConfirmModal, Preview.
  BlogStudio.module.css     Studio styles. Brand tokens only (var(--…)); tints are made with
                            color-mix from tokens; font is var(--sans). The preview uses the
                            live site's global .article-* classes from app/globals.css.
```

The studio reuses, and does not modify:

| Existing file | Used for |
|---|---|
| `content/blog/index.tsx` (`posts`, `CATEGORIES`) | Read-only list of code posts; category options |
| `content/blog/types.ts` (`BlogFaq`, `BlogGuideItem`) | Types returned by `buildFaqs` / `buildGuide` |
| `content/blog/authors.ts` | Default author name and avatar |
| `content/platforms.ts` (`PLATFORM_PAGE_SLUGS`) | "Related platform" options |
| `components/blog/BlogGuide.tsx` | The real sidebar guide inside the preview |
| `components/blog/formatDate.ts` | Dates in the list and preview |
| `app/globals.css` `.article-*` classes | Preview looks like a live post |

No other files were changed for the studio, apart from the docs:
[AGENTS.md](../AGENTS.md), [decision.md](../decision.md) and this file.

---

## 4. Data model

### 4.1 `StudioPost` (`components/blog-studio/types.ts`)

It mirrors `BlogPost` in `content/blog/types.ts`, but the article is a list of
blocks (JSON) instead of a JSX function, so any backend can store it.

| Field | Type | Notes |
|---|---|---|
| `id` | string | `crypto.randomUUID()` when available |
| `slug` | string | `/blog/<slug>`. Auto-filled from the title until edited; **locked once `firstPublishedAt` is set** |
| `title` | string | The H1 |
| `seoTitle` | string | Optional shorter Google title; `''` means "use title". ` \| Sage Kite` is appended on the site |
| `excerpt` | string | Card text **and** meta description (the site uses one field for both) |
| `category` | string | One of `CATEGORIES` |
| `author`, `authorImage` | string | Default `AUTHOR` / `AUTHOR_IMAGE` |
| `status` | `'draft' \| 'published' \| 'scheduled'` | |
| `publishedAt` | `YYYY-MM-DD` or `''` | Set to today on first publish if empty; for scheduled posts, the date part of `scheduledFor` |
| `updatedAt` | `YYYY-MM-DD` or `''` | Set to `publishedAt` on first publish if empty; a "Today" button sets it |
| `scheduledFor` | `datetime-local` string or `''` | **No time zone** (see 9.4) |
| `featuredImage` | string | `/public` path, `https://` URL, or `data:image/webp;base64,…` from an upload |
| `imageAlt` | string | |
| `tags` | string[] | Comma-separated in the UI |
| `focusKeyword` | string | Editorial hint for the checklist only; never output on a page |
| `relatedPlatform` | string | `''` or a platform page slug |
| `featured` | boolean | Saving a featured post unfeatures other **studio** posts |
| `blocks` | `StudioBlock[]` | The article |
| `firstPublishedAt` | ISO timestamp, optional | Set on first publish or schedule; locks the slug |
| `createdAt`, `savedAt` | ISO timestamps | `savedAt` updates on every save |

### 4.2 Block types (`StudioBlock`)

| `type` | Fields | Renders as |
|---|---|---|
| `heading` | `level: 2 \| 3`, `text` | `<h2 id>` / `<h3 id>`; ids from `headingAnchors()` (slugified text, `-2`, `-3` for duplicates) |
| `text` | `text` | One `<p>` per non-empty line |
| `list` | `ordered`, `items` | `<ul>`/`<ol>`, one `<li>` per line; pasted `-`, `*`, `•`, `1.` markers are removed |
| `image` | `src`, `alt`, `caption` | `<figure><img alt title></figure>` + optional `<figcaption>` |
| `quote` | `text`, `cite` | `<blockquote>`; cite rendered as `— name` |
| `table` | `rows` | One row per line, cells split on `\|`, first row is `<thead>` |
| `video` | `url`, `title` | `<iframe>` to `youtube-nocookie.com/embed/<id>`; accepts watch, youtu.be, embed, shorts, live links |
| `faq` | `question`, `answer` | `<h3>` + `<p>` per line; also feeds `buildFaqs()` |
| `divider` | — | `<hr>` |

**Inline formatting** in paragraphs, list items, quotes, captions, table cells
and FAQ answers: `**bold**`, `*italic*`, `[text](url)`. Link URLs may contain one
level of parentheses. Only `/path`, `#anchor`, `http(s)://` and `mailto:` links
are rendered as links (`safeHref`); anything else, for example `javascript:`,
renders as plain text. External links (not `https://www.sagekite.com…`) get
`target="_blank" rel="noopener noreferrer"`. Content is rendered as React
elements; there is no `dangerouslySetInnerHTML`.

**Automatic FAQ heading:** if a post has FAQ blocks and the block before the
first one is not a heading, `resolveBlocks()` inserts an H2
"Frequently asked questions" (id `frequently-asked-questions`) at render time.
It is not stored in `blocks`.

### 4.3 Derived `BlogPost` fields

`toBlogFields(post)` in `postUtils.ts` returns `{ guide, faqs, readingTime }`:

- `guide`: every non-empty H2 (including the automatic FAQ heading) as `{ id, title }`.
  The ids match the rendered heading ids, as `docs/blog-seo-schema.md` requires.
- `faqs`: `{ q, a }` with inline markers removed and answer lines joined by spaces.
- `readingTime`: words / 225, rounded up, at least 1: `"N min read"`.

`toBlogFields` is **not called anywhere yet**. It exists for the step that puts
studio posts on the live site (section 10).

---

## 5. Features (what the UI actually does)

### Post list
- Stat cards and status tabs: All posts, Published, Drafts, Scheduled, with counts.
- Search (title, slug, category), category filter, source filter
  ("Written in the studio" / "Already on the site").
- The existing code posts (non-draft posts from `content/blog`) are listed
  read-only with an "In code" tag and a link to the live page, so writers can
  see which slugs are taken. Counts include them.
- Studio posts show "Ready" or "N to review" (failed checklist items).
- Row actions for studio posts: Edit, Preview, Duplicate (new draft, title
  "(copy)", slug `-copy`, unfeatured, unlocked), Delete (with confirmation).
- Export downloads all studio posts as `sage-kite-blog-studio-YYYY-MM-DD.json`.
  Import reads such a file; posts with an existing `id` are replaced after a confirmation.
- Responsive: under 720px the table becomes one card per post; under 900px the
  sidebar collapses to a top bar. No horizontal page scroll at 390px.

### Editor (right-hand drawer)
- **Content tab:** title (character count), slug (`/blog/` prefix, lock icon once
  published), category, author, excerpt/meta description (count out of 160), featured
  image (path/URL or upload) with alt text, and the block builder.
- **Block builder:** add blocks at the end or below any block (`+`), move up and down,
  remove. Word count and reading time are shown. Paragraph, list, quote and FAQ-answer
  fields have Bold / Italic / Link buttons that wrap the selection in the markers.
- **SEO tab:** SEO title with a count of the full Google title out of 60, meta
  description (the same `excerpt` value), tags, focus keyword, read-only canonical URL,
  a Google result preview and a social share preview.
- **Settings tab:** status, "Publish on" date and time (scheduled only), published date,
  last updated (with a "Today" button), related platform, featured checkbox (the hint
  names the post currently featured in code).
- **Sidebar:** the guide outline (H2s with their `#id`, H3s indented; click to jump to the
  block), the checklist, Preview and Delete buttons.
- Buttons by status: Draft → "Save draft" and "Publish"; Scheduled → "Save schedule";
  Published → "Save changes".
- `Cmd/Ctrl + S` saves with the current status. Closing with unsaved changes asks to
  discard; leaving the page with unsaved changes triggers the browser's warning.
  Clicking the dark backdrop closes the drawer (with the same check).
- A new post is not stored until its first save.

### Saving rules (`commit()` in `BlogStudio.tsx`)
- Every save needs a title.
- Saving as a draft skips the checklist, so drafts may have duplicate or empty slugs.
- Publishing or scheduling is **blocked** until every required checklist item passes.
- If recommended items fail **when the status changes** (for example, Draft to Published),
  a dialog lists them with "Publish anyway" / "Schedule anyway". Later saves of an
  already-published post do not show the dialog.
- Success messages say the live site has not changed.

### Checklist (`checklist()` in `postUtils.ts`)

Required (blocks publishing): title; slug matches `^[a-z0-9]+(?:-[a-z0-9]+)*$`; slug
not used by a code post or another studio post; excerpt; category; featured image;
featured image alt text; at least one non-divider block; scheduled date (scheduled only).

Recommended (warns): meta description 70–160 characters; Google title (title or SEO
title + ` | Sage Kite`) 60 characters or fewer; at least one H2; 3–6 tags; every image
has a source and alt text; every FAQ has a question and an answer; every video is a valid
YouTube link; if a focus keyword is set, it appears in the Google title, the meta
description, a heading and the first line of the first paragraph block; no HTML entities
like `&amp;` in title, SEO title, excerpt, alt text or tags; no `glasspane.pages.dev` links.

### Preview
- Full page (not a modal) so the real `BlogGuide` scrolling works. A sticky bar says
  "Preview · <status> · not on the live site"; "Back to editor" or `Escape` returns.
- Uses the live markup and classes: category chip, H1, excerpt, byline with avatar,
  date and reading time, 16:9 hero image, `.article-content`, guide sidebar, tags.
- It does not render the site header and footer, related posts or the booking CTA; a
  note says these appear on the live page.

### Images (`localStudioStore.uploadImage`)
- JPG, PNG or WebP, up to 8 MB. Resized in the browser to at most 1600px wide and
  re-encoded as WebP at quality 0.82, then stored as a data URL inside the post.
- Paths and URLs can be typed instead of uploading.
- The studio uses plain `<img>` (not `next/image`) because sources can be data URLs or
  any external URL, which `next/image` would reject without `remotePatterns`.

---

## 6. How saving works today

- Key: `localStorage['sk-blog-studio:v1']`, a JSON array of `StudioPost`.
- `list()` returns the array; `save()` replaces by `id` or adds at the front;
  `remove()` filters by `id`. All methods are `async` so a network store fits the same interface.
- Browsers allow roughly 5 MB per site for localStorage. Uploaded images use most of it.
  When storage is full, the save fails with a message suggesting image paths and an export.
- Posts are visible only in the browser that saved them. Clearing site data deletes
  them. **Export is the only backup.**

---

## 7. Rules for anyone changing the studio

- Keep the URL out of `robots.ts`, `sitemap.ts` and every page (AGENTS.md "Do not").
- Brand rules apply: `var(--…)` tokens only, no hex, no other fonts, no Tailwind
  (docs/brand.md).
- Keep `StudioArticle.tsx` free of hooks and `'use client'`, so it can render on the server.
- Keep the publishing rules in `checklist()` in line with `docs/blog-seo-schema.md`
  and `docs/new-page-checklist.md`. If those docs change, update `checklist()`.
- UI code must talk to `studioStore` only, never to `localStorage` or a backend directly.
- When you change how the studio works, update this file, AGENTS.md and decision.md.
- Verify: `npx tsc --noEmit`, `npm run build`, then open the studio and run the flow:
  create, add blocks, publish, preview, reload. Check that the page still has
  `noindex` and `no-referrer` in its source.

---

## 8. Adding authentication and admin access

Do this **before** any backend can publish. Recommended order: authentication,
then the backend store (section 9), then rendering on the live site (section 10).

### 8.1 Principles (from the Next.js 16 docs in `node_modules/next/dist/docs/`)

- Next.js 16 renamed `middleware.ts` to **`proxy.ts`** (export `proxy`). Use it only
  to redirect signed-out visitors away from the studio.
- The proxy docs say to **verify authentication and authorisation inside every Server
  Function** rather than relying on the proxy alone, because a matcher change can
  silently remove its coverage. So every server action that reads or writes studio
  data must call a `requireAdmin()` check itself.
- `cookies()` is async in Next 16: `const cookieStore = await cookies()`.
- Keep every secret (Supabase service role key, Sanity write token, auth secrets)
  server-only: no `NEXT_PUBLIC_` prefix, never imported into a `'use client'` file.
  Add the variables to `.env.example` and Vercel; this site currently has only
  `NEXT_PUBLIC_GHL_WEBHOOK_URL`.

### 8.2 Who counts as an admin

Choose one, and keep it outside the client bundle:

1. **Admin table (recommended with Supabase):** an `admin_users` table keyed by the
   auth user id, with a role (`admin` can delete and publish; `editor` can write drafts).
   Granting access means inserting that person's user id. SQL is in 9.2.
2. **Allowlist environment variable:** `STUDIO_ADMIN_EMAILS="a@sagekite.com,b@agency.com"`,
   checked in `requireAdmin()`. Simple, but changing it needs a redeploy.
3. **Provider roles:** with Clerk or Auth.js, store a role in user metadata or a session
   callback and check it in `requireAdmin()`.

Roles are not modelled in the current UI. If you add them, hide Delete and Publish for
editors **and** enforce the same rule in the server actions.

### 8.3 Choosing an auth provider

| Option | Fits when | Notes |
|---|---|---|
| Supabase Auth | Supabase is the database | Same project for users, posts and images; row level security can use `auth.uid()` |
| Auth.js (NextAuth) | Sanity is the CMS, or no vendor lock-in is wanted | Email magic link or Google sign-in; you write the role check |
| Clerk | Hosted sign-in UI and user management are wanted | Paid tiers; organisation and role features |
| Sanity Studio's own login | Replacing this UI with Sanity Studio | Sanity manages its own members; see 9.3 |

Check each provider's current docs for Next.js 16 support before installing. None
is installed today; the only dependencies are next, react, react-dom and lucide-react.

### 8.4 Sketch: Supabase Auth

These sketches are **untested**. Confirm APIs against the current
`@supabase/supabase-js` and `@supabase/ssr` docs.

```ts
// lib/supabase/server.ts — server-side client bound to the request cookies
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // or the newer "publishable" key
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (list) => {
          try {
            list.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // Called from a Server Component, where cookies cannot be set. Safe to ignore
            // if the proxy refreshes the session.
          }
        },
      },
    },
  );
}
```

```ts
// components/blog-studio/auth.ts — the check every studio server action calls
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser(); // validates with Supabase, not just the cookie
  if (!user) throw new Error('Not signed in.');
  const { data: admin } = await supabase
    .from('admin_users')
    .select('role')
    .eq('user_id', user.id)
    .maybeSingle();
  if (!admin) throw new Error('This account does not have studio access.');
  return { supabase, user, role: admin.role as 'admin' | 'editor' };
}
```

```ts
// proxy.ts (project root) — redirect only; the real check is requireAdmin()
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  // Refresh the Supabase session cookie here (see @supabase/ssr docs), then:
  const signedIn = request.cookies.getAll().some((c) => c.name.startsWith('sb-'));
  if (!signedIn) {
    return NextResponse.redirect(new URL('/sk-studio-ufn5xdafhll7/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/sk-studio-ufn5xdafhll7', '/sk-studio-ufn5xdafhll7/((?!login).*)'],
};
```

Then:
- Add a login page at `app/sk-studio-ufn5xdafhll7/login/page.tsx` (email magic link
  or password), also with `robots: { index: false }`.
- In `app/sk-studio-ufn5xdafhll7/page.tsx`, call `requireAdmin()` (or check the user)
  and `redirect()` to login when it fails, so the UI never renders for non-admins.
- Disable public sign-ups in Supabase, or rely on `admin_users`: a signed-up user who
  is not in that table gets no access.
- With real auth in place, the path may be renamed (for example `/admin`). Keep
  `noindex` and keep it out of robots.txt and the sitemap.

---

## 9. Adding a backend store

### 9.1 How it plugs in

The UI calls only the `StudioStore` interface in `components/blog-studio/store.ts`:

```ts
interface StudioStore {
  readonly label: string;               // shown in the UI, e.g. 'Supabase'
  list(): Promise<StudioPost[]>;
  save(post: StudioPost): Promise<void>;
  remove(id: string): Promise<void>;
  uploadImage(file: File): Promise<string>; // returns the URL to store in src
}
```

Recommended shape for both Supabase and Sanity:

1. Write **Server Actions** (`'use server'`) that call `requireAdmin()`, validate input
   on the server and talk to the backend with server-only credentials.
2. Write a client-side `StudioStore` whose methods call those actions.
3. Change the last line of `store.ts` to `export const studioStore = <new store>;`.

```ts
// components/blog-studio/actions.ts — sketch
'use server';
import { revalidatePath } from 'next/cache';
import { posts as codePosts } from '@/content/blog';
import { SLUG_PATTERN } from './postUtils';
import { requireAdmin } from './auth';
import type { StudioPost } from './types';

export async function saveStudioPostAction(post: StudioPost) {
  const { role } = await requireAdmin();
  // The browser checklist can be bypassed, so repeat the important rules here.
  if (!SLUG_PATTERN.test(post.slug)) throw new Error('Invalid slug.');
  if (codePosts.some((p) => p.slug === post.slug)) throw new Error('Slug is used by a code post.');
  if (post.status !== 'draft' && role !== 'admin') throw new Error('Only admins can publish.');
  // ...write to Supabase or Sanity (9.2 / 9.3)...
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath('/sitemap.xml');
}
```

```ts
// in store.ts — sketch
import { saveStudioPostAction, listStudioPostsAction, deleteStudioPostAction, uploadImageAction } from './actions';

export const serverStudioStore: StudioStore = {
  label: 'the shared database',
  list: () => listStudioPostsAction(),
  save: (post) => saveStudioPostAction(post),
  remove: (id) => deleteStudioPostAction(id),
  async uploadImage(file) {
    const form = new FormData();
    form.append('file', file);
    return uploadImageAction(form);
  },
};
```

Notes:
- `revalidatePath(path, type?)` runs in Server Functions and Route Handlers.
  `revalidateTag` now takes two arguments (`revalidateTag(tag, 'max')`); the
  one-argument form is deprecated. `updateTag` also exists. Read
  `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/` before choosing.
- **Server Action bodies are capped at 1 MB by default** (`serverActions.bodySizeLimit`
  in `next.config.ts`). Upload images separately and store their URL in the post.
  Never send `data:` images inside the post JSON.
- Once images live on a backend, `uploadImage` should return that URL. The browser
  resize-to-WebP step in `store.ts` (`toWebpDataUrl`) can be kept to shrink files before
  upload, by converting its output to a Blob.
- The "Saved in this browser only" sidebar note and the "live site has not changed"
  messages in `BlogStudio.tsx` must be updated when publishing really happens.

### 9.2 Supabase

Sketch schema. Columns needed for queries are stored separately from the full post JSON:

```sql
create table public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  created_at timestamptz not null default now()
);

create table public.studio_posts (
  id uuid primary key,
  slug text not null unique,
  status text not null check (status in ('draft', 'published', 'scheduled')),
  published_at date,
  scheduled_for timestamptz,
  featured boolean not null default false,
  post jsonb not null,                 -- the full StudioPost
  saved_at timestamptz not null default now(),
  saved_by uuid references auth.users (id)
);

alter table public.admin_users enable row level security;
alter table public.studio_posts enable row level security;

-- Signed-in users can see their own admin row (needed by the policies below).
create policy "read own admin row" on public.admin_users
  for select to authenticated using (user_id = auth.uid());

-- Admins and editors can read and write every post.
create policy "studio users manage posts" on public.studio_posts
  for all to authenticated
  using (exists (select 1 from public.admin_users a where a.user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users a where a.user_id = auth.uid()));

-- The public site may read live posts only.
create policy "public reads live posts" on public.studio_posts
  for select to anon
  using (status = 'published' or (status = 'scheduled' and scheduled_for <= now()));
```

- Grant access: create the user in Supabase Auth, then
  `insert into public.admin_users (user_id, role) values ('<auth user id>', 'admin');`
- Images: a Supabase Storage bucket (for example `blog-images`) with public read and
  upload restricted to admin users; `uploadImageAction` uploads and returns the public URL.
- Draft slugs: `slug` is `unique`, but the current UI allows duplicate slugs in drafts.
  Either relax the constraint to live posts only, or make the UI require a unique slug
  on every save.
- The row and the `post` JSON both hold `slug`, `status` and so on; write both from one
  place so they cannot drift.

### 9.3 Sanity

Two possible approaches:

- **A. Keep this UI, store in Sanity.** Define a `studioPost` document type whose fields
  mirror `StudioPost`, with `blocks` as an array of objects. Sanity array items need a
  `_key`, so map `block.id` to `_key` when saving and back when loading. Use
  `@sanity/client` (or `next-sanity`) **on the server only** with a write token. In the
  server actions, use `client.createOrReplace({ _id: post.id, _type: 'studioPost', ... })`,
  `client.delete(id)` and `client.assets.upload('image', file)` (store the returned asset
  URL). Read with GROQ, for example
  `*[_type == "studioPost" && status == "published"]`. Confirm these calls against the
  current Sanity client docs.
- **B. Replace this UI with Sanity Studio.** Sanity hosts its own editor and login.
  Only `StudioArticle` and the mapping in section 10 would be reused; you would rebuild
  the checklist rules as Sanity validation rules. Bigger change; decide with the user first.

Cautions:
- A **public** Sanity dataset can be read without a token, which would expose drafts.
  Use a private dataset with a read token on the server, or accept that drafts are public.
- Sanity has no login for this site's own pages. With approach A you still need
  section 8 (Auth.js, Clerk or Supabase Auth) to protect the studio.
- Allow `cdn.sanity.io` in `images.remotePatterns` (section 10).

### 9.4 Things both backends must handle

- **Time zones:** `scheduledFor` is a `datetime-local` value with no zone, for example
  `2026-11-01T09:00`. On Vercel the server runs in UTC, so convert it in the **browser**
  (`new Date(value).toISOString()`) before sending it, and store a `timestamptz` / ISO string.
- **Moving existing browser posts:** export JSON from each browser that has posts, then
  import it once the new store is live. Import calls `save()` for each post. Re-upload any
  `data:` images and replace their `src` first; they are too big for Server Actions and
  should not live in the database.
- **Featured:** the studio unfeatures other studio posts, but `what-is-dubsado` is
  `featured: true` in code. When studio posts go live, decide which source wins, or
  remove the flag from the code post. AGENTS.md: only one post may be featured.

---

## 10. Showing studio posts on the live site (not built)

What has to change. None of this exists yet.

1. **Map a studio post to a `BlogPost`:**
   ```tsx
   // sketch
   import { StudioArticle } from '@/components/blog-studio/StudioArticle';
   import { toBlogFields } from '@/components/blog-studio/postUtils';

   function toBlogPost(p: StudioPost): BlogPost {
     return {
       slug: p.slug, title: p.title, seoTitle: p.seoTitle || undefined, excerpt: p.excerpt,
       category: p.category, author: p.author, authorImage: p.authorImage || undefined,
       publishedAt: p.publishedAt, updatedAt: p.updatedAt || undefined,
       featuredImage: p.featuredImage, imageAlt: p.imageAlt, tags: p.tags,
       relatedPlatform: p.relatedPlatform || undefined, featured: p.featured,
       ...toBlogFields(p),
       content: () => <StudioArticle blocks={p.blocks} />,
     };
   }
   ```
2. **Merge with code posts.** The selectors in `content/blog/index.tsx`
   (`getPublishedPosts`, `getFeaturedPost`, `getRestPosts`, `getPostBySlug`,
   `getUsedCategories`) are synchronous today. They are used by `app/blog/page.tsx`,
   `app/sitemap.ts` and `components/blog/BlogArticleLayout.tsx` (related posts). Fetching
   studio posts makes them async, so update every caller.
3. **Route:** add `app/blog/[slug]/page.tsx` that loads the studio post and renders
   `<BlogArticleLayout post={toBlogPost(p)}><StudioArticle blocks={p.blocks} /></BlogArticleLayout>`,
   with `generateMetadata` using `buildBlogMetadata`. In Next 16 `params` is a Promise
   (`const { slug } = await params`). Use `generateStaticParams` and `dynamicParams` as
   needed. Code posts keep their own folders. Static folders are expected to take
   precedence over `[slug]`; this is not confirmed in the bundled App Router docs, so
   test it. The studio already refuses slugs used by code posts.
4. **External images break three places that assume a `/public` path:**
   `components/blog/blogMetadata.ts` (`${SITE_URL}${post.featuredImage}` for og:image),
   `components/blog/blogJsonLd.ts` (Article `image` and author `image`), and `next/image`
   in `BlogArticleLayout.tsx`, `BlogCard.tsx` and `FeaturedBlog.tsx`, which needs the host
   in `images.remotePatterns` in `next.config.ts`. Prefix `SITE_URL` only when the path
   starts with `/`.
5. **Freshness:** call `revalidatePath` from the save action (9.1) so `/blog`, the post and
   `/sitemap.xml` update without a redeploy. Scheduled posts also need the read query to
   filter on `scheduled_for <= now()` plus a periodic revalidation (for example a Vercel
   Cron hitting a protected route handler), because nothing triggers a rebuild at the
   scheduled time.
6. **Content approval:** AGENTS.md requires user approval for website content changes.
   Agree with the user how studio publishing fits that rule (for example, editors save
   drafts and only `admin` accounts publish) before enabling it.
7. Run `docs/new-page-checklist.md` against a published studio post: one `<h1>`,
   canonical equals og:url, valid Article/FAQPage JSON-LD, listed in `/sitemap.xml`.

---

## 11. Known limitations (today)

- No authentication; the unlisted URL is the only barrier, and GA records it.
- Browser-only storage (about 5 MB), not shared, lost with browser data; export to back up.
- "Published" / "Scheduled" do not publish; studio posts never reach `/blog`.
- No roles; anyone with the URL has every action.
- No autosave and no version history; edits are saved only with Save, Publish or `Cmd/Ctrl+S`.
- Two people cannot work on the same post: there is no shared store and no conflict handling.
- The preview omits the site header, footer, related posts and the booking CTA.
- Inline formatting is limited to bold, italic and links; there are no nested lists,
  H4 headings or custom diagrams (`FieldDiagram` is available only to posts written in code).
