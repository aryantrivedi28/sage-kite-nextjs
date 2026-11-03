import React from 'react';
import { MAX_IMAGE_FILE_NAME } from '@/lib/sanity/imageUpload';
import { chosenImageName, isSiteImagePath, liveImageFileName } from '@/lib/sanity/image';
import styles from './BlogStudio.module.css';

/*
 * Form fields of the blog studio (BlogStudio.tsx), in a file of their own so tests can render them without the
 * editor, Tiptap or the Server Actions. No hooks.
 */

function cx(...names: (string | false | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export function Field({
  label,
  required,
  hint,
  count,
  countState,
  note,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  count?: string;
  countState?: 'ok' | 'warn';
  /** A second line in the hint style, under the hint. */
  note?: string;
  children: React.ReactNode;
}) {
  // The hint sits outside the <label> so it is not read as part of the field's name.
  return (
    <div className={styles.field}>
      <label className={styles.fieldInner}>
        <span className={styles.fieldLabel}>
          <span>{label}{required && <span className={styles.req}> *</span>}</span>
          {count && <span className={cx(styles.fieldCount, countState === 'warn' && styles.warn)}>{count}</span>}
        </span>
        {children}
      </label>
      {hint && <span className={styles.hint}>{hint}</span>}
      {note && <span className={styles.hint}>{note}</span>}
    </div>
  );
}

/**
 * The "Live file name" line under an image's file-name field (D062, D063): the file name the page will actually use
 * (the typed name, or `fallback` when it cleans to nothing), or none when nothing is typed or the image is a site file
 * (`/images/…`), which is never renamed.
 */
export function liveFileNameNote(value: string, fallback: string, src: string): string | undefined {
  if (!value.trim() || isSiteImagePath(src)) return undefined;
  return `Live file name: ${liveImageFileName(src, chosenImageName(value, fallback))}`;
}

/**
 * An image's file name on the live site (decision.md D062), under its Alt text. Stored as typed; the line under the
 * input shows the name the page will use. `fallback` is the slug (featured image) or `<slug>-<n>` (article image).
 */
export function ImageFileNameField({ value, fallback, src, onChange }: { value: string; fallback: string; src: string; onChange: (v: string) => void }) {
  return (
    <Field
      label="Image file name (optional)"
      hint="The image's file name on the live site, for search engines. Leave empty to use the post's slug."
      note={liveFileNameNote(value, fallback, src)}
    >
      <input className={styles.input} value={value} placeholder={fallback} maxLength={MAX_IMAGE_FILE_NAME} onChange={(e) => onChange(e.target.value)} />
    </Field>
  );
}
