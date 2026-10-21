import assert from 'node:assert/strict';
import { test } from 'node:test';
import { imageSrcForRender, isAllowedImageSrc, isSiteImagePath, isUsableFeaturedImage } from '@/lib/sanity/image';

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
