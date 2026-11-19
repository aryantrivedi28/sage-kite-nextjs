/*
 * Brake on wrong studio passwords (decision.md D031). Pure, so it is tested without a
 * server. Two layers, both per server instance:
 *   - per client: a few wrong passwords from one address block that address;
 *   - global: a larger budget shared by everybody, so changing address does not help.
 *
 * Serverless instances do not share memory, so this slows guessing but is not a
 * complete defence: the shared, durable limit is a Vercel Firewall rule (docs/sanity.md).
 */

export interface LimiterOptions {
  /** Wrong passwords allowed per client in the window. */
  perClientMax: number;
  /** Wrong passwords allowed from everyone together in the window. */
  globalMax: number;
  windowMs: number;
  /** Cap on tracked clients, so memory cannot grow without bound. */
  maxClients: number;
}

interface Entry {
  count: number;
  resetAt: number;
}

export function createLoginLimiter(options: LimiterOptions, now: () => number = Date.now) {
  const clients = new Map<string, Entry>();
  let global: Entry = { count: 0, resetAt: 0 };

  const active = (entry: Entry | undefined, t: number): entry is Entry => !!entry && entry.resetAt > t;

  function prune(t: number) {
    for (const [key, entry] of clients) if (entry.resetAt <= t) clients.delete(key);
  }

  return {
    isBlocked(client: string): boolean {
      const t = now();
      if (active(global, t) && global.count >= options.globalMax) return true;
      const entry = clients.get(client);
      return active(entry, t) && entry.count >= options.perClientMax;
    },
    recordFailure(client: string): void {
      const t = now();
      global = active(global, t) ? { count: global.count + 1, resetAt: global.resetAt } : { count: 1, resetAt: t + options.windowMs };
      if (clients.size >= options.maxClients) prune(t);
      const entry = clients.get(client);
      if (active(entry, t)) clients.set(client, { count: entry.count + 1, resetAt: entry.resetAt });
      else if (clients.size < options.maxClients) clients.set(client, { count: 1, resetAt: t + options.windowMs });
      // Table full of live entries: this client counts against the global budget only.
    },
    /** A right password clears that client's count. The global budget is not reset. */
    recordSuccess(client: string): void {
      clients.delete(client);
    },
    size: () => clients.size,
  };
}

/**
 * The address to count wrong passwords against. Forwarded-for headers can be written by
 * any client, so they are trusted only on Vercel, which overwrites X-Forwarded-For with
 * the real client address and does not forward external values (Vercel docs, "Request
 * headers", checked 21 October 2026). Anywhere else (local, self-hosted) nothing is
 * trusted and everyone shares one bucket, so spoofing a header gains nothing.
 */
export function trustedClientKey(headers: { get(name: string): string | null }, env: Record<string, string | undefined> = process.env): string {
  if (env.VERCEL !== '1') return 'untrusted';
  const raw = headers.get('x-vercel-forwarded-for') ?? headers.get('x-forwarded-for');
  const first = raw?.split(',')[0]?.trim();
  return first && /^[0-9a-fA-F:.]{3,45}$/.test(first) ? first : 'unknown';
}
