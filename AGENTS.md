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
  platforms/<name>/page.tsx
                        One service page per CRM platform (dubsado, honeybook, hubspot,
                        activecampaign, jobber). Metadata + Service JSON-LD + content.
  blog/page.tsx         Blog listing.
  blog/<slug>/          One folder per blog post: post.tsx (data + article)
                        and a 3-line page.tsx. blog/_template/ is the starter.
  sitemap.ts, robots.ts, not-found.tsx
components/
  Header.tsx, Footer.tsx  Shared header/footer.
  home/                   Homepage sections.
  blog/                   Blog UI + BlogPostPage (used by every post's page.tsx),
                          BlogArticleLayout (page shell), blogMetadata.ts
                          (metadata), blogJsonLd.ts (schema).
content/blog/
  index.tsx               Registry of posts + selectors. Read its header comment.
  types.ts                BlogPost type + CATEGORIES.
  authors.ts              Author name/avatar.
public/                   Static files. Blog images go in public/images/blog/.
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
  Service JSON-LD. A new platform must also be added to `app/sitemap.ts`.
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
- Edit a post's `page.tsx`. It is identical in every post folder; change
  `components/blog/BlogPostPage.tsx` instead.
- Use a blog `guide` id that does not match an `id` on a heading in the article.
- Change a heading or FAQ answer without updating `guide` / `faqs` to match.
- Add Tailwind, CSS frameworks or component libraries.
- Commit build output (`.next/`).

## Known gaps (do not "fix" these without asking)

- `/contact`, `/platforms` (index page) and `/services/*` do not exist yet.
  Many "Book a discovery call" buttons link to `/contact`; leave them unless
  told otherwise.
- `components/Footer.tsx` links (`#consulting`, `#crm`, …) are placeholders.
- About, Privacy and Terms pages contain their own copy of the header/footer
  instead of using `components/Header.tsx` / `Footer.tsx`.
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
