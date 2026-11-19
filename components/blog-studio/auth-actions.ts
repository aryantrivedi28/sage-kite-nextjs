'use server';

import { endSession } from './auth';
import type { ActionResult } from './types';

/*
 * Signing out of the blog studio. Signing IN is deliberately not a Server Action: it is a Route
 * Handler at its own path (app/api/sk-studio-ufn5xdafhll7/login/route.ts), so a Vercel WAF rate-limit
 * rule can target login attempts without also limiting saving, publishing or image uploads.
 * Errors are returned as values: thrown messages are hidden in production.
 */

export async function signOutStudioAction(): Promise<ActionResult<null>> {
  try {
    await endSession();
    return { ok: true, data: null };
  } catch {
    return { ok: false, error: 'Could not sign out. Try again.' };
  }
}
