import assert from 'node:assert/strict';
import { test } from 'node:test';
import { compareListRows, emptyPost, listSortKey } from '@/components/blog-studio/postUtils';
import type { StudioPost } from '@/components/blog-studio/types';

// The studio's "Blog posts" list order (decision.md D060): saving a post must not move it.
// Ordering tests use timestamps at midday UTC. Tests that check the local calendar day use localNoon, an
// instant built in the machine's own time zone, so they pass in every time zone (midday UTC is already the
// next day at UTC+12 and beyond).

const localNoon = (y: number, m: number, d: number) => new Date(y, m - 1, d, 12).toISOString();

const post = (title: string, over: Partial<StudioPost> = {}): StudioPost => ({
  ...emptyPost(title, 'CRM', 'Aryan Trivedi', '/aryan_t.jpeg'),
  createdAt: '2026-06-01T12:00:00.000Z',
  savedAt: '2026-06-01T12:00:00.000Z',
  ...over,
});

const published = (title: string, publishedAt: string, over: Partial<StudioPost> = {}) =>
  post(title, { status: 'published', publishedAt, updatedAt: publishedAt, firstPublishedAt: `${publishedAt}T12:00:00.000Z`, ...over });

const scheduled = (title: string, scheduledFor: string, over: Partial<StudioPost> = {}) =>
  post(title, { status: 'scheduled', scheduledFor, publishedAt: scheduledFor.slice(0, 10), ...over });

const studioRow = (p: StudioPost) => ({ title: p.title, ...listSortKey(p) });
const codeRow = (title: string, publishedAt: string) => ({ title, day: publishedAt, stamp: '' });
const order = (rows: { title: string; day: string; stamp: string }[]) => [...rows].sort(compareListRows).map((r) => r.title);

test('saving (a new savedAt) does not change the sort key or the position of any post', () => {
  const posts = [
    published('Published', '2026-08-10'),
    scheduled('Scheduled', '2026-11-20T09:00:00.000Z'),
    post('Draft', { createdAt: '2026-09-05T12:00:00.000Z', savedAt: '2026-09-05T12:00:00.000Z' }),
    published('Older', '2026-03-02'),
  ];
  const before = order(posts.map(studioRow));
  for (const [i, p] of posts.entries()) {
    const resaved = { ...p, savedAt: '2026-12-31T12:00:00.000Z' };
    assert.deepEqual(listSortKey(resaved), listSortKey(p), p.title);
    const rows = posts.map((q, j) => studioRow(j === i ? resaved : q));
    assert.deepEqual(order(rows), before, p.title);
  }
  assert.deepEqual(before, ['Scheduled', 'Draft', 'Published', 'Older']);
});

test('a post published in March sorts below one published in October', () => {
  const march = published('March', '2026-03-15', { createdAt: '2026-10-30T12:00:00.000Z' });
  const october = published('October', '2026-10-01', { createdAt: '2026-01-01T12:00:00.000Z' });
  assert.deepEqual(order([march, october].map(studioRow)), ['October', 'March']);
});

test('scheduled posts are placed by their scheduled date, and by time on the same day', () => {
  const early = scheduled('Early', '2026-11-20T08:00:00.000Z');
  const late = scheduled('Late', '2026-11-20T15:00:00.000Z');
  const later = scheduled('Next week', '2026-11-27T08:00:00.000Z');
  const pub = published('Published', '2026-11-25');
  assert.equal(listSortKey(early).day, '2026-11-20');
  assert.deepEqual(order([early, late, later, pub].map(studioRow)), ['Next week', 'Published', 'Late', 'Early']);
});

test('studio and code posts interleave by date', () => {
  const rows = [
    studioRow(published('Studio Oct', '2026-10-10')),
    studioRow(published('Studio Jun', '2026-06-10')),
    codeRow('Code Aug', '2026-08-01'),
    codeRow('Code Dec', '2026-12-01'),
  ];
  assert.deepEqual(order(rows), ['Code Dec', 'Studio Oct', 'Code Aug', 'Studio Jun']);
});

test('same-day ties: later createdAt first, then title; code posts after studio posts', () => {
  const a = published('Bravo', '2026-10-10', { createdAt: '2026-10-01T12:00:00.000Z' });
  const b = published('Alpha', '2026-10-10', { createdAt: '2026-10-05T12:00:00.000Z' });
  const c = published('Charlie', '2026-10-10', { createdAt: '2026-10-01T12:00:00.000Z' });
  const rows = [studioRow(a), studioRow(b), studioRow(c), codeRow('Code', '2026-10-10')];
  assert.deepEqual(order(rows), ['Alpha', 'Bravo', 'Charlie', 'Code']);
  assert.deepEqual(order([codeRow('Zed', '2026-10-10'), codeRow('Ann', '2026-10-10')]), ['Ann', 'Zed']);
});

test('a draft without createdAt falls back to firstPublishedAt, then savedAt, without throwing', () => {
  const withFirst = post('First', { createdAt: '', firstPublishedAt: localNoon(2026, 7, 4), savedAt: localNoon(2026, 12, 1) });
  assert.deepEqual(listSortKey(withFirst), { day: '2026-07-04', stamp: localNoon(2026, 7, 4) });
  const bare = post('Bare', { createdAt: '', firstPublishedAt: undefined, savedAt: localNoon(2026, 12, 1) });
  assert.deepEqual(listSortKey(bare), { day: '2026-12-01', stamp: '' });
  const nothing = post('Nothing', { createdAt: '', savedAt: '' });
  assert.deepEqual(listSortKey(nothing), { day: '', stamp: '' });
  const junk = post('Junk', { createdAt: 'not a date', savedAt: '' });
  assert.equal(listSortKey(junk).day, '');
});

test('a published post with no publishedAt falls back the same way', () => {
  const p = published('No date', '', { createdAt: '', firstPublishedAt: localNoon(2026, 5, 6) });
  assert.equal(listSortKey(p).day, '2026-05-06');
  const q = published('No date either', '', { createdAt: localNoon(2026, 4, 1) });
  assert.equal(listSortKey(q).day, '2026-04-01');
});

test('a draft uses its created date, never its publish date field', () => {
  const d = post('Draft', { publishedAt: '2026-01-01', createdAt: localNoon(2026, 9, 9) });
  assert.equal(listSortKey(d).day, '2026-09-09');
});
