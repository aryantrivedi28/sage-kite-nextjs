import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  applyLink,
  clearFormatting,
  convertLines,
  lineRange,
  linkAt,
  linkProblem,
  removeLinks,
  toggleEmphasis,
  type TextEditResult,
} from '@/components/blog-studio/formatting';
import { INLINE_PATTERN } from '@/components/blog-studio/postUtils';
import type { StudioBlock } from '@/components/blog-studio/types';

// The editor's formatting bar (decision.md D047): Turn into, and the inline Bold / Italic / Link / Remove link /
// Clear formatting helpers, as pure functions.

const text = (id: string, t: string): StudioBlock => ({ id, type: 'text', text: t });
const list = (id: string, items: string, ordered = false): StudioBlock => ({ id, type: 'list', ordered, items });
const quote = (id: string, t: string, cite = ''): StudioBlock => ({ id, type: 'quote', text: t, cite });
const heading = (id: string, t: string, level: 2 | 3 = 2): StudioBlock => ({ id, type: 'heading', level, text: t });
/** Blocks without the ids of new blocks: an original id is shown, a new one as "new". */
const view = (blocks: StudioBlock[], originals: string[]) =>
  blocks.map((b) => ({ ...b, id: originals.includes(b.id) ? b.id : 'new' }));

/* ── lineRange ───────────────────────────────────────────────────────── */

test('lineRange: no selection is the whole box; a selection covers the lines it touches, not the line after a trailing break', () => {
  const v = 'one\ntwo\nthree';
  assert.deepEqual(lineRange(v, 5, 5), [0, 2]);
  assert.deepEqual(lineRange(v, 5, 6), [1, 1]);
  assert.deepEqual(lineRange(v, 2, 9), [0, 2]);
  assert.deepEqual(lineRange(v, 4, 8), [1, 1], 'ends right after the line break');
});

/* ── convertLines ────────────────────────────────────────────────────── */

test('Turn into on a selection splits the block: lines before, converted, lines after keep their own types', () => {
  const blocks = [text('a', 'one\ntwo\nthree')];
  const r = convertLines(blocks, 'a', 1, 1, 'h2');
  assert.deepEqual(view(r.blocks, ['a']), [text('a', 'one'), heading('new', 'two'), text('new', 'three')]);
  assert.equal(r.focusId, r.blocks[1].id);
  assert.notEqual(r.blocks[1].id, r.blocks[2].id);
});

test('Paragraph → heading: each selected line is its own heading; bold or italic that only styled the line is removed', () => {
  const r = convertLines([text('a', '**Intro**\n*Setup*\nbody')], 'a', 0, 1, 'h3');
  assert.deepEqual(view(r.blocks, ['a']), [heading('new', 'Intro', 3), heading('new', 'Setup', 3), text('a', 'body')]);
});

test('no selection converts the whole block (new id); the same type is a no-op', () => {
  const blocks = [text('a', 'x\ny')];
  const r = convertLines(blocks, 'a', 0, 1, 'bulleted');
  assert.deepEqual(view(r.blocks, []), [list('new', 'x\ny')]);
  assert.equal(convertLines(blocks, 'a', 0, 1, 'paragraph').blocks, blocks);
  const q = [quote('q', 'a')];
  assert.equal(convertLines(q, 'q', 0, 0, 'quote').blocks, q);
});

test('Heading → paragraph is one line, merged with paragraphs on both sides (the earlier block keeps its id)', () => {
  const r = convertLines([text('p1', 'before'), heading('h', 'Title'), text('p2', 'after')], 'h', 0, 0, 'paragraph');
  assert.deepEqual(r.blocks, [text('p1', 'before\nTitle\nafter')]);
  assert.equal(r.focusId, 'p1');
});

test('Heading → H2 / H3 changes the level and keeps the id', () => {
  assert.deepEqual(convertLines([heading('h', 'T', 2)], 'h', 0, 0, 'h3').blocks, [heading('h', 'T', 3)]);
});

test('List → paragraph strips typed markers; bulleted ↔ numbered flips the whole list and keeps its id', () => {
  assert.deepEqual(view(convertLines([list('l', '- a\n2. b\nc')], 'l', 0, 2, 'paragraph').blocks, []), [text('new', 'a\nb\nc')]);
  assert.deepEqual(convertLines([list('l', 'a\nb')], 'l', 1, 1, 'numbered').blocks, [list('l', 'a\nb', true)]);
});

test('a flipped or converted list merges with a neighbouring list of the same kind, not a different kind', () => {
  assert.deepEqual(convertLines([list('n', 'one', true), list('b', 'two')], 'b', 0, 0, 'numbered').blocks, [list('n', 'one\ntwo', true)]);
  const r = convertLines([list('b', 'x'), text('t', 'y\nz')], 't', 0, 0, 'bulleted');
  assert.deepEqual(r.blocks, [list('b', 'x\ny'), text('t', 'z')]);
  assert.equal(r.focusId, 'b');
  assert.equal(convertLines([list('n', 'x', true), text('t', 'y')], 't', 0, 0, 'bulleted').blocks.length, 2);
});

test('quotes merge only when neither has an attribution; a split quote keeps its attribution on the last part', () => {
  assert.deepEqual(convertLines([quote('q', 'a'), text('t', 'b')], 't', 0, 0, 'quote').blocks, [quote('q', 'a\nb')]);
  assert.equal(convertLines([quote('q', 'a', 'Ann'), text('t', 'b')], 't', 0, 0, 'quote').blocks.length, 2);
  const split = convertLines([quote('q', 'one\ntwo\nthree', 'Ann')], 'q', 1, 1, 'paragraph');
  assert.deepEqual(view(split.blocks, ['q']), [quote('q', 'one'), text('new', 'two'), quote('new', 'three', 'Ann')]);
  const whole = convertLines([quote('q', 'said', 'Ann')], 'q', 0, 0, 'paragraph');
  assert.deepEqual(view(whole.blocks, []), [text('new', 'said\n— Ann')], 'the attribution is not lost');
});

test('image, table, video, FAQ and divider blocks are never touched; an unknown id or blank selection changes nothing', () => {
  const blocks: StudioBlock[] = [
    { id: 'i', type: 'image', src: '', alt: '', caption: '' },
    { id: 't', type: 'table', rows: 'a | b' },
    { id: 'v', type: 'video', url: '', title: '' },
    { id: 'f', type: 'faq', question: 'q', answer: 'a' },
    { id: 'd', type: 'divider' },
    text('p', 'x\n\ny'),
  ];
  for (const id of ['i', 't', 'v', 'f', 'd', 'missing']) assert.equal(convertLines(blocks, id, 0, 0, 'h2').blocks, blocks, id);
  assert.equal(convertLines(blocks, 'p', 1, 1, 'h2').blocks, blocks, 'a blank line');
});

/* ── inline helpers ──────────────────────────────────────────────────── */

const edit = (r: TextEditResult) => {
  assert.ok(!('error' in r), JSON.stringify(r));
  return r as Exclude<TextEditResult, { error: string }>;
};
/** No marker the page would show as text: everything outside matched parts is free of `*` and `[..](`. */
const clean = (v: string) => assert.equal(v.split(INLINE_PATTERN).filter((_, i) => i % 2 === 0).join('').match(/\*|\]\(/), null, v);

test('Bold toggles on and off: selection, the selection inside the markers, the cursor inside, the markers selected', () => {
  const v = 'make this bold';
  const on = edit(toggleEmphasis(v, 5, 9, 'bold'));
  assert.equal(on.value, 'make **this** bold');
  assert.equal(on.value.slice(on.start, on.end), 'this');
  assert.equal(edit(toggleEmphasis(on.value, on.start, on.end, 'bold')).value, v);
  assert.equal(edit(toggleEmphasis(on.value, 9, 9, 'bold')).value, v, 'cursor inside');
  assert.equal(edit(toggleEmphasis(on.value, 5, 13, 'bold')).value, v, 'markers selected');
});

test('Italic toggles; bold wins: bold replaces italic, italic on bold text is refused', () => {
  const on = edit(toggleEmphasis('a word here', 2, 6, 'italic'));
  assert.equal(on.value, 'a *word* here');
  assert.equal(edit(toggleEmphasis(on.value, 4, 4, 'italic')).value, 'a word here');
  assert.equal(edit(toggleEmphasis(on.value, 4, 4, 'bold')).value, 'a **word** here');
  assert.ok('error' in toggleEmphasis('a **word** here', 5, 5, 'italic'));
});

test('Bold over links, several lines, spaces and existing markers never nests markers', () => {
  const v = 'see [docs](/x) now\nand *this* line ';
  const r = edit(toggleEmphasis(v, 0, v.length, 'bold'));
  assert.equal(r.value, '**see** [docs](/x) **now**\n**and this line** ');
  for (const line of r.value.split('\n')) clean(line);
  assert.equal(edit(toggleEmphasis('ab **cd** ef', 1, 6, 'bold')).value, 'a**b cd** ef', 'a selection cutting a bold span widens to it');
});

test('Bold with no selection inserts selected placeholder text', () => {
  const r = edit(toggleEmphasis('x ', 2, 2, 'bold'));
  assert.equal(r.value, 'x **bold text**');
  assert.equal(r.value.slice(r.start, r.end), 'bold text');
});

test('Clear formatting removes bold and italic in the selection and leaves links', () => {
  const v = '**a** *b* [c](/c) **d**';
  assert.equal(edit(clearFormatting(v, 0, 17)).value, 'a b [c](/c) **d**');
  assert.equal(edit(clearFormatting(v, 2, 2)).value, 'a *b* [c](/c) **d**', 'cursor inside');
  assert.ok('error' in clearFormatting('plain', 2, 2));
});

test('Remove link: the link under the cursor, or every link the selection touches', () => {
  assert.equal(edit(removeLinks('go [here](/a) now', 6, 6)).value, 'go here now');
  const two = edit(removeLinks('[one](/1) and [two](https://x.example) end', 3, 18));
  assert.equal(two.value, 'one and two end');
  assert.equal(two.value.slice(two.start, two.end), 'one and two');
  assert.ok('error' in removeLinks('no links', 1, 3));
});

test('Link: prefill and edit the URL of the link the cursor is in; make a new link; split bold around it', () => {
  assert.deepEqual(linkAt('go [here](/a) now', 5, 5), { start: 3, end: 13, label: 'here', url: '/a' });
  assert.equal(linkAt('plain', 1, 1), null);
  assert.equal(edit(applyLink('go [here](/a) now', 5, 5, 'https://www.sagekite.com/book')).value, 'go [here](https://www.sagekite.com/book) now');
  assert.equal(edit(applyLink('read the guide', 5, 14, '/blog/x')).value, 'read [the guide](/blog/x)');
  const inBold = edit(applyLink('**see the guide now**', 6, 15, '/g'));
  assert.equal(inBold.value, '**see** [the guide](/g) **now**');
  clean(inBold.value);
  const empty = edit(applyLink('x ', 2, 2, '/a'));
  assert.equal(empty.value, 'x [link text](/a)');
  assert.equal(empty.value.slice(empty.start, empty.end), 'link text');
});

test('Link refuses what the page would not render, with a reason', () => {
  for (const url of ['', 'javascript:alert(1)', '//evil.com', '/\\evil.com', 'www.example.com', 'https://a b', 'ftp://x']) {
    const r = applyLink('text', 0, 4, url);
    assert.ok('error' in r, url);
    assert.equal(r.error, linkProblem(url));
  }
  for (const url of ['/blog/x', '#faq', 'https://x.example/a_(b)', 'mailto:hi@sagekite.com']) assert.equal(linkProblem(url), null, url);
  assert.ok('error' in applyLink('one\ntwo', 0, 7, '/a'), 'one line only');
});
