/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SAGE KITE — BLOG CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *  How to add a new blog post
 *  --------------------------
 *  Each post has its own folder: app/blog/<slug>/ with
 *    post.tsx  – the post data (title, dates, guide, FAQs…) and article body
 *    page.tsx  – three lines, identical in every folder; never edit it
 *
 *  1. Copy app/blog/_template/ to app/blog/<your-slug>/. The folder name
 *     must equal `slug` and be lowercase with hyphens.
 *  2. Fill in post.tsx: slug, title, excerpt, category, dates, readingTime,
 *     image, tags, guide. Remove `draft: true` to publish.
 *  3. Import it below and add it to the `posts` array.
 *  4. Add a featured image to `/public/images/blog/` (16:9, ~1200x675 works
 *     well) and reference it in `featuredImage`. Give it meaningful `imageAlt`.
 *  5. Write the article inside `content` using standard HTML tags:
 *     <h2>, <h3>, <p>, <ul>/<ol> + <li>, <blockquote>, <strong>, <em>,
 *     <a>, <table>, <pre><code>. The .article-content styles handle the rest.
 *     Every `guide` id must match an id on a heading in the article.
 *     A very long article can live in its own file next to post.tsx
 *     (see app/blog/what-is-dubsado/article.tsx).
 *  6. Pick a `category` from CATEGORIES (types.ts) so the filter stays in sync.
 *  7. Article schema is generated automatically. If the post has an FAQ
 *     section, also fill `faqs` (same text as on the page). If it is about a
 *     platform we implement, set `relatedPlatform` (e.g. 'dubsado').
 *
 *  Notes
 *  -----
 *  • Set `featured: true` on the ONE post that should headline the listing.
 *    If none is marked, the most recent post is used automatically.
 *  • Set `draft: true` to keep a post out of the live site, sitemap and
 *    static params while you work on it.
 *  • The listing, category filter, individual pages, metadata, JSON-LD and
 *    sitemap all read from `posts` — you never touch the pages to publish.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { CATEGORIES, type BlogPost } from './types';

/* Posts – one folder per post in app/blog/<slug>/. Import its post.tsx here and add it to `posts`. */
import crmFoundation from '@/app/blog/how-crm-systems-create-a-foundation-for-sustainable-growth/post';
import whatIsDubsado from '@/app/blog/what-is-dubsado/post';

export * from './types';

export const posts: BlogPost[] = [crmFoundation, whatIsDubsado];

/* ─────────────────────────── Selectors ─────────────────────────────────── */

/** All live (non-draft) posts, newest first. */
export function getPublishedPosts(): BlogPost[] {
  return posts
    .filter((p) => !p.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

/** The post to headline the listing: the `featured` one, else the newest. */
export function getFeaturedPost(): BlogPost | undefined {
  const live = getPublishedPosts();
  return live.find((p) => p.featured) ?? live[0];
}

/** Live posts excluding the featured one, newest first. */
export function getRestPosts(): BlogPost[] {
  const featured = getFeaturedPost();
  return getPublishedPosts().filter((p) => p.slug !== featured?.slug);
}

/** Look up a single live post by slug. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug && !p.draft);
}

/** Categories that actually have at least one live post. */
export function getUsedCategories(): string[] {
  const used = new Set(getPublishedPosts().map((p) => p.category));
  return CATEGORIES.filter((c) => used.has(c));
}
