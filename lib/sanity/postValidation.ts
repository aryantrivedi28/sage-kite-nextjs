import { BLOCK_LABELS, MAX_KEYWORD_LENGTH, MAX_POST_BLOCKS, MAX_SECONDARY_KEYWORDS, MAX_SOURCES, safeHref } from '@/components/blog-studio/postUtils';
import { CATEGORIES } from '@/content/blog/types';
import { PLATFORM_PAGE_SLUGS } from '@/content/platforms';
import { BLOCK_KEY_PATTERN, POST_ID_PATTERN } from './blogPosts';
import { isAllowedImageSrc } from './image';

/*
 * Server-side shape check for a post sent to a Server Action (decision.md D031). The
 * browser checklist can be bypassed by calling an action directly, so nothing the client
 * sends is trusted: the id must be a UUID, every field must have the expected type and a
 * sane size, and the category, platform and status must be known values. Pure, so it is
 * tested without Sanity. Returns the first problem found, or null.
 */

const STATUSES = ['draft', 'published', 'scheduled'];
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MAX = { slug: 120, title: 200, seoTitle: 200, excerpt: 400, short: 160, url: 600, text: 40000, tags: 20, tag: 60, blocks: MAX_POST_BLOCKS, stamp: 40 };

const isString = (v: unknown, max: number): v is string => typeof v === 'string' && v.length <= max;

function blockProblem(b: unknown): string | null {
  const bad = 'Invalid block in the article.';
  if (!b || typeof b !== 'object') return bad;
  const block = b as Record<string, unknown>;
  if (typeof block.id !== 'string' || !BLOCK_KEY_PATTERN.test(block.id)) return bad;
  if (typeof block.type !== 'string' || !Object.hasOwn(BLOCK_LABELS, block.type)) return bad;
  const text = (k: string) => isString(block[k], MAX.text);
  switch (block.type) {
    case 'heading':
      return (block.level === 2 || block.level === 3 || block.level === 4) && text('text') ? null : bad;
    case 'text':
      return text('text') ? null : bad;
    case 'list':
      return typeof block.ordered === 'boolean' && text('items') ? null : bad;
    case 'image':
      return isString(block.src, MAX.url) && isString(block.alt, MAX.short) && isString(block.caption, MAX.excerpt) ? null : bad;
    case 'quote':
      return text('text') && isString(block.cite, MAX.short) ? null : bad;
    case 'table':
      return text('rows') ? null : bad;
    case 'video':
      return isString(block.url, MAX.url) && isString(block.title, MAX.short) ? null : bad;
    case 'faq':
      return isString(block.question, MAX.excerpt) && text('answer') ? null : bad;
    case 'sources':
      return isString(block.heading, MAX.short) && Array.isArray(block.items) && block.items.length <= MAX_SOURCES && block.items.every(sourceOk)
        ? null
        : 'Invalid Sources block: at most 40 entries, each with a title of up to 200 characters and a link to a page on this site, http(s) or mailto.';
    case 'divider':
      return null;
    default:
      return bad;
  }
}

/** One Sources entry (D049): known fields of the right type and size; a link, if any, that the page would render. */
function sourceOk(item: unknown): boolean {
  if (!item || typeof item !== 'object' || Array.isArray(item)) return false;
  const i = item as Record<string, unknown>;
  return (
    typeof i.id === 'string' && BLOCK_KEY_PATTERN.test(i.id) &&
    isString(i.title, 200) && isString(i.publisher, 120) && isString(i.date, 40) && isString(i.url, MAX.url) &&
    (i.url.trim() === '' || !!safeHref(i.url.trim()))
  );
}

export function postShapeProblem(input: unknown): string | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return 'Invalid post.';
  const post = input as Record<string, unknown>;

  if (typeof post.id !== 'string' || !POST_ID_PATTERN.test(post.id)) return 'Invalid post id.';
  if (typeof post.status !== 'string' || !STATUSES.includes(post.status)) return 'Invalid status.';
  if (typeof post.title !== 'string' || !post.title.trim()) return 'Add a title before saving.';

  const strings: [string, number][] = [
    ['slug', MAX.slug], ['title', MAX.title], ['seoTitle', MAX.seoTitle], ['excerpt', MAX.excerpt],
    ['category', MAX.short], ['author', MAX.short], ['authorImage', MAX.url], ['featuredImage', MAX.url],
    ['imageAlt', MAX.short], ['focusKeyword', MAX.short], ['relatedPlatform', MAX.short],
    ['scheduledFor', MAX.stamp], ['createdAt', MAX.stamp], ['savedAt', MAX.stamp],
  ];
  for (const [key, max] of strings) if (!isString(post[key], max)) return 'Invalid post content.';
  for (const key of ['publishedAt', 'updatedAt']) {
    if (typeof post[key] !== 'string' || (post[key] !== '' && !ISO_DATE.test(post[key] as string))) return 'Invalid post content.';
  }
  if (post.firstPublishedAt !== undefined && !isString(post.firstPublishedAt, MAX.stamp)) return 'Invalid post content.';
  if (typeof post.featured !== 'boolean') return 'Invalid post content.';

  if (post.category !== '' && !(CATEGORIES as readonly string[]).includes(post.category as string)) return 'Choose one of the listed categories.';
  if (post.relatedPlatform !== '' && !PLATFORM_PAGE_SLUGS.includes(post.relatedPlatform as string)) return 'Invalid related platform.';

  if (!Array.isArray(post.tags) || post.tags.length > MAX.tags || !post.tags.every((t) => isString(t, MAX.tag))) return 'Invalid post content.';
  // Optional so posts exported before this field existed can still be imported.
  if (post.secondaryKeywords !== undefined) {
    const k = post.secondaryKeywords;
    if (!Array.isArray(k) || k.length > MAX_SECONDARY_KEYWORDS || !k.every((x) => isString(x, MAX_KEYWORD_LENGTH))) {
      return `Use at most ${MAX_SECONDARY_KEYWORDS} secondary keywords, ${MAX_KEYWORD_LENGTH} characters each or fewer.`;
    }
  }
  if (!Array.isArray(post.blocks) || post.blocks.length > MAX.blocks) return 'Invalid post content.';
  for (const b of post.blocks) {
    const problem = blockProblem(b);
    if (problem) return problem;
  }

  const images = [post.featuredImage as string, post.authorImage as string, ...(post.blocks as { type: string; src?: string }[]).flatMap((b) => (b.type === 'image' ? [b.src ?? ''] : []))];
  if (images.some((src) => src.startsWith('data:'))) return 'Images must be uploaded before saving.';
  // Only this site's files and this project's Sanity uploads: no other host can be put in a post.
  if (images.some((src) => src !== '' && !isAllowedImageSrc(src))) {
    return 'Images must be uploaded in the studio or be a file on this site (/images/…).';
  }

  return null;
}
