import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { fromBlogPostDocument, toBlogPostDocument } from '@/lib/sanity/blogPosts';
import { postShapeProblem } from '@/lib/sanity/postValidation';
import { StudioArticle } from '@/components/blog-studio/StudioArticle';
import { MAX_SOURCES, buildGuide, checklist, emptyPost, headingAnchors, wordCount } from '@/components/blog-studio/postUtils';
import type { StudioBlock, StudioPost, StudioSource } from '@/components/blog-studio/types';

// The blocks added in decision.md D049: H4 headings, nested lists, the Sources block; and how the page renders them.

const render = (blocks: StudioBlock[], preview = false) =>
  renderToStaticMarkup(createElement(StudioArticle, { blocks, preview })).replace(/<!-- -->/g, '');

const UUID = '5e0d2489-cc82-41c3-a606-2e4b9dc7d570';
const source = (over: Partial<StudioSource> = {}): StudioSource => ({
  id: 'src00001', publisher: 'HubSpot', title: 'State of Marketing', url: 'https://www.hubspot.com/state-of-marketing', date: 'checked 27 October 2026', ...over,
});
const sources = (items: StudioSource[], heading = 'Sources and reading'): StudioBlock => ({ id: 'srcblock1', type: 'sources', heading, items });
const post = (blocks: StudioBlock[]): StudioPost => ({ ...emptyPost('A post', 'CRM', 'Aryan Trivedi', '/aryan_t.jpeg'), id: UUID, slug: 'a-post', blocks });
const shape = (blocks: unknown[]) => postShapeProblem({ ...post([]), blocks });

/* ── H4 ──────────────────────────────────────────────────────────────── */

test('H4: rendered as <h4> with an anchor; not in the guide (H2 only); level 4 saves, 5 is refused', () => {
  const blocks: StudioBlock[] = [
    { id: 'h2a', type: 'heading', level: 2, text: 'Setup' },
    { id: 'h4a', type: 'heading', level: 4, text: 'Small *detail*' },
  ];
  assert.equal(render(blocks), '<h2 id="setup">Setup</h2><h4 id="small-detail">Small <em>detail</em></h4>');
  assert.equal(headingAnchors(blocks).get('h4a'), 'small-detail');
  assert.deepEqual(buildGuide(blocks), [{ id: 'setup', title: 'Setup' }]);
  assert.equal(shape(blocks), null);
  assert.equal(shape([{ id: 'h5', type: 'heading', level: 5, text: 'x' }]), 'Invalid block in the article.');
});

/* ── Nested lists ────────────────────────────────────────────────────── */

test('nested lists render as real nesting of the list type, at most 3 levels', () => {
  assert.equal(
    render([{ id: 'l1', type: 'list', ordered: false, items: 'a\n\tb\n\t\tc\n\t\t\td\ne' }]),
    '<ul><li>a<ul><li>b<ul><li>c</li><li>d</li></ul></li></ul></li><li>e</li></ul>',
  );
  assert.equal(render([{ id: 'l2', type: 'list', ordered: true, items: '1. a\n\t- b' }]), '<ol><li>a<ol><li>b</li></ol></li></ol>');
  assert.equal(render([{ id: 'l3', type: 'list', ordered: false, items: '\t\tstarts deep' }]), '<ul><li>starts deep</li></ul>', 'the first item is top level');
});

/* ── Inline marks on the page ────────────────────────────────────────── */

test('the page renders bold italic, code, a link in bold, and escapes', () => {
  assert.equal(
    render([{ id: 't1', type: 'text', text: '***Both*** `code` **see [the guide](/g)** 5\\*3' }]),
    '<p><em><strong>Both</strong></em> <code>code</code> <strong>see <a href="/g">the guide</a></strong> 5*3</p>',
  );
});

test('an Image block without a source still renders nothing on a published page (preview only shows the placeholder)', () => {
  const empty: StudioBlock = { id: 'i1', type: 'image', src: '', alt: 'Alt', caption: 'Cap' };
  assert.equal(render([empty]), '');
  assert.match(render([empty], true), /Image to upload/);
});

/* ── Sources ─────────────────────────────────────────────────────────── */

test('Sources render as an H2 (in the guide) and a numbered list: "Publisher: Title, date", empty parts left out', () => {
  const block = sources([
    source(),
    source({ id: 'src00002', publisher: '', title: 'Our own guide', url: '/blog/what-is-dubsado', date: '' }),
    source({ id: 'src00003', publisher: 'Gartner', title: 'Report with no link', url: '', date: '2025' }),
    source({ id: 'src00004', publisher: '', title: '', url: '', date: '' }),
  ]);
  assert.equal(
    render([block]),
    '<h2 id="sources-and-reading">Sources and reading</h2><ol class="article-sources">' +
      '<li><span class="article-source-meta">HubSpot:</span> <a href="https://www.hubspot.com/state-of-marketing" target="_blank" rel="noopener noreferrer">State of Marketing</a>, <span class="article-source-meta">checked 27 October 2026</span></li>' +
      '<li><a href="/blog/what-is-dubsado">Our own guide</a></li>' +
      '<li><span class="article-source-meta">Gartner:</span> Report with no link, <span class="article-source-meta">2025</span></li>' +
      '</ol>',
  );
  assert.deepEqual(buildGuide([{ id: 'h', type: 'heading', level: 2, text: 'Intro' }, block]), [
    { id: 'intro', title: 'Intro' },
    { id: 'sources-and-reading', title: 'Sources and reading' },
  ]);
  assert.equal(render([sources([source({ title: '', publisher: '', url: '' , date: 'x' })])]), '', 'no entry: no heading, nothing in the guide');
  assert.deepEqual(buildGuide([sources([])]), []);
  assert.equal(wordCount([block]), 0, 'sources do not count as article text');
});

test('Sources: an unsafe link is never rendered as a link', () => {
  for (const url of ['javascript:alert(1)', '//evil.com', 'data:text/html,x']) {
    const html = render([sources([source({ url })])]);
    assert.ok(!html.includes('href='), url);
    assert.ok(html.includes('State of Marketing'));
  }
});

test('Sources validation on save: limits, safe links, block-key ids, known fields only', () => {
  assert.equal(shape([sources([source()])]), null);
  assert.equal(shape([sources([source({ url: '' })])]), null, 'a draft row without a link is allowed');
  const refused = [
    sources(Array.from({ length: MAX_SOURCES + 1 }, (_, n) => source({ id: `src${n}` }))),
    sources([source({ title: 'x'.repeat(201) })]),
    sources([source({ publisher: 'x'.repeat(121) })]),
    sources([source({ date: 'x'.repeat(41) })]),
    sources([source({ url: `https://x.example/${'a'.repeat(600)}` })]),
    sources([source({ url: 'javascript:alert(1)' })]),
    sources([source({ url: '//evil.com' })]),
    sources([source({ id: 'bad id with spaces' })]),
    sources([{ ...source(), title: 7 } as unknown as StudioSource]),
    { id: 'srcblock1', type: 'sources', heading: 'x', items: 'not a list' },
  ];
  for (const b of refused) assert.ok(shape([b]), JSON.stringify(b).slice(0, 80));
  assert.equal(shape([sources(Array.from({ length: MAX_SOURCES }, (_, n) => source({ id: `src${n}` })))]), null, `${MAX_SOURCES} is allowed`);

  // What reaches Sanity: entries keyed by _key, only the five known fields, whatever the client sent.
  const sent = sources([{ ...source(), _type: 'evil', extra: '<script>' } as unknown as StudioSource]);
  const doc = toBlogPostDocument({ ...post([sent]), blocks: [{ ...sent, extra: 1 } as unknown as StudioBlock] });
  assert.deepEqual(doc.blocks[0], {
    _key: 'srcblock1',
    type: 'sources',
    heading: 'Sources and reading',
    items: [{ _key: 'src00001', publisher: 'HubSpot', title: 'State of Marketing', url: 'https://www.hubspot.com/state-of-marketing', date: 'checked 27 October 2026' }],
  });
  assert.deepEqual(fromBlogPostDocument(doc as unknown as Record<string, unknown>).blocks, [sources([source()])], 'read back as it was written');
});

test('Sources checklist (recommended): at most one block, the last block, every entry with a title and a link', () => {
  const labels = (p: StudioPost) =>
    Object.fromEntries(checklist(p, { studio: [], site: [] }).filter((c) => /source/i.test(c.label)).map((c) => [c.label, c.ok]));
  const text: StudioBlock = { id: 't1', type: 'text', text: 'Body' };
  assert.deepEqual(labels(post([text, sources([source()])])), {
    'At most one Sources block': true,
    'Sources are the last block of the article': true,
    'Every source has a title and a link': true,
  });
  assert.deepEqual(labels(post([sources([source({ url: '' })]), text, { ...sources([source()]), id: 'srcblock2' }])), {
    'At most one Sources block': false,
    'Sources are the last block of the article': true,
    'Every source has a title and a link': false,
  });
  assert.equal(labels(post([sources([source()]), text]))['Sources are the last block of the article'], false);
  assert.deepEqual(labels(post([text])), {}, 'no Sources block, no items');
  assert.ok(checklist(post([text, sources([source({ url: '' })])]), { studio: [], site: [] }).every((c) => !/source/i.test(c.label) || !c.required), 'recommended, never required');
});
