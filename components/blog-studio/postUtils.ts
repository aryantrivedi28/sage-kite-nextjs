import type { BlogFaq, BlogGuideItem } from '@/content/blog/types';
import { isUsableFeaturedImage } from '@/lib/sanity/image';
import { UPLOAD_IMAGE_FORMATS } from '@/lib/sanity/imageUpload';
import type { SitePostSummary, StudioBlock, StudioBlockType, StudioPost } from './types';

export const SITE_URL = 'https://www.sagekite.com';
export const TITLE_SUFFIX = ' | Sage Kite';
const WORDS_PER_MINUTE = 225;

/** The formats a writer may pick (checked again from the file's bytes on upload: lib/sanity/imageUpload.ts). */
export const ACCEPTED_IMAGE_TYPES: string[] = Object.keys(UPLOAD_IMAGE_FORMATS);
/** Largest file a writer may pick; it is resized in the browser before saving. */
export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
/** Largest resized image sent to the server (Server Action limit is set to 4mb in next.config.ts). */
export const MAX_RESIZED_BYTES = 3.5 * 1024 * 1024;

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function newId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Today as YYYY-MM-DD in the editor's local time zone. */
export function today(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function emptyPost(title: string, category: string, author: string, authorImage: string): StudioPost {
  const now = new Date().toISOString();
  return {
    id: newId(),
    slug: slugify(title),
    title,
    seoTitle: '',
    excerpt: '',
    category,
    author,
    authorImage,
    status: 'draft',
    publishedAt: '',
    updatedAt: '',
    scheduledFor: '',
    featuredImage: '',
    imageAlt: '',
    tags: [],
    focusKeyword: '',
    relatedPlatform: '',
    featured: false,
    blocks: [],
    createdAt: now,
    savedAt: now,
  };
}

export function newBlock(type: StudioBlockType): StudioBlock {
  const id = newId();
  switch (type) {
    case 'heading': return { id, type, level: 2, text: '' };
    case 'text': return { id, type, text: '' };
    case 'list': return { id, type, ordered: false, items: '' };
    case 'image': return { id, type, src: '', alt: '', caption: '' };
    case 'quote': return { id, type, text: '', cite: '' };
    case 'table': return { id, type, rows: '' };
    case 'video': return { id, type, url: '', title: '' };
    case 'faq': return { id, type, question: '', answer: '' };
    case 'divider': return { id, type };
  }
}

export const BLOCK_LABELS: Record<StudioBlockType, string> = {
  heading: 'Heading',
  text: 'Paragraphs',
  list: 'List',
  image: 'Image',
  quote: 'Quote',
  table: 'Table',
  video: 'YouTube video',
  faq: 'FAQ',
  divider: 'Divider',
};

/* ── Inline formatting: **bold**, *italic*, [text](url) ────────────────── */

// A link URL may contain one level of parentheses, e.g. Wikipedia's /wiki/CRM_(software).
const URL_PART = String.raw`(?:[^()\s]|\([^()\s]*\))+`;
export const INLINE_PATTERN = new RegExp(String.raw`(\*\*[^*\n]+\*\*|\*[^*\s][^*\n]*\*|\[[^\]\n]+\]\(${URL_PART}\))`, 'g');
export const LINK_PATTERN = new RegExp(String.raw`^\[([^\]\n]+)\]\((${URL_PART})\)$`);

/** Plain text with the inline markers removed, as used in FAQ schema. */
export function stripInline(s: string): string {
  return s
    .replace(new RegExp(String.raw`\[([^\]\n]+)\]\(${URL_PART}\)`, 'g'), '$1')
    .replace(/\*\*([^*\n]+)\*\*/g, '$1')
    .replace(/\*([^*\s][^*\n]*)\*/g, '$1')
    .trim();
}

/** Internal paths, anchors, http(s) and mailto only. Anything else is rendered as text. */
export function safeHref(href: string): string | null {
  return /^(\/(?!\/)|#|https?:\/\/|mailto:)/i.test(href) ? href : null;
}

export function lines(s: string): string[] {
  return s.split('\n').map((l) => l.trim()).filter(Boolean);
}

/** List lines with any pasted bullet or number marker removed. */
export function listItems(s: string): string[] {
  return lines(s).map((l) => l.replace(/^([-*•]|\d+[.)])\s+/, ''));
}

export function tableRows(s: string): string[][] {
  return lines(s).map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
}

export function youtubeId(url: string): string | null {
  const m = url.trim().match(
    /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/,
  );
  return m ? m[1] : null;
}

/* ── Structure derived from the blocks ─────────────────────────────────── */

const FAQ_HEADING = 'Frequently asked questions';

/**
 * Blocks as rendered: if the post has FAQs and the first one does not follow a
 * heading, a "Frequently asked questions" H2 is inserted before it, so the FAQ
 * section always appears in the guide.
 */
export function resolveBlocks(blocks: StudioBlock[]): StudioBlock[] {
  const i = blocks.findIndex((b) => b.type === 'faq');
  if (i === -1 || blocks[i - 1]?.type === 'heading') return blocks;
  return [
    ...blocks.slice(0, i),
    { id: 'auto-faq-heading', type: 'heading', level: 2, text: FAQ_HEADING },
    ...blocks.slice(i),
  ];
}

/** Heading block id → unique anchor id derived from its text. */
export function headingAnchors(blocks: StudioBlock[]): Map<string, string> {
  const used = new Map<string, number>();
  const anchors = new Map<string, string>();
  for (const b of blocks) {
    if (b.type !== 'heading') continue;
    const base = slugify(stripInline(b.text)) || 'section';
    const n = (used.get(base) ?? 0) + 1;
    used.set(base, n);
    anchors.set(b.id, n === 1 ? base : `${base}-${n}`);
  }
  return anchors;
}

/** The sidebar guide: every H2, in order. */
export function buildGuide(blocks: StudioBlock[]): BlogGuideItem[] {
  const resolved = resolveBlocks(blocks);
  const anchors = headingAnchors(resolved);
  return resolved.flatMap((b) =>
    b.type === 'heading' && b.level === 2 && b.text.trim()
      ? [{ id: anchors.get(b.id)!, title: stripInline(b.text) }]
      : [],
  );
}

/** FAQPage schema entries: the same text the page shows, without formatting markers. */
export function buildFaqs(blocks: StudioBlock[]): BlogFaq[] {
  return blocks.flatMap((b) =>
    b.type === 'faq' && b.question.trim() && b.answer.trim()
      ? [{ q: stripInline(b.question), a: lines(b.answer).map(stripInline).join(' ') }]
      : [],
  );
}

function blockText(b: StudioBlock): string {
  switch (b.type) {
    case 'heading':
    case 'text': return b.text;
    case 'list': return b.items;
    case 'image': return b.caption;
    case 'quote': return `${b.text} ${b.cite}`;
    case 'table': return b.rows.replace(/\|/g, ' ');
    case 'faq': return `${b.question} ${b.answer}`;
    default: return '';
  }
}

export function wordCount(blocks: StudioBlock[]): number {
  const text = blocks.map((b) => stripInline(blockText(b))).join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingTime(blocks: StudioBlock[]): string {
  return `${Math.max(1, Math.ceil(wordCount(blocks) / WORDS_PER_MINUTE))} min read`;
}

/** The Google/browser title as the site builds it in components/blog/blogMetadata.ts. */
export function googleTitle(post: StudioPost): string {
  return `${post.seoTitle.trim() || post.title.trim()}${TITLE_SUFFIX}`;
}

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug || 'your-post-url'}`;
}

/* ── Publishing checklist (rules from docs/blog-seo-schema.md) ─────────── */

export interface CheckItem {
  label: string;
  ok: boolean;
  /** Required items block publishing; recommended ones only warn. */
  required: boolean;
}

export function checklist(
  post: StudioPost,
  others: { studio: StudioPost[]; site: SitePostSummary[] },
): CheckItem[] {
  const slugTaken =
    others.site.some((p) => p.slug === post.slug) ||
    others.studio.some((p) => p.id !== post.id && p.slug === post.slug);
  const contentBlocks = post.blocks.filter((b) => b.type !== 'divider');
  const images = post.blocks.filter((b) => b.type === 'image');
  const faqs = post.blocks.filter((b) => b.type === 'faq');
  const videos = post.blocks.filter((b) => b.type === 'video');
  const h2s = post.blocks.filter((b) => b.type === 'heading' && b.level === 2);
  const excerptLength = post.excerpt.trim().length;
  const metadata = [post.title, post.seoTitle, post.excerpt, post.imageAlt, ...post.tags].join(' ');
  const allText = JSON.stringify(post.blocks);
  const kw = post.focusKeyword.trim().toLowerCase();
  const firstText = post.blocks.find((b) => b.type === 'text');

  const items: CheckItem[] = [
    { label: 'Title', ok: !!post.title.trim(), required: true },
    { label: 'URL slug uses lowercase letters, numbers and hyphens', ok: SLUG_PATTERN.test(post.slug), required: true },
    { label: 'URL slug is not used by another post', ok: !!post.slug && !slugTaken, required: true },
    { label: 'Excerpt / meta description', ok: excerptLength > 0, required: true },
    { label: 'Category', ok: !!post.category, required: true },
    { label: 'Featured image', ok: !!post.featuredImage.trim(), required: true },
    {
      // The live site shows featured images with next/image, which accepts only these sources.
      label: 'Featured image is uploaded or a site path (/images/…)',
      ok: !post.featuredImage || post.featuredImage.startsWith('data:') || isUsableFeaturedImage(post.featuredImage),
      required: true,
    },
    { label: 'Featured image alt text', ok: !!post.imageAlt.trim(), required: true },
    { label: 'Article has content', ok: contentBlocks.length > 0, required: true },
  ];
  if (post.status === 'scheduled') {
    items.push({ label: 'Scheduled date and time', ok: !!post.scheduledFor, required: true });
  }
  items.push(
    { label: 'Meta description is 70–160 characters', ok: excerptLength >= 70 && excerptLength <= 160, required: false },
    { label: 'Google title is 60 characters or fewer', ok: googleTitle(post).length <= 60, required: false },
    { label: 'At least one H2 section heading', ok: h2s.length > 0, required: false },
    { label: 'Tags: 3 to 6 phrases', ok: post.tags.length >= 3 && post.tags.length <= 6, required: false },
  );
  if (images.length) {
    items.push({ label: 'Every image has alt text', ok: images.every((b) => b.type === 'image' && b.src && b.alt.trim()), required: false });
  }
  if (faqs.length) {
    items.push({ label: 'Every FAQ has a question and an answer', ok: faqs.every((b) => b.type === 'faq' && b.question.trim() && b.answer.trim()), required: false });
  }
  if (videos.length) {
    items.push({ label: 'Every video is a valid YouTube link', ok: videos.every((b) => b.type === 'video' && youtubeId(b.url)), required: false });
  }
  if (kw) {
    items.push(
      { label: 'Focus keyword in the Google title', ok: googleTitle(post).toLowerCase().includes(kw), required: false },
      { label: 'Focus keyword in the meta description', ok: post.excerpt.toLowerCase().includes(kw), required: false },
      { label: 'Focus keyword in a heading', ok: post.blocks.some((b) => b.type === 'heading' && b.text.toLowerCase().includes(kw)), required: false },
      { label: 'Focus keyword in the first paragraph', ok: !!firstText && firstText.type === 'text' && lines(firstText.text)[0]?.toLowerCase().includes(kw), required: false },
    );
  }
  items.push(
    { label: 'No HTML entities such as &amp; in title or description', ok: !/&(amp|lt|gt|quot|apos|nbsp|#\d+);/.test(metadata), required: false },
    { label: 'No links to the old glasspane.pages.dev domain', ok: !allText.includes('glasspane.pages.dev'), required: false },
  );
  return items;
}

/** The BlogPost fields that are derived rather than typed in. */
export function toBlogFields(post: StudioPost) {
  return {
    guide: buildGuide(post.blocks),
    faqs: buildFaqs(post.blocks),
    readingTime: readingTime(post.blocks),
  };
}
