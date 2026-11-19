import assert from 'node:assert/strict';
import { test } from 'node:test';
import { convertLines, linkProblem } from '@/components/blog-studio/formatting';
import type { StudioBlock } from '@/components/blog-studio/types';

// The block side of the formatting bar (decision.md D047, D049): Turn into, and the check a link passes before the
// editor adds it. Bold, italic, code and links inside a box are the editor's own commands (tests/editor.test.mts).

const text = (id: string, t: string): StudioBlock => ({ id, type: 'text', text: t });
const list = (id: string, items: string, ordered = false): StudioBlock => ({ id, type: 'list', ordered, items });
const quote = (id: string, t: string, cite = ''): StudioBlock => ({ id, type: 'quote', text: t, cite });
const heading = (id: string, t: string, level: 2 | 3 | 4 = 2): StudioBlock => ({ id, type: 'heading', level, text: t });
/** Blocks without the ids of new blocks: an original id is shown, a new one as "new". */
const view = (blocks: StudioBlock[], originals: string[]) =>
  blocks.map((b) => ({ ...b, id: originals.includes(b.id) ? b.id : 'new' }));

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


/* ── H4 and list levels (D049) ───────────────────────────────────────── */

test('Turn into Heading 4: a paragraph line, and a heading changing level, keeping its id', () => {
  const r = convertLines([text('a', 'one\n**two**\nthree')], 'a', 1, 1, 'h4');
  assert.deepEqual(view(r.blocks, ['a']), [text('a', 'one'), heading('new', 'two', 4), text('new', 'three')]);
  assert.deepEqual(convertLines([heading('h', 'T', 2)], 'h', 0, 0, 'h4').blocks, [heading('h', 'T', 4)]);
  assert.deepEqual(convertLines([heading('h', 'T', 4)], 'h', 0, 0, 'h3').blocks, [heading('h', 'T', 3)]);
});

test('Turn into on a nested list: the parts before and after keep their levels; converted lines lose theirs', () => {
  const r = convertLines([list('l', 'a\n\tb\n\t\tc\nd')], 'l', 1, 2, 'paragraph');
  assert.deepEqual(view(r.blocks, ['l']), [list('l', 'a'), text('new', 'b\nc'), list('new', 'd')]);
  const flip = convertLines([list('l', 'a\n\tb')], 'l', 0, 1, 'numbered');
  assert.deepEqual(flip.blocks, [list('l', 'a\n\tb', true)], 'bulleted to numbered flips the sub-levels too');
});

test('Sources blocks are never touched by Turn into', () => {
  const blocks: StudioBlock[] = [{ id: 's', type: 'sources', heading: 'Sources and reading', items: [] }];
  assert.equal(convertLines(blocks, 's', 0, 0, 'paragraph').blocks, blocks);
});

/* ── Links ───────────────────────────────────────────────────────────── */

test('linkProblem refuses what the page would not render, with a reason', () => {
  for (const url of ['', 'javascript:alert(1)', '//evil.com', '/\\evil.com', 'www.example.com', 'https://a b', 'ftp://x']) {
    assert.ok(linkProblem(url), url);
  }
  for (const url of ['/blog/x', '#faq', 'https://x.example/a_(b)', 'mailto:hi@sagekite.com']) assert.equal(linkProblem(url), null, url);
});
