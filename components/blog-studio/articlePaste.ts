import { inlineRuns, parseInline, serializeRuns, withoutEmphasis } from './inline';
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_LIST_LEVEL,
  MAX_TABLE_COLUMNS,
  MAX_TABLE_ROWS,
  cleanCell,
  cleanClipboardHtml,
  decodeEntities,
  finishGrid,
  gridFromHtml,
  htmlAttr,
  htmlTokenizer,
  inlineCollector,
  newId,
  stripInline,
  tableFromClipboard,
  tableRows,
  type Grid,
} from './postUtils';
import type { StudioBlock } from './types';

/*
 * Pasting a whole article (decision.md D047): clipboard HTML from Google Docs, Word (desktop or web) or a web page, or
 * plain / Markdown text, becomes studio blocks. Pure and DOM-free, like the table paste in postUtils.ts, so it is
 * tested in node. Only text, bold, italic and safe links are kept; images become empty Image blocks to upload again.
 */

/** One paste may create at most this many blocks; a bigger paste is refused, never truncated. */
export const MAX_PASTE_BLOCKS = 300;
/** Longest text taken as the post title (the title field's limit); a longer first heading stays a heading. */
const MAX_TITLE_LENGTH = 140;
/** Image alt text limit (lib/sanity/postValidation.ts). */
const MAX_ALT_LENGTH = 160;

export interface PastedArticle {
  blocks: StudioBlock[];
  /** The paste's one leading top-level heading (H1 or Word Title), taken out of the blocks. */
  title?: string;
  /** Images found: each became an empty Image block (images inside tables are dropped, with a note). */
  droppedImages: number;
  /** Things the writer should know, in plain sentences. */
  notes: string[];
  /** Set when the paste was refused (too many blocks): `blocks` is empty and `notes` says why. */
  refused?: true;
  /** `apple`: HTML that macOS made from Pages' (or another Apple app's) RTF, which has no headings or images. */
  source?: 'apple';
}

/** Shown for every paste from Pages or another Apple app (decision.md D048). */
export const APPLE_PASTE_NOTE =
  "This was copied from Pages or another Apple app, which doesn't mark headings or include images. Headings came in as paragraphs: use Turn into → Heading 2 or Heading 3 on each one, and add images with an Image block. Copying from Google Docs or Word keeps headings.";

/**
 * Pages puts only RTF on the clipboard; the browser turns it into HTML with Apple's "Cocoa HTML Writer". That HTML has
 * no heading information (headings and body text share classes) and no images, so the writer is told.
 */
export function isAppleHtml(html: string): boolean {
  for (const m of html.matchAll(/<meta\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)) {
    if ((htmlAttr(m[1], 'name') ?? '').toLowerCase() === 'generator' && /^cocoa html writer/i.test(htmlAttr(m[1], 'content') ?? '')) return true;
  }
  return /<!DOCTYPE\s+html\s+PUBLIC\s+"-\/\/W3C\/\/DTD HTML 4\.01\/\/EN"/i.test(html)
    && (/class\s*=\s*["']?Apple-converted-space/i.test(html) || /\bp\.p\d+\s*\{/.test(html));
}

type Piece =
  | { kind: 'heading'; level: number; text: string }
  | { kind: 'text' | 'quote'; text: string }
  /** `level`: 0 for a top-level item, 1 and 2 for sub-levels (deeper levels are clamped later). */
  | { kind: 'item'; ordered: boolean; level: number; text: string }
  | { kind: 'table'; rows: string }
  | { kind: 'image'; alt: string }
  | { kind: 'divider' };

/** Bullet or number Word prints before a list paragraph: ordered when it is a number, letter or roman numeral and `.` or `)`. */
const ORDERED_MARKER = /^(\d+|[a-z]{1,4})[.)]$/i;

/** Tags that start and end a line of text. */
const BLOCK_TAGS = new Set([
  'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'ul', 'ol', 'blockquote', 'section', 'article', 'header',
  'footer', 'main', 'aside', 'nav', 'figure', 'figcaption', 'pre', 'dl', 'dt', 'dd', 'address', 'center',
]);

interface Frame {
  tag: string;
  role?: 'heading' | 'quote' | 'list' | 'item' | 'word-item';
  level?: number;
  ordered?: boolean;
}

function frameFor(tag: string, attrs: string): Frame {
  const heading = tag.match(/^h([1-6])$/);
  if (heading) return { tag, role: 'heading', level: Number(heading[1]) };
  if (tag === 'ul' || tag === 'ol') return { tag, role: 'list', ordered: tag === 'ol' };
  // Google Docs and Word for the web give each item its level (1 = top), even when every item is in its own list.
  if (tag === 'li') return { tag, role: 'item', level: Number(htmlAttr(attrs, 'aria-level') ?? htmlAttr(attrs, 'data-aria-level')) || undefined };
  if (tag === 'blockquote') return { tag, role: 'quote' };
  if (tag !== 'p' && tag !== 'div') return { tag };
  // Word for the web marks headings with a role; Word desktop uses class names.
  if (htmlAttr(attrs, 'role') === 'heading') return { tag, role: 'heading', level: Number(htmlAttr(attrs, 'aria-level')) || 2 };
  const className = htmlAttr(attrs, 'class') ?? '';
  if (/\bMsoTitle\b/i.test(className)) return { tag, role: 'heading', level: 1 };
  const msoHeading = className.match(/\bMsoHeading([1-6])\b/i);
  if (msoHeading) return { tag, role: 'heading', level: Number(msoHeading[1]) };
  if (/\bMso(Intense)?Quote\b/i.test(className)) return { tag, role: 'quote' };
  const style = (htmlAttr(attrs, 'style') ?? '').toLowerCase();
  if (/\bMsoListParagraph/i.test(className) || /(^|;|\s)mso-list\s*:\s*l\d/.test(style)) {
    // Word desktop: `mso-list:l0 level2 lfo1` is the second level.
    return { tag, role: 'word-item', level: Number(style.match(/mso-list\s*:\s*l\d+\s+level(\d)/)?.[1]) || 1 };
  }
  return { tag };
}

/** The pieces of an article in clipboard HTML, in order. */
function piecesFromHtml(html: string, notes: string[]): { pieces: Piece[]; images: number } {
  // Word's list bullets and numbers sit between "supportLists" conditional comments: keep them as a marker element,
  // so the comment clean-up does not turn them into text.
  const source = cleanClipboardHtml(
    html
      .replace(/<!--\[if !supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi, '<x-list-marker>$1</x-list-marker>')
      .replace(/<!\[if !supportLists\]>([\s\S]*?)<!\[endif\]>/gi, '<x-list-marker>$1</x-list-marker>'),
  );
  const pieces: Piece[] = [];
  const frames: Frame[] = [];
  let line = inlineCollector();
  let marker = '';
  let markerDepth = 0;
  let images = 0;
  let tableImages = 0;

  const innermost = (role: Frame['role']) => {
    for (let i = frames.length - 1; i >= 0; i--) if (frames[i].role === role) return frames[i];
    return undefined;
  };
  const endLine = () => {
    const text = line.finish();
    const wordMarker = cleanCell(marker);
    line = inlineCollector();
    marker = '';
    if (!text) return;
    const heading = innermost('heading');
    const list = frames.find((f) => f.role === 'list');
    const item = innermost('item');
    const wordItem = innermost('word-item');
    if (heading) pieces.push({ kind: 'heading', level: heading.level ?? 2, text });
    else if (list && item) {
      // Nested <ul>/<ol> (Google Docs) or an item's aria-level (Word for the web): whichever is deeper.
      const depth = frames.filter((f) => f.role === 'list').length - 1;
      pieces.push({ kind: 'item', ordered: !!list.ordered, level: Math.max(depth, (item.level ?? 1) - 1), text });
    } else if (wordItem || wordMarker) {
      pieces.push({ kind: 'item', ordered: ORDERED_MARKER.test(wordMarker), level: (wordItem?.level ?? 1) - 1, text });
    }
    else if (innermost('quote')) pieces.push({ kind: 'quote', text });
    else pieces.push({ kind: 'text', text });
  };
  const inLineOnly = () => !!innermost('heading') || !!innermost('item') || !!innermost('word-item');

  const tokenizer = htmlTokenizer();
  for (let m = tokenizer.exec(source); m; m = tokenizer.exec(source)) {
    if (m[4] !== undefined || !m[2]) {
      const text = decodeEntities(m[4] ?? m[0]);
      if (markerDepth > 0) marker += text;
      else line.append(text);
      continue;
    }
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    const attrs = m[3] ?? '';

    // Word's list marker: everything inside it is the bullet or number, not text.
    if (tag === 'x-list-marker' || (markerDepth > 0 && tag === 'span')) {
      markerDepth = Math.max(0, markerDepth + (closing ? -1 : 1));
      continue;
    }
    if (markerDepth > 0) continue;
    if (tag === 'span' && !closing && /mso-list\s*:\s*ignore/i.test(htmlAttr(attrs, 'style') ?? '')) {
      markerDepth = 1;
      continue;
    }

    if (tag === 'table' && !closing) {
      endLine();
      // Hand the whole table, nested tables included, to the table paste parser.
      const start = m.index;
      let depth = 1;
      const nested = /<(\/?)table\b[^>]*>/gi;
      nested.lastIndex = tokenizer.lastIndex;
      let end = source.length;
      for (let t = nested.exec(source); t; t = nested.exec(source)) {
        depth += t[1] ? -1 : 1;
        if (depth === 0) { end = nested.lastIndex; break; }
      }
      tokenizer.lastIndex = end;
      // A table that is never closed runs to the end of the paste.
      const tableHtml = source.slice(start, end) + '</table>'.repeat(depth);
      tableImages += (tableHtml.match(/<img\b/gi) ?? []).length;
      pieces.push(...tablePieces(gridFromHtml(tableHtml), notes));
      continue;
    }
    if (tag === 'img') {
      endLine();
      images++;
      pieces.push({ kind: 'image', alt: cleanCell(htmlAttr(attrs, 'alt') ?? '').slice(0, MAX_ALT_LENGTH) });
      continue;
    }
    if (tag === 'hr') {
      endLine();
      pieces.push({ kind: 'divider' });
      continue;
    }
    if (tag === 'br') {
      // A line break inside a heading or list item would split it: keep it on one line.
      if (inLineOnly()) line.append(' ');
      else endLine();
      continue;
    }
    if (BLOCK_TAGS.has(tag)) {
      endLine();
      if (!closing) frames.push(frameFor(tag, attrs));
      else {
        const i = frames.map((f) => f.tag).lastIndexOf(tag);
        if (i !== -1) frames.length = i;
      }
      continue;
    }
    line.tag(tag, closing, attrs);
  }
  endLine();
  if (tableImages) notes.push(`${tableImages === 1 ? 'An image' : `${tableImages} images`} inside a table ${tableImages === 1 ? 'was' : 'were'} left out.`);
  return { pieces, images };
}

/** A pasted table as a Table block, or as paragraphs of its rows when it is too big or is really a one-cell box. */
function tablePieces(grid: Grid | null, notes: string[]): Piece[] {
  if (!grid) return [];
  const table = finishGrid(grid, { minColumns: 1 });
  if (table.ok) return [{ kind: 'table', rows: table.text }];
  if (table.reason === 'too-large') {
    notes.push(`A table of ${table.rows} rows × ${table.columns} columns is more than ${MAX_TABLE_ROWS} × ${MAX_TABLE_COLUMNS}, so its rows were pasted as paragraphs.`);
  }
  return grid
    .map((row) => row.map(cleanCell).filter(Boolean).join(' | '))
    .filter(Boolean)
    .map((text) => ({ kind: 'text' as const, text }));
}

/**
 * Markdown text in the studio's written form (inline.ts): `__bold__` becomes `**bold**`, and links whose URL the page
 * would not render become their text.
 */
function plainInline(text: string): string {
  return serializeRuns(inlineRuns(parseInline(cleanCell(text.replace(/__([^_\n]+)__/g, '**$1**')))));
}

/** Width of a line's indentation, a tab counting as four spaces. */
const indentWidth = (line: string) => line.match(/^[ \t]*/)![0].replace(/\t/g, '    ').length;

const TABLE_SEPARATOR = /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?$/;

/** The pieces of plain or Markdown text (ChatGPT, Notion, a text editor), in order. */
function piecesFromPlain(plain: string, notes: string[]): Piece[] {
  const pieces: Piece[] = [];
  const raw = plain.replace(/\r\n?/g, '\n').split('\n');
  const rows = raw.map((l) => l.trim());
  // Indentation widths of the list being read: deeper indentation is a sub-level.
  let indents: number[] = [];
  const itemLevel = (i: number) => {
    if (pieces[pieces.length - 1]?.kind !== 'item') indents = [];
    const width = indentWidth(raw[i]);
    while (indents.length && width < indents[indents.length - 1]) indents.pop();
    if (!indents.length || width > indents[indents.length - 1]) indents.push(width);
    return indents.length - 1;
  };
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (!row) continue;
    // A Markdown table: lines starting with | and a |---| line under the header.
    if (row.startsWith('|') && TABLE_SEPARATOR.test(rows[i + 1] ?? '')) {
      const tableLines: string[] = [];
      while (i < rows.length && rows[i].startsWith('|')) {
        if (!TABLE_SEPARATOR.test(rows[i])) tableLines.push(rows[i]);
        i++;
      }
      i--;
      const grid = tableRows(tableLines.join('\n')).map((r) => r.map((c) => plainInline(c)));
      pieces.push(...tablePieces(grid, notes));
      continue;
    }
    let m: RegExpMatchArray | null;
    if ((m = row.match(/^(#{1,6})\s+(.*?)(\s+#+)?$/))) pieces.push({ kind: 'heading', level: m[1].length, text: plainInline(m[2]) });
    else if (/^(-{3,}|\*{3,}|_{3,})$/.test(row)) pieces.push({ kind: 'divider' });
    else if ((m = row.match(/^[-*•+]\s+(.*)$/))) pieces.push({ kind: 'item', ordered: false, level: itemLevel(i), text: plainInline(m[1]) });
    else if ((m = row.match(/^\d+[.)]\s+(.*)$/))) pieces.push({ kind: 'item', ordered: true, level: itemLevel(i), text: plainInline(m[1]) });
    else if ((m = row.match(/^>\s?(.*)$/))) pieces.push({ kind: 'quote', text: plainInline(m[1]) });
    else pieces.push({ kind: 'text', text: plainInline(row) });
  }
  return pieces.filter((p) => !('text' in p) || p.text);
}

/** Pieces to blocks: consecutive paragraphs, quotes and same-kind list items merge; everything else is its own block. */
function blocksFromPieces(pieces: Piece[]): StudioBlock[] {
  const blocks: StudioBlock[] = [];
  for (const p of pieces) {
    const last = blocks[blocks.length - 1];
    switch (p.kind) {
      case 'heading': {
        // Bold and italic inside a heading come from the source's heading style (Google Docs wraps headings in
        // font-weight spans); code and links are kept. H1 and H2 → H2, H3 → H3, H4 to H6 → H4.
        const text = cleanCell(withoutEmphasis(p.text));
        if (text) blocks.push({ id: newId(), type: 'heading', level: p.level >= 4 ? 4 : p.level === 3 ? 3 : 2, text });
        break;
      }
      case 'text':
        if (last?.type === 'text') last.text += `\n${p.text}`;
        else blocks.push({ id: newId(), type: 'text', text: p.text });
        break;
      case 'quote':
        if (last?.type === 'quote') last.text += `\n${p.text}`;
        else blocks.push({ id: newId(), type: 'quote', text: p.text, cite: '' });
        break;
      case 'item': {
        // A sub-level item belongs to the list before it, whatever its own type: sub-levels use the list's type.
        if (last?.type === 'list' && (last.ordered === p.ordered || p.level > 0)) {
          const previous = last.items.slice(last.items.lastIndexOf('\n') + 1).match(/^\t*/)![0].length;
          const level = Math.min(p.level, previous + 1, MAX_LIST_LEVEL);
          last.items += `\n${'\t'.repeat(level)}${p.text}`;
        } else blocks.push({ id: newId(), type: 'list', ordered: p.ordered, items: p.text });
        break;
      }
      case 'table':
        blocks.push({ id: newId(), type: 'table', rows: p.rows });
        break;
      case 'image':
        blocks.push({ id: newId(), type: 'image', src: '', alt: p.alt, caption: '' });
        break;
      case 'divider':
        blocks.push({ id: newId(), type: 'divider' });
        break;
    }
  }
  return blocks;
}

/**
 * Turns clipboard data into blocks. HTML wins when it yields anything; otherwise plain text is read as Markdown, and
 * tab-separated text that is a table becomes one Table block. If the paste starts with exactly one top-level heading
 * (H1 or Word's Title) it is returned as `title`; other headings map H1 and H2 → H2, H3 and below → H3.
 */
export function articleFromClipboard(html: string, plain: string): PastedArticle {
  const notes: string[] = [];
  let pieces: Piece[] = [];
  let droppedImages = 0;
  if (html.trim()) {
    const fromHtml = piecesFromHtml(html, notes);
    pieces = fromHtml.pieces;
    droppedImages = fromHtml.images;
  }
  if (!pieces.length && plain.trim()) {
    notes.length = 0;
    const table = tableFromClipboard('', plain);
    pieces = table.ok ? [{ kind: 'table', rows: table.text }] : piecesFromPlain(plain, notes);
  }

  let title: string | undefined;
  const first = pieces[0];
  const topLevel = pieces.filter((p) => p.kind === 'heading' && p.level === 1).length;
  if (first?.kind === 'heading' && first.level === 1 && topLevel === 1) {
    const text = cleanCell(stripInline(first.text));
    if (text && text.length <= MAX_TITLE_LENGTH) {
      title = text;
      pieces.shift();
    }
  }

  const blocks = blocksFromPieces(pieces);
  if (blocks.length > MAX_PASTE_BLOCKS) {
    return {
      blocks: [],
      droppedImages: 0,
      notes: [`That paste would make ${blocks.length} blocks; the limit is ${MAX_PASTE_BLOCKS} per paste. Nothing was converted: paste the article in parts.`],
      refused: true,
    };
  }
  if (droppedImages) {
    notes.push(droppedImages === 1
      ? '1 image needs uploading: it is an empty Image block.'
      : `${droppedImages} images need uploading: they are empty Image blocks.`);
  }
  const apple = !!html && isAppleHtml(html);
  if (apple) notes.unshift(APPLE_PASTE_NOTE);
  return { blocks, ...(title ? { title } : {}), droppedImages, notes, ...(apple ? { source: 'apple' as const } : {}) };
}

/* ── Pasting a single image (decision.md D048) ──────────────────────────── */

/**
 * The image to upload from a paste: the first JPG, PNG or WebP file, and only when the paste has no text. Word and
 * other programs also put a picture of a text selection on the clipboard; that must never turn a text paste into an
 * upload. Finder puts the copied file's name as the text, which does not count as text. Null otherwise; a GIF, HEIC
 * or other image type is null too (`unsupportedImage` tells the caller to say so).
 */
export function imageFromClipboard(files: File[], plain: string): File | null {
  const file = files.find((f) => ACCEPTED_IMAGE_TYPES.includes(f.type));
  if (!file) return null;
  const text = plain.trim();
  return !text || text === file.name ? file : null;
}

/** A paste with no text whose files are images of a type that cannot be uploaded. */
export const unsupportedImage = (files: File[], plain: string) =>
  !plain.trim() && files.some((f) => f.type.startsWith('image/')) && !imageFromClipboard(files, plain);

export const UNSUPPORTED_IMAGE_MESSAGE = 'Only JPG, PNG or WebP images can be pasted.';

/**
 * A paste with nothing but images given as web addresses (copying one image inside Google Docs, for example): no file
 * to upload, and the address cannot be used (D032).
 */
export const imageAddressOnly = (html: string, plain: string, files: File[]) =>
  !files.length && !plain.trim() && /<img\b/i.test(html) && !articleFromClipboard(html, plain).blocks.some((b) => b.type !== 'image');

export const IMAGE_ADDRESS_MESSAGE =
  'This image was copied as a web address, not as a file, so it cannot be uploaded from here. Download the image, then paste it or use Upload.';

/** True when a paste is more than a single paragraph: it has 2+ blocks, or any heading, list, table, quote or divider. */
export function looksLikeArticle(result: PastedArticle): boolean {
  return result.blocks.length >= 2 || result.blocks.some((b) => ['heading', 'list', 'table', 'quote', 'divider'].includes(b.type));
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** "4 headings, 9 paragraphs, 2 lists, 1 table": what a paste turned into. Paragraphs are counted by line. */
export function describeBlocks(blocks: StudioBlock[]): string {
  const count = (type: StudioBlock['type']) => blocks.filter((b) => b.type === type).length;
  const paragraphs = blocks.reduce((n, b) => n + (b.type === 'text' ? b.text.split('\n').filter((l) => l.trim()).length : 0), 0);
  return [
    [count('heading'), 'heading', 'headings'],
    [paragraphs, 'paragraph', 'paragraphs'],
    [count('list'), 'list', 'lists'],
    [count('table'), 'table', 'tables'],
    [count('quote'), 'quote', 'quotes'],
    [count('image'), 'image', 'images'],
    [count('divider'), 'divider', 'dividers'],
  ]
    .filter(([n]) => (n as number) > 0)
    .map(([n, one, many]) => plural(n as number, one as string, many as string))
    .join(', ');
}

/** The article as plain text, one line per paragraph, item or table row: "Paste as text" when the clipboard had only HTML. */
export function articleText(result: PastedArticle): string {
  const out: string[] = result.title ? [result.title] : [];
  for (const b of result.blocks) {
    if (b.type === 'heading' || b.type === 'text' || b.type === 'quote') out.push(...b.text.split('\n').map(stripInline));
    else if (b.type === 'list') out.push(...b.items.split('\n').map(stripInline));
    else if (b.type === 'table') out.push(...tableRows(b.rows).map((r) => r.map(stripInline).join('\t')));
  }
  return out.join('\n');
}
