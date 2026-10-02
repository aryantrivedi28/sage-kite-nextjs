import type React from 'react';

/**
 * "Sage Kite / Field diagram" figure for blog articles, in the same visual
 * system as the Founder's Thoughts essays. Built in HTML and CSS rather than
 * images, so it stays sharp, responsive and readable by search engines.
 *
 * Put one of these layouts inside (styles are in app/globals.css, "Field diagrams"):
 *   .fd-compare   two boxes with a label between (.fd-box, .fd-versus)
 *   .fd-flow      a left-to-right sequence (.fd-step, .fd-arrow); stacks on phones
 *   .fd-cols      equal columns of .fd-step (3 by default; add fd-n2 or fd-n4)
 * Pieces: .fd-k (small eyebrow), <b> (title), <small> (note), .fd-chips (4 by
 * default; add fd-n2 for 2), .fd-solid, .fd-scatter, .fd-dark and .fd-muted (box
 * fills), .fd-layer (full-width dark band), .fd-link-label, .fd-row-label.
 * Examples: app/blog/what-is-honeybook/article.tsx and dubsado-vs-honeybook/article.tsx.
 */
export function FieldDiagram({
  id,
  label,
  title,
  takeaway,
  children,
}: {
  /** Unique within the article; used for aria-labelledby. */
  id: string;
  /** Small uppercase label, e.g. "The clientflow idea". */
  label: string;
  /** One-sentence headline for the diagram. */
  title: string;
  /** Optional closing line under the diagram. */
  takeaway?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="fd" aria-labelledby={`${id}-title`}>
      <figcaption>
        <span>{label}</span>
        <strong id={`${id}-title`}>{title}</strong>
      </figcaption>
      {children}
      {takeaway ? <p className="fd-takeaway">{takeaway}</p> : null}
    </figure>
  );
}
