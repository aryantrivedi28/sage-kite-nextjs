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
 *  • Posts published from the blog studio live in Sanity, not here. The
 *    listing, "Keep reading" and sitemap merge both through ./live.tsx; a
 *    Sanity post with the same slug as a post here is ignored.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { BlogPost } from './types';

/* Posts – one folder per post in app/blog/<slug>/. Import its post.tsx here and add it to `posts`. */
import whatIsDubsado from '@/app/blog/what-is-dubsado/post';
import whatIsHoneyBook from '@/app/blog/what-is-honeybook/post';
import dubsadoVsHoneyBook from '@/app/blog/dubsado-vs-honeybook/post';
import aiMarketingAutomationMistakes from '@/app/blog/ai-marketing-automation-mistakes/post';
import dubsadoSetupServices from '@/app/blog/dubsado-setup-services/post';
import dubsadoForInteriorDesigners from '@/app/blog/dubsado-for-interior-designers/post';
import automateServiceBusinessHoneyBook from '@/app/blog/automate-service-business-honeybook/post';
import bestCrmForCoachesAndConsultants from '@/app/blog/best-crm-for-coaches-and-consultants/post';

export * from './types';

export const posts: BlogPost[] = [whatIsDubsado, whatIsHoneyBook, dubsadoVsHoneyBook, aiMarketingAutomationMistakes, dubsadoSetupServices, dubsadoForInteriorDesigners, automateServiceBusinessHoneyBook, bestCrmForCoachesAndConsultants];

/* ─────────────────────────── Selectors ───────────────────────────────────
 * The listing, sitemap and related posts also show posts published from the
 * blog studio to Sanity, so their selectors (getPublishedPosts, getFeaturedPost,
 * getSanityPostBySlug, getSanityPostSlugs) live in ./live.tsx, which is
 * server-only. Import them from '@/content/blog/live'.
 */
