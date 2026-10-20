/*
 * Blog studio data. A StudioPost holds the same fields as a BlogPost in
 * content/blog/types.ts, except that the article is a list of blocks instead
 * of JSX, so a post written in the studio can be stored as JSON by any backend.
 * toBlogFields() in postUtils.ts derives the BlogPost fields (guide, faqs,
 * readingTime) from the blocks.
 */

export type StudioStatus = 'draft' | 'published' | 'scheduled';

export type StudioBlock =
  | { id: string; type: 'heading'; level: 2 | 3; text: string }
  /** One paragraph per non-empty line. Supports **bold**, *italic* and [text](url). */
  | { id: string; type: 'text'; text: string }
  /** One item per line. */
  | { id: string; type: 'list'; ordered: boolean; items: string }
  | { id: string; type: 'image'; src: string; alt: string; caption: string }
  | { id: string; type: 'quote'; text: string; cite: string }
  /** One row per line, cells separated by |. The first row is the header. */
  | { id: string; type: 'table'; rows: string }
  | { id: string; type: 'video'; url: string; title: string }
  | { id: string; type: 'faq'; question: string; answer: string }
  | { id: string; type: 'divider' };

export type StudioBlockType = StudioBlock['type'];

export interface StudioPost {
  id: string;
  slug: string;
  title: string;
  /** Shorter title for Google when `title` is over ~48 characters. */
  seoTitle: string;
  /** Card text and meta description. Under 160 characters. */
  excerpt: string;
  category: string;
  author: string;
  authorImage: string;
  status: StudioStatus;
  /** YYYY-MM-DD. Set on first publish if empty. */
  publishedAt: string;
  /** YYYY-MM-DD of the last meaningful edit. */
  updatedAt: string;
  /** datetime-local value, only for scheduled posts. */
  scheduledFor: string;
  /** Path under /public, a URL, or an uploaded image. */
  featuredImage: string;
  imageAlt: string;
  tags: string[];
  /** Editorial hint for the checklist only; not output on the page. */
  focusKeyword: string;
  relatedPlatform: string;
  featured: boolean;
  blocks: StudioBlock[];
  /** Once set, the slug is locked: published URLs must not change. */
  firstPublishedAt?: string;
  createdAt: string;
  /** ISO timestamp of the last save. */
  savedAt: string;
}

/**
 * Where the studio saves, decided on the server (components/blog-studio/server.ts).
 * Sanity is used only when running locally until sign-in exists.
 */
export type StudioStorage =
  | { kind: 'sanity'; dataset: string }
  | { kind: 'local'; reason: string };

/** Server Actions return errors as values: thrown messages are hidden in production. */
export type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };

/** A post that already lives in code (app/blog/<slug>/post.tsx). Read-only in the studio. */
export interface SitePostSummary {
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  featured: boolean;
}
