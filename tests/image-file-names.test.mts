import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StudioArticle } from '@/components/blog-studio/StudioArticle';
import {
  MAX_IMAGE_FILE_NAME, articleImageNames, checklist, duplicateImageFileNames, emptyPost, newBlock, suggestedImageFileName, withImageFileNameDefaults,
} from '@/components/blog-studio/postUtils';
import type { StudioBlock, StudioPost } from '@/components/blog-studio/types';
import { buildBlogJsonLd } from '@/components/blog/blogJsonLd';
import { buildBlogMetadata } from '@/components/blog/blogMetadata';
import { chosenImageName, featuredImageName, liveImageFileName, namedImageUrl } from '@/lib/sanity/image';
import { uploadFileName } from '@/lib/sanity/imageUpload';
import { ImageFileNameField, liveFileNameNote } from '@/components/blog-studio/fields';
import { fromBlogPostDocument, toBlogPostDocument } from '@/lib/sanity/blogPosts';
import { postShapeProblem } from '@/lib/sanity/postValidation';

// Image file names chosen in the studio (decision.md D062, D063), with the D061 slug names as the fallback.

process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'lk42drbi';
const HASH = 'f4ca2b835cf81e68220d8478aa94787abce9051b';
const SAN = (size: string, ext = 'webp') => `https://cdn.sanity.io/images/lk42drbi/production/${HASH}-${size}.${ext}`;
const UUID = '5e0d2489-cc82-41c3-a606-2e4b9dc7d570';

const img = (id: string, src: string, fileName = ''): StudioBlock => ({ id, type: 'image', src, alt: `Alt ${id}`, caption: '', fileName });

const studioPost = (over: Partial<StudioPost> = {}): StudioPost => ({
  ...emptyPost('A valid test post', 'CRM', 'Aryan Trivedi', '/aryan_t.jpeg'),
  id: UUID, slug: 'crm-for-coaches', excerpt: 'x'.repeat(90), featuredImage: SAN('1600x900'), imageAlt: 'A photo',
  tags: ['one', 'two', 'three'], blocks: [{ id: 'aaaa1111', type: 'heading', level: 2, text: 'Heading' }],
  createdAt: '2026-10-21T00:00:00.000Z', savedAt: '2026-10-21T00:00:00.000Z',
  ...over,
});

/* ── validation ──────────────────────────────────────────────────────── */

test('both fields are optional strings of at most 80 characters', () => {
  assert.equal(MAX_IMAGE_FILE_NAME, 80);
  assert.equal(postShapeProblem(studioPost({ imageFileName: 'n'.repeat(80), blocks: [img('aaaa1111', SAN('800x600'), 'b'.repeat(80))] })), null);
  assert.match(postShapeProblem(studioPost({ imageFileName: 'n'.repeat(81) })) ?? '', /at most 80 characters/);
  assert.match(postShapeProblem(studioPost({ blocks: [img('aaaa1111', SAN('800x600'), 'b'.repeat(81))] })) ?? '', /at most 80 characters/);
  for (const bad of [42, null, ['x'], { a: 1 }]) {
    assert.ok(postShapeProblem(studioPost({ imageFileName: bad as never })), JSON.stringify(bad));
    assert.ok(postShapeProblem(studioPost({ blocks: [{ ...img('aaaa1111', ''), fileName: bad } as never] })), JSON.stringify(bad));
  }
  // A hostile name is accepted as text (it is only ever rendered cleaned).
  assert.equal(postShapeProblem(studioPost({ imageFileName: '../../x?y#z /é', blocks: [img('aaaa1111', '', '<script>')] })), null);
});

test('an old export or Sanity document without the fields is accepted and reads as empty', () => {
  const old = studioPost({ blocks: [img('aaaa1111', SAN('800x600'))] }) as unknown as Record<string, unknown>;
  delete old.imageFileName;
  delete (old.blocks as Record<string, unknown>[])[0].fileName;
  assert.equal(postShapeProblem(old), null);
  const normalized = withImageFileNameDefaults(old as never);
  assert.equal(normalized.imageFileName, '');
  assert.equal((normalized.blocks[0] as Extract<StudioBlock, { type: 'image' }>).fileName, '');
  // Written to Sanity with empty strings, read back the same.
  const doc = toBlogPostDocument(old as never);
  assert.equal(doc.imageFileName, '');
  assert.equal((doc.blocks[0] as { fileName: string }).fileName, '');

  const stored = { ...doc } as Record<string, unknown>;
  delete stored.imageFileName;
  stored.blocks = [{ _key: 'aaaa1111', type: 'image', src: SAN('800x600'), alt: 'a', caption: '' }];
  const back = fromBlogPostDocument(stored);
  assert.equal(back.imageFileName, '');
  assert.equal((back.blocks[0] as Extract<StudioBlock, { type: 'image' }>).fileName, '');
});

test('the Sanity round trip keeps both names, trimmed, exactly as typed otherwise', () => {
  const post = studioPost({ imageFileName: '  My Hero Shot  ', blocks: [img('aaaa1111', SAN('800x600'), ' Pipeline Stages ')] });
  const doc = toBlogPostDocument(post);
  assert.equal(doc.imageFileName, 'My Hero Shot');
  assert.equal((doc.blocks[0] as { fileName: string }).fileName, 'Pipeline Stages');
  const back = fromBlogPostDocument(doc as never);
  assert.equal(back.imageFileName, 'My Hero Shot');
  assert.equal((back.blocks[0] as Extract<StudioBlock, { type: 'image' }>).fileName, 'Pipeline Stages');
});

test('new posts and new image blocks start with empty names', () => {
  assert.equal(emptyPost('T', 'CRM', 'A', '/a.jpg').imageFileName, '');
  const b = newBlock('image') as Extract<StudioBlock, { type: 'image' }>;
  assert.equal(b.fileName, '');
});

/* ── rendering ───────────────────────────────────────────────────────── */

const blogPost = (over: Record<string, unknown> = {}) => ({
  slug: 'crm-for-coaches', title: 'CRM for coaches', excerpt: 'Excerpt', category: 'CRM', author: 'Aryan Trivedi',
  publishedAt: '2026-10-21', readingTime: '1 min read', featuredImage: SAN('1600x900'), guide: [], content: () => null, ...over,
}) as never;

test('featured image: a set name is used in og/twitter, JSON-LD and the hero/cards URL; empty falls back to the slug', () => {
  const named = blogPost({ imageFileName: 'Coaching CRM Dashboard' });
  assert.equal(featuredImageName(named), 'Coaching CRM Dashboard');
  assert.equal(namedImageUrl(SAN('1600x900'), featuredImageName(named)), `${SAN('1600x900')}/coaching-crm-dashboard.webp`);
  const meta = buildBlogMetadata(named) as { openGraph: { images: { url: string }[] }; twitter: { images: unknown } };
  const share = `${SAN('1600x900')}/coaching-crm-dashboard.webp?w=1200&h=675&fit=crop&fm=jpg`;
  assert.equal(meta.openGraph.images[0].url, share);
  assert.ok(JSON.stringify(meta.twitter.images).includes(share));
  assert.ok(JSON.stringify(buildBlogJsonLd(named)).includes(`"image":["${SAN('1600x900')}/coaching-crm-dashboard.webp"]`));

  for (const empty of [undefined, '', '   ']) {
    const p = blogPost({ imageFileName: empty });
    assert.equal(featuredImageName(p), 'crm-for-coaches');
    assert.equal((buildBlogMetadata(p) as { openGraph: { images: { url: string }[] } }).openGraph.images[0].url, `${SAN('1600x900')}/crm-for-coaches.webp?w=1200&h=675&fit=crop&fm=jpg`);
  }
  // A code post's site image never gets a name.
  const code = blogPost({ featuredImage: '/images/blog/audit-planning.jpg', imageFileName: 'ignored' });
  assert.equal((buildBlogMetadata(code) as { openGraph: { images: { url: string }[] } }).openGraph.images[0].url, 'https://www.sagekite.com/images/blog/audit-planning.jpg');
});

test('hostile names only ever become a-z, 0-9 and dashes, or the fallback', () => {
  const cases: [string, string][] = [
    ['../../etc/passwd', 'etc-passwd'], ['a?b#c/d', 'a-b-c-d'], ['  Spaces  And CAPS ', 'spaces-and-caps'],
    ['Café Ünïcode', 'caf-n-code'], ['<script>alert(1)</script>', 'script-alert-1-script'], ['???', 'image'], ['日本語', 'image'],
  ];
  for (const [input, clean] of cases) {
    assert.equal(namedImageUrl(SAN('800x600'), input), `${SAN('800x600')}/${clean}.webp`, input);
    assert.equal(liveImageFileName(SAN('800x600', 'png'), input), `${clean}.png`, input);
  }
  assert.equal(liveImageFileName('/images/blog/x.jpg', 'Hero'), 'hero.webp', 'not a Sanity upload: .webp');
});

const render = (blocks: StudioBlock[], slug = 'crm-for-coaches') =>
  [...renderToStaticMarkup(createElement(StudioArticle, { blocks, imageName: slug })).matchAll(/ src="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&'));

test('article images: a set name is used, empty ones keep <slug>-<n>, and naming one never renumbers the others', () => {
  const a = SAN('800x600'), b = SAN('640x480'), c = SAN('320x200', 'png');
  const unnamed = [img('aaaa1111', a), img('bbbb2222', '/images/blog/audit-planning.jpg'), img('cccc3333', b), img('dddd4444', c)];
  assert.deepEqual(render(unnamed), [
    `${a}/crm-for-coaches-2.webp?w=1440&fit=max&auto=format`,
    '/images/blog/audit-planning.jpg',
    `${b}/crm-for-coaches-3.webp?w=1440&fit=max&auto=format`,
    `${c}/crm-for-coaches-4.png?w=1440&fit=max&auto=format`,
  ]);
  const oneNamed = [img('aaaa1111', a), img('bbbb2222', '/images/blog/audit-planning.jpg', 'ignored'), img('cccc3333', b, 'Pipeline Stages'), img('dddd4444', c)];
  assert.deepEqual(render(oneNamed), [
    `${a}/crm-for-coaches-2.webp?w=1440&fit=max&auto=format`,
    '/images/blog/audit-planning.jpg',
    `${b}/pipeline-stages.webp?w=1440&fit=max&auto=format`,
    `${c}/crm-for-coaches-4.png?w=1440&fit=max&auto=format`,
  ], 'the fourth image is still -4');
  const hostile = render([img('aaaa1111', a, '../evil?x=1#y')]);
  assert.deepEqual(hostile, [`${a}/evil-x-1-y.webp?w=1440&fit=max&auto=format`]);
  // srcset uses the same name.
  const html = renderToStaticMarkup(createElement(StudioArticle, { blocks: [img('aaaa1111', a, 'My Pic')], imageName: 'crm-for-coaches' })).replace(/&amp;/g, '&');
  assert.ok(html.includes(`${a}/my-pic.webp?w=720&fit=max&auto=format 720w`));
});

test('the studio preview (no imageName) stays unnamed even when names are set', () => {
  const html = renderToStaticMarkup(createElement(StudioArticle, { blocks: [img('aaaa1111', SAN('800x600'), 'Named')], preview: true })).replace(/&amp;/g, '&');
  assert.ok(html.includes(` src="${SAN('800x600')}?w=1440&fit=max&auto=format"`));
  assert.ok(!html.includes('.webp/'));
});

test('articleImageNames gives fallbacks for the editor, numbered as on the page', () => {
  const names = articleImageNames([img('aaaa1111', SAN('800x600'), 'x'), img('bbbb2222', ''), img('cccc3333', SAN('640x480'))], 'slug');
  assert.deepEqual(Object.fromEntries(names), {
    aaaa1111: { name: 'x', fallback: 'slug-2', sanity: true },
    bbbb2222: { name: 'slug-3', fallback: 'slug-3', sanity: false },
    cccc3333: { name: 'slug-3', fallback: 'slug-3', sanity: true },
  });
});

/* ── prefill ─────────────────────────────────────────────────────────── */

test('prefill keeps real names (cleaned) and drops generic camera / OS names', () => {
  const real: [string, string][] = [
    ['CRM Dashboard Setup.jpg', 'crm-dashboard-setup'], ['My Test Hero.jpg', 'my-test-hero'], ['pipeline_stages_v2.png', 'pipeline-stages-v2'],
    ['photo-booth-crm.webp', 'photo-booth-crm'], ['Image of a sales pipeline.png', 'image-of-a-sales-pipeline'], ['new-client-onboarding.jpg', 'new-client-onboarding'],
  ];
  for (const [file, name] of real) assert.equal(suggestedImageFileName(file), name, file);
  const generic = [
    'image.png', 'IMG.jpg', 'img_1234.jpg', 'IMG_20231005_101500.jpg', 'DSC01234.JPG', 'dsc_1234.jpg', 'PXL_20231005_123456789.jpg',
    'PXL_20231005_123456789.MP.jpg', 'blob', 'photo.jpg', 'Photo 2.jpg', 'untitled.png', 'Untitled design (3).png', 'pasted.webp',
    'Pasted Graphic 2.png', 'Screenshot 2026-10-03 at 10.15.00.png', 'Screen Shot 2020-01-01 at 1.00.00 PM.png',
    'WhatsApp Image 2026-10-01 at 12.00.00.jpeg', '20261003_101500.jpg', '1234.png', '---.png', '.png', '',
  ];
  for (const file of generic) assert.equal(suggestedImageFileName(file), '', file);
});

/* ── checklist ───────────────────────────────────────────────────────── */

const LABEL = 'Image file names are different from each other';
const has = (p: StudioPost) => checklist(p, { studio: [], site: [] }).some((c) => c.label === LABEL && !c.ok && !c.required);

test('the duplicate-name item appears only when two Sanity images would get the same name', () => {
  const a = SAN('800x600'), b = SAN('640x480');
  assert.equal(has(studioPost({ blocks: [img('aaaa1111', a), img('bbbb2222', b)] })), false, 'fallbacks differ');
  assert.equal(has(studioPost({ blocks: [img('aaaa1111', a, 'Same'), img('bbbb2222', b, 'same')] })), true, 'two typed names clean to the same');
  assert.equal(has(studioPost({ imageFileName: 'crm-for-coaches-2', blocks: [img('aaaa1111', a)] })), true, 'featured name equals a fallback');
  assert.equal(has(studioPost({ blocks: [img('aaaa1111', a, 'crm-for-coaches')] })), true, 'article name equals the featured fallback');
  assert.equal(has(studioPost({ blocks: [img('aaaa1111', a, 'same'), img('bbbb2222', SAN('640x480', 'png'), 'same')] })), false, 'different extensions');
  assert.equal(has(studioPost({ blocks: [img('aaaa1111', a, 'same'), img('bbbb2222', '/images/blog/x.jpg', 'same')] })), false, 'a site image is never named');
  assert.equal(has(studioPost({ featuredImage: '/images/blog/x.jpg', blocks: [img('aaaa1111', a, 'crm-for-coaches')] })), false, 'site featured image');
  assert.deepEqual(duplicateImageFileNames(studioPost({ blocks: [img('aaaa1111', a, 'x'), img('bbbb2222', b, 'X'), img('cccc3333', SAN('1x1'), 'x')] })), ['x.webp']);
});

/* ── D063: a typed name that cleans to nothing falls back; no live-name line for site images ── */

const NOTHING = ['!!!', '---', '   ', 'हिंदी नाम'];

test('a featured name that cleans to nothing falls back to the slug everywhere', () => {
  for (const typed of NOTHING) {
    const p = blogPost({ imageFileName: typed });
    assert.equal(featuredImageName(p), 'crm-for-coaches', typed);
    assert.equal(chosenImageName(typed, 'fallback'), 'fallback', typed);
    const meta = buildBlogMetadata(p) as { openGraph: { images: { url: string }[] } };
    assert.equal(meta.openGraph.images[0].url, `${SAN('1600x900')}/crm-for-coaches.webp?w=1200&h=675&fit=crop&fm=jpg`, typed);
    assert.ok(JSON.stringify(buildBlogJsonLd(p)).includes(`"image":["${SAN('1600x900')}/crm-for-coaches.webp"]`), typed);
  }
  // A name that does clean is still used.
  assert.equal(namedImageUrl(SAN('1600x900'), featuredImageName(blogPost({ imageFileName: 'CRM Setup!' }))), `${SAN('1600x900')}/crm-setup.webp`);
});

test('an article name that cleans to nothing falls back to <slug>-<n>; the others keep their numbers', () => {
  const a = SAN('800x600'), b = SAN('640x480'), c = SAN('320x200');
  for (const typed of NOTHING) {
    assert.deepEqual(render([img('aaaa1111', a), img('bbbb2222', b, typed), img('cccc3333', c, 'CRM Setup!')]), [
      `${a}/crm-for-coaches-2.webp?w=1440&fit=max&auto=format`,
      `${b}/crm-for-coaches-3.webp?w=1440&fit=max&auto=format`,
      `${c}/crm-setup.webp?w=1440&fit=max&auto=format`,
    ], typed);
  }
});

test('the duplicate-name item treats a cleaned-to-nothing name as its fallback', () => {
  const a = SAN('800x600'), b = SAN('640x480');
  // "!!!" falls back to crm-for-coaches-3, which the first image typed explicitly.
  assert.equal(has(studioPost({ blocks: [img('aaaa1111', a, 'crm-for-coaches-3'), img('bbbb2222', b, '!!!')] })), true);
  // Before D063 both would have been "image.webp"; now they fall back to different names.
  assert.equal(has(studioPost({ blocks: [img('aaaa1111', a, '!!!'), img('bbbb2222', b, 'हिंदी')] })), false);
  // A featured "---" is the slug, which an article image named after the slug collides with.
  assert.equal(has(studioPost({ imageFileName: '---', blocks: [img('aaaa1111', a, 'crm-for-coaches')] })), true);
});

test('upload names keep the "image" fallback', () => {
  assert.equal(uploadFileName('!!!.png', 'image/png'), 'image.png');
  assert.equal(uploadFileName('हिंदी.webp', 'image/webp'), 'image.webp');
});

const field = (value: string, fallback: string, src: string) =>
  renderToStaticMarkup(createElement(ImageFileNameField, { value, fallback, src, onChange: () => {} }));
const liveLine = (html: string) => /Live file name: ([^<]+)/.exec(html)?.[1] ?? null;

test('ImageFileNameField: the live-name line shows the name the page uses, and none for site images', () => {
  // Site files are never renamed: no line, whatever is typed.
  assert.equal(liveLine(field('Hero shot', 'crm-for-coaches', '/images/blog/x.jpg')), null);
  assert.equal(liveLine(field('Hero shot', 'crm-for-coaches', '/aryan_t.jpeg')), null);
  // A Sanity upload (its own extension), no image yet, a data: URL (uploaded as WebP on save).
  assert.equal(liveLine(field('Hero shot', 'crm-for-coaches', SAN('800x600', 'png'))), 'hero-shot.png');
  assert.equal(liveLine(field('Hero shot', 'crm-for-coaches', '')), 'hero-shot.webp');
  assert.equal(liveLine(field('Hero shot', 'crm-for-coaches', 'data:image/png;base64,AAAA')), 'hero-shot.webp');
  // A name that cleans to nothing shows the fallback the page will use.
  assert.equal(liveLine(field('!!!', 'crm-for-coaches', SAN('800x600'))), 'crm-for-coaches.webp');
  assert.equal(liveLine(field('हिंदी', 'crm-for-coaches-3', SAN('800x600'))), 'crm-for-coaches-3.webp');
  // Nothing typed: no line. Label, hint and placeholder unchanged.
  const empty = field('', 'crm-for-coaches', SAN('800x600'));
  assert.equal(liveLine(empty), null);
  assert.ok(empty.includes('Image file name (optional)'));
  assert.ok(empty.includes('The image&#x27;s file name on the live site, for search engines. Leave empty to use the post&#x27;s slug.'));
  assert.ok(empty.includes('placeholder="crm-for-coaches"'));
  assert.equal(liveFileNameNote('x', 'f', '/images/blog/x.jpg'), undefined);
});
