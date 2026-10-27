# Project decision log

Started: 17 October 2026.

This log records the recent audit work and future project decisions. It does not
reconstruct every change made before that work. Historical entries below are
based on the current source, Git history and implementation reports supplied in
the conversation.

The audit changes in Steps 1–3 are committed as `428d0ad`. The subsequent commit
`955b962` excludes the local audit PDF from Git. Deployment of those commits has
not been verified in this documentation task.

## Approval rule from now on

1. Ask the user before changing website content or design.
2. Show the proposed text or design preview, the affected pages, why the change
   is proposed and its likely effects. For wording changes, show before and after.
3. Wait for explicit approval before applying that proposal. Ask again if the
   proposed scope changes; keep previously accepted approval within its scope.
4. Treat titles, descriptions, social metadata, headings, paragraphs, labels,
   FAQs and text in structured data as content. Treat layouts, colours, fonts,
   visible imagery and share artwork as design.
5. Record each decision here, including approval, files, effects and verification.
   Label suggestions as proposed and completed changes as implemented.
6. Technical fixes that preserve content and appearance can proceed within the
   user's authorized task. An SEO or performance goal does not authorize a copy
   rewrite or redesign.

The user requested this rule and documentation in the current conversation.
Past approval records below describe only what the supplied reports establish.

## D001 — Repair navigation destinations

- **Status:** Implemented in Step 1; committed in `428d0ad`.
- **Why:** Homepage SEO links and the footer Insights link targeted sections
  that did not exist.
- **What changed:** Homepage SEO and AI SEO links changed from `#seo` and
  `#ai-seo` to `/services/marketing#channels`. Footer Insights changed from
  `#insights` to `/blog`.
- **Files:** [MarketingEngine.tsx](components/home/MarketingEngine.tsx),
  [Footer.tsx](components/Footer.tsx).
- **Effects:** Visitors reach existing destinations. Both SEO links currently
  lead to the same marketing channels section; separate SEO and AI SEO pages
  remain future work. Insights leads to the blog until an Insights index exists.
- **Approval/evidence:** Historical implementation reported by Claude and
  confirmed in the committed diff; no new approval is inferred from this log.
- **Validation:** Claude reported successful browser checks of these links.

## D002 — Make homepage FAQs usable with a keyboard

- **Status:** Implemented in Step 1; committed in `428d0ad`.
- **Why:** A clickable heading did not provide keyboard access or communicate
  whether an answer was expanded.
- **What changed:** Mobile FAQ toggles use buttons inside headings, with
  `aria-expanded`, `aria-controls` and stable IDs. Shared CSS styles the buttons.
  Desktop retains plain headings with all answers visible.
- **Files:** [FAQ.tsx](components/home/FAQ.tsx),
  [globals.css](app/globals.css).
- **Effects:** Mobile visitors can focus toggles and operate them with Enter
  and Space. Assistive technology receives the expanded state. Question and
  answer wording is unchanged; this was an interaction/accessibility fix.
- **Approval/evidence:** Historical implementation reported by Claude and
  confirmed in source.
- **Validation:** Claude reported keyboard checks and desktop/mobile browser
  checks. These checks were not rerun while creating this log.

## D003 — Update SEO wording on seven pages

- **Status:** Implemented in Step 2; committed in `428d0ad`.
- **Why:** Describe the services and blog topics more clearly in page metadata,
  align social titles and remove the repeated brand in the About social title.
- **What changed:** Page titles and meta descriptions changed on the five
  service detail pages, Blog and About. Their Open Graph/Twitter titles now match
  the page title. About gained its own Twitter block using the previously
  inherited description. Five service `WebPage.name` values were updated.

| Page | Resulting title |
| --- | --- |
| Consultancy | Business Growth Consulting & Fractional CMO \| Sage Kite |
| CRM implementation | CRM Implementation Services: Setup & Migration \| Sage Kite |
| Marketing | Digital Marketing Services: SEO, AI SEO & Ads \| Sage Kite |
| Specialist staffing | Virtual Assistant Services: CRM & Marketing VAs \| Sage Kite |
| White-label | White-Label CRM & Marketing for Agencies \| Sage Kite |
| Blog | Business Growth, CRM & Marketing Insights \| Sage Kite |
| About | About Sage Kite \| Business Growth Consultancy |

- **Files:** [Consultancy](app/services/consultancy/page.tsx),
  [CRM implementation](app/services/crm-implementation/page.tsx),
  [Marketing](app/services/marketing/page.tsx),
  [Staffing](app/services/specialist-staffing/page.tsx),
  [White-label](app/services/white-label/page.tsx), [Blog](app/blog/page.tsx),
  [About metadata](app/about/layout.tsx).
- **Effects:** The generated metadata describes the page topics more explicitly.
  Search engines and sharing services may choose their own displayed text; no
  ranking, traffic or conversion improvement has been measured here. Canonical
  URLs, schema IDs, `Service.name` values and social descriptions were preserved.
- **Approval/evidence:** Claude's supplied Step 2 report says the wording and
  adjustments were approved. This is a historical report, not a new approval for
  further rewrites. Exact title and description differences are in `428d0ad`.
- **Validation:** Claude reported passing typecheck, production build, metadata
  and JSON-LD checks on all seven pages at desktop and mobile sizes.

## D004 — Change three visible headings and the blog introduction

- **Status:** Implemented in Step 2 and its follow-up; committed in `428d0ad`.
- **Why:** Name the marketing and staffing services in their main headings,
  describe the blog topics and remove an unsupported claim about client work.
- **What changed, before → after:**
  - Marketing H1: “Marketing services connected to how you sell” → “Digital
    marketing services connected to how you sell”.
  - Staffing H1: “Specialist staff who keep your growth systems running” →
    “Specialist virtual assistants who keep your growth systems running”.
  - Blog H1: “Insights for Smarter Business Growth” → “Insights on CRM, marketing
    and business growth”.
  - Blog subtitle: “Practical thinking on the systems, people and execution
    behind growth — spanning business growth, CRM, marketing, automation,
    operations, people, strategy and technology. Written from the work we do with
    growing businesses, not from theory.” → “Practical guides and perspectives
    on CRM, marketing, automation, operations, people and the systems behind
    business growth.”
- **Files:** [Marketing](app/services/marketing/page.tsx),
  [Staffing](app/services/specialist-staffing/page.tsx),
  [BlogHeader.tsx](components/blog/BlogHeader.tsx).
- **Effects:** These are visible content changes. Longer headings wrap onto more
  lines on mobile. The blog introduction no longer claims the articles are based
  on client work. Main service paragraphs, FAQ answers and article bodies were
  not rewritten in this batch. Consultancy, CRM, White-label and About H1s stayed
  as they were.
- **Approval/evidence:** Claude's supplied reports describe the headings as
  approved wording and the subtitle as user-supplied replacement text. Those
  reports are the historical approval evidence available for this log.
- **Validation:** Claude reported clean desktop/mobile layouts, visible H1s,
  no horizontal scrolling and passing typecheck/build.

## D005 — Serve responsive images while preserving the existing design

- **Status:** Implemented in Step 3; committed in `428d0ad`.
- **Why:** The shared PNG logo and founder/team photos transferred more image
  data than needed for their displayed sizes.
- **What changed:** The header/footer logo and the homepage/About photos now use
  statically imported `next/image` assets, responsive image sizing and intrinsic
  dimensions. Below-the-fold images are lazy-loaded. `coverSizes.ts` allows for
  pixels lost when a photo is cropped with `object-fit: cover`.
- **Files:** [Header.tsx](components/Header.tsx), [Footer.tsx](components/Footer.tsx),
  [Founder.tsx](components/home/Founder.tsx), [About](app/about/page.tsx),
  [coverSizes.ts](components/coverSizes.ts), [AGENTS.md](AGENTS.md).
- **Effects:** Supported browsers receive resized WebP images. Existing image
  originals, crops, layout and copy were retained. Claude reported substantially
  lower image transfer in local tests; those measurements were not independently
  reproduced while writing this log. They do not establish a live PageSpeed or
  Core Web Vitals result. Low-resolution originals can still limit sharpness.
- **Approval/evidence:** Historical implementation supplied as Step 3 and
  confirmed in committed source. This does not approve replacing photos or
  changing their layout in future work.
- **Validation:** Claude reported typecheck/build and desktop/mobile image,
  crop and layout checks. Source review confirmed the crop-aware sizing helper.

## D006 — Keep the audit PDF out of the application commit

- **Status:** Implemented in `955b962`.
- **Why:** The audit PDF is a local working document rather than a website asset.
- **What changed:** Added `/Sage Kite audit - Sheet1.pdf` to
  [.gitignore](.gitignore).
- **Effects:** The local PDF is retained but ordinary Git staging excludes it.
  The website and its content are unaffected. The required image sizing helper
  is tracked in `428d0ad`.
- **Evidence:** Confirmed in Git history; the person making that commit is not
  inferred from the conversation.

## D007 — Social share image remains a proposal

- **Status:** Superseded by D011: the centred design was approved and implemented
  locally on 17 October 2026. The text below records the proposal stage.
- **Status at the time:** Preview reported by Claude; final design approval and integration
  remain pending. No default site share image has been added to the project.
- **Why proposed:** Provide a branded image when website links are shared.
- **Proposed change:** Review a centred version that remains readable in wide
  and square crops. After approval, add a default share image to pages missing
  one, preserve blog/essay-specific images and check generated social metadata.
- **Expected effects:** More consistent branded link previews, subject to each
  platform's cropping and caching. These effects have not been verified.
- **Approval:** Pending; a scratch preview is not approval to change the site.
- **Current evidence:** The root layout still has the comment to add an approved
  `og:image`. [app/layout.tsx](app/layout.tsx) has not been changed for this proposal.

## D008 — Verify and improve the existing sitemap

- **Status:** Existing sitemap confirmed. The modification-date fix is implemented
  in D012; the Search Console submission and access check remain pending.
- **Status at the time:** Existing sitemap confirmed; improvements remain pending.
- **Why proposed:** Audit item #2 says the reviewer could not fetch the sitemap.
  It does not establish that the sitemap is missing.
- **What exists:** [sitemap.ts](app/sitemap.ts) generates the sitemap and
  [robots.ts](app/robots.ts) references `https://www.sagekite.com/sitemap.xml`.
- **Pending change/check:** Replace build-time dates with accurate modification
  dates where appropriate and confirm Search Console submission and access.
- **Expected effects:** More accurate modification information for crawlers.
  Sitemap submission does not guarantee indexing or rankings.
- **Evidence:** Confirmed in source; no sitemap code was changed in this task.

## D009 — Record decisions and require content/design approval

- **Status:** Implemented by this documentation update, 17 October 2026.
- **Why:** The user wants to review content/design changes first and understand
  why project decisions were made and what happened as a result.
- **What changed:** Created this log and added the approval/logging instructions
  to [AGENTS.md](AGENTS.md), which future coding assistants are told to read first.
- **Filename:** Renamed `decision.md` to `deciosn.md` at the user's request and
  updated the reference in `AGENTS.md`. The existing decision entries were retained.
- **Effects:** Future proposals must identify wording/design changes before
  implementation. Decisions have a shared record of reasons, files, effects and
  verification. This is a written workflow rule, not an automated enforcement
  mechanism. Website code, content and design are unchanged by this update.
- **Approval:** Explicitly requested by the user in the current conversation.
- **Validation:** Documentation diff and local Markdown links checked; no
  application build or browser test is needed for these Markdown-only edits.

## D010 — Remove conversion leftovers and original source documents

- **Date:** 17 October 2026.
- **Status:** Implemented locally; not committed or deployed in this task.
- **Why:** Remove obsolete tooling, generated files and source documents the
  user no longer wants to keep for reference.
- **What changed:** Deleted `transform.js`, `transform_jobber.js`,
  `jobber-source.html`, all 15 files in `scratch/`, `tsconfig.tsbuildinfo`, five
  `.DS_Store` files, 11 root case-study HTML originals and three blog DOCX
  originals. Added `*.tsbuildinfo` to [.gitignore](.gitignore) and updated
  [AGENTS.md](AGENTS.md) to describe the cleanup and source provenance comments.
- **Approval:** After discussing the cleanup groups and the reference value of
  the originals, the user said they do not want the originals for reference.
  The first two groups were removed; unused website code, email templates,
  the audit PDF, `.next/` and `node_modules/` were retained, apart from macOS
  metadata files inside `node_modules/`.
- **Effects:** No website code, content, metadata or design changed. All 33
  removed non-macOS files were verified as tracked in Git and can be recovered
  from history. Case-study source filenames remain in provenance comments.
- **Limitations:** The DOCX originals contained historical research and editorial
  notes beyond the published articles. These are recoverable from Git. The HTML
  originals retain historical mockup details; current page screenshots are
  preserved, including the deliberately blurred Hemlock map.
- **Validation:** Independently ran `npx tsc --noEmit`, `npm run build` (61
  generated pages) and `git diff --check`, all passing. Opened the local
  production homepage, 260 Sample Sale case study and HoneyBook automation blog
  post in the browser. Verified the retained files exist and the TypeScript
  cache matches the new ignore rule; removed the regenerated root cache after
  validation. Subagent read-only audits confirmed all 11 HTML originals map to
  nine registered case studies and the three DOCX originals map to blog posts.

## D011 — Default social share image

- **Date:** 17 October 2026.
- **Status:** Implemented locally. Not committed, pushed or deployed.
- **Why:** Audit item #6: apart from blog posts and one essay, no page had an
  `og:image`, and `twitter:card` was `summary` on those pages, so shared links
  showed no image or a small square crop.
- **Approval:** The user approved "this centred share-image design and its exact
  tagline" and asked for it to be the default image for pages without an existing
  share image, using `summary_large_image`, while preserving blog and essay images,
  titles, descriptions, canonical URLs, JSON-LD and visible content. An earlier
  left-aligned preview was not approved; the user asked for a centred version that
  stays readable in wide and square crops.
- **Design (as approved):** 1200×630 PNG, 45.4 KB. Warm-white background, butter
  top rule, the existing transparent logo (which supplies "Sage Kite"), the
  coral/butter/sky dash motif and the tagline "Business growth through systems,
  people and execution." in Manrope 800 ink, with the butter underline under
  "systems, people and execution." Colours come from `app/brand.css`. All content
  sits inside the centre 630×630 square with a 30px margin (widest line measured
  at x 372–828 against a safe zone of 315–885).
- **Why this approach:** A local build with `app/opengraph-image.png` and
  `app/twitter-image.png` (the Next.js file convention) was tested first. The image
  reached the homepage, and only the Twitter image reached Privacy and Terms; pages
  that set their own `openGraph` or `twitter` block (services, platforms, About,
  case studies and others) got no image, and their card stayed `summary`. Next.js
  replaces a parent's `openGraph`/`twitter` object instead of merging it. The test
  files were removed. Instead, one shared definition,
  [content/share-image.ts](content/share-image.ts), is referenced by the root layout
  and by every page that sets its own blocks. It statically imports the PNG, so the
  URL is content-hashed (a future image gets a new URL) and the dimensions come
  from the file.
- **What changed:**
  - Added [sage-kite-default.png](public/images/share/sage-kite-default.png)
    (byte-identical to the approved preview) and `content/share-image.ts`.
  - [app/layout.tsx](app/layout.tsx): default `openGraph.images`, `twitter.images`
    and `twitter.card` `summary` → `summary_large_image`. This covers the homepage,
    Privacy and Terms Twitter tags, which inherit the root `twitter` block.
  - 39 page or layout files that set their own `openGraph`: `images` added; where
    they also set `twitter` (36 files), `images` added and card `summary` →
    `summary_large_image`. These are: the homepage, About, Privacy, Terms, Blog
    index, Book, Contact, Case studies index, Founder's Thoughts index, Services
    and its 5 pages, Platforms and its 14 pages, Industries and its 8 pages.
  - [CaseStudyPage.tsx](components/case-studies/CaseStudyPage.tsx): the same for
    all 9 case studies.
  - Docs: [AGENTS.md](AGENTS.md), [blog-seo-schema.md](docs/blog-seo-schema.md)
    (metadata template and rule) and [new-page-checklist.md](docs/new-page-checklist.md).
- **Not changed:** blog posts ([blogMetadata.ts](components/blog/blogMetadata.ts))
  and the essay "When everyone has AI" keep their own images and cards. Titles,
  descriptions, canonical URLs, JSON-LD and visible text are unchanged (verified
  below).
- **Image alt text:** "Sage Kite logo with the tagline: Business growth through
  systems, people and execution.", output as `og:image:alt` and `twitter:image:alt`.
  It was added during implementation and first recorded here as needing
  confirmation. On 17 October 2026 the user approved this exact wording and asked
  for it to be kept. No other content or layout changed with this confirmation.
- **Observed effects (local production build):** 49 generated pages now output the
  default image (48 shareable pages plus the 404 page, which inherits the root
  default): one `og:image` with width 1200, height 630, type `image/png` and alt,
  one matching `twitter:image`, and `twitter:card` `summary_large_image`. The 8
  blog posts and the essay output the same images as before. `/_global-error` has
  no share image, as before. Locally the image is served as a 1200×630 PNG with
  `Cache-Control: public, max-age=31536000, immutable`.
- **Expected effects (not measured):** branded large previews when non-blog pages
  are shared on LinkedIn, X, Slack, Facebook and messaging apps.
- **Limitations:** Platforms cache previews; after deployment, links already
  shared may need refreshing in each platform's inspector or debugger tool. Real
  platform rendering and square crops inside apps were not tested. Every
  non-blog page shares one image, and case studies use it rather than
  study-specific images. The PNG is also reachable unhashed at its `public/` path,
  which nothing references. Production cache headers on Vercel were not checked.
- **Validation (run by Claude in this task):**
  - `npx tsc --noEmit` passed; `npm run build` passed with 61 routes.
  - Compared all 59 generated HTML pages with a build of the last commit
    (`8ee6464`): no differences outside `og:image*`, `twitter:image*` and
    `twitter:card`. Titles, other meta tags, canonical URLs, JSON-LD and visible
    text were identical.
  - Browser checks in Chrome at 1280px and 390px on 57 pages (114 loads): every
    page returned 200 with no console errors. Each had exactly one `og:image` and
    one `twitter:image` at the same absolute URL with a large card. The default
    image fetched as a 1200×630 PNG matching its declared size. Blog and essay
    images matched their previous URLs.
  - The Step 1–3 regression check (titles, descriptions, H1s, social titles and
    descriptions, canonical URLs, JSON-LD, GA4, links and FAQ keyboard
    behaviour) passed at both widths.
- **Delivery:** Not committed, pushed or deployed.

## D012 — Use only reliable sitemap modification dates

- **Date:** 17 October 2026.
- **Status:** Implemented locally. Not committed, pushed or deployed (the user will
  commit manually).
- **Why:** [app/sitemap.ts](app/sitemap.ts) gave 39 of 57 URLs `lastModified:
  new Date()`, so every build stamped them with the build time (for example
  `2026-10-16T20:45:17.666Z`) whether or not they had changed. The sitemap protocol
  says `lastmod` is when the page was last modified, not when the sitemap was
  generated, and Google uses it only when it is consistently accurate. Separately,
  the essay's month-only date `'2026-09'` was turned into `2026-09-01T00:00:00.000Z`,
  a day that is not recorded anywhere.
- **Request:** The user asked to use reliable content modification dates where
  available, omit dates where no reliable source exists rather than inventing them,
  preserve accurate blog, essay and case-study dates, and keep sitemap URLs, website
  content, design and other metadata unchanged. This is a technical metadata fix
  within that request; no wording or design was changed.
- **Approach:** A date is used only when the content records it, and it is output
  exactly as authored. A helper accepts only full `YYYY-MM-DD` values, so a partial
  date is left out rather than padded. Git commit dates were not used: hosted
  builds often use shallow clones (not verified for this project's Vercel
  setup), and commits also record changes that are not content changes (shared
  header/footer, metadata, styling).
- **What changed:**
  - **Kept, with the same dates:** 8 blog posts (`updatedAt ?? publishedAt`) and
    9 case studies (`dateModified ?? datePublished`). They are now written as
    `2026-10-14` instead of `2026-10-14T00:00:00.000Z`, dropping an implied
    midnight UTC time that the source does not record.
  - **Privacy policy and Terms of service:** `2026-09-18`, the "Last Updated" and
    "Effective Date" each page displays. Git history shows the policy text is
    unchanged since it was added on that date; later commits (24 September and
    1 October) changed only the shared header, navigation, footer and logo
    markup. These dates are kept as constants in the sitemap and must be updated
    together with the dates shown on those pages.
  - **No `<lastmod>`:** 37 URLs with no recorded content date (homepage, About,
    Services and its 5 pages, Platforms and its 14 pages, Industries and its 8
    pages, the Founder's Thoughts, Case studies and Blog indexes, Contact, Book).
    The protocol allows omitting `lastmod`.
  - **Essay "When everyone has AI":** no `<lastmod>`. Its date is month-only
    (`'2026-09'`), and the sitemaps.org schema allows only a full date or
    date-time. The essay's own date, its visible "September 2026" label and its
    JSON-LD `datePublished` are unchanged.
  - URLs, their order, `changeFrequency` and `priority` are unchanged.
  - Docs: [new-page-checklist.md](docs/new-page-checklist.md) gained the
    `lastModified` rule.
- **For the user to decide:** The essay was first added to this repository on
  1 October 2026, although it is dated September 2026. If a full publication date
  is confirmed (for example the day it went live), it can be recorded as a full
  `YYYY-MM-DD` value and it will appear in the sitemap again.
- **Expected effects (not measured):** Search engines no longer see every page
  claiming to change on every deployment, which makes the remaining dates more
  trustworthy signals. Pages without `lastmod` are still listed and crawled.
  Sitemap dates do not guarantee crawling, indexing or rankings.
- **Limitations:** Pages without a recorded date give crawlers no modification
  signal until a reliable per-page date is introduced. Blog and case-study dates
  are only as accurate as their authors keep `updatedAt` / `dateModified`. The two
  legal-page dates are duplicated between the page text and the sitemap.
- **Validation (run by Claude in this task):** `npx tsc --noEmit` passed and
  `npm run build` passed (61 routes). The generated sitemap was compared URL by
  URL with the previous build: 57 URLs in both, with identical `loc`, order,
  `changefreq` and `priority`. 17 dates were unchanged in value, 2 legal dates
  were set, and 37 build-time dates plus the essay's padded date were removed.
  Every remaining `lastmod` matches `YYYY-MM-DD`. The new sitemap validates
  against the official sitemaps.org XSD (`xmllint --schema`) and is well-formed.
  On a local production server, `/sitemap.xml` returned 200 `application/xml`,
  byte-identical to the build output, and all 57 listed URLs returned 200.
  `robots.txt` still references the sitemap. Only `app/sitemap.ts` changed in the
  application code.
- **Delivery:** Not committed, pushed or deployed.

## D013 — Do not add Case studies to the navbar

- **Date:** 17 October 2026.
- **Status:** Proposal declined by the user; not implemented. **Superseded by D016** (19 October 2026).
- **Proposal:** Add a "Case studies" link between Industries and Blogs in the
  desktop header and mobile menu, pointing to `/case-studies`.
- **Decision and reason:** The user explicitly said they do not want Case studies
  added to the navbar. Respect that preference; the preview is not approval.
- **What changed:** Recorded this decision here and in [AGENTS.md](AGENTS.md).
  [Header.tsx](components/Header.tsx) was checked and remains unchanged.
- **Effects:** No extra desktop navigation link or mobile menu row. The existing
  case-studies page and footer link remain as they were. Any different placement
  would need a separate proposal and user approval.
- **Validation:** Confirmed the header source contains no case-studies link.
  Documentation diff checked. No application tests were run for this
  documentation-only update.
- **Delivery:** Documentation changes only; no commit or push performed. The user
  will commit manually.

## D014 — Update the homepage SEO title to the approved audit wording

- **Date:** 19 October 2026.
- **Status:** Implemented and verified locally.
- **Why:** Audit item #18 recommends explicitly including both "Business Growth
  Consulting" and "Consultancy" in the homepage title. The user requested the
  exact replacement in this conversation.
- **What changed:** [app/page.tsx](app/page.tsx), homepage `/`, `metadata.title`:
  - Before: "Business Growth Consulting for SMEs | Sage Kite" (47 characters).
  - After: "Business Growth Consulting & Consultancy for SMEs | Sage Kite"
    (61 characters).
- **Approval:** The user supplied the exact before/after title and instructed
  "change this to this". Approval covers this homepage SEO title only.
- **Scope:** Homepage headings, body text, layout, meta description, social
  titles, share images and JSON-LD are unchanged. No other page title changes.
  Existing uncommitted documentation changes, including D013, are preserved.
- **Expected effects:** The browser tab uses the approved title. Search engines
  can read the new title after deployment and recrawling; their displayed title
  and any ranking effect are not guaranteed. The visible page layout is unchanged.
- **Limitations:** The approved title is 61 characters; search-result display
  depends on available width and may shorten or rewrite it. Social titles and
  the structured-data page name retain their existing wording within this scope.
- **Observed effects:** A local production browser load shows exactly one
  document title, with the approved wording and a single decoded `&`.
- **Validation (run by Codex in this task):**
  - `npx tsc --noEmit --incremental false` passed; incremental output was
    disabled to avoid rewriting TypeScript build caches.
  - `npm run build` passed (61 generated routes).
  - Opened `/` from the production server in Chrome and confirmed the exact
    document title. The sole H1, inherited meta description, Open Graph title,
    inherited Twitter title and JSON-LD `WebPage.name` retain their prior text.
  - Application diff contains only the approved `metadata.title` replacement.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D015 — Set the approved homepage meta description

- **Date:** 19 October 2026.
- **Status:** Implemented and verified locally.
- **Why:** Audit item #19 proposes a homepage description that explicitly names
  SMEs, growth consulting, CRM implementation, digital marketing, AI SEO and
  virtual assistants. The user requested this exact replacement.
- **What changed:** Added `metadata.description` to the homepage in
  [app/page.tsx](app/page.tsx):
  - Before (inherited from the root layout, 158 characters): "Sage Kite is a
    business growth consultancy. We fix the systems, people and execution behind
    growth, from CRM and automation to marketing and specialist staff."
  - After (160 characters): "Sage Kite is a business growth consultancy for SMEs.
    Growth consulting, CRM implementation, digital marketing, AI SEO and virtual
    assistants, run as one system."
- **Approval:** The user supplied the exact before/after description and
  instructed "do this", requesting a commit message and tracker update text.
  Approval covers the homepage SEO meta description only.
- **Approach and scope:** The homepage previously inherited its description from
  `app/layout.tsx`. A page-level override applies the approved text only to `/`
  and preserves the root default for other routes. The approved D014 title,
  social descriptions, JSON-LD, visible copy, headings and layout are unchanged.
  Existing uncommitted work is preserved.
- **Expected effects:** The homepage's `<meta name="description">` contains the
  approved text. Search engines can read it after deployment and recrawling.
- **Limitations:** Search engines may choose another snippet or shorten this
  description. No ranking improvement is measured or guaranteed.
- **Observed effects:** The local production homepage outputs exactly one
  description tag containing the approved 160-character text.
- **Validation (run by Codex in this task):**
  - `npx tsc --noEmit --incremental false` passed; `npm run build` passed
    (61 generated routes).
  - Compared title/meta-tag fingerprints across all 59 generated HTML pages
    against the build immediately before this change: only `index.html` changed,
    with no added or removed HTML pages.
  - Opened the production homepage in Chrome and confirmed the exact description
    and its 160-character length. The approved D014 title, sole H1, canonical,
    Open Graph/Twitter descriptions and JSON-LD page description are preserved.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D016 — Add Case studies to the navbar and a featured case studies section to the homepage

- **Date:** 19 October 2026.
- **Status:** Implemented and verified locally.
- **Why:** The user explicitly asked for a "Case studies" button in the navbar and a
  homepage section featuring the Santa Barbara Trapeze, Get Daily and 260 Sample
  Sale case studies. This reverses D013, which the user declined on 17 October 2026.
- **What changed:**
  - [components/Header.tsx](components/Header.tsx): added "Case studies"
    (`/case-studies`) between Industries and Blogs, in the desktop nav and the mobile menu.
  - [components/home/Work.tsx](components/home/Work.tsx): the unused placeholder
    (dashed "[Verified work example]" rows) is now the real featured section, rendered
    in [app/page.tsx](app/page.tsx) after Platforms and industries and before
    Founder's Thoughts. Heading, eyebrow and sub text reuse the placeholder's existing
    wording ("Selected work", "Evidence, with its context.", "Every example states its
    origin and the basis for any result."). Each card's tag, client, industry, summary,
    highlights and origin are read from `content/case-studies`; no new case study copy
    was written. A "Read the case study" link and an "All case studies" link point to
    the case study pages and `/case-studies`.
  - [app/globals.css](app/globals.css): replaced the unused `.work-grid` / `.work-list`
    rules with `.work-top`, `.work-cards` and `.work-card` styles using brand tokens
    only; cards stack to one column at 1040px and below.
  - [AGENTS.md](AGENTS.md): updated the navigation rule, the `home/` entry and removed
    the "Work.tsx not rendered" known gap.
- **Approval:** The user requested both changes in chat. The section's design and
  wording were not previewed first; the user may ask for changes.
- **Expected effects:** Case studies are reachable from every page's header and
  from the homepage; three more internal links to case study pages on `/`.
- **Limitations:** The homepage `WebPage`/`FAQPage` JSON-LD was not changed. The three
  featured studies are a fixed list in `Work.tsx`; they are skipped if a slug is
  drafted or removed. The Santa Barbara Trapeze study has no screenshot, so cards
  are text only for consistency.
- **Validation (run in this task):** `npx tsc --noEmit --incremental false` and
  `npm run build` passed. In the dev server: the desktop nav shows the link on one
  line at 1280px and 1041px with no overlap or horizontal overflow; the mobile menu
  lists it; the section renders three cards at 1280px and one column at 375px with
  no horizontal overflow.
- **Delivery:** No commit, push or deployment performed.

## D017 — Update the Platforms SEO title to the approved audit wording

- **Date:** 19 October 2026.
- **Status:** Implemented and verified locally.
- **Why:** Audit item #58 recommends explicitly naming GoHighLevel and HubSpot
  in the Platforms directory's SEO title. The user requested this exact rewrite.
- **What changed:** [app/platforms/page.tsx](app/platforms/page.tsx), `/platforms`,
  `metadata.title`:
  - Before: "CRM & Business Platforms We Implement | Sage Kite" (49 characters).
  - After: "GoHighLevel, HubSpot & CRM Platforms We Implement | Sage Kite"
    (61 characters).
- **Approval:** The user supplied the exact current title and instructed
  "Rewrite to" the replacement above. Approval covers this page's SEO title only.
- **Scope:** Meta description, Open Graph/Twitter titles and descriptions,
  canonical, JSON-LD, platform links, headings, body content and layout are
  unchanged. No new GoHighLevel page is created by this title update.
- **Expected effects:** The Platforms browser tab uses the approved title;
  search engines can read it after deployment and recrawling.
- **Limitations:** Search engines may shorten or rewrite the 61-character title.
  No ranking effect is measured or guaranteed. Social titles keep their existing
  wording within this approved scope.
- **Observed effects:** The local production Platforms page outputs exactly one
  title with the approved wording (61 characters, with a single decoded `&`).
- **Validation (run by Codex in this task):**
  - `npx tsc --noEmit --incremental false` passed; `npm run build` passed
    (61 generated routes).
  - Compared all meta tags and parsed JSON-LD in the generated Platforms HTML
    before and after this change: unchanged.
  - Opened `/platforms` from the production server in Chrome and confirmed the
    exact document title. The sole H1, meta description, Open Graph/Twitter
    titles and canonical remain unchanged.
  - Application diff contains only the approved `metadata.title` replacement.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D018 — Set the approved Platforms meta description

- **Date:** 19 October 2026.
- **Status:** Implemented and verified locally.
- **Why:** Audit item #59 proposes a Platforms directory description that
  explicitly names GoHighLevel and connects implementation to how a business sells.
- **What changed:** [app/platforms/page.tsx](app/platforms/page.tsx), `/platforms`,
  `metadata.description`:
  - Before (146 characters): "Sage Kite implements CRM and business platforms for
    SMEs, including HubSpot, Keap, Follow Up Boss, ServiceTitan, Kajabi, Clio Grow
    and Bloomerang."
  - After (151 characters): "We implement GoHighLevel, HubSpot, Keap, Follow Up
    Boss, ServiceTitan, Kajabi, Clio Grow and more, each set up around how your
    business actually sells."
- **Approval:** The exact current and suggested descriptions were shown in chat.
  The user approved the suggested text with "go with suggested". Approval covers
  this page's SEO meta description only.
- **Scope:** The approved D017 title is preserved. Social titles/descriptions,
  share images, canonical, JSON-LD, headings, visible content and layout are
  unchanged. No new platform page is created. Existing uncommitted work remains.
- **Expected effects:** The Platforms meta description contains the approved
  wording, available to search engines after deployment and recrawling.
- **Limitations:** Google can choose another snippet or shorten it. No search
  ranking or traffic improvement has been measured or guaranteed.
- **Observed effects:** The local production Platforms page outputs exactly one
  meta description with the approved 151-character text.
- **Validation (run by Codex in this task):**
  - `npx tsc --noEmit --incremental false` passed; `npm run build` passed
    (61 generated routes).
  - Compared the generated Platforms title, all other meta tags and parsed
    JSON-LD against the preceding build: unchanged.
  - Opened `/platforms` from the production server in Chrome and confirmed the
    exact description, its 151-character length and a single description tag.
    The approved D017 title, sole H1, canonical and social descriptions are
    preserved.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D019 — Add an unlisted, frontend-only blog studio for the SEO team

- **Date:** 20 October 2026.
- **Status:** Implemented and verified locally. Frontend only; it does not publish.
- **Why:** The user wants the hired SEO team to write and upload blog posts without
  editing code, based on the supplied prototype (`index (1).html`, a "GHL Scale Up"
  blog CMS demo) and three reference screenshots of another admin panel.
- **Decisions by the user (asked in chat):**
  - Storage: undecided between Supabase and Sanity; "leave it for now make the whole
    frontend". Posts are therefore saved in the browser behind a `StudioStore`
    interface so a backend can replace it in one file.
  - Protection: "Hidden URL only", after being told that anyone with the link could
    create, edit and delete posts once a backend exists. No login was added.
- **What changed:**
  - New unlisted route [app/sk-studio-ufn5xdafhll7/page.tsx](app/sk-studio-ufn5xdafhll7/page.tsx)
    (random path): metadata `robots` noindex/nofollow/nocache and `referrer: no-referrer`;
    not in `sitemap.ts`; not in `robots.ts`, because robots.txt is public and would
    reveal the path. Nothing links to it.
  - New [components/blog-studio/](components/blog-studio/): post list (status tabs,
    search, category and source filters, the 8 existing code posts shown read-only),
    editor drawer (Content / SEO / Settings), block builder (heading H2/H3, paragraphs
    with **bold** / *italic* / [links], list, image, quote, table, YouTube video, FAQ,
    divider), Google and social previews, a publishing checklist built from
    docs/blog-seo-schema.md and docs/new-page-checklist.md, a full-page preview using
    the live `.article` classes and `BlogGuide`, JSON export/import, image upload
    (resized to WebP in the browser).
  - Prototype features adapted to site rules: one excerpt field doubles as meta
    description (as `blogMetadata.ts` does); canonical is derived from the slug, not
    editable; the slug locks after first publish; categories come from `CATEGORIES`.
    Left out: the prototype's CTA block (every post already ends with the booking CTA),
    image+text float layout, template and TOC selectors, OG image override and the
    placeholder sidebar sections (dashboard, team, settings).
  - Styling: brand tokens only, Manrope via `var(--sans)`, coral primary buttons with
    ink text. The prototype's own colours and the "GHL Scale Up" branding were not used.
  - [AGENTS.md](AGENTS.md): studio added to "Where things live", "Known gaps" and "Do not".
  - [docs/blog-studio.md](docs/blog-studio.md) (requested by the user): file map, data
    model, features and saving rules as built, plus untested integration sketches for
    authentication and admin access, Supabase, Sanity and rendering studio posts on
    the live site. The sketches are marked untested; the integration is not built.
- **Approval:** The user asked for the studio and supplied the prototype. No public
  page content, metadata or design changed; the live blog is unaffected.
- **Expected effects:** The SEO team can draft posts and check them against the site's
  SEO rules. Nothing they save reaches sagekite.com.
- **Limitations:**
  - Posts and uploaded images live in one browser's localStorage (about 5 MB). They are
    not shared between people or devices and are lost if browser data is cleared;
    export is the only backup.
  - "Published" and "Scheduled" are labels only; studio posts are not rendered on
    /blog, in the sitemap or in JSON-LD. Going live needs a backend store and a
    `/blog/[slug]` route that renders `StudioArticle` inside `BlogArticleLayout`.
  - The Google Analytics tag in the root layout still loads on this page, so its
    path is recorded in GA.
  - Before any backend can write to the live site, authentication is needed.
- **Validation (run by Claude in this task):**
  - `npx tsc --noEmit --incremental false` passed; `npm run build` passed, with
    `/sk-studio-ufn5xdafhll7` statically generated.
  - Drove the production build in headless Chrome: created a post, added every block
    type, published through the recommendations dialog, previewed, reloaded and found
    it persisted. Checked: meta robots `noindex, nofollow, nocache`, referrer
    `no-referrer`, no canonical, one `<h1>` in the preview, heading ids match the
    guide, the FAQ heading is added automatically, `javascript:` links render as
    text, a URL with parentheses links correctly, no horizontal scroll at 390px, no
    console errors.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D020 — Rename the decision log back to decision.md

- **Date:** 20 October 2026.
- **Status:** Implemented locally.
- **Why:** The user asked to "correct the name of the file deciosn.md to
  decision.md". This reverses the D009 rename (`decision.md` → `deciosn.md`); the
  D009 entry is kept unchanged as history.
- **What changed:** `deciosn.md` renamed to `decision.md` (plain `mv`, not
  `git mv`, so nothing was staged). References updated in [AGENTS.md](AGENTS.md),
  [app/sitemap.ts](app/sitemap.ts), [app/sk-studio-ufn5xdafhll7/page.tsx](app/sk-studio-ufn5xdafhll7/page.tsx),
  [content/share-image.ts](content/share-image.ts) and [docs/blog-studio.md](docs/blog-studio.md)
  (comments and documentation only; no runtime code changed).
- **Approval:** Explicitly requested by the user.
- **Validation:** Searched the repository (excluding `node_modules`, `.next`, `.git`):
  the only remaining "deciosn.md" is the historical D009 line.
- **Delivery:** No commit, push or deployment performed. The user commits manually.
  Git will show `deciosn.md` as deleted and `decision.md` as new until both are staged.

## D021 — Plan: Sanity storage and a signed-in dashboard at /admin/blogs

- **Date:** 20 October 2026.
- **Status:** Proposed (plan written). Nothing is implemented.
- **Why:** The user asked to set up Sanity first and for a written plan, without
  code yet. For the editor, the user chose: "Build your custom blog dashboard in
  Next.js at a route such as /admin/blogs. The client signs in there and manages
  blogs. Your server securely communicates with Sanity."
- **What changed:** Added [docs/sanity.md](docs/sanity.md) (architecture, decisions
  needed, prerequisites, data design, file list, phases, pitfalls, sources). Pointers
  added in [AGENTS.md](AGENTS.md) and [docs/blog-studio.md](docs/blog-studio.md).
- **Key findings recorded in the plan (checked 20 October 2026):** `@sanity/client` 8
  needs Node ≥22.12 (this machine runs 22.11.0); `next-sanity` 13.3.4 requires the
  `sanity` Studio and `styled-components` as peers, so the plan uses `@sanity/client`
  only; Sanity's Free plan allows public datasets only, but `drafts.*` documents are
  not readable without a token; Vercel Function request bodies are capped at 4.5 MB;
  Vercel Hobby cron jobs run once per day.
- **Decisions still open:** sign-in method (recommended: Auth.js v4 with Google),
  admin vs editor roles, Sanity and Vercel plans, project ownership, scheduled
  publishing at launch, migration of posts from the hidden studio.
- **Approval:** Plan requested by the user; implementation not yet approved.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D022 — Connect the blog studio to Sanity, for local use only

- **Date:** 20 October 2026.
- **Status:** Implemented. Typecheck and build pass; Sanity writes not yet tested (no token).
- **Why:** The user said "leave the auth for now focus on setting up the sanity for now",
  after sharing the team lead's reference chats (custom dashboard, server talks to Sanity).
- **Safety choice (made by Claude, explained to the user):** without sign-in, a deployed
  studio using the Sanity token would let anyone with the URL read every draft and edit
  or delete posts. So `getStudioStorage()` returns Sanity only when `NODE_ENV` is not
  production and all three env vars are set; the deployed studio keeps browser storage.
  Every Server Action re-checks this. Remove the check only when authentication exists.
- **What changed:**
  - Added `@sanity/client` ^7.27.0 (7.x supports Node ≥20; this machine has 22.11.0,
    while 8.x needs ≥22.12).
  - New [lib/sanity/client.ts](lib/sanity/client.ts) and [lib/sanity/blogPosts.ts](lib/sanity/blogPosts.ts)
    (server-only client; drafts and scheduled posts as `drafts.<id>`, published as `<id>`).
  - New [components/blog-studio/actions.ts](components/blog-studio/actions.ts) (list, save,
    delete, image upload, with server-side validation) and
    [components/blog-studio/server.ts](components/blog-studio/server.ts) (storage mode).
  - [store.ts](components/blog-studio/store.ts): `sanityStudioStore` beside the browser store;
    `save()` now returns the stored post; inline images are uploaded on save, so importing
    an export migrates browser posts and their images.
  - [BlogStudio.tsx](components/blog-studio/BlogStudio.tsx): takes the storage mode;
    sidebar and messages name the active store; load and delete errors are shown.
  - [page.tsx](app/sk-studio-ufn5xdafhll7/page.tsx): passes the storage mode.
  - [next.config.ts](next.config.ts): `experimental.serverActions.bodySizeLimit: "4mb"`.
  - `.env.example`, [AGENTS.md](AGENTS.md), [docs/blog-studio.md](docs/blog-studio.md),
    [docs/sanity.md](docs/sanity.md) updated. Env names follow the user's `.env`:
    `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_WRITE_TOKEN`.
- **Not changed:** the live blog, sitemap and schema; no public page content or design.
- **Validation (run by Claude):** `npx tsc --noEmit --incremental false` and `npm run build`
  passed. Production build in headless Chrome: studio uses browser storage and shows why,
  full create/publish/preview/reload flow passes, no console errors, no horizontal scroll
  at 390px; no `SANITY_API_WRITE_TOKEN` or Sanity server code in `.next/static`. The
  user's running dev server shows the "Sanity is not configured" reason (no token).
  `ALL_BLOG_POSTS_QUERY` and the `_id in $ids` query run without error against project
  `lk42drbi` / `production` at API version 2026-10-20 (both returned `[]`).
- **Limitations:** Sanity writes, transactions and asset upload are untested until a
  token is added; `scheduledFor` is still stored without a time zone; deleted posts leave
  their image assets in Sanity; no `development` dataset exists yet.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D023 — Sanity connection tested end to end on the development dataset

- **Date:** 20 October 2026.
- **Status:** Verified.
- **Setup by the user:** added an Editor `SANITY_API_WRITE_TOKEN` to `.env`, created the
  `development` dataset in project `lk42drbi`, and set `NEXT_PUBLIC_SANITY_DATASET=development`.
  The user chose the development dataset over testing on production.
- **Test (run by Claude):** headless Chrome against the user's `npm run dev` server,
  with Sanity's public API (no token) used to check what anyone can read. **20/20 passed:**
  - Sidebar showed "Saved in Sanity" / "development"; no load error.
  - Featured and block images uploaded to `cdn.sanity.io/images/lk42drbi/development/…`;
    the CDN served the image.
  - Draft saved; **not readable without a token**; loaded again in a fresh browser
    (empty localStorage), with formatting text and image URLs intact.
  - Publish: one public document under the plain id, `status: published`, `publishedAt`
    set, no leftover `drafts.` copy.
  - Unpublish (status → Draft): no longer public; slug stayed locked.
  - Delete: gone after reload.
  - CORS: loading the studio made no browser requests to `*.sanity.io` and logged no CORS
    errors; only `lib/sanity/client.ts` (server-only) imports `@sanity/client`. Documented
    in docs/sanity.md §3.3 after the team lead raised CORS.
- **Clean-up:** the test post was already deleted by the test; its one image asset (both
  uploads were the same file, so Sanity stored it once) was deleted with the token. The
  dataset now holds only Sanity's 12 system documents (permission groups, retention).
- **Not tested:** server-side rejection when the browser checklist is bypassed, featured
  unfeaturing across posts, scheduled posts, import of a browser export.
- **Delivery:** No code changed in this step; no commit, push or deployment performed.

## D024 — Show published Sanity posts on the public blog

- **Date:** 20 October 2026.
- **Status:** Implemented and verified locally on the `development` dataset. Not deployed.
- **Why / approval:** The user asked to "integrate Sanity with the existing public blog":
  `/blog` and `/blog/[slug]` on the `development` dataset, published posts only, sitemap and
  related posts, existing design/URLs/SEO preserved, metadata, canonical, OG images, image
  optimisation, invalid slugs and revalidation verified, nothing written to `production`,
  no sign-in or deployment yet.
- **What changed:**
  - New `content/blog/live.tsx` (server-only): code posts + published Sanity posts;
    `toBlogPost()` rejects unpublished or incomplete posts and slugs used by code posts.
    The sync selectors were removed from `content/blog/index.tsx` (registry unchanged).
  - New `app/blog/[slug]/page.tsx` (Sanity posts; 404 otherwise) and `app/blog/layout.tsx`
    (`revalidate = 60` for every page under /blog, no markup).
  - `app/blog/page.tsx`, `components/blog/BlogArticleLayout.tsx`, `app/sitemap.ts`: async,
    read `content/blog/live.tsx`; sitemap `revalidate = 60`.
  - New `lib/sanity/image.ts`; `blogMetadata.ts` / `blogJsonLd.ts` use it (output unchanged
    for `/public` images; Sanity share image is a 1200x675 crop).
  - `lib/sanity/client.ts`: public read client without token. `lib/sanity/blogPosts.ts`:
    `PUBLISHED_BLOG_POSTS_QUERY`.
  - `next.config.ts`: `images.remotePatterns` for this project's `cdn.sanity.io` images.
  - `components/blog-studio/actions.ts`: `revalidatePath('/blog', 'layout')` and
    `revalidatePath('/sitemap.xml')` after save and delete.
  - `components/blog-studio/StudioArticle.tsx`: Sanity article images get a CDN `srcSet`
    (720/1080/1440, `auto=format`) and width/height; other images unchanged.
  - `components/blog-studio/postUtils.ts`: new required checklist item, featured image must
    be an upload or a `/images/…` path (next/image rejects other hosts).
  - `components/blog/BlogGuide.tsx`: type-only import from `content/blog/types` (keeps
    server-only code out of the client bundle).
  - Docs: AGENTS.md, docs/blog-studio.md §1/§10/§11, docs/sanity.md, docs/blog-seo-schema.md.
- **No content or design change** to existing pages: verified against a build of the last
  commit (below). The only visible difference is that published Sanity posts appear as
  cards in the listing and "Keep reading", as requested.
- **Validation (run by Claude):**
  - `npx tsc --noEmit --incremental false` and `npm run build` pass. Build output: only the
    valid published fixture prerendered under `/blog/[slug]`; all /blog routes and the sitemap
    report Revalidate 1m.
  - Fixtures in `development`: published, draft (`drafts.`), scheduled, published without
    excerpt, published with an external image, status "draft" on a public id, and a
    published post reusing the code slug `what-is-dubsado`.
  - **132/132 checks** against `next start`: for `/blog` and all 8 code posts, status, title,
    canonical, every meta tag, JSON-LD and h1 are identical to a build of HEAD (`c03bae6`);
    hero images identical; listing keeps every code card in order with the Sanity card
    added; "Keep reading" shows the 3 newest same-category posts. Sanity post: 200, ISR
    cache header, title, one description, canonical = og:url (no trailing slash), og:type
    article, og/twitter image = 1200x675 crop served as JPEG, keywords, indexable, one h1,
    Article/Breadcrumb/FAQPage JSON-LD with absolute image URLs and dubsado Service link,
    hero via next/image returned as WebP/AVIF, article image srcset served as WebP/AVIF,
    loads in Chrome with no console errors, no horizontal scroll at 390px. 404 (noindex)
    for the draft, scheduled, incomplete, external-image and mismatched fixtures, an unknown
    slug and malformed slugs. Collision post ignored; `/blog/what-is-dubsado` unchanged;
    featured post unchanged. Sitemap = previous URLs + the Sanity post only.
  - **Revalidation:** after publishing a new post and unpublishing one with the server
    running, the new slug rendered immediately (on demand); the cached listing and the
    unpublished page stayed until the 60 s window, then the listing showed the new post and
    dropped the old one, the unpublished page returned 404, and the sitemap updated.
  - Build and serve with the Sanity env vars empty: builds; only the 8 code posts; Sanity
    slugs 404.
  - Studio flow on the dev server (Sanity mode): **23/23**, including the published post
    rendering at `/blog/<slug>` and in `/blog`, and 404 after unpublishing.
  - Clean-up: all fixtures and test images deleted from `development` (only Sanity system
    documents remain). `production` public document count 0 before and after.
- **Not verified:** the on-demand `revalidatePath` calls in a production build: Sanity
  writes from the studio are disabled when `NODE_ENV` is production (D022), so in
  production they can only run once sign-in exists. Time-based revalidation (60 s) was
  verified instead. Vercel's environment variables were not inspected or changed.
- **Limitations:** scheduled posts never go live automatically; if Sanity is unreachable
  during `next build` with the env vars set, the build fails (by design, so posts are not
  silently dropped); image assets of deleted posts stay in Sanity.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D025 — Fix YouTube Error 153 in the blog studio preview

- **Date:** 21 October 2026.
- **Status:** Fixed and verified locally. Not deployed.
- **Reported by the user:** the YouTube block in the draft "Test post: dashboard check"
  (`test-post-dashboard-check`, `development` dataset) showed "Video player configuration
  error, Error 153" in the studio Preview; the video (`M7lc1UVf-VE`) plays on YouTube.
- **Root cause (verified):** the studio page sets `referrer: 'no-referrer'` (D019, to keep its
  unlisted URL private). The YouTube iframe in `StudioArticle.tsx` had no referrer policy of
  its own, so it inherited `no-referrer` and YouTube received no Referer. Reproduced in
  Chrome against the dev server: studio preview sent no Referer and showed Error 153; the
  same embed injected on `/blog` (no page policy) sent `http://localhost:3000/` and played.
  External references tie Error 153 to a missing referrer and recommend
  `strict-origin-when-cross-origin` (Simon Willison's TIL; University of Michigan KB).
- **Fix:** `referrerPolicy="strict-origin-when-cross-origin"` on the YouTube iframe in
  [components/blog-studio/StudioArticle.tsx](components/blog-studio/StudioArticle.tsx)
  (3 lines). It overrides the page policy for that request and sends only the origin, never
  the studio path. Public blog pages already used this policy by default, so their behaviour
  is unchanged. One-line rule added to AGENTS.md "Do not".
- **Validation (run by Claude):** after the fix the studio preview sent Referer
  `http://localhost:3000/` (origin only) and the player loaded the video title with no Error
  153; the control on `/blog` still played. `npx tsc --noEmit` and `npm run build` pass.
- **Safety:** for this fix the test post was only previewed (still Draft, not publicly
  readable). `production` dataset: 0 documents when checked for this entry. Nothing deployed.
  Later, during the user's manual testing, the test post was published locally in
  `development` (D026), set back to Draft (D027) and deleted (D029).
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D026 — "Keep reading" investigation; spacing below article tags

- **Date:** 21 October 2026.
- **Status:** Issue 1 not a bug (no change). Issue 2 fixed, verified locally and approved by the
  user. Not deployed.
- **Reported by the user:** on `/blog/test-post-dashboard-check` (published in `development`,
  category Business Growth) (1) no "Keep reading" section, (2) the tags sit directly on the
  next section.
- **Issue 1, investigated, no code change:** `BlogArticleLayout` shows up to 3 other published
  posts in the **same category** and hides the section when there are none
  (`related.length > 0`). It reads `content/blog/live.tsx` (code posts + published Sanity posts
  from the configured dataset, `development` locally). Code posts are CRM or Automation; the
  only published Sanity post in `development` is the test post itself. So no post qualifies:
  expected behaviour. The earlier manual test plan step ("yours appears under Keep reading on
  any post in the same category") was imprecise: it needs another published post in that
  category. Showing other categories as a fallback would be a design/content change needing
  approval; not done.
- **Issue 2, root cause:** `.article-tags` in `app/globals.css` had 44px margin and 28px padding
  above the tags but nothing below, and `.article` has no bottom padding, so the next section
  started at the tags' edge: the CTA band when there are no related posts, and the "Keep
  reading" divider on every existing post (measured 0px on both, 1440px and 390px). Pre-existing
  on all blog posts; only obvious when the tinted CTA follows.
- **Fix:** `.article-tags` padding `28px 0 clamp(40px, 5vw, 56px)` (was `padding-top: 28px`).
  The class is used only by blog articles and the studio preview.
- **Effect on existing pages:** spacing only. On all 8 live code posts the "Keep reading" divider
  moves 40–56px further below the tags; no content, colour or typography change.
- **Approval:** on 21 October 2026 the user reviewed before/after browser captures (test article
  and `/blog/what-is-dubsado`, 1440 × 900 and 390 × 844; measured gap 0 → 56px desktop,
  0 → 40px mobile, Before from the committed CSS) and wrote: "I approve keeping the global
  tag-spacing improvement: 56px on desktop and 40px on mobile." Approval covers this rule only.
  The user asked to keep it local (no deploy or push) pending their remaining SEO and mobile tests.
  After finishing those tests the user confirmed it again: "I have also reviewed and approved the
  global tag-spacing improvement" (D029).
- **Validation (run by Claude):** measured from the tag chips to the next section: 0px →
  56px at 1440px and 0px → 40px at 390px, on the test post (CTA follows) and on
  `/blog/what-is-dubsado` (related posts follow); before/after screenshots checked.
  `npx tsc --noEmit` and `npm run build` pass. No Sanity data changed.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D027 — Load Google Analytics with next/script (fixes "Encountered a script tag")

- **Date:** 21 October 2026.
- **Status:** Fixed and verified locally (dev and production build). Not deployed.
- **Reported by the user:** console error "Encountered a script tag while rendering React
  component…", pointing at the GA scripts in `app/layout.tsx`, noticed after changing the test
  post from Published to Draft.
- **Root cause (verified):** the root layout rendered GA as raw `<script>` elements. They work
  only when the server sends them as finished HTML. A direct load of a 404 under `/blog`
  (`notFound()` in `app/blog/[slug]/page.tsx`, e.g. the now-unpublished test post or any unknown
  blog slug) returns Next's HTTP-error fallback document (`NEXT_HTTP_ERROR_FALLBACK;404`), and
  React renders the root layout, including `<head>`, in the browser. React warns about the inline
  `<script>` and never executes it: `window.gtag` was **undefined** on those pages in dev and in a
  production build (silently there). Normal pages, top-level 404s, client navigation and
  `router.refresh()` (what a saving Server Action does) did not reproduce it.
- **Did the status change cause it?** Only indirectly: it turned the post's URL into a 404,
  and loading that URL hits the fallback. Saving itself does not trigger the error.
- **Fix:** [app/layout.tsx](app/layout.tsx): the two raw scripts in `<head>` replaced by
  `next/script` at the end of `<body>`: `<Script src="https://www.googletagmanager.com/gtag/js?id=G-QQFH3W77TS" strategy="afterInteractive" />`
  and `<Script id="google-analytics" strategy="afterInteractive">` with the same init code
  (dataLayer, `gtag()`, `gtag('js')`, `gtag('config', 'G-QQFH3W77TS')`). Measurement ID and
  `window.gtag` (used by `ContactForm`'s `generate_lead`) unchanged. No new dependency
  (`@next/third-parties` is not installed). AGENTS.md updated, plus a "Do not" rule.
- **Behaviour change:** GA now loads after hydration (`afterInteractive`, the Next.js
  recommendation) instead of during HTML parsing; a visitor who leaves before hydration may not
  be counted.
- **Validation (run by Claude, Chrome, dev server and `next start`):** before the fix, 1 "script
  tag" error and `window.gtag` undefined on `/blog/test-post-dashboard-check` and
  `/blog/does-not-exist` (dev); `window.gtag` undefined on both in production. After: 0 errors
  and `window.gtag` defined on all 8 pages checked (both `/blog` 404s, a top-level 404, `/`,
  `/blog`, a post, `/contact`, the studio), in dev and production; one gtag.js tag in the DOM
  and one `config` call after client navigation and `router.refresh()`; one `page_view` per
  full load and per client navigation (no duplicates); calling `gtag('event', 'generate_lead',
  …)` as ContactForm does produced one dataLayer entry and a `/g/collect` request with
  `en=generate_lead` and `event_label=contact_form_submission`. `npx tsc --noEmit` and
  `npm run build` pass.
- **Not checked:** a real contact-form submission (it would post to the GoHighLevel webhook);
  GA reports in the Google Analytics UI.
- **Safety:** no Sanity writes and no post status changes (the reproduction used the existing
  404 and read-only navigation). Nothing pushed or deployed.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D028 — Readable "Delete post" button in the studio's confirmation dialog

- **Date:** 21 October 2026.
- **Status:** Fixed and verified locally. Not deployed.
- **Reported by the user:** in the studio's "Delete this post?" dialog the **Delete post** label
  was dark on a dark navy button.
- **Root cause (measured in Chrome):** `.btnDangerSolid` sets `color: var(--warm-white)`, but the
  studio reset `.app button { font: inherit; color: inherit; }` has higher specificity (class +
  element beats one class), so the label inherited the dialog's dark-sage text: `rgb(52,64,51)`
  on `rgb(36,55,70)`, contrast 1.13:1, and 1.00:1 on hover (dark-sage background). Not a
  disabled state: `disabled=false`, no `aria-disabled`, opacity 1, pointer events on.
- **Fix:** [components/blog-studio/BlogStudio.module.css](components/blog-studio/BlogStudio.module.css):
  added `.app .btnDangerSolid { color: var(--warm-white); }`. Brand tokens only. Studio UI only
  (the public site does not use these styles).
- **Scope (corrected in the final audit):** `.btnDangerSolid` is the confirm button of every
  danger dialog in `ConfirmModal`, so the fix changes two buttons, not one: **Delete post**
  ("Delete this post?") and **Discard changes** ("Discard unsaved changes?"). Discard changes
  had the same dark label on the ink background and now has the same warm-white text. Both use
  the same rule, so the same contrast applies by calculation; only Delete post was measured
  and screenshotted in the browser.
- **Validation (run by Claude):** opened the dialog for the test post at 1440 × 900 and 390 × 844,
  measured computed colours, screenshotted, then closed it with **Cancel** (never confirmed).
  Delete post: 11.26:1 (9.99:1 on hover); Cancel unchanged at 9.99:1; button still enabled;
  test post still listed after each run (studio showed 9 posts, 8 published, 1 draft).
  `npx tsc --noEmit` and `npm run build` pass.
- **Not changed (noted for later):** the same reset also overrides the declared text colour and
  font of other studio buttons (e.g. `.btn`'s 0.875rem bold, `.btnPrimary`'s ink text), which
  inherit instead. They remain readable; changing the reset would alter the whole studio's look,
  so it was left for a separate, approved change.
- **Delivery:** No commit, push or deployment performed. The user commits manually.

## D029 — Test post deleted from the development dataset; manual testing complete

- **Date:** recorded 21 October 2026, from the user's report that day.
- **Status:** Reported by the user; partly confirmed by read-only local checks.
- **Reported by the user:** manual testing of the blog dashboard is complete ("The manual
  testing of the Sage Kite blog dashboard is complete."). After verifying draft privacy,
  missing-featured-image validation, duplicate-slug validation, local publishing and rendering,
  sitemap behaviour, SEO metadata and structured data, mobile layout and unpublishing, the user
  deleted "Test post: dashboard check" (`test-post-dashboard-check`) from the `development`
  dataset. The studio dashboard then showed 8 posts, 8 published, 0 drafts (the 8 code posts;
  it showed 9 posts, 8 published, 1 draft before the deletion, D028).
- **Checked by Claude (read-only, local build of the working tree, `.env` on `development`):**
  `npm run build` prerendered no page under `/blog/[slug]`; under `next start`,
  `/blog/test-post-dashboard-check` returned 404 and `/sitemap.xml` listed 8 blog post URLs
  (the code posts), not the test post. This shows no published Sanity post in `development`.
  It does not show drafts or image assets.
- **Not verified:** a direct Sanity query for drafts, assets or the `production` dataset (a
  read-only query was blocked by the session's permission settings and not retried). The test
  post's uploaded image asset(s) probably remain in `development`, since deleting a post does
  not delete its assets (D024). They were not deleted.
- **Documentation corrected in the same step (final audit follow-up):** D025 safety note, D026
  status and approval, D028 scope (above); AGENTS.md `StudioArticle` description;
  docs/blog-studio.md video block referrer policy.
- **Delivery:** No code changed and no Sanity writes by Claude. No commit, push or deployment
  performed. The user commits manually.

## D030 — Team sign-in for the blog studio, so published posts reach the live blog

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally on a production build (`next build` + `next start`). Not committed,
  pushed or deployed. Vercel's environment variables were not read or changed.
- **Why:** The user asked for posts published in the studio to show on the live website. Until now the deployed
  studio could not write to Sanity at all (D022): without a login, anyone with the unlisted URL could have
  changed the live blog. Sign-in had to come first.
- **Approval:** The user chose, when asked: a **shared team password** (not Google sign-in) and **everyone who
  signs in may publish** (no admin/editor split). This also means a content change reaches the live blog
  without a separate approval step, which AGENTS.md's approval rule leaves to the user.
- **What changed:**
  - `components/blog-studio/auth-core.ts` (new): pure session logic. Cookie value `<expiry>.<HMAC-SHA256>`;
    the HMAC covers the expiry and a fingerprint of the password, so changing the password or the secret signs
    everyone out. Constant-time comparisons. Password 12+ characters and secret 32+ are required; weaker values
    count as "not set up".
  - `components/blog-studio/auth.ts` (new): reads `STUDIO_PASSWORD` and `STUDIO_SESSION_SECRET`, sets the cookie
    (HttpOnly, SameSite=Lax, Secure in production, `Path` limited to the studio URL, 7 days), a 700 ms delay on a
    wrong password and a best-effort brake of 8 wrong attempts per 15 minutes per client per server instance.
  - `components/blog-studio/auth-actions.ts` (new): sign-in and sign-out Server Actions.
  - `components/blog-studio/server.ts`: `getStudioStorage()` is now async. Sanity is used only when Sanity is
    configured and either the visitor is signed in, or (no team sign-in set up) the app runs in development.
    Without `STUDIO_*` on the deployed site nothing changes: still browser-only. The old
    `NODE_ENV === 'production'` block is gone; the sign-in replaces it.
  - `components/blog-studio/actions.ts`: all four Server Actions call the async check, so a direct call without
    a session is refused (the page is not the guard).
  - `app/sk-studio-ufn5xdafhll7/page.tsx`: `await connection()` so the page is rendered per request. Without it
    the page was prerendered at build time and showed the wrong state (found by the tests below).
  - `components/blog-studio/BlogStudio.tsx` and `.module.css`: a "Team password" form in the sidebar when signed
    out, a "Sign out" button when signed in, and honest messages (the old "The live site has not changed" text is
    now shown only in browser mode; Sanity mode says the post appears on the blog within a minute, and that
    scheduling does not publish automatically).
  - `.env.example`, AGENTS.md, docs/blog-studio.md, docs/sanity.md updated.
- **Expected effects:** With `STUDIO_PASSWORD`, `STUDIO_SESSION_SECRET`, the Sanity vars and
  `NEXT_PUBLIC_SANITY_DATASET=production` set on Vercel, a signed-in publish appears on `/blog`, the post page and
  the sitemap straight away (`revalidatePath`) and at the latest after 60 s. Browser-stored posts are not copied
  at sign-in: Export first, then Import after signing in.
- **Limitations:** One shared password, so nobody is recorded as the publisher and nothing separates admins from
  editors. The attempt brake is per server instance (serverless instances do not share memory). "Scheduled" still
  does not publish automatically. A published post is public and indexable at once (no per-post noindex).
- **Validation (run by Claude, local):** `npx tsc --noEmit` and `npm run build` pass. 15 unit checks on
  `auth-core.ts` (valid, expired, tampered, extended-expiry, wrong secret, changed password, garbage values).
  34 HTTP checks on a production build on port 3100 (`next start`, throwaway test credentials passed on the
  command line, `.env` untouched): signed-out page shows the sign-in form and no Sanity claim; list, save, delete
  and upload actions are refused without a session; wrong and non-string passwords are rejected, delayed and set
  no cookie; the right password sets an HttpOnly, SameSite=Lax, Secure, path-limited, 7-day cookie; forged,
  tampered, extended and empty cookies are refused; sign-out clears the cookie; the brute-force brake blocks even
  the right password. Browser run on that build against the `development` dataset: wrong password message, sign
  in, image upload, publish ("Published to Sanity"), the card on `/blog`, the post page (200), the sitemap and
  "Keep reading" updated immediately, sign out (studio back to browser mode, the post stays public), sign in,
  delete. The real live site showed nothing of it (post 404, not in sitemap).
- **Mistake during cleanup (development dataset only):** to remove the test image the cleanup deleted every
  image asset with no references in `development` (3). One was uploaded by this test; the other two
  (`audit-planning.webp`, `deal-closed.webp`) were not and were deleted without the user's say. Sanity assets
  cannot be restored. A CDN copy of `audit-planning` (a JPEG, not the original file) was saved; `deal-closed`
  was already gone from the CDN. The dataset held no documents at the time, so no post was broken. If the user
  was editing a post in the studio with those images, they must be uploaded again. Rule going forward: delete
  only assets this work created, by ID.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D031 — Security fixes from the studio audit: JSON-LD escaping, document validation, dataset guard, login hardening

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally (unit tests, a production build and HTTP tests). Not committed, pushed
  or deployed. Vercel settings were not read or changed. Nothing was written to either Sanity dataset.
- **Why:** The final security review of D030 found one configuration blocker and several hardening items. The user
  authorised fixing I1 to I4 locally, without deploying.
- **Approval:** User instruction of 21 October 2026 ("I authorize you to fix the critical issues locally, but not to
  deploy or push anything").
- **I1, stored XSS through JSON-LD (fixed):** `serializeJsonLd()` in
  [components/blog/blogJsonLd.ts](components/blog/blogJsonLd.ts) escapes `<` as `\u003c` (Next.js's documented
  fix) and the two Unicode line separators. The new [components/blog/JsonLd.ts](components/blog/JsonLd.ts)
  component is the only way [BlogArticleLayout.tsx](components/blog/BlogArticleLayout.tsx) embeds it, so Article,
  BreadcrumbList and FAQPage are all covered. Other JSON-LD on the site is written in code, not from Sanity, and was
  not changed.
- **I2, unrestricted writes and deletes (fixed):** post ids must be UUIDs
  ([lib/sanity/blogPosts.ts](lib/sanity/blogPosts.ts)), so image assets, `drafts.…` and system ids never match (the
  old pattern accepted `image-<hash>-1200x675-webp`). Documents are built from an explicit field list, so `_type`,
  `_id`, `_createdAt` and unknown keys sent by a client are dropped. A new pure validator,
  [lib/sanity/postValidation.ts](lib/sanity/postValidation.ts), checks every field's type and size and that
  category, platform and status are known values. `saveStudioPostAction` refuses to replace or delete an existing
  document of another type under the same id, and `deleteStudioPostAction` only matches `_type == "blogPost"`
  ([actions.ts](components/blog-studio/actions.ts)). A post from browser storage or an import with an older id shape
  gets a new UUID when first saved to Sanity ([store.ts](components/blog-studio/store.ts)).
- **I4, dataset guard (fixed):** [lib/sanity/guard.ts](lib/sanity/guard.ts). Vercel Preview is never writable and
  never offers sign-in. Production (Vercel Production or any `next start`) needs project `lk42drbi`, the dataset
  exactly `production` and a write token; development needs the project, a valid dataset name and a token. The
  Sanity write client runs the guard on every call. A signed-in visitor on production whose guard fails sees a new
  `blocked` state ("Publishing is blocked" and the reason) and every action returns it: no silent browser-storage
  fall-back and no other dataset. Signed-out visitors are not told about the misconfiguration.
- **I3, login rate limit (partly fixed, rest waiting for approval):** the limiter is now
  [components/blog-studio/rate-limit.ts](components/blog-studio/rate-limit.ts): 8 wrong passwords per client and 40
  in total per 15 minutes per instance, a bounded client table, and a client key that trusts `x-vercel-forwarded-for`
  / `x-forwarded-for` only on Vercel, where Vercel overwrites them (Vercel docs, "Request headers", checked 21 October
  2026); elsewhere everyone shares one bucket, so spoofing a header gains nothing. The passphrase must be 20+
  characters with 12+ different ones and no guessable word (this supersedes D030's 12-character minimum). A shared,
  durable limit needs a Vercel Firewall rule (WAF Rate Limiting, all plans, Hobby 1 rule, per-region counters, Pro
  usage-based pricing; Vercel docs checked 21 October 2026) or an external store. Both change infrastructure or
  cost, so they are described in docs/sanity.md ("Login rate limit") and **not** set up: the user decides.
- **Tests added:** `npm test` (`tests/`, Node's built-in runner with a small loader and stubs; no new dependency, no
  network, Sanity replaced by a recording fake): 49 tests: JSON-LD (6, including a negative control showing the old
  embedding broke out), guard (8), rate limit (8), auth-core and passphrase (7), Server Actions (20, including
  malicious ids, wrong document types, hostile extra fields, dataset/project/token/Preview refusals, unauthenticated
  and forged cookies, slug collision with all eight code posts, revalidation, upload limits and negative controls).
- **Other checks (run by Claude, local production build):** `npx tsc --noEmit` and `npm run build` pass. 27 HTTP
  checks on `next start` with throwaway credentials (unauthenticated refusals, cookie flags, blocked state, forged
  cookies, cross-origin requests, spoofed `X-Forwarded-For` no longer bypassing the limiter). A weak passphrase
  leaves sign-in off. No token, password or secret in any client bundle or rendered page. Structured data of all
  eight posts is identical to the live site's, now without any raw `<`. YouTube `referrerPolicy`, Analytics
  (`app/layout.tsx`), tag spacing (`app/globals.css`) and the Studio button styles are unchanged (`StudioArticle.tsx`,
  `layout.tsx` and `globals.css` identical to HEAD; the studio CSS only gained the sign-in form rules).
- **Not tested / assumptions:** behaviour on Vercel itself (that `VERCEL_ENV` is `production` or `preview` there and
  that `VERCEL=1` is set at runtime are Vercel's documented behaviour); the positive Sanity path against real Sanity
  (only against the fake); upload content-type is still the client's declaration.
- **Not done in this step:** I5 (raw Sanity error text returned to signed-in users), I6 (no X-Frame-Options or CSP)
  and I7 (inline image URLs not restricted). Done in D032.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D032 — Dedicated sign-in endpoint, generic errors, studio security headers and an image-source allowlist

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally (unit tests, a production build, HTTP tests and a real-browser check).
  Not committed, pushed or deployed. Vercel settings were not read or changed. Nothing was written to either Sanity
  dataset.
- **Approval:** User instruction of 21 October 2026: give sign-in its own endpoint so a WAF rule does not limit every
  studio action; implement I5, I6 and I7 with minimal changes; no external service or dependency without approval.
- **Dedicated sign-in endpoint:** sign-in moved from a Server Action to a Route Handler,
  [app/api/sk-studio-ufn5xdafhll7/login/route.ts](app/api/sk-studio-ufn5xdafhll7/login/route.ts) (`POST
  /api/sk-studio-ufn5xdafhll7/login`; the form in [BlogStudio.tsx](components/blog-studio/BlogStudio.tsx) calls it with
  `fetch`). The path keeps the studio's unguessable segment instead of the example `/api/studio/login`, so the endpoint
  cannot be found without the studio URL (a fixed, guessable path would have exposed the password to guessing without
  the secret URL). The sign-in Server Action was **removed** (it would have been a second, unlimited way to guess the
  password and would sit on the studio path); `auth-actions.ts` now only signs out. The route checks that the request
  comes from this site (Origin must match Host or X-Forwarded-Host: Route Handlers have no built-in check), accepts only
  `application/json` up to 1 KB, answers 401 / 429 (with `Retry-After`) / 503 / 400 / 403 / 413 / 415, and sets
  `Cache-Control: no-store`. The cookie is unchanged (HttpOnly, SameSite=Lax, Secure in production, `Path` = the studio
  page, 7 days); a server may set a cookie for another path of its own host, and Chrome accepted it. The in-app delay and
  per-client and global brake remain (defence in depth). New file [paths.ts](components/blog-studio/paths.ts) holds both
  URLs. **Vercel WAF rule, to be set by the owner:** path equals `/api/sk-studio-ufn5xdafhll7/login`, method POST, rate
  limit, fixed window 60 s, 10 requests, key IP (details, plans and pricing in docs/sanity.md). Saving, publishing,
  deleting and uploading post to the studio page path and are not touched by that rule. No dependency or external service
  was added.
- **I5, generic errors:** [actions.ts](components/blog-studio/actions.ts) now returns a message only when it was
  written in this app (`SafeError`, [lib/sanity/errors.ts](lib/sanity/errors.ts); also validation and guard
  messages). A failure from Sanity or the network becomes a generic sentence per action. The server log gets the action
  name and an HTTP status code, never the error text. A failed cache refresh after a successful write is logged and
  no longer turns the save into an error.
- **I6, security headers:** [next.config.ts](next.config.ts) sends, for the studio page and its sign-in endpoint only,
  `X-Frame-Options: DENY`, a CSP of just `frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src
  'none'`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, `X-Robots-Tag: noindex, nofollow,
  noarchive` and a restrictive `Permissions-Policy`. A full CSP was deliberately not added (it needs an allowlist for
  Next's inline scripts, Google Analytics, YouTube, cdn.sanity.io and `data:` previews); docs/blog-studio.md §10b
  describes how to roll one out as Report-Only. Public pages are unchanged.
- **I7, image sources:** [lib/sanity/image.ts](lib/sanity/image.ts) `isAllowedImageSrc`: a file under `/images/` or at
  the site root with an image extension, or an unmodified upload to this project's Sanity CDN. The server
  ([postValidation.ts](lib/sanity/postValidation.ts)) refuses anything else in the featured image, author image and
  image blocks, so a crafted request cannot insert a tracking pixel; `isUsableFeaturedImage` is the same rule; the live
  renderer ignores a stored author image that is not allowed and
  [StudioArticle.tsx](components/blog-studio/StudioArticle.tsx) renders only allowed sources (the studio preview alone
  also shows raster `data:` images just picked in the browser). The image field in the studio no longer advertises
  pasting a URL. This is a change for editors: an external image URL can no longer be used; upload it instead.
- **Tests (run by Claude):** `npm test` 65/65 (new: login route 6, image sources 5, generic errors and failed
  transaction and cache-refresh cases, crafted image requests, and the proof that a rate-limited login does not stop a
  signed-in editor from saving, listing and deleting). `npx tsc --noEmit` and `npm run build` pass. 45 HTTP checks on
  `next start` with throwaway credentials: headers on the studio page and endpoint (and absent on public pages), the old
  sign-in Server Action returns 404, every login status code and cookie flags, blocked state on a production runtime with
  the development dataset, forged cookies, cross-origin requests, spoofed `X-Forwarded-For` still ending in 429, and 30
  rapid editing requests in a row all answered (no 429). Browser run in Chrome: the form posts to the new endpoint, a
  wrong password shows the message, the right one signs in (cookie accepted), no console errors from the headers, and the
  YouTube embed still plays on the page with the new headers. Eight posts and the sitemap unchanged; structured data of all
  eight identical to the live site's, with no raw `<`; no token, password or secret in any built file; YouTube
  `referrerPolicy`, Analytics (`app/layout.tsx`), tag spacing (`app/globals.css`) and the Studio button styles unchanged.
- **Not tested / assumptions:** behaviour on Vercel itself (`VERCEL_ENV`, `VERCEL=1`, `Host` and `X-Forwarded-Host` as
  documented); the WAF rule (not set up); the positive Sanity path against real Sanity (fake client only); a full CSP.
- **Remaining risks:** the WAF rule is not yet configured, so until it is the only brake is per instance; counters in
  the WAF are per region; one shared password and stateless 7-day sessions (D030); upload content-type is still the
  client's declaration; Sanity sends images to visitors from cdn.sanity.io.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D033 — Studio image uploads are checked from the file's bytes, not the declared type

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build). Not committed, pushed or
  deployed. Vercel settings were not read or changed. Nothing was written to either Sanity dataset.
- **Why:** the remaining risk recorded in D032: `uploadStudioImageAction` accepted a file because the browser said it
  was `image/jpeg`, `image/png` or `image/webp`, and passed that declared type and the browser's file name to Sanity.
  A direct call to the action could send any bytes under an allowed label.
- **Approval:** User instruction of 21 October 2026: validate the actual file on the server, enforce an explicit
  allowlist, reject mismatched or unsupported content before calling Sanity, keep existing uploads and previews, and add
  regression tests. No content or design change; no dependency added.
- **Change:** new [lib/sanity/imageUpload.ts](lib/sanity/imageUpload.ts). `UPLOAD_IMAGE_FORMATS` is the allowlist (JPG,
  PNG, WebP). `detectImageType` recognises a format only from a complete file: JPEG starts `FF D8 FF` and ends `FF D9`;
  PNG has its signature, a 13-byte `IHDR` first and `IEND` as the last 12 bytes; WebP is `RIFF…WEBP` with a `VP8 `,
  `VP8L` or `VP8X` chunk and a RIFF size equal to the file size. `checkUploadedImage` refuses a declared type outside
  the allowlist ("Use a JPG, PNG or WebP image."), bytes that are none of the formats ("This file is not a valid JPG,
  PNG or WebP image.") and a mismatch ("This file's contents do not match its image type."). `uploadFileName` reduces
  the name to letters, digits and dashes (80 characters at most) with the detected extension.
  [actions.ts](components/blog-studio/actions.ts) checks the size, reads the bytes, runs the check, and only then calls
  Sanity, with the detected `contentType` and the cleaned `filename`. `ACCEPTED_IMAGE_TYPES` in
  [postUtils.ts](components/blog-studio/postUtils.ts) (the browser's file picker and pre-check) now derives from the
  same allowlist. The browser side (resize and re-encode to WebP, previews, browser-only storage) is unchanged.
- **Expected effects:** editors see no difference: the studio re-encodes every picked image in the browser to WebP (or
  PNG where a browser cannot encode WebP; that PNG, previously stored under a `.webp` name, is now named `.png`).
  Images already in Sanity and posts that use them are not touched. A crafted request with SVG, HTML, GIF, a mislabelled
  image or an image with data appended is refused before Sanity.
- **Tests (run by Claude):** `npm test` 75/75 (10 new). New [tests/image-upload.test.mts](tests/image-upload.test.mts):
  real 2x2 JPG, PNG and lossy, lossless and alpha WebP (made once with sharp, embedded in
  [tests/fixtures/images.mts](tests/fixtures/images.mts)) pass; all 48 JPG, PNG and WebP files in `public/` pass;
  incorrect MIME types (SVG, HTML, GIF, AVIF, HEIC, `image/jpg`, octet-stream, parameters, empty) are refused;
  six signature mismatches are refused; 16 unsupported, fake, truncated or padded files are refused under every allowed
  type; file-name cleaning; negative control. In [tests/actions.test.mts](tests/actions.test.mts), the real action
  against the fake Sanity client: 10 bad uploads refused with no Sanity call, Sanity receives the detected type, cleaned
  name and unchanged bytes (including the PNG fallback named `.webp`), and an oversized file is refused. The upload
  helper there now sends a real WebP instead of 100 zero bytes, which the new check rightly refuses. Mutation check:
  with the previous declared-type check restored, the two new action tests fail. `npx tsc --noEmit` and `npm run build`
  pass. `next start` (write token and studio secrets blanked) serves the studio, `/blog` and `/` with 200.
- **Not tested / assumptions:** a real upload from a browser to Sanity (not done: no writes to either dataset); the
  browser's actual canvas output was not captured, so its acceptance rests on the format rules and the sharp fixtures.
- **Limitations / remaining risks:** the check is of the file's structure, not a full decode: a well-formed file with
  hidden content inside its chunks (metadata, a crafted image body) still passes, and Sanity processes it; uploads are
  served from cdn.sanity.io, not this site. Image dimensions are not checked on the server. The browser pre-check
  still reads `file.type`, but the server no longer depends on it.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D034 — Studio password minimum lowered from 20 to 12 characters

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build). Not committed, pushed or
  deployed. No Vercel setting, secret value or Sanity dataset was read or changed.
- **Why:** the user asked that a 12-character `STUDIO_PASSWORD` be accepted in local development and in Production.
  This supersedes the 20-character minimum of D031/D032 (and returns to D030's 12, with the guessability checks kept).
- **Approval:** User instruction of 21 October 2026. No content or design change.
- **Change:** [auth-core.ts](components/blog-studio/auth-core.ts): `MIN_PASSWORD_LENGTH` 20 → 12. The distinct-character
  minimum went 12 → 8, because 12 different characters would have made every 12-character password with one repeated
  letter fail; 8 still rejects repeated and patterned strings (`aaaaaaaaaaaz`, `abcdabcdabcd`). The guessable-word list is
  unchanged but is now also checked after common symbol swaps (`0→o`, `3→e`, `4→a`, `5→s`, `@→a`, `$→s`, `!→i`, `1→i/l`), so `Passw0rd-2026`
  is refused. The rule is one function used by both environments, so development and Production behave identically.
  `STUDIO_SESSION_SECRET` rules are unchanged (32+, different from the password). Comments, AGENTS.md,
  `.env.example` and docs/sanity.md updated.
- **Tests (run by Claude):** `npm test` 77/77. [tests/auth-core.test.mts](tests/auth-core.test.mts): exactly 12
  characters accepted, 11 refused, repeated, patterned and guessable 12+ character values refused, secret rule still 32+.
  [tests/login-route.test.mts](tests/login-route.test.mts): a 12-character password signs in under both Production and
  development settings; 11 characters and weak ones give 503 and set no cookie in both.
  [tests/actions.test.mts](tests/actions.test.mts): sign-in configured with 12 characters in both environments, not with 11.
  `npx tsc --noEmit` and `npm run build` pass. Test passwords are made-up values, not real secrets.
- **Limitations / remaining risks:** a 12-character password is easier to guess than a 20-character one. Offline
  guessing is not possible here (the password is never exposed to the browser), so the online brake (8 wrong passwords
  per client and 40 in total per 15 minutes per instance, plus the Vercel WAF rule in docs/sanity.md) now carries more
  of the protection. The word list cannot catch every weak password; a longer random password is still recommended.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D035 — Mandatory full-screen sign-in dialog for the blog studio; no browser-only mode

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build, browser checks on localhost).
  Not committed, pushed or deployed. No Vercel setting was read or changed. Nothing was written to Sanity.
- **Why:** the user asked that nobody can use the studio without signing in. Until now a visitor without a session
  got a browser-only studio (and on Preview, or with sign-in settings missing, an open one), which D022 and D030 had
  kept so editors could draft before signing in.
- **Approval:** User instruction of 21 October 2026 (12 numbered requirements); the user also asked for the brand
  colours and font (docs/brand.md). This replaces the browser-only mode of D022 and D030, and the in-sidebar sign-in
  form of D030.
- **Change:**
  - New [LoginGate.tsx](components/blog-studio/LoginGate.tsx): a full-screen dialog (`role="dialog"`, `aria-modal`,
    labelled and described, focus on the password field, focus kept inside it, previous focus restored on close, page
    scroll locked). It cannot be dismissed: no close button, and the backdrop, Escape and Tab do nothing outside it.
    Brand logo and "Blog Studio" name, password field with a show/hide toggle (`aria-pressed`), a coral Sign in button
    (`--coral`, `--ink` text), a loading state and a fixed generic error ("That password is not right."). Brand tokens
    and Manrope only (`BlogStudio.module.css`, new `.gate*` rules at the end). It posts to the existing login Route
    Handler (D032); on success the studio reloads.
  - [BlogStudio.tsx](components/blog-studio/BlogStudio.tsx): the studio is wrapped in an `inert` container while
    locked, so it cannot be clicked, tabbed to or read by a screen reader. A session that ends while the page is open
    (a Server Action returns `signIn: true`) puts the dialog back over the studio without losing the post being edited;
    signing in again continues without a reload. The sidebar sign-in form and every browser-only message are gone.
  - [server.ts](components/blog-studio/server.ts): `getStudioStorage()` is now `sanity` | `blocked` | `locked`
    (`signin` or `unavailable`). Missing, weak or invalid `STUDIO_PASSWORD` / `STUDIO_SESSION_SECRET`, or Vercel Preview,
    is `locked: unavailable` (fail closed), in development as well. The dev shortcut that allowed Sanity writes without
    sign-in is removed. [store.ts](components/blog-studio/store.ts) loses `localStudioStore`.
  - [actions.ts](components/blog-studio/actions.ts): unchanged protections (every action still calls
    `getStudioStorage()` first, post validation, id and type checks, upload checks, the dataset guard). A locked
    visitor now gets "Your session has ended. Sign in again." with `signIn: true`, or "The blog studio is not
    available." when sign-in is not set up, which says nothing about configuration. `SafeError` carries a `signIn` flag.
  - [page.tsx](app/sk-studio-ufn5xdafhll7/page.tsx): a locked studio is rendered with no posts, so nothing about the
    studio is sent to a visitor who has not signed in.
  - Docs: AGENTS.md, docs/blog-studio.md (section 6 table, file list), `.env.example`, comments.
  - Added after the first deployment showed "unavailable" (21 October 2026): when the studio is locked as
    unavailable, the server writes one line to its log, e.g. `[blog-studio] unavailable: STUDIO_SESSION_SECRET:
    shorter than 32 characters (runtime: production)` (`authConfigProblem` in auth-core.ts, `studioUnavailableReason`
    in auth.ts). It names the setting and the rule, never a value; visitors still see nothing.
- **Expected effects:** on localhost and in Production the studio opens only after the team password is entered;
  editors can no longer draft in the browser before signing in (there is no browser-only mode, so the
  Export/Import-before-sign-in note is gone). Local development now needs `STUDIO_PASSWORD` and
  `STUDIO_SESSION_SECRET` in `.env.local` to open the studio at all. Public pages are untouched.
- **Tests (run by Claude):** `npm test` 79/79: storage states (signed in, signed out, no settings, no secret, short
  secret, weak and guessable passwords all locked), development without settings is locked and no action touches Sanity,
  locked actions say "sign in again" / "not available" with no configuration detail, expired cookie and a changed
  password lock the studio again. `npx tsc --noEmit` and `npm run build` pass. In the browser on a local production
  server with throwaway credentials: the dialog is centred over a translucent ink backdrop in Manrope with the coral
  button; clicks on New post and the sidebar hit the backdrop; Escape and six Tabs keep focus in the dialog; a wrong
  password shows the generic error and keeps it open; the right password unlocks and a refresh keeps the session
  (HttpOnly cookie); the show/hide toggle works; Sign out brings the dialog back after reload; a restart with a
  different password made the next save put the dialog back over the open editor with the draft kept, and signing in
  continued the edit; with empty settings the page shows "Blog Studio unavailable" and its HTML contains no env names
  or post titles; with a weak password the same, and the login endpoint answers 503.
- **Not tested / assumptions:** a keyboard-only or screen-reader run (focus order checked by script and key presses
  only); mobile layout beyond the shared responsive CSS; behaviour on Vercel itself; the positive Sanity path against
  real Sanity (the throwaway test token cannot read, so the post list showed the generic load error after sign-in).
- **Limitations / remaining risks:** the gate is a UI layer: removing `inert` or the dialog in the browser's dev tools
  unlocks nothing, because every Server Action refuses without a session. The page HTML still contains the studio's
  empty shell. One shared password and stateless 7-day sessions remain (D030).
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D036 — Security review of the blog studio; out-of-date docs corrected

- **Date:** 21 October 2026.
- **Status:** Review done. The findings below are **proposed, not implemented**: no code changed. The only
  changes are documentation corrections (listed under "Change"). Not committed, pushed or deployed. No Vercel
  setting, Sanity token or dataset was read or changed.
- **Why:** the user asked whether the studio's security is tight and which edges could be improved.
- **Approval:** User request of 21 October 2026 ("check if the security is tight… if there are any edge which i can
  improve"), then "first update all the docs till now work done". Implementing any finding needs the user's go-ahead;
  findings 1 and 3 change analytics or sign-in behaviour and need explicit approval.
- **Scope reviewed (read in full):** the login Route Handler, studio page, `auth.ts`, `auth-core.ts`,
  `auth-actions.ts`, `rate-limit.ts`, `server.ts`, `actions.ts`, `StudioArticle.tsx`, `lib/sanity/*` (guard, client,
  errors, post validation, image, image upload, document mapping), `content/blog/live.tsx`, `app/blog/[slug]/page.tsx`,
  `next.config.ts` and the GA tag in `app/layout.tsx`.
- **Found sound:** constant-time password check; HMAC-signed, HttpOnly, path-limited session cookie bound to the
  password; every Server Action re-checks the session and the write guard; UUID-only ids, explicit-field documents,
  type-scoped writes and deletes; upload checks on the bytes (no SVG); escaped rendering, allowlisted link schemes,
  YouTube id only, allowlisted image sources; Preview can never sign in or write; generic errors to the browser; the
  studio path appears only in studio-only client code (`LoginGate.tsx`). No route was found by which someone without
  the password can publish, edit or delete.
- **Findings (proposed improvements, most important first):**
  1. **Google Analytics runs on the studio page** (root layout, every page). The unlisted URL and the title
     "Blog studio" are sent to GA, and a third-party script runs inside a signed-in session. Proposed: skip the GA
     tag on the studio path. Needs approval (changes analytics coverage; AGENTS.md says GA runs on every page).
     **Approved and implemented in D038.**
  2. **The cookie's path limit is not isolation.** Any script on `www.sagekite.com` (GA, the GoHighLevel
     `form_embed.js` on `/book`, a future XSS) can request the studio path, and the browser sends the editor's cookie
     with it. Proposed: an enforced CSP with `script-src` on the studio (Report-Only first, as docs/blog-studio.md
     §10b already describes); long term, serve the studio from its own subdomain.
  3. **Sessions last 7 days and cannot be revoked one by one.** Sign out clears only that browser's cookie; a copied
     cookie stays valid until it expires. Today's kill switch is rotating `STUDIO_SESSION_SECRET` (signs everyone
     out). Proposed: shorter sessions (12–24 h) and/or a session-version value in the signature. Needs approval.
  4. **The global wrong-password brake can lock the team out.** 40 wrong attempts per 15 minutes per server instance
     block everyone, and the block is checked before the password, so the right password is refused too
     (`auth.ts`). Proposed: once the Vercel Firewall rule is confirmed, raise the global limit.
  5. **The Sanity Editor token covers the whole project** (both datasets, every document type). The write guard limits
     the app, not the token, so a leaked local `.env` can write to `production`. Proposed: separate tokens for local
     and Production, rotation, and dataset-scoped roles if the Sanity plan offers them (not checked).
  6. **Link edge cases in `safeHref` / `Inline`** (`postUtils.ts`, `StudioArticle.tsx`): `/\evil.com` (browsers read it
     as `//evil.com`) passes as an internal link, and `https://www.sagekite.com.evil.com` counts as internal, so
     neither gets `target="_blank" rel="noopener noreferrer"`. Low risk (editors can link anywhere); one-line fixes.
     **Implemented in D037.**
  7. **Out-of-date docs** from before D034/D035: corrected in this entry.
- **Open questions for the owner (not verifiable from the code):** is the Vercel Firewall rate-limit rule on the login
  path set up (docs/sanity.md, "Login rate limit")? Are `SANITY_API_WRITE_TOKEN` and `STUDIO_*` scoped to Production
  only on Vercel? (The code ignores them on Preview, but a branch build could change that code and print them.)
- **Change (docs only):**
  - [AGENTS.md](AGENTS.md): `server.ts` no longer described as opening Sanity "in development with no sign-in set up".
  - [docs/blog-studio.md](docs/blog-studio.md): §1 state table (no browser `localStorage` mode, no browser-mode images,
    sign-in needed locally too); §2 sign-in line; §9.1 note on the "Saved in this browser only" text marked done; §11
    limitations (12+ character password per D034, browser-only storage line removed, "no shared store" corrected to
    last-save-wins on Sanity); new §11a listing these open findings.
  - [docs/sanity.md](docs/sanity.md): status line, phase 3 row, the `npm run dev` guard row, and the `server.ts`,
    `store.ts` and `BlogStudio.tsx` rows of the file table.
  - [store.ts](components/blog-studio/store.ts): one comment example ("this browser only" → "Sanity"). No code change.
  - This log: the template's placeholder number.
- **Expected effects:** none for visitors or editors; the docs match the code again.
- **Validation (run by Claude):** `npm test` 80/80 pass before the doc edits. No browser check (no page changed).
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D037 — Studio links: `/\host` refused, look-alike sagekite.com hosts treated as external

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build). Not committed, pushed or
  deployed.
- **Why:** finding 6 of D036. Browsers read a link starting `/\` as `//`, i.e. another host, but `safeHref` accepted it
  as a site path. The internal-link test was `startsWith('https://www.sagekite.com')`, so
  `https://www.sagekite.com.evil.com` (and `https://www.sagekite.com@evil.com`) counted as internal and opened in the
  same tab without `rel="noopener noreferrer"`.
- **Approval:** User instruction of 21 October 2026 ("fix this", quoting finding 6). Technical fix; no content or
  design change.
- **Change:**
  - [postUtils.ts](components/blog-studio/postUtils.ts): `safeHref` refuses a path starting `//` or `/\` (regex
    `\/(?!\/)` → `\/(?![/\\])`); such a link renders as plain text. New `isExternalHref`: an http(s) link is internal
    only when its host is exactly `www.sagekite.com` over https, followed by `/`, `?`, `#` or the end.
  - [StudioArticle.tsx](components/blog-studio/StudioArticle.tsx): `Inline` uses `isExternalHref` instead of
    `startsWith`.
  - New [tests/links.test.mts](tests/links.test.mts) (4 tests); docs/blog-studio.md §4 link rules, file list and §11a.
- **Expected effects:** ordinary links render exactly as before. A link written `[x](/\evil.com)` now shows as text;
  look-alike hosts open in a new tab with `rel="noopener noreferrer"`. Applies to the studio preview and to published
  Sanity posts (both render through `StudioArticle`). Behaviour unchanged: `http://www.sagekite.com/…` was and is
  external; upper-case `HTTPS://WWW.SAGEKITE.COM/…` is now internal (hosts are case-insensitive).
- **Validation (run by Claude):** `npm test` 84/84 (80 before + 4 new), `npx tsc --noEmit` and `npm run build` pass.
  Not checked in a browser: the studio is behind sign-in and no published post contains such links; the rendering
  change is the one-line swap above, and both functions are covered by the new tests.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D038 — Google Analytics no longer loads on the blog studio

- **Date:** 21 October 2026.
- **Status:** Implemented and verified locally (typecheck, unit tests, production build, headless Chrome against a
  local production server). Not committed, pushed or deployed.
- **Why:** finding 1 of D036. The GA tag in the root layout ran on every page, including the studio, so the unlisted
  URL and the title "Blog studio" were sent to GA, and a third-party script ran inside signed-in sessions.
- **Approval:** User instruction of 21 October 2026, quoting finding 1 ("Fix: skip GA on the studio path"). This
  narrows D027's "GA on every page" to every page except the studio. No content or design change.
- **Change:**
  - New [components/GoogleAnalytics.tsx](components/GoogleAnalytics.tsx) (client component): the same two
    `next/script` tags as before (same measurement ID, `afterInteractive`, inline `id="google-analytics"` config),
    rendered only after mount when the page has no element with `data-no-analytics`. Re-checked when the path
    changes; once loaded, the tag stays for that visit.
  - [app/layout.tsx](app/layout.tsx): the two `<Script>` tags replaced by `<GoogleAnalytics />`.
  - [app/sk-studio-ufn5xdafhll7/page.tsx](app/sk-studio-ufn5xdafhll7/page.tsx): renders
    `<div hidden data-no-analytics="" />` before the studio.
  - A marker was chosen over checking the path in client code: a path check would put the unlisted URL into the
    JavaScript of every public page.
  - Docs: AGENTS.md (GA paragraph, file list, a "Do not" rule), docs/blog-studio.md (§2, §10b CSP note, §11a).
- **Expected effects:** public pages load GA as before (`afterInteractive`, after hydration, one render later than
  before; not measured), and ContactForm's `generate_lead` event is unchanged. Studio visits stop appearing in GA.
  Past studio visits remain in GA reports. A future CSP for the studio no longer needs googletagmanager.com.
- **Validation (run by Claude):** `npx tsc --noEmit`, `npm test` 84/84 and `npm run build` pass. Local production
  server (`next start`, port 3123), pages loaded in headless Chrome with JavaScript run: `/`, `/contact` and `/blog`
  each have exactly one `gtag/js?id=G-QQFH3W77TS` script and the `google-analytics` inline script; the studio has
  the marker and neither script. Every JS chunk referenced by `/` was fetched and none contains `sk-studio`. The
  server was stopped afterwards.
- **Not tested:** that hits actually reach GA (requests to Google were not inspected; GA Realtime not checked), and the
  studio in a signed-in state (the marker is rendered by the page whatever the sign-in state).
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D039 — Social titles aligned on three pages; structured data added to /blog, /about and /book

- **Date:** 22 October 2026.
- **Status:** Implemented and verified locally (typecheck, `npm test`, production build, local HTML compared with the live site). Not committed, pushed or deployed. Nothing was written to Sanity.
- **Why:** SEO audit sheet rows #8 (title and og:title differ), #67 (/blog has no Blog or BreadcrumbList schema) and #73 (/about has no AboutPage or Person schema); /book had no page-level schema. Rows #7 (meta keywords) and the email, heading, spelling and CTA items were **not** part of this change.
- **Approval:** User approved items A, B, C and D of my 22 October 2026 proposal ("do A,B,C and D and verify everything that nothing breaks"). Item E (removing the meta keywords tag) was not approved and not done. The homepage structured-data `name` ("Business growth consulting for SMEs | Sage Kite") was offered as an extra and not approved, so it is unchanged.
- **Change (before → after):**
  - Homepage `og:title`: "Sage Kite: business growth through systems, people and execution" → "Business Growth Consulting & Consultancy for SMEs | Sage Kite". `twitter:title` (inherited from the layout) "Sage Kite: business growth consulting" → the same new title. [app/page.tsx](app/page.tsx) now has its own `twitter` block (card, description and images copied from the layout, because a page-level block replaces the layout's).
  - /platforms `og:title` and `twitter:title`: "CRM and business platforms we implement | Sage Kite" → "GoHighLevel, HubSpot & CRM Platforms We Implement | Sage Kite".
  - /contact `og:title` and `twitter:title`: "Contact Sage Kite | Book a discovery call" → "Contact Us: Book a Discovery Call | Sage Kite".
  - /blog: JSON-LD `Blog` ("Sage Kite Blog") and `BreadcrumbList` (Home › Blog) added.
  - /about: JSON-LD `AboutPage`, `BreadcrumbList` (Home › About) and `Person` (Aryan Trivedi, "Founder, Sage Kite", BITS Pilani, LinkedIn, worksFor the site's Organization) added in [app/about/layout.tsx](app/about/layout.tsx) because the page is a client component. Only facts already stated on the page are used.
  - /book: JSON-LD `WebPage` and `BreadcrumbList` (Home › Book a discovery call) added.
  - All new blocks use `JsonLd` (escapes `<`) and reference the site's `#organization` and `#website` by `@id`.
- **Expected effects:** link previews on LinkedIn, X and Slack show the new titles for the three pages; search engines read the new structured data. Visible page text is unchanged.
- **Checks (run by Claude):** `npx tsc --noEmit`, `npm run build` and `npm test` (84/84) pass. For /, /platforms, /contact, /blog, /about and /book on a local production server: title, og:title and twitter:title are identical; canonical, og:image and twitter:image are unchanged; all JSON-LD parses; visible text is identical to the live site; the structured-data types on /, /platforms and /contact are unchanged and /blog, /about and /book gained only the types listed above. Six untouched pages (/services, /services/consultancy, /industries, /case-studies, /platforms/hubspot and a blog post) had the same titles, descriptions and structured data as the live site; only the og:image asset path differs between `next start` and Vercel (`/_next/static/media/` vs `/_next/static/immutable/media/`, same file). No console errors on /about, /book and /blog in the browser.
- **Not tested / assumptions:** Google's Rich Results Test and the Schema Markup Validator (not run); how LinkedIn, X and Slack render the new previews; the live site after deployment.
- **Limitations / remaining:** /book's `og:title` is still "Book a discovery call | Sage Kite" (lower-case) while its `<title>` is "Book a Discovery Call | Sage Kite"; it was not in the approved scope. Blog post meta keywords (row #7) remain.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D040 — SEO team's approved metadata for the homepage and /platforms

- **Date:** 23 October 2026.
- **Status:** Implemented and verified locally. Not committed, pushed or deployed.
- **Why:** The SEO and marketing team supplied approved meta titles, meta descriptions, OG titles, OG descriptions and keywords (screenshots, one per page) as part of a site-wide metadata update. This entry covers the homepage and /platforms only; other pages follow when their values are supplied.
- **Approval:** The user supplied the screenshots and instructed that the values be copied exactly and take priority over existing repository rules, documentation, previous decisions, character limits and keyword-count limits. Fields not in the screenshots stay unchanged.
- **Change (before → after):**
  - Homepage ([app/page.tsx](app/page.tsx)):
    - `title`: "Business Growth Consulting & Consultancy for SMEs | Sage Kite" → "Business Growth Consulting Services for SMEs | Sage Kite".
    - `description`: "Sage Kite is a business growth consultancy for SMEs. Growth consulting, CRM implementation, digital marketing, AI SEO and virtual assistants, run as one system." → "Sage Kite offers business growth consulting, CRM, marketing and specialist support to help small and medium-sized businesses improve processes and revenue."
    - `og:title`: "Business Growth Consulting & Consultancy for SMEs | Sage Kite" → "Business Growth Consulting for Growing SMEs | Sage Kite".
    - `og:description`: "A business growth consultancy that advises, implements and executes: consultancy, CRM, marketing automation, marketing and specialist VA support, working as one system." → "See how Sage Kite combines business growth consulting, CRM, marketing, and specialist support to help businesses improve operations and generate more revenue."
    - `keywords`: business growth consultancy, business growth consulting, CRM implementation, marketing automation, growth operations, SME growth consulting → Business Growth Consulting (primary), Business Consulting Services, CRM Implementation Services, Digital Marketing Services, Business Growth Strategy, Specialist Staffing Services, White Label Services.
  - /platforms ([app/platforms/page.tsx](app/platforms/page.tsx)):
    - `title`: "GoHighLevel, HubSpot & CRM Platforms We Implement | Sage Kite" → "CRM Platforms for Growing Businesses and Teams | Sage Kite".
    - `description`: "We implement GoHighLevel, HubSpot, Keap, Follow Up Boss, ServiceTitan, Kajabi, Clio Grow and more, each set up around how your business actually sells." → "Sage Kite helps you choose and set up CRM platforms that fit your business, organise customer data, automate follow-up, and improve team visibility and reporting."
    - `og:title`: "GoHighLevel, HubSpot & CRM Platforms We Implement | Sage Kite" → "CRM and Business Platforms for Growing Firms | Sage Kite".
    - `og:description`: "The CRM, marketing and industry platforms Sage Kite implements, grouped by industry, each set up around how your business actually sells." → "Choose the right CRM platforms with Sage Kite. Get practical setup, automated workflows and clear reporting to help your team manage leads and customer data."
    - `keywords`: CRM implementation services, CRM consultant, CRM setup services, industry CRM, CRM platforms for small business → CRM Platforms (primary), Business CRM Platforms, CRM Implementation Services, Business Management Platforms, CRM Software for Small Businesses, CRM Automation Services, CRM Platform Consulting.
- **Unchanged (not in the screenshots):** `twitter` title and description on both pages, canonical, `og:url`, share images, JSON-LD (homepage `WebPage`, /platforms `CollectionPage` name and description), headings and all visible content.
- **Exceptions to existing rules, by the SEO team's approval:**
  - Supersedes D039 for these two pages: `og:title` now differs from `<title>` (D039 had aligned them for audit row #8).
  - /platforms meta description is 162 characters (docs/new-page-checklist.md and docs/blog-seo-schema.md say 70–160).
  - Each page has 7 keywords (docs say 3–6), in the screenshots' Title Case. "CRM Implementation Services" is on both pages, and some phrases also appear in the keywords of /services, /services/consultancy and /services/crm-implementation (docs say keywords are not repeated across pages). Those pages were not changed.
- **Expected effects:** Search results and the browser tab use the new titles and descriptions after recrawling; LinkedIn, Slack and other Open Graph previews use the new OG text. X uses its own `twitter:*` tags, so it still shows the previous titles and descriptions. Ranking and how search engines display or rewrite the text are not guaranteed.
- **Observed effects:** Not measured (not deployed).
- **Limitations:** The `twitter` title and description were not in the screenshots, so they keep their previous text, which no longer matches the new titles. The homepage comment above its `twitter` block ("the title ... now matches the page title") is no longer accurate for the same reason.
- **Validation (run by Claude):** `npx tsc --noEmit --incremental false`, `npm test` (84/84) and `npm run build` pass. On a local production server (`next start`), the rendered `<title>`, `description`, `og:title`, `og:description` and `keywords` on / and /platforms were compared with the screenshot text and match exactly (Next.js joins keywords with "," and no space). Canonical, `og:url`, `og:image` and `twitter:*` are unchanged. The git diff contains only these metadata values and this entry.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D041 — SEO team's approved metadata for /industries, /blog and /services/crm-implementation

- **Date:** 23 October 2026.
- **Status:** Implemented and verified locally. Not committed, pushed or deployed.
- **Why:** Second batch of the SEO and marketing team's site-wide metadata update (see D040), one screenshot per page.
- **Approval:** The user supplied the screenshots, confirmed the mapping (Screenshot 1 → /industries, Screenshot 2 → /blog, not /case-studies, Screenshot 3 → /services/crm-implementation) and instructed that the values be copied exactly and take priority over existing repository rules. Fields not in the screenshots stay unchanged.
- **Change (before → after):**
  - /industries ([app/industries/page.tsx](app/industries/page.tsx)):
    - `title`: "CRM and Automation by Industry | Sage Kite" → "Business Consulting Services for Industries | Sage Kite".
    - `description`: "CRM and automation set up for how your industry sells: home services, real estate, law firms, coaches, service businesses, fitness studios and nonprofits." → "Sage Kite provides business consulting services to help companies improve processes, manage customer relationships, and build practical plans for business growth."
    - `og:title`: "CRM and automation by industry | Sage Kite" → "Business Consulting Services for Business Growth | Sage Kite".
    - `og:description`: "A CRM set up for how your customers decide: the right follow-up at the right speed, and a person stepping in where one is needed." → "See how Sage Kite business consulting services help companies address operational challenges, improve customer management, and plan their next stage of growth."
    - `keywords`: industry CRM setup, CRM for home services, real estate CRM setup, law firm client intake, CRM for fitness studios, nonprofit donor CRM → Business Consulting Services (primary), Business Consulting, CRM Consulting Services, Business Growth Strategy, Business Process Improvement, Digital Marketing Services.
  - /blog ([app/blog/page.tsx](app/blog/page.tsx)):
    - `title`: "Business Growth, CRM & Marketing Insights | Sage Kite" → "Business Success Stories and Results for Clients | Sage Kite".
    - `description`: "Practical guides to CRM platforms, marketing automation and the systems behind business growth, written for small and medium-sized businesses." → "Explore Sage Kite business success stories to see how companies improve operations, manage customer relationships, and achieve measurable business results."
    - `og:title`: "Business Growth, CRM & Marketing Insights | Sage Kite" → "Business Success Stories That Show Real Results | Sage Kite".
    - `og:description`: "Practical thinking on CRM, marketing, automation and the systems behind sustainable business growth." → "See Sage Kite business success stories featuring practical solutions that help companies improve workflows, strengthen customer relationships, and support growth."
    - `keywords`: business growth insights, CRM blog, marketing automation guides, growth operations, Sage Kite blog → Business Success Stories (primary), Client Success Stories, Business Growth Stories, CRM Success Stories, Business Case Studies, Client Results.
  - /services/crm-implementation ([app/services/crm-implementation/page.tsx](app/services/crm-implementation/page.tsx)):
    - `title`: "CRM Implementation Services: Setup & Migration | Sage Kite" → "CRM Implementation Services for Growing Teams | Sage Kite".
    - `description`: "CRM implementation services: setup, pipeline design, data cleanup and migration, automation, training and handover, built around how your team sells." → "Sage Kite provides CRM implementation services, from pipeline setup and data migration to automation and reporting, helping your team manage leads and close sales."
    - `og:title`: "CRM Implementation Services: Setup & Migration | Sage Kite" → "CRM Implementation Services That Fit Your Sales | Sage Kite".
    - `og:description`: "A CRM your team uses, where every lead has an owner and a next step. Setup, cleanup, migration, automation, training and handover." → "See how Sage Kite CRM implementation services organise leads, automate follow-up, and connect reporting, so your team can manage opportunities and track revenue."
    - `keywords`: CRM implementation services, CRM implementation consultant, CRM setup services, CRM migration, CRM optimisation, custom CRM development → CRM Implementation Services (primary), CRM Implementation Consultant, CRM Setup Services, CRM Data Migration, CRM Automation Services, CRM Workflow Automation, CRM Consulting Services.
- **Unchanged (not in the screenshots):** `twitter` title and description, canonical, `og:url`, share images, structured data, headings and visible content. On /industries the meta description was previously the shared `DESCRIPTION` constant; it is now written in the metadata, and the constant still feeds the `Service` JSON-LD description unchanged.
- **Exceptions to existing rules, by the SEO team's approval:** over the 160-character description limit in the docs: the /industries meta description (162), the /services/crm-implementation meta and OG descriptions (163 and 161) and the /blog OG description (162). /services/crm-implementation has 7 keywords (docs say 3–6). Several keywords repeat on other pages (docs say they should not): Business Consulting Services, Business Growth Strategy and Digital Marketing Services (homepage and /industries), CRM Consulting Services (/industries and /services/crm-implementation), CRM Automation Services (/platforms and /services/crm-implementation), CRM Implementation Services (homepage, /platforms and /services/crm-implementation).
- **Expected effects:** Search results, browser tabs and Open Graph previews use the new text after recrawling. X uses `twitter:*`, which keeps the previous text. Ranking and display are not guaranteed.
- **Observed effects:** Not measured (not deployed).
- **Limitations:** /blog's new metadata describes business success stories while the page lists guides and articles (its H1 and content are unchanged); the user confirmed this mapping. `twitter` text on the three pages no longer matches the new titles.
- **Validation (run by Claude):** `npx tsc --noEmit --incremental false`, `npm test` (84/84) and `npm run build` pass. On a local production server, the rendered `<title>`, `description`, `og:title`, `og:description` and `keywords` on /industries, /blog and /services/crm-implementation match the screenshot text exactly; `twitter:*` and `og:url` are unchanged. The user's uncommitted `next-env.d.ts` change (rewritten by the build) was restored byte for byte and is not part of this change.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D042 — /book embeds a new GoHighLevel calendar; the previous one was deleted

- **Date:** 24 October 2026.
- **Status:** Implemented and verified locally. Not committed, pushed or deployed.
- **Why:** The site audit of 24 October 2026 (BUG-01) found that the booking widget on /book showed GoHighLevel's "404 Page Not Found". Every "Book a discovery call" button (60 links on 50 pages) leads there. Cause, from read-only requests: GoHighLevel's calendar API answers the old ID with `400 "The calendar is deleted"` (a made-up ID gets `404 "Calendar not found"`), and the widget returns the same 404 page on `pay.ghlscaleup.com` and on GoHighLevel's own domains (`api.leadconnectorhq.com`, `link.msgsndr.com`). The calendar was deleted in the GoHighLevel account; the domain and the site code were not at fault. No replacement ID existed anywhere in the repository or its Git history.
- **Change (before → after):** in [app/book/page.tsx](app/book/page.tsx), the iframe only:
  - `src`: `https://pay.ghlscaleup.com/widget/booking/p11W8VUan5yI69fRHjVl` → `https://pay.ghlscaleup.com/widget/booking/mWF3minFplRuFTsouj8G`
  - `id`: `p11W8VUan5yI69fRHjVl_1791032182352` → `mWF3minFplRuFTsouj8G_1792831363134`
  - Unchanged: `title="Book a discovery call"` (not in the supplied embed code; kept so the iframe has an accessible name), `allow`, `style`, `scrolling`, and `BookingEmbedScript` (same `pay.ghlscaleup.com/js/form_embed.js`). Visible text, metadata and structured data are unchanged.
- **Approval:** The new embed code was supplied by the user, who received it from their team lead. The user approved the two-line change, keeping the iframe title, on 24 October 2026.
- **Expected effects:** Visitors to /book see the discovery-call calendar again and can book.
- **Observed effects:** Not measured on the live site (not deployed). Before the change, by read-only requests: the new calendar's free-slots API returned 200 with slots on each of the next 8 days, and its widget page returned 200 without "Page Not Found".
- **Limitations:** No browser was available, so the calendar's rendering inside the iframe and the iframe resizing by `form_embed.js` were not seen. No test booking was made (it would create an appointment and a contact in GoHighLevel). Who deleted the old calendar, and why, is not known; that is visible only in the GoHighLevel account.
- **Validation (run by Claude):** `npx tsc --noEmit --incremental false` (0 errors), `npm test` (84/84) and `npm run build` pass. On a local production server (`next start`, port 3123, stopped afterwards): /book returns 200; the iframe has the new `src`, `id` and the title; the old ID is not in the page; the page's scripts include `form_embed.js`; title, description, canonical and JSON-LD match the live site; visible text is identical to the live site. The only difference is the og:image asset path (`next start` vs Vercel, as in D039). The user's uncommitted `next-env.d.ts` change (rewritten by the build) was restored byte for byte.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D043 — Blog studio: Tags and SEO keywords are separate fields

- **Date:** 26 October 2026.
- **Status:** Implemented and verified locally (typecheck, `npm test`, production build, browser check, comparison with the live site). Not committed, pushed or deployed. Nothing was written to Sanity.
- **Why:** the SEO team reported that tags and keywords are different things but the studio had one "Tags / keywords" field. Tags group a post and are shown on it; keywords are SEO phrases.
- **Approval:** User approved the plan on 26 October 2026 with three decisions: (1) leave the existing meta keywords tag exactly as it is, (2) the JSON-LD fallback rule, (3) at most 8 secondary keywords of 80 characters each, 2–5 recommended.
- **Change:**
  - New `secondaryKeywords` field on a studio post (0–8 phrases, 80 characters each). `focusKeyword` already existed (a checklist hint) and is kept; it now also starts the schema `keywords` for posts that have secondary keywords.
  - Studio SEO tab: the one field became **Tags** ("shown on the post") and **SEO keywords** ("not shown on the post": Focus keyword and Secondary keywords with a count out of 8). Same inputs, brand tokens and Manrope. The Tags hint says tags are shown on the post and kept in the page's meta tags.
  - Article JSON-LD `keywords` ([blogJsonLd.ts](components/blog/blogJsonLd.ts) `articleKeywords`): a post with at least one secondary keyword gets its focus keyword followed by the secondary keywords (no duplicates, ignoring case). Every other post keeps its tags exactly as before, including a post that has only a focus keyword.
  - **Unchanged:** the meta keywords tag and `article:tag` (still the tags, [blogMetadata.ts](components/blog/blogMetadata.ts) was not touched), the tags shown on a post, all code posts.
  - Checklist (recommended items only, never blocking): "Secondary keywords: 2 to 5 phrases" (shown only when a focus keyword is set) and "Each secondary keyword appears in the article" (shown only when secondary keywords exist). The four focus-keyword checks are as before.
  - Server: [postValidation.ts](lib/sanity/postValidation.ts) refuses more than 8 phrases, a phrase over 80 characters, or the wrong type ("Use at most 8 secondary keywords, 80 characters each or fewer."); the field may be missing (an older export). [blogPosts.ts](lib/sanity/blogPosts.ts) writes it from the explicit field list (trimmed, no duplicates) and reads a missing field as empty. The public mapping ([live.tsx](content/blog/live.tsx)) passes the focus and secondary keywords to the Article schema.
- **Existing posts:** tags are preserved, `secondaryKeywords` is empty, and an existing focus keyword is kept (the live Sanity post has one: "Email marketing automation"). Nothing was migrated.
- **Expected effects:** editors can enter keywords separately from tags. Existing pages are unchanged. A new post with secondary keywords gets a `keywords` value in its Article schema made of its keywords instead of its tags.
- **Checks (run by Claude):** `npx tsc --noEmit` and `npm run build` pass; `npm test` 99/99 (15 new in [keywords.test.mts](tests/keywords.test.mts) and [actions.test.mts](tests/actions.test.mts): parsing, validation limits and types, save and load round trip, an older stored post, the JSON-LD rule and its fallbacks, the meta keywords tag and `article:tag` unchanged, checklist items, and the real actions refusing bad input before Sanity). Mutation check: with the JSON-LD rule changed to also trigger on a focus keyword alone, the "keeps its tags" test fails. On a local production server reading the production dataset (read only), the live post, `/blog`, `/` and a code post have JSON-LD, meta keywords, `article:tag`, og:title, description and visible text identical to the live site. In the browser the new fields show, the secondary count reads `2 / 8` after a duplicate is removed and `9 / 8` with the "saving is refused" hint.
- **Not tested / assumptions:** saving a post with keywords to real Sanity (no writes were made; covered with the fake Sanity client); the live site after deployment.
- **Limitations:** the meta keywords tag still carries the tags, by decision, so tags remain "keywords" in the page head even though they are no longer in the schema for posts with secondary keywords. Posts that have only a focus keyword keep tag-based schema keywords until secondary keywords are added.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D044 — Blog studio: tables pasted from Word, Google Docs or Excel become real table blocks

- **Date:** 26 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build, browser checks on localhost). Not committed, pushed or deployed. Nothing was written to Sanity.
- **Why:** the SEO team reported that a table copied into the studio appeared as plain text on the website. Cause: the Table block only understands rows with `|` between cells, but Word, Google Docs and Excel copy cells separated by tabs (and as an HTML `<table>`, which the studio ignored). The studio had no paste handling at all, so a table pasted into a Paragraphs box became one paragraph per row, and one pasted into the Rows box became a one-column table. The website's table renderer and its mobile CSS were already correct and were not changed.
- **Approval:** User approved my plan on 26 October 2026 with three decisions: keep the limit at 100 rows × 12 columns, keep the confirmation dialog (never convert automatically), and use generated HTML and clipboard data for tests if no real Word or Google Docs sample was available (none was supplied).
- **Change:**
  - [postUtils.ts](components/blog-studio/postUtils.ts): `tableFromClipboard(html, plain)` converts clipboard HTML (a small tokenizer, so it runs without a browser) or tab-separated text (Excel quoting handled) to the `|` row format with outer pipes, so an empty first or last cell is not lost. `tableRows` now also reads `\|` as a literal pipe. Word count treats `\|` like `|`.
  - [BlogStudio.tsx](components/blog-studio/BlogStudio.tsx): a paste handler on the Table block's Rows box, and on the Paragraphs, List, Quote and FAQ-answer boxes, which asks "Paste as a table?" first. The confirm dialog gained an optional cancel label and handler. The Rows hint now also says tables can be pasted from Word, Google Docs or Excel.
  - Unchanged: the renderer ([StudioArticle.tsx](components/blog-studio/StudioArticle.tsx)), the site CSS, the Sanity document shape and validation, the server actions, every existing post.
- **Expected effects:** a table copied from Word, Google Docs or Excel becomes a real table block and renders as a `<table>` on the published page (scrolling sideways on a phone). A pasted table is never inserted automatically into a text box. Existing tables in the pipe format parse exactly as before.
- **Tests (run by Claude):** `npx tsc --noEmit` and `npm run build` pass; `npm test` 115/115 (16 new in [table-paste.test.mts](tests/table-paste.test.mts), generated clipboard data in the shape each program produces: Word comments and classes, Google Docs' `font-weight:normal` wrapper, span styles and `javascript:` links, Excel `<col>` and quoted cells, merged cells, nested tables, scripts and event attributes reduced to text, text around a table, two tables, the limit at 100 × 12 and one over, pipes in cells, and the old pipe format unchanged). Two real bugs were found and fixed while writing them: bold markers removed by the italic clean-up, and an empty first or last cell shifting the columns. In the browser on a local production server: a Google Docs style paste into the Rows box gave the right rows and "Table pasted: 3 rows × 3 columns"; a tab-separated paste into a Paragraphs box held the paste back and opened the dialog, "Paste as text" pasted the tabs unchanged and "Convert to table" added a Table block below; a 101-row paste was refused in the Table block and pasted as text with a note in a Paragraphs box; ordinary text paste was untouched; the studio preview rendered a real table, and at 375 px the page did not overflow while the 8-column table scrolled inside itself (333 px visible of 718 px). Existing pages: the markup of every `<table>` on `/blog/dubsado-vs-honeybook` and `/blog/what-is-honeybook` is identical to the live site, and structured data and meta tags of seven pages match live. The only visible-text differences from live are Vikas's published post, which lives in the production dataset that this local build does not read.
- **Review fixes (26 October 2026, same decision):** a final review found three small problems, all fixed.
  (1) Tab-separated text without HTML: a cell starting with a plain quote (`"Best CRM ever`) was read as an Excel-quoted
  cell and swallowed the rest of the table. A quoted field now counts only as Excel writes it (it holds a tab, line break
  or doubled quote, has no lone quote inside, and closes right before a tab, line break or the end); anything else is
  literal, so `"quoted"` keeps its quotes too. (2) An unclosed `<b>` or `<i>` in a cell left a stray `**` or `*`; it is now
  closed at the end of the cell. (3) With HTML but no plain text on the clipboard, "Paste as text" pasted nothing; it now
  pastes the table's own cells, tab-separated and without formatting markers (`plain` on the result of
  `tableFromClipboard`). Tests: 121/121 (6 new). Each fix was mutation-checked (undoing it makes a test fail). In the
  browser: an HTML-only paste then "Paste as text" gave `Tool<TAB>Price` / `Dubsado<TAB>$20`; the unmatched-quote paste
  converted to 4 rows × 2 columns with the quote kept; a normal paste with a link was not intercepted.
- **Not tested / assumptions:** a real Word, Google Docs or Excel clipboard (none was available; the samples are generated); a table published to the live site (no Sanity write was made, but the studio preview uses the same renderer and CSS as the published page); Safari and Firefox paste events.
- **Limitations:** a cell's formatting is limited to bold, italic and links; images, colours, alignment and column widths in the source table are dropped; a cell that already contains `*` or `[` may be read as formatting. A whole article pasted at once is not converted (a separate feature).
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D045 — Blog article tables get a full grid: outer border and lines between every row and column

- **Date:** 26 October 2026.
- **Status:** Implemented and verified locally (production build, browser checks at desktop and 375 px, `npm test`, typecheck). Not committed, pushed or deployed. Nothing was written to Sanity.
- **Why:** the user asked for a proper grid-style table instead of horizontal dividers only. Cause: the table already had a 1 px outer border, but with `border-collapse: collapse` and `overflow: hidden` half of a collapsed outer border is clipped, so it did not show; cells had only a bottom border and no side borders.
- **Approval:** User request of 26 October 2026 describing the design (visible outer border, lines between every row and column, same colours, typography and responsive behaviour). This is a visible design change to every blog article table, code posts included, because they share the same CSS.
- **Change ([app/globals.css](app/globals.css) only):**
  - `.article-content table`: `border-collapse: collapse` → `separate` with `border-spacing: 0`. The 1 px `--light-sage` outer border, 6 px radius and `overflow: hidden` are unchanged, and the outer border is now fully drawn.
  - `th` and `td`: added a 1 px `--light-sage` right border next to the existing bottom border; the last column has no right border and the last row no bottom border (`tr > :last-child`, `tbody tr:last-child td`), so the table's own border closes the grid with no double lines.
  - Mobile (max-width 680 px): the table stays `display: block` with horizontal scrolling and gained `width: max-content; max-width: 100%`, so the outer border hugs a short table instead of enclosing empty space to the right of the last column (which the now-visible border would have shown).
  - Colours, fonts, padding and header background are unchanged (`--light-sage`, `--pale-sage`, `--ink`, `--dark-sage`).
- **Not changed:** the table renderer, the table data and schema, the pasted-table conversion, and every table outside `.article-content` (services, platform and industry pages, the founder's essay, case studies). Tables inside `.article-content` occur on the 7 code blog posts, in the studio preview and on posts published from the studio.
- **Checks (run by Claude):** `npm run build` and `npx tsc --noEmit` pass; `npm test` 121/121 (no test touches CSS). On a local production server: computed styles show every non-last cell with a 1 px right line, every non-last row with a 1 px bottom line, none on the last column or row, a 1 px outer border and `border-collapse: separate`, on `/blog/dubsado-vs-honeybook` and in the studio preview (a pasted 3 × 6 table). At 375 px: no horizontal page overflow; the six tables on that post keep their previous widths and scroll behaviour (the wide ones scroll inside the table); an injected 2-column table has no empty space inside its border (gap 0) and an injected 8-column table scrolls (333 px visible of 710 px). Screenshots of the live page before the change showed horizontal lines only.
- **Not tested / assumptions:** Safari and Firefox rendering; a table on a post published from the studio on the live site (it uses the same classes as the code posts and the preview); print styles.
- **Limitations:** the lines use `--light-sage`, the same light colour as the existing row lines, so they are as soft as before; a stronger colour would be a further design choice.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D046 — Blog article table lines darkened to the brand's `--sage`

- **Date:** 26 October 2026.
- **Status:** Implemented and verified locally (production build, browser checks at desktop and 375 px, `npm test`, typecheck). Not committed, pushed or deployed. Nothing was written to Sanity.
- **Why:** after D045 the table grid used the same light `--light-sage` as the old row lines, which the user found too soft. They asked for a darker sage tone from the existing palette.
- **Approval:** User request of 26 October 2026: darken the outer border and all horizontal and vertical lines with a darker sage tone from the brand palette; keep layout, rounded corners, header background, typography and spacing; same in the Studio preview and published tables. This is a visible design change.
- **Change ([app/globals.css](app/globals.css) only):** `.article-content table` now sets `--table-line: var(--sage)` (#596B57, the darkest sage in `app/brand.css` apart from body text `--dark-sage`) and the outer border and every cell right and bottom border use it instead of `--light-sage`. The colour is defined in one place. Nothing else changed: the grid structure, 6 px radius, `--pale-sage` header, font, padding and the mobile rules of D045 are as they were. No new colour was added.
- **Effect:** the same tables, on the 7 code blog posts, in the Studio preview and on posts published from the studio, now have dark sage lines. Tables outside `.article-content` (services, platforms, industries, the essay, case studies) are not affected.
- **Checks (run by Claude):** `npm run build`, `npx tsc --noEmit` and `npm test` (121/121) pass. On a local production server, computed styles: the outer border and every cell line are `rgb(89, 107, 87)` (`--sage`) with a 1 px width, the grid structure is intact (right lines on all but the last column, bottom lines on all but the last row), and the header background (`rgb(233, 238, 231)`), 6 px radius, font size and 12 × 16 px padding are unchanged, on `/blog/dubsado-vs-honeybook` and in the Studio preview (a pasted 3 × 6 table). At 375 px: no horizontal page overflow, the six tables on that post keep their previous scroll behaviour, and the preview table fits. Screenshots checked at desktop and mobile in both places.
- **Not tested / assumptions:** Safari and Firefox; a table on a post published from the studio on the live site; print styles.
- **Limitations:** `--sage` lines are noticeably stronger than before; if they read too heavy, change the single `--table-line` value (for example to a mix of `--sage` and `--light-sage`) rather than editing each rule.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D047 — Blog studio: paste-first writing (whole articles become blocks) and a formatting bar

- **Date:** 27 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build, browser checks on the dev server). Not committed, pushed or deployed. Nothing was written to Sanity.
- **Why:** writers had to pick a block type (Heading, Paragraphs, List…) before typing, and an article pasted from Google Docs, Word or ChatGPT landed in one box as plain lines (D044 listed "a whole article pasted at once" as not handled). While sharing the paste code, a real bug was found: Word writes `<b style='mso-bidi-font-weight:normal'>` for ordinary bold and the table paste read that as `font-weight:normal`, so bold from Word was lost (a cell `<b style='mso-bidi-font-weight:normal'>Price</b>` gave `Price`, not `**Price**`).
- **Approval:** User asked for paste-first editing on 27 October 2026 and chose option A: no new library, no rich-text editor, keep the block model and the inline markers. The task specification set the behaviour below, the "Split into blocks?" dialog inside a box (D044's "never convert automatically" inside a box), the limits and the tests. After the build, the user approved on 27 October 2026 the two choices left open: a title found in a paste is left out when the post already has a title (the message names it), and the hint under the paste area ("Markdown and plain text work too. Images are not copied: each becomes an empty Image block to upload. Or start typing to write paragraphs.") stays as written.
- **Independent check (Claude, 27 October 2026):** code review of the change; `npx tsc --noEmit`, `npm run build` and `npm test` (158/158) re-run; extra generated samples through `articleFromClipboard` (Google Docs nested list, bold link, line breaks and image; Word for Mac lists in both conditional forms, `mso-bidi` bold and italic, MsoQuote; Word for the web; ChatGPT-style HTML with code and a table; Markdown; `javascript:` and `//host` links) all gave the expected blocks; in the studio on a local dev server with a throwaway test password (development dataset, nothing saved): paste into an empty post, Undo paste, typing in the paste area, single-sentence paste (no dialog), article paste into a box ("Split into blocks?"), Turn into split and merge, Bold button and ⌘B toggle, unsafe link refused, link added and removed, no console errors, no page overflow at 375 px. A real browser clipboard could not be produced (automation cannot trigger a native paste), so a real Google Docs or Word paste is still untested.
- **Change:**
  - New [articlePaste.ts](components/blog-studio/articlePaste.ts) (pure): `articleFromClipboard(html, plain)` returns blocks, a detected title, the number of images and notes. Google Docs, Word desktop (MsoNormal, MsoListParagraph with `supportLists` markers in both conditional forms, MsoQuote, MsoTitle / MsoHeadingN), Word for the web (`role="heading" aria-level`, one-item lists) and plain / Markdown text (headings, lists, quotes, dividers, `__bold__`, Markdown tables). Title rule, merging, image and table handling and the 300-block limit as in [docs/blog-studio.md](docs/blog-studio.md) §4.2. Also `looksLikeArticle`, `describeBlocks`, `articleText`.
  - New [formatting.ts](components/blog-studio/formatting.ts) (pure): `convertLines` (Turn into: split into before / converted / after, ids kept for unchanged parts, merge with same-kind neighbours, never touches image, table, video, FAQ or divider blocks), `lineRange`, `toggleEmphasis`, `clearFormatting`, `removeLinks`, `linkAt`, `applyLink`, `linkProblem`.
  - [postUtils.ts](components/blog-studio/postUtils.ts): the table paste's HTML handling is split into shared helpers (`cleanClipboardHtml`, `htmlTokenizer`, `htmlAttr`, `cssValue`, `inlineCollector`); `gridFromHtml` uses them. Fixes: CSS properties are matched whole, so `mso-bidi-font-weight` / `mso-bidi-font-style` are no longer `font-weight` / `font-style`; a link inside bold or italic is kept outside the markers (`**see** [link](/x) **now**`), where before `**[link](/x)**` rendered the link as literal text; an emphasis with nothing in it before a link is dropped instead of leaving `**` next to `*`. New exports `stripEmphasis`, `stripListMarker`, `LINK_ANYWHERE`, `MAX_POST_BLOCKS` (400, now also used by [postValidation.ts](lib/sanity/postValidation.ts); the value is unchanged).
  - [BlogStudio.tsx](components/blog-studio/BlogStudio.tsx): the empty post's "No blocks yet…" line is replaced by a paste area ("Paste your article here: headings, lists, tables and links from Google Docs or Word are kept."), with the add-block menu below; typing in it starts a Paragraphs block. The add-block menu gains **Paste article**. Pasting an article into a Paragraphs, List, Quote or FAQ-answer box asks "Split into blocks?" (counts in the body; **Split into blocks** / **Paste as text**); a table-only paste keeps the D044 dialog; a single paragraph or a single block of the box's kind pastes as before. After a conversion: a message with the counts and images to upload, an **Undo paste** bar (one step: blocks, title and slug; shown only while nothing else changed), scroll to the first new block. A detected title fills an empty title, otherwise it is left out and the message says so. `FormatTextarea` became the formatting bar (Turn into, Bold, Italic, Link with an inline address field and reasons, Remove link, Clear formatting; Cmd/Ctrl+B, I, K) and headings use it too (one-line box; the H2/H3 select is kept). FAQ answers get the bar without Turn into.
  - [BlogStudio.module.css](components/blog-studio/BlogStudio.module.css): styles for the paste area, Turn into select, link field, undo bar; heading row aligned to the top; narrower bar buttons under 560 px; unused `.blocksEmpty` removed. Brand tokens only.
  - Unchanged: `StudioBlock` and the post shape, the inline markers and `INLINE_PATTERN` / `LINK_PATTERN` / `safeHref`, the Sanity document mapping, the server actions and validation rules, `StudioArticle.tsx`, the site CSS, every existing post. No new dependency.
- **Expected effects:** a writer can paste a whole article from Google Docs, Word or ChatGPT and get headings, paragraphs, lists, tables, quotes and dividers as blocks, then fix the structure with Turn into instead of rebuilding it. Bold pasted from Word now survives, in tables too. Nothing changes on the public site until a post using this is published.
- **Tests (run by Claude):** `npx tsc --noEmit` and `npm run build` pass; `npm test` 158/158 (37 new: 17 in [article-paste.test.mts](tests/article-paste.test.mts), 18 in [formatting.test.mts](tests/formatting.test.mts), 2 in [table-paste.test.mts](tests/table-paste.test.mts)). The clipboard samples are generated in each program's shape, not copied from real documents. The Word-bold fix was mutation-checked: putting back the old `font-weight` substring match fails 2 tests (Word desktop article and the table regression). In the browser (Chrome for Testing, headless, driven over the DevTools protocol, on `npm run dev`, signed in to the studio on the development dataset; synthetic paste events with HTML and plain text; 30 of 30 checks passed): a Google Docs style article pasted into an empty post gave Paragraphs / H2 / List / H3 / List / Table / Image / Paragraphs with bold, link and table cells kept, the counts message and the "pasted title left out" note; Undo paste emptied the post; a short sentence pasted into a paragraph was not intercepted and showed no dialog; an article pasted into a paragraph opened "Split into blocks?" with the counts, **Paste as text** pasted the plain text into the box and **Split into blocks** inserted 8 blocks below it (then undone); Turn into H2 on the middle line split the paragraph into three blocks and Paragraph on that heading merged them back; Bold on/off, Cmd+I, an unsafe link refused with its reason, a new link, editing a link (prefilled), Remove link; the heading and FAQ-answer bars; Preview rendered H2, H3, ul, ol, table, link, bold and italic with no stray markers; at 375 px the page did not scroll sideways and the bar (one row), link field, paste area and menus fitted (screenshots checked). The editor was closed with "Discard changes": no Save, Publish or Cmd+S. The server log shows only page loads, sign-in and the post-list Server Action.
- **Not tested / assumptions:** a real clipboard from Google Docs, Word desktop, Word for the web or ChatGPT (none was available; the samples are generated from their known shapes, and Word for the web's bold is assumed to come as an inline `font-weight` style or `<b>`); the browser's own paste (the checks used synthetic paste events, so a paste the studio lets through was checked as "not intercepted", not as inserted text); Safari, Firefox and touch devices; a post published with pasted content.
- **Limitations:** the markers (`**`, `*`, `[text](url)`) stay visible in the boxes; images must be uploaded again (pasted ones are empty Image blocks); nested lists are flattened to one level; FAQs are not detected; underline, colours, alignment, code formatting and footnotes are dropped; a cell or line that already contains `*` or `[` may be read as formatting; the pasted title is dropped when the post already has a title (new posts always have one from the create dialog); Undo paste is one step and disappears after any other edit or a save; the browser's own Cmd+Z in a box does not undo the bar's buttons. See D048.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D048 — Blog studio: Pages pastes, declarations stripped, image placeholder in the preview, pasting a single image

- **Date:** 27 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build, browser checks on the dev server). Not committed, pushed or deployed. Sanity: only the image uploads listed under Tests were written (development dataset); no post was saved.
- **Why:** the user tested D047 with real clipboards on 27 October 2026.
  - **Google Docs (tested by the user):** worked as expected: the "In this guide" sidebar with all 8 H2s; H2 and H3 headings; normal-weight paragraphs with only the right words bold or italic; both links; the bulleted list with its sub-point flattened; the numbered list; the 4×3 table. The quote came in as an italic paragraph (Google Docs has no quote style); video, divider and FAQ need adding by hand. Nothing appeared under "Image test" in the Preview, because the preview rendered nothing for an empty Image block, so the user could not tell whether one had been made.
  - **Apple Pages (verified by Claude from the real clipboard):** failed. The first block began with the literal text `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`, no headings were recognised (the guide was empty), most paragraphs were bold, and no image or empty Image block appeared. Cause: Pages puts only RTF / RTFD on the macOS pasteboard, never HTML; Chrome converts the RTF with Apple's "Cocoa HTML Writer" (that doctype, `<meta name="Generator" content="Cocoa HTML Writer">`, class-based styles in `<head>`, `<p class="pN"><b>…</b></p>`, `Apple-converted-space`). That HTML has no heading information (a heading and a body paragraph share one class, e.g. both `p.p4`) and Pages marked almost everything bold. The image is only in the RTFD (`pastedGraphic.png`), which browsers never expose. The doctype became text because the tokenizer did not know `<!DOCTYPE`.
- **Approval:** the user asked why headings and images were missing and accepted this scope (strip declarations, tell the writer about Pages, show missing images in the preview, paste a single image to upload). Font-size or bold heuristics to guess headings were explicitly ruled out. After the build, on 27 October 2026, the user accepted the three choices the agent left open: a paste whose only text is exactly the pasted file's name (Finder) counts as an image paste; the new wording ("Paste an image (⌘V), use Upload, or type /images/blog/…", "Uploading image…", "Image uploaded. Add its alt text."); and pasting an image into the featured image field.
- **Change:**
  - [postUtils.ts](components/blog-studio/postUtils.ts): `cleanClipboardHtml` also removes every `<!…>` declaration (doctype included) and `<?…>` processing instruction (`<?xml …?>`, Word's `<?xml:namespace … />`). Article and table pastes both use it.
  - [articlePaste.ts](components/blog-studio/articlePaste.ts): `isAppleHtml` (Generator meta "Cocoa HTML Writer" in any attribute order or quoting, or the HTML 4.01 strict doctype with `Apple-converted-space` or `p.pN` classes); such a paste is parsed as before and returns `source: 'apple'` with `APPLE_PASTE_NOTE` ("This was copied from Pages or another Apple app, which doesn't mark headings or include images. Headings came in as paragraphs: use Turn into → Heading 2 or Heading 3 on each one, and add images with an Image block. Copying from Google Docs or Word keeps headings.") first in its notes. New `imageFromClipboard(files, plain)` (the first JPG, PNG or WebP file, only when the paste has no text; Finder's file name as the only text counts as no text), `unsupportedImage`, `imageAddressOnly` and their messages.
  - [StudioArticle.tsx](components/blog-studio/StudioArticle.tsx): with `preview` only, an Image block without a source renders a dashed 16:9 box "Image to upload" (alt text and caption if any), styled inline with brand tokens (`--sage`, `--pale-sage`, `--r`). Without `preview` (published pages) it still renders nothing. No hooks, no `'use client'`.
  - [BlogStudio.tsx](components/blog-studio/BlogStudio.tsx): the note shows in the message and Undo paste bar (it is part of the paste's notes) and, for a paste through a text box, in the "Split into blocks?" dialog. Image paste: in an Image block's source field (placeholder now "Paste an image (⌘V), use Upload, or type /images/blog/…") the image is uploaded and set, and the cursor moves to Alt text; in the paste area and every box with the formatting bar a new Image block is added (at the paste area's position, or after the current block) and focused at its Alt text; the box's text is unchanged. Uploads use the existing `upload` → `uploadImage` path only. "Uploading image…", then "Image uploaded. Add its alt text." or the upload's error; a second image paste while one uploads is refused (one paste, one upload, one block). A GIF/HEIC paste says "Only JPG, PNG or WebP images can be pasted."; an image copied only as a web address (Google Docs) uploads nothing and says to download it. The featured image field accepts a pasted image the same way (same component); after Upload in an Image block the cursor also moves to Alt text.
  - [BlogStudio.module.css](components/blog-studio/BlogStudio.module.css): `.modalNote` for the note in the dialog.
  - [tests/hooks.mjs](tests/hooks.mjs): `.tsx` files are compiled with the project's TypeScript, so a test can render `StudioArticle`.
  - Unchanged: the block model, the Sanity document shape and validation, the server actions and upload checks, the site CSS and every published page's output.
- **Expected effects:** a Pages paste no longer starts with doctype text and tells the writer how to restore headings and images; the preview shows where an image is missing; single images can be pasted straight into a post.
- **Tests (run by Claude, agent):** `npx tsc --noEmit` and `npm run build` pass (`next-env.d.ts`, rewritten by the build, was restored); `npm test` 170/170 (12 new: 4 in [article-paste.test.mts](tests/article-paste.test.mts) including the real Pages clipboard [tests/fixtures/pages-clipboard.html](tests/fixtures/pages-clipboard.html), made with `textutil`: no DOCTYPE text, `source: 'apple'` and the note, bulleted list with the sub-point flattened, numbered list with its bold run, 4×3 table, both links; doctype / `<?xml?>` stripping on Word-shaped and plain HTML; Google Docs, Word and plain HTML not flagged; a Google Docs image becomes an empty Image block in place; 1 in [table-paste.test.mts](tests/table-paste.test.mts): a table after a doctype; 7 in the new [image-paste.test.mts](tests/image-paste.test.mts): `imageFromClipboard` for PNG / JPEG / WebP, text, GIF / HEIC / PDF, no files, Finder names; `StudioArticle` renders the placeholder with `preview` and nothing without it). Mutation check: restoring the old `<![…` pattern fails 3 tests. In the browser (Chrome for Testing, headless, driven over the DevTools protocol; synthetic paste events; the user's own `npm run dev` on port 3000, which was already running, development dataset, signed in; 19 of 19 checks passed): the Pages fixture pasted into an empty post gave no DOCTYPE text and the note in the Undo paste bar and the message; pasted into a Paragraphs box, the dialog showed the note; a Google Docs-shaped article with an image left one empty Image block and the Preview showed the dashed "Image to upload" box (16:9); a PNG (`DataTransfer` holding a `File`) pasted into the Image block's source field showed "Uploading image…", set a Sanity CDN source and focused Alt text; pasted into a Paragraphs box it added an Image block right after it with the text unchanged, and a second paste during that upload was refused; pasted into the "Paste article" area it added an Image block there and closed the area; an image plus text was left to the browser as text (not intercepted, no upload, no block); a GIF and a Google Docs image address gave their messages and no upload; at 375 px no sideways scroll. The post was closed with "Discard changes". **Uploads:** the three pasted PNGs were identical, so Sanity stored one asset: `image-5b76f89664a9d68ae1ed3df085bae5606ae7bf2f-320x180-webp` (development dataset, `https://cdn.sanity.io/images/lk42drbi/development/5b76f89664a9d68ae1ed3df085bae5606ae7bf2f-320x180.webp`). It is not referenced by any post; nothing else was deleted or written.
- **Not tested / assumptions:** a real image paste from Pages, Word, Preview, a screenshot, a web page or Finder (the checks used a synthetic `File`; that Chrome exposes these as a JPG / PNG / WebP file, and that Finder's text is the file name, is assumed); a whole-article paste from Word desktop with a real clipboard; Safari and Firefox; that the uploaded image's thumbnail rendered in the editor (the CDN served it, but the screenshot was taken before it loaded).
- **Independent check (Claude, 27 October 2026):** code review of the D048 changes; `npx tsc --noEmit`, `npm run build` and `npm test` (170/170) re-run. In the studio on a local production server (`next start`, throwaway test password, development dataset, nothing saved, no image uploaded): an Apple-style paste (doctype + Cocoa generator meta) showed no doctype text and the Pages note in the Undo paste bar, with lists, the bold run, both links and the table kept; a Google Docs-shaped paste with an image left an empty Image block, shown in Preview as "Image to upload" with its alt text; a GIF paste gave "Only JPG, PNG or WebP images can be pasted."; an image plus text pasted as text with no new block; an image given only as a Google address gave the download message; the editor thumbnail of the agent's uploaded asset loaded (320 px wide); no console errors. The Finder exception was reviewed: it applies only when the text is exactly the pasted file's name. The real image paste from each app is still untested.
- **Limitations:** Pages headings still arrive as (bold) paragraphs to fix with Turn into; Pages images never arrive with a document copy; Google Docs and Word document copies still give empty Image blocks; a pasted image's alt text must be written by hand; HEIC and GIF must be converted first; one image per paste.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## D049 — Blog studio: visual editing (Tiptap), bold italic, inline code, nested lists, H4 and a Sources block

- **Date:** 27 October 2026.
- **Status:** Implemented and verified locally (unit tests, typecheck, production build, bundle check, browser checks on a local production server). Not committed, pushed or deployed. Nothing was written to Sanity. The published-page styles for H4, nested lists and the Sources block were approved by the user on 27 October 2026.
- **Why:** every studio text box showed raw markers (`**bold**`, `*italic*`, `[text](url)`), bold and italic could not be combined, and there was no inline code, no nested list, no H4 and no structured way to list sources. Writers had to learn the markers and could not see the result until Preview.
- **Approval:**
  - **Library:** the user approved adding the editor library **Tiptap** (MIT) on 27 October 2026 ("write a prompt and leave the things that break the brand rules"), after Claude listed Tiptap as the one new library. AGENTS.md "No other UI libraries" required asking; AGENTS.md now records Tiptap as allowed for the blog studio only.
  - **Out of scope, decided by the user on 27 October 2026:** text colour of any kind (docs/brand.md rule 5) and underline (it would look like a link). Pasted underline, colours, fonts, sizes and strikethrough keep being dropped.
  - **Design: approved by the user on 27 October 2026** ("I approve the proposed H4, nested-list and Sources styles as shown in the screenshots"), after seeing the studio Preview screenshots at desktop width and 375 px and the exact CSS below. The approval covers that CSS as written; any change to it needs asking again. The studio's own box styles mirror the existing article styles.
- **Change:**
  - **Dependencies** ([package.json](package.json), [package-lock.json](package-lock.json)): `@tiptap/react`, `@tiptap/pm`, `@tiptap/starter-kit`, `@tiptap/extensions`, exact `3.31.4` (published 30 September 2026, MIT). npm also installed their peer `@tiptap/core` and the ProseMirror packages (51 lock entries, all additions); `@types/react`, `@types/react-dom` and `csstype` lost `"dev": true` in the lock because `@tiptap/react` lists them as peers (versions unchanged). `npm audit` reports 3 findings, all in packages that were there before (`next`, `sharp`, `source-map-js`), none in the new ones.
  - **Inline grammar** ([inline.ts](components/blog-studio/inline.ts), new): `parseInline` reads `**bold**`, `*italic*`, `***bold italic***` (nesting allowed), `` `code` `` (literal), `[label](url)` (label may hold bold, italic and code; links may sit inside bold) and the escapes `\*`, `` \` ``, `\[`, `\]`, `\(`, `\)`, `\\`, with CommonMark-style delimiter rules (a `*` run opens before a non-space and closes after one; the "rule of 3"). Anything that does not parse is literal text. `serializeRuns` writes text-with-marks back as a string, escaping typed `*`, backticks, `[`, `]` and `\\`, keeping spaces outside markers, and checking that the string reads back the same; where bold or italic cannot be written with `*` markers (overlapping without nesting, or changing mid-word next to another change, code or a link edge) it drops them from that stretch, never adds. `StudioArticle`'s `Inline`, `stripInline` (FAQ schema, guide titles, keywords, word count) and the paste parser all use it. `safeHref`, `isExternalHref`, `LINK_PATTERN` and `URL_PART` moved here and are re-exported from postUtils.ts unchanged.
  - **Data model** ([types.ts](components/blog-studio/types.ts), [blogPosts.ts](lib/sanity/blogPosts.ts), [postValidation.ts](lib/sanity/postValidation.ts)): heading `level: 2 | 3 | 4` (5 is refused); list lines nest by one leading tab per level, at most 3 levels (`listItems` returns `{ level, text }`); new block `sources` `{ heading, items: { id, publisher, title, url, date }[] }`, stored with `_key`s and only those fields copied both ways; server validation: at most 40 items, title ≤ 200, publisher ≤ 120, date ≤ 40, url ≤ 600 and accepted by `safeHref` (or empty), ids by the block-key rule. Fields are still strings; existing posts, validation and rendering keep working.
  - **Renderer** ([StudioArticle.tsx](components/blog-studio/StudioArticle.tsx)): `<h4 id>`; nested `<ul>`/`<ol>` inside `<li>`; the Sources block as `<h2 id>` (in the guide) and `<ol class="article-sources">` ("Publisher: Title, date", title linked when safe, external links with `target="_blank" rel="noopener noreferrer"`); still no hooks and no `'use client'`.
  - **Helpers** ([postUtils.ts](components/blog-studio/postUtils.ts)): `headingAnchors` and `buildGuide` include the Sources heading (H2; only when it has entries); H4 anchors; Sources excluded from word count and keyword checks; checklist (recommended): at most one Sources block, last block, every source with a title and a link. The paste collector now works on runs: bold and italic together (`***`), `<code>` / `<kbd>` / `<samp>` / `<tt>` and monospace fonts as code, links inside bold, text escaped; tab-separated table cells are escaped too.
  - **Paste parser** ([articlePaste.ts](components/blog-studio/articlePaste.ts)): nested list levels kept (Google Docs nested lists and `aria-level`, Word for the web `aria-level` / `data-aria-level`, Word desktop `mso-list … levelN`, Markdown indentation), clamped to 3; sub-level items join the list above whatever their type; h4–h6 → H4; underline, colours, fonts and strikethrough still dropped.
  - **Editor** ([RichTextBox.tsx](components/blog-studio/RichTextBox.tsx), [editorSetup.ts](components/blog-studio/editorSetup.ts), [editorDoc.ts](components/blog-studio/editorDoc.ts), [clipboard.ts](components/blog-studio/clipboard.ts), new; [BlogStudio.tsx](components/blog-studio/BlogStudio.tsx)): Paragraphs, List, Quote, FAQ-answer and Heading boxes are Tiptap editors (StarterKit with underline, strike, code block, horizontal rule, blockquote, hard break and headings off; a code mark that combines with bold, italic and links; links with `openOnClick`, `autolink` and `linkOnPaste` off and every href checked by `linkProblem`; `immediatelyRender: false`; Markdown input and paste rules off so typed markers stay characters). A box mounts its editor only while edited and otherwise shows the same text through `Inline`; clicking places the cursor where clicked. Bar: Turn into (now with Heading 4), Bold (not in headings), Italic, Inline code, Link (the D047 field), Remove link, Clear formatting, Indent / Outdent in lists, `aria-pressed` states; shortcuts ⌘/Ctrl+B, I, E, K, Z, Shift+Z; ⌘/Ctrl+S still saves. Enter and Shift+Enter start a new paragraph; headings are one line; Tab / Shift+Tab nest list items up to 3 levels and let focus move on when they cannot. Every D047 / D048 paste rule runs from `handlePaste` before Tiptap; other pastes go in through the paste parser, never Tiptap's HTML import. `BlockCard` is memoised (its callbacks read the post through state updaters or `draftRef`). The heading level select has H4; the outline indents H4; a Sources editor has rows with Add row, Remove and Move up / down. Removed: `FormatTextarea` and the marker-editing helpers in formatting.ts (`toggleEmphasis`, `clearFormatting`, `removeLinks`, `linkAt`, `applyLink`, `lineRange`) with their tests.
  - **Styles:** [BlogStudio.module.css](components/blog-studio/BlogStudio.module.css): boxes (`.richText`) styled like the article (same inline-code and link styles as `.article-content`), pressed buttons, H4 outline indent, Sources rows; the unused `.formatHint` rules removed. [app/globals.css](app/globals.css), approved 27 October 2026, brand tokens only:

    ```css
    .article-content h4 { font-size: 1.15rem; line-height: 1.3; font-weight: 700; margin: 28px 0 10px; color: var(--ink); }
    .article-content li > ul,
    .article-content li > ol { margin: 10px 0 0; padding-left: 22px; gap: 8px; }
    .article-content ul ul { list-style: circle; }
    .article-content .article-sources { gap: 10px; font-size: 1rem; line-height: 1.6; }
    .article-content .article-source-meta { color: var(--sage); }
    /* and h4 added to the existing h2, h3 scroll-margin-top: 130px rule */
    ```
  - **Tests** ([tests/hooks.mjs](tests/hooks.mjs) unchanged since D048): new [inline.test.mts](tests/inline.test.mts), [editor.test.mts](tests/editor.test.mts), [blocks-d049.test.mts](tests/blocks-d049.test.mts); updated [article-paste.test.mts](tests/article-paste.test.mts), [table-paste.test.mts](tests/table-paste.test.mts), [formatting.test.mts](tests/formatting.test.mts) and one line of [actions.test.mts](tests/actions.test.mts) (level 4 is now valid, so the rejected level is 5).
  - **Docs:** [docs/blog-studio.md](docs/blog-studio.md) (code map, data model, inline grammar, paste, editor, Sources, Preview, checklist, §11 limitations) and [AGENTS.md](AGENTS.md) (the Tiptap exception, components entry, three "Do not" lines). docs/blog-seo-schema.md is unchanged: it describes code posts, and the studio's guide still lists H2s only (the Sources heading is an H2, as in the code posts).
- **Compatibility check (read-only, run by Claude before the renderer changed):** every studio post readable: the development dataset with the token (0 posts) and the production dataset through the public client without a token (1 published post, `email-marketing-automation-how-can-activecampaign-help-automate-email-marketing-campaigns`). It has no list line starting with a tab or space, no backtick, no `***`, no backslash before `*`, a backtick, `[`, `]`, `(` or `)`. Rendered with the old and the new `StudioArticle` to static markup: **byte-identical HTML** (9,276 characters), and identical guide, FAQ schema text and reading time. No published post changes on the live site.
- **Expected effects:** writers see bold, italic, code and links as they type; they can combine bold and italic, nest lists, use H4 and list sources. Published posts that use these render them with the approved CSS above.
- **Tests run (Claude, agent):** `npx tsc --noEmit` and `npm run build` pass (`next-env.d.ts`, rewritten by the build, was restored); `npm test` **202/202** (170 before; formatting 18 → 13 after removing the marker-helper tests; article-paste 21 → 26; new: inline 17, editor 7, blocks-d049 8). Highlights: every string written for the old grammar renders exactly as before (checked against a copy of the old renderer), with the intentional differences listed; all 4,096 combinations of bold, italic, code and link over three runs serialize stably and never add formatting, identical whenever bold and italic change at spaces and do not overlap (62 of the 64 bold/italic combinations; the other 2 overlap); round trips through the real Tiptap schema of each box; Tab / Shift+Tab boundaries; Sources validation, mapping, rendering, guide and checklist; paste of `<code>`, monospace, bold-italic, nested levels from Google Docs, Word and Markdown, h4–h6, underline and colour dropped.
- **Bundle check (Claude):** after `npm run build`, every `<script>` chunk of `/blog` and the 8 prerendered `/blog/<slug>` pages, and every chunk in the client reference manifests of `/blog` and `/blog/[slug]` (Sanity posts, rendered on demand), was searched for "tiptap" and "prosemirror": none. Control: one of the studio page's 4 chunks contains them.
- **Browser checks (Claude, agent):** a local production server on port 3124 (`next start`, because the user's own `next dev` held port 3000 and was left running), with `VERCEL_ENV=development` so the studio runs on the development dataset as in `npm run dev`; Chrome for Testing, headless, over the DevTools protocol; 21 of 21 checks passed, **no console errors or exceptions**:
  - typing with ⌘B, ⌘I, ⌘E and the link field (⌘K) showed bold, italic, bold + italic, code and a link live, with `aria-pressed` on; ⌘Z / ⌘⇧Z undid and redid; leaving the box showed the same formatting read-only;
  - Turn into Heading 4 on the middle of three lines split the paragraph into Paragraph / H4 / Paragraph, and the outline indented the H4;
  - Tab nested list items to the third level and Shift+Tab outdented, with focus kept in the box; the Preview showed `ul > li > ul > li > ul > li`;
  - a Sources block with two rows rendered "HubSpot: State of Marketing, checked 27 October 2026" and "Our Dubsado guide" under an H2 "Sources and reading", which appeared in the guide;
  - the Google Docs test document (the D047 sample) gave the same eight blocks as D047, now with "Stages per pipeline" as a nested item;
  - underlined, red, Georgia and struck text pasted into a box came in as plain text (bold kept);
  - no sideways scroll at 375 px in the editor or the Preview;
  - **input delay with 300 blocks** (150 paragraphs and 150 quotes): typing 31 characters in the middle box, key down to next frame took a median of **10.6 ms**, p95 18.0 ms, max 30.1 ms; the Event Timing API counted 118 input events over 16 ms (worst 40 ms; these durations run to the next paint);
  - every post was closed with "Discard changes": nothing was saved.
- **Not tested / assumptions:** real paste (system clipboard) in Safari or Firefox, and a real Word desktop clipboard, with the visual editor (all pastes were synthetic events in Chrome); screen readers; touch devices; a post published with the new blocks on the live site; that Chrome's `document.hasFocus()` behaves the same when a writer switches windows (editing should continue; not checked).
- **Limitations:** no text colour or underline (by decision); no line breaks inside a paragraph, no code blocks; lists at most 3 levels, every level of the list's type; overlapping or mid-word bold/italic changes may be dropped on save (never added); a box's undo history ends when focus leaves it; whole-document copies still bring no images (D048) and Pages still brings no headings (D048); FAQs and Sources are not created by paste.
- **Independent check (Claude, 27 October 2026):** re-ran `npx tsc --noEmit`, `npm test` (202/202) and `npm run build` (passed; `next-env.d.ts` restored). Bundle: the build has one chunk containing "tiptap" / "prosemirror", referenced only by the studio's client reference manifest; none of the 59 prerendered public pages loads it. Browser, on a local `next start` with a temporary studio password (saving blocked, nothing written): a pasted article kept bold + italic, inline code, three list levels and an H4 and dropped underline, colour and strikethrough; ⌘B / ⌘I / ⌘E typed live and typed `**`, `*` and `[draft]` stayed literal; a Sources row with a `javascript:` link was flagged in the editor and rendered as plain text in the Preview; no console errors; the post was closed with "Discard changes". **Bug found (open, fix prompt given to the agent):** Tab on a list item already at level 3 nests it to a fourth level in the editor, because the studio's Tab handler returns false and Tiptap's own ListItem `Tab: sinkListItem` binding then runs; the saved string is clamped to 3 levels, so the item jumps back to level 3 when the box loses focus.
- **Validation — fix for the Tab bug above (Claude, agent, 27 October 2026):** [editorSetup.ts](components/blog-studio/editorSetup.ts): list boxes now use `StudioListItem`, Tiptap's `ListItem` extended so its only key is Enter (`splitListItem`, unchanged); StarterKit's `listItem` is off in every box. The studio's own Tab / Shift+Tab (`indentListItem` / `outdentListItem`) are therefore the only bindings that nest or lift an item, and when they decline (first item, third level, top-level item) the key is not handled and the browser moves focus, as before. StarterKit's ListKeymap also binds Tab, but it acts only on a paragraph that is not in a list item, which a List box never has. `ListItem` is imported from `@tiptap/extension-list` 3.31.4, which `@tiptap/starter-kit` installs at that exact version; it is not listed in package.json (no package added, package.json and the lock file unchanged). Checks: the bug was first reproduced in a headless Tiptap editor (third Tab handled, item at depth 4); new tests in [tests/editor.test.mts](tests/editor.test.mts): `StudioListItem` binds only Enter, and in a real headless list editor (the editor's key handlers run in order, as ProseMirror runs them) Tab three times on "Back to top" gives levels 2, 3, then not handled with the item still at level 3, Tab on a level-3 item and on the first item is not handled, Shift+Tab on a top-level item is not handled and changes nothing, Shift+Tab on a level-3 item lifts it to 2; with the old set-up that test fails. `npx tsc --noEmit`, `npm test` (**204/204**) and `npm run build` pass; `next-env.d.ts` restored. Browser (local `next start` on port 3124 with `VERCEL_ENV=development`, the user's dev server left running; Chrome for Testing over the DevTools protocol; real key events): the repro list typed with Enter, Tab and Shift+Tab; Tab twice on "Back to top" nested it to level 2 then 3 with focus kept in the editor; the third Tab moved focus to the next control (the "Paste article" button) and the box then showed 3 levels with "Back to top" at level 3; Shift+Tab on "Top item" moved focus to the previous control (the bar's Indent button) and left every item at its level; no console errors; nothing saved, closed with "Discard changes" (8 of 8 checks).
- **Independent check of the Tab fix (Claude, 27 October 2026):** re-ran `npx tsc --noEmit`, `npm test` (204/204) and `npm run build` (passed; `next-env.d.ts` restored); the build still has one chunk containing "tiptap" / "prosemirror", referenced only by the studio page. Confirmed in node_modules/@tiptap/extension-list 3.31.4 that ListKeymap's Tab handler returns false inside a list item. Browser, local `next start` with a temporary studio password (saving blocked), real key presses: on the repro list, Tab took "Back to top" to level 2, then 3, and the third Tab moved focus to "Paste article" with the item still at level 3; no console errors; closed with "Discard changes". The Tab bug is fixed.
- **Dependency listed (27 October 2026):** the user approved adding `@tiptap/extension-list` to package.json ("Yes, add @tiptap/extension-list at exactly 3.31.4 to package.json and update the lock file. It is part of the approved Tiptap library."), because editorSetup.ts imports `ListItem` from it directly and relying on it being installed through `@tiptap/starter-kit` could break silently. Claude ran `npm install --save-exact @tiptap/extension-list@3.31.4`: package.json gains `"@tiptap/extension-list": "3.31.4"`, and the lock file changes by one line (the root dependency list); no package was added, removed or changed version. `npm audit` shows only the earlier findings (`next`, `sharp`, `source-map-js`). Checks: `npx tsc --noEmit`, `npm test` (204/204) and `npm run build` pass (`next-env.d.ts` restored); `npm ci --dry-run` accepts the lock file. AGENTS.md's Tiptap exception now lists the package.
- **Delivery:** Not committed, pushed or deployed. The user commits manually.

## Template for the next decision

Copy this block for a new entry and replace every placeholder:

### D0NN — [Short description]

- **Date:** [Date recorded; implementation date if different.]
- **Status:** [Proposed / approved / implemented / verified.]
- **Why:** [Problem and reason for choosing this approach.]
- **Proposed or actual change:** [Before → after text or a linked design preview.]
- **Affected files/pages:** [Links and scope.]
- **Approval:** [Required? Exact user approval and scope, or pending.]
- **Expected effects:** [Likely changes for visitors, search, performance or maintenance.]
- **Observed effects:** [What was actually measured; state if not measured.]
- **Limitations:** [Tradeoffs and unfinished work.]
- **Validation:** [Checks, results and who ran them; distinguish reported results.]
- **Delivery:** [Commit and deployment status, if verified.]
