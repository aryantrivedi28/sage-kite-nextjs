import 'server-only';
import { cache } from 'react';
import { StudioArticle } from '@/components/blog-studio/StudioArticle';
import { SLUG_PATTERN, toBlogFields } from '@/components/blog-studio/postUtils';
import type { StudioPost } from '@/components/blog-studio/types';
import { PLATFORM_PAGE_SLUGS } from '@/content/platforms';
import { BLOG_POST_TYPE, PUBLISHED_BLOG_POSTS_QUERY, fromBlogPostDocument } from '@/lib/sanity/blogPosts';
import { getSanityReadClient, isSanityConfigured } from '@/lib/sanity/client';
import { isAllowedImageSrc, isUsableFeaturedImage } from '@/lib/sanity/image';
import { posts as codePosts } from './index';
import type { BlogPost } from './types';

/*
 * ─────────────────────────────────────────────────────────────────────────
 *  LIVE BLOG POSTS: code posts + published Sanity posts
 * ─────────────────────────────────────────────────────────────────────────
 *  The /blog listing, /blog/[slug], related posts and the sitemap read from
 *  here. Code posts come from `posts` in ./index.tsx; Sanity posts are the
 *  ones published in the blog studio (docs/sanity.md).
 *
 *  Drafts never reach the site:
 *    1. the read client has no token, so `drafts.*` documents are unreadable;
 *    2. the query only matches status "published" outside drafts.*;
 *    3. toBlogPost() rejects anything not published or missing required fields.
 *
 *  A Sanity post whose slug is used by a code post is ignored: code wins.
 *  If Sanity is not configured (no env vars) only code posts are shown. If a
 *  Sanity request fails, the error is thrown on purpose: during revalidation
 *  Next.js then keeps serving the last good page instead of dropping posts.
 * ─────────────────────────────────────────────────────────────────────────
 */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const codeSlugs = new Set(codePosts.map((p) => p.slug));

/** A published Sanity post as a BlogPost, or null if it is not fit to show. */
function toBlogPost(p: StudioPost): BlogPost | null {
  if (
    p.status !== 'published' ||
    !SLUG_PATTERN.test(p.slug) ||
    !p.title.trim() ||
    !p.excerpt.trim() ||
    !p.category.trim() ||
    !ISO_DATE.test(p.publishedAt) ||
    !isUsableFeaturedImage(p.featuredImage)
  ) {
    return null;
  }
  const { guide, faqs, readingTime } = toBlogFields(p);
  const blocks = p.blocks;
  return {
    slug: p.slug,
    title: p.title.trim(),
    seoTitle: p.seoTitle.trim() || undefined,
    excerpt: p.excerpt.trim(),
    category: p.category,
    author: p.author.trim() || 'Sage Kite',
    authorImage: isAllowedImageSrc(p.authorImage) ? p.authorImage : undefined,
    publishedAt: p.publishedAt,
    updatedAt: ISO_DATE.test(p.updatedAt) ? p.updatedAt : undefined,
    readingTime,
    featuredImage: p.featuredImage,
    imageAlt: p.imageAlt.trim() || undefined,
    tags: p.tags.length ? p.tags : undefined,
    focusKeyword: p.focusKeyword.trim() || undefined,
    secondaryKeywords: p.secondaryKeywords.length ? p.secondaryKeywords : undefined,
    guide,
    faqs: faqs.length ? faqs : undefined,
    relatedPlatform: PLATFORM_PAGE_SLUGS.includes(p.relatedPlatform) ? p.relatedPlatform : undefined,
    featured: p.featured || undefined,
    content: function StudioPostContent() {
      return <StudioArticle blocks={blocks} />;
    },
  };
}

/** Published Sanity posts, newest first. Deduplicated per request. */
const getSanityPosts = cache(async (): Promise<BlogPost[]> => {
  if (!isSanityConfigured()) return [];
  const docs = await getSanityReadClient().fetch<Record<string, unknown>[]>(PUBLISHED_BLOG_POSTS_QUERY, {
    type: BLOG_POST_TYPE,
  });
  const seen = new Set<string>();
  const result: BlogPost[] = [];
  for (const doc of docs) {
    const post = toBlogPost(fromBlogPostDocument(doc));
    if (!post || codeSlugs.has(post.slug) || seen.has(post.slug)) continue;
    seen.add(post.slug);
    result.push(post);
  }
  return result;
});

/** All live posts (code and Sanity), newest first. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const live = [...codePosts.filter((p) => !p.draft), ...(await getSanityPosts())];
  return live.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/** The post to headline the listing: the newest `featured` one, else the newest. */
export async function getFeaturedPost(): Promise<BlogPost | undefined> {
  const live = await getPublishedPosts();
  return live.find((p) => p.featured) ?? live[0];
}

/** A published Sanity post by slug (code posts are served by their own folders). */
export async function getSanityPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!SLUG_PATTERN.test(slug)) return undefined;
  return (await getSanityPosts()).find((p) => p.slug === slug);
}

/** Slugs of published Sanity posts, for generateStaticParams. */
export async function getSanityPostSlugs(): Promise<string[]> {
  return (await getSanityPosts()).map((p) => p.slug);
}
