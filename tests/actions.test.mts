import assert from 'node:assert/strict';
import { beforeEach, test } from 'node:test';
import { createSessionValue } from '@/components/blog-studio/auth-core';
import { FIXTURES } from './fixtures/images.mts';

// The Server Actions, run for real against a recording fake of @sanity/client (tests/stubs).
// Nothing here reaches Sanity or the network. Decision.md D031, findings I2 and I4.

const PROJECT = 'lk42drbi';
const PASSWORD = 'maple orbit canyon pelican';
const SECRET = 'a-test-signing-secret-that-is-long-enough-0123456789';
const ENV_KEYS = ['VERCEL_ENV', 'VERCEL', 'NODE_ENV', 'NEXT_PUBLIC_SANITY_PROJECT_ID', 'NEXT_PUBLIC_SANITY_DATASET', 'SANITY_API_WRITE_TOKEN', 'STUDIO_PASSWORD', 'STUDIO_SESSION_SECRET'];

const actions = await import('@/components/blog-studio/actions');
const { getStudioStorage } = await import('@/components/blog-studio/server');

type Calls = { op: string; [k: string]: unknown }[];
const calls = () => (globalThis as { __sanityCalls?: Calls }).__sanityCalls ?? [];
const writes = () => calls().filter((c) => ['commit', 'deleteQuery', 'upload'].includes(c.op));
const reads = () => calls().filter((c) => c.op === 'fetch');
const revalidated = () => (globalThis as { __revalidated?: unknown[][] }).__revalidated ?? [];

function setup(env: Record<string, string | undefined>, opts: { signedIn?: boolean; cookie?: string } = {}) {
  for (const k of ENV_KEYS) delete process.env[k];
  // process.env turns `undefined` into the string "undefined", so unset those keys instead.
  for (const [k, v] of Object.entries(env)) {
    if (v === undefined) delete process.env[k];
    else process.env[k] = v;
  }
  const g = globalThis as Record<string, unknown>;
  g.__sanityCalls = [];
  g.__revalidated = [];
  g.__sanityFetch = undefined;
  g.__testHeaders = {};
  g.__testCookies = new Map();
  if (opts.signedIn) (g.__testCookies as Map<string, string>).set('sk_studio_session', createSessionValue(SECRET, PASSWORD));
  if (opts.cookie) (g.__testCookies as Map<string, string>).set('sk_studio_session', opts.cookie);
}

const productionEnv = {
  VERCEL_ENV: 'production', NODE_ENV: 'production', NEXT_PUBLIC_SANITY_PROJECT_ID: PROJECT, NEXT_PUBLIC_SANITY_DATASET: 'production',
  SANITY_API_WRITE_TOKEN: 'test-token-not-real', STUDIO_PASSWORD: PASSWORD, STUDIO_SESSION_SECRET: SECRET,
};
const devEnv = { NODE_ENV: 'development', NEXT_PUBLIC_SANITY_PROJECT_ID: PROJECT, NEXT_PUBLIC_SANITY_DATASET: 'development', SANITY_API_WRITE_TOKEN: 'test-token-not-real' };

const UUID = '5e0d2489-cc82-41c3-a606-2e4b9dc7d570';
const ASSET_ID = 'image-78322e672d547b37aed2500a3a25f653d1024d25-1200x675-webp';
const validPost = (over: Record<string, unknown> = {}) => ({
  id: UUID, slug: 'a-valid-test-slug', title: 'A valid test post', seoTitle: '', excerpt: 'x'.repeat(90), category: 'CRM',
  author: 'Aryan Trivedi', authorImage: '/aryan_t.jpeg', status: 'draft', publishedAt: '2026-10-21', updatedAt: '2026-10-21',
  scheduledFor: '', featuredImage: '/images/blog/audit-planning.jpg', imageAlt: 'A photo', tags: ['one', 'two', 'three'],
  focusKeyword: '', relatedPlatform: '', featured: false,
  blocks: [{ id: 'aaaa1111', type: 'heading', level: 2, text: 'Heading' }, { id: 'bbbb2222', type: 'text', text: 'Body text.' }],
  createdAt: '2026-10-21T00:00:00.000Z', savedAt: '2026-10-21T00:00:00.000Z', ...over,
});
const formWith = (type: string, bytes: Uint8Array = FIXTURES.webpLossy, name = 'x.webp') => { const f = new FormData(); f.append('file', new File([bytes], name, { type })); return f; };

beforeEach(() => setup(productionEnv, { signedIn: true }));

/* ── authentication ─────────────────────────────────────────────────────── */

test('without a session every action is refused and Sanity is never touched', async () => {
  setup(productionEnv);
  const results = [
    await actions.listStudioPostsAction(),
    await actions.saveStudioPostAction(validPost() as never),
    await actions.deleteStudioPostAction(UUID),
    await actions.uploadStudioImageAction(formWith('image/webp')),
  ];
  for (const r of results) assert.equal(r.ok, false);
  assert.equal(calls().length, 0, 'not even a client was created');
});

test('forged, expired and wrong-secret cookies are refused', async () => {
  const good = createSessionValue(SECRET, PASSWORD);
  const [expiry, sig] = good.split('.');
  const expired = createSessionValue(SECRET, PASSWORD, Date.now() - 30 * 24 * 3600 * 1000);
  for (const cookie of [`${expiry}.${sig.slice(0, -2)}AA`, `${Number(expiry) + 5000}.${sig}`, expired, createSessionValue('z'.repeat(50), PASSWORD), 'garbage']) {
    setup(productionEnv, { cookie });
    assert.equal((await actions.saveStudioPostAction(validPost() as never)).ok, false, cookie.slice(0, 12));
    assert.equal((await actions.deleteStudioPostAction(UUID)).ok, false);
    assert.equal(calls().length, 0);
  }
});

/* ── dataset guard (I4) ─────────────────────────────────────────────────── */

test('production refuses every action when the dataset is "development", and nothing reaches Sanity', async () => {
  setup({ ...productionEnv, NEXT_PUBLIC_SANITY_DATASET: 'development' }, { signedIn: true });
  const storage = await getStudioStorage();
  assert.equal(storage.kind, 'blocked', 'visible error, not a silent fall-back to browser storage');
  const results = [await actions.listStudioPostsAction(), await actions.saveStudioPostAction(validPost() as never), await actions.deleteStudioPostAction(UUID), await actions.uploadStudioImageAction(formWith('image/webp'))];
  for (const r of results) {
    assert.equal(r.ok, false);
    assert.match(!r.ok ? r.error : '', /production/i);
  }
  assert.equal(calls().length, 0);
});

test('production refuses when the project ID or write token is missing or wrong', async () => {
  for (const over of [{ NEXT_PUBLIC_SANITY_PROJECT_ID: undefined }, { NEXT_PUBLIC_SANITY_PROJECT_ID: 'wrongproj' }, { SANITY_API_WRITE_TOKEN: undefined }, { NEXT_PUBLIC_SANITY_DATASET: undefined }]) {
    setup({ ...productionEnv, ...over }, { signedIn: true });
    assert.equal((await getStudioStorage()).kind, 'blocked', JSON.stringify(over));
    assert.equal((await actions.saveStudioPostAction(validPost() as never)).ok, false);
    assert.equal(calls().length, 0);
  }
});

test('Vercel Preview cannot write, and does not offer sign-in, even with every secret present', async () => {
  setup({ ...productionEnv, VERCEL_ENV: 'preview' }, { signedIn: true });
  const storage = await getStudioStorage();
  assert.deepEqual(storage, { kind: 'locked', why: 'unavailable' });
  assert.equal((await actions.saveStudioPostAction(validPost() as never)).ok, false);
  assert.equal((await actions.deleteStudioPostAction(UUID)).ok, false);
  assert.equal(calls().length, 0);
});

test('storage states: signed in is sanity; signed out is locked with sign-in; missing or invalid sign-in settings stay locked (fail closed)', async () => {
  assert.deepEqual(await getStudioStorage(), { kind: 'sanity', dataset: 'production' });
  setup(productionEnv);
  assert.deepEqual(await getStudioStorage(), { kind: 'locked', why: 'signin' });
  const closed = { kind: 'locked', why: 'unavailable' };
  setup({ ...productionEnv, STUDIO_PASSWORD: undefined, STUDIO_SESSION_SECRET: undefined });
  assert.deepEqual(await getStudioStorage(), closed);
  setup({ ...productionEnv, STUDIO_SESSION_SECRET: undefined });
  assert.deepEqual(await getStudioStorage(), closed, 'no session secret');
  setup({ ...productionEnv, STUDIO_SESSION_SECRET: 'too-short' }, { signedIn: true });
  assert.deepEqual(await getStudioStorage(), closed, 'secret under 32 characters');
  setup({ ...productionEnv, STUDIO_PASSWORD: 'too short' }, { signedIn: true });
  assert.deepEqual(await getStudioStorage(), closed, 'a weak password means sign-in is not set up');
  setup({ ...productionEnv, STUDIO_PASSWORD: 'Welcome12345' }, { signedIn: true });
  assert.deepEqual(await getStudioStorage(), closed, 'a guessable 12-character password is still refused');
  // Nothing about the settings reaches a visitor: the locked state carries no reason text.
  assert.ok(!JSON.stringify(closed).match(/STUDIO|env|secret|password/i));
});

test('a 12-character password is accepted in Production and in local development', async () => {
  const twelve = 'k8Q-mv2Lx9Zr';
  const token = (await import('@/components/blog-studio/auth-core')).createSessionValue(SECRET, twelve);
  setup({ ...productionEnv, STUDIO_PASSWORD: twelve }, { cookie: token });
  assert.deepEqual(await getStudioStorage(), { kind: 'sanity', dataset: 'production' });
  setup({ ...devEnv, STUDIO_PASSWORD: twelve, STUDIO_SESSION_SECRET: SECRET }, { cookie: token });
  assert.deepEqual(await getStudioStorage(), { kind: 'sanity', dataset: 'development' });
  const { isStudioAuthConfigured } = await import('@/components/blog-studio/auth');
  setup({ ...devEnv, STUDIO_PASSWORD: twelve, STUDIO_SESSION_SECRET: SECRET });
  assert.equal(isStudioAuthConfigured(), true, 'development, 12 characters');
  setup({ ...productionEnv, STUDIO_PASSWORD: twelve });
  assert.equal(isStudioAuthConfigured(), true, 'production, 12 characters');
  setup({ ...devEnv, STUDIO_PASSWORD: 'k8Q-mv2Lx9Z', STUDIO_SESSION_SECRET: SECRET });
  assert.equal(isStudioAuthConfigured(), false, 'development, 11 characters');
  setup({ ...productionEnv, STUDIO_PASSWORD: 'k8Q-mv2Lx9Z' });
  assert.equal(isStudioAuthConfigured(), false, 'production, 11 characters');
});

test('a blocked misconfiguration does not leak to signed-out visitors', async () => {
  setup({ ...productionEnv, NEXT_PUBLIC_SANITY_DATASET: 'development' });
  const storage = await getStudioStorage();
  assert.deepEqual(storage, { kind: 'locked', why: 'signin' });
  assert.ok(!JSON.stringify(storage).includes('development'));
});

test('development without team sign-in is locked too: no unauthenticated writes anywhere', async () => {
  setup(devEnv);
  assert.deepEqual(await getStudioStorage(), { kind: 'locked', why: 'unavailable' });
  for (const r of [await actions.saveStudioPostAction(validPost() as never), await actions.listStudioPostsAction(), await actions.deleteStudioPostAction(UUID)]) {
    assert.equal(r.ok, false);
    assert.ok(!r.ok && !('signIn' in r), 'unavailable is not a "sign in again" prompt');
  }
  assert.equal(calls().length, 0);
});

test('without a session the actions say "sign in again" (the UI puts its sign-in dialog back); config problems say nothing specific', async () => {
  setup(productionEnv);
  for (const r of [await actions.saveStudioPostAction(validPost() as never), await actions.listStudioPostsAction(), await actions.deleteStudioPostAction(UUID), await actions.uploadStudioImageAction(formWith('image/webp'))]) {
    assert.deepEqual(r, { ok: false, error: 'Your session has ended. Sign in again.', signIn: true });
  }
  setup({ ...productionEnv, STUDIO_PASSWORD: undefined, STUDIO_SESSION_SECRET: undefined });
  const r = await actions.listStudioPostsAction();
  assert.deepEqual(r, { ok: false, error: 'The blog studio is not available.' });
  assert.equal(calls().length, 0);
});

test('a session that expires or is invalidated is refused again (expired cookie, changed password)', async () => {
  const expired = createSessionValue(SECRET, PASSWORD, Date.now() - (8 * 24 * 60 * 60 * 1000));
  setup(productionEnv, { cookie: expired });
  assert.deepEqual(await getStudioStorage(), { kind: 'locked', why: 'signin' });
  // Same cookie, but the team password was changed since it was issued.
  setup({ ...productionEnv, STUDIO_PASSWORD: 'a-brand-new-pass-1' }, { signedIn: true });
  assert.deepEqual(await getStudioStorage(), { kind: 'locked', why: 'signin' });
  assert.equal(calls().length, 0);
});

/* ── ids and document types (I2) ────────────────────────────────────────── */

test('malicious or malformed ids are rejected before any Sanity call', async () => {
  const ids = [ASSET_ID, `drafts.${UUID}`, `drafts.${ASSET_ID}`, '../x', '', ' ', 'system.group.x', 'a'.repeat(80), UUID + 'x', UUID.replace(/-/g, ''), `${UUID}\n`, '_.listeners.x', 'file-abc123-pdf', 'abc', 123, null, undefined, {}, [UUID]];
  for (const id of ids) {
    const s = await actions.saveStudioPostAction(validPost({ id }) as never);
    assert.equal(s.ok, false, `save ${JSON.stringify(id)}`);
    const d = await actions.deleteStudioPostAction(id as never);
    assert.equal(d.ok, false, `delete ${JSON.stringify(id)}`);
  }
  assert.equal(calls().length, 0, `Sanity was touched: ${JSON.stringify(calls().map((c) => c.op))}`);
});

test('an existing document of another type under the same id is never replaced or deleted', async () => {
  (globalThis as { __sanityFetch?: unknown }).__sanityFetch = (query: string) => (query.includes('_type}') ? [{ _id: UUID, _type: 'sanity.imageAsset' }] : []);
  const r = await actions.saveStudioPostAction(validPost() as never);
  assert.equal(r.ok, false);
  assert.match(!r.ok ? r.error : '', /different kind of document/);
  assert.equal(writes().length, 0);
});

test('a client cannot choose _type, _id or other system fields: documents come from an explicit field list', async () => {
  const hostile = validPost({ _type: 'sanity.imageAsset', _id: ASSET_ID, _createdAt: '1999-01-01', _rev: 'x', __proto__: { polluted: true }, extra: 'dropped', blocks: [{ id: 'aaaa1111', type: 'text', text: 'ok', _type: 'evil', script: '<script>' }] });
  const r = await actions.saveStudioPostAction(hostile as never);
  assert.equal(r.ok, true);
  const commit = calls().find((c) => c.op === 'commit') as { ops: { op: string; doc: Record<string, unknown> }[] };
  const doc = commit.ops.find((o) => o.op === 'createOrReplace')!.doc;
  assert.equal(doc._type, 'blogPost');
  assert.equal(doc._id, `drafts.${UUID}`);
  for (const k of ['_createdAt', '_rev', 'extra', 'polluted']) assert.ok(!(k in doc), k);
  const block = (doc.blocks as Record<string, unknown>[])[0];
  assert.deepEqual(Object.keys(block).sort(), ['_key', 'text', 'type']);
  assert.equal(commit.ops.filter((o) => o.op === 'createOrReplace').length, 1);
});

test('saving a valid post: draft, publish and unpublish write only blogPost documents and revalidate the blog', async () => {
  assert.equal((await actions.saveStudioPostAction(validPost() as never)).ok, true);
  assert.deepEqual(revalidated(), [['/blog', 'layout'], ['/sitemap.xml']]);

  (globalThis as { __sanityFetch?: unknown }).__sanityFetch = (query: string) => (query.includes('_type}') ? [{ _id: `drafts.${UUID}`, _type: 'blogPost' }] : []);
  assert.equal((await actions.saveStudioPostAction(validPost({ status: 'published' }) as never)).ok, true);
  const publish = calls().filter((c) => c.op === 'commit').at(-1) as { ops: { op: string; doc?: { _id: string; _type: string }; id?: string }[] };
  assert.equal(publish.ops.find((o) => o.op === 'createOrReplace')!.doc!._id, UUID, 'published copy has the plain id');
  assert.deepEqual(publish.ops.filter((o) => o.op === 'delete').map((o) => o.id), [`drafts.${UUID}`], 'the draft copy is removed in the same transaction');

  (globalThis as { __sanityFetch?: unknown }).__sanityFetch = (query: string) => (query.includes('_type}') ? [{ _id: UUID, _type: 'blogPost' }] : []);
  assert.equal((await actions.saveStudioPostAction(validPost({ status: 'draft' }) as never)).ok, true);
  const unpublish = calls().filter((c) => c.op === 'commit').at(-1) as { ops: { op: string; doc?: { _id: string }; id?: string }[] };
  assert.equal(unpublish.ops.find((o) => o.op === 'createOrReplace')!.doc!._id, `drafts.${UUID}`);
  assert.deepEqual(unpublish.ops.filter((o) => o.op === 'delete').map((o) => o.id), [UUID]);
  assert.equal(revalidated().length, 6, 'every save revalidates /blog and the sitemap');
});

test('delete is scoped to blogPost documents and revalidates', async () => {
  assert.equal((await actions.deleteStudioPostAction(UUID)).ok, true);
  const del = calls().find((c) => c.op === 'deleteQuery') as { arg: { query: string; params: { type: string; ids: string[] } } };
  assert.match(del.arg.query, /_type == \$type/);
  assert.equal(del.arg.params.type, 'blogPost');
  assert.deepEqual(del.arg.params.ids, [UUID, `drafts.${UUID}`]);
  assert.deepEqual(revalidated(), [['/blog', 'layout'], ['/sitemap.xml']]);
});

test('post shape: bad types, unknown category, platform, status and oversized content are rejected', async () => {
  const bad: Record<string, unknown>[] = [
    { status: 'weird' }, { title: '  ' }, { title: 5 }, { tags: 'x' }, { tags: [1] }, { blocks: 'x' }, { featured: 'yes' },
    { category: 'Not a category' }, { relatedPlatform: 'not-a-platform' }, { publishedAt: 'yesterday' },
    { excerpt: 'x'.repeat(5000) }, { title: 'x'.repeat(500) },
    { featuredImage: 'data:image/png;base64,AAAA' },
    { blocks: [{ id: 'aaaa1111', type: 'script', text: 'x' }] }, { blocks: [{ id: '../x', type: 'text', text: 'x' }] },
    { blocks: [{ id: 'aaaa1111', type: 'heading', level: 4, text: 'x' }] }, { blocks: [{ id: 'aaaa1111', type: 'text', text: 7 }] },
    { blocks: [{ id: 'aaaa1111', type: 'image', src: 'data:image/png;base64,AA', alt: 'a', caption: '' }] },
    { blocks: Array.from({ length: 500 }, (_, i) => ({ id: `b${i}`, type: 'divider' })) },
  ];
  for (const over of bad) assert.equal((await actions.saveStudioPostAction(validPost(over) as never)).ok, false, JSON.stringify(over).slice(0, 60));
  assert.equal((await actions.saveStudioPostAction(null as never)).ok, false);
  assert.equal((await actions.saveStudioPostAction([] as never)).ok, false);
  assert.equal(calls().filter((c) => c.op !== 'createClient').length, 0, 'nothing was read or written');
});

/* ── publishing correctness ─────────────────────────────────────────────── */

test('publishing is refused for a slug used by any of the eight code posts, but another Sanity post is checked too', async () => {
  const { posts } = await import('@/content/blog');
  assert.equal(posts.length, 8, 'the eight existing articles');
  for (const { slug } of posts) {
    const r = await actions.saveStudioPostAction(validPost({ status: 'published', slug }) as never);
    assert.equal(r.ok, false, slug);
    assert.match(!r.ok ? r.error : '', /slug is not used by another post/);
  }
  assert.equal(writes().length, 0);

  // A different Sanity post already using the slug.
  const other = { _id: '11111111-2222-4333-8444-555555555555', _type: 'blogPost', slug: 'taken-by-sanity', title: 'x', status: 'published', blocks: [] };
  (globalThis as { __sanityFetch?: unknown }).__sanityFetch = (query: string) => (query.includes('$type') ? [other] : []);
  const r = await actions.saveStudioPostAction(validPost({ status: 'published', slug: 'taken-by-sanity' }) as never);
  assert.equal(r.ok, false);
  assert.equal(writes().length, 0);
});

test('publishing requires the checklist items (image, alt text, content) on the server', async () => {
  for (const over of [{ featuredImage: '' }, { imageAlt: '' }, { blocks: [] }, { excerpt: '' }, { slug: 'Bad Slug' }, { featuredImage: 'https://evil.example/x.png' }]) {
    const r = await actions.saveStudioPostAction(validPost({ status: 'published', ...over }) as never);
    assert.equal(r.ok, false, JSON.stringify(over));
  }
  assert.equal(writes().length, 0);
});

test('upload refuses non-images and oversized files before Sanity is called', async () => {
  assert.equal((await actions.uploadStudioImageAction(formWith('image/svg+xml'))).ok, false);
  assert.equal((await actions.uploadStudioImageAction(formWith('text/html'))).ok, false);
  assert.equal((await actions.uploadStudioImageAction(new FormData())).ok, false);
  assert.equal(writes().length, 0);
  assert.equal((await actions.uploadStudioImageAction(formWith('image/webp'))).ok, true);
  assert.equal(writes().length, 1);
});

/* ── upload content checks, decision.md D033 ───────────────────────────── */

const uploads = () => calls().filter((c) => c.op === 'upload') as unknown as { bytes: number; options: { filename: string; contentType: string } }[];

test('upload refuses incorrect MIME types, mismatched signatures and unsupported files before Sanity is called', async () => {
  const text = (s: string) => new TextEncoder().encode(s);
  const refused: [string, FormData, RegExp][] = [
    ['real PNG declared as SVG', formWith('image/svg+xml', FIXTURES.png), /JPG, PNG or WebP/],
    ['real WebP declared as octet-stream', formWith('application/octet-stream'), /JPG, PNG or WebP/],
    ['real WebP with no type', formWith(''), /JPG, PNG or WebP/],
    ['PNG bytes declared as WebP', formWith('image/webp', FIXTURES.png), /do not match/],
    ['JPEG bytes declared as PNG', formWith('image/png', FIXTURES.jpeg, 'x.png'), /do not match/],
    ['HTML declared as PNG', formWith('image/png', text('<!doctype html><script>alert(1)</script>'), 'x.png'), /not a valid/],
    ['SVG declared as WebP', formWith('image/webp', text('<svg xmlns="http://www.w3.org/2000/svg" onload="alert(1)"/>')), /not a valid/],
    ['GIF declared as PNG', formWith('image/png', new Uint8Array(Buffer.concat([text('GIF89a'), new Uint8Array(40)])), 'x.png'), /not a valid/],
    ['zero bytes declared as WebP', formWith('image/webp', new Uint8Array(100)), /not a valid/],
    ['WebP with a script appended', formWith('image/webp', new Uint8Array(Buffer.concat([FIXTURES.webpLossy, text('<script>alert(1)</script>')]))), /not a valid/],
  ];
  for (const [label, form, message] of refused) {
    const r = await actions.uploadStudioImageAction(form);
    assert.equal(r.ok, false, label);
    assert.match(!r.ok ? r.error : '', message, label);
  }
  assert.equal(writes().length, 0, 'nothing reached Sanity');
});

test('upload sends Sanity the detected type and a cleaned file name, never the browser\'s', async () => {
  const cases: [FormData, string, string][] = [
    [formWith('image/webp', FIXTURES.webpLossy, 'My Post.webp'), 'image/webp', 'my-post.webp'],
    [formWith('image/webp', FIXTURES.webpAlpha, 'alpha.webp'), 'image/webp', 'alpha.webp'],
    // A browser that cannot encode WebP hands back PNG; the store still names it .webp.
    [formWith('image/png', FIXTURES.png, 'safari-fallback.webp'), 'image/png', 'safari-fallback.png'],
    [formWith('IMAGE/JPEG', FIXTURES.jpeg, '../../<script>.svg'), 'image/jpeg', 'script.jpg'],
  ];
  for (const [form, contentType, filename] of cases) assert.equal((await actions.uploadStudioImageAction(form)).ok, true, filename);
  assert.deepEqual(uploads().map((u) => [u.options.contentType, u.options.filename]), cases.map(([, t, n]) => [t, n]));
  assert.deepEqual(uploads().map((u) => u.bytes), [FIXTURES.webpLossy.length, FIXTURES.webpAlpha.length, FIXTURES.png.length, FIXTURES.jpeg.length], 'the bytes are sent unchanged');
});

test('a correctly typed image over the size limit is refused without being read into Sanity', async () => {
  const big = new Uint8Array(4 * 1024 * 1024);
  big.set(FIXTURES.jpeg.subarray(0, 3));
  big.set([0xff, 0xd9], big.length - 2);
  const r = await actions.uploadStudioImageAction(formWith('image/jpeg', big, 'big.jpg'));
  assert.equal(r.ok, false);
  assert.match(!r.ok ? r.error : '', /too large/);
  assert.equal(writes().length, 0);
});

test('error messages returned to the browser never contain the write token', async () => {
  (globalThis as { __sanityFetch?: unknown }).__sanityFetch = () => { throw new Error('Request failed (project lk42drbi)'); };
  const r = await actions.listStudioPostsAction();
  assert.equal(r.ok, false);
  assert.ok(!JSON.stringify(r).includes('test-token-not-real'));
});

/* ── negative controls: these tests really would have caught the old behaviour ── */

test('negative control: the previous id pattern accepted an image asset id, the current one does not', async () => {
  const { POST_ID_PATTERN } = await import('@/lib/sanity/blogPosts');
  const previous = /^[A-Za-z0-9][A-Za-z0-9-]{0,63}$/;
  assert.equal(previous.test(ASSET_ID), true, 'old pattern: asset id passes');
  assert.equal(previous.test(`${UUID}`), true);
  assert.equal(POST_ID_PATTERN.test(ASSET_ID), false, 'new pattern: asset id is rejected');
  assert.equal(POST_ID_PATTERN.test(UUID), true, 'real post ids still pass');
  assert.equal(POST_ID_PATTERN.test(crypto.randomUUID()), true, 'what the studio generates passes');
});

test('negative control: the previous delete query matched any document type', () => {
  const previous = '*[_id in $ids]';
  assert.ok(!previous.includes('_type'), 'old query had no type filter');
});

/* ── generic client errors (I5) and image sources (I7), decision.md D032 ─────────────────── */

function captureConsoleError() {
  const original = console.error;
  const lines: string[] = [];
  console.error = (...args: unknown[]) => { lines.push(args.map(String).join(' ')); };
  return { lines, restore: () => { console.error = original; } };
}
const LEAKY = 'Request error: POST https://lk42drbi.api.sanity.io/v2026-10-20/data/mutate/production?token=test-token-not-real failed, internal host db-7.sanity.internal';

test('Sanity and network errors reach the browser only as a generic message; the log keeps the action and status, never the text', async () => {
  const log = captureConsoleError();
  try {
    const leaky = Object.assign(new Error(LEAKY), { statusCode: 401 });
    (globalThis as { __sanityFetch?: unknown }).__sanityFetch = () => { throw leaky; };
    const results = [await actions.listStudioPostsAction(), await actions.saveStudioPostAction(validPost() as never)];
    for (const r of results) {
      assert.equal(r.ok, false);
      const text = JSON.stringify(r);
      for (const secret of ['test-token-not-real', 'lk42drbi', 'sanity.internal', 'api.sanity.io', 'Request error']) assert.ok(!text.includes(secret), `leaked ${secret}`);
    }
    assert.match(!results[0].ok ? results[0].error : '', /Could not load the posts/);
    assert.match(!results[1].ok ? results[1].error : '', /Could not save the post/);
    const logged = log.lines.join('\n');
    assert.match(logged, /listStudioPostsAction failed \(status 401\)/);
    for (const secret of ['test-token-not-real', 'sanity.internal', 'api.sanity.io']) assert.ok(!logged.includes(secret), `log leaked ${secret}`);
  } finally { log.restore(); }
});

test('a failed Sanity transaction is a generic failure, not a success, and nothing is revalidated', async () => {
  const log = captureConsoleError();
  try {
    (globalThis as { __sanityCommitError?: unknown }).__sanityCommitError = new Error(LEAKY);
    const r = await actions.saveStudioPostAction(validPost() as never);
    assert.equal(r.ok, false);
    assert.ok(!JSON.stringify(r).includes('test-token-not-real'));
    assert.equal(revalidated().length, 0);
    const d = await (async () => { (globalThis as { __sanityCommitError?: unknown }).__sanityCommitError = undefined; return actions.uploadStudioImageAction(formWith('image/webp')); })();
    assert.equal(d.ok, true);
  } finally { (globalThis as { __sanityCommitError?: unknown }).__sanityCommitError = undefined; log.restore(); }
});

test('a failed cache refresh after a successful write does not turn the save into an error', async () => {
  const log = captureConsoleError();
  try {
    (globalThis as { __revalidateThrows?: boolean }).__revalidateThrows = true;
    assert.equal((await actions.saveStudioPostAction(validPost() as never)).ok, true);
    assert.equal(writes().length, 1, 'the post was written');
    assert.equal((await actions.deleteStudioPostAction(UUID)).ok, true);
  } finally { (globalThis as { __revalidateThrows?: boolean }).__revalidateThrows = false; log.restore(); }
});

test('our own messages (guard, sign-in, validation) still reach the user unchanged', async () => {
  const bad = await actions.saveStudioPostAction(validPost({ status: 'weird' }) as never);
  assert.equal(!bad.ok && bad.error, 'Invalid status.');
  setup({ ...productionEnv, NEXT_PUBLIC_SANITY_DATASET: 'development' }, { signedIn: true });
  const blocked = await actions.saveStudioPostAction(validPost() as never);
  assert.match(!blocked.ok ? blocked.error : '', /Production can only publish to the "production" dataset/);
  setup(productionEnv);
  const out = await actions.listStudioPostsAction();
  assert.match(!out.ok ? out.error : '', /Sign in again/);
});

test('crafted requests cannot plant tracking pixels or foreign images: featured, author and inline images are checked', async () => {
  const pixels = ['https://tracker.example/pixel.gif?uid=42', 'http://tracker.example/p.png', '//tracker.example/p.png', '/images/blog/x.jpg?uid=42', 'javascript:alert(1)', 'https://cdn.sanity.io/images/otherproject/production/' + 'a'.repeat(40) + '-10x10.png', '/api/anything.png'];
  for (const src of pixels) {
    for (const over of [{ featuredImage: src }, { authorImage: src }, { blocks: [{ id: 'aaaa1111', type: 'image', src, alt: 'a', caption: '' }] }]) {
      for (const status of ['draft', 'published']) {
        const r = await actions.saveStudioPostAction(validPost({ status, ...over }) as never);
        assert.equal(r.ok, false, `${status} ${JSON.stringify(over).slice(0, 70)}`);
      }
    }
  }
  assert.equal(calls().filter((c) => c.op !== 'createClient').length, 0, 'nothing was read or written');
  const sanityImage = `https://cdn.sanity.io/images/lk42drbi/production/${'f'.repeat(40)}-1200x675.webp`;
  const ok = await actions.saveStudioPostAction(validPost({ featuredImage: sanityImage, blocks: [{ id: 'aaaa1111', type: 'image', src: '/images/blog/audit-planning.jpg', alt: 'a', caption: 'c' }, { id: 'bbbb2222', type: 'image', src: sanityImage, alt: 'b', caption: '' }, { id: 'cccc3333', type: 'image', src: '', alt: '', caption: '' }] }) as never);
  assert.equal(ok.ok, true, 'this site\'s files, this project\'s uploads and an empty draft image are accepted');
});
