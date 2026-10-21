import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as core from '@/components/blog-studio/auth-core';

// Session signing, password comparison and the passphrase rule (decision.md D030, D031).

const pw = 'maple orbit canyon pelican';
const secret = 'x'.repeat(40);
const now = 1_800_000_000_000;

test('passphrase rule: strong values are accepted', () => {
  for (const ok of ['maple orbit canyon pelican', 'qT9v-Lm2x-Rk8p-Zw4n-Hs6d', 'X7f2Kq9mLp4Zr8Tn1VbC']) {
    assert.equal(core.passphraseProblem(ok), null, ok);
  }
});

test('passphrase rule: short, repetitive and guessable values are rejected', () => {
  assert.ok(core.passphraseProblem(undefined));
  assert.ok(core.passphraseProblem(''));
  assert.ok(core.passphraseProblem('short12chars'), 'under 20 characters');
  assert.ok(core.passphraseProblem('a'.repeat(30)), 'one repeated character');
  assert.ok(core.passphraseProblem('abababababababababababab'), 'too few different characters');
  for (const weak of ['MyPassword-For-The-Blog-2026', 'sagekite-blog-publishing-team', 'The-Studio-Is-Open-Today-9', 'qwerty-asdfgh-zxcvbn-poiuy', 'letmein-letmein-letmein-1']) {
    assert.ok(core.passphraseProblem(weak), weak);
  }
});

test('config: strong password and a long, different secret are required', () => {
  assert.equal(core.isAuthConfigured(pw, secret), true);
  assert.equal(core.isAuthConfigured('short', secret), false);
  assert.equal(core.isAuthConfigured('a-twelve-chars', secret), false, 'the old 12-character minimum no longer passes');
  assert.equal(core.isAuthConfigured(pw, 'short'), false);
  assert.equal(core.isAuthConfigured(pw, pw.padEnd(40, '!')), true);
  assert.equal(core.isAuthConfigured(secret, secret), false, 'secret must differ from the password');
  assert.equal(core.isAuthConfigured(undefined, secret), false);
  assert.equal(core.isAuthConfigured(pw, undefined), false);
});

test('password comparison', () => {
  assert.equal(core.passwordMatches(pw, pw), true);
  assert.equal(core.passwordMatches('nope', pw), false);
  assert.equal(core.passwordMatches(pw + 'x', pw), false);
  assert.equal(core.passwordMatches('', pw), false);
});

const value = core.createSessionValue(secret, pw, now);

test('session: valid when fresh and just before expiry, rejected after', () => {
  assert.equal(core.isSessionValid(value, secret, pw, now + 1000), true);
  assert.equal(core.isSessionValid(value, secret, pw, now + (core.SESSION_SECONDS - 5) * 1000), true);
  assert.equal(core.isSessionValid(value, secret, pw, now + (core.SESSION_SECONDS + 5) * 1000), false);
});

test('session: wrong secret, changed password, tampered signature and forged expiry are rejected', () => {
  assert.equal(core.isSessionValid(value, 'y'.repeat(40), pw, now + 1000), false);
  assert.equal(core.isSessionValid(value, secret, pw + '!', now + 1000), false, 'changing the password signs everyone out');
  const [expiry, signature] = value.split('.');
  assert.equal(core.isSessionValid(`${expiry}.${signature.slice(0, -2)}AA`, secret, pw, now + 1000), false);
  assert.equal(core.isSessionValid(`${Number(expiry) + 99999}.${signature}`, secret, pw, now + 1000), false);
});

test('session: garbage values are rejected without throwing', () => {
  for (const g of [undefined, '', 'abc', '.', '1.', '.x', 'a.b', '1.2.3', '99999999999999.x']) {
    assert.equal(core.isSessionValid(g as string | undefined, secret, pw, now), false, String(g));
  }
});
