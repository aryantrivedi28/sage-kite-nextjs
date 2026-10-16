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

- **Status:** Existing sitemap confirmed; improvements remain pending.
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

## Template for the next decision

Copy this block for a new entry and replace every placeholder:

### D012 — [Short description]

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
