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

## Template for the next decision

Copy this block for a new entry and replace every placeholder:

### D034 — [Short description]

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
