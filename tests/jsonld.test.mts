import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { buildBlogJsonLd, serializeJsonLd } from '@/components/blog/blogJsonLd';
import { JsonLd } from '@/components/blog/JsonLd';

// Regression test for the stored-XSS hole in blog JSON-LD (decision.md D031, finding I1):
// post fields come from the blog studio, and JSON.stringify does not escape "<".

const ATTACK = '</script><script>alert(1)</script>';
const COMMENT = '<!-- <script>';
const SEPARATORS = 'line\u2028separator\u2029here';

const post = {
  slug: 'xss-probe',
  title: `Title ${ATTACK}`,
  excerpt: `Excerpt ${COMMENT} ${ATTACK}`,
  category: `Cat ${ATTACK}`,
  author: `Author ${ATTACK}`,
  authorImage: '/aryan_t.jpeg',
  publishedAt: '2026-10-21',
  updatedAt: '2026-10-21',
  readingTime: '1 min read',
  featuredImage: '/images/blog/audit-planning.jpg',
  tags: [`tag ${ATTACK}`, SEPARATORS, 'legit tag'],
  faqs: [
    { q: `Question ${ATTACK}`, a: `Answer ${COMMENT} ${ATTACK}` },
    { q: 'A normal question?', a: 'A normal answer.' },
  ],
  relatedPlatform: 'dubsado',
  content: () => null,
} as never;

const html = renderToStaticMarkup(createElement(JsonLd, { data: buildBlogJsonLd(post) }));

test('the rendered page contains exactly one script element, and it ends where it should', () => {
  assert.equal(html.match(/<script/gi)?.length, 1, 'only the real opening tag');
  assert.equal(html.match(/<\/script/gi)?.length, 1, 'only the real closing tag');
  assert.ok(html.startsWith('<script type="application/ld+json">'));
  assert.ok(html.endsWith('</script>'));
  const inner = html.slice('<script type="application/ld+json">'.length, -'</script>'.length);
  assert.ok(!inner.includes('<'), 'no "<" can appear inside the script body');
  assert.ok(!/[\u2028\u2029]/.test(inner), 'no raw line separators');
});

test('negative control: the old bare JSON.stringify embedding WOULD break out of the script', () => {
  const unsafe = `<script type="application/ld+json">${JSON.stringify(buildBlogJsonLd(post))}</script>`;
  assert.ok((unsafe.match(/<\/script/gi)?.length ?? 0) > 1, 'the attack string closes the script early');
});

test('the escaped JSON still parses to exactly the original data (nothing is lost or changed)', () => {
  const data = buildBlogJsonLd(post);
  const parsed = JSON.parse(serializeJsonLd(data));
  assert.deepEqual(parsed, JSON.parse(JSON.stringify(data)));
  const article = parsed['@graph'].find((n: { '@type': string }) => n['@type'] === 'Article');
  assert.equal(article.headline, post.title);
  assert.equal(article.author.name, `Author ${ATTACK}`);
});

test('legitimate structured data is intact: Article, BreadcrumbList and FAQPage', () => {
  const parsed = JSON.parse(serializeJsonLd(buildBlogJsonLd(post)));
  const types = parsed['@graph'].map((n: { '@type': string }) => n['@type']);
  assert.deepEqual(types, ['Article', 'BreadcrumbList', 'FAQPage']);
  const article = parsed['@graph'][0];
  assert.equal(article.datePublished, '2026-10-21');
  assert.equal(article.mainEntityOfPage['@id'], 'https://www.sagekite.com/blog/xss-probe');
  assert.deepEqual(article.about, { '@id': 'https://www.sagekite.com/platforms/dubsado/#service' });
  const faq = parsed['@graph'][2];
  assert.equal(faq.mainEntity.length, 2);
  assert.equal(faq.mainEntity[1].name, 'A normal question?');
  assert.equal(faq.mainEntity[1].acceptedAnswer.text, 'A normal answer.');
  assert.equal(faq.mainEntity[0].name, `Question ${ATTACK}`, 'hostile text is kept as text, not executed');
});

test('a post without FAQs gets no FAQPage, and normal text is unchanged', () => {
  const plain = { ...(post as object), title: 'Plain title', faqs: undefined } as never;
  const parsed = JSON.parse(serializeJsonLd(buildBlogJsonLd(plain)));
  assert.deepEqual(parsed['@graph'].map((n: { '@type': string }) => n['@type']), ['Article', 'BreadcrumbList']);
  assert.equal(parsed['@graph'][0].headline, 'Plain title');
});

test('other characters that matter in HTML are not turned into something executable', () => {
  const out = serializeJsonLd({ s: '<img src=x onerror=alert(1)> & > "quoted"' });
  assert.ok(!out.includes('<'));
  assert.deepEqual(JSON.parse(out), { s: '<img src=x onerror=alert(1)> & > "quoted"' });
});
