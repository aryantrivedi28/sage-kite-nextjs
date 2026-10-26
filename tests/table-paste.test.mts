import assert from 'node:assert/strict';
import { test } from 'node:test';
import { INLINE_PATTERN, MAX_TABLE_COLUMNS, MAX_TABLE_ROWS, tableFromClipboard, tableRows } from '@/components/blog-studio/postUtils';

// Pasting a table from Word, Google Docs or Excel (decision.md D044). The HTML below follows the shape each program
// puts on the clipboard (generated, not copied from a real document): Word's conditional comments and MsoNormal classes,
// Google Docs' <b style="font-weight:normal"> wrapper and span styles, Excel's <col> and quoted cells.

const ok = (html: string, plain = '') => {
  const r = tableFromClipboard(html, plain);
  assert.equal(r.ok, true, JSON.stringify(r));
  return r as Extract<ReturnType<typeof tableFromClipboard>, { ok: true }>;
};

/* ── tab-separated text (all three programs) ─────────────────────────── */

test('tab-separated text becomes pipe rows', () => {
  const r = ok('', 'Feature\tDubsado\tHoneyBook\nPrice\t$20\t$19\nPipelines\tYes\tYes');
  assert.equal(r.text, '| Feature | Dubsado | HoneyBook |\n| Price | $20 | $19 |\n| Pipelines | Yes | Yes |');
  assert.deepEqual([r.rows, r.columns], [3, 3]);
  assert.deepEqual(tableRows(r.text)[1], ['Price', '$20', '$19']);
});

test('Windows line endings, a trailing newline and empty rows are tolerated', () => {
  const r = ok('', 'A\tB\r\n1\t2\r\n\r\n3\t4\r\n');
  assert.equal(r.text, '| A | B |\n| 1 | 2 |\n| 3 | 4 |');
});

test('Excel quotes cells that hold line breaks, tabs or quotes', () => {
  const r = ok('', 'Name\tNote\n"Line one\nline two"\t"He said ""hi"""\nPlain\t"a\tb"');
  assert.deepEqual(tableRows(r.text), [['Name', 'Note'], ['Line one line two', 'He said "hi"'], ['Plain', 'a b']]);
});

test('empty trailing and leading columns are dropped; short rows are padded', () => {
  assert.equal(ok('', 'A\tB\t\n1\t2\t').text, '| A | B |\n| 1 | 2 |');
  assert.equal(ok('', '\tA\tB\n\t1\t2').text, '| A | B |\n| 1 | 2 |');
  assert.deepEqual(tableRows(ok('', 'A\tB\tC\n1\t2\t').text), [['A', 'B', 'C'], ['1', '2', '']]);
});

test('a pipe inside a cell is escaped and survives the round trip', () => {
  const r = ok('', 'Expr\tMeaning\na|b\tor');
  assert.equal(r.text, '| Expr | Meaning |\n| a\\|b | or |');
  assert.deepEqual(tableRows(r.text), [['Expr', 'Meaning'], ['a|b', 'or']]);
});

test('ordinary text is not a table: no tabs, a single row, a stray tab, indented prose, one column', () => {
  for (const plain of ['Just a paragraph of text.', 'A\tB', 'One line\twith a tab\nand another line without', '\tIndented\n\tprose', 'Name\nPrice\nPipelines']) {
    assert.deepEqual(tableFromClipboard('', plain), { ok: false, reason: 'not-a-table' }, JSON.stringify(plain));
  }
  assert.deepEqual(tableFromClipboard('<p>hi</p>', 'hi'), { ok: false, reason: 'not-a-table' });
});

/* ── HTML: Word, Google Docs, Excel ──────────────────────────────────── */

const word = `<html xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset=utf-8><style><!-- table.MsoTable {mso-style-name:"Table Grid"} p.MsoNormal {margin:0} --></style></head>
<body lang=EN-US><!--StartFragment--><table class=MsoTableGrid border=1 cellspacing=0><tr><td width=120><p class=MsoNormal><b>Feature</b><o:p></o:p></p></td><td><p class=MsoNormal><b>Dubsado</b></p></td><td><p class=MsoNormal><b>HoneyBook</b></p></td></tr>
<tr><td><p class=MsoNormal>Price</p></td><td><p class=MsoNormal>$20&nbsp;/ month</p></td><td><p class=MsoNormal>$19</p></td></tr>
<tr><td><p class=MsoNormal>Docs &amp; forms</p></td><td><!--[if !supportLists]--><p class=MsoNormal>Yes</p></td><td><p class=MsoNormal><i>Limited</i></p></td></tr></table><!--EndFragment--><p class=MsoNormal>&nbsp;</p></body></html>`;

test('Word: cells, bold, italic, entities, comments and the empty paragraph after the table', () => {
  const r = ok(word, 'ignored plain text');
  assert.deepEqual(tableRows(r.text), [
    ['**Feature**', '**Dubsado**', '**HoneyBook**'],
    ['Price', '$20 / month', '$19'],
    ['Docs & forms', 'Yes', '*Limited*'],
  ]);
  assert.deepEqual([r.rows, r.columns], [3, 3]);
});

const docs = `<meta charset='utf-8'><meta charset="utf-8"><b style="font-weight:normal;" id="docs-internal-guid-1234"><div dir="ltr" style="margin-left:0pt;" align="left"><table style="border:none;border-collapse:collapse;"><colgroup><col width="200" /><col width="200" /></colgroup><tbody>
<tr style="height:0pt"><td><p dir="ltr"><span style="font-weight:700;">Tool</span></p></td><td><p dir="ltr"><span style="font-weight:700;">Best for</span></p></td></tr>
<tr><td><p><a href="https://www.sagekite.com/platforms/dubsado" style="text-decoration:none;"><span style="color:#1155cc;">Dubsado</span></a></p></td><td><p><span style="font-style:italic;">Creatives</span> and <span style="font-weight:400;">coaches</span></p></td></tr>
<tr><td><p><span>Bad link</span> <a href="javascript:alert(1)">click</a></p></td><td><p><a href="/blog/what-is-dubsado">Guide</a><br>second line</p></td></tr>
</tbody></table></div></b>`;

test('Google Docs: the font-weight:normal wrapper is not bold; span styles, links and line breaks are handled; javascript: links are dropped', () => {
  const r = ok(docs);
  assert.deepEqual(tableRows(r.text), [
    ['**Tool**', '**Best for**'],
    ['[Dubsado](https://www.sagekite.com/platforms/dubsado)', '*Creatives* and coaches'],
    ['Bad link click', '[Guide](/blog/what-is-dubsado) second line'],
  ]);
});

const excel = `<html xmlns:x="urn:schemas-microsoft-com:office:excel"><body><table border=0 cellpadding=0 cellspacing=0 width=300><!--StartFragment--><col width=100 span=3>
<tr height=20><td>Month</td><td>Leads</td><td>Won</td></tr>
<tr height=20><td>Jan</td><td align=right x:num>120</td><td align=right x:num>9</td></tr>
<tr height=20><td>Feb</td><td align=right>1,250</td><td></td></tr><!--EndFragment--></table></body></html>`;

test('Excel: <col>, numbers and empty cells', () => {
  assert.deepEqual(tableRows(ok(excel).text), [['Month', 'Leads', 'Won'], ['Jan', '120', '9'], ['Feb', '1,250', '']]);
});

test('merged cells (colspan and rowspan) keep later cells in their own columns', () => {
  const html = '<table><tr><th colspan=2>Plan</th><th>Price</th></tr><tr><td rowspan=2>Pro</td><td>Monthly</td><td>$20</td></tr><tr><td>Yearly</td><td>$200</td></tr></table>';
  assert.deepEqual(tableRows(ok(html).text), [['Plan', '', 'Price'], ['Pro', 'Monthly', '$20'], ['', 'Yearly', '$200']]);
});

test('HTML is never copied through: tags, scripts and attributes in a cell are reduced to text', () => {
  const html = '<table><tr><td><script>alert(1)</script><img src=x onerror=alert(1)>Safe <b onclick="x()">bold</b></td><td>&lt;b&gt;literal&lt;/b&gt;</td></tr></table>';
  const text = ok(html).text;
  assert.equal(text, '| Safe **bold** | <b>literal</b> |');
  assert.ok(!/alert|onerror|onclick/.test(text));
});

test('not a pure table: text around it, two tables, or no table at all', () => {
  assert.deepEqual(tableFromClipboard('<p>Intro paragraph</p><table><tr><td>a</td><td>b</td></tr></table>', 'Intro paragraph\na\tb'), { ok: false, reason: 'not-a-table' }, 'text before the table');
  assert.deepEqual(tableFromClipboard('<table><tr><td>a</td><td>b</td></tr></table><p>After</p>', ''), { ok: false, reason: 'not-a-table' }, 'text after the table');
  assert.deepEqual(tableFromClipboard('<table><tr><td>a</td></tr></table><table><tr><td>b</td></tr></table>', ''), { ok: false, reason: 'not-a-table' }, 'two tables');
  assert.deepEqual(tableFromClipboard('<table><tr><td>only</td></tr></table>', ''), { ok: false, reason: 'not-a-table' }, 'a single cell');
});

test('a table nested in a cell contributes its text only', () => {
  const html = '<table><tr><td>Outer<table><tr><td>inner 1</td><td>inner 2</td></tr></table></td><td>Right</td></tr></table>';
  assert.deepEqual(tableRows(ok(html).text), [['Outer inner 1 inner 2', 'Right']]);
});

/* ── limits ──────────────────────────────────────────────────────────── */

test(`the limit is ${MAX_TABLE_ROWS} rows by ${MAX_TABLE_COLUMNS} columns: the largest passes, one more of either is refused, never truncated`, () => {
  const grid = (rows: number, cols: number) => Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => `r${r}c${c}`).join('\t')).join('\n');
  const biggest = ok('', grid(MAX_TABLE_ROWS, MAX_TABLE_COLUMNS));
  assert.deepEqual([biggest.rows, biggest.columns], [MAX_TABLE_ROWS, MAX_TABLE_COLUMNS]);
  assert.deepEqual(tableFromClipboard('', grid(MAX_TABLE_ROWS + 1, 3)), { ok: false, reason: 'too-large', rows: MAX_TABLE_ROWS + 1, columns: 3 });
  assert.deepEqual(tableFromClipboard('', grid(3, MAX_TABLE_COLUMNS + 1)), { ok: false, reason: 'too-large', rows: 3, columns: MAX_TABLE_COLUMNS + 1 });
  const html = `<table>${Array.from({ length: MAX_TABLE_ROWS + 1 }, () => '<tr><td>a</td><td>b</td></tr>').join('')}</table>`;
  assert.equal(tableFromClipboard(html, '').ok, false);
});

/* ── existing tables are unaffected ──────────────────────────────────── */

test('the existing pipe format parses exactly as before', () => {
  const rows = 'Manual process | Automated process\nCopying leads by hand | Leads arrive in the CRM';
  assert.deepEqual(tableRows(rows), [['Manual process', 'Automated process'], ['Copying leads by hand', 'Leads arrive in the CRM']]);
  assert.deepEqual(tableRows('| A | B |\n| 1 | 2 |'), [['A', 'B'], ['1', '2']], 'outer pipes');
  assert.deepEqual(tableRows('A | B\n\n1 | 2 | 3'), [['A', 'B'], ['1', '2', '3']], 'blank lines skipped, ragged rows kept');
  assert.deepEqual(tableRows(''), []);
});

test('the converted text is safe to render and round-trips through the existing renderer input', () => {
  const r = ok(word);
  const again = tableRows(r.text).map((row) => row.join(' | ')).join('\n');
  assert.equal(tableRows(again).length, 3);
});


/* ── review fixes (decision.md D044): quotes, unclosed markers, plain-text fallback ───────── */

test('tab text without HTML: a cell that starts with a plain quote stays literal and does not swallow the table', () => {
  const unmatched = ok('', 'Name\tQuote\nAnn\t"Best CRM ever\nBob\tOkay\nCy\tFine');
  assert.deepEqual(tableRows(unmatched.text), [['Name', 'Quote'], ['Ann', '"Best CRM ever'], ['Bob', 'Okay'], ['Cy', 'Fine']]);
  assert.deepEqual([unmatched.rows, unmatched.columns], [4, 2]);

  // A later quote must not be mistaken for the closing one.
  const later = ok('', 'Name\tNote\nAnn\t"Best CRM ever\nBob\t"Okay"\nCy\tFine');
  assert.deepEqual(tableRows(later.text), [['Name', 'Note'], ['Ann', '"Best CRM ever'], ['Bob', '"Okay"'], ['Cy', 'Fine']]);
});

test('tab text without HTML: a cell typed as "quoted" keeps its quotes; mid-cell quotes are untouched', () => {
  const r = ok('', 'Name\tNote\nAnn\t"quoted"\nBob\tsaid "hi" twice\nCy\t"a" and "b"');
  assert.deepEqual(tableRows(r.text), [['Name', 'Note'], ['Ann', '"quoted"'], ['Bob', 'said "hi" twice'], ['Cy', '"a" and "b"']]);
});

test('Excel quoting is still honoured: line breaks, tabs and doubled quotes inside a quoted cell', () => {
  const r = ok('', 'Name\tNote\n"Line one\nline two"\t"He said ""hi"""\nPlain\t"a\tb"\n"""Quoted"""\tx');
  assert.deepEqual(tableRows(r.text), [['Name', 'Note'], ['Line one line two', 'He said "hi"'], ['Plain', 'a b'], ['"Quoted"', 'x']].map((row) => row));
});

test('a quoted-looking cell that Excel would not produce (closing quote followed by text) is literal', () => {
  const r = ok('', 'Name\tNote\nAnn\t"abc"def\nBob\tfine');
  assert.deepEqual(tableRows(r.text), [['Name', 'Note'], ['Ann', '"abc"def'], ['Bob', 'fine']]);
});

test('an unclosed <b> or <i> never leaves a stray marker', () => {
  const html = (cell: string) => `<table><tr><td>${cell}</td><td>x</td></tr><tr><td>c</td><td>d</td></tr></table>`;
  assert.deepEqual(tableRows(ok(html('<b>bold')).text)[0], ['**bold**', 'x']);
  assert.deepEqual(tableRows(ok(html('<i>it')).text)[0], ['*it*', 'x']);
  assert.deepEqual(tableRows(ok(html('plain <strong>then bold <a href="/blog/x">link')).text)[0], ['plain **then bold link**', 'x'], 'an unclosed link is kept as text, not as a half-made link');
  assert.deepEqual(tableRows(ok(html('<span style="font-weight:700">')).text)[0], ['', 'x'], 'an empty unclosed bold leaves nothing');
  // What the page does with the text: split it with the page's own inline pattern. Everything outside a matched
  // **bold**, *italic* or [link](url) part is shown as it is, so no asterisk may be left over there.
  for (const cell of ['<b>a', '<i>a', '<b><i>a', '<i><b>a', '<b>a</b><i>b', '<span style="font-style:italic">a']) {
    const text = ok(html(cell)).text;
    const outside = text.replace(/^\| | \|$/gm, '').split(INLINE_PATTERN).filter((_, i) => i % 2 === 0).join('');
    assert.ok(!outside.includes('*'), `${cell} → ${text}`);
  }
});

test('the plain-text version of a pasted table, for "Paste as text" when the clipboard has only HTML', () => {
  const r = ok(docs); // HTML only: no plain text given
  assert.equal(r.plain, 'Tool\tBest for\nDubsado\tCreatives and coaches\nBad link click\tGuide second line');
  assert.ok(!/[*[\]]/.test(r.plain), 'no formatting markers in the plain text');
  assert.equal(ok('', 'A\tB\n1\t2').plain, 'A\tB\n1\t2');
});
