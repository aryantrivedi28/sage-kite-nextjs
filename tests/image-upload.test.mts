import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { checkUploadedImage, detectImageType, uploadFileName } from '@/lib/sanity/imageUpload';
import { FIXTURES } from './fixtures/images.mts';

// Upload content checks (decision.md D033): the file's bytes decide what it is, never the type or
// name the browser declares. Fixtures are real 2x2 images (made once with sharp) and every image in public/.

const text = (s: string) => new TextEncoder().encode(s);
const join = (...parts: Uint8Array[]) => new Uint8Array(Buffer.concat(parts));

test('real JPG, PNG and WebP files (lossy, lossless and with alpha) are accepted as their own type', () => {
  const cases: [Uint8Array, string][] = [
    [FIXTURES.jpeg, 'image/jpeg'], [FIXTURES.png, 'image/png'],
    [FIXTURES.webpLossy, 'image/webp'], [FIXTURES.webpLossless, 'image/webp'], [FIXTURES.webpAlpha, 'image/webp'],
  ];
  for (const [bytes, type] of cases) assert.deepEqual(checkUploadedImage(bytes, type), { ok: true, type });
  assert.deepEqual(checkUploadedImage(FIXTURES.png, ' IMAGE/PNG '), { ok: true, type: 'image/png' }, 'case and spacing of the declared type do not matter');
});

test('every JPG, PNG and WebP already on the site passes, so the checks do not reject real files', () => {
  const expected: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
  const walk = (dir: string): string[] => readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
  const files = walk('public').filter((f) => expected[path.extname(f).toLowerCase()]);
  assert.ok(files.length >= 40, `found ${files.length} images`);
  for (const f of files) {
    const type = expected[path.extname(f).toLowerCase()];
    assert.deepEqual(checkUploadedImage(new Uint8Array(readFileSync(f)), type), { ok: true, type }, f);
  }
});

test('incorrect MIME types are refused even when the bytes are a real image', () => {
  for (const type of ['image/svg+xml', 'text/html', 'image/gif', 'image/avif', 'image/heic', 'image/jpg', 'application/octet-stream', 'image/png; charset=utf-8', '']) {
    assert.deepEqual(checkUploadedImage(FIXTURES.png, type), { ok: false, error: 'Use a JPG, PNG or WebP image.' }, JSON.stringify(type));
  }
});

test('a file whose signature does not match its declared type is refused', () => {
  const mismatches: [Uint8Array, string][] = [
    [FIXTURES.png, 'image/webp'], [FIXTURES.png, 'image/jpeg'], [FIXTURES.jpeg, 'image/png'],
    [FIXTURES.jpeg, 'image/webp'], [FIXTURES.webpLossy, 'image/jpeg'], [FIXTURES.webpAlpha, 'image/png'],
  ];
  for (const [bytes, type] of mismatches) {
    assert.deepEqual(checkUploadedImage(bytes, type), { ok: false, error: 'This file\'s contents do not match its image type.' }, type);
  }
});

test('unsupported, fake, truncated and padded files are refused whatever type they declare', () => {
  const pngEnd = FIXTURES.png.length;
  const riff = (form: string, chunk: string) => { const b = join(text('RIFF'), new Uint8Array(4), text(form + chunk), new Uint8Array(16)); new DataView(b.buffer).setUint32(4, b.length - 8, true); return b; };
  const bad: [string, Uint8Array][] = [
    ['SVG with a script', text('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>')],
    ['HTML page', text('<!doctype html><script>alert(document.cookie)</script>')],
    ['GIF', join(text('GIF89a'), new Uint8Array(40))],
    ['empty file', new Uint8Array(0)],
    ['100 zero bytes', new Uint8Array(100)],
    ['PNG signature only', FIXTURES.png.subarray(0, 8)],
    ['truncated PNG', FIXTURES.png.subarray(0, pngEnd - 1)],
    ['PNG with HTML appended', join(FIXTURES.png, text('<script>alert(1)</script>'))],
    ['PNG signature then HTML', join(FIXTURES.png.subarray(0, 8), text('<html><script>alert(1)</script></html>'), FIXTURES.png.subarray(pngEnd - 12))],
    ['JPEG header only', FIXTURES.jpeg.subarray(0, 3)],
    ['truncated JPEG', FIXTURES.jpeg.subarray(0, FIXTURES.jpeg.length - 1)],
    ['JPEG with HTML appended', join(FIXTURES.jpeg, text('<script>alert(1)</script>'))],
    ['WebP with HTML appended', join(FIXTURES.webpLossy, text('<script>alert(1)</script>'))],
    ['truncated WebP', FIXTURES.webpLossy.subarray(0, FIXTURES.webpLossy.length - 2)],
    ['RIFF WAVE audio', riff('WAVE', 'fmt ')],
    ['RIFF WEBP with an unknown chunk', riff('WEBP', 'ABCD')],
  ];
  for (const [label, bytes] of bad) {
    assert.equal(detectImageType(bytes), null, label);
    for (const type of ['image/png', 'image/jpeg', 'image/webp']) {
      assert.deepEqual(checkUploadedImage(bytes, type), { ok: false, error: 'This file is not a valid JPG, PNG or WebP image.' }, `${label} as ${type}`);
    }
  }
});

test('the file name sent to Sanity is cleaned and takes the detected format\'s extension', () => {
  assert.equal(uploadFileName('my-post.webp', 'image/png'), 'my-post.png', 'a PNG named .webp (browser without WebP encoding) is named .png');
  assert.equal(uploadFileName('../../etc/passwd.webp', 'image/webp'), 'etc-passwd.webp');
  assert.equal(uploadFileName('"><img src=x onerror=alert(1)>.svg', 'image/jpeg'), 'img-src-x-onerror-alert-1.jpg');
  assert.equal(uploadFileName('Résumé Photo 2026.JPG', 'image/jpeg'), 'r-sum-photo-2026.jpg');
  assert.equal(uploadFileName('', 'image/webp'), 'image.webp');
  assert.equal(uploadFileName('.webp', 'image/webp'), 'image.webp');
  assert.equal(uploadFileName(`${'a'.repeat(79)}-${'b'.repeat(50)}.webp`, 'image/webp'), `${'a'.repeat(79)}.webp`, 'long names are cut to 80 characters');
});

test('negative control: the previous check trusted the declared type, so an HTML page labelled image/png passed', () => {
  const previous = (type: string) => ['image/jpeg', 'image/png', 'image/webp'].includes(type);
  const html = text('<!doctype html><script>alert(1)</script>');
  assert.equal(previous('image/png'), true, 'old check: passes on the label alone');
  assert.equal(checkUploadedImage(html, 'image/png').ok, false, 'new check: refused');
});
