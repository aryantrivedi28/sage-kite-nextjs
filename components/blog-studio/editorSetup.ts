import { Extension, Mark, Node, type AnyExtension, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ListItem } from '@tiptap/extension-list';
import { Placeholder } from '@tiptap/extensions';
import { sinkListItem } from '@tiptap/pm/schema-list';
import type { EditorState } from '@tiptap/pm/state';
import type { BoxKind } from './editorDoc';
import { linkProblem } from './formatting';
import { MAX_LIST_LEVEL } from './postUtils';

/*
 * The Tiptap set-up of the studio's text boxes (decision.md D049). Studio only: never import this (or anything that
 * imports Tiptap) from StudioArticle.tsx or a public page. Each box's schema holds only what it may store, so marks
 * that are not in it (underline, colour, strikethrough, fonts) cannot be pasted or typed in:
 *   paragraphs  paragraphs with bold, italic, code and links
 *   list        one bullet or numbered list, three levels at most
 *   heading     one paragraph with italic, code and links (a heading is bold already)
 */

/** The document: what a box may hold at its top level. */
const documentFor = (kind: BoxKind) =>
  Node.create({ name: 'doc', topNode: true, content: kind === 'list' ? '(bulletList | orderedList)' : kind === 'heading' ? 'paragraph' : 'paragraph+' });

/**
 * Inline code. Tiptap's own code mark excludes every other mark; this one combines with bold, italic and links, as the
 * stored grammar does (inline.ts), so nothing is lost when a string is opened in the editor.
 */
const InlineCode = Mark.create({
  name: 'code',
  excludes: '',
  code: true,
  parseHTML: () => [{ tag: 'code' }],
  renderHTML: ({ HTMLAttributes }) => ['code', HTMLAttributes, 0],
  addKeyboardShortcuts() {
    return { 'Mod-e': () => this.editor.commands.toggleMark(this.name) };
  },
});

/** How many list items enclose the cursor: 1 for a top-level item, 0 outside a list. */
export function listDepth(state: EditorState): number {
  const { $from } = state.selection;
  let depth = 0;
  for (let d = $from.depth; d > 0; d--) if ($from.node(d).type.name === 'listItem') depth++;
  return depth;
}

/** The current item can go one level deeper: it is not at the third level and not the first item of its list. */
export function canIndent(state: EditorState): boolean {
  const depth = listDepth(state);
  return depth > 0 && depth <= MAX_LIST_LEVEL && sinkListItem(state.schema.nodes.listItem)(state);
}

/** The current item can go one level up: it is nested (a top-level item stays, the box holds one list). */
export const canOutdent = (state: EditorState) => listDepth(state) >= 2;

/** Indent the current item. False (nothing done) when it cannot, so Tab can move focus instead of being trapped. */
export const indentListItem = (editor: Editor) => canIndent(editor.state) && editor.commands.sinkListItem('listItem');

/** Outdent the current item. False when nothing was done. */
export const outdentListItem = (editor: Editor) => canOutdent(editor.state) && editor.commands.liftListItem('listItem');

/**
 * A list item without Tiptap's own Tab / Shift+Tab, which nest and lift with no limit. They ran whenever the studio's
 * keys below declined (an item at the third level), so Tab nested to a fourth level that the stored string cannot hold.
 * Enter is unchanged.
 */
export const StudioListItem = ListItem.extend({
  addKeyboardShortcuts() {
    return { Enter: () => this.editor.commands.splitListItem(this.name) };
  },
});

/** Keys: Enter and Shift+Enter both start a new paragraph or item; a heading has one line; Tab nests list items. */
const keysFor = (kind: BoxKind) =>
  Extension.create({
    name: 'studioKeys',
    priority: 1000,
    addKeyboardShortcuts() {
      if (kind === 'heading') return { Enter: () => true, 'Shift-Enter': () => true, 'Mod-Enter': () => true };
      const shortcuts: Record<string, () => boolean> = { 'Shift-Enter': () => this.editor.commands.enter() };
      // The only Tab bindings in a list box (StudioListItem has none): false when nothing was done, so focus moves on.
      if (kind === 'list') {
        shortcuts.Tab = () => indentListItem(this.editor);
        shortcuts['Shift-Tab'] = () => outdentListItem(this.editor);
      }
      return shortcuts;
    },
  });

/** The extensions of one box. */
export function boxExtensions(kind: BoxKind, placeholder = ''): AnyExtension[] {
  const list = kind === 'list';
  return [
    documentFor(kind),
    StarterKit.configure({
      document: false,
      code: false,
      underline: false,
      strike: false,
      codeBlock: false,
      horizontalRule: false,
      blockquote: false,
      heading: false,
      hardBreak: false,
      trailingNode: false,
      bold: kind === 'heading' ? false : undefined,
      bulletList: list ? undefined : false,
      orderedList: list ? undefined : false,
      listItem: false,
      listKeymap: list ? undefined : false,
      link: {
        openOnClick: false,
        autolink: false,
        linkOnPaste: false,
        // Every link goes through the same check as the Link field and the page (safeHref, D032 / D037).
        isAllowedUri: (url) => !linkProblem(url),
        HTMLAttributes: { target: null, rel: null, class: null },
      },
    }),
    ...(list ? [StudioListItem] : []),
    InlineCode,
    keysFor(kind),
    Placeholder.configure({ placeholder, includeChildren: list }),
  ];
}
