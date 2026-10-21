import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createLoginLimiter, trustedClientKey } from '@/components/blog-studio/rate-limit';

// Login brake (decision.md D031, finding I3).

const opts = { perClientMax: 3, globalMax: 10, windowMs: 1000, maxClients: 5 };
const headers = (h: Record<string, string>) => ({ get: (n: string) => h[n.toLowerCase()] ?? null });

test('a client is blocked after its own limit, others are not', () => {
  const l = createLoginLimiter(opts);
  for (let i = 0; i < 3; i++) l.recordFailure('1.1.1.1');
  assert.equal(l.isBlocked('1.1.1.1'), true);
  assert.equal(l.isBlocked('2.2.2.2'), false);
});

test('the global budget stops an attacker who keeps changing address', () => {
  const l = createLoginLimiter(opts);
  for (let i = 0; i < 10; i++) l.recordFailure(`10.0.0.${i}`); // 10 different clients, 1 failure each
  assert.equal(l.isBlocked('10.0.0.200'), true, 'a brand-new address is blocked too');
});

test('a right password clears that client but not the global budget', () => {
  const l = createLoginLimiter(opts);
  for (let i = 0; i < 3; i++) l.recordFailure('1.1.1.1');
  l.recordSuccess('1.1.1.1');
  assert.equal(l.isBlocked('1.1.1.1'), false);
  for (let i = 0; i < 7; i++) l.recordFailure(`9.9.9.${i}`);
  assert.equal(l.isBlocked('1.1.1.1'), true, 'global budget (3 + 7 = 10) is still spent');
});

test('the block ends when the window passes', () => {
  let t = 0;
  const l = createLoginLimiter(opts, () => t);
  for (let i = 0; i < 3; i++) l.recordFailure('1.1.1.1');
  assert.equal(l.isBlocked('1.1.1.1'), true);
  t = 1001;
  assert.equal(l.isBlocked('1.1.1.1'), false);
});

test('memory is bounded: the client table never exceeds maxClients', () => {
  const l = createLoginLimiter({ ...opts, globalMax: 10_000 });
  for (let i = 0; i < 500; i++) l.recordFailure(`spoofed-${i}`);
  assert.ok(l.size() <= 5);
});

test('off Vercel, forwarded headers are NOT trusted: spoofing them gains nothing', () => {
  const keys = new Set(
    ['1.2.3.4', '5.6.7.8', '9.9.9.9'].map((ip) => trustedClientKey(headers({ 'x-forwarded-for': ip, 'x-real-ip': ip, 'x-vercel-forwarded-for': ip }), { NODE_ENV: 'production' })),
  );
  assert.deepEqual([...keys], ['untrusted']);
  const l = createLoginLimiter(opts);
  for (let i = 0; i < 12; i++) l.recordFailure(trustedClientKey(headers({ 'x-forwarded-for': `203.0.113.${i}` }), {}));
  assert.equal(l.isBlocked(trustedClientKey(headers({ 'x-forwarded-for': '198.51.100.7' }), {})), true);
});

test('on Vercel the platform-set client address is used (Vercel overwrites X-Forwarded-For)', () => {
  const env = { VERCEL: '1' };
  assert.equal(trustedClientKey(headers({ 'x-vercel-forwarded-for': '203.0.113.9' }), env), '203.0.113.9');
  assert.equal(trustedClientKey(headers({ 'x-forwarded-for': '203.0.113.10, 10.0.0.1' }), env), '203.0.113.10');
  assert.equal(trustedClientKey(headers({ 'x-vercel-forwarded-for': '2001:db8::1' }), env), '2001:db8::1');
});

test('on Vercel a malformed or missing address falls into a shared bucket instead of a unique one', () => {
  const env = { VERCEL: '1' };
  assert.equal(trustedClientKey(headers({}), env), 'unknown');
  assert.equal(trustedClientKey(headers({ 'x-forwarded-for': '<script>' }), env), 'unknown');
  assert.equal(trustedClientKey(headers({ 'x-forwarded-for': 'a'.repeat(500) }), env), 'unknown');
});
