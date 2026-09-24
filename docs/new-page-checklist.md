# New page checklist

Tick every box before you open a PR for a new page. Copy the list into the PR
description. Details and code templates are in
[blog-seo-schema.md](blog-seo-schema.md) (section numbers in brackets).

Site URL: `https://www.sagekite.com`, no trailing slash anywhere.

## 1. Every page

- [ ] **Meta title**: under ~60 characters including ` | Sage Kite`, and no
      other page uses it. [§2]
- [ ] **Keywords**: `keywords` set to 3–6 phrases specific to this page. [§2]
- [ ] **Meta description**: 70–160 characters, and no other page uses it.
      Write `&`, not `&amp;`. [§2]
- [ ] **Canonical**: `alternates.canonical` set to the full URL, with no
      trailing slash. [§2]
- [ ] **Open Graph / Twitter**: `openGraph.url` equals the canonical, and
      `type`, `siteName`, `title` and `description` are all set. [§2]
- [ ] **Sitemap**: page added to `app/sitemap.ts` with the same URL as the
      canonical. Blog posts are added automatically. [§2]
- [ ] **Robots.txt**: `app/robots.ts` does not block the page, and `/_next/`
      is not disallowed. Usually nothing to change.
- [ ] **FAQ schema**: if the page shows FAQs, it has `FAQPage` JSON-LD, and
      the question and answer text matches the page word for word. [§3, §5]
- [ ] Folder name is lowercase.
- [ ] Exactly one `<h1>` on the page.

## 2. Blog posts (also do section 1)

Metadata, canonical, sitemap and schema are generated from `post.tsx`. Do not
write them by hand. [§1]

- [ ] Folder `app/blog/<slug>/` copied from `app/blog/_template/`, and the
      folder name equals `slug`.
- [ ] `seoTitle` set if `title` is longer than ~48 characters.
- [ ] `excerpt` is under 160 characters (it becomes the meta description).
- [ ] `featuredImage` and `imageAlt` set; image is in `public/images/blog/`.
- [ ] `publishedAt` and `updatedAt` set.
- [ ] **Article schema**: comes from `components/blog/blogJsonLd.ts`. Just
      check the fields above are filled in. [§4]
- [ ] **FAQ schema**: `faqs` filled in if the article has an FAQ section,
      with text identical to the article.
- [ ] Every `guide` id matches a heading `id` in the article.
- [ ] `relatedPlatform` set only if the post is mainly about one platform.
- [ ] `draft: true` line removed when ready to publish.
- [ ] Post added to `posts` in `content/blog/index.tsx`.

## 3. Service / platform pages (also do section 1)

- [ ] Metadata written by hand in `page.tsx`. [§2]
- [ ] **Service schema**: `jsonLd` copied from the template in §5, with every
      `<…>` placeholder replaced.
- [ ] Every `@id` and `url` in the schema uses this page's path.
- [ ] WebPage `url` equals the canonical.
- [ ] `hasOfferCatalog` lists exactly the capability cards shown on the page.
- [ ] `areaServed` matches `app/layout.tsx`.
- [ ] `FAQPage` block included, matching the page's FAQs word for word.
- [ ] Platform name added to the platform list in `app/sitemap.ts`.

## 4. Before committing

- [ ] `npx tsc --noEmit` passes.
- [ ] `npm run build` passes.
- [ ] Page opened in `npm run dev` and looks right.
- [ ] View page source: `<title>`, `<meta name="description">`,
      `<link rel="canonical">` and `og:url` are correct.
- [ ] Each `application/ld+json` block is valid JSON with the right `@type`s.
- [ ] `/sitemap.xml` lists the new URL.
- [ ] After deploy: live URL passes
      https://search.google.com/test/rich-results.
