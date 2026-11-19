'use client';

import { useState } from 'react';

const ROW = 58;

export interface RankRaceProps {
  title: string;
  /** The optimizations; each one switched on moves the page up one place. */
  levers: string[];
  competitors: { title: string; sub: string }[];
  me: { title: string; sub: string };
  cutLabel: string;
  /** Results above this many rows are on page 1. */
  pageOneRows: number;
  labels: { position: string; pageOne: string; pageTwo: string };
  /** `{n}` is how many levers are on. */
  captions: { none: string; pageOne: string; pageTwo: string };
  note: string;
}

/** A results list where switching on each optimization moves the client's page up one place, past the page 1 line. */
export function RankRace({ title, levers, competitors, me, cutLabel, pageOneRows, labels, captions, note }: RankRaceProps) {
  const [on, setOn] = useState<boolean[]>(levers.map(() => false));
  const n = on.filter(Boolean).length;
  const mine = competitors.length - n;
  const pageOne = mine < pageOneRows;
  const caption = n === 0 ? captions.none : (pageOne ? captions.pageOne : captions.pageTwo).split('{n}').join(String(n));
  let c = 0;
  const tops = competitors.map(() => { if (c === mine) c += 1; const t = c * ROW; c += 1; return t; });

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-nw-field">
          <h3 className="cs-nw-h3">{title}</h3>
          <div className="cs-nw-layers">
            {levers.map((l, i) => (
              <button key={l} type="button" aria-pressed={on[i]} onClick={() => setOn((prev) => prev.map((x, j) => (j === i ? !x : x)))}>{l}</button>
            ))}
          </div>
          <ul className="cs-stats"><li>{labels.position} <b>#{mine + 1}</b></li><li><b>{pageOne ? labels.pageOne : labels.pageTwo}</b></li></ul>
          <p className="cs-nw-cap" aria-live="polite">{caption}</p>
        </div>
        <div className="cs-nw-rank" style={{ height: (competitors.length + 1) * ROW }}>
          {competitors.map((r, i) => (
            <div key={r.title} className="cs-nw-rk" style={{ top: tops[i] }}><b>{r.title}</b><span>{r.sub}</span></div>
          ))}
          <div className="cs-nw-rk me" style={{ top: mine * ROW }}><b>{me.title}</b><span>{me.sub}</span></div>
          <div className="cs-nw-cut" style={{ top: pageOneRows * ROW - 2 }}><small>{cutLabel}</small></div>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
