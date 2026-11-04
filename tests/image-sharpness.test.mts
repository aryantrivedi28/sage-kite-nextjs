import assert from 'node:assert/strict';
import { test } from 'node:test';
import { checklist, emptyPost, resizedImageType } from '@/components/blog-studio/postUtils';
import type { StudioBlock, StudioPost } from '@/components/blog-studio/types';

// Sharper blog images (decision.md D064): the too-small-image checklist items and the resize output type.

process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'lk42drbi';
const HASH = 'f4ca2b835cf81e68220d8478aa94787abce9051b';
const SAN = (size: string) => `https://cdn.sanity.io/images/lk42drbi/development/${HASH}-${size}.webp`;

const FEATURED = 'Featured image is at least 1600px wide';
const ARTICLE = 'Images in the article are at least 1440px wide';

const img = (id: string, src: string): StudioBlock => ({ id, type: 'image', src, alt: `Alt ${id}`, caption: '', fileName: '' });

const post = (featuredImage: string, images: string[] = []): StudioPost => ({
  ...emptyPost('A valid test post', 'CRM', 'Aryan Trivedi', '/aryan_t.jpeg'),
  slug: 'crm-for-coaches', excerpt: 'x'.repeat(90), featuredImage, imageAlt: 'A photo',
  blocks: [{ id: 'aaaa1111', type: 'heading', level: 2, text: 'Heading' }, ...images.map((src, i) => img(`bbbb000${i}`, src))],
});

/** The item with this label: undefined when it is not shown. */
const item = (p: StudioPost, label: string) => checklist(p, { studio: [], site: [] }).find((c) => c.label === label);

test('featured image: shown (not required) only for a Sanity upload narrower than 1600px', () => {
  assert.deepEqual(item(post(SAN('891x520')), FEATURED), { label: FEATURED, ok: false, required: false });
  assert.deepEqual(item(post(SAN('1599x900')), FEATURED), { label: FEATURED, ok: false, required: false });
  assert.equal(item(post(SAN('1600x900')), FEATURED), undefined);
  assert.equal(item(post(SAN('2000x1125')), FEATURED), undefined);
  assert.equal(item(post('/images/blog/audit-planning.jpg'), FEATURED), undefined, 'site files are not measured');
  assert.equal(item(post(''), FEATURED), undefined);
  assert.equal(item(post('data:image/webp;base64,AAAA'), FEATURED), undefined, 'not uploaded yet');
});

test('article images: shown (not required) only when a Sanity upload is narrower than 1440px', () => {
  assert.deepEqual(item(post(SAN('1600x900'), [SAN('1200x675')]), ARTICLE), { label: ARTICLE, ok: false, required: false });
  assert.deepEqual(item(post(SAN('1600x900'), [SAN('2000x1125'), SAN('891x520')]), ARTICLE), { label: ARTICLE, ok: false, required: false }, 'any one is enough');
  assert.equal(item(post(SAN('1600x900'), [SAN('1440x810')]), ARTICLE), undefined);
  assert.equal(item(post(SAN('1600x900'), ['/images/blog/audit-planning.jpg', '']), ARTICLE), undefined, 'site files and empty images are not measured');
  assert.equal(item(post(SAN('1600x900')), ARTICLE), undefined, 'no article images');
  // The featured image does not count as an article image, and vice versa.
  assert.equal(item(post(SAN('891x520')), ARTICLE), undefined);
  assert.equal(item(post(SAN('1600x900'), [SAN('891x520')]), FEATURED), undefined);
});

test('too-small images never block publishing', () => {
  const p = post(SAN('891x520'), [SAN('891x520')]);
  const items = checklist(p, { studio: [], site: [] });
  assert.ok(items.some((c) => c.label === FEATURED) && items.some((c) => c.label === ARTICLE));
  assert.ok(items.filter((c) => c.required).every((c) => c.ok), 'every required item still passes');
});

test('resize output: WebP when the browser encoded WebP, JPEG otherwise', () => {
  assert.equal(resizedImageType('image/webp'), 'image/webp');
  assert.equal(resizedImageType('image/png'), 'image/jpeg', "Safari's silent PNG fallback");
  assert.equal(resizedImageType(''), 'image/jpeg');
});
