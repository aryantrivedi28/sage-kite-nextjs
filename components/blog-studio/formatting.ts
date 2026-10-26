import { INLINE_PATTERN, LINK_ANYWHERE, LINK_PATTERN, newId, safeHref, stripEmphasis, stripInline, stripListMarker } from './postUtils';
import type { StudioBlock } from './types';

/*
 * The editor's formatting bar (decision.md D047), as pure functions so they are tested in node: "Turn into" splits and
 * converts blocks; Bold, Italic, Link, Remove link and Clear formatting edit the `**`, `*` and `[text](url)` markers in a
 * box's text and return the new text with the selection to restore.
 */

/* ── Turn into ─────────────────────────────────────────────────────────── */

export type TurnInto = 'paragraph' | 'h2' | 'h3' | 'bulleted' | 'numbered' | 'quote';

export const TURN_INTO_OPTIONS: { value: TurnInto; label: string }[] = [
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'h3', label: 'Heading 3' },
  { value: 'bulleted', label: 'Bulleted list' },
  { value: 'numbered', label: 'Numbered list' },
  { value: 'quote', label: 'Quote' },
];

/** The lines a selection covers in a box (first and last, from 0); no selection means the whole box. */
export function lineRange(value: string, start: number, end: number): [number, number] {
  const lineOf = (pos: number) => value.slice(0, pos).split('\n').length - 1;
  if (start === end) return [0, value.split('\n').length - 1];
  // A selection that ends at the start of a line (after its line break) does not include that line.
  const last = value[end - 1] === '\n' ? end - 1 : end;
  const first = lineOf(start);
  return [first, Math.max(first, lineOf(last))];
}

type Convertible = Extract<StudioBlock, { type: 'heading' | 'text' | 'list' | 'quote' }>;

/** The raw lines of a block, as its box shows them. */
function sourceLines(b: Convertible): string[] {
  return (b.type === 'list' ? b.items : b.text).split('\n');
}

function withLines(b: Convertible, lines: string[], id = b.id): Convertible {
  const text = lines.join('\n');
  if (b.type === 'list') return { ...b, id, items: text };
  return { ...b, id, text } as Convertible;
}

function blocksOf(target: TurnInto, lines: string[]): StudioBlock[] {
  if (target === 'h2' || target === 'h3') {
    // Bold or italic on a line that becomes a heading was only a way to make it look like one.
    return lines.map((text) => ({ id: newId(), type: 'heading', level: target === 'h2' ? 2 : 3, text: stripEmphasis(text).trim() }));
  }
  const text = lines.join('\n');
  if (target === 'paragraph') return [{ id: newId(), type: 'text', text }];
  if (target === 'quote') return [{ id: newId(), type: 'quote', text, cite: '' }];
  return [{ id: newId(), type: 'list', ordered: target === 'numbered', items: lines.map(stripListMarker).join('\n') }];
}

/** Whether `a` followed by `b` can become one block: paragraphs, same-kind lists, quotes without attribution. */
function mergeable(a: StudioBlock | undefined, b: StudioBlock | undefined): boolean {
  if (!a || !b || a.type !== b.type) return false;
  if (a.type === 'text') return true;
  if (a.type === 'list' && b.type === 'list') return a.ordered === b.ordered;
  if (a.type === 'quote' && b.type === 'quote') return !a.cite.trim() && !b.cite.trim();
  return false;
}

/** `b` appended to `a`, keeping `a`'s id. Only called for mergeable pairs. */
function merge(a: StudioBlock, b: StudioBlock): StudioBlock {
  const join = (x: string, y: string) => [x, y].filter((s) => s.trim()).join('\n');
  if (a.type === 'list' && b.type === 'list') return { ...a, items: join(a.items, b.items) };
  if ((a.type === 'text' || a.type === 'quote') && (b.type === 'text' || b.type === 'quote')) return { ...a, text: join(a.text, b.text) };
  return a;
}

/**
 * Turns lines `startLine`–`endLine` of block `blockId` into `target`. The block is split into [lines before] [converted]
 * [lines after]; the parts before and after keep their type (the part before keeps the block's id). Each converted line
 * becomes its own heading; otherwise the converted lines become one block, merged with a neighbour of the same kind.
 * Bulleted ↔ numbered on a list flips the whole list. Image, table, video, FAQ and divider blocks are never touched.
 * `focusId` is the block that now holds the converted text.
 */
export function convertLines(
  blocks: StudioBlock[],
  blockId: string,
  startLine: number,
  endLine: number,
  target: TurnInto,
): { blocks: StudioBlock[]; focusId: string } {
  const unchanged = { blocks, focusId: blockId };
  const i = blocks.findIndex((b) => b.id === blockId);
  const b = blocks[i];
  if (!b || (b.type !== 'heading' && b.type !== 'text' && b.type !== 'list' && b.type !== 'quote')) return unchanged;
  const heading = target === 'h2' || target === 'h3';
  const listTarget = target === 'bulleted' || target === 'numbered';

  let replacement: StudioBlock[];
  let converted: StudioBlock[];
  if (b.type === 'heading' && heading) {
    converted = replacement = [{ ...b, level: target === 'h2' ? 2 : 3 }];
  } else if (b.type === 'list' && listTarget) {
    converted = replacement = [{ ...b, ordered: target === 'numbered' }];
  } else if ((b.type === 'text' && target === 'paragraph') || (b.type === 'quote' && target === 'quote')) {
    return unchanged;
  } else {
    const raw = sourceLines(b);
    const first = Math.max(0, Math.min(startLine, raw.length - 1));
    const last = Math.max(first, Math.min(endLine, raw.length - 1));
    const picked = (b.type === 'heading' ? [b.text] : raw.slice(first, last + 1))
      .map((l) => (b.type === 'list' ? stripListMarker(l.trim()) : l.trim()))
      .filter(Boolean);
    if (!picked.length) return unchanged;
    const before = b.type === 'heading' ? [] : raw.slice(0, first);
    const after = b.type === 'heading' ? [] : raw.slice(last + 1);
    const hasText = (ls: string[]) => ls.some((l) => l.trim());
    const beforeBlock = hasText(before) ? withLines(b, before) : null;
    const afterBlock = hasText(after) ? withLines(b, after, beforeBlock ? newId() : b.id) : null;
    let leftoverCite = '';
    if (b.type === 'quote' && b.cite.trim()) {
      // The attribution stays with the last part of the quote; if none is left, it follows the converted text as a line.
      if (beforeBlock?.type === 'quote' && afterBlock) beforeBlock.cite = '';
      if (!beforeBlock && !afterBlock) leftoverCite = `— ${b.cite.trim()}`;
    }
    converted = blocksOf(target, heading || !leftoverCite ? picked : [...picked, leftoverCite]);
    if (heading && leftoverCite) converted.push({ id: newId(), type: 'text', text: leftoverCite });
    replacement = [...(beforeBlock ? [beforeBlock] : []), ...converted, ...(afterBlock ? [afterBlock] : [])];
  }

  const out = [...blocks.slice(0, i), ...replacement, ...blocks.slice(i + 1)];
  let at = out.indexOf(converted[0]);
  let focus = converted[0];
  // Merge the converted block with the block before it and the block after it, when they are the same kind.
  if (converted.length === 1) {
    if (mergeable(out[at - 1], focus)) {
      focus = merge(out[at - 1], focus);
      out.splice(at - 1, 2, focus);
      at--;
    }
    if (mergeable(focus, out[at + 1])) {
      focus = merge(focus, out[at + 1]);
      out.splice(at, 2, focus);
    }
  }
  return { blocks: out, focusId: focus.id };
}

/* ── Bold, italic, links ───────────────────────────────────────────────── */

/** New text for a box and the selection to restore. */
export interface TextEdit {
  value: string;
  start: number;
  end: number;
}
export type TextEditResult = TextEdit | { error: string };

interface Span {
  start: number;
  end: number;
  kind: 'bold' | 'italic' | 'link';
  inner: string;
  url?: string;
}

/** The bold, italic and link markers in a text, as the page reads them (INLINE_PATTERN). */
function spans(value: string): Span[] {
  return [...value.matchAll(INLINE_PATTERN)].map((m) => {
    const t = m[0];
    const start = m.index ?? 0;
    const end = start + t.length;
    if (t.startsWith('**')) return { start, end, kind: 'bold', inner: t.slice(2, -2) };
    const link = t.startsWith('[') ? t.match(LINK_PATTERN) : null;
    if (link) return { start, end, kind: 'link', inner: link[1], url: link[2] };
    return { start, end, kind: 'italic', inner: t.slice(1, -1) };
  });
}

/** The selection lies inside the span (a cursor must be strictly inside it, not just after it). */
const within = (sp: Span, s: number, e: number) => (s === e ? sp.start < s && s < sp.end : sp.start <= s && e <= sp.end);
/** The selection touches the span. */
const overlaps = (sp: Span, s: number, e: number) => (s === e ? sp.start < s && s < sp.end : sp.start < e && s < sp.end);

/** Moves a selection's edges past spaces and line breaks. */
function trimSelection(value: string, s: number, e: number): [number, number] {
  while (s < e && /\s/.test(value[s])) s++;
  while (e > s && /\s/.test(value[e - 1])) e--;
  return [s, e];
}

/** Widens a selection to whole markers wherever it cuts through one. */
function expand(all: Span[], s: number, e: number): [number, number] {
  for (const sp of all) {
    if (overlaps(sp, s, e)) {
      s = Math.min(s, sp.start);
      e = Math.max(e, sp.end);
    }
  }
  return [s, e];
}

/** `**text**` with surrounding spaces kept outside the markers; blank text is returned as it is. */
function wrapPiece(text: string, marker: string): string {
  const m = text.match(/^(\s*)([\s\S]*?)(\s*)$/)!;
  return m[2] ? `${m[1]}${marker}${m[2]}${marker}${m[3]}` : text;
}

/** One line wrapped in bold or italic: existing markers removed, links left outside the markers. */
function wrapLine(line: string, marker: string): string {
  const parts: string[] = [];
  let last = 0;
  for (const m of line.matchAll(LINK_ANYWHERE)) {
    parts.push(wrapPiece(stripEmphasis(line.slice(last, m.index)), marker), m[0]);
    last = (m.index ?? 0) + m[0].length;
  }
  parts.push(wrapPiece(stripEmphasis(line.slice(last)), marker));
  return parts.join('');
}

const PLACEHOLDER = { bold: 'bold text', italic: 'italic text' };

/**
 * Bold or italic on and off. Inside an existing span of that kind it is removed; otherwise the selection (each line on
 * its own, links kept outside) is wrapped. Bold wins over italic: bold replaces italic, and bold text cannot be made italic.
 */
export function toggleEmphasis(value: string, start: number, end: number, kind: 'bold' | 'italic'): TextEditResult {
  const marker = kind === 'bold' ? '**' : '*';
  const all = spans(value);
  const same = all.find((sp) => sp.kind === kind && within(sp, start, end));
  if (same) {
    return { value: value.slice(0, same.start) + same.inner + value.slice(same.end), start: same.start, end: same.start + same.inner.length };
  }
  if (kind === 'italic' && all.some((sp) => sp.kind === 'bold' && overlaps(sp, start, end))) {
    return { error: 'Bold text cannot also be italic. Remove the bold first.' };
  }
  const italic = kind === 'bold' ? all.find((sp) => sp.kind === 'italic' && within(sp, start, end)) : undefined;
  if (italic) {
    const s = italic.start + 2;
    return { value: `${value.slice(0, italic.start)}**${italic.inner}**${value.slice(italic.end)}`, start: s, end: s + italic.inner.length };
  }
  const [s0, e0] = trimSelection(value, start, end);
  if (s0 === e0) {
    const text = PLACEHOLDER[kind];
    const s = start + marker.length;
    return { value: value.slice(0, start) + marker + text + marker + value.slice(end), start: s, end: s + text.length };
  }
  const [s, e] = expand(all, s0, e0);
  const wrapped = value.slice(s, e).split('\n').map((l) => wrapLine(l, marker)).join('\n');
  // One wrapped piece: select the text inside the markers, so pressing the button again removes them.
  const one = wrapped.split(marker).length === 3 && wrapped.startsWith(marker) && wrapped.endsWith(marker);
  const m = one ? marker.length : 0;
  return { value: value.slice(0, s) + wrapped + value.slice(e), start: s + m, end: s + wrapped.length - m };
}

/** Removes the bold and italic markers in the selection (or around the cursor). Links stay: Remove link does those. */
export function clearFormatting(value: string, start: number, end: number): TextEditResult {
  const emphasis = spans(value).filter((sp) => sp.kind !== 'link');
  if (start === end) {
    const sp = emphasis.find((x) => within(x, start, end));
    if (!sp) return { error: 'There is no bold or italic text here.' };
    return { value: value.slice(0, sp.start) + sp.inner + value.slice(sp.end), start: sp.start, end: sp.start + sp.inner.length };
  }
  const [s, e] = expand(emphasis, start, end);
  const cleared = stripEmphasis(value.slice(s, e));
  return { value: value.slice(0, s) + cleared + value.slice(e), start: s, end: s + cleared.length };
}

/** Replaces every link touching the selection (or the one around the cursor) with its text. */
export function removeLinks(value: string, start: number, end: number): TextEditResult {
  const links = spans(value).filter((sp) => sp.kind === 'link' && (overlaps(sp, start, end) || within(sp, start, end)));
  if (!links.length) return { error: 'There is no link here.' };
  let out = value.slice(0, links[0].start);
  for (let i = 0; i < links.length; i++) out += links[i].inner + value.slice(links[i].end, links[i + 1]?.start ?? value.length);
  const removed = links.reduce((n, l) => n + (l.end - l.start - l.inner.length), 0);
  return { value: out, start: links[0].start, end: links[links.length - 1].end - removed };
}

/** The link the selection or cursor is in, to edit its URL. */
export function linkAt(value: string, start: number, end: number): { start: number; end: number; label: string; url: string } | null {
  const sp = spans(value).find((x) => x.kind === 'link' && (within(x, start, end) || overlaps(x, start, end)));
  return sp ? { start: sp.start, end: sp.end, label: sp.inner, url: sp.url ?? '' } : null;
}

/** Why a URL cannot be a link on the page (the rules of safeHref), or null when it can. */
export function linkProblem(url: string): string | null {
  const href = url.trim();
  if (!href) return 'Enter a link.';
  if (/\s/.test(href)) return 'A link cannot contain spaces.';
  if (/^www\./i.test(href)) return 'Add https:// in front of the address.';
  if (!safeHref(href)) return 'Use a link that starts with https://, http://, mailto:, / (a page on this site) or #.';
  if (!LINK_PATTERN.test(`[x](${href})`)) return 'This link has brackets the page cannot read.';
  return null;
}

const cleanLabel = (s: string) => stripInline(s).replace(/[[\]*]/g, '').replace(/\s+/g, ' ').trim();

/**
 * Makes the selection a link to `url`, or changes the URL of the link it is in. A link inside bold or italic text splits
 * it (`**see** [link](url) **here**`), because the page cannot show a link inside bold or italic.
 */
export function applyLink(value: string, start: number, end: number, url: string): TextEditResult {
  const href = url.trim();
  const problem = linkProblem(href);
  if (problem) return { error: problem };
  const existing = linkAt(value, start, end);
  if (existing) {
    const markdown = `[${existing.label}](${href})`;
    return { value: value.slice(0, existing.start) + markdown + value.slice(existing.end), start: existing.start, end: existing.start + markdown.length };
  }
  if (value.slice(start, end).includes('\n')) return { error: 'Select text on one line to make it a link.' };
  const all = spans(value);
  const [s0, e0] = start === end ? [start, end] : trimSelection(value, start, end);
  const outer = all.find((sp) => sp.kind !== 'link' && sp.start <= s0 && e0 <= sp.end && !(sp.start === s0 && sp.end === e0));
  const make = (selected: string) => {
    const label = cleanLabel(selected);
    return { markdown: `[${label || 'link text'}](${href})`, placeholder: !label };
  };
  if (outer) {
    const marker = outer.kind === 'bold' ? '**' : '*';
    const innerStart = outer.start + marker.length;
    const innerEnd = outer.end - marker.length;
    const s = Math.min(Math.max(s0, innerStart), innerEnd);
    const e = Math.min(Math.max(e0, innerStart), innerEnd);
    const { markdown, placeholder } = make(value.slice(s, e));
    const head = wrapPiece(value.slice(innerStart, s), marker);
    const replacement = head + markdown + wrapPiece(value.slice(e, innerEnd), marker);
    const at = outer.start + head.length;
    return { value: value.slice(0, outer.start) + replacement + value.slice(outer.end), ...selectLink(at, markdown, placeholder) };
  }
  const [s, e] = expand(all, s0, e0);
  const { markdown, placeholder } = make(value.slice(s, e));
  return { value: value.slice(0, s) + markdown + value.slice(e), ...selectLink(s, markdown, placeholder) };
}

/** After a link is made: the placeholder text selected so it can be typed over, or the cursor after the link. */
function selectLink(at: number, markdown: string, placeholder: boolean) {
  return placeholder ? { start: at + 1, end: at + 1 + 'link text'.length } : { start: at + markdown.length, end: at + markdown.length };
}
