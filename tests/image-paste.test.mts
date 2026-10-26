import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  IMAGE_ADDRESS_MESSAGE,
  imageAddressOnly,
  imageFromClipboard,
  unsupportedImage,
} from '@/components/blog-studio/articlePaste';
import { StudioArticle } from '@/components/blog-studio/StudioArticle';
import type { StudioBlock } from '@/components/blog-studio/types';
import { FIXTURES } from './fixtures/images.mts';

// Pasting a single image, and the preview's placeholder for an image still to upload (decision.md D048).

const file = (type: string, name = 'image') => new File([FIXTURES.png], name, { type });

test('imageFromClipboard: a PNG, JPEG or WebP pasted alone is the file to upload', () => {
  for (const type of ['image/png', 'image/jpeg', 'image/webp']) {
    const f = file(type);
    assert.equal(imageFromClipboard([f], ''), f, type);
    assert.equal(imageFromClipboard([f], ' \n'), f, `${type} with only whitespace as text`);
  }
  const png = file('image/png');
  assert.equal(imageFromClipboard([file('image/gif'), png], ''), png, 'the first accepted file');
});

test('imageFromClipboard: with text it is a text paste (Word adds a picture of the selection); other types and no files are null', () => {
  assert.equal(imageFromClipboard([file('image/png')], 'Some copied paragraph'), null);
  assert.equal(imageFromClipboard([file('image/gif')], ''), null);
  assert.equal(imageFromClipboard([file('image/heic')], ''), null);
  assert.equal(imageFromClipboard([file('application/pdf')], ''), null);
  assert.equal(imageFromClipboard([], ''), null);
});

test('imageFromClipboard: a file copied in Finder (its name as the text) is still an image paste', () => {
  const f = file('image/jpeg', 'photo.jpg');
  assert.equal(imageFromClipboard([f], 'photo.jpg'), f);
  assert.equal(imageFromClipboard([f], 'photo.jpg and more text'), null);
});

test('unsupportedImage and imageAddressOnly: when the paste is an image the studio cannot upload', () => {
  assert.equal(unsupportedImage([file('image/gif')], ''), true);
  assert.equal(unsupportedImage([file('image/gif')], 'text'), false);
  assert.equal(unsupportedImage([file('image/png')], ''), false);
  const docsImage = '<meta charset="utf-8"><b style="font-weight:normal;" id="docs-internal-guid-3"><img src="https://lh7-rt.googleusercontent.com/docsz/x" width="602" height="339"></b>';
  assert.equal(imageAddressOnly(docsImage, '', []), true);
  assert.equal(imageAddressOnly(docsImage, '', [file('image/png')]), false, 'a file is there to upload');
  assert.equal(imageAddressOnly('<p>Text</p><img src="https://x.example/a.png">', '', []), false, 'text as well: an article paste');
  assert.match(IMAGE_ADDRESS_MESSAGE, /Download the image/);
});

/* ── Preview placeholder ─────────────────────────────────────────────── */

const empty: StudioBlock = { id: 'img1', type: 'image', src: '', alt: 'Pipeline stages diagram', caption: 'The four stages' };
const render = (blocks: StudioBlock[], preview: boolean) => renderToStaticMarkup(createElement(StudioArticle, { blocks, preview }));

test('StudioArticle: an Image block without a source is an "Image to upload" box in the preview, with its alt text and caption', () => {
  const html = render([empty], true);
  assert.match(html, /Image to upload/);
  assert.match(html, /Pipeline stages diagram/);
  assert.match(html, /<figcaption>The four stages<\/figcaption>/);
  assert.match(html, /dashed var\(--sage\)/);
  assert.ok(!/<img/.test(html));
});

test('StudioArticle: published pages render nothing for an Image block without a source, as before', () => {
  assert.equal(render([empty], false), '');
  assert.equal(render([{ ...empty, alt: '', caption: '' }], false), '');
});

test('StudioArticle: an image with a source is unchanged by the placeholder', () => {
  const block: StudioBlock = { id: 'img2', type: 'image', src: '/images/blog/audit-planning.jpg', alt: 'Alt', caption: '' };
  assert.equal(render([block], true), render([block], false));
  assert.match(render([block], false), /<img src="\/images\/blog\/audit-planning\.jpg"/);
});
