import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  escapeInline,
  inlineRuns,
  isExternalHref,
  normalizeRuns,
  parseInline,
  safeHref,
  serializeRuns,
  withoutEmphasis,
  type Run,
} from '@/components/blog-studio/inline';
import { stripInline } from '@/components/blog-studio/postUtils';
import { Inline } from '@/components/blog-studio/StudioArticle';

// The inline grammar of studio text (decision.md D049): parser, plain text, and writing runs back.

const html = (text: string) => renderToStaticMarkup(createElement(Inline, { text })).replace(/<!-- -->/g, '');

/* ── Marks ───────────────────────────────────────────────────────────── */

test('each mark renders: bold, italic, bold italic, code, link', () => {
  assert.equal(html('**b**'), '<strong>b</strong>');
  assert.equal(html('*i*'), '<em>i</em>');
  assert.equal(html('***bi***'), '<em><strong>bi</strong></em>');
  assert.equal(html('`x = 1`'), '<code>x = 1</code>');
  assert.equal(html('[guide](/blog/x)'), '<a href="/blog/x">guide</a>');
  assert.equal(html('[HubSpot](https://www.hubspot.com)'), '<a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">HubSpot</a>');
  assert.equal(html('[us](https://www.sagekite.com/about)'), '<a href="https://www.sagekite.com/about">us</a>');
});

test('nesting: italic in bold, bold in italic, a link in bold, bold and code in a link label', () => {
  assert.equal(html('**a *b* c**'), '<strong>a <em>b</em> c</strong>');
  assert.equal(html('*a **b** c*'), '<em>a <strong>b</strong> c</em>');
  assert.equal(html('**see [the guide](/g) now**'), '<strong>see <a href="/g">the guide</a> now</strong>');
  assert.equal(html('[**bold** and `code`](/g)'), '<a href="/g"><strong>bold</strong> and <code>code</code></a>');
  assert.equal(html('**a**`c`'), '<strong>a</strong><code>c</code>');
});

test('adjacent bold and italic runs are read apart (the rule of 3)', () => {
  assert.equal(html('**a***b*'), '<strong>a</strong><em>b</em>');
  assert.equal(html('*a***b**'), '<em>a</em><strong>b</strong>');
  assert.equal(html('**a*b*c**'), '<strong>a<em>b</em>c</strong>');
  assert.equal(html('***a** b*'), '<em><strong>a</strong> b</em>');
  assert.equal(html('***a* b**'), '<strong><em>a</em> b</strong>');
});

test('code is literal: no marks, links or escapes inside, one line only', () => {
  assert.equal(html('`**not bold** [x](/y) \\*`'), '<code>**not bold** [x](/y) \\*</code>');
  assert.equal(html('`unclosed'), '`unclosed');
  assert.equal(html('``'), '``');
});

test('every escape is a literal character', () => {
  assert.equal(html('5\\*3 and \\`tick\\` and \\[draft\\] \\(x\\) back\\\\slash'), '5*3 and `tick` and [draft] (x) back\\slash');
  assert.equal(html('\\*\\*not bold\\*\\*'), '**not bold**');
  assert.equal(html('a \\q b'), 'a \\q b', 'a backslash before another character stays');
});

test('anything that does not parse is literal text, never HTML', () => {
  for (const s of ['5 * 3 * 4', 'a ** b', '***', '****x****', '*unclosed', 'closed*', '[label]', '[label] (/x)', '[](/x)', '<b>x</b>', '&lt;']) {
    assert.equal(stripInline(s), s.trim(), s);
  }
  assert.equal(html('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;');
});

test('unsafe links are their label as text: javascript:, //host, /\\host, data:', () => {
  for (const url of ['javascript:alert(1)', '//evil.com', '/\\evil.com', 'data:text/html,x', 'ftp://x']) {
    assert.equal(html(`[click](${url})`), 'click', url);
    assert.deepEqual(parseInline(`[click](${url})`), [{ type: 'text', text: 'click' }]);
  }
  assert.equal(html('[**b**](javascript:x)'), '<strong>b</strong>');
});

test('stripInline: the text a reader sees', () => {
  assert.equal(stripInline('  **a** *b* ***c*** `d` [e **f**](/g) \\*h  '), 'a b c d e f *h');
  assert.equal(withoutEmphasis('**a** *b* `c` [d](/e)'), 'a b `c` [d](/e)');
});

test('safeHref and isExternalHref are unchanged (D032, D037)', () => {
  assert.equal(safeHref('/blog/x'), '/blog/x');
  assert.equal(safeHref('//x'), null);
  assert.equal(isExternalHref('https://www.sagekite.com.evil.com'), true);
});

/* ── Old grammar ─────────────────────────────────────────────────────── */

// The renderer before D049, copied as it was, to check that text written for it renders the same now.
const URL_PART = String.raw`(?:[^()\s]|\([^()\s]*\))+`;
const OLD_INLINE = new RegExp(String.raw`(\*\*[^*\n]+\*\*|\*[^*\s][^*\n]*\*|\[[^\]\n]+\]\(${URL_PART}\))`, 'g');
const OLD_LINK = new RegExp(String.raw`^\[([^\]\n]+)\]\((${URL_PART})\)$`);
function oldHtml(text: string) {
  const parts = text.split(OLD_INLINE).map((part, i) => {
    if (i % 2 === 0) return part;
    if (part.startsWith('**')) return createElement('strong', { key: i }, part.slice(2, -2));
    if (part.startsWith('[')) {
      const m = part.match(OLD_LINK);
      const href = m && safeHref(m[2]);
      if (!m || !href) return m ? m[1] : part;
      return isExternalHref(href)
        ? createElement('a', { key: i, href, target: '_blank', rel: 'noopener noreferrer' }, m[1])
        : createElement('a', { key: i, href }, m[1]);
    }
    return createElement('em', { key: i }, part.slice(1, -1));
  });
  return renderToStaticMarkup(createElement(Fragment, null, ...parts)).replace(/<!-- -->/g, '');
}

const OLD_VALID = [
  'Plain text with no markers at all.',
  '**Bold** at the start, *italic* in the middle and **bold at the end**',
  'A [link](/blog/what-is-dubsado) and an [outside link](https://www.hubspot.com/pricing).',
  'Wikipedia: [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management_(software)), with parentheses.',
  'Mail [us](mailto:hello@sagekite.com) or jump to [the FAQ](#faq).',
  'Refused: [click](javascript:alert(1)) and [host](//evil.com) stay text.',
  '5 * 3 * 4 = 60, and a lone * star, and a ** pair.',
  'snake_case_name, C:\\Users\\me, 50% off, £20/month & more <b>tags</b>',
  '*Italic sentence.* **Bold sentence.** [Link sentence](/x).',
  'Mid-word: un*believ*able and **re**do.',
  'Square [brackets] and (parentheses) on their own.',
  '**Price:** $20 per month (billed yearly) — see [pricing](/pricing).',
  'Pasted from Google Docs: **Tool** and *Creatives* and [Dubsado](https://www.sagekite.com/platforms/dubsado)',
  'Two **bold** runs, **twice**, and two *italic* ones, *twice*.',
];

test('every string written for the old grammar renders exactly as before', () => {
  for (const s of OLD_VALID) assert.equal(html(s), oldHtml(s), s);
});

test('the intentional differences from the old grammar (none occur in the published studio post, D049)', () => {
  // New syntax: escapes, code, bold italic, marks inside link labels and links inside bold.
  assert.notEqual(html('\\*x\\*'), oldHtml('\\*x\\*'));
  assert.notEqual(html('`x`'), oldHtml('`x`'));
  assert.notEqual(html('***x***'), oldHtml('***x***'));
  assert.notEqual(html('[**x**](/y)'), oldHtml('[**x**](/y)'));
  assert.notEqual(html('*see [x](/y)*'), oldHtml('*see [x](/y)*'));
  // A marker next to a space no longer opens or closes (CommonMark): the old grammar read these as bold and italic.
  assert.equal(html('** spaced **'), '** spaced **');
  assert.equal(html('*a *'), '*a *');
});

/* ── Writing back ────────────────────────────────────────────────────── */

/** Per character: its marks, as "b", "i", "c" and the link. */
const chars = (runs: Run[]) =>
  runs.flatMap((r) => [...r.text].map((ch) => ({ ch, b: !!r.bold, i: !!r.italic, c: !!r.code, href: r.href })));

/** Bold and italic overlap without nesting somewhere (italic over "ab", bold over "bc"): `*` markers cannot say that. */
function overlaps(runs: Run[]): boolean {
  const cs = chars(runs);
  const spans = (key: 'b' | 'i') => {
    const out: [number, number][] = [];
    cs.forEach((c, n) => {
      if (!c[key]) return;
      if (out.length && out[out.length - 1][1] === n) out[out.length - 1][1] = n + 1;
      else out.push([n, n + 1]);
    });
    return out;
  };
  return spans('b').some(([b0, b1]) => spans('i').some(([i0, i1]) => i0 < b1 && b0 < i1 && !(i0 <= b0 && b1 <= i1) && !(b0 <= i0 && i1 <= b1)));
}

/** Bold or italic changes between two letters (mid-word) somewhere: `*` markers there can read either way. */
function midWord(runs: Run[]): boolean {
  const cs = chars(runs);
  return cs.some((c, n) => n > 0 && (c.b !== cs[n - 1].b || c.i !== cs[n - 1].i) && !/\s/.test(c.ch) && !/\s/.test(cs[n - 1].ch));
}

/** Bold or italic changes exactly where a link or code starts or ends: brackets and backticks are letters to `*`. */
function atLinkEdge(runs: Run[]): boolean {
  const cs = chars(runs);
  return cs.some((c, n) => n > 0 && (c.b !== cs[n - 1].b || c.i !== cs[n - 1].i) && (c.href !== cs[n - 1].href || c.c || cs[n - 1].c));
}

const MARKS: Omit<Run, 'text'>[] = [];
for (const bold of [false, true]) for (const italic of [false, true]) for (const code of [false, true]) for (const href of [undefined, '/x']) {
  MARKS.push({ ...(bold && { bold }), ...(italic && { italic }), ...(code && { code }), ...(href && { href }) });
}

/** Every combination of marks over three runs of `texts`: returns how many came back identical. */
function everyCombination(texts: string[], mayLose: (runs: Run[]) => boolean): { identical: number; lossy: number } {
  let identical = 0;
  let lossy = 0;
  for (const a of MARKS) for (const b of MARKS) for (const c of MARKS) {
    const runs = [{ ...a, text: texts[0] }, { ...b, text: texts[1] }, { ...c, text: texts[2] }];
    const written = serializeRuns(runs);
    const back = inlineRuns(parseInline(written));
    const label = `${JSON.stringify(runs)} → ${written}`;
    assert.equal(serializeRuns(back), written, `stable: ${label}`);
    const before = chars(runs);
    const after = chars(back);
    // Always: the same text, code and links; bold and italic only where they were (spaces aside).
    assert.deepEqual(after.map((x) => [x.ch, x.c, x.href]), before.map((x) => [x.ch, x.c, x.href]), label);
    after.forEach((x, n) => assert.ok(/\s/.test(x.ch) || ((!x.b || before[n].b) && (!x.i || before[n].i)), label));
    if (!mayLose(runs)) {
      assert.deepEqual(after.filter((x) => !/\s/.test(x.ch)), before.filter((x) => !/\s/.test(x.ch)), label);
      identical++;
    } else lossy++;
  }
  return { identical, lossy };
}

test('runs → string → runs, every combination over three words: identical unless bold and italic overlap or change at a link or code edge', () => {
  const { identical, lossy } = everyCombination(['ab ', 'c d', ' x*y [z] \\w'], (runs) => overlaps(runs) || atLinkEdge(runs));
  assert.equal(identical + lossy, 16 ** 3);
  assert.ok(identical > 0);
});

test('bold and italic alone over three spaced words: every combination is identical unless they overlap', () => {
  const texts = ['ab ', 'c d', ' xy'];
  let identical = 0;
  for (const a of MARKS) for (const b of MARKS) for (const c of MARKS) {
    if ([a, b, c].some((m) => m.code || m.href)) continue;
    const runs = [{ ...a, text: texts[0] }, { ...b, text: texts[1] }, { ...c, text: texts[2] }];
    if (overlaps(runs)) continue;
    const back = chars(inlineRuns(parseInline(serializeRuns(runs)))).filter((x) => !/\s/.test(x.ch));
    assert.deepEqual(back, chars(runs).filter((x) => !/\s/.test(x.ch)), serializeRuns(runs));
    identical++;
  }
  assert.equal(identical, 62, 'all 64 combinations except the 2 where bold and italic overlap');
});

test('runs → string → runs, every combination mid-word: never adds bold or italic, always stable', () => {
  const { identical, lossy } = everyCombination(['ab', 'c d', 'x*y [z] \\w'], (runs) => overlaps(runs) || midWord(runs));
  assert.equal(identical + lossy, 16 ** 3);
});

test('overlapping bold and italic: the mark that would cross the other is ended with it', () => {
  // italic over "ab", bold over "bc": c loses its bold.
  const written = serializeRuns([{ text: 'a', italic: true }, { text: 'b', italic: true, bold: true }, { text: 'c', bold: true }]);
  assert.equal(written, '*a**b***c');
  // Opened together, the longer-lasting mark goes outside, so nothing is lost.
  assert.equal(serializeRuns([{ text: 'a', bold: true, italic: true }, { text: 'b', italic: true }]), '***a**b*');
  assert.equal(serializeRuns([{ text: 'a', bold: true, italic: true }, { text: 'b', bold: true }]), '***a*b**');
});

test('string → runs → string is identical for normalized strings, including escaped * ` [ ] typed as text', () => {
  for (const s of [
    'plain',
    '**bold** and *italic* and ***both***',
    '**a *b* c** then *d **e** f*',
    '`code` and **`bold code`** and [`code link`](/x)',
    '**see [the guide](/g) now** and [**bold** label](/h)',
    '5\\*3 \\[draft\\] \\`tick\\` back\\\\slash',
    '**a***b*',
    'tick in code: `a`\\``b`',
  ]) {
    assert.equal(serializeRuns(inlineRuns(parseInline(s))), s, s);
  }
});

test('writing keeps spaces outside markers and drops marks that only cover spaces', () => {
  assert.equal(serializeRuns([{ text: 'a' }, { text: ' bold ', bold: true }, { text: 'b' }]), 'a **bold** b');
  assert.equal(serializeRuns([{ text: 'a' }, { text: ' ', italic: true }, { text: 'b' }]), 'a b');
  assert.equal(serializeRuns([{ text: 'x', href: 'javascript:alert(1)' }]), 'x', 'an unsafe link is written as text');
  assert.equal(escapeInline('*`[]\\'), '\\*\\`\\[\\]\\\\');
});
