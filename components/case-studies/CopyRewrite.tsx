'use client';

import type React from 'react';
import { useState } from 'react';

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

export interface CopyRewriteProps {
  intro: string;
  /** Each sentence as copied from the manufacturer, and rewritten in the seller's own words. */
  sentences: { copied: string; own: string }[];
  rowLabels: { copied: string; own: string };
  buttons: { rewrite: string; all: string; reset: string };
  /** Shown on a rewritten row, e.g. "Unique ✓". */
  done: string;
  meter: string;
  sellersLabel: string;
  sellers: string[];
  you: string;
  /** Tags after a seller or "Your page": e.g. "same text", "partly unique", "unique". */
  tags: { same: string; partly: string; unique: string };
  captions: { none: string; some: string; all: string };
  note: string;
}

/** A product description sentence by sentence: rewrite each one (or all) and watch the unique share and the other sellers' tags change. */
export function CopyRewrite({ intro, sentences, rowLabels, buttons, done, meter, sellersLabel, sellers, you, tags, captions, note }: CopyRewriteProps) {
  const [own, setOwn] = useState<boolean[]>(() => sentences.map(() => false));
  const n = own.filter(Boolean).length;
  const all = n === sentences.length;
  const pc = Math.round((n / sentences.length) * 100);
  const mine = all ? tags.unique : n ? tags.partly : tags.same;

  return (
    <div className="cs-sim">
      <p className="cs-nw-cap">{intro}</p>
      <div className="cs-ib-sent">
        {sentences.map((s, i) => (
          <div key={s.copied} className={`cs-ib-srow${own[i] ? ' u' : ''}`}>
            <div><small>{own[i] ? rowLabels.own : rowLabels.copied}</small>{own[i] ? s.own : s.copied}</div>
            {own[i]
              ? <span className="cs-ib-pill">{done}</span>
              : <button className="cs-ghost" type="button" onClick={() => setOwn((o) => o.map((v, k) => v || k === i))}>{buttons.rewrite}</button>}
          </div>
        ))}
      </div>
      <div className="cs-ctl">
        <button className="btn" type="button" onClick={() => setOwn(sentences.map(() => true))}>{buttons.all}</button>
        <button className="cs-ghost" type="button" onClick={() => setOwn(sentences.map(() => false))}>{buttons.reset}</button>
      </div>
      <div className="cs-ib-mt">
        <div className="cs-ib-mt-h"><span>{meter}</span><b>{pc}%</b></div>
        <div className="cs-ib-mt-track"><div className="cs-ib-mt-fill" style={cssVars({ '--w': `${pc}%` })}></div></div>
      </div>
      <div>
        <p className="note cs-ib-sl">{sellersLabel}</p>
        <div className="cs-ib-sellers">
          {sellers.map((s) => <span key={s}>{all ? s : `${s} · ${tags.same}`}</span>)}
          <span className="me">{`${you} · ${mine}`}</span>
        </div>
      </div>
      <p className="cs-nw-cap cs-ib-min" aria-live="polite">{n === 0 ? captions.none : all ? captions.all : captions.some}</p>
      <p className="note">{note}</p>
    </div>
  );
}
