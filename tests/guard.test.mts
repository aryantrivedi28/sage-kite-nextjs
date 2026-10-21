import assert from 'node:assert/strict';
import { test } from 'node:test';
import { EXPECTED_SANITY_PROJECT_ID, checkSanityWriteGuard, runtimeKind } from '@/lib/sanity/guard';

// The dataset guard (decision.md D031, finding I4). Pure: the environment is passed in.

const base = { NEXT_PUBLIC_SANITY_PROJECT_ID: EXPECTED_SANITY_PROJECT_ID, SANITY_API_WRITE_TOKEN: 'test-token-not-real' };
const prod = { ...base, VERCEL_ENV: 'production', NODE_ENV: 'production', NEXT_PUBLIC_SANITY_DATASET: 'production' };

test('production with the right project, the production dataset and a token may write', () => {
  const g = checkSanityWriteGuard(prod);
  assert.equal(g.ok, true);
  assert.equal(g.ok && g.dataset, 'production');
});

test('production refuses any dataset that is not exactly "production"', () => {
  for (const dataset of ['development', 'Production', 'production ', 'staging', '', undefined]) {
    const g = checkSanityWriteGuard({ ...prod, NEXT_PUBLIC_SANITY_DATASET: dataset });
    assert.equal(g.ok, false, `dataset ${JSON.stringify(dataset)}`);
    assert.equal(!g.ok && g.code, 'DATASET');
  }
});

test('production refuses a missing, empty or wrong project ID', () => {
  for (const project of [undefined, '', 'otherproject', EXPECTED_SANITY_PROJECT_ID + 'x']) {
    const g = checkSanityWriteGuard({ ...prod, NEXT_PUBLIC_SANITY_PROJECT_ID: project });
    assert.equal(g.ok, false);
    assert.equal(!g.ok && g.code, 'PROJECT');
  }
});

test('production refuses a missing or empty write token', () => {
  for (const token of [undefined, '']) {
    const g = checkSanityWriteGuard({ ...prod, SANITY_API_WRITE_TOKEN: token });
    assert.equal(g.ok, false);
    assert.equal(!g.ok && g.code, 'TOKEN');
  }
});

test('Vercel Preview is never writable, even with every secret and the production dataset set', () => {
  for (const dataset of ['production', 'development']) {
    const g = checkSanityWriteGuard({ ...prod, VERCEL_ENV: 'preview', NEXT_PUBLIC_SANITY_DATASET: dataset });
    assert.equal(g.ok, false);
    assert.equal(!g.ok && g.code, 'PREVIEW');
  }
});

test('a self-hosted `next start` (no VERCEL_ENV) is treated as production, so it needs the production dataset', () => {
  assert.equal(runtimeKind({ NODE_ENV: 'production' }), 'production');
  const g = checkSanityWriteGuard({ ...base, NODE_ENV: 'production', NEXT_PUBLIC_SANITY_DATASET: 'development' });
  assert.equal(g.ok, false);
  assert.equal(!g.ok && g.code, 'DATASET');
});

test('development keeps working with the development dataset, but still needs project and token', () => {
  const dev = { ...base, NODE_ENV: 'development', NEXT_PUBLIC_SANITY_DATASET: 'development' };
  assert.equal(checkSanityWriteGuard(dev).ok, true);
  assert.equal(checkSanityWriteGuard({ ...dev, SANITY_API_WRITE_TOKEN: undefined }).ok, false);
  assert.equal(checkSanityWriteGuard({ ...dev, NEXT_PUBLIC_SANITY_PROJECT_ID: 'wrong' }).ok, false);
  assert.equal(checkSanityWriteGuard({ ...dev, NEXT_PUBLIC_SANITY_DATASET: '' }).ok, false);
  assert.equal(checkSanityWriteGuard({ ...dev, NEXT_PUBLIC_SANITY_DATASET: '../x' }).ok, false);
});

test('the refusal messages never contain the token', () => {
  const secret = 'super-secret-token-value';
  for (const env of [{ ...prod, SANITY_API_WRITE_TOKEN: secret, NEXT_PUBLIC_SANITY_DATASET: 'development' }, { ...prod, VERCEL_ENV: 'preview', SANITY_API_WRITE_TOKEN: secret }]) {
    const g = checkSanityWriteGuard(env);
    assert.equal(g.ok, false);
    assert.ok(!JSON.stringify(g).includes(secret));
  }
});
