import type React from 'react';

export interface BlogGuideItem {
  id: string;
  title: string;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  /** URL segment: /blog/<slug> */
  slug: string;
  title: string;
  /**
   * Optional shorter title for Google results and the browser tab, when
   * `title` is long. Keep it under ~48 characters; " | Sage Kite" is added.
   */
  seoTitle?: string;
  /** 1–2 sentence summary used on cards and in metadata. */
  excerpt: string;
  /** One of CATEGORIES. */
  category: string;
  author: string;
  /** Optional author avatar in /public. */
  authorImage?: string;
  /** ISO date, e.g. "2026-09-15". */
  publishedAt: string;
  /** ISO date of the last meaningful edit. Defaults to publishedAt. */
  updatedAt?: string;
  /** Human label, e.g. "6 min read". */
  readingTime: string;
  /** Path under /public, e.g. "/images/blog/my-post.png". */
  featuredImage: string;
  /** Alt text for the featured image. */
  imageAlt?: string;
  tags?: string[];
  guide: BlogGuideItem[];
  /**
   * Optional FAQ schema. Copy the questions and answers exactly as they
   * appear in the post's "Frequently asked questions" section.
   */
  faqs?: BlogFaq[];
  /**
   * Optional platform slug (e.g. "dubsado") when the post is about a
   * platform we implement. Links the article to /platforms/<slug>'s
   * Service schema.
   */
  relatedPlatform?: string;
  /** Headline the listing. Only one post should set this. */
  featured?: boolean;
  /** Hidden from the live site when true. */
  draft?: boolean;
  /**
   * The article body, rendered inside .article-content by the shared
   * /blog/[slug] template. Leave it out when the post has its own folder
   * at app/blog/<slug>/ (page.tsx + client.tsx).
   */
  content?: () => React.JSX.Element;
}

/**
 * Blog categories. Add or remove entries here and the filter updates
 * automatically. Keep the values identical to the `category` used on posts.
 */
export const CATEGORIES = [
  'Business Growth',
  'CRM',
  'Marketing',
  'Automation',
  'Operations',
  'People',
  'Technology',
] as const;

export type Category = (typeof CATEGORIES)[number];
