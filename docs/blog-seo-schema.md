# Blog posts, SEO and schema

How to add a blog post, set up SEO metadata, and write Article and Service
schema (JSON-LD) on this site. Written for AI coding assistants with no prior
context. Follow it exactly. When the code and this doc disagree, the code wins;
fix this doc in the same change.

Site URL everywhere: `https://www.sagekite.com` (no trailing slash).

---

## 1. Adding a blog post

Blog posts are data. Adding a post never requires editing pages, metadata or
schema by hand. The shared template builds all of that from the post file.

### 1.1 Steps

1. **Image.** Save the featured image as `public/images/blog/<name>.jpg`
   (16:9, ~1200×675).
2. **Post file.** Copy `content/blog/posts/_template.tsx` to
   `content/blog/posts/<slug>.tsx`. The file name must equal `slug`.
3. **Fill in the fields** (see 1.2) and write the article inside `content`.
4. **Register it** in `content/blog/index.tsx`:
   ```tsx
   import myNewPost from './posts/<slug>';
   export const posts: BlogPost[] = [crmFoundation, whatIsDubsado, myNewPost];
   ```
5. **Verify** (see section 6).

### 1.2 Post fields

| Field | Required | Rules |
|---|---|---|
| `slug` | yes | Lowercase, hyphens. Becomes `/blog/<slug>`. Must equal the file name. Never change it after publishing. |
| `title` | yes | Shown as the H1 and in schema `headline`. |
| `seoTitle` | no | Shorter title for Google and the browser tab. Use when `title` is over ~48 characters (` \| Sage Kite` is appended automatically). |
| `excerpt` | yes | 1–2 sentences, **under 160 characters**. Used as meta description, card text and schema `description`. |
| `category` | yes | Must be one of `CATEGORIES` in `content/blog/types.ts`. |
| `author`, `authorImage` | yes | Use `AUTHOR` / `AUTHOR_IMAGE` from `content/blog/authors.ts`. |
| `publishedAt` | yes | `YYYY-MM-DD`. |
| `updatedAt` | yes | `YYYY-MM-DD`. Change it whenever the article is meaningfully edited. |
| `readingTime` | yes | e.g. `"8 min read"`. |
| `featuredImage` | yes | Path under `public`, e.g. `/images/blog/<name>.jpg`. |
| `imageAlt` | yes | Describe what the image shows. |
| `tags` | no | Become schema `keywords` and meta keywords. |
| `guide` | yes | Sidebar table of contents. Each `id` **must** match an `id` on a heading inside `content`. |
| `faqs` | no | Only if the article has an FAQ section. Question and answer text must be **identical** to what the page shows. Produces FAQPage schema. |
| `relatedPlatform` | no | `'dubsado' \| 'honeybook' \| 'hubspot' \| 'activecampaign' \| 'jobber'`. Links the article to that platform page's Service schema. Only set it if the post is mainly about that platform. |
| `featured` | no | Puts the post at the top of `/blog`. **Only one post** may have it; remove it from the old one. |
| `draft` | no | `true` hides the post from the site, listing and sitemap. The template starts as a draft; delete the line to publish. |
| `content` | yes* | The article body. *Leave it out only for a custom-layout post (1.4). |

### 1.3 Writing `content`

- Plain HTML elements in JSX: `<h2>`, `<h3>`, `<p>`, `<ul>/<ol>/<li>`,
  `<blockquote>`, `<strong>`, `<em>`, `<a>`, `<table>`. The `.article-content`
  styles in `app/globals.css` format them. Do not add inline styles or classes.
- Start with `<h2>`. The page already renders the `<h1>` from `title`.
- Give every heading listed in `guide` a matching `id`.
- Escape in JSX text: `'` → `&apos;`, `—` → `&mdash;`, `"` → `&quot;`.
- Internal links: relative paths (`/platforms/hubspot`, `/blog/<slug>`). Never
  link to `glasspane.pages.dev`.

### 1.4 Custom-layout post (only when a post needs its own UI)

Use this only when the shared layout cannot do what the post needs.

1. Create the post file as in 1.1 but **omit `content`**. The `[slug]` template
   skips posts without `content`.
2. Create `app/blog/<slug>/page.tsx` by copying
   `app/blog/what-is-dubsado/page.tsx`. Change `SLUG`, the component names and
   the `./client` import.
3. Create `app/blog/<slug>/client.tsx` with `'use client'` and the article body.

Metadata and schema still come from the post file. Do not add schema or
metadata by hand in these files.

### 1.5 What is generated automatically

| Output | Built by |
|---|---|
| Page metadata (title, description, canonical, Open Graph, Twitter) | `components/blog/blogMetadata.ts` |
| Article + BreadcrumbList + FAQPage JSON-LD | `components/blog/blogJsonLd.ts` |
| Page shell (hero, guide sidebar, tags, related posts, CTA) | `components/blog/BlogArticleLayout.tsx` |
| `/blog` listing and category filter | `app/blog/page.tsx` |
| Sitemap entry | `app/sitemap.ts` |

---

## 2. SEO metadata (all pages)

Every page exports `metadata` (or `generateMetadata`) with these fields:

```tsx
export const metadata: Metadata = {
  title: 'Page Title | Sage Kite',                    // under ~60 characters in total
  description: 'What the page offers, in one sentence.', // 70–160 characters, unique per page
  alternates: {
    canonical: 'https://www.sagekite.com/<path>',     // no trailing slash
  },
  openGraph: {
    type: 'website',                                  // 'article' for blog posts
    siteName: 'Sage Kite',
    url: 'https://www.sagekite.com/<path>',           // same as canonical
    title: 'Page Title | Sage Kite',
    description: '...',
  },
  twitter: {
    card: 'summary',                                  // 'summary_large_image' when there is an image
    title: 'Page Title | Sage Kite',
    description: '...',
  },
};
```

Rules:

- **Canonical, `og:url` and the sitemap URL must be identical**, with no
  trailing slash.
- Titles and descriptions must be unique across the site.
- Write `&`, never `&amp;`, inside metadata strings. Next.js escapes it.
- Next.js merges `openGraph` shallowly: a page that sets `openGraph` must set
  every field it needs (`type`, `siteName`, `url`, `title`, `description`).
- Pages in `about/`, `privacy-policy/`, `terms-of-service/` keep metadata in
  their `layout.tsx` because their `page.tsx` is a client component.
- A new route must also be added to `app/sitemap.ts` unless it is a blog post.
  Blog posts are added automatically.
- Never add `/_next/` to `app/robots.ts`.

---

## 3. Schema (JSON-LD) basics

- Render JSON-LD **on the server** in the page's JSX (platform pages put it
  just before `<Footer />`):
  ```tsx
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  ```
  Never inject schema from a client component, hook or `useEffect`.
- Use `"@context": "https://schema.org"` with a `"@graph"` array.
- Reference shared entities by `@id` instead of repeating them. These are
  defined once in `app/layout.tsx` and appear on every page:

  | Entity | `@id` |
  |---|---|
  | Organization (Sage Kite) | `https://www.sagekite.com/#organization` |
  | WebSite | `https://www.sagekite.com/#website` |

- `@id` patterns for page entities:

  | Page | Entity | `@id` |
  |---|---|---|
  | Platform page | WebPage | `https://www.sagekite.com/platforms/<name>/#webpage` |
  | | BreadcrumbList | `https://www.sagekite.com/platforms/<name>/#breadcrumb` |
  | | Service | `https://www.sagekite.com/platforms/<name>/#service` |
  | | FAQPage | `https://www.sagekite.com/platforms/<name>/#faq` |
  | Blog post | Article | `https://www.sagekite.com/blog/<slug>#article` |
  | | BreadcrumbList | `https://www.sagekite.com/blog/<slug>#breadcrumb` |
  | | FAQPage | `https://www.sagekite.com/blog/<slug>#faq` |

  Platform `@id`s have `/` before `#`. This is intentional: blog posts link to
  `/platforms/<name>/#service`, so keep that format.
- Schema must describe what is **visible on the page**. Do not add FAQs,
  services, ratings or prices that the page does not show.
- Do not put page-specific schema in `app/layout.tsx`; it would appear on
  every page.

---

## 4. Article schema (blog posts)

**Do not write Article schema by hand.** `components/blog/blogJsonLd.ts`
generates it from the post file for every post, including custom-layout posts.

Field mapping:

| Schema property | Source |
|---|---|
| `headline` | `title` |
| `description` | `excerpt` |
| `image` | `featuredImage` (made absolute) |
| `datePublished` / `dateModified` | `publishedAt` / `updatedAt ?? publishedAt` |
| `author` | `Person` with `author` and `authorImage` |
| `publisher` | `{ "@id": "https://www.sagekite.com/#organization" }` |
| `mainEntityOfPage` | `https://www.sagekite.com/blog/<slug>` |
| `articleSection` | `category` |
| `keywords` | `tags` joined with `, ` |
| `about` | `relatedPlatform` → `/platforms/<name>/#service` |
| FAQPage `mainEntity` | `faqs` |

To change Article schema for **all** posts, edit `blogJsonLd.ts`. To change it
for **one** post, change that post's fields. Do not special-case slugs in
`blogJsonLd.ts`.

---

## 5. Service schema (platform pages)

Each page in `app/platforms/<name>/page.tsx` defines a `jsonLd` constant inside
the page component and renders it before `<Footer />`. Copy this structure and
replace every `<…>` placeholder. `<name>` is the lowercase folder name.

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.sagekite.com/#organization",
      "name": "Sage Kite",
      "url": "https://www.sagekite.com/"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.sagekite.com/platforms/<name>/#webpage",
      "url": "https://www.sagekite.com/platforms/<name>",
      "name": "<Platform> setup and implementation services | Sage Kite",
      "description": "<One-sentence page summary>",
      "isPartOf": { "@id": "https://www.sagekite.com/#website" },
      "about": { "@id": "https://www.sagekite.com/platforms/<name>/#service" },
      "breadcrumb": { "@id": "https://www.sagekite.com/platforms/<name>/#breadcrumb" },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sagekite.com/platforms/<name>/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
        { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
        { "@type": "ListItem", "position": 3, "name": "<Platform>" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.sagekite.com/platforms/<name>/#service",
      "name": "<Platform> setup and implementation services",
      "serviceType": "<Platform> setup, configuration and implementation",
      "description": "<What the service covers, matching the page>",
      "provider": { "@id": "https://www.sagekite.com/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Place", "name": "Europe" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "New Zealand" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "What we implement in <Platform>",
        "itemListElement": [
          // One entry per capability card shown on the page ("What we implement" section)
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "<Capability 1>" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "<Capability 2>" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sagekite.com/platforms/<name>/#faq",
      "isPartOf": { "@id": "https://www.sagekite.com/#website" },
      "about": { "@id": "https://www.sagekite.com/platforms/<name>/#service" },
      "inLanguage": "en",
      "mainEntity": [
        // One entry per FAQ on the page, text copied exactly
        {
          "@type": "Question",
          "name": "<Question exactly as on the page>",
          "acceptedAnswer": { "@type": "Answer", "text": "<Answer exactly as on the page>" }
        }
      ]
    }
  ]
};
```

Rules:

- `hasOfferCatalog` items must match the capability cards on the page.
- FAQ questions and answers must match the page text word for word, with
  entities decoded (`&apos;` → `'`, `&mdash;` → `—`).
- Keep `areaServed` in sync with `app/layout.tsx`.
- The WebPage `url` has no trailing slash and must equal the page's canonical.
- After adding a new platform page, add `<name>` to the platform list in
  `app/sitemap.ts`.

For a new top-level service page outside `/platforms`, use the same
structure with that page's path in every `@id` and `url`.

---

## 6. Verify before committing

1. `npx tsc --noEmit` and `npm run build` both pass.
2. `npm run dev`, open the page:
   - Title and content render; every guide link jumps to its heading.
   - Blog posts appear on `/blog` (unless `draft`).
3. View the page source and check:
   - Exactly one `<h1>`.
   - `<title>`, `<meta name="description">`, `<link rel="canonical">` and
     `og:url` are present and correct.
   - Each `application/ld+json` block is valid JSON with the expected `@type`s.
4. After deploying, test the live URL at
   https://search.google.com/test/rich-results.
