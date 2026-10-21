/*
 * Module hooks for the unit tests (run with `npm test`). They let Node load the app's
 * TypeScript directly: `@/` imports are resolved, extensionless imports get .ts/.tsx, and
 * the pieces that need Next.js or the network are replaced with stubs in tests/stubs.
 * Nothing here talks to Sanity: @sanity/client is a recording fake.
 */
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const STUBS = {
  'server-only': 'stubs/empty.mjs',
  'next/headers': 'stubs/next-headers.mjs',
  'next/cache': 'stubs/next-cache.mjs',
  '@sanity/client': 'stubs/sanity-client.mjs',
  '@/content/blog': 'stubs/content-blog.mjs',
};
const SUFFIXES = ['.ts', '.tsx', '/index.ts', '/index.tsx'];

function probe(base) {
  if (existsSync(base) && statSync(base).isFile()) return base;
  for (const suffix of SUFFIXES) if (existsSync(base + suffix)) return base + suffix;
  return null;
}

export async function resolve(specifier, context, next) {
  if (STUBS[specifier]) {
    return { url: pathToFileURL(path.join(ROOT, 'tests', STUBS[specifier])).href, shortCircuit: true };
  }
  if (specifier.startsWith('@/')) {
    const file = probe(path.join(ROOT, specifier.slice(2)));
    if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
  }
  const parent = context.parentURL;
  if ((specifier.startsWith('./') || specifier.startsWith('../')) && parent?.startsWith('file://') && !parent.includes('/node_modules/')) {
    const file = probe(path.resolve(path.dirname(fileURLToPath(parent)), specifier));
    if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
  }
  return next(specifier, context);
}
