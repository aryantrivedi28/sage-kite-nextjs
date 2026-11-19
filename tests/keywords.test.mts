import assert from 'node:assert/strict';
import { test } from 'node:test';
import { articleKeywords, buildBlogJsonLd } from '@/components/blog/blogJsonLd';
import { buildBlogMetadata } from '@/components/blog/blogMetadata';
import { MAX_KEYWORD_LENGTH, MAX_SECONDARY_KEYWORDS, checklist, emptyPost, normalizeKeywords, parseKeywordList } from '@/components/blog-studio/postUtils';
import { fromBlogPostDocument, toBlogPostDocument } from '@/lib/sanity/blogPosts';
import { postShapeProblem } from '@/lib/sanity/postValidation';

// Tags and keywords are separate (decision.md D043): tags group a post; focus and secondary keywords are SEO phrases.

const UUID = '5e0d2489-cc82-41c3-a606-2e4b9dc7d570';
const studioPost = (over: Record<string, unknown> = {}) => ({
  id: UUID, slug: 'a-valid-test-slug', title: 'A valid test post', seoTitle: '', excerpt: 'x'.repeat(90), category: 'CRM',
  author: 'Aryan Trivedi', authorImage: '/aryan_t.jpeg', status: 'draft', publishedAt: '2026-10-21', updatedAt: '2026-10-21',
  scheduledFor: '', featuredImage: '/images/blog/audit-planning.jpg', imageAlt: 'A photo', tags: ['one', 'two', 'three'],
  focusKeyword: '', secondaryKeywords: [], relatedPlatform: '', featured: false,
  blocks: [{ id: 'aaaa1111', type: 'heading', level: 2, text: 'Heading' }, { id: 'bbbb2222', type: 'text', text: 'Body text.' }],
  createdAt: '2026-10-21T00:00:00.000Z', savedAt: '2026-10-21T00:00:00.000Z', ...over,
});

const codePost = (over: Record<string, unknown> = {}) => ({
  slug: 'kw-probe', title: 'Probe', excerpt: 'Excerpt', category: 'CRM', author: 'A', publishedAt: '2026-10-21', readingTime: '1 min read',
  featuredImage: '/images/blog/audit-planning.jpg', guide: [], content: () => null, ...over,
}) as never;

/* ── parsing ─────────────────────────────────────────────────────────── */

test('keyword lists are trimmed, empty entries dropped and duplicates removed ignoring case', () => {
  assert.deepEqual(parseKeywordList(' one , Two,, one ,TWO,  three  '), ['one', 'Two', 'three']);
  assert.deepEqual(parseKeywordList(''), []);
  assert.deepEqual(normalizeKeywords(['  a ', 'A', '', 'b']), ['a', 'b']);
});

/* ── server validation ───────────────────────────────────────────────── */

test('server validation: 0 to 8 phrases of up to 80 characters pass; more, longer or wrong types are refused', () => {
  assert.equal(postShapeProblem(studioPost()), null);
  assert.equal(postShapeProblem(studioPost({ secondaryKeywords: Array.from({ length: MAX_SECONDARY_KEYWORDS }, (_, i) => `phrase ${i}`) })), null);
  assert.equal(postShapeProblem(studioPost({ secondaryKeywords: ['k'.repeat(MAX_KEYWORD_LENGTH)] })), null);
  for (const bad of [
    Array.from({ length: MAX_SECONDARY_KEYWORDS + 1 }, (_, i) => `phrase ${i}`),
    ['k'.repeat(MAX_KEYWORD_LENGTH + 1)],
    'not an array', [1, 2], [null], [{}], { length: 1 },
  ]) {
    assert.match(postShapeProblem(studioPost({ secondaryKeywords: bad })) ?? '', /at most 8 secondary keywords/, JSON.stringify(bad));
  }
});

test('a post exported before secondary keywords existed (no field at all) is still accepted', () => {
  const old = studioPost();
  delete (old as Record<string, unknown>).secondaryKeywords;
  assert.equal(postShapeProblem(old), null);
  assert.deepEqual(toBlogPostDocument(old as never).secondaryKeywords, []);
});

/* ── stored document: tags preserved, keywords separate ──────────────── */

test('save and load keep tags and keywords apart; the stored keywords are cleaned up', () => {
  const doc = toBlogPostDocument(studioPost({ tags: ['CRM', 'Setup'], focusKeyword: 'email automation', secondaryKeywords: [' a ', 'A', 'b'] }) as never);
  assert.deepEqual(doc.tags, ['CRM', 'Setup']);
  assert.equal(doc.focusKeyword, 'email automation');
  assert.deepEqual(doc.secondaryKeywords, ['a', 'b']);
  const back = fromBlogPostDocument({ ...doc, blocks: doc.blocks });
  assert.deepEqual(back.tags, ['CRM', 'Setup']);
  assert.deepEqual(back.secondaryKeywords, ['a', 'b']);
});

test('an existing stored post (no secondaryKeywords field) loads with its tags and focus keyword untouched and empty secondary keywords', () => {
  const stored = { _id: UUID, _type: 'blogPost', title: 'Old', status: 'published', tags: ['Email marketing automation', 'ActiveCampaign'], focusKeyword: 'Email marketing automation', blocks: [] };
  const post = fromBlogPostDocument(stored);
  assert.deepEqual(post.tags, ['Email marketing automation', 'ActiveCampaign']);
  assert.equal(post.focusKeyword, 'Email marketing automation');
  assert.deepEqual(post.secondaryKeywords, []);
  assert.deepEqual(fromBlogPostDocument({ ...stored, secondaryKeywords: ['ok', 7, null] }).secondaryKeywords, ['ok'], 'non-strings are dropped on read');
});

test('a new post starts with empty keyword fields', () => {
  const post = emptyPost('Title', 'CRM', 'A', '/a.jpg');
  assert.deepEqual(post.tags, []);
  assert.equal(post.focusKeyword, '');
  assert.deepEqual(post.secondaryKeywords, []);
});

/* ── JSON-LD: keywords rule, and everything else unchanged ───────────── */

const keywordsOf = (post: unknown) => (buildBlogJsonLd(post as never)['@graph'] as { '@type': string; keywords?: string }[]).find((n) => n['@type'] === 'Article')!.keywords;

test('JSON-LD keywords: a post with secondary keywords gets focus + secondary, without duplicates', () => {
  assert.equal(keywordsOf(codePost({ tags: ['t1', 't2'], focusKeyword: 'Focus', secondaryKeywords: ['focus', 'two', 'Three'] })), 'Focus, two, Three');
  assert.equal(keywordsOf(codePost({ tags: ['t1'], secondaryKeywords: ['only secondary'] })), 'only secondary');
});

test('JSON-LD keywords: every other post keeps its tags exactly as before', () => {
  assert.equal(keywordsOf(codePost({ tags: ['CRM', 'Client management'] })), 'CRM, Client management', 'code post');
  assert.equal(keywordsOf(codePost({ tags: ['CRM', 'Client management'], focusKeyword: 'Email marketing automation' })), 'CRM, Client management', 'focus keyword only: unchanged');
  assert.equal(keywordsOf(codePost({ tags: ['CRM'], secondaryKeywords: [] })), 'CRM', 'empty secondary list');
  assert.equal(keywordsOf(codePost({ tags: [] })), '', 'same as before: an empty tag list gives an empty string');
  assert.equal(keywordsOf(codePost()), undefined, 'no tags: no keywords property, as before');
  assert.equal(articleKeywords({ tags: ['a', 'b'] }), 'a, b');
});

test('the rest of the Article schema does not depend on keywords', () => {
  const base = codePost({ tags: ['t'] });
  const withKw = codePost({ tags: ['t'], focusKeyword: 'f', secondaryKeywords: ['s'] });
  const strip = (p: unknown) => JSON.stringify(buildBlogJsonLd(p as never)).replace(/"keywords":"[^"]*",?/, '');
  assert.equal(strip(base), strip(withKw));
});

/* ── meta keywords tag: unchanged (still the tags) ───────────────────── */

test('the meta keywords tag and article:tag still come from the tags only', () => {
  for (const post of [codePost({ tags: ['CRM', 'Setup'] }), codePost({ tags: ['CRM', 'Setup'], focusKeyword: 'f', secondaryKeywords: ['s1', 's2'] })]) {
    const meta = buildBlogMetadata(post);
    assert.deepEqual(meta.keywords, ['CRM', 'Setup']);
    assert.deepEqual((meta.openGraph as { tags?: string[] }).tags, ['CRM', 'Setup']);
  }
});

/* ── checklist ───────────────────────────────────────────────────────── */

const labels = (post: unknown) => checklist(post as never, { studio: [], site: [] });
const find = (items: ReturnType<typeof labels>, text: string) => items.find((i) => i.label === text);

test('checklist: no new items for posts without keywords; recommended only, never blocking', () => {
  const none = labels(studioPost());
  assert.ok(!none.some((i) => /secondary/i.test(i.label)));
  const some = labels(studioPost({ focusKeyword: 'email automation', secondaryKeywords: ['a', 'b'] }));
  for (const i of some.filter((x) => /secondary/i.test(x.label))) assert.equal(i.required, false);
});

test('checklist: 2 to 5 secondary keywords, and each must appear in the article', () => {
  const post = (secondary: string[]) => studioPost({ focusKeyword: 'email automation', secondaryKeywords: secondary, blocks: [{ id: 'aaaa1111', type: 'text', text: 'We cover **Email Workflow** setup and drip sequences.' }] });
  assert.equal(find(labels(post([])), 'Secondary keywords: 2 to 5 phrases')?.ok, false);
  assert.equal(find(labels(post(['one'])), 'Secondary keywords: 2 to 5 phrases')?.ok, false);
  assert.equal(find(labels(post(['email workflow', 'drip sequences'])), 'Secondary keywords: 2 to 5 phrases')?.ok, true);
  assert.equal(find(labels(post(['a', 'b', 'c', 'd', 'e', 'f'])), 'Secondary keywords: 2 to 5 phrases')?.ok, false);
  assert.equal(find(labels(post(['email workflow', 'drip sequences'])), 'Each secondary keyword appears in the article')?.ok, true);
  assert.equal(find(labels(post(['email workflow', 'not in the text'])), 'Each secondary keyword appears in the article')?.ok, false);
});
