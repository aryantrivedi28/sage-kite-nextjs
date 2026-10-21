import 'server-only';
import { cookies, headers } from 'next/headers';
import {
  SESSION_SECONDS,
  createSessionValue,
  isAuthConfigured,
  isSessionValid,
  passwordMatches,
} from './auth-core';
import { createLoginLimiter, trustedClientKey } from './rate-limit';
import { runtimeKind } from '@/lib/sanity/guard';
import { STUDIO_PATH } from './paths';

/*
 * Shared-password sign-in for the blog studio (decision.md D030). One team
 * password (STUDIO_PASSWORD) and a signing secret (STUDIO_SESSION_SECRET), both
 * server-only. Until both are set (a strong passphrase of 20+ characters, secret 32+),
 * the deployed studio stays browser-only and cannot write to Sanity. Vercel Preview
 * never offers sign-in, even if the variables are present there.
 *
 * Every Server Action re-checks the session through server.ts; the page alone is
 * never the guard.
 */

/* The cookie is limited to the studio's page path (paths.ts), which is also where its Server Actions
   are posted, so it is not sent with any other request. The sign-in endpoint is a different path:
   a server may set a cookie for any path on its own host. */
const SESSION_COOKIE = 'sk_studio_session';

const config = () => ({ password: process.env.STUDIO_PASSWORD, secret: process.env.STUDIO_SESSION_SECRET });

export function isStudioAuthConfigured(): boolean {
  if (runtimeKind() === 'preview') return false;
  const { password, secret } = config();
  return isAuthConfigured(password, secret);
}

export async function isStudioSignedIn(): Promise<boolean> {
  if (!isStudioAuthConfigured()) return false;
  const { password, secret } = config();
  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  return isSessionValid(value, secret!, password!);
}

const limiter = createLoginLimiter({ perClientMax: 8, globalMax: 40, windowMs: 15 * 60 * 1000, maxClients: 500 });

export type SignInResult =
  | { ok: true }
  | { ok: false; code: 'NOT_CONFIGURED' | 'RATE_LIMITED' | 'WRONG_PASSWORD'; error: string };

export async function verifyPasswordAndStartSession(input: unknown): Promise<SignInResult> {
  if (!isStudioAuthConfigured()) {
    return { ok: false, code: 'NOT_CONFIGURED', error: 'Team sign-in is not set up on this site yet.' };
  }
  const { password, secret } = config();

  const client = trustedClientKey(await headers());
  if (limiter.isBlocked(client)) {
    return { ok: false, code: 'RATE_LIMITED', error: 'Too many wrong passwords. Wait a few minutes and try again.' };
  }

  if (typeof input !== 'string' || !passwordMatches(input, password!)) {
    limiter.recordFailure(client);
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { ok: false, code: 'WRONG_PASSWORD', error: 'That password is not right.' };
  }

  limiter.recordSuccess(client);
  (await cookies()).set({
    name: SESSION_COOKIE,
    value: createSessionValue(secret!, password!),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: STUDIO_PATH,
    maxAge: SESSION_SECONDS,
  });
  return { ok: true };
}

export async function endSession(): Promise<void> {
  (await cookies()).set({ name: SESSION_COOKIE, value: '', httpOnly: true, path: STUDIO_PATH, maxAge: 0 });
}
