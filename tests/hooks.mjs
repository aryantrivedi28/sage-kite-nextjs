/*
 * Module hooks for the unit tests (run with `npm test`). They let Node load the app's
 * TypeScript directly: `@/` imports are resolved, extensionless imports get .ts/.tsx, and
 * the pieces that need Next.js or the network are replaced with stubs in tests/stubs (next/link and next/image
 * are thin shims over the real components). Statically imported images become { src, width, height }.
 * .tsx files (JSX, which Node cannot strip) are compiled with the project's own TypeScript.
 * Nothing here talks to Sanity: @sanity/client is a recording fake.
 */
import { existsSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const STUBS = {
  'server-only': 'stubs/empty.mjs',
  'next/headers': 'stubs/next-headers.mjs',
  'next/cache': 'stubs/next-cache.mjs',
  '@sanity/client': 'stubs/sanity-client.mjs',
  '@/content/blog': 'stubs/content-blog.mjs',
  'next/navigation': 'stubs/next-navigation.mjs',
  'next/link': 'stubs/next-link.mjs',
  'next/image': 'stubs/next-image.mjs',
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

export async function load(url, context, next) {
  // A statically imported image (e.g. the header logo): the object next/image expects, with the real size of a PNG.
  if (url.startsWith('file://') && /\.(png|jpe?g|webp|gif|svg)$/i.test(url)) {
    const file = fileURLToPath(url);
    const bytes = await readFile(file);
    const png = bytes.length > 24 && bytes.readUInt32BE(12) === 0x49484452;
    const size = png ? { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) } : { width: 1, height: 1 };
    const src = '/' + path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/');
    return { format: 'module', source: `export default ${JSON.stringify({ src, ...size })};`, shortCircuit: true };
  }
  // A CSS module (e.g. components/blog-studio/fields.tsx's styles): every class name maps to itself.
  if (url.startsWith('file://') && url.endsWith('.module.css')) {
    return { format: 'module', source: 'export default new Proxy({}, { get: (_, k) => (typeof k === "string" ? k : undefined) });', shortCircuit: true };
  }
  if (url.startsWith('file://') && url.endsWith('.tsx') && !url.includes('/node_modules/')) {
    const { default: ts } = await import('typescript');
    const { outputText } = ts.transpileModule(await readFile(fileURLToPath(url), 'utf8'), {
      fileName: fileURLToPath(url),
      compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    });
    return { format: 'module', source: outputText, shortCircuit: true };
  }
  return next(url, context);
}
