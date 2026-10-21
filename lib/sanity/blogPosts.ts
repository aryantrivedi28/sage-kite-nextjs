import type { StudioBlock, StudioPost, StudioStatus } from '@/components/blog-studio/types';

/*
 * StudioPost <-> Sanity `blogPost` document (docs/sanity.md §4).
 *
 * Published posts are stored as `<id>`; drafts and scheduled posts as
 * `drafts.<id>`. Sanity does not return documents whose _id contains a dot to
 * requests without a token, so unpublished posts stay private even though the
 * dataset is public. Exactly one of the two documents exists for a post.
 */

export const BLOG_POST_TYPE = 'blogPost';
const DRAFT_PREFIX = 'drafts.';

/**
 * Post ids become document ids, so only UUIDs are accepted (what the studio generates with
 * crypto.randomUUID). That keeps every other kind of document out of reach: image assets
 * (`image-<hash>-<w>x<h>-<ext>`), `drafts.…`, `system.…` and the like never match.
 */
export const POST_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** Block ids become array `_key`s inside a post: looser than post ids, never a document id. */
export const BLOCK_KEY_PATTERN = /^[A-Za-z0-9][A-Za-z0-9-]{0,63}$/;

export const draftId = (id: string) => `${DRAFT_PREFIX}${id}`;
export const isLiveStatus = (status: StudioStatus) => status === 'published';

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type SanityBlock = DistributiveOmit<StudioBlock, 'id'> & { _key: string };

export interface BlogPostDocument extends Omit<StudioPost, 'id' | 'blocks'> {
  _id: string;
  _type: typeof BLOG_POST_TYPE;
  blocks: SanityBlock[];
}

/** Copies only the known fields of a block: anything else a client sends is dropped. */
function toSanityBlock(block: StudioBlock): SanityBlock {
  const _key = block.id;
  switch (block.type) {
    case 'heading':
      return { _key, type: 'heading', level: block.level, text: block.text };
    case 'text':
      return { _key, type: 'text', text: block.text };
    case 'list':
      return { _key, type: 'list', ordered: block.ordered, items: block.items };
    case 'image':
      return { _key, type: 'image', src: block.src, alt: block.alt, caption: block.caption };
    case 'quote':
      return { _key, type: 'quote', text: block.text, cite: block.cite };
    case 'table':
      return { _key, type: 'table', rows: block.rows };
    case 'video':
      return { _key, type: 'video', url: block.url, title: block.title };
    case 'faq':
      return { _key, type: 'faq', question: block.question, answer: block.answer };
    case 'divider':
      return { _key, type: 'divider' };
  }
}

/**
 * Builds the stored document from an explicit list of fields. The client's object is never
 * spread into it, so `_id`, `_type`, `_createdAt`, `_rev` or any other key it sends cannot
 * reach Sanity: the type is always `blogPost` and the id is derived here.
 */
export function toBlogPostDocument(post: StudioPost): BlogPostDocument {
  return {
    _id: isLiveStatus(post.status) ? post.id : draftId(post.id),
    _type: BLOG_POST_TYPE,
    slug: post.slug,
    title: post.title,
    seoTitle: post.seoTitle,
    excerpt: post.excerpt,
    category: post.category,
    author: post.author,
    authorImage: post.authorImage,
    status: post.status,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    scheduledFor: post.scheduledFor,
    featuredImage: post.featuredImage,
    imageAlt: post.imageAlt,
    tags: [...post.tags],
    focusKeyword: post.focusKeyword,
    relatedPlatform: post.relatedPlatform,
    featured: post.featured,
    ...(post.firstPublishedAt ? { firstPublishedAt: post.firstPublishedAt } : {}),
    createdAt: post.createdAt,
    savedAt: post.savedAt,
    blocks: post.blocks.map(toSanityBlock),
  };
}

const str = (v: unknown) => (typeof v === 'string' ? v : '');

/** Builds a StudioPost from a stored document, ignoring Sanity's own fields (_rev, _updatedAt, ...). */
export function fromBlogPostDocument(doc: Record<string, unknown>): StudioPost {
  const status = (['draft', 'published', 'scheduled'] as const).find((s) => s === doc.status) ?? 'draft';
  const blocks = Array.isArray(doc.blocks) ? (doc.blocks as Record<string, unknown>[]) : [];
  return {
    id: str(doc._id).replace(DRAFT_PREFIX, ''),
    slug: str(doc.slug),
    title: str(doc.title),
    seoTitle: str(doc.seoTitle),
    excerpt: str(doc.excerpt),
    category: str(doc.category),
    author: str(doc.author),
    authorImage: str(doc.authorImage),
    status,
    publishedAt: str(doc.publishedAt),
    updatedAt: str(doc.updatedAt),
    scheduledFor: str(doc.scheduledFor),
    featuredImage: str(doc.featuredImage),
    imageAlt: str(doc.imageAlt),
    tags: Array.isArray(doc.tags) ? doc.tags.filter((t): t is string => typeof t === 'string') : [],
    focusKeyword: str(doc.focusKeyword),
    relatedPlatform: str(doc.relatedPlatform),
    featured: doc.featured === true,
    blocks: blocks.map(({ _key, ...block }) => ({ ...block, id: str(_key) }) as StudioBlock),
    firstPublishedAt: str(doc.firstPublishedAt) || undefined,
    createdAt: str(doc.createdAt),
    savedAt: str(doc.savedAt),
  };
}

/** Every blog post, drafts included. Needs the token client (perspective 'raw'). */
export const ALL_BLOG_POSTS_QUERY = `*[_type == $type] | order(savedAt desc)`;

/**
 * Published posts for the public site. The status and drafts filters are a second
 * line of defence: the read client has no token, so drafts are never returned anyway.
 */
export const PUBLISHED_BLOG_POSTS_QUERY = `*[_type == $type && status == "published" && !(_id in path("drafts.**"))] | order(publishedAt desc)`;
