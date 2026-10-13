import React from 'react';
import type { Tone } from '@/content/case-studies/types';

/*
 * Building blocks for case study content (study.tsx). Use them inside
 * `startingPoint.content` or as a tile `visual`. They carry no copy of their
 * own, so they work for any case study.
 */

/** Short list with coloured square markers (sky, butter, coral in turn). */
export function Drivers({ items }: { items: string[] }) {
  return (
    <ul className="cs-drivers">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

const AUDIENCE_ICONS = {
  search: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="17" cy="17" r="10" /><line x1="25" y1="25" x2="35" y2="35" />
      <line className="acc-coral" x1="17" y1="12" x2="17" y2="22" /><line className="acc-coral" x1="12" y1="17" x2="22" y2="17" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 36 C12 26 8 21 8 15 a12 12 0 0 1 24 0 c0 6-4 11-12 21z" /><circle className="acc-sky" cx="20" cy="15" r="4.5" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="15" cy="14" r="6" /><path d="M4 34c0-6 5-10 11-10s11 4 11 10" />
      <circle className="acc-sky" cx="29" cy="15" r="4.5" /><path className="acc-sky" d="M27 24c5 0 9 3 9 9" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7h5l4 19h18l4-13H11" /><circle className="acc-coral" cx="15" cy="33" r="2.5" /><circle className="acc-coral" cx="29" cy="33" r="2.5" />
    </svg>
  ),
};

/** Two (or more) audience cards with an icon each. */
export function AudienceCards({ items }: { items: { icon: keyof typeof AUDIENCE_ICONS; text: string }[] }) {
  return (
    <ul className="cs-audience">
      {items.map((i) => <li key={i.text}>{AUDIENCE_ICONS[i.icon]}{i.text}</li>)}
    </ul>
  );
}

/** Butter panel with an optional bold title. */
export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="cs-callout">
      {title && <strong>{title}</strong>}
      <p>{children}</p>
    </div>
  );
}

/** Three overlapping circles, e.g. three families of search query. */
export function VennSketch({ labels, ariaLabel }: { labels: [string, string, string]; ariaLabel: string }) {
  return (
    <svg className="cs-venn" viewBox="0 0 220 190" role="img" aria-label={ariaLabel}>
      <circle className="v-coral" cx="80" cy="70" r="52" />
      <circle className="v-sky" cx="140" cy="70" r="52" />
      <circle className="v-butter" cx="110" cy="122" r="52" />
      <g textAnchor="middle"><text x="62" y="62">{labels[0]}</text><text x="158" y="62">{labels[1]}</text><text x="110" y="148">{labels[2]}</text></g>
    </svg>
  );
}

/** Wireframe of a page: a title, a subtitle and two or three text lines. */
export function PageSketch({ title, subtitle, lines = 3, tone = 'coral' }: { title: string; subtitle: string; lines?: 2 | 3; tone?: Tone }) {
  return (
    <div className="cs-pagecard" data-tone={tone} aria-hidden="true">
      <b>{title}</b><span>{subtitle}</span>
      {Array.from({ length: lines }, (_, i) => <i key={i}></i>)}
    </div>
  );
}

/** A one-level site structure, e.g. Home with its sections. */
export function TreeSketch({ root, items, ariaLabel }: { root: string; items: { name: string; note: string }[]; ariaLabel: string }) {
  return (
    <div className="cs-tree" aria-label={ariaLabel}>
      <b>{root}</b>
      <ul>
        {items.map((i) => <li key={i.name}><b>{i.name}</b> <em>{i.note}</em></li>)}
      </ul>
    </div>
  );
}
