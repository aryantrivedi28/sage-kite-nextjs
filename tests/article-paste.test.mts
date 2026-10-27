import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { APPLE_PASTE_NOTE, MAX_PASTE_BLOCKS, articleFromClipboard, articleText, describeBlocks, looksLikeArticle } from '@/components/blog-studio/articlePaste';
import { inlinePlainText, parseInline } from '@/components/blog-studio/inline';
import { MAX_TABLE_ROWS } from '@/components/blog-studio/postUtils';
import type { StudioBlock } from '@/components/blog-studio/types';

// Pasting a whole article (decision.md D047). The HTML below is generated in the shape each program puts on the
// clipboard (not copied from a real document): Google Docs' <b style="font-weight:normal" id="docs-internal-guid-…">
// wrapper and span styles, Word desktop's MsoNormal / MsoListParagraph classes and supportLists conditionals, Word for
// the web's role="heading" paragraphs and one-item lists.

/** Blocks without their random ids, for comparison. */
const shape = (blocks: StudioBlock[]) => blocks.map(({ id: _id, ...rest }) => rest);

/** Markers the page would show as text: a `*` or `[..](` left in the text a reader sees. */
const strayMarkers = (text: string) => inlinePlainText(parseInline(text)).match(/\*|\[[^\]]*\]\(/g);

/* ── Google Docs ─────────────────────────────────────────────────────── */

const googleDocs = `<meta charset="utf-8"><b style="font-weight:normal;" id="docs-internal-guid-5f1a2b3c-7fff-1234-abcd-0123456789ab"><h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">How to choose a CRM</span></h1><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;">Most small teams pick a CRM by </span><span style="font-size:11pt;font-family:Arial,sans-serif;font-weight:700;font-style:normal;">price</span><span style="font-size:11pt;font-weight:400;font-style:normal;">, then regret it. Read </span><a href="https://www.sagekite.com/blog/what-is-dubsado" style="text-decoration:none;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#1155cc;background-color:transparent;font-weight:400;font-style:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;">our Dubsado guide</span></a><span style="font-size:11pt;font-weight:400;"> first.</span></p><br /><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-weight:400;font-style:italic;">Second paragraph</span><span style="font-size:11pt;font-weight:400;font-style:normal;"> with a line<br />break &amp; an entity.</span></p><h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial,sans-serif;font-weight:400;font-style:normal;">What to compare</span></h2><ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;" aria-level="1"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size:11pt;font-weight:400;">Pipelines</span></p></li><ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;"><li dir="ltr" style="list-style-type:circle;font-size:11pt;" aria-level="2"><p dir="ltr" style="line-height:1.38;" role="presentation"><span style="font-size:11pt;font-weight:400;">Stages per pipeline</span></p></li></ul><li dir="ltr" style="list-style-type:disc;" aria-level="1"><p dir="ltr" role="presentation"><span style="font-size:11pt;font-weight:700;">Automations</span></p></li></ul><h3 dir="ltr"><span style="font-size:14pt;font-weight:400;">Steps</span></h3><ol style="margin-top:0;margin-bottom:0;padding-inline-start:48px;"><li dir="ltr" style="list-style-type:decimal;" aria-level="1"><p dir="ltr" role="presentation"><span style="font-weight:400;">List your stages</span></p></li><li dir="ltr" style="list-style-type:decimal;" aria-level="1"><p dir="ltr" role="presentation"><span style="font-weight:400;">Map them</span></p></li></ol><div dir="ltr" style="margin-left:0pt;" align="left"><table style="border:none;border-collapse:collapse;"><colgroup><col width="200" /><col width="200" /></colgroup><tbody><tr style="height:0pt"><td style="border-left:solid #000000 1pt;"><p dir="ltr"><span style="font-weight:700;">Tool</span></p></td><td><p dir="ltr"><span style="font-weight:700;">Price</span></p></td></tr><tr style="height:0pt"><td><p dir="ltr"><span style="font-weight:400;">Dubsado</span></p></td><td><p dir="ltr"><span style="font-weight:400;">$20</span></p></td></tr></tbody></table></div><p dir="ltr"><span style="font-size:11pt;"><span style="border:none;display:inline-block;overflow:hidden;width:602px;height:339px;"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXabc?key=xyz" width="602" height="339" style="margin-left:0px;margin-top:0px;" /></span></span></p><p dir="ltr"><span style="font-weight:400;">After the image.</span></p></b><br class="Apple-interchange-newline">`;

test('Google Docs: title, headings, styled spans, link, line break, nested list, numbered list, table and image', () => {
  const r = articleFromClipboard(googleDocs, 'plain text is ignored when HTML is present');
  assert.equal(r.title, 'How to choose a CRM');
  assert.deepEqual(shape(r.blocks), [
    {
      type: 'text',
      text: 'Most small teams pick a CRM by **price**, then regret it. Read [our Dubsado guide](https://www.sagekite.com/blog/what-is-dubsado) first.\n*Second paragraph* with a line\nbreak & an entity.',
    },
    { type: 'heading', level: 2, text: 'What to compare' },
    { type: 'list', ordered: false, items: 'Pipelines\n\tStages per pipeline\n**Automations**' },
    { type: 'heading', level: 3, text: 'Steps' },
    { type: 'list', ordered: true, items: 'List your stages\nMap them' },
    { type: 'table', rows: '| **Tool** | **Price** |\n| Dubsado | $20 |' },
    { type: 'image', src: '', alt: '', caption: '' },
    { type: 'text', text: 'After the image.' },
  ]);
  assert.equal(r.droppedImages, 1);
  assert.ok(r.notes.some((n) => /1 image needs uploading/.test(n)));
  assert.ok(!JSON.stringify(r).includes('googleusercontent'), 'the image URL is never copied');
  assert.equal(describeBlocks(r.blocks), '2 headings, 4 paragraphs, 2 lists, 1 table, 1 image');
  assert.ok(looksLikeArticle(r));
});

test('Google Docs: bold and italic on one span keep both (D049); font-weight 400 inside headings is not kept', () => {
  const html = '<b style="font-weight:normal;" id="docs-internal-guid-1"><h2><span style="font-weight:700;">Bold heading</span></h2><p><span style="font-weight:700;font-style:italic;">both</span><span style="font-weight:400;"> plain</span></p></b>';
  assert.deepEqual(shape(articleFromClipboard(html, '').blocks), [
    { type: 'heading', level: 2, text: 'Bold heading' },
    { type: 'text', text: '***both*** plain' },
  ]);
});

/* ── Word desktop ────────────────────────────────────────────────────── */

const wordDesktop = `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv=Content-Type content="text/html; charset=utf-8"><meta name=ProgId content=Word.Document><meta name=Generator content="Microsoft Word 15"><style><!-- p.MsoNormal, li.MsoNormal, div.MsoNormal {margin:0cm; font-size:12.0pt;} p.MsoListParagraphCxSpFirst {mso-style-type:export-only;} --></style><!--[if gte mso 10]><style>table.MsoNormalTable {mso-style-name:"Table Normal";}</style><![endif]--></head><body lang=EN-GB style='tab-interval:36.0pt;word-wrap:break-word'><!--StartFragment--><h1>Onboarding clients<o:p></o:p></h1>
<p class=MsoNormal>Good onboarding starts <b style='mso-bidi-font-weight:normal'>before</b> the
first call, and <i style='mso-bidi-font-style:normal'>keeps going</i> after it.<o:p></o:p></p>
<p class=MsoNormal><o:p>&nbsp;</o:p></p>
<h2>The checklist<o:p></o:p></h2>
<p class=MsoListParagraphCxSpFirst style='text-indent:-18.0pt;mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol'><span style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]>Send the welcome email<o:p></o:p></p>
<p class=MsoListParagraphCxSpMiddle style='text-indent:-18.0pt;mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol'><span style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]>Book the <b style='mso-bidi-font-weight:normal'>kickoff</b><o:p></o:p></p>
<p class=MsoListParagraphCxSpLast style='text-indent:-18.0pt;mso-list:l0 level2 lfo1'><![if !supportLists]><span style='font-family:"Courier New"'><span style='mso-list:Ignore'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span></span><![endif]>Share the portal<o:p></o:p></p>
<p class=MsoNormal>Then, in order:<o:p></o:p></p>
<p class=MsoListParagraphCxSpFirst style='text-indent:-18.0pt;mso-list:l1 level1 lfo2'><!--[if !supportLists]--><span style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span style='mso-list:Ignore'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Collect the contract<o:p></o:p></p>
<p class=MsoListParagraphCxSpLast style='text-indent:-18.0pt;mso-list:l1 level1 lfo2'><!--[if !supportLists]--><span style='mso-bidi-font-family:Calibri'><span style='mso-list:Ignore'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Take the deposit<o:p></o:p></p>
<p class=MsoQuote>Clients remember how the first week felt.<o:p></o:p></p>
<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape id="Picture_x0020_1" type="#_x0000_t75" style='width:200pt;height:100pt'><v:imagedata src="file:///C:/Users/x/AppData/Local/Temp/msohtmlclip1/01/clip_image001.png" o:title=""/></v:shape><![endif]--><![if !vml]><img width=267 height=133 src="file:///C:/Users/x/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png" alt="Onboarding timeline" v:shapes="Picture_x0020_1"><![endif]></span><o:p></o:p></p>
<!--EndFragment--></body></html>`;

test('Word desktop: H1 title, mso-bidi bold and italic, MsoListParagraph bullets and numbers (both conditional forms), MsoQuote, file:/// image', () => {
  const r = articleFromClipboard(wordDesktop, '');
  assert.equal(r.title, 'Onboarding clients');
  assert.deepEqual(shape(r.blocks), [
    { type: 'text', text: 'Good onboarding starts **before** the first call, and *keeps going* after it.' },
    { type: 'heading', level: 2, text: 'The checklist' },
    { type: 'list', ordered: false, items: 'Send the welcome email\nBook the **kickoff**\n\tShare the portal' },
    { type: 'text', text: 'Then, in order:' },
    { type: 'list', ordered: true, items: 'Collect the contract\nTake the deposit' },
    { type: 'quote', text: 'Clients remember how the first week felt.', cite: '' },
    { type: 'image', src: '', alt: 'Onboarding timeline', caption: '' },
  ]);
  assert.equal(r.droppedImages, 1);
  assert.ok(!JSON.stringify(r).includes('file:'), 'the file:/// path is never copied');
});

test('Word desktop: a list paragraph found only by its mso-list style, and lettered and roman markers', () => {
  const item = (marker: string, text: string) =>
    `<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt;mso-list:l2 level1 lfo3'><![if !supportLists]><span><span style='mso-list:Ignore'>${marker}<span>&nbsp;&nbsp; </span></span></span><![endif]>${text}</p>`;
  assert.deepEqual(shape(articleFromClipboard(item('a)', 'First') + item('b)', 'Second'), '').blocks), [{ type: 'list', ordered: true, items: 'First\nSecond' }]);
  assert.deepEqual(shape(articleFromClipboard(item('iv.', 'Four') + item('§', 'Other'), '').blocks), [
    { type: 'list', ordered: true, items: 'Four' },
    { type: 'list', ordered: false, items: 'Other' },
  ]);
});

/* ── Word for the web ────────────────────────────────────────────────── */

const wordWeb = `<div class="OutlineElement Ltr SCXW201 BCX0" style="margin:0px;padding:0px;"><p class="Paragraph SCXW201 BCX0" xml:lang="EN-US" lang="EN-US" paraid="1094" paraeid="{8a1}{12}" role="heading" aria-level="1" style="margin:0px;"><span data-contrast="none" xml:lang="EN-US" lang="EN-US" class="TextRun SCXW201 BCX0" style="font-size:20pt;line-height:34px;font-family:Aptos;"><span class="NormalTextRun SCXW201 BCX0">Retainers, explained</span></span><span class="EOP SCXW201 BCX0" data-ccp-props="{}">&nbsp;</span></p></div><div class="OutlineElement Ltr SCXW201 BCX0"><p class="Paragraph SCXW201 BCX0" paraid="1" role="heading" aria-level="2"><span class="TextRun SCXW201 BCX0" style="font-size:16pt;"><span class="NormalTextRun SCXW201 BCX0">Why it matters</span></span><span class="EOP SCXW201 BCX0">&nbsp;</span></p></div><div class="OutlineElement Ltr SCXW201 BCX0"><p class="Paragraph SCXW201 BCX0" paraid="2"><span class="TextRun SCXW201 BCX0" data-contrast="auto"><span class="NormalTextRun SCXW201 BCX0">Plain text with </span></span><span class="TextRun SCXW201 BCX0" style="font-weight:bold;"><span class="NormalTextRun SCXW201 BCX0">bold</span></span><span class="TextRun SCXW201 BCX0"><span class="NormalTextRun SCXW201 BCX0"> and </span></span><span class="TextRun SCXW201 BCX0" style="font-style:italic;"><span class="NormalTextRun SCXW201 BCX0">italic</span></span><span class="EOP SCXW201 BCX0">&nbsp;</span></p></div><div class="ListContainerWrapper SCXW201 BCX0"><ul class="BulletListStyle1 SCXW201 BCX0" role="list"><li data-leveltext="" data-font="Symbol" data-listid="5" data-list-defn-props="{}" aria-setsize="-1" data-aria-posinset="1" data-aria-level="1" aria-level="1" role="listitem" class="OutlineElement Ltr SCXW201 BCX0"><p class="Paragraph SCXW201 BCX0" paraid="3"><span class="TextRun SCXW201 BCX0"><span class="NormalTextRun SCXW201 BCX0">First</span></span><span class="EOP SCXW201 BCX0">&nbsp;</span></p></li></ul></div><div class="ListContainerWrapper SCXW201 BCX0"><ul class="BulletListStyle1 SCXW201 BCX0" role="list"><li data-listid="5" data-aria-level="2" aria-level="2" role="listitem" class="OutlineElement Ltr SCXW201 BCX0"><p class="Paragraph SCXW201 BCX0" paraid="4"><span class="TextRun SCXW201 BCX0"><span class="NormalTextRun SCXW201 BCX0">Second</span></span></p></li></ul></div><div class="ListContainerWrapper SCXW201 BCX0"><ol class="NumberListStyle1 SCXW201 BCX0" role="list"><li data-listid="6" data-aria-level="1" aria-level="1" role="listitem" class="OutlineElement Ltr SCXW201 BCX0"><p class="Paragraph SCXW201 BCX0" paraid="5"><span class="TextRun SCXW201 BCX0"><span class="NormalTextRun SCXW201 BCX0">One</span></span></p></li></ol></div>`;

test('Word for the web: role="heading" aria-level, TextRun spans, one-item lists merged', () => {
  const r = articleFromClipboard(wordWeb, '');
  assert.equal(r.title, 'Retainers, explained');
  assert.deepEqual(shape(r.blocks), [
    { type: 'heading', level: 2, text: 'Why it matters' },
    { type: 'text', text: 'Plain text with **bold** and *italic*' },
    { type: 'list', ordered: false, items: 'First\n\tSecond' },
    { type: 'list', ordered: true, items: 'One' },
  ]);
});

/* ── Plain and Markdown text ─────────────────────────────────────────── */

const markdown = `# Pricing your services

Most consultants undercharge. Here is __why__.
Second line with **bold** and *italic*.

## Three models
- Hourly
* Project
• Retainer

1. Pick a model
2) Test it

> Price is a signal.

---

### Notes ###
A [safe link](/blog/x), a [bad one](javascript:alert(1)) and [another](//evil.com).

| Plan | Price |
|---|---:|
| Pro | $20 |
`;

test('plain / Markdown text: title, headings, lists, quote, divider, unsafe links as text, Markdown table', () => {
  const r = articleFromClipboard('', markdown);
  assert.equal(r.title, 'Pricing your services');
  assert.deepEqual(shape(r.blocks), [
    { type: 'text', text: 'Most consultants undercharge. Here is **why**.\nSecond line with **bold** and *italic*.' },
    { type: 'heading', level: 2, text: 'Three models' },
    { type: 'list', ordered: false, items: 'Hourly\nProject\nRetainer' },
    { type: 'list', ordered: true, items: 'Pick a model\nTest it' },
    { type: 'quote', text: 'Price is a signal.', cite: '' },
    { type: 'divider' },
    { type: 'heading', level: 3, text: 'Notes' },
    { type: 'text', text: 'A [safe link](/blog/x), a bad one and another.' },
    { type: 'table', rows: '| Plan | Price |\n| Pro | $20 |' },
  ]);
});

test('tab-separated text with no HTML is one Table block', () => {
  assert.deepEqual(shape(articleFromClipboard('', 'A\tB\n1\t2').blocks), [{ type: 'table', rows: '| A | B |\n| 1 | 2 |' }]);
});

test('a single paragraph (HTML or plain, one or more lines) is not an article', () => {
  for (const [html, plain] of [
    ['<p>Just one sentence with <b>bold</b>.</p>', 'Just one sentence with bold.'],
    ['', 'Just one sentence.'],
    ['', 'Two lines\nof one paragraph'],
    ['<meta charset="utf-8"><b style="font-weight:normal;" id="docs-internal-guid-2"><span style="font-weight:400;">A phrase from Docs</span></b>', 'A phrase from Docs'],
  ]) {
    const r = articleFromClipboard(html, plain);
    assert.equal(r.blocks.length, 1, plain);
    assert.equal(r.blocks[0].type, 'text');
    assert.equal(looksLikeArticle(r), false, plain);
  }
  assert.equal(looksLikeArticle(articleFromClipboard('', '- one item')), true, 'a list is structure');
});

test('HTML with nothing in it falls back to the plain text', () => {
  assert.deepEqual(shape(articleFromClipboard('<meta charset="utf-8">', '## Heading\nText').blocks), [
    { type: 'heading', level: 2, text: 'Heading' },
    { type: 'text', text: 'Text' },
  ]);
});

/* ── Safety ──────────────────────────────────────────────────────────── */

test('scripts, event attributes and unsafe links are reduced to text; nothing but text is kept', () => {
  const html = '<script>alert(1)</script><style>p{color:red}</style><p onclick="x()">Hi <img src=x onerror=alert(1)><a href="javascript:alert(2)">link</a> <a href="//evil.com">other</a> <a href="/\\evil.com">third</a> &lt;b&gt;literal&lt;/b&gt;</p>';
  const r = articleFromClipboard(html, '');
  assert.deepEqual(shape(r.blocks), [
    { type: 'text', text: 'Hi' },
    { type: 'image', src: '', alt: '', caption: '' },
    { type: 'text', text: 'link other third <b>literal</b>' },
  ]);
  assert.ok(!/alert|onerror|onclick|evil|color/.test(JSON.stringify(r.blocks)));
  const plain = articleFromClipboard('', '[x](javascript:alert(1)) and [y](//evil.com) and [z](https://ok.example)');
  assert.equal((plain.blocks[0] as { text: string }).text, 'x and y and [z](https://ok.example)');
});

test('a link inside bold or italic text keeps both (D049)', () => {
  const r = articleFromClipboard('<p><b>Read <a href="/blog/x">the guide</a> today</b></p><p><i><a href="/a">Only a link</a></i></p>', '');
  assert.equal((r.blocks[0] as { text: string }).text, '**Read [the guide](/blog/x) today**\n*[Only a link](/a)*');
  assert.equal(strayMarkers((r.blocks[0] as { text: string }).text), null);
});

/* ── Title rule and merging ──────────────────────────────────────────── */

test('title rule: one leading H1 is the title; several H1s, or an H1 after text, are H2 sections', () => {
  const one = articleFromClipboard('<h1>Title</h1><h2>Part</h2><h3>Sub</h3><h4>Deeper</h4><p>x</p>', '');
  assert.equal(one.title, 'Title');
  assert.deepEqual(shape(one.blocks).map((b) => ('level' in b ? b.level : b.type)), [2, 3, 4, 'text'], 'h4 to h6 are H4 (D049)');

  const several = articleFromClipboard('<h1>A</h1><p>x</p><h1>B</h1><h2>C</h2>', '');
  assert.equal(several.title, undefined);
  assert.deepEqual(shape(several.blocks), [
    { type: 'heading', level: 2, text: 'A' },
    { type: 'text', text: 'x' },
    { type: 'heading', level: 2, text: 'B' },
    { type: 'heading', level: 2, text: 'C' },
  ]);

  const late = articleFromClipboard('<p>Intro</p><h1>A</h1>', '');
  assert.equal(late.title, undefined);
  assert.equal(late.blocks[1].type, 'heading');

  assert.equal(articleFromClipboard('', '# Title\n## Part\ntext').title, 'Title');
  assert.equal(articleFromClipboard('', '# One\ntext\n# Two').title, undefined);
  assert.equal(articleFromClipboard(`<h1>${'x'.repeat(141)}</h1><p>y</p>`, '').title, undefined, 'too long for the title field: kept as a heading');
});

test('consecutive paragraphs merge; lists of the same kind merge; a heading, quote or other kind starts a new block', () => {
  const r = articleFromClipboard('<p>a</p><div>b</div><p>&nbsp;</p><ul><li>1</li></ul><ul><li>2</li></ul><ol><li>3</li></ol><blockquote><p>q1</p><p>q2</p></blockquote><hr><p>c</p>', '');
  assert.deepEqual(shape(r.blocks), [
    { type: 'text', text: 'a\nb' },
    { type: 'list', ordered: false, items: '1\n2' },
    { type: 'list', ordered: true, items: '3' },
    { type: 'quote', text: 'q1\nq2', cite: '' },
    { type: 'divider' },
    { type: 'text', text: 'c' },
  ]);
});

test('a line break inside a list item or heading keeps it on one line', () => {
  assert.deepEqual(shape(articleFromClipboard('<h2>Two<br>lines</h2><ul><li>item<br>continued</li></ul>', '').blocks), [
    { type: 'heading', level: 2, text: 'Two lines' },
    { type: 'list', ordered: false, items: 'item continued' },
  ]);
});

/* ── Limits ──────────────────────────────────────────────────────────── */

test(`at most ${MAX_PASTE_BLOCKS} blocks per paste: the largest passes, one more is refused with a note and nothing converted`, () => {
  const headings = (n: number) => Array.from({ length: n }, (_, i) => `<h2>Section ${i}</h2>`).join('');
  assert.equal(articleFromClipboard(headings(MAX_PASTE_BLOCKS), '').blocks.length, MAX_PASTE_BLOCKS);
  const over = articleFromClipboard(headings(MAX_PASTE_BLOCKS + 1), '');
  assert.equal(over.refused, true);
  assert.deepEqual(over.blocks, []);
  assert.match(over.notes[0], new RegExp(`${MAX_PASTE_BLOCKS + 1} blocks; the limit is ${MAX_PASTE_BLOCKS}`));
});

test('an oversized table becomes paragraphs of its rows, with a note; a one-cell box becomes a paragraph; images in a table are noted', () => {
  const rows = Array.from({ length: MAX_TABLE_ROWS + 1 }, (_, i) => `<tr><td>r${i}</td><td>v${i}</td></tr>`).join('');
  const big = articleFromClipboard(`<h2>Data</h2><table>${rows}</table>`, '');
  assert.equal(big.blocks[1].type, 'text');
  assert.equal((big.blocks[1] as { text: string }).text.split('\n').length, MAX_TABLE_ROWS + 1);
  assert.equal((big.blocks[1] as { text: string }).text.split('\n')[0], 'r0 | v0');
  assert.ok(big.notes.some((n) => /101 rows × 2 columns/.test(n)));

  const box = articleFromClipboard('<p>Before</p><table><tr><td><p>Callout <b>text</b></p></td></tr></table><p>After</p>', '');
  assert.deepEqual(shape(box.blocks), [{ type: 'text', text: 'Before\nCallout **text**\nAfter' }]);

  const pictured = articleFromClipboard('<table><tr><td><img src="x.png">A</td><td>B</td></tr></table>', '');
  assert.equal(pictured.blocks[0].type, 'table');
  assert.equal(pictured.droppedImages, 0);
  assert.ok(pictured.notes.some((n) => /An image inside a table was left out/.test(n)));
});

test('"Paste as text" fallback for an HTML-only clipboard has no markers', () => {
  const text = articleText(articleFromClipboard(googleDocs, ''));
  assert.ok(text.startsWith('How to choose a CRM\nMost small teams pick a CRM by price, then regret it. Read our Dubsado guide first.'));
  assert.ok(text.includes('Tool\tPrice'));
  assert.ok(!/[*[\]]/.test(text));
});

/* ── Declarations, Apple Pages (decision.md D048) ────────────────────── */

// The real clipboard of a Pages document, as Chrome sees it: Pages puts only RTF on the clipboard and macOS converts it
// with the "Cocoa HTML Writer" (this file was made with textutil, the same converter). Not generated.
const pages = readFileSync(new URL('./fixtures/pages-clipboard.html', import.meta.url), 'utf8');

test('Pages: no DOCTYPE text, flagged as Apple with the note; lists, numbered list, table, bold and links still come through', () => {
  const r = articleFromClipboard(pages, '');
  const all = JSON.stringify(r.blocks);
  assert.ok(!/DOCTYPE|<!/.test(all), 'no declaration text in any block');
  assert.equal(r.source, 'apple');
  assert.equal(r.notes[0], APPLE_PASTE_NOTE);
  assert.ok(!r.blocks.some((b) => b.type === 'heading'), 'Pages HTML has no heading information, and none is guessed');
  assert.equal(r.droppedImages, 0, 'the image exists only in the RTFD, which browsers never expose');

  const lists = r.blocks.filter((b) => b.type === 'list') as Extract<StudioBlock, { type: 'list' }>[];
  assert.deepEqual(lists.map((l) => [l.ordered, l.items.split('\n').length]), [[false, 4], [true, 4]]);
  assert.ok(lists[0].items.includes('\tA sub-point that should be flattened into the list above'), 'the sub-point keeps its level (D049)');
  assert.ok(lists[1].items.includes('Add the stages to the CRM and **assign an owner** to each deal.'), 'bold run in the numbered list');

  const table = r.blocks.find((b) => b.type === 'table') as Extract<StudioBlock, { type: 'table' }>;
  assert.equal(table.rows.split('\n').length, 4);
  assert.equal(table.rows.split('\n')[0], '| **Stage** | **What the customer did** | **Owner** |');
  assert.ok(table.rows.split('\n').every((row) => row.split(' | ').length === 3), '4 rows × 3 columns');

  assert.ok(all.includes('[CRM implementation](https://www.sagekite.com/services/crm-implementation)'));
  assert.ok(all.includes('[HubSpot](https://www.hubspot.com)'));
  for (const b of r.blocks) if (b.type === 'text') for (const line of b.text.split('\n')) assert.equal(strayMarkers(line), null, line);
});

test('Google Docs, Word and plain HTML are not flagged as Apple', () => {
  for (const html of [googleDocs, wordDesktop, wordWeb, '<!DOCTYPE html><html><body><p class="p1">x</p><p>y</p></body></html>']) {
    assert.equal(articleFromClipboard(html, '').source, undefined);
  }
  // Generator meta with the attributes the other way round, single quotes.
  assert.equal(articleFromClipboard("<meta content='Cocoa HTML Writer' name='Generator'><p>a</p>", '').source, 'apple');
});

test('<!DOCTYPE>, <?xml?> and Word\'s <?xml:namespace … /> are removed, not pasted as text', () => {
  const word = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><body><?xml:namespace prefix = "o" ns = "urn:schemas-microsoft-com:office:office" /><h2>Section</h2><p class=MsoNormal>Body text<o:p></o:p></p></body></html>`;
  assert.deepEqual(shape(articleFromClipboard(word, '').blocks), [
    { type: 'heading', level: 2, text: 'Section' },
    { type: 'text', text: 'Body text' },
  ]);
  const plainHtml = '<!doctype html>\n<html lang="en"><head><title>t</title></head><body><h2>A</h2><p>b</p></body></html>';
  assert.deepEqual(shape(articleFromClipboard(plainHtml, '').blocks), [
    { type: 'heading', level: 2, text: 'A' },
    { type: 'text', text: 'b' },
  ]);
});

test('Google Docs: an image between paragraphs becomes an empty Image block in that place, without its Google address', () => {
  const html = '<meta charset="utf-8"><b style="font-weight:normal;" id="docs-internal-guid-9"><h2 dir="ltr"><span style="font-weight:400;">Image test</span></h2><p dir="ltr"><span style="font-weight:400;">Before.</span></p><p dir="ltr"><span style="font-size:11pt;"><span style="border:none;display:inline-block;overflow:hidden;width:602px;height:339px;"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdef?key=abc" width="602" height="339" style="margin-left:0px;margin-top:0px;" /></span></span></p><p dir="ltr"><span style="font-weight:400;">After.</span></p></b>';
  const r = articleFromClipboard(html, '');
  assert.deepEqual(shape(r.blocks), [
    { type: 'heading', level: 2, text: 'Image test' },
    { type: 'text', text: 'Before.' },
    { type: 'image', src: '', alt: '', caption: '' },
    { type: 'text', text: 'After.' },
  ]);
  assert.ok(!JSON.stringify(r).includes('googleusercontent'));
});

/* ── Code, levels, H4, dropped styling (decision.md D049) ────────────── */

test('<code>, <kbd> and monospace fonts (Google Docs, Word) become inline code; bold and italic together are kept', () => {
  const html = '<p>Run <code>npm test</code>, press <kbd>Ctrl</kbd>, set <span style="font-family:\'Courier New\',monospace;font-weight:400">MAX_ROWS</span> and <span style="font-family:&quot;Roboto Mono&quot;">x</span>.</p>'
    + '<p><b><i>both</i></b> and <span style="font-weight:700;font-style:italic">both again</span></p>';
  assert.deepEqual(shape(articleFromClipboard(html, '').blocks), [
    { type: 'text', text: 'Run `npm test`, press `Ctrl`, set `MAX_ROWS` and `x`.\n***both*** and ***both again***' },
  ]);
});

test('Markdown text: indentation is the list level, sub-items join the list whatever their marker, and #### is H4', () => {
  const md = '#### Small heading\n- top\n  - second\n    - third\n      - fourth is clamped\n  - back to second\n- top again\n1. numbered\n   - bullet under a number';
  assert.deepEqual(shape(articleFromClipboard('', md).blocks), [
    { type: 'heading', level: 4, text: 'Small heading' },
    { type: 'list', ordered: false, items: 'top\n\tsecond\n\t\tthird\n\t\tfourth is clamped\n\tback to second\ntop again' },
    { type: 'list', ordered: true, items: 'numbered\n\tbullet under a number' },
  ]);
});

test('h4, h5 and h6 become H4; Word desktop level 3 lists keep their level', () => {
  assert.deepEqual(shape(articleFromClipboard('<h2>A</h2><h4>B</h4><h5>C</h5><h6>D</h6>', '').blocks).map((b) => ('level' in b ? b.level : 0)), [2, 4, 4, 4]);
  const item = (level: number, text: string) =>
    `<p class=MsoListParagraph style='mso-list:l0 level${level} lfo1'><![if !supportLists]><span style='mso-list:Ignore'>·<span>&nbsp;</span></span><![endif]>${text}</p>`;
  assert.deepEqual(shape(articleFromClipboard(item(1, 'one') + item(2, 'two') + item(3, 'three') + item(1, 'four'), '').blocks), [
    { type: 'list', ordered: false, items: 'one\n\ttwo\n\t\tthree\nfour' },
  ]);
});

test('underline, colours, fonts, sizes, highlights and strikethrough are dropped; the text stays', () => {
  const html = '<p><u>underlined</u> <span style="text-decoration:underline;color:#ff0000;background-color:#ffff00;font-size:20pt;font-family:Georgia">styled</span> <s>struck</s> <del>deleted</del> <font color="red" face="Comic Sans MS">old font</font> <mark>marked</mark></p>';
  const r = articleFromClipboard(html, '');
  assert.deepEqual(shape(r.blocks), [{ type: 'text', text: 'underlined styled struck deleted old font marked' }]);
  // A link keeps its address but not its colour or underline.
  assert.deepEqual(shape(articleFromClipboard('<p><a href="/x"><span style="color:#1155cc;text-decoration:underline">link</span></a></p>', '').blocks), [
    { type: 'text', text: '[link](/x)' },
  ]);
});

test('text that looks like markers in a document is kept as characters (escaped), not read as formatting', () => {
  const r = articleFromClipboard('<p>5*3 = 15 and [draft] and `tick` and back\\slash</p>', '');
  assert.equal((r.blocks[0] as { text: string }).text, '5\\*3 = 15 and \\[draft\\] and \\`tick\\` and back\\\\slash');
  assert.equal(inlinePlainText(parseInline((r.blocks[0] as { text: string }).text)), '5*3 = 15 and [draft] and `tick` and back\\slash');
});
