import { verifyPasswordAndStartSession } from '@/components/blog-studio/auth';

/*
 * Blog studio sign-in (decision.md D032). Its own endpoint, so a Vercel WAF rate-limit rule can
 * target `POST /api/sk-studio-ufn5xdafhll7/login` and nothing else (docs/sanity.md). The in-app
 * protections still apply here: a delay on wrong passwords and a per-client and global brake.
 *
 * Route Handlers have no built-in cross-origin check (Server Actions do), so this one checks that
 * the request comes from this site, and only accepts a small JSON body.
 */

const MAX_BODY_CHARS = 1024;

const reply = (body: { ok: boolean; error?: string }, status: number, headers: Record<string, string> = {}) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });

function fromThisSite(request: Request): boolean {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request): Promise<Response> {
  if (!fromThisSite(request)) return reply({ ok: false, error: 'Cross-site requests are not allowed.' }, 403);
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return reply({ ok: false, error: 'Send the password as JSON.' }, 415);
  }
  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY_CHARS) return reply({ ok: false, error: 'Request too large.' }, 413);

  let password: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_CHARS) return reply({ ok: false, error: 'Request too large.' }, 413);
    password = (JSON.parse(text) as { password?: unknown } | null)?.password;
  } catch {
    return reply({ ok: false, error: 'Send the password as JSON.' }, 400);
  }
  if (typeof password !== 'string' || !password) return reply({ ok: false, error: 'Enter the team password.' }, 400);

  const result = await verifyPasswordAndStartSession(password);
  if (result.ok) return reply({ ok: true }, 200);
  if (result.code === 'RATE_LIMITED') return reply({ ok: false, error: result.error }, 429, { 'Retry-After': '900' });
  if (result.code === 'NOT_CONFIGURED') return reply({ ok: false, error: result.error }, 503);
  return reply({ ok: false, error: result.error }, 401);
}
