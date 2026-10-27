import { inlineRuns, normalizeRuns, parseInline, serializeRuns, type Run } from './inline';
import { MAX_LIST_LEVEL, stripListMarker } from './postUtils';

/*
 * The studio's text boxes edit a ProseMirror document (Tiptap, decision.md D049), but every field is stored as the
 * same marker string as before (inline.ts). These pure functions convert between the two, as ProseMirror JSON, so they
 * are tested in node without a browser. One paragraph is one line of the string; in a list, each item is a line with
 * one leading tab per level.
 */

/** What a box edits: paragraphs (Paragraphs, Quote, FAQ answer), a list, or a one-line heading. */
export type BoxKind = 'paragraphs' | 'list' | 'heading';

export interface DocMark {
  type: 'bold' | 'italic' | 'code' | 'link';
  attrs?: { href: string };
}
export interface DocNode {
  type: string;
  text?: string;
  marks?: DocMark[];
  content?: DocNode[];
  attrs?: Record<string, unknown>;
}

/* ── String → document ─────────────────────────────────────────────────── */

const MARK_ORDER: DocMark['type'][] = ['bold', 'italic', 'code', 'link'];

function textNodes(runs: Run[]): DocNode[] {
  return runs.map((r) => {
    const marks: DocMark[] = MARK_ORDER.flatMap((type): DocMark[] => {
      if (type === 'link') return r.href ? [{ type, attrs: { href: r.href } }] : [];
      return r[type] ? [{ type }] : [];
    });
    return marks.length ? { type: 'text', text: r.text, marks } : { type: 'text', text: r.text };
  });
}

/** One line as a paragraph. A heading box has no bold (headings are bold already). */
export function paragraphNode(line: string, bold = true): DocNode {
  const runs = inlineRuns(parseInline(line)).map((r) => (bold ? r : { ...r, bold: undefined }));
  const content = textNodes(normalizeRuns(runs));
  return content.length ? { type: 'paragraph', content } : { type: 'paragraph' };
}

/** List lines as items with levels: tabs give the level (at most one deeper than the item before, at most 2). */
export function listLines(value: string): { level: number; text: string }[] {
  const items: { level: number; text: string }[] = [];
  for (const raw of value.split('\n')) {
    const tabs = raw.match(/^\t*/)![0].length;
    const level = Math.min(tabs, items.length ? items[items.length - 1].level + 1 : 0, MAX_LIST_LEVEL);
    items.push({ level, text: stripListMarker(raw.trim()) });
  }
  return items;
}

/** List items with levels as nested list nodes, all of one type. */
export function listNode(items: { level: number; text: string }[], ordered: boolean): DocNode {
  const type = ordered ? 'orderedList' : 'bulletList';
  const root: DocNode = { type, content: [] };
  const path: DocNode[] = []; // the last list item at each level
  for (const { level, text } of items.length ? items : [{ level: 0, text: '' }]) {
    const item: DocNode = { type: 'listItem', content: [paragraphNode(text)] };
    if (level === 0) root.content!.push(item);
    else {
      const parent = path[level - 1];
      let sub = parent.content!.find((n) => n.type === type);
      if (!sub) parent.content!.push((sub = { type, content: [] }));
      sub.content!.push(item);
    }
    path[level] = item;
    path.length = level + 1;
  }
  return root;
}

/** The document a box edits for a stored string. */
export function toDoc(kind: BoxKind, value: string, ordered = false): DocNode {
  if (kind === 'heading') return { type: 'doc', content: [paragraphNode(value.replace(/\n/g, ' '), false)] };
  if (kind === 'list') return { type: 'doc', content: [listNode(listLines(value), ordered)] };
  return { type: 'doc', content: value.split('\n').map((line) => paragraphNode(line)) };
}

/* ── Document → string ─────────────────────────────────────────────────── */

function runsOf(nodes: DocNode[] | undefined): Run[] {
  return (nodes ?? []).map((n) => {
    const run: Run = { text: n.text ?? '' };
    for (const m of n.marks ?? []) {
      if (m.type === 'link') run.href = m.attrs?.href;
      else if (m.type === 'bold' || m.type === 'italic' || m.type === 'code') run[m.type] = true;
    }
    return run;
  });
}

/** A paragraph's text as one line of the stored string. */
export const paragraphLine = (p: DocNode, bold = true) =>
  serializeRuns(runsOf(p.content).map((r) => (bold ? r : { ...r, bold: undefined })));

/** A list's items in reading order, with levels. A list item's extra paragraphs are items of their own. */
function listToLines(list: DocNode, level: number, out: string[]) {
  for (const item of list.content ?? []) {
    for (const child of item.content ?? []) {
      if (child.type === 'paragraph') out.push('\t'.repeat(Math.min(level, MAX_LIST_LEVEL)) + paragraphLine(child));
      else if (child.type === 'bulletList' || child.type === 'orderedList') listToLines(child, level + 1, out);
    }
  }
}

/** The stored string for a box's document. */
export function fromDoc(kind: BoxKind, doc: DocNode): string {
  const top = doc.content ?? [];
  if (kind === 'heading') return top[0] ? paragraphLine(top[0], false) : '';
  if (kind === 'list') {
    const out: string[] = [];
    for (const node of top) {
      if (node.type === 'paragraph') out.push(paragraphLine(node));
      else listToLines(node, 0, out);
    }
    return out.join('\n');
  }
  return top.map((p) => paragraphLine(p)).join('\n');
}

/* ── Selections ────────────────────────────────────────────────────────── */

/** The parts of a ProseMirror node these helpers read. */
export interface PMLike {
  type: { name: string };
  nodeSize: number;
  descendants(f: (node: PMLike, pos: number) => boolean | void): void;
}

/**
 * The lines (paragraphs, in a list its items) that a selection from `from` to `to` touches, as first and last index
 * from 0: what "Turn into" converts. An empty selection means every line.
 */
export function selectedLines(doc: PMLike, from: number, to: number): [number, number] {
  let index = -1;
  let first = -1;
  let last = -1;
  doc.descendants((node, pos) => {
    if (node.type.name !== 'paragraph') return true;
    index++;
    const end = pos + node.nodeSize;
    if (from !== to && pos < to && end > from) {
      if (first === -1) first = index;
      last = index;
    }
    return false;
  });
  return first === -1 ? [0, Math.max(index, 0)] : [first, last];
}
