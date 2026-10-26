import type { BlogFaq, BlogGuideItem } from '@/content/blog/types';
import { isUsableFeaturedImage } from '@/lib/sanity/image';
import { UPLOAD_IMAGE_FORMATS } from '@/lib/sanity/imageUpload';
import type { SitePostSummary, StudioBlock, StudioBlockType, StudioPost } from './types';

export const SITE_URL = 'https://www.sagekite.com';
export const TITLE_SUFFIX = ' | Sage Kite';
const WORDS_PER_MINUTE = 225;

/** Secondary keywords (SEO phrases, separate from tags): at most this many, each at most this long. */
export const MAX_SECONDARY_KEYWORDS = 8;
export const MAX_KEYWORD_LENGTH = 80;

/** Trims, drops empty entries and removes duplicates (ignoring case), keeping the first spelling. */
export function normalizeKeywords(list: readonly string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of list) {
    const phrase = raw.trim();
    const key = phrase.toLowerCase();
    if (phrase && !seen.has(key)) {
      seen.add(key);
      out.push(phrase);
    }
  }
  return out;
}

/** The comma-separated text a writer types into a keyword field. */
export const parseKeywordList = (text: string): string[] => normalizeKeywords(text.split(','));

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
    secondaryKeywords: [],
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

/**
 * Internal paths, anchors, http(s) and mailto only. Anything else is rendered as text.
 * A path may not start with `//` or `/\`: browsers read both as a link to another host.
 */
export function safeHref(href: string): string | null {
  return /^(\/(?![/\\])|#|https?:\/\/|mailto:)/i.test(href) ? href : null;
}

/**
 * An absolute http(s) link to another site (opened in a new tab with rel="noopener noreferrer").
 * The host must be exactly www.sagekite.com to count as internal, so `https://www.sagekite.com.evil.com`
 * and `https://www.sagekite.com@evil.com` are external.
 */
export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href) && !/^https:\/\/www\.sagekite\.com(?:[/?#]|$)/i.test(href);
}

export function lines(s: string): string[] {
  return s.split('\n').map((l) => l.trim()).filter(Boolean);
}

/** List lines with any pasted bullet or number marker removed. */
export function listItems(s: string): string[] {
  return lines(s).map((l) => l.replace(/^([-*•]|\d+[.)])\s+/, ''));
}

/**
 * Rows of a table block: one row per line, cells separated by `|`, the first row is the header.
 * A literal pipe inside a cell is written `\|` (the paste conversion below does this).
 */
export function tableRows(s: string): string[][] {
  return lines(s).map((l) =>
    l
      .replace(/^\||(?<!\\)\|$/g, '')
      .split(/(?<!\\)\|/)
      .map((c) => c.trim().replace(/\\\|/g, '|')),
  );
}

/* ── Pasting a table (Word, Google Docs, Excel) ────────────────────────── */

/** One paste may hold at most this many rows and columns (decision.md D044). */
export const MAX_TABLE_ROWS = 100;
export const MAX_TABLE_COLUMNS = 12;

export type PastedTable =
  /** `text` is the table block's rows; `plain` is the same cells as tab-separated text without formatting markers. */
  | { ok: true; text: string; plain: string; rows: number; columns: number }
  | { ok: false; reason: 'not-a-table' }
  | { ok: false; reason: 'too-large'; rows: number; columns: number };

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', hellip: '…',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', bull: '•', copy: '©', reg: '®', trade: '™', euro: '€', pound: '£',
};

function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity: string) => {
    if (entity[0] !== '#') return NAMED_ENTITIES[entity.toLowerCase()] ?? match;
    const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
    try {
      return code === 0xa0 ? ' ' : String.fromCodePoint(code);
    } catch {
      return match;
    }
  });
}

const cleanCell = (text: string) => text.replace(/\s+/g, ' ').trim();

/** Bold and italic markers with spaces moved outside them and empty pairs removed, so they match INLINE_PATTERN. */
function tidyMarkers(text: string): string {
  return cleanCell(
    text
      .replace(/\*\*(\s*)([^*\n]*?)(\s*)\*\*/g, (_m, a: string, b: string, c: string) => (b ? `${a}**${b}**${c}` : `${a}${c}`))
      .replace(/(?<!\*)\*(?!\*)(\s*)([^*\n]*?)(\s*)\*(?!\*)/g, (_m, a: string, b: string, c: string) => (b ? `${a}*${b}*${c}` : `${a}${c}`)),
  );
}

type Grid = string[][];

/** Shared by the HTML and tab-separated paths: drop empty rows and trailing empty columns, pad, check the limits. */
function finishGrid(grid: Grid, options: { dropLeadingEmptyColumns?: boolean; minColumns: number }): PastedTable {
  let rows = grid.map((r) => r.map(cleanCell)).filter((r) => r.some(Boolean));
  let width = Math.max(0, ...rows.map((r) => r.length));
  rows = rows.map((r) => [...r, ...Array(width - r.length).fill('')]);
  const emptyColumn = (c: number) => rows.every((r) => !r[c]);
  while (width > 0 && emptyColumn(width - 1)) width--;
  let start = 0;
  if (options.dropLeadingEmptyColumns) while (start < width && emptyColumn(start)) start++;
  rows = rows.map((r) => r.slice(start, width));
  const columns = width - start;
  if (!rows.length || columns < options.minColumns || (rows.length === 1 && columns === 1)) return { ok: false, reason: 'not-a-table' };
  if (rows.length > MAX_TABLE_ROWS || columns > MAX_TABLE_COLUMNS) return { ok: false, reason: 'too-large', rows: rows.length, columns };
  const escape = (c: string) => c.replace(/\|/g, '\\|');
  // Outer pipes keep an empty first or last cell from being read as the row's border.
  return {
    ok: true,
    text: rows.map((r) => `| ${r.map(escape).join(' | ')} |`).join('\n'),
    plain: rows.map((r) => r.map((c) => stripInline(c)).join('\t')).join('\n'),
    rows: rows.length,
    columns,
  };
}

/**
 * An Excel-quoted field starting at `start` (a `"`), or null when it is not one. Excel only quotes a cell that holds a
 * tab, a line break or a quote, and then doubles every inner quote and closes it right before a tab, a line break or the
 * end. A cell that starts with a plain quote (`"Best CRM ever`, or `"quoted"` typed as it is) is therefore literal text:
 * treating it as quoted would swallow the rest of the table into one cell.
 */
function excelQuotedField(text: string, start: number): { value: string; end: number } | null {
  let value = '';
  let special = false;
  for (let i = start + 1; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (text[i + 1] === '"') {
        value += '"';
        special = true;
        i++;
        continue;
      }
      const next = text[i + 1];
      // A lone quote inside the field, or a closing quote that is not followed by a separator, is not Excel quoting.
      if (next !== undefined && next !== '\t' && next !== '\n' && next !== '\r') return null;
      return special ? { value, end: i + 1 } : null;
    }
    if (ch === '\t' || ch === '\n' || ch === '\r') special = true;
    value += ch;
  }
  return null; // never closed
}

/** Tab-separated text as Word, Google Docs and Excel put it on the clipboard (Excel quotes cells that hold tabs, line breaks or quotes). */
function parseTabSeparated(text: string): Grid {
  const rows: Grid = [];
  let row: string[] = [];
  let field = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"' && field === '') {
      const quoted = excelQuotedField(text, i);
      if (quoted) {
        field = quoted.value;
        i = quoted.end - 1;
        continue;
      }
      field += ch;
    } else if (ch === '\t') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += ch;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/**
 * The cells of the one table in a clipboard's HTML, or null when it holds no table, more than one, or text
 * outside the table (a pasted article is not a pasted table). Written as a small tokenizer rather than
 * DOMParser so it runs, and is tested, without a browser. Only text, bold, italic and safe links are kept.
 */
function gridFromHtml(html: string): Grid | null {
  if (!/<table[\s>]/i.test(html)) return null;
  const source = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<!\[[^>]*>/g, '')
    .replace(/<(style|script|head|title|xml)\b[\s\S]*?<\/\1\s*>/gi, '');

  const grid: Grid = [];
  const carry: number[] = [];
  let outside = '';
  let depth = 0;
  let tables = 0;
  let row: string[] | null = null;
  let cell: { text: string; colspan: number; rowspan: number; bold: number; italic: number; links: { start: number; href: string }[] } | null = null;
  const inline: ('b' | 'i' | 'link' | null)[] = [];

  const fillCarry = () => {
    while (row && carry[row.length] > 0) { carry[row.length]--; row.push(''); }
  };
  const finishCell = () => {
    if (!cell || !row) { cell = null; return; }
    const start = row.length;
    // A <b> or <i> that was never closed would leave a stray marker: close it here.
    row.push(tidyMarkers(cell.text + (cell.italic > 0 ? '*' : '') + (cell.bold > 0 ? '**' : '')));
    for (let i = 1; i < cell.colspan; i++) row.push('');
    if (cell.rowspan > 1) for (let c = start; c < start + cell.colspan; c++) carry[c] = cell.rowspan - 1;
    cell = null;
    inline.length = 0;
    fillCarry();
  };
  const finishRow = () => {
    if (row) grid.push(row);
    row = null;
  };
  const span = (attrs: string, name: string) => {
    const m = attrs.match(new RegExp(`\\b${name}\\s*=\\s*["']?(\\d+)`, 'i'));
    return m ? Math.min(Math.max(parseInt(m[1], 10), 1), MAX_TABLE_COLUMNS) : 1;
  };
  const styleOf = (attrs: string) => (attrs.match(/\bstyle\s*=\s*("([^"]*)"|'([^']*)')/i)?.[2] ?? attrs.match(/\bstyle\s*=\s*'([^']*)'/i)?.[1] ?? '').toLowerCase();
  const weightOf = (style: string) => style.match(/font-weight\s*:\s*([a-z0-9]+)/)?.[1];
  const isBoldStyle = (style: string) => {
    const w = weightOf(style);
    return w === 'bold' || w === 'bolder' || (!!w && /^\d+$/.test(w) && parseInt(w, 10) >= 600);
  };
  const append = (text: string) => { if (cell) cell.text += text; };

  const tokenizer = /<(\/?)([a-zA-Z][\w:.-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>|([^<]+)|</g;
  for (let m = tokenizer.exec(source); m; m = tokenizer.exec(source)) {
    if (m[4] !== undefined || !m[2]) {
      const text = decodeEntities(m[4] ?? m[0]);
      if (depth === 0) outside += text;
      else append(text);
      continue;
    }
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    const attrs = m[3] ?? '';

    if (tag === 'table') {
      if (!closing) {
        depth++;
        if (depth === 1 && ++tables > 1) return null;
      } else if (depth > 0) {
        depth--;
        if (depth === 0) { finishCell(); finishRow(); }
      }
      continue;
    }
    if (depth === 0) continue;
    if (depth > 1) { // a table inside a cell: keep its text, ignore its structure
      if (/^(tr|td|th|p|div|br|li)$/.test(tag)) append(' ');
      continue;
    }

    if (tag === 'tr') {
      finishCell();
      if (!closing) { finishRow(); row = []; fillCarry(); } else finishRow();
    } else if (tag === 'td' || tag === 'th') {
      finishCell();
      if (!closing) {
        if (!row) { row = []; fillCarry(); }
        cell = { text: '', colspan: span(attrs, 'colspan'), rowspan: span(attrs, 'rowspan'), bold: 0, italic: 0, links: [] };
      }
    } else if (!cell) {
      continue;
    } else if (tag === 'br' || /^(p|div|li|ul|ol|h[1-6])$/.test(tag)) {
      append(' ');
    } else if (tag === 'b' || tag === 'strong' || tag === 'i' || tag === 'em' || tag === 'span' || tag === 'a') {
      if (!closing) {
        const style = styleOf(attrs);
        let kind: 'b' | 'i' | 'link' | null = null;
        if (tag === 'a') {
          const href = attrs.match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
          const url = decodeEntities(href?.[1] ?? href?.[2] ?? href?.[3] ?? '').trim();
          if (safeHref(url)) { kind = 'link'; cell.links.push({ start: cell.text.length, href: url }); }
        } else if (tag === 'b' || tag === 'strong') {
          // Google Docs wraps everything it copies in <b style="font-weight:normal">: that is not bold.
          if (weightOf(style) === undefined || isBoldStyle(style)) kind = 'b';
        } else if (tag === 'i' || tag === 'em') kind = 'i';
        else if (isBoldStyle(style)) kind = 'b';
        else if (/font-style\s*:\s*italic/.test(style)) kind = 'i';
        // Bold wins over italic: nesting markers would not match the page's inline pattern.
        if (kind === 'b' && cell.italic === 0 && cell.bold === 0) { append('**'); cell.bold++; }
        else if (kind === 'i' && cell.bold === 0 && cell.italic === 0) { append('*'); cell.italic++; }
        else if (kind === 'b' || kind === 'i') kind = null;
        inline.push(kind);
      } else {
        const kind = inline.pop();
        if (kind === 'b') { append('**'); cell.bold--; }
        else if (kind === 'i') { append('*'); cell.italic--; }
        else if (kind === 'link') {
          const link = cell.links.pop();
          if (link) {
            const label = cell.text.slice(link.start).replace(/[*[\]]/g, '').trim();
            const markdown = `[${label}](${link.href})`;
            // Keep the link only if the page's link syntax accepts it; otherwise leave the text as it is.
            cell.text = label && LINK_PATTERN.test(markdown) ? cell.text.slice(0, link.start) + markdown : cell.text.slice(0, link.start) + label;
          }
        }
      }
    }
  }
  finishCell();
  finishRow();
  if (outside.replace(/\s+/g, '') !== '') return null;
  return grid;
}

/**
 * Turns clipboard data into the text of a table block, or says why not. HTML wins when it holds a table
 * (it keeps bold, italic and links); otherwise tab-separated text with at least two rows and two columns.
 */
export function tableFromClipboard(html: string, plain: string): PastedTable {
  const fromHtml = html ? gridFromHtml(html) : null;
  if (fromHtml) return finishGrid(fromHtml, { minColumns: 1 });
  if (!plain.includes('\t')) return { ok: false, reason: 'not-a-table' };
  const grid = parseTabSeparated(plain).filter((r) => r.some((c) => c.trim()));
  if (grid.length < 2 || grid.some((r) => r.length < 2)) return { ok: false, reason: 'not-a-table' };
  return finishGrid(grid, { dropLeadingEmptyColumns: true, minColumns: 2 });
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
    case 'table': return b.rows.replace(/\\?\|/g, ' ');
    case 'faq': return `${b.question} ${b.answer}`;
    default: return '';
  }
}

/** The article's readable text (inline markup removed), used to look for keywords. */
export function articlePlainText(blocks: StudioBlock[]): string {
  return blocks.map((b) => stripInline(blockText(b))).join(' ');
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
  // Posts saved before this field existed have none.
  const secondary = normalizeKeywords(post.secondaryKeywords ?? []);
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
      { label: 'Secondary keywords: 2 to 5 phrases', ok: secondary.length >= 2 && secondary.length <= 5, required: false },
    );
  }
  if (secondary.length) {
    const body = articlePlainText(post.blocks).toLowerCase();
    items.push({ label: 'Each secondary keyword appears in the article', ok: secondary.every((k) => body.includes(k.toLowerCase())), required: false });
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
