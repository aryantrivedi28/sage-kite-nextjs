import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSessionValue } from '@/components/blog-studio/auth-core';

// The dedicated sign-in endpoint (decision.md D032) and its independence from editing actions.

const PASSWORD = 'maple orbit canyon pelican';
const SECRET = 'a-test-signing-secret-that-is-long-enough-0123456789';
const HOST = 'www.sagekite.com';
const URL_ = `https://${HOST}/api/sk-studio-ufn5xdafhll7/login`;
const ENV_KEYS = ['VERCEL_ENV', 'VERCEL', 'NODE_ENV', 'NEXT_PUBLIC_SANITY_PROJECT_ID', 'NEXT_PUBLIC_SANITY_DATASET', 'SANITY_API_WRITE_TOKEN', 'STUDIO_PASSWORD', 'STUDIO_SESSION_SECRET'];

const { POST } = await import('@/app/api/sk-studio-ufn5xdafhll7/login/route');
const actions = await import('@/components/blog-studio/actions');

const g = globalThis as Record<string, unknown>;
const cookieSets = () => (g.__cookieSets as Record<string, unknown>[]) ?? [];

function env(over: Record<string, string | undefined> = {}) {
  for (const k of ENV_KEYS) delete process.env[k];
  const base: Record<string, string> = {
    VERCEL_ENV: 'production', NODE_ENV: 'production', NEXT_PUBLIC_SANITY_PROJECT_ID: 'lk42drbi', NEXT_PUBLIC_SANITY_DATASET: 'production',
    SANITY_API_WRITE_TOKEN: 'test-token-not-real', STUDIO_PASSWORD: PASSWORD, STUDIO_SESSION_SECRET: SECRET,
  };
  for (const [k, v] of Object.entries({ ...base, ...over })) { if (v === undefined) delete process.env[k]; else process.env[k] = v; }
  g.__cookieSets = []; g.__testCookies = new Map(); g.__testHeaders = {}; g.__sanityCalls = []; g.__revalidated = [];
}

const login = (body: unknown, headers: Record<string, string> = {}, raw?: string) =>
  POST(new Request(URL_, { method: 'POST', headers: { origin: `https://${HOST}`, host: HOST, 'content-type': 'application/json', ...headers }, body: raw ?? JSON.stringify(body) }));

test('right password: 200, a session cookie with the safe attributes, no-store', async () => {
  env();
  const r = await login({ password: PASSWORD });
  assert.equal(r.status, 200);
  assert.deepEqual(await r.json(), { ok: true });
  assert.equal(r.headers.get('cache-control'), 'no-store');
  const cookie = cookieSets().at(-1)!;
  assert.equal(cookie.name, 'sk_studio_session');
  assert.equal(cookie.httpOnly, true);
  assert.equal(cookie.secure, true);
  assert.equal(cookie.sameSite, 'lax');
  assert.equal(cookie.path, '/sk-studio-ufn5xdafhll7');
  assert.equal(cookie.maxAge, 60 * 60 * 24 * 7);
  assert.ok(!String(cookie.value).includes(PASSWORD));
});

test('wrong, empty and non-string passwords: 401 or 400 and no cookie', async () => {
  env();
  for (const [body, status] of [[{ password: 'definitely wrong' }, 401], [{ password: '' }, 400], [{ password: 123 }, 400], [{ password: null }, 400], [{}, 400], [null, 400], [[PASSWORD], 400]] as const) {
    const r = await login(body);
    assert.equal(r.status, status, JSON.stringify(body));
    assert.equal((await r.json()).ok, false);
  }
  assert.equal(cookieSets().length, 0, 'no cookie for any failed attempt');
});

test('cross-site, origin-less, wrong content type and oversized requests are refused before the password is looked at', async () => {
  env();
  assert.equal((await login({ password: PASSWORD }, { origin: 'https://evil.example' })).status, 403);
  assert.equal((await login({ password: PASSWORD }, { origin: 'null' })).status, 403);
  assert.equal((await login({ password: PASSWORD }, { origin: `https://${HOST}.evil.example` })).status, 403);
  const noOrigin = await POST(new Request(URL_, { method: 'POST', headers: { host: HOST, 'content-type': 'application/json' }, body: JSON.stringify({ password: PASSWORD }) }));
  assert.equal(noOrigin.status, 403);
  assert.equal((await login(null, { 'content-type': 'text/plain' }, JSON.stringify({ password: PASSWORD }))).status, 415);
  assert.equal((await login(null, {}, 'not json')).status, 400);
  assert.equal((await login(null, {}, JSON.stringify({ password: 'x'.repeat(5000) }))).status, 413);
  assert.equal((await login({ password: PASSWORD }, { 'content-length': '999999' })).status, 413);
  assert.equal(cookieSets().length, 0);
});

test('behind Vercel the forwarded host is what the Origin must match', async () => {
  env();
  const r = await POST(new Request(URL_, { method: 'POST', headers: { origin: 'https://www.sagekite.com', host: 'internal.vercel.app', 'x-forwarded-host': 'www.sagekite.com', 'content-type': 'application/json' }, body: JSON.stringify({ password: PASSWORD }) }));
  assert.equal(r.status, 200);
});

test('not set up, or a weak passphrase: 503 and no cookie; Preview never offers sign-in', async () => {
  for (const over of [{ STUDIO_PASSWORD: undefined }, { STUDIO_PASSWORD: 'short-pw-1' }, { STUDIO_PASSWORD: 'Welcome12345' }, { STUDIO_PASSWORD: 'abcdabcdabcd' }, { STUDIO_SESSION_SECRET: undefined }, { VERCEL_ENV: 'preview' }]) {
    env(over);
    const r = await login({ password: over.STUDIO_PASSWORD ?? PASSWORD });
    assert.equal(r.status, 503, JSON.stringify(over));
  }
  assert.equal(cookieSets().length, 0);
});

test('a 12-character password signs in in Production and in local development; 11 characters or a weak one does not', async () => {
  const twelve = 'k8Q-mv2Lx9Zr';
  for (const where of [{}, { VERCEL_ENV: undefined, NODE_ENV: 'development' }]) {
    env({ ...where, STUDIO_PASSWORD: twelve });
    const r = await login({ password: twelve });
    assert.equal(r.status, 200, JSON.stringify(where));
    assert.equal(cookieSets().at(-1)!.name, 'sk_studio_session');
  }
  for (const where of [{}, { VERCEL_ENV: undefined, NODE_ENV: 'development' }]) {
    for (const bad of ['k8Q-mv2Lx9Z', 'Welcome12345', 'abcdabcdabcd']) {
      env({ ...where, STUDIO_PASSWORD: bad });
      assert.equal((await login({ password: bad })).status, 503, `${bad} ${JSON.stringify(where)}`);
      assert.equal(cookieSets().length, 0);
    }
  }
});

test('the sign-in endpoint is rate-limited, but that never blocks an editor who is already signed in', async () => {
  env();
  const statuses: number[] = [];
  let last: Response | undefined;
  for (let i = 0; i < 12; i++) { last = await login({ password: `wrong password number ${i}` }); statuses.push(last.status); }
  assert.equal(statuses[0], 401);
  assert.ok(statuses.includes(429), `got ${statuses}`);
  assert.equal(last!.headers.get('retry-after'), '900');
  assert.equal((await login({ password: PASSWORD })).status, 429, 'even the right password while blocked');

  // A signed-in editor keeps working: saving, listing, uploading and deleting do not go through the login limiter.
  (g.__testCookies as Map<string, string>).set('sk_studio_session', createSessionValue(SECRET, PASSWORD));
  const post = { id: '5e0d2489-cc82-41c3-a606-2e4b9dc7d570', slug: 'editing-keeps-working', title: 'Editing keeps working', seoTitle: '', excerpt: 'x'.repeat(90), category: 'CRM', author: 'A', authorImage: '/aryan_t.jpeg', status: 'draft', publishedAt: '2026-10-21', updatedAt: '2026-10-21', scheduledFor: '', featuredImage: '/images/blog/audit-planning.jpg', imageAlt: 'alt', tags: [], focusKeyword: '', relatedPlatform: '', featured: false, blocks: [{ id: 'aaaa1111', type: 'text', text: 'hi' }], createdAt: '2026-10-21T00:00:00.000Z', savedAt: '2026-10-21T00:00:00.000Z' };
  for (let i = 0; i < 20; i++) {
    assert.equal((await actions.saveStudioPostAction(post as never)).ok, true, `save #${i}`);
    assert.equal((await actions.listStudioPostsAction()).ok, true);
  }
  assert.equal((await actions.deleteStudioPostAction(post.id)).ok, true);
  assert.equal((await login({ password: PASSWORD })).status, 429, 'login stays limited meanwhile');
});
