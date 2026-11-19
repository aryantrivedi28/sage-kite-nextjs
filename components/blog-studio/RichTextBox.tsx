'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { EditorContent, useEditor, useEditorState, type Editor } from '@tiptap/react';
import { Slice } from '@tiptap/pm/model';
import type { EditorState, Transaction } from '@tiptap/pm/state';
import type { EditorView } from '@tiptap/pm/view';
import { Bold, Code, IndentDecrease, IndentIncrease, Italic, Link as LinkIcon, RemoveFormatting, Unlink } from 'lucide-react';
import { articleFromClipboard, articleText, looksLikeArticle, type PastedArticle } from './articlePaste';
import { imagePaste } from './clipboard';
import { fromDoc, listLines, selectedLines, toDoc, type BoxKind, type DocNode } from './editorDoc';
import { boxExtensions, indentListItem, listDepth, outdentListItem } from './editorSetup';
import { TURN_INTO_OPTIONS, linkProblem, type TurnInto } from './formatting';
import { escapeInline } from './inline';
import { MAX_LIST_LEVEL, MAX_TABLE_COLUMNS, MAX_TABLE_ROWS, listItems, tableFromClipboard, type PastedTable } from './postUtils';
import { Inline, NestedList } from './StudioArticle';
import type { StudioBlockType } from './types';
import styles from './BlogStudio.module.css';

/*
 * A studio text box that shows its formatting (decision.md D049): Paragraphs, List, Quote, FAQ answer and Heading.
 * The stored value stays the marker string of inline.ts; editorDoc.ts converts it to and from the editor's document.
 *
 * A post can have hundreds of boxes, so a Tiptap editor is mounted only while a box is being edited (focused or
 * clicked). The rest of the time the box shows the same text through the page's own renderer (`Inline`), so it looks
 * the same; clicking it places the cursor where it was clicked.
 */

interface RichTextBoxProps {
  kind: BoxKind;
  /** List boxes: numbered or bulleted (the Bullets / Numbered choice). */
  ordered?: boolean;
  value: string;
  onChange: (v: string) => void;
  label: string;
  placeholder?: string;
  /** Height in lines when empty. */
  rows?: number;
  /** The block type the box belongs to: a paste that is only one block of this type is pasted into the box. */
  blockType?: StudioBlockType;
  /** Turn the selected lines (or the whole block) into another type. Not offered on FAQ answers. */
  onTurnInto?: (startLine: number, endLine: number, target: TurnInto) => void;
  /** Called when the pasted content is a table; the paste is held back until the writer chooses. */
  onTablePaste?: (table: Extract<PastedTable, { ok: true }>, pasteAsText: () => void) => void;
  /** Called when the paste is a single image (no text): it is uploaded into a new Image block below. */
  onImagePaste?: (file: File) => void;
  /** Called when the pasted content is an article; the paste is held back until the writer chooses. */
  onArticlePaste?: (article: PastedArticle, pasteAsText: () => void) => void;
  notify?: (m: string) => void;
}

/** Where the cursor goes when a box starts editing: where it was clicked, or the end. */
type Start = { x: number; y: number } | 'end';

function cx(...names: (string | false | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

/* ── Pasting into a box ────────────────────────────────────────────────── */

/** A transaction that puts a box's stored-form text (a whole string of this kind) at the selection. */
function replaceWith(state: EditorState, kind: BoxKind, value: string, ordered: boolean): Transaction {
  const doc = state.schema.nodeFromJSON(toDoc(kind, value, ordered));
  return state.tr.replaceSelection(Slice.maxOpen(doc.content));
}

/** Plain text, every character literal (a `*` stays a `*`), one line per paragraph or item. */
const literal = (text: string) =>
  text
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((l) => escapeInline(l))
    .join('\n');

/** A paste that is not an article, written for this box: its bold, italic, code and safe links, nothing else. */
function boxText(article: PastedArticle, kind: BoxKind, plain: string): string {
  const items: { level: number; text: string }[] = [];
  for (const b of article.blocks) {
    if (b.type === 'heading') items.push({ level: 0, text: b.text });
    else if (b.type === 'text' || b.type === 'quote') items.push(...b.text.split('\n').map((text) => ({ level: 0, text })));
    else if (b.type === 'list') items.push(...listLines(b.items));
  }
  if (!items.length) return literal(article.title ?? plain);
  if (kind === 'heading') return items.map((i) => i.text).join(' ');
  if (kind === 'list') return items.map((i) => '\t'.repeat(i.level) + i.text).join('\n');
  return items.map((i) => i.text).join('\n');
}

/* ── The box ───────────────────────────────────────────────────────────── */

export function RichTextBox(props: RichTextBoxProps) {
  const { kind, ordered = false, value, label, placeholder = '', rows = 1, onTurnInto, notify } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState<Start | null>(null);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [link, setLink] = useState<{ from: number; to: number; url: string; editing: boolean; error?: string } | null>(null);
  /** A bar command chosen before the editor was mounted: run once it is. */
  const pending = useRef<((e: Editor) => void) | null>(null);
  const latest = useRef(props);
  latest.current = props;
  const linkErrorId = useId();
  const minHeight = `calc(${rows} * 1.6em + 18px)`;

  const state = useEditorState({
    editor,
    selector: ({ editor: e }) =>
      e
        ? {
            bold: e.isActive('bold'),
            italic: e.isActive('italic'),
            code: e.isActive('code'),
            link: e.isActive('link'),
            depth: kind === 'list' ? listDepth(e.state) : 0,
          }
        : null,
  });

  function activate(at: Start, then?: (e: Editor) => void) {
    if (editor) return then?.(editor);
    pending.current = then ?? null;
    setStart(at);
  }

  /** Runs a bar command on the editor, mounting it first if needed (with the cursor at the end). */
  const run = (command: (e: Editor) => void) => activate('end', command);

  function onReady(e: Editor | null, at: Start) {
    setEditor(e);
    if (!e) return;
    requestAnimationFrame(() => {
      if (e.isDestroyed) return;
      const pos = at === 'end' ? null : e.view.posAtCoords({ left: at.x, top: at.y });
      e.commands.focus(pos ? pos.pos : 'end');
      const command = pending.current;
      pending.current = null;
      command?.(e);
    });
  }

  // Editing ends when focus leaves the whole box (bar and link field included). A dialog opening, or another box,
  // ends it; switching to another window does not.
  function onBlur() {
    requestAnimationFrame(() => {
      const box = boxRef.current;
      if (!box || box.contains(document.activeElement) || !document.hasFocus()) return;
      setStart(null);
      setLink(null);
    });
  }

  function handlePaste(view: EditorView, event: ClipboardEvent): boolean {
    const p = latest.current;
    const data = event.clipboardData;
    if (!data) return false;
    const image = p.onImagePaste ? imagePaste(data) : null;
    if (image) {
      if ('file' in image) p.onImagePaste?.(image.file);
      else p.notify?.(image.message);
      return true;
    }
    const html = data.getData('text/html');
    const plain = data.getData('text/plain');
    const pasteLiteral = (text: string) => view.dispatch(replaceWith(view.state, kind, literal(text), ordered).scrollIntoView());
    // What "Paste as text" saves: worked out now, while the selection is known (the dialog takes the focus).
    const asText = (text: string) => fromDoc(kind, replaceWith(view.state, kind, literal(text), ordered).doc.toJSON() as DocNode);
    if (p.onTablePaste) {
      const table = tableFromClipboard(html, plain);
      if (table.ok) {
        const text = asText(plain || table.plain);
        p.onTablePaste(table, () => p.onChange(text));
        return true;
      }
      if (table.reason === 'too-large') {
        p.notify?.(`That looks like a table, but ${table.rows} rows × ${table.columns} columns is more than ${MAX_TABLE_ROWS} × ${MAX_TABLE_COLUMNS}, so it was pasted as text. Split it to paste it as a table.`);
        pasteLiteral(plain);
        return true;
      }
    }
    const article = articleFromClipboard(html, plain);
    if (article.refused) {
      p.notify?.(`${article.notes.join(' ')} It was pasted as text.`);
      pasteLiteral(plain);
      return true;
    }
    const sameKind = article.blocks.length === 1 && article.blocks[0].type === p.blockType && !article.title;
    if (p.onArticlePaste && looksLikeArticle(article) && !sameKind) {
      const text = asText(plain || articleText(article));
      p.onArticlePaste(article, () => p.onChange(text));
      return true;
    }
    // Anything else goes in through the paste parser, never the editor's own HTML import: only bold, italic, code and
    // safe links come in, so underline, colours and fonts are dropped.
    const text = boxText(article, kind, plain);
    if (text) view.dispatch(replaceWith(view.state, kind, text, ordered).scrollIntoView());
    return true;
  }

  /* Link field */
  function openLink(e: Editor) {
    const { from, to } = e.state.selection;
    const href = e.isActive('link') ? String(e.getAttributes('link').href ?? '') : '';
    setLink({ from, to, url: href, editing: !!href });
  }
  function saveLink() {
    if (!link || !editor) return;
    const problem = linkProblem(link.url);
    if (problem) return setLink({ ...link, error: problem });
    const href = link.url.trim();
    const chain = editor.chain().focus().setTextSelection({ from: link.from, to: link.to });
    if (link.editing) chain.extendMarkRange('link').setLink({ href }).run();
    else if (link.from === link.to) {
      chain
        .insertContent({ type: 'text', text: 'link text', marks: [{ type: 'link', attrs: { href } }] })
        .setTextSelection({ from: link.from, to: link.from + 'link text'.length })
        .run();
    } else chain.setLink({ href }).run();
    setLink(null);
  }
  function closeLink() {
    setLink(null);
    editor?.commands.focus();
  }

  function removeLink(e: Editor) {
    const { from, to } = e.state.selection;
    if (!e.isActive('link') && !e.state.doc.rangeHasMark(from, to, e.schema.marks.link)) return notify?.('There is no link here.');
    e.chain().focus().extendMarkRange('link').unsetLink().run();
  }
  function clearFormatting(e: Editor) {
    let chain = e.chain().focus();
    for (const mark of ['bold', 'italic', 'code']) if (e.schema.marks[mark]) chain = chain.unsetMark(mark, { extendEmptyMarkRange: true });
    chain.run();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === 'k' && editor) {
      e.preventDefault();
      openLink(editor);
    }
  }

  const keepFocus = (e: React.MouseEvent) => e.preventDefault();
  const shortcut = (key: string) => `Ctrl+${key} / ⌘${key}`;
  const button = (labelText: string, title: string, icon: React.ReactNode, onClick: () => void, pressed?: boolean, disabled?: boolean) => (
    <button
      type="button"
      title={title}
      aria-label={labelText}
      aria-pressed={pressed}
      disabled={disabled}
      className={pressed ? styles.formatOn : undefined}
      onMouseDown={keepFocus}
      onClick={onClick}
    >
      {icon}
    </button>
  );

  return (
    <div ref={boxRef} className={styles.formatBox} onBlur={onBlur} onKeyDown={onKeyDown}>
      <div className={styles.formatBar}>
        {onTurnInto && (
          <select
            className={styles.turnInto}
            value=""
            aria-label="Turn into"
            title="Turn the selected lines, or the whole block, into another type"
            onChange={(e) => {
              const target = e.target.value as TurnInto;
              if (!target) return;
              if (!editor) return onTurnInto(0, Number.MAX_SAFE_INTEGER, target);
              const { from, to } = editor.state.selection;
              const [first, last] = selectedLines(editor.state.doc, from, to);
              onTurnInto(first, last, target);
            }}
          >
            <option value="" disabled>Turn into…</option>
            {TURN_INTO_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        )}
        {kind !== 'heading' && button('Bold', `Bold (${shortcut('B')})`, <Bold size={15} />, () => run((e) => e.chain().focus().toggleBold().run()), !!state?.bold)}
        {button('Italic', `Italic (${shortcut('I')})`, <Italic size={15} />, () => run((e) => e.chain().focus().toggleItalic().run()), !!state?.italic)}
        {button('Inline code', `Inline code (${shortcut('E')})`, <Code size={15} />, () => run((e) => e.chain().focus().toggleMark('code').run()), !!state?.code)}
        {button('Link', `Link (${shortcut('K')})`, <LinkIcon size={15} />, () => run(openLink), !!state?.link)}
        {button('Remove link', 'Remove link', <Unlink size={15} />, () => run(removeLink))}
        {button('Clear formatting', 'Clear bold, italic and code', <RemoveFormatting size={15} />, () => run(clearFormatting))}
        {kind === 'list' && (
          <>
            {button('Indent', 'Indent (Tab)', <IndentIncrease size={15} />, () => run((e) => { e.commands.focus(); if (!indentListItem(e)) notify?.(listDepth(e.state) > MAX_LIST_LEVEL ? 'Lists have at most three levels.' : 'The first item of a list cannot be indented.'); }), undefined, !!state && state.depth > MAX_LIST_LEVEL)}
            {button('Outdent', 'Outdent (Shift+Tab)', <IndentDecrease size={15} />, () => run((e) => { e.commands.focus(); outdentListItem(e); }), undefined, !!state && state.depth < 2)}
          </>
        )}
      </div>
      {link && (
        <div className={styles.linkRow}>
          <input
            className={styles.input}
            autoFocus
            value={link.url}
            placeholder="https://… or /blog/…"
            aria-label="Link address"
            aria-invalid={!!link.error}
            aria-describedby={link.error ? linkErrorId : undefined}
            onChange={(e) => setLink({ ...link, url: e.target.value, error: undefined })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                saveLink();
              } else if (e.key === 'Escape') {
                e.preventDefault();
                closeLink();
              }
            }}
          />
          <button type="button" className={cx(styles.btn, styles.btnSmall)} onClick={saveLink}>{link.editing ? 'Update link' : 'Add link'}</button>
          <button type="button" className={cx(styles.btn, styles.btnSmall)} onClick={closeLink}>Cancel</button>
          {link.error && <span id={linkErrorId} className={styles.linkError} role="alert">{link.error}</span>}
        </div>
      )}
      {start ? (
        <ActiveEditor
          key={String(ordered)}
          kind={kind}
          ordered={ordered}
          value={value}
          onChange={(v) => latest.current.onChange(v)}
          label={label}
          placeholder={placeholder}
          minHeight={minHeight}
          onReady={(e) => onReady(e, start)}
          handlePaste={handlePaste}
        />
      ) : (
        <ReadView kind={kind} ordered={ordered} value={value} label={label} placeholder={placeholder} minHeight={minHeight} onActivate={activate} />
      )}
    </div>
  );
}

/** The box's text, formatted, while it is not being edited. Focusing or clicking it starts editing. */
function ReadView({
  kind,
  ordered,
  value,
  label,
  placeholder,
  minHeight,
  onActivate,
}: {
  kind: BoxKind;
  ordered: boolean;
  value: string;
  label: string;
  placeholder: string;
  minHeight: string;
  onActivate: (at: Start) => void;
}) {
  let body: React.ReactNode;
  if (!value.trim()) body = <p className={styles.richPlaceholder}>{placeholder}</p>;
  else if (kind === 'list') body = <NestedList items={listItems(value)} ordered={ordered} />;
  else if (kind === 'heading') body = <p><Inline text={value.replace(/\n/g, ' ')} /></p>;
  else body = value.split('\n').map((line, i) => <p key={i}>{line.trim() ? <Inline text={line} /> : <br />}</p>);
  return (
    <div
      role="textbox"
      tabIndex={0}
      aria-label={label}
      aria-multiline={kind !== 'heading'}
      data-format-box=""
      className={cx(styles.richText, kind === 'heading' && styles.richHeading)}
      style={{ minHeight }}
      onMouseDown={(e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        onActivate({ x: e.clientX, y: e.clientY });
      }}
      onFocus={() => onActivate('end')}
      // Links in the box are text to edit, not links to follow.
      onClick={(e) => (e.target as HTMLElement).closest('a') && e.preventDefault()}
    >
      {body}
    </div>
  );
}

/** The Tiptap editor of a box being edited. Its document is converted to the stored string on every change. */
function ActiveEditor({
  kind,
  ordered,
  value,
  onChange,
  label,
  placeholder,
  minHeight,
  onReady,
  handlePaste,
}: {
  kind: BoxKind;
  ordered: boolean;
  value: string;
  onChange: (v: string) => void;
  label: string;
  placeholder: string;
  minHeight: string;
  onReady: (e: Editor | null) => void;
  handlePaste: (view: EditorView, event: ClipboardEvent) => boolean;
}) {
  const lastValue = useRef(value);
  const pasteRef = useRef(handlePaste);
  pasteRef.current = handlePaste;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    // Typed `*`, `**` and backticks stay characters: formatting comes only from the bar and its shortcuts.
    enableInputRules: false,
    enablePasteRules: false,
    extensions: boxExtensions(kind, placeholder),
    content: toDoc(kind, value, ordered),
    editorProps: {
      attributes: {
        role: 'textbox',
        'aria-label': label,
        'aria-multiline': String(kind !== 'heading'),
        'data-format-box': '',
        class: cx(styles.richText, kind === 'heading' && styles.richHeading),
        style: `min-height: ${minHeight}`,
      },
      handlePaste: (view, event) => pasteRef.current(view, event),
    },
    onUpdate: ({ editor: e }) => {
      const next = fromDoc(kind, e.getJSON() as DocNode);
      if (next === lastValue.current) return;
      lastValue.current = next;
      onChangeRef.current(next);
    },
  });

  useEffect(() => {
    if (!editor) return;
    onReady(editor);
    return () => onReady(null);
    // onReady is only called when the editor itself changes.
  }, [editor]);

  // A change made outside the editor (Turn into, Paste as text) replaces its content.
  useEffect(() => {
    if (!editor || value === lastValue.current) return;
    lastValue.current = value;
    editor.commands.setContent(toDoc(kind, value, ordered), { emitUpdate: false });
  }, [editor, value, kind, ordered]);

  return <EditorContent editor={editor} />;
}
