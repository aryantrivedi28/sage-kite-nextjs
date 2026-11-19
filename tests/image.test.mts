import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StudioArticle } from '@/components/blog-studio/StudioArticle';
import type { StudioBlock } from '@/components/blog-studio/types';
import { buildBlogJsonLd } from '@/components/blog/blogJsonLd';
import { buildBlogMetadata } from '@/components/blog/blogMetadata';
import {
  imageSrcForRender, isAllowedImageSrc, isSanityImage, isSiteImagePath, isUsableFeaturedImage, namedImageUrl, sanityImageSize, sanityImageUrl, shareImageUrl,
} from '@/lib/sanity/image';

// Image source allowlist (decision.md D032, finding I7): a post may only use files on this site or
// uploads to this project's Sanity CDN, so a crafted request cannot plant a tracking pixel.

process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'lk42drbi';
const HASH = 'f4ca2b835cf81e68220d8478aa94787abce9051b';
const SANITY_OK = `https://cdn.sanity.io/images/lk42drbi/production/${HASH}-1200x675.webp`;

test('site image files and this project\'s Sanity uploads are allowed', () => {
  for (const src of ['/images/blog/audit-planning.jpg', '/aryan_t.jpeg', '/images/case-studies/get-daily/home.webp', '/images/blog/placeholder.svg', SANITY_OK, `https://cdn.sanity.io/images/lk42drbi/development/${HASH}-100x100.png`]) {
    assert.equal(isAllowedImageSrc(src), true, src);
  }
});

test('tracking pixels, other hosts and every other kind of source are refused', () => {
  const bad = [
    'https://tracker.example/pixel.gif?uid=42', 'http://tracker.example/p.png', '//tracker.example/p.png', 'tracker.example/p.png',
    '/images/blog/photo.jpg?uid=42', '/images/blog/photo.jpg#x', '/\\tracker.example/p.png', '/../../etc/passwd.png', '/images/../secret.jpg',
    '/images/blog/photo', '/images/blog/photo.php', '/images/blog/photo.jpg.exe', '/api/anything.png', '/_next/image.png', '/images', '/images/', '/images/../x.png', '/other/dir/photo.png', '',
    'javascript:alert(1)', 'data:image/png;base64,AAAA', 'data:image/svg+xml,<svg onload=alert(1)>', 'file:///etc/passwd', 'blob:https://x/1',
    'https://cdn.sanity.io/images/otherproject/production/' + HASH + '-1x1.png',
    SANITY_OK + '?w=1', SANITY_OK + '#x', 'https://cdn.sanity.io.evil.example/images/lk42drbi/production/' + HASH + '-1x1.png',
    'https://evil.example/https://cdn.sanity.io/images/lk42drbi/production/' + HASH + '-1x1.png',
    'http://cdn.sanity.io/images/lk42drbi/production/' + HASH + '-1x1.png',
  ];
  for (const src of bad) assert.equal(isAllowedImageSrc(src), false, src);
});

test('a Sanity upload is refused when the project ID is not configured', () => {
  const saved = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  assert.equal(isAllowedImageSrc(SANITY_OK), false);
  assert.equal(isSiteImagePath('/images/a.jpg'), true);
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = saved;
});

test('featured images use the same rule', () => {
  assert.equal(isUsableFeaturedImage('https://tracker.example/p.png'), false);
  assert.equal(isUsableFeaturedImage('/images/blog/x.jpg'), true);
});

test('published pages render only allowed images; the studio preview also shows images picked in this browser', () => {
  const dataPng = 'data:image/png;base64,iVBORw0KGgo=';
  assert.equal(imageSrcForRender('/images/blog/x.jpg'), '/images/blog/x.jpg');
  assert.equal(imageSrcForRender('https://tracker.example/p.png'), null);
  assert.equal(imageSrcForRender('https://tracker.example/p.png', true), null, 'even in the preview');
  assert.equal(imageSrcForRender(dataPng), null, 'never on a published page');
  assert.equal(imageSrcForRender(dataPng, true), dataPng, 'only in the studio preview');
  assert.equal(imageSrcForRender('data:image/svg+xml;base64,PHN2Zz4=', true), null, 'no SVG data URLs');
  assert.equal(imageSrcForRender('javascript:alert(1)', true), null);
});

/* ── Vanity file names (decision.md D061) ─────────────────────────────── */

const SANITY_PNG = `https://cdn.sanity.io/images/lk42drbi/production/${HASH}-800x600.png`;

test('a Sanity image gets a readable name with its own extension; other sources are unchanged', () => {
  assert.equal(namedImageUrl(SANITY_OK, 'crm-for-coaches'), `${SANITY_OK}/crm-for-coaches.webp`);
  assert.equal(namedImageUrl(SANITY_PNG, 'crm-for-coaches-2'), `${SANITY_PNG}/crm-for-coaches-2.png`);
  for (const src of ['/images/blog/audit-planning.jpg', '/aryan_t.jpeg', 'https://tracker.example/p.png', '', 'data:image/png;base64,AAAA']) {
    assert.equal(namedImageUrl(src, 'crm-for-coaches'), src, src);
  }
  const saved = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  assert.equal(namedImageUrl(SANITY_OK, 'x'), SANITY_OK, 'unchanged when Sanity is not configured');
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = saved;
});

test('odd names become a safe name or the fallback "image"', () => {
  const name = (n: string) => namedImageUrl(SANITY_OK, n).slice(SANITY_OK.length + 1);
  assert.equal(name('CRM for Coaches & Consultants!'), 'crm-for-coaches-consultants.webp');
  assert.equal(name('  --Café--  '), 'caf.webp');
  assert.equal(name('../../etc/passwd'), 'etc-passwd.webp');
  assert.equal(name('a?b#c/d'), 'a-b-c-d.webp', 'no query, fragment or extra path segment');
  assert.equal(name(''), 'image.webp');
  assert.equal(name('???'), 'image.webp');
  assert.equal(name('x'.repeat(200)), `${'x'.repeat(80)}.webp`);
});

test('the name goes before the query string (Sanity returns 400 when it comes after)', () => {
  assert.equal(sanityImageUrl(SANITY_OK, { w: 400, fit: 'max' }, 'my-post'), `${SANITY_OK}/my-post.webp?w=400&fit=max&auto=format`);
  assert.equal(sanityImageUrl(SANITY_OK, { w: 400, fit: 'max' }), `${SANITY_OK}?w=400&fit=max&auto=format`, 'no name: unchanged');
  assert.equal(shareImageUrl(SANITY_OK, 'my-post'), `${SANITY_OK}/my-post.webp?w=1200&h=675&fit=crop&fm=jpg`);
  assert.equal(shareImageUrl(SANITY_OK), `${SANITY_OK}?w=1200&h=675&fit=crop&fm=jpg`);
  assert.equal(shareImageUrl('/images/blog/x.jpg', 'my-post'), 'https://www.sagekite.com/images/blog/x.jpg');
});

test('a vanity URL is never accepted as a stored image source', () => {
  const vanity = namedImageUrl(SANITY_OK, 'my-post');
  assert.equal(isSanityImage(vanity), false);
  assert.equal(isAllowedImageSrc(vanity), false);
  assert.equal(isUsableFeaturedImage(vanity), false);
  assert.equal(imageSrcForRender(vanity), null);
  assert.equal(sanityImageSize(vanity), null);
  assert.equal(namedImageUrl(vanity, 'again'), vanity, 'never named twice');
});

const img = (id: string, src: string): StudioBlock => ({ id, type: 'image', src, alt: `Alt ${id}`, caption: '' }) as StudioBlock;
const render = (blocks: StudioBlock[], imageName?: string) =>
  renderToStaticMarkup(createElement(StudioArticle, { blocks, imageName }));

test('article images are named <slug>-2, <slug>-3, ... in reading order, counting only Sanity images', () => {
  const second = SANITY_OK.replace('1200x675', '640x480');
  const blocks = [
    img('a1', SANITY_OK),
    img('b2', '/images/blog/audit-planning.jpg'),
    img('c3', 'https://tracker.example/p.png'),
    img('d4', SANITY_PNG),
    img('e5', second),
  ];
  const html = render(blocks, 'crm-for-coaches');
  const srcs = [...html.matchAll(/ src="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&'));
  assert.deepEqual(srcs, [
    `${SANITY_OK}/crm-for-coaches-2.webp?w=1440&fit=max&auto=format`,
    '/images/blog/audit-planning.jpg',
    `${SANITY_PNG}/crm-for-coaches-3.png?w=1440&fit=max&auto=format`,
    `${second}/crm-for-coaches-4.webp?w=1440&fit=max&auto=format`,
  ]);
  const srcset = /srcSet="([^"]+)"/i.exec(html)![1].replace(/&amp;/g, '&');
  assert.equal(srcset, [720, 1080, 1440].map((w) => `${SANITY_OK}/crm-for-coaches-2.webp?w=${w}&fit=max&auto=format ${w}w`).join(', '));
  assert.ok(!html.includes('tracker.example'), 'a refused source is still not rendered');
});

test('without a name (the studio preview) article image URLs are unchanged', () => {
  const html = render([img('a1', SANITY_OK)]).replace(/&amp;/g, '&');
  assert.ok(html.includes(` src="${SANITY_OK}?w=1440&fit=max&auto=format"`));
  assert.ok(!html.includes('.webp/'));
});

const blogPost = (featuredImage: string) => ({
  slug: 'crm-for-coaches', title: 'CRM for coaches', excerpt: 'Excerpt', category: 'CRM', author: 'Aryan Trivedi',
  publishedAt: '2026-10-21', readingTime: '1 min read', featuredImage, guide: [], content: () => null,
}) as never;

test('share image and Article JSON-LD use the named, absolute URL; code post images are unchanged', () => {
  const meta = buildBlogMetadata(blogPost(SANITY_OK)) as { openGraph: { images: { url: string }[] }; twitter: { images: unknown } };
  const share = `${SANITY_OK}/crm-for-coaches.webp?w=1200&h=675&fit=crop&fm=jpg`;
  assert.equal(meta.openGraph.images[0].url, share);
  assert.ok(JSON.stringify(meta.twitter.images).includes(share));
  const ld = JSON.stringify(buildBlogJsonLd(blogPost(SANITY_OK)));
  assert.ok(ld.includes(`"image":["${SANITY_OK}/crm-for-coaches.webp"]`), ld);

  const codeMeta = buildBlogMetadata(blogPost('/images/blog/audit-planning.jpg')) as { openGraph: { images: { url: string }[] } };
  assert.equal(codeMeta.openGraph.images[0].url, 'https://www.sagekite.com/images/blog/audit-planning.jpg');
  assert.ok(JSON.stringify(buildBlogJsonLd(blogPost('/images/blog/audit-planning.jpg'))).includes('"image":["https://www.sagekite.com/images/blog/audit-planning.jpg"]'));
});
