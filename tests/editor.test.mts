import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Editor, getExtensionField, getSchema } from '@tiptap/react';
import { EditorState, TextSelection } from '@tiptap/pm/state';
import { sinkListItem } from '@tiptap/pm/schema-list';
import type { Node as PMNode } from '@tiptap/pm/model';
import { fromDoc, selectedLines, toDoc, type BoxKind, type DocNode } from '@/components/blog-studio/editorDoc';
import { StudioListItem, boxExtensions, canIndent, canOutdent, listDepth } from '@/components/blog-studio/editorSetup';
import { listItems } from '@/components/blog-studio/postUtils';

// The studio's text boxes (decision.md D049): stored string ↔ the Tiptap editor's document, checked against the real
// schema of each box (built headless, no browser).

const schemas = {
  paragraphs: getSchema(boxExtensions('paragraphs')),
  list: getSchema(boxExtensions('list')),
  heading: getSchema(boxExtensions('heading')),
};

/** The editor's JSON for a stored string, as ProseMirror itself builds and checks it. */
function editorJson(kind: BoxKind, value: string, ordered = false) {
  const node = schemas[kind].nodeFromJSON(toDoc(kind, value, ordered));
  node.check();
  return node.toJSON() as DocNode;
}

test('each box schema holds only what it may store: no underline, strike, colour, code block, quote, rule or headings', () => {
  for (const [kind, schema] of Object.entries(schemas)) {
    const marks = Object.keys(schema.marks).sort();
    assert.deepEqual(marks, kind === 'heading' ? ['code', 'italic', 'link'] : ['bold', 'code', 'italic', 'link'], kind);
    for (const name of ['underline', 'strike', 'textStyle', 'highlight']) assert.equal(schema.marks[name], undefined, `${kind} ${name}`);
    for (const name of ['codeBlock', 'blockquote', 'horizontalRule', 'heading', 'hardBreak', 'image']) assert.equal(schema.nodes[name], undefined, `${kind} ${name}`);
  }
  assert.ok(schemas.list.nodes.bulletList && schemas.list.nodes.orderedList);
  assert.equal(schemas.paragraphs.nodes.bulletList, undefined);
});

const FEATURES = [
  'plain text',
  '**bold** and *italic* and ***both***',
  '**a *b* c**',
  '`code` and **`bold code`**',
  '[a link](/blog/x) and **see [the guide](/g) now** and [**bold** label](https://www.hubspot.com)',
  '5\\*3 \\[draft\\] \\`tick\\` back\\\\slash',
];

test('paragraph boxes: string → editor → string is identical for each feature, one paragraph per line', () => {
  for (const s of [...FEATURES, FEATURES.join('\n'), 'first\n\nafter an empty paragraph']) {
    assert.equal(fromDoc('paragraphs', editorJson('paragraphs', s)), s, s);
  }
});

test('paragraph boxes: editor JSON → string → editor JSON is identical', () => {
  for (const s of FEATURES) {
    const json = editorJson('paragraphs', s);
    assert.deepEqual(editorJson('paragraphs', fromDoc('paragraphs', json)), json, s);
  }
});

test('heading boxes: one line, no bold (headings are bold already), italic, code and links kept', () => {
  assert.equal(fromDoc('heading', editorJson('heading', 'Choose *one* `CRM` [now](/x)')), 'Choose *one* `CRM` [now](/x)');
  assert.equal(fromDoc('heading', editorJson('heading', '**Bold** heading')), 'Bold heading');
  assert.equal(fromDoc('heading', editorJson('heading', 'two\nlines')), 'two lines');
});

test('list boxes: levels by tabs, nesting as real sub-lists of the list type, clamped to 3 levels', () => {
  const s = 'one\n\ttwo **bold**\n\t\tthree\n\tfour\nfive';
  const json = editorJson('list', s, true);
  assert.equal(fromDoc('list', json), s);
  assert.deepEqual(editorJson('list', fromDoc('list', json), true), json);
  const top = json.content![0];
  assert.equal(top.type, 'orderedList');
  const sub = top.content![0].content![1];
  assert.equal(sub.type, 'orderedList', 'sub-levels use the list type');
  // Deeper than three levels, or more than one level at a time, is clamped.
  assert.equal(fromDoc('list', editorJson('list', 'a\n\t\t\t\tb\n\t\t\t\t\tc')), 'a\n\tb\n\t\tc');
  assert.deepEqual(listItems('a\n\t\t\t\tb\n\t\t\t\t\tc').map((i) => i.level), [0, 1, 2]);
  assert.equal(fromDoc('list', editorJson('list', '')), '', 'an empty list is one empty item');
});

/* ── Tab and Shift+Tab ───────────────────────────────────────────────── */

/** The editor state of a list with the cursor at the end of item `index` (in reading order). */
function listState(value: string, index: number): EditorState {
  const doc = schemas.list.nodeFromJSON(toDoc('list', value)) as PMNode;
  let pos = -1;
  let n = -1;
  doc.descendants((node, at) => {
    if (node.type.name !== 'paragraph') return true;
    if (++n === index) pos = at + node.nodeSize - 1;
    return false;
  });
  return EditorState.create({ schema: schemas.list, doc, selection: TextSelection.create(doc, pos) });
}

test('Tab indents an item up to the third level; never the first item; Shift+Tab never lifts a top-level item', () => {
  const value = 'a\nb\n\tc\n\t\td';
  assert.deepEqual([0, 1, 2, 3].map((i) => listDepth(listState(value, i))), [1, 1, 2, 3]);
  assert.equal(canIndent(listState(value, 0)), false, 'the first item has nothing to nest under');
  assert.equal(canIndent(listState(value, 1)), true);
  assert.equal(canIndent(listState('a\n\tb\n\tc', 2)), true, 'second level to third');
  assert.equal(canIndent(listState(value, 3)), false, 'already at the third level');
  assert.equal(canOutdent(listState(value, 1)), false, 'top level stays: Shift+Tab moves focus instead');
  assert.equal(canOutdent(listState(value, 2)), true);

  // Indenting "b" makes it a sub-item of "a"; the string gains a tab.
  const state = listState('a\nb', 1);
  let next = state;
  assert.ok(sinkListItem(schemas.list.nodes.listItem)(state, (tr) => (next = state.apply(tr))));
  assert.equal(fromDoc('list', next.doc.toJSON() as DocNode), 'a\n\tb');
});

test('the list item binds no Tab or Shift+Tab (Tiptap\'s nest with no limit); Enter still splits an item', () => {
  const shortcuts = getExtensionField<() => Record<string, unknown>>(StudioListItem, 'addKeyboardShortcuts', {
    name: StudioListItem.name,
    options: StudioListItem.options,
    storage: {},
    editor: { commands: {} },
  })!();
  assert.deepEqual(Object.keys(shortcuts), ['Enter']);
});

/**
 * Press a key in a real (headless) list editor: the editor's key handlers in order, as ProseMirror runs them. True when
 * one handled the key; false means the browser goes on to move focus.
 */
function pressInList(value: string, index: number, key: 'Tab' | 'Shift-Tab', times = 1) {
  const editor = new Editor({ element: null, extensions: boxExtensions('list'), content: toDoc('list', value) });
  editor.view.dispatch(editor.state.tr.setSelection(TextSelection.create(editor.state.doc, listState(value, index).selection.from)));
  const event = { key: 'Tab', keyCode: 9, shiftKey: key === 'Shift-Tab', altKey: false, ctrlKey: false, metaKey: false, type: 'keydown', preventDefault() {} };
  const handled: boolean[] = [];
  for (let n = 0; n < times; n++) {
    handled.push(editor.extensionManager.plugins.some((plugin) => plugin.props.handleKeyDown?.call(plugin, editor.view, event as never) === true));
  }
  const result = { handled, depth: listDepth(editor.state), value: fromDoc('list', editor.getJSON() as DocNode) };
  editor.destroy();
  return result;
}

test('in a list editor, Tab stops at the third level and then moves focus; Shift+Tab never lifts a top-level item', () => {
  // The reported case: Tab three times on "Back to top".
  const value = 'Top item\n\tSecond level\n\t\tThird level\nBack to top';
  assert.deepEqual(pressInList(value, 3, 'Tab', 3), {
    handled: [true, true, false],
    depth: 3,
    value: 'Top item\n\tSecond level\n\t\tThird level\n\t\tBack to top',
  });
  assert.deepEqual(pressInList(value, 2, 'Tab'), { handled: [false], depth: 3, value }, 'a level-3 item stays at level 3');
  assert.deepEqual(pressInList(value, 0, 'Tab'), { handled: [false], depth: 1, value }, 'the first item has nothing to nest under');
  assert.deepEqual(pressInList(value, 3, 'Shift-Tab'), { handled: [false], depth: 1, value }, 'a top-level item stays');
  assert.deepEqual(pressInList(value, 0, 'Shift-Tab'), { handled: [false], depth: 1, value });
  assert.deepEqual(pressInList(value, 2, 'Shift-Tab'), {
    handled: [true],
    depth: 2,
    value: 'Top item\n\tSecond level\n\tThird level\nBack to top',
  });
});

/* ── Turn into: the selection as lines ───────────────────────────────── */

test('selectedLines: the paragraphs or items a selection touches; no selection is every line', () => {
  const doc = schemas.paragraphs.nodeFromJSON(toDoc('paragraphs', 'one\ntwo\nthree')) as PMNode;
  // Positions: paragraph 0 holds 1-4, paragraph 1 holds 6-9, paragraph 2 holds 11-16.
  assert.deepEqual(selectedLines(doc, 7, 8), [1, 1]);
  assert.deepEqual(selectedLines(doc, 2, 12), [0, 2]);
  assert.deepEqual(selectedLines(doc, 7, 7), [0, 2]);
  const list = schemas.list.nodeFromJSON(toDoc('list', 'a\n\tb\nc')) as PMNode;
  const inB = listState('a\n\tb\nc', 1).selection.from;
  assert.deepEqual(selectedLines(list, inB - 1, inB), [1, 1], 'a nested item counts as its own line');
});
