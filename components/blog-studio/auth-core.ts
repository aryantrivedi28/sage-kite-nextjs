import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

/*
 * Pure session logic for the blog studio's shared-password sign-in (no Next.js
 * imports, so it can be tested on its own). auth.ts wires it to cookies and env.
 *
 * The cookie value is `<expiry>.<signature>`. The signature is an HMAC of the
 * expiry and a fingerprint of the current password, so changing the password
 * (or the secret) signs everyone out.
 */

export const MIN_PASSWORD_LENGTH = 12;
const MIN_DISTINCT_CHARACTERS = 8;
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
 * guards publishing to the live blog, so it must not be guessable: 12+ characters, at least 8
 * different ones (so no repeated or patterned strings), and none of the obvious words. The same
 * rule applies in local development and in Production. Longer is still better: a few random
 * words with spaces ("maple orbit canyon pelican") pass; `openssl rand -base64 24` passes.
 */
export function passphraseProblem(password: string | undefined): string | null {
  if (!password) return 'missing';
  if (password.length < MIN_PASSWORD_LENGTH) return `shorter than ${MIN_PASSWORD_LENGTH} characters`;
  if (new Set(password).size < MIN_DISTINCT_CHARACTERS) return `fewer than ${MIN_DISTINCT_CHARACTERS} different characters`;
  // Also catch the usual letter-for-symbol swaps ("Passw0rd", "Adm1n", "L3tmein").
  const lower = password.toLowerCase();
  const swap = (one: string) => lower.replace(/[0345@$!1]/g, (c) => ({ '0': 'o', '3': 'e', '4': 'a', '5': 's', '@': 'a', $: 's', '!': 'i', '1': one })[c]!);
  const forms = [lower, swap('i'), swap('l')];
  if (GUESSABLE_FRAGMENTS.some((word) => forms.some((form) => form.includes(word)))) return 'contains a guessable word';
  return null;
}

/**
 * Why sign-in cannot be used, or null when it can. The text names the setting and the rule that failed, never a
 * value, so it is safe to write to the server log (auth.ts does, to explain a locked studio).
 */
export function authConfigProblem(password: string | undefined, secret: string | undefined): string | null {
  const passwordProblem = passphraseProblem(password);
  if (passwordProblem) return `STUDIO_PASSWORD: ${passwordProblem}`;
  if (!secret) return 'STUDIO_SESSION_SECRET: missing';
  if (secret.length < MIN_SECRET_LENGTH) return `STUDIO_SESSION_SECRET: shorter than ${MIN_SECRET_LENGTH} characters`;
  if (secret === password) return 'STUDIO_SESSION_SECRET: same as STUDIO_PASSWORD';
  return null;
}

/** Sign-in needs an acceptable password and a long secret (different from each other); anything weaker is treated as "not set up". */
export function isAuthConfigured(password: string | undefined, secret: string | undefined): boolean {
  return authConfigProblem(password, secret) === null;
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
