import { LINK_PATTERN, safeHref, withoutEmphasis } from './inline';
import { newId, stripListMarker } from './postUtils';
import type { HeadingLevel, StudioBlock } from './types';

/*
 * The parts of the formatting bar that are about blocks rather than text (decision.md D047, D049), as pure functions
 * tested in node: "Turn into" splits and converts blocks, and `linkProblem` checks a link before the editor adds it.
 * Bold, italic, code and links inside a box are the editor's own commands (RichTextBox.tsx).
 */

/* ── Turn into ─────────────────────────────────────────────────────────── */

export type TurnInto = 'paragraph' | 'h2' | 'h3' | 'h4' | 'bulleted' | 'numbered' | 'quote';

export const TURN_INTO_OPTIONS: { value: TurnInto; label: string }[] = [
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'h3', label: 'Heading 3' },
  { value: 'h4', label: 'Heading 4' },
  { value: 'bulleted', label: 'Bulleted list' },
  { value: 'numbered', label: 'Numbered list' },
  { value: 'quote', label: 'Quote' },
];

const HEADING_LEVEL: Partial<Record<TurnInto, HeadingLevel>> = { h2: 2, h3: 3, h4: 4 };

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
  const level = HEADING_LEVEL[target];
  if (level) {
    // Bold or italic on a line that becomes a heading was only a way to make it look like one.
    return lines.map((text) => ({ id: newId(), type: 'heading', level, text: withoutEmphasis(text).trim() }));
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
 * Bulleted ↔ numbered on a list flips the whole list (its sub-levels too). A list's levels are kept in the parts before
 * and after; converted list lines lose theirs. Image, table, video, FAQ, Sources and divider blocks are never touched.
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
  const heading = !!HEADING_LEVEL[target];
  const listTarget = target === 'bulleted' || target === 'numbered';

  let replacement: StudioBlock[];
  let converted: StudioBlock[];
  if (b.type === 'heading' && heading) {
    converted = replacement = [{ ...b, level: HEADING_LEVEL[target]! }];
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

/* ── Links ─────────────────────────────────────────────────────────────── */

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
