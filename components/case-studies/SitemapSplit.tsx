'use client';

import { useState } from 'react';

type View = 'mix' | 'seg';

export interface SitemapSplitProps {
  groupLabel: string;
  buttons: Record<View, string>;
  /** One per page type: `item` names each page ("Product" → "Product 1"), `folder` names its sitemap. Colours follow the order: sky, butter, coral. */
  types: { item: string; count: number; folder: string }[];
  /** The mixed list's order, as indexes into all pages (types in order, then numbered). */
  mixOrder: number[];
  /** `{n}` pages in a sitemap. */
  pagesLabel: string;
  captions: Record<View, string>;
  note: string;
}

const TONES = ['p', 'c', 'b'];

/** The same pages as one mixed list or as one sitemap per page type. */
export function SitemapSplit({ groupLabel, buttons, types, mixOrder, pagesLabel, captions, note }: SitemapSplitProps) {
  const [view, setView] = useState<View>('mix');
  const pages = types.flatMap((t, ti) => Array.from({ length: t.count }, (_, i) => ({ tone: TONES[ti % TONES.length], label: `${t.item} ${i + 1}`, type: ti })));
  const chip = (p: (typeof pages)[number]) => <span key={p.label} className={`cs-ib-pg ${p.tone}`}>{p.label}</span>;

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <div className="cs-seg" role="group" aria-label={groupLabel}>
          {(['mix', 'seg'] as View[]).map((v) => (
            <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)}>{buttons[v]}</button>
          ))}
        </div>
      </div>
      {view === 'mix' ? (
        <div className="cs-ib-pile">{mixOrder.map((i) => pages[i] && chip(pages[i]))}</div>
      ) : (
        <div className="cs-ib-folders">
          {types.map((t, ti) => (
            <div key={t.folder} className="cs-ib-fold">
              <h3>{t.folder}</h3>
              <span className="note">{pagesLabel.split('{n}').join(String(t.count))}</span>
              <div className="cs-ib-pile">{pages.filter((p) => p.type === ti).map(chip)}</div>
            </div>
          ))}
        </div>
      )}
      <p className="cs-nw-cap cs-ib-min" aria-live="polite">{captions[view]}</p>
      <p className="note">{note}</p>
    </div>
  );
}
