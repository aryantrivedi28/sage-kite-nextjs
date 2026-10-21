import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

/*
 * Pure session logic for the blog studio's shared-password sign-in (no Next.js
 * imports, so it can be tested on its own). auth.ts wires it to cookies and env.
 *
 * The cookie value is `<expiry>.<signature>`. The signature is an HMAC of the
 * expiry and a fingerprint of the current password, so changing the password
 * (or the secret) signs everyone out.
 */

export const MIN_PASSWORD_LENGTH = 20;
const MIN_DISTINCT_CHARACTERS = 12;
const GUESSABLE_FRAGMENTS = ['password', 'passphrase', 'sagekite', 'sage kite', 'studio', 'qwerty', '123456', 'letmein', 'welcome', 'admin'];
export const MIN_SECRET_LENGTH = 32;
export const SESSION_SECONDS = 60 * 60 * 24 * 7;

const sha256 = (value: string) => createHash('sha256').update(value).digest();

function sign(expiry: number, secret: string, password: string): string {
  const fingerprint = sha256(password).toString('hex');
  return createHmac('sha256', secret).update(`${expiry}.${fingerprint}`).digest('base64url');
}

/**
 * Why a studio passphrase is too weak, or null when it is acceptable. One shared password
 * guards publishing to the live blog, so it must be long and not guessable: 20+ characters,
 * at least 12 different ones, and none of the obvious words. A few random words with
 * spaces ("maple orbit canyon pelican") pass; `openssl rand -base64 24` passes.
 */
export function passphraseProblem(password: string | undefined): string | null {
  if (!password) return 'missing';
  if (password.length < MIN_PASSWORD_LENGTH) return `shorter than ${MIN_PASSWORD_LENGTH} characters`;
  if (new Set(password).size < MIN_DISTINCT_CHARACTERS) return `fewer than ${MIN_DISTINCT_CHARACTERS} different characters`;
  const lower = password.toLowerCase();
  if (GUESSABLE_FRAGMENTS.some((word) => lower.includes(word))) return 'contains a guessable word';
  return null;
}

/** Sign-in needs a strong passphrase and a long secret (different from each other); anything weaker is treated as "not set up". */
export function isAuthConfigured(password: string | undefined, secret: string | undefined): boolean {
  return passphraseProblem(password) === null && !!secret && secret.length >= MIN_SECRET_LENGTH && secret !== password;
}

/** Constant-time password check (both sides are hashed first so lengths match). */
export function passwordMatches(input: string, password: string): boolean {
  return timingSafeEqual(sha256(input), sha256(password));
}

export function createSessionValue(secret: string, password: string, nowMs = Date.now()): string {
  const expiry = Math.floor(nowMs / 1000) + SESSION_SECONDS;
  return `${expiry}.${sign(expiry, secret, password)}`;
}

export function isSessionValid(value: string | undefined, secret: string, password: string, nowMs = Date.now()): boolean {
  if (!value) return false;
  const [expiryText, signature, ...rest] = value.split('.');
  if (rest.length || !expiryText || !signature || !/^\d{1,12}$/.test(expiryText)) return false;
  const expiry = Number(expiryText);
  if (expiry <= Math.floor(nowMs / 1000)) return false;
  const expected = Buffer.from(sign(expiry, secret, password));
  const actual = Buffer.from(signature);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
