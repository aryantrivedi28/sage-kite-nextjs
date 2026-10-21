// Stand-in for the content/blog registry (which is JSX): the same slugs as the folders in app/blog.
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../../app/blog/', import.meta.url));
export const posts = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('['))
  .map((d) => ({ slug: d.name, title: d.name, category: 'CRM', author: 'Sage Kite', publishedAt: '2026-01-01', featured: false }));
