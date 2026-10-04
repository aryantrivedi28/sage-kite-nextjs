# AGENTS.md

Guide for AI coding assistants (and new developers) working on this repo.
Read this first. It covers what the code does not make obvious, and the
mistakes that have already happened once.

## What this is

Marketing website for **Sage Kite**, a business growth consultancy.
Live at `https://www.sagekite.com`.

- Next.js 16 (App Router), React 19, TypeScript. No database, no API routes,
  no auth, no environment variables.
- Every page is statically generated at build time.
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
```

There is no lint script and no test suite. "Done" means typecheck + build pass
and the changed page has been opened in the browser.

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
  blog/page.tsx         Blog listing.
  blog/<slug>/          One folder per blog post: post.tsx (data + article)
                        and a 3-line page.tsx. blog/_template/ is the starter.
  contact/page.tsx      /contact: details, enquiry form (components/contact/ContactForm.tsx),
                        office hours and quick questions. Contact details, office hours,
                        form webhook and booking link live in content/contact.ts.
  book/page.tsx         /book: the GoHighLevel booking widget (iframe + form_embed.js), embedded
                        as supplied. Every "Book a discovery call" button links here.
                        form_embed.js is loaded by components/book/BookingEmbedScript.tsx, not
                        next/script: it must re-run on every visit or the iframe is not resized.
  sitemap.ts, robots.ts, not-found.tsx
components/
  Header.tsx, Footer.tsx  Shared header/footer.
  home/                   Homepage sections.
  blog/                   Blog UI + BlogPostPage (used by every post's page.tsx),
                          BlogArticleLayout (page shell), blogMetadata.ts
                          (metadata), blogJsonLd.ts (schema), FieldDiagram
                          (HTML/CSS diagrams inside articles).
content/blog/
  index.tsx               Registry of posts + selectors. Read its header comment.
  types.ts                BlogPost type + CATEGORIES.
  authors.ts              Author name/avatar.
content/platforms.ts      Platform list and industry groups: homepage "Platforms" grid,
                          /platforms directory and sitemap. A platform with a `slug` links
                          to /platforms/<slug> and is in the sitemap.
content/founders-thoughts.ts
                          Founder's Thoughts essays, newest first. Add a new essay here
                          and create app/insights/founders-thoughts/<slug>/page.tsx.
public/                   Static files. Blog images go in public/images/blog/,
                          essay images in public/images/founders-thoughts/.
```

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
- Use a blog `guide` id that does not match an `id` on a heading in the article.
- Change a heading or FAQ answer without updating `guide` / `faqs` to match.
- Add Tailwind, CSS frameworks or component libraries.
- Commit build output (`.next/`).

## Known gaps (do not "fix" these without asking)

- `/insights` (index page), `/for-agencies` and `/industries/*` do not
  exist yet. Platform pages link to `/for-agencies`; `/services/white-label` is
  the agency page that exists today.
- The `/contact` form is frontend only. `CONTACT_WEBHOOK_URL` in
  `content/contact.ts` is empty until the backend webhook exists; until then the
  form validates but tells visitors to email instead.
- `components/Footer.tsx`: Work and Insights links are placeholders until those pages exist.
- No `og:image` share image yet, except blog posts (they use their featured image).
- `app/home-interactions.tsx` and `app/site-content.ts` are not used by any page.
  `components/home/Work.tsx` is imported in `app/page.tsx` but not rendered.
- Platform pages keep page-specific CSS in an inline `<style>` block.
  `honeybook` uses `honeybook.module.css`.
- `transform.js`, `transform_jobber.js`, `jobber-source.html` and `scratch/` are
  one-off HTML→TSX conversion leftovers, not part of the site. Ignore them.

## Keeping this file useful

When you change how something works, update this file in the same commit.
When an AI assistant makes a mistake, add a one-line rule under "Do not".

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
