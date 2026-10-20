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

/** Post ids become document ids, so only uuid-like values are accepted. */
export const POST_ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9-]{0,63}$/;

export const draftId = (id: string) => `${DRAFT_PREFIX}${id}`;
export const isLiveStatus = (status: StudioStatus) => status === 'published';

type SanityBlock = Omit<StudioBlock, 'id'> & { _key: string };

export interface BlogPostDocument extends Omit<StudioPost, 'id' | 'blocks'> {
  _id: string;
  _type: typeof BLOG_POST_TYPE;
  blocks: SanityBlock[];
}

export function toBlogPostDocument(post: StudioPost): BlogPostDocument {
  const { id, blocks, ...fields } = post;
  return {
    ...fields,
    _id: isLiveStatus(post.status) ? id : draftId(id),
    _type: BLOG_POST_TYPE,
    // Sanity identifies array items by _key.
    blocks: blocks.map(({ id: key, ...block }) => ({ ...block, _key: key }) as SanityBlock),
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
