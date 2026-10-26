# AGENTS.md

Guide for AI coding assistants (and new developers) working on this repo.
Read this first. It covers what the code does not make obvious, and the
mistakes that have already happened once.

## What this is

Marketing website for **Sage Kite**, a business growth consultancy.
Live at `https://www.sagekite.com`.

- Next.js 16 (App Router), React 19, TypeScript. No database for the site itself, no
  auth for the public pages, and one API route (the blog studio's sign-in). `NEXT_PUBLIC_GHL_WEBHOOK_URL` (contact form webhook) is set in
  `.env` locally (not committed) and in Vercel's environment variables; it is fixed at
  build time, so redeploy after changing it. The blog studio's Sanity connection uses
  `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` and the server-only
  `SANITY_API_WRITE_TOKEN` (docs/sanity.md); the studio's team sign-in adds the server-only
  `STUDIO_PASSWORD` (12+ characters, not guessable) and `STUDIO_SESSION_SECRET` (32+). Set the
  token and `STUDIO_*` on Vercel Production only; see `.env.example`.
- Google Analytics 4 (gtag.js, measurement ID `G-QQFH3W77TS`) is loaded once by two
  `next/script` components (`strategy="afterInteractive"`, inline one with
  `id="google-analytics"`) in `components/GoogleAnalytics.tsx`, rendered at the end of `<body>`
  in `app/layout.tsx`. It runs on every page except one containing an element with
  `data-no-analytics` (only the blog studio, D038). Do not add a second Google tag.
- Every page is statically generated at build time. Pages under `/blog` and the sitemap
  are also regenerated at most every 60 seconds (`app/blog/layout.tsx`, `app/sitemap.ts`),
  so posts published to Sanity appear without a redeploy.
- Styling is plain CSS. Brand colours, font and spacing tokens are in
  `app/brand.css`; shared classes are in `app/globals.css`.
  **Read [docs/brand.md](docs/brand.md) before building a page or section.**
  There is **no Tailwind**. Do not add Tailwind classes or a new styling system.
- Icons: `lucide-react`. No other UI libraries.

## Commands

```bash
npm run dev          # local dev server on http://localhost:3000
npx tsc --noEmit     # typecheck
npm run build        # production build; must pass before committing
npm test             # unit tests for the blog studio security code (tests/, node:test, no Sanity)
```

There is no lint script. The only tests are the blog studio tests in `tests/`: security (they run the real
Server Actions against a fake Sanity client and never touch the network) and paste / formatting. tests/hooks.mjs
compiles `.tsx` files with the project's TypeScript, so a test can render a component (e.g. StudioArticle) with
react-dom/server. "Done" means typecheck + build + `npm test` pass and the changed page has been opened in the browser.

## Where things live

```
app/
  brand.css             Brand tokens: colours, font, spacing. The single source.
  globals.css           Global element styles and shared classes.
  layout.tsx            Root layout. Site-wide metadata + Organization/WebSite JSON-LD.
  page.tsx              Homepage (sections from components/home/*) + homepage WebPage JSON-LD.
  about/, privacy-policy/, terms-of-service/
                        page.tsx = content; layout.tsx = that page's metadata.
  services/page.tsx     /services overview: the five service areas (data arrays at the top feed
                        the page, Service hasOfferCatalog and FAQPage). Each area has an anchor
                        (#consultancy, #crm-implementation, #marketing, #specialist-staffing,
                        #white-label) used by the header and homepage links.
  services/<service>/page.tsx
                        One page per service area (consultancy, crm-implementation, marketing, specialist-staffing, white-label). Same template as a
                        platform page: metadata + Service JSON-LD + content. When one is added,
                        set `page` on that service in app/services/page.tsx and add it to sitemap.ts.
  industries/page.tsx   /industries: CRM and automation by industry. Service-page template
                        (metadata + Service/FAQPage JSON-LD). Industry rows and FAQs are data
                        arrays at the top that feed both the page and the schema. Header and
                        footer "Industries" links point here.
  industries/<name>/page.tsx
                        One page per industry (real-estate, home-services, coaching, law-firms, fitness-wellness, nonprofits, service-businesses, other-businesses). Same service-page template.
                        When one is added: set `page` on that industry in app/industries/page.tsx,
                        point its homepage card (components/home/PlatformsAndIndustries.tsx) at
                        it, and add it to sitemap.ts.
  platforms/page.tsx    /platforms directory. Built from content/platforms.ts; no edits needed
                        when a platform page is added.
  platforms/<name>/page.tsx
                        One service page per CRM platform (dubsado, honeybook, hubspot,
                        activecampaign, jobber, lofty, kajabi, bloomerang, keap,
                        follow-up-boss, housecall-pro, servicetitan, mindbody, clio-grow). Metadata + Service JSON-LD + content.
  insights/founders-thoughts/
                        Founder's Thoughts: page.tsx lists essays; <slug>/page.tsx is one essay
                        with its own layout (not a blog post). Essays are registered in
                        content/founders-thoughts.ts (homepage section + sitemap read it).
  case-studies/page.tsx /case-studies: case study collection, built from content/case-studies/.
  case-studies/<slug>/  One folder per case study: study.tsx (all content, typed by
                        content/case-studies/types.ts) and a page.tsx identical in every folder.
                        case-studies/_template/ is the starter. Metadata, Article JSON-LD and
                        sitemap are generated. Register the study in content/case-studies/index.ts.
  blog/page.tsx         Blog listing (code posts + published Sanity posts, from content/blog/live.tsx).
  blog/layout.tsx       Only sets `revalidate = 60` for every page under /blog. No markup.
  blog/[slug]/page.tsx  Posts published to Sanity from the blog studio. Code post folders take
                        precedence; unknown, draft and unpublished slugs return 404.
  blog/<slug>/          One folder per blog post: post.tsx (data + article)
                        and a 3-line page.tsx. blog/_template/ is the starter.
  contact/page.tsx      /contact: details, enquiry form (components/contact/ContactForm.tsx),
                        office hours and quick questions. Contact details, office hours,
                        form webhook and booking link live in content/contact.ts.
  book/page.tsx         /book: the GoHighLevel booking widget (iframe + form_embed.js), embedded
                        as supplied. Every "Book a discovery call" button links here.
                        form_embed.js is loaded by components/book/BookingEmbedScript.tsx, not
                        next/script: it must re-run on every visit or the iframe is not resized.
  sk-studio-ufn5xdafhll7/
                        Unlisted blog studio for the SEO team (decision.md D019, D022, D030).
                        Shared team password (`STUDIO_PASSWORD` + `STUDIO_SESSION_SECRET`): signed in,
                        it saves to Sanity and publishes to the live blog; not signed in, it sits behind a full-screen
                        sign-in dialog that cannot be dismissed (LoginGate.tsx, D035), and without valid
                        sign-in env vars (or on Vercel Preview) it shows "unavailable". There is no
                        browser-only mode. components/blog-studio/server.ts decides, and every Server Action
                        re-checks: the dialog is only the visible half of the gate.
                        noindex, no-referrer, not in sitemap.ts and deliberately not in robots.ts.
                        Read docs/blog-studio.md and docs/sanity.md before changing it.
  api/sk-studio-ufn5xdafhll7/login/
                        The studio's sign-in: a Route Handler (the site's only API route) at a path of its own,
                        so a Vercel WAF rate-limit rule can target login attempts alone (docs/sanity.md,
                        "Login rate limit"). /api/ is already disallowed in robots.ts, which does not name it.
  sitemap.ts, robots.ts, not-found.tsx
components/
  blog-studio/            The studio UI (BlogStudio.tsx + BlogStudio.module.css). store.ts is the
                          StudioStore interface with a browser store and a Sanity store;
                          actions.ts holds the Sanity Server Actions (validate, then write);
                          server.ts decides the storage mode (Sanity only when signed in with the team
                          password, in development too; otherwise locked, D035); auth.ts, auth-core.ts,
                          rate-limit.ts and paths.ts are the shared-password sign-in (sign-in itself is the
                          Route Handler app/api/sk-studio-ufn5xdafhll7/login/route.ts; auth-actions.ts only
                          signs out);
                          StudioArticle renders blocks as plain .article-content HTML (no hooks): the
                          studio preview and, via content/blog/live.tsx, published Sanity posts on
                          /blog/[slug]; postUtils derives guide, faqs,
                          readingTime and the publishing checklist from docs/blog-seo-schema.md, and
                          holds the clipboard-HTML helpers shared by table and article paste;
                          articlePaste.ts turns a pasted article (Docs, Word, Markdown; Pages with a
                          note, D048) into blocks and picks a pasted image to upload (imageFromClipboard);
                          formatting.ts is the editor's formatting bar (Turn into, bold, italic, links),
                          both pure and tested (D047).
  Header.tsx, Footer.tsx  Shared header/footer.
  GoogleAnalytics.tsx     The GA4 tag (client component in the root layout); skipped on pages
                          with a `data-no-analytics` element (the blog studio).
  home/                   Homepage sections. Work.tsx is the featured case studies
                          section (Santa Barbara Trapeze, Get Daily, 260 Sample Sale),
                          read from content/case-studies; change its FEATURED list to swap them.
  blog/                   Blog UI + BlogPostPage (used by every post's page.tsx),
                          BlogArticleLayout (page shell), blogMetadata.ts
                          (metadata), blogJsonLd.ts (schema), FieldDiagram
                          (HTML/CSS diagrams inside articles).
lib/sanity/               Server-only Sanity connection: client.ts (read client without token, write
                          client with token, pinned apiVersion), blogPosts.ts (StudioPost <-> `blogPost`
                          document; drafts as drafts.<id>; queries), image.ts (Sanity CDN URLs,
                          absolute image URLs for metadata/JSON-LD, 1200x675 share crop) and
                          imageUpload.ts (what an uploaded file really is, read from its bytes).
content/blog/
  index.tsx               Registry of code posts (`posts`). Read its header comment.
  live.tsx                Server-only selectors for the site: code posts + published Sanity posts
                          (getPublishedPosts, getFeaturedPost, getSanityPostBySlug, getSanityPostSlugs).
  types.ts                BlogPost type + CATEGORIES.
  authors.ts              Author name/avatar.
content/platforms.ts      Platform list and industry groups: homepage "Platforms" grid,
                          /platforms directory and sitemap. A platform with a `slug` links
                          to /platforms/<slug> and is in the sitemap.
content/case-studies/
  index.ts                Registry of case studies, newest first. Read its header comment.
  types.ts                CaseStudy type: every section after the hero is optional. A result is
                          either before/after (bars) or a count with no starting figure (dots);
                          `results: []` when nothing was measured (the listing shows `metrics`).
                          `sections` adds one free-form section per part of the work.
components/case-studies/  CaseStudyPage (renders every case study + metadata + JSON-LD),
                          caseStudyStyles.ts (shared CSS), blocks.tsx (reusable content and
                          sketches, RankLadder, Journey, DotGrid, PageGridSketch, BrowserFrame,
                          PurchasePath, Checklist, CountCard, NumberedSteps, LoopSketch, PhoneFrame,
                          ScaleBar, RisingSteps, RateDots, GrowthBars, ChangeCards, ChangeIcon,
                          StatCard, SeoSnippet, PointList, ToolList, DataTable)
                          and the interactive SearchTyper, SearchFlow, LinkingDemo, DuplicateUrlFlow,
                          CategoryFixes, MigrationFlow, ScreenshotTabs, DashboardToggle,
                          CheckoutFixFlow, LayerStack, EmailToggle, PdpToggle, RtoFlow,
                          SmartCollections, Countdown, PricingDemo.
content/founders-thoughts.ts
                          Founder's Thoughts essays, newest first. Add a new essay here
                          and create app/insights/founders-thoughts/<slug>/page.tsx.
content/share-image.ts    Default social share image (public/images/share/sage-kite-default.png,
                          approved design, decision.md D011). The root layout uses it, but a
                          page that sets its own openGraph or twitter block replaces the
                          root's, so it must list DEFAULT_OG_IMAGES / DEFAULT_TWITTER_IMAGES
                          itself, with twitter card 'summary_large_image'.
public/                   Static files. Blog images go in public/images/blog/,
                          essay images in public/images/founders-thoughts/,
                          case study images in public/images/case-studies/<slug>/.
                          The header/footer logo and the homepage and About photos are
                          statically imported into next/image (resized WebP). Keep the
                          originals: other pages still reference them by path. Photos
                          cropped with object-fit: cover get `sizes` from
                          components/coverSizes.ts, which allows for the crop.
```

## Content and design approval; decision log

- Ask the user before changing website content or design. Show the exact proposed
  wording or design preview, affected pages, reason and likely effects, then wait
  for explicit approval. Content includes SEO/social metadata, headings, body
  copy, labels, FAQs and text in structured data. Design includes layout, colours,
  typography, visible imagery and social share artwork.
- Approval covers the specific proposal accepted by the user; ask again if its
  scope changes. An audit recommendation alone is not approval. Technical work
  that preserves content and appearance may proceed within the authorized task.
- The user declined adding Case studies to the header on 17 October 2026 (D013),
  then explicitly reversed that on 19 October 2026 (D016): "Case studies" is now in
  the desktop header and mobile menu between Industries and Blogs. Keep it unless
  the user revises this again. The footer link remains in place.
- Maintain [decision.md](decision.md) for project changes: record why, what changed
  (including before/after wording where applicable), affected files, approval,
  effects, limitations and validation. Distinguish proposed work from implemented
  work, expected effects from measured results, and reported checks from checks
  independently run. Do not invent past approvals or deployment status.

## Writing content

**Read [docs/content-standard.md](docs/content-standard.md) before writing or
rewriting any blog post, service page, platform page, essay or other substantial
copy.** It is the Sage Kite editorial standard (voice, research, depth, SEO in the
prose), benchmarked on the essay at
`app/insights/founders-thoughts/when-everyone-has-ai/`. Learn its techniques from
Appendix A; never reuse its arguments, examples or statistics. Verify every
statistic and platform claim against a primary source before using it, and never
invent first-person experience, client stories or testimonials.

## Blog posts, SEO and schema

**Read [docs/blog-seo-schema.md](docs/blog-seo-schema.md) before adding a blog
post, changing page metadata, or touching any JSON-LD.** It has the step-by-step
blog recipe, the metadata template, and the Article and Service schema rules.

**Before opening a PR for any new page, work through
[docs/new-page-checklist.md](docs/new-page-checklist.md)** (meta title,
description, canonical, sitemap, robots, Article / Service / FAQ schema).

The essentials:

- Each blog post is a folder `app/blog/<slug>/` (copy `app/blog/_template/`),
  with its data in `post.tsx`, registered in
  `content/blog/index.tsx`. Metadata, Article schema and sitemap are generated.
  Never hand-write them for a post.
- Platform pages (`app/platforms/<name>/page.tsx`) hand-write their metadata and
  Service JSON-LD. When a new platform page is published, set its `slug` in
  `content/platforms.ts`: that links it from the homepage and adds it to the sitemap.
- Canonical, `og:url` and sitemap URLs match exactly, with no trailing slash.
- JSON-LD is rendered server-side only and references
  `https://www.sagekite.com/#organization` / `#website` by `@id`.
- `robots.ts` must not disallow `/_next/`.

## Do not

- Type a hex colour or font name in a page. Use `var(--…)` from `app/brand.css`.
- Load another font, or redefine `:root` or `h1, h2, h3` in a page's `<style>` block.
- Write HTML entities like `&amp;` inside metadata strings. Write `&`.
- Link to `glasspane.pages.dev`. It is an old staging domain.
- Use uppercase in folder names. `/Platforms` and `/platforms` are different
  URLs on the Linux server even though macOS treats them the same.
- Set `featured: true` on more than one blog post.
- Set a `slug` in `content/platforms.ts` before `app/platforms/<slug>/page.tsx`
  exists. The homepage would link to a 404 and the sitemap would list it.
- Edit a post's `page.tsx`. It is identical in every post folder; change
  `components/blog/BlogPostPage.tsx` instead.
  The same applies to a case study's `page.tsx` (`components/case-studies/CaseStudyPage.tsx`).
- Publish a case study without its origin, or with figures nobody reported. Results are
  "as reported" unless Sage Kite measured them.
- Use a blog `guide` id that does not match an `id` on a heading in the article.
- Change a heading or FAQ answer without updating `guide` / `faqs` to match.
- Add Tailwind, CSS frameworks or component libraries.
- Commit build output (`.next/`).
- Commit TypeScript build caches (`*.tsbuildinfo`) or macOS `.DS_Store` files.
- Add the blog studio path to `robots.ts` or `sitemap.ts`, or link to it from any page.
  robots.txt is public and would advertise the unlisted URL.
- Read live blog posts from `posts` in `content/blog/index.tsx`: it has only code posts. Use
  `content/blog/live.tsx`, which adds published Sanity posts.
- Prefix `SITE_URL` onto an image path by hand in metadata or JSON-LD. Sanity images are
  absolute URLs; use `absoluteImageUrl` / `shareImageUrl` from `lib/sanity/image.ts`.
- Give the public site's Sanity client a token. Without one, drafts cannot be read.
- Load Google Analytics or any other third-party script on the blog studio page, or remove its
  `data-no-analytics` marker. Do not detect the studio by its path in client code either: that would put
  the unlisted URL into the JavaScript of every public page (D038).
- Load executable JavaScript with a raw `<script>` tag in a React component or layout. React
  never runs a `<script>` it renders in the browser (e.g. the 404 fallback under /blog), so
  analytics silently broke there. Use `next/script`. (JSON-LD `type="application/ld+json"` is fine.)
- Embed YouTube without `referrerPolicy="strict-origin-when-cross-origin"` on the iframe. The
  studio page is `no-referrer`, and YouTube shows Error 153 when it receives no referrer.

- Embed JSON-LD for blog posts with a bare `JSON.stringify(...)` in `dangerouslySetInnerHTML`. Post
  titles, excerpts, authors, tags and FAQs come from the studio, so `</script>` in one would run as
  page JavaScript. Use `JsonLd` / `serializeJsonLd` (components/blog), which escape `<`.
- Write to Sanity from anywhere except through `getSanityWriteClient()` (lib/sanity/client.ts), which
  runs the write guard (lib/sanity/guard.ts) on every call, and only after `getStudioStorage()` says
  `sanity`. Do not widen post ids beyond UUIDs, spread a client-sent object into a document, or delete
  without `_type == "blogPost"`: that is how a signed-in user could reach image assets.
- Trust `X-Forwarded-For` or `X-Real-IP` for anything outside Vercel, or set `SANITY_API_WRITE_TOKEN` or
  `STUDIO_*` on Vercel Preview.
- Reintroduce a browser-only studio mode, or remove the `inert` wrapper / make `LoginGate` dismissable. The studio is
  locked until a valid session exists (D035); the server check in every Server Action is what actually protects Sanity.
- Turn sign-in back into a Server Action. It is a Route Handler at its own path so the WAF rate-limit
  rule can hit it without also limiting saving, publishing and uploads (Server Actions all post to the
  studio page's path). Do not move the login path out of the `/api/sk-studio-…` namespace either.
- Return a raw error from Sanity, the network or any library to the browser. Throw `SafeError`
  (lib/sanity/errors.ts) for messages written in this app; everything else becomes a generic text.
- Trust an uploaded file's declared content type or name. `uploadStudioImageAction` sends Sanity only bytes that
  `checkUploadedImage` (lib/sanity/imageUpload.ts) recognised as a complete JPG, PNG or WebP of the declared type,
  with the detected type and `uploadFileName`. Add a format there (with a structure check and tests), not to a list.
- Let a post use any image source except `isAllowedImageSrc` (lib/sanity/image.ts): a file under
  /images/ or the site root, or an upload to this project's Sanity CDN. Never an arbitrary URL.

## Known gaps (do not "fix" these without asking)

- `/insights` (index page) does not exist yet. There is no `/for-agencies` page:
  agency links go to `/services/white-label`.
- Every homepage industry card has its own page. Every row on `/industries`
  has a page; "Everyone else" is `/industries/other-businesses`. Client-based service
  businesses and "Everyone else" have no homepage card.
- The `/contact` form posts straight from the browser to a GoHighLevel inbound
  webhook (temporary handler from the team lead). `CONTACT_WEBHOOK_URL` in
  `content/contact.ts` reads `NEXT_PUBLIC_GHL_WEBHOOK_URL`; while it is empty the
  form validates but tells visitors to email instead.
- `components/Footer.tsx`: the Insights link points to `/blog` until an `/insights`
  index exists. (The old Work link now points to `/case-studies`.)
- Share images: blog posts use their featured image and the essay sets its own; every
  other page uses the default in `content/share-image.ts` (see "Where things live").
- `app/home-interactions.tsx` and `app/site-content.ts` are not used by any page.
- Published Sanity posts render on /blog, /blog/[slug], "Keep reading" and the sitemap
  wherever `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set; without them the
  site shows only code posts. Publishing from the deployed studio needs the team sign-in env vars
  (`STUDIO_PASSWORD`, `STUDIO_SESSION_SECRET`) and `SANITY_API_WRITE_TOKEN` in the environment, and
  the dataset the site reads must be the one you mean to publish to (`production` on Vercel,
  `development` locally). The sign-in is one shared password: no per-person accounts, no roles.
  Never let a Server Action write to Sanity without `getStudioStorage()` returning `kind: 'sanity'`;
  an unlisted URL is not protection.
- Platform pages keep page-specific CSS in an inline `<style>` block.
  `honeybook` uses `honeybook.module.css`.
- One-off conversion scripts (`transform.js`, `transform_jobber.js`, `scratch/`),
  `jobber-source.html`, root case-study HTML originals and blog DOCX originals
  were removed after conversion. They remain recoverable from Git history;
  source filenames in comments record provenance, not runtime dependencies.

## Keeping this file useful

When you change how something works, update this file in the same commit.
When an AI assistant makes a mistake, add a one-line rule under "Do not".

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
