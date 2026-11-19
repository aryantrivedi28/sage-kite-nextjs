'use client';

import type React from 'react';
import { useState } from 'react';

type State = 'before' | 'after';
const cssVars = (v: Record<string, string>) => v as React.CSSProperties;
const AXIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface RankTrackerProps {
  title: string;
  buttons: Record<State, string>;
  groupLabel: string;
  ariaLabel: string;
  /** Heading of the keyword column. */
  axisLabel: string;
  /** Sample keywords and their positions (1–10) before and after. */
  keywords: { name: string; before: number; after: number }[];
  /** Read as "<top> 3 / 6" and "<zone> <zones[state]>". */
  stats: { top: string; zone: string };
  zones: Record<State, string>;
  captions: Record<State, string>;
  note: string;
}

/** Sample keywords on a 1–10 track (top 3 sky, bottom 3 coral): flip Before / After and each dot slides to its new position. */
export function RankTracker({ title, buttons, groupLabel, ariaLabel, axisLabel, keywords, stats, zones, captions, note }: RankTrackerProps) {
  const [s, setS] = useState<State>('before');
  const top = keywords.filter((k) => k[s] <= 3).length;

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label={groupLabel}>
          {(['before', 'after'] as State[]).map((v) => (
            <button key={v} type="button" aria-pressed={s === v} onClick={() => setS(v)}>{buttons[v]}</button>
          ))}
        </div>
      </div>
      <div className="cs-jn-rk" role="img" aria-label={ariaLabel}>
        <div className="cs-jn-rkrow axis"><span>{axisLabel}</span><div className="ax">{AXIS.map((n) => <span key={n}>{n}</span>)}</div><span></span></div>
        {keywords.map((k) => (
          <div key={k.name} className="cs-jn-rkrow">
            <span>{k.name}</span>
            <div className="track"><span className="dot" style={cssVars({ '--pos': String(k[s]) })}></span></div>
            <span className="pos">{k[s]}</span>
          </div>
        ))}
      </div>
      <ul className="cs-stats">
        <li>{stats.top} <b>{top}</b> / {keywords.length}</li>
        <li>{stats.zone} <b>{zones[s]}</b></li>
      </ul>
      <p className="cs-nw-cap cs-ib-min" aria-live="polite">{captions[s]}</p>
      <p className="note">{note}</p>
    </div>
  );
}
