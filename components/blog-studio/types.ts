/*
 * Blog studio data. A StudioPost holds the same fields as a BlogPost in
 * content/blog/types.ts, except that the article is a list of blocks instead
 * of JSX, so a post written in the studio can be stored as JSON by any backend.
 * toBlogFields() in postUtils.ts derives the BlogPost fields (guide, faqs,
 * readingTime) from the blocks.
 */

export type StudioStatus = 'draft' | 'published' | 'scheduled';

/** One entry of a Sources block (decision.md D049). `date` is free text, e.g. "checked 27 October 2026". */
export interface StudioSource {
  id: string;
  publisher: string;
  title: string;
  url: string;
  date: string;
}

export type HeadingLevel = 2 | 3 | 4;

export type StudioBlock =
  | { id: string; type: 'heading'; level: HeadingLevel; text: string }
  /** One paragraph per non-empty line. Inline markers as in inline.ts: **bold**, *italic*, `code`, [text](url). */
  | { id: string; type: 'text'; text: string }
  /** One item per line; each leading tab is one level deeper (at most two, D049). Sub-levels use the list's type. */
  | { id: string; type: 'list'; ordered: boolean; items: string }
  | { id: string; type: 'image'; src: string; alt: string; caption: string }
  | { id: string; type: 'quote'; text: string; cite: string }
  /** One row per line, cells separated by |. The first row is the header. */
  | { id: string; type: 'table'; rows: string }
  | { id: string; type: 'video'; url: string; title: string }
  | { id: string; type: 'faq'; question: string; answer: string }
  /** The article's sources: an H2 (in the guide) and a numbered list. */
  | { id: string; type: 'sources'; heading: string; items: StudioSource[] }
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
  /** The one phrase the post should rank for. Checked by the checklist and used in the structured data. Not shown on the page. */
  focusKeyword: string;
  /** Related SEO phrases (up to 8). Used in the structured data when present. Not shown on the page and not tags. */
  secondaryKeywords: string[];
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
 * - sanity: signed in with the team password and the write guard passes.
 * - locked: no valid session. The studio is covered by a blocking dialog and nothing works
 *   behind it. `signin`: the team password would unlock it. `unavailable`: team sign-in is not
 *   set up (or is not allowed here, e.g. Vercel Preview), so it stays locked; the visitor is
 *   told nothing about why. There is no browser-only mode.
 * - blocked: signed in but the write guard refuses (wrong dataset, project or token). Nothing
 *   is saved anywhere: it never falls back to another dataset.
 */
export type StudioStorage =
  | { kind: 'sanity'; dataset: string }
  | { kind: 'locked'; why: 'signin' | 'unavailable' }
  | { kind: 'blocked'; reason: string };

/**
 * Server Actions return errors as values: thrown messages are hidden in production.
 * `signIn` is set when the session is missing or has ended, so the UI asks for the password again.
 */
export type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string; signIn?: true };

/** A post that already lives in code (app/blog/<slug>/post.tsx). Read-only in the studio. */
export interface SitePostSummary {
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  featured: boolean;
}
