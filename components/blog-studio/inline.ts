/*
 * The inline grammar of studio text (decision.md D049). Every text field is still a plain string with markers:
 *
 *   **bold**   *italic*   ***bold italic***   `code`   [label](url)   \* \` \[ \] \( \) \\ (escapes)
 *
 * Bold and italic may nest (`**a *b* c**`); a link label may hold bold, italic and code; code is literal. Anything
 * that does not parse is literal text, never HTML. `parseInline` reads a string into a tree (the page and the
 * preview render it), `inlineRuns` flattens a tree into runs of text with marks (the editor and the paste parser
 * work with runs), and `serializeRuns` writes runs back as a string that parses to the same runs.
 *
 * Emphasis follows CommonMark's delimiter rules, simplified: a run of `*` can open when it is followed by a
 * non-space and close when it follows a non-space, and the "rule of 3" keeps `**a*b*c**` and `**a***b*` unambiguous.
 */

// A link URL may contain one level of parentheses, e.g. Wikipedia's /wiki/CRM_(software).
export const URL_PART = String.raw`(?:[^()\s]|\([^()\s]*\))+`;
export const LINK_PATTERN = new RegExp(String.raw`^\[([^\]\n]+)\]\((${URL_PART})\)$`);
const URL_ONLY = new RegExp(String.raw`^${URL_PART}$`);

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

/** A URL the page renders as a link: safe, and readable inside `[label](url)`. */
export const isLinkableHref = (href: string) => !!safeHref(href) && URL_ONLY.test(href);

export type InlineNode =
  | { type: 'text'; text: string }
  | { type: 'code'; text: string }
  | { type: 'strong' | 'em'; children: InlineNode[] }
  | { type: 'link'; href: string; children: InlineNode[] };

/* ── Parsing ───────────────────────────────────────────────────────────── */

const ESCAPABLE = '*`[]()\\';
const isSpace = (ch: string | undefined) => ch === undefined || /\s/.test(ch);

interface Delim {
  type: 'delim';
  count: number;
  /** The run's length as written: the rule of 3 uses it. */
  length: number;
  canOpen: boolean;
  canClose: boolean;
}
type Item = InlineNode | Delim;

/** A code span starting at the backtick `i`: its end, or -1. Code is one line, at least one character, no escapes. */
function codeEnd(s: string, i: number): number {
  const end = s.indexOf('`', i + 1);
  return end > i + 1 && !s.slice(i + 1, end).includes('\n') ? end : -1;
}

/** `[label](url)` starting at `i`: the label's text and the URL, and where it ends; null when it is not one. */
function matchLink(s: string, i: number): { label: string; href: string; end: number } | null {
  let k = i + 1;
  while (k < s.length && s[k] !== ']') {
    if (s[k] === '\n') return null;
    if (s[k] === '\\' && ESCAPABLE.includes(s[k + 1] ?? '')) k += 2;
    else if (s[k] === '`' && codeEnd(s, k) !== -1) k = codeEnd(s, k) + 1;
    else k++;
  }
  if (s[k] !== ']' || k === i + 1 || s[k + 1] !== '(') return null;
  const url = new RegExp(String.raw`\((${URL_PART})\)`, 'y');
  url.lastIndex = k + 1;
  const m = url.exec(s);
  return m ? { label: s.slice(i + 1, k), href: m[1], end: url.lastIndex } : null;
}

/** Reads one line of studio text. A link whose URL `safeHref` refuses becomes its label, as before. */
export function parseInline(s: string, inLink = false): InlineNode[] {
  const items: Item[] = [];
  let text = '';
  const flush = () => {
    if (text) items.push({ type: 'text', text });
    text = '';
  };
  for (let i = 0; i < s.length; ) {
    const ch = s[i];
    if (ch === '\\' && ESCAPABLE.includes(s[i + 1] ?? '')) {
      text += s[i + 1];
      i += 2;
    } else if (ch === '`' && codeEnd(s, i) !== -1) {
      const end = codeEnd(s, i);
      flush();
      items.push({ type: 'code', text: s.slice(i + 1, end) });
      i = end + 1;
    } else if (ch === '[' && !inLink && matchLink(s, i)) {
      const link = matchLink(s, i)!;
      const children = parseInline(link.label, true);
      flush();
      if (safeHref(link.href)) items.push({ type: 'link', href: link.href, children });
      else items.push(...children);
      i = link.end;
    } else if (ch === '*') {
      let j = i;
      while (s[j] === '*') j++;
      const count = j - i;
      if (count > 3) text += s.slice(i, j);
      else {
        flush();
        items.push({ type: 'delim', count, length: count, canOpen: !isSpace(s[j]), canClose: !isSpace(s[i - 1]) });
      }
      i = j;
    } else {
      text += ch;
      i++;
    }
  }
  flush();
  return resolveEmphasis(items);
}

/** Pairs `*` runs into bold and italic, innermost first; unpaired runs are literal text. */
function resolveEmphasis(items: Item[]): InlineNode[] {
  const out: Item[] = [];
  const openers: Delim[] = [];
  // CommonMark's rule of 3: when either run could both open and close, their lengths must not add up to a multiple of 3.
  const canPair = (op: Delim, cl: Delim) =>
    !((op.canClose || cl.canOpen) && (op.length + cl.length) % 3 === 0 && !(op.length % 3 === 0 && cl.length % 3 === 0));
  for (const item of items) {
    if (item.type !== 'delim') {
      out.push(item);
      continue;
    }
    const d = { ...item };
    if (d.canClose) {
      while (d.count > 0) {
        let j = openers.length - 1;
        while (j >= 0 && !canPair(openers[j], d)) j--;
        if (j < 0) break;
        openers.length = j + 1; // openers above the match stay literal
        const op = openers[j];
        const use = op.count >= 2 && d.count >= 2 ? 2 : 1;
        const at = out.lastIndexOf(op);
        const children = finish(out.splice(at + 1));
        out.push({ type: use === 2 ? 'strong' : 'em', children });
        op.count -= use;
        d.count -= use;
        if (op.count === 0) {
          out.splice(at, 1);
          openers.pop();
        }
      }
    }
    if (d.count > 0) {
      if (d.canOpen) {
        out.push(d);
        openers.push(d);
      } else out.push({ type: 'text', text: '*'.repeat(d.count) });
    }
  }
  return finish(out);
}

/** Unpaired runs become text; neighbouring text merges. */
function finish(items: Item[]): InlineNode[] {
  const out: InlineNode[] = [];
  for (const item of items) {
    const node: InlineNode = item.type === 'delim' ? { type: 'text', text: '*'.repeat(item.count) } : item;
    const last = out[out.length - 1];
    if (node.type === 'text' && last?.type === 'text') last.text += node.text;
    else if (node.type !== 'text' || node.text) out.push(node);
  }
  return out;
}

/** The text a reader sees, without any markers. */
export function inlinePlainText(nodes: InlineNode[]): string {
  return nodes.map((n) => (n.type === 'text' || n.type === 'code' ? n.text : inlinePlainText(n.children))).join('');
}

/* ── Runs and writing back ─────────────────────────────────────────────── */

/** A stretch of text with its marks. `href` is a link. */
export interface Run {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string;
}

const sameMarks = (a: Run, b: Run) => !!a.bold === !!b.bold && !!a.italic === !!b.italic && !!a.code === !!b.code && a.href === b.href;

/** Runs without empty text, with neighbours of the same marks merged and only marks that are set. */
export function normalizeRuns(runs: Run[]): Run[] {
  const out: Run[] = [];
  for (const r of runs) {
    if (!r.text) continue;
    const run: Run = { text: r.text };
    if (r.bold) run.bold = true;
    if (r.italic) run.italic = true;
    if (r.code) run.code = true;
    if (r.href) run.href = r.href;
    const last = out[out.length - 1];
    if (last && sameMarks(last, run)) last.text += run.text;
    else out.push(run);
  }
  return out;
}

/** The tree as runs. */
export function inlineRuns(nodes: InlineNode[], marks: Omit<Run, 'text'> = {}): Run[] {
  return normalizeRuns(
    nodes.flatMap((n): Run[] => {
      switch (n.type) {
        case 'text': return [{ ...marks, text: n.text }];
        case 'code': return [{ ...marks, code: true, text: n.text }];
        case 'strong': return inlineRuns(n.children, { ...marks, bold: true });
        case 'em': return inlineRuns(n.children, { ...marks, italic: true });
        case 'link': return inlineRuns(n.children, { ...marks, href: n.href });
      }
    }),
  );
}

/** Text with the characters that would be read as markers escaped. */
export const escapeInline = (text: string) => text.replace(/[\\*`[\]]/g, '\\$&');

/** Code text as code spans; a backtick (which a code span cannot hold) is written as an escaped character between them. */
function writeCode(text: string): string {
  return text
    .split('`')
    .map((part) => (part ? `\`${part}\`` : ''))
    .join('\\`');
}

type Emphasis = 'b' | 'i';
interface Unit {
  bold: boolean;
  italic: boolean;
  /** The unit as written, without its bold and italic markers. */
  body: string;
}

/**
 * Writes units with bold and italic markers, keeping spaces outside them so every marker can open or close. Marks that
 * open together are nested with the longer-lasting one outside. Emphasis that overlaps without nesting (italic over
 * "ab", bold over "bc") cannot be written with `*` markers, since closing one and reopening the other would put the
 * markers side by side: the mark that would have to stay open across the other's end is ended there too, so it is
 * dropped from the rest of its text. Formatting is never added.
 */
function writeUnits(units: Unit[]): string {
  const want = units.map((u) => ({ b: u.bold, i: u.italic }));
  const endOf = (m: Emphasis, from: number) => {
    let j = from;
    while (j < want.length && want[j][m]) j++;
    return j;
  };
  let out = '';
  const active: Emphasis[] = [];
  const closeFrom = (k: number) => {
    const space = out.match(/\s+$/)?.[0] ?? '';
    out = out.slice(0, out.length - space.length);
    for (let x = active.length - 1; x >= k; x--) out += active[x] === 'b' ? '**' : '*';
    active.length = k;
    out += space;
  };
  for (let j = 0; j < units.length; j++) {
    const unit = units[j];
    const w = want[j];
    const k = active.findIndex((m) => !w[m]);
    if (k !== -1) {
      for (const m of active.slice(k + 1)) if (w[m]) for (let y = j; y < want.length && want[y][m]; y++) want[y][m] = false;
      closeFrom(k);
    }
    let body = unit.body;
    const open = (['b', 'i'] as const).filter((m) => w[m] && !active.includes(m)).sort((m1, m2) => endOf(m2, j) - endOf(m1, j));
    if (open.length) {
      const space = body.match(/^\s+/)?.[0] ?? '';
      out += space;
      body = body.slice(space.length);
      if (!body) continue;
      for (const m of open) {
        out += m === 'b' ? '**' : '*';
        active.push(m);
      }
    }
    out += body;
  }
  closeFrom(0);
  return out;
}

const writeRunText = (r: Run) => (r.code ? writeCode(r.text) : escapeInline(r.text));

/**
 * The first character whose marks differ between two run lists of the same text, or -1. Bold and italic on a space are
 * not compared: spaces at the edge of bold or italic are written outside the markers, and that does not show.
 */
function firstDifference(a: Run[], b: Run[]): number {
  const flat = (runs: Run[]) =>
    runs.flatMap((r) => [...r.text].map((ch) => `${/\s/.test(ch) ? '--' : `${+!!r.bold}${+!!r.italic}`}${+!!r.code}${r.href ?? ''}${ch}`));
  const x = flat(a);
  const y = flat(b);
  for (let n = 0; n < Math.max(x.length, y.length); n++) if (x[n] !== y[n]) return n;
  return -1;
}

/**
 * Runs as a studio string that reads back as exactly the same runs. Links take the bold and italic shared by all of
 * their text outside the brackets and the rest inside; a link whose URL the page would not render is written as its
 * text. Some bold and italic cannot be written with `*` markers (emphasis that overlaps without nesting, or that
 * changes in the middle of a word right after another change): the string is read back, and where it would not match,
 * bold and italic are dropped from that stretch of text (never added) until it does.
 */
export function serializeRuns(input: Run[]): string {
  let runs = normalizeRuns(input.map((r) => (r.href && !isLinkableHref(r.href) ? { ...r, href: undefined } : r)));
  for (;;) {
    const written = writeRuns(runs);
    const n = firstDifference(runs, inlineRuns(parseInline(written)));
    if (n === -1) return written;
    // Drop bold and italic from the run at the mismatch, or else from the nearest one before it that has any.
    let at = 0;
    for (let count = 0; at < runs.length && count + runs[at].text.length <= n; at++) count += runs[at].text.length;
    while (at >= 0 && !(runs[at]?.bold || runs[at]?.italic)) at--;
    if (at < 0) at = runs.findIndex((r) => r.bold || r.italic);
    if (at < 0) return written; // nothing left to drop: not expected, the text is still written safely
    runs = normalizeRuns(runs.map((r, k) => (k === at ? { ...r, bold: false, italic: false } : r)));
  }
}

function writeRuns(runs: Run[]): string {
  const units: Unit[] = [];
  for (let i = 0; i < runs.length; ) {
    const href = runs[i].href;
    if (!href) {
      units.push({ bold: !!runs[i].bold, italic: !!runs[i].italic, body: writeRunText(runs[i]) });
      i++;
      continue;
    }
    let j = i;
    while (j < runs.length && runs[j].href === href) j++;
    const group = runs.slice(i, j);
    const bold = group.every((r) => r.bold);
    const italic = group.every((r) => r.italic);
    const label = writeUnits(group.map((r) => ({ bold: !!r.bold && !bold, italic: !!r.italic && !italic, body: writeRunText(r) })));
    if (label) units.push({ bold, italic, body: `[${label}](${href})` });
    i = j;
  }
  return writeUnits(units);
}

/** The same text without bold and italic (a heading is bold already). */
export const withoutEmphasis = (s: string) =>
  serializeRuns(inlineRuns(parseInline(s)).map(({ bold: _b, italic: _i, ...r }) => r));

/** A string in its normal written form: what the editor would save for it. */
export const normalizeInline = (s: string) => serializeRuns(inlineRuns(parseInline(s)));
