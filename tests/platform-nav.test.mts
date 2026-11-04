import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Header, PLATFORM_MENU_ID } from '@/components/Header';
import { PlatformStrip } from '@/components/services/PlatformStrip';
import { PLATFORM_GROUPS, PLATFORM_PAGE_SLUGS, PLATFORMS } from '@/content/platforms';

// The header's Platforms dropdown and the /services platform strip (decision.md D070).

const g = globalThis as { __testPathname?: string };
const header = (pathname = '/') => {
  g.__testPathname = pathname;
  try {
    return renderToString(createElement(Header)).replace(/<!-- -->/g, '');
  } finally {
    delete g.__testPathname;
  }
};
const strip = () => renderToString(createElement(PlatformStrip)).replace(/<!-- -->/g, '');
const escapeHtml = (s: string) => s.replace(/&/g, '&amp;');

test('header: the dropdown links every platform page in the server HTML, and not GoHighLevel', () => {
  const html = header();
  assert.ok(PLATFORM_PAGE_SLUGS.length > 0);
  for (const slug of PLATFORM_PAGE_SLUGS) {
    assert.match(html, new RegExp(`<a [^>]*href="/platforms/${slug}"`), `no link to /platforms/${slug}`);
  }
  assert.ok(!html.includes('GoHighLevel'));
  assert.match(html, /<a [^>]*href="\/platforms"[^>]*>Platforms<\/a>/);
  // The panel is in the HTML while closed (hidden by CSS), so crawlers see the links.
  assert.match(html, new RegExp(`<div id="${PLATFORM_MENU_ID}" class="plat-menu">`));
});

// One row per platform page: the <a> from its href to its closing tag.
const rowOf = (html: string, slug: string) => html.match(new RegExp(`<a [^>]*href="/platforms/${slug}"[^>]*>.*?</a>`))?.[0] ?? '';

test('header: "General CRMs" is the cross-industry group, "By industry" the rest, in order', () => {
  const html = header();
  assert.ok(html.includes('>General CRMs<'));
  assert.ok(html.includes('>By industry<'));
  const split = html.indexOf('>By industry<');
  assert.ok(html.indexOf('>General CRMs<') < split);
  for (const p of PLATFORMS.filter((p) => p.slug)) {
    const at = html.indexOf(`href="/platforms/${p.slug}"`);
    if (p.group === 'cross-industry') assert.ok(at > -1 && at < split, `${p.name} should be under General CRMs`);
    else assert.ok(at > split, `${p.name} should be under By industry`);
  }
  // Inside "By industry": PLATFORM_GROUPS order, then PLATFORMS order.
  const linked = [...html.matchAll(/href="\/platforms\/([a-z0-9-]+)"/g)].map((m) => m[1]);
  assert.deepEqual([...linked].sort(), [...PLATFORM_PAGE_SLUGS].sort());
  const industry = PLATFORM_GROUPS.filter((g) => g.id !== 'cross-industry')
    .flatMap((g) => PLATFORMS.filter((p) => p.group === g.id && p.slug).map((p) => p.slug));
  assert.deepEqual(linked.slice(-industry.length), industry);
});

test('header: each row names its industry (navLabel, else label)', () => {
  const html = header();
  const groups = new Map(PLATFORM_GROUPS.map((g) => [g.id, g]));
  for (const p of PLATFORMS.filter((p) => p.slug)) {
    const row = rowOf(html, p.slug!);
    assert.ok(row.includes(`<span class="plat-name">${escapeHtml(p.name)}</span>`), `${p.name}: no name`);
    const g = groups.get(p.group)!;
    assert.ok(row.includes(escapeHtml(g.navLabel ?? g.label)), `${p.name}: no industry label`);
    if (p.group === 'cross-industry') assert.ok(row.includes('Any industry'));
  }
  assert.ok(rowOf(html, 'kajabi').includes('Coaching and courses'));
  assert.ok(rowOf(html, 'lofty').includes('Real estate'));
  assert.ok(!html.includes('Coaches and course businesses'));
});

test('header: the chevron is a disclosure button, collapsed, controlling the panel', () => {
  const html = header();
  const button = html.match(/<button[^>]*class="plat-toggle"[^>]*>/)?.[0];
  assert.ok(button, 'no chevron button');
  assert.match(button, /aria-expanded="false"/);
  assert.match(button, new RegExp(`aria-controls="${PLATFORM_MENU_ID}"`));
  assert.match(button, /aria-label="Show platform pages"/);
  assert.match(button, /type="button"/);
  assert.ok(html.includes(`id="${PLATFORM_MENU_ID}"`));
  assert.ok(!html.includes('role="menu"'));
});

test('header: the current platform page is marked aria-current="page"', () => {
  const html = header('/platforms/lofty');
  assert.match(rowOf(html, 'lofty'), /aria-current="page"/);
  assert.equal(html.match(/aria-current="page"/g)?.length, 1);
  assert.ok(!header('/services').includes('aria-current'));
});

test('strip: every platform by name, a link for every page, GoHighLevel as plain text', () => {
  const html = strip();
  for (const p of PLATFORMS) assert.ok(html.includes(`>${escapeHtml(p.name)}<`), `missing ${p.name}`);
  for (const slug of PLATFORM_PAGE_SLUGS) {
    assert.match(html, new RegExp(`<a [^>]*href="/platforms/${slug}"`), `no link to /platforms/${slug}`);
  }
  assert.match(html, /<span class="sv-chip">GoHighLevel<\/span>/);
  assert.doesNotMatch(html, /<a [^>]*>GoHighLevel<\/a>/);
  assert.match(html, /<nav class="sv-plat" aria-label="Platforms we implement">/);
  assert.match(html, /<p class="label">Platforms we implement<\/p>/);
});

test('strip: Custom CRM, See all platforms and the trademark line', () => {
  const html = strip();
  assert.match(html, /<a class="sv-chip" href="\/services\/crm-implementation#custom-crm">Custom CRM<\/a>/);
  assert.match(html, /<a class="link" href="\/platforms">See all platforms<\/a>/);
  assert.ok(html.includes('Platform names are trademarks of their owners. Sage Kite is independent and not affiliated with them.'));
  // Order: the platforms (as in PLATFORMS), then Custom CRM, then the text link.
  const names = [...html.matchAll(/class="sv-chip"[^>]*>([^<]+)</g)].map((m) => m[1]);
  assert.deepEqual(names, [...PLATFORMS.map((p) => p.name), 'Custom CRM']);
});
