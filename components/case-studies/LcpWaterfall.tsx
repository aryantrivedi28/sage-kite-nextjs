'use client';

import type React from 'react';
import { useState } from 'react';

type State = 'before' | 'after';
const STATES: State[] = ['before', 'after'];

/**
 * Where each request starts and how long it takes, as a share of the timeline, and
 * where LCP lands. Illustrative: before, render-blocking CSS and JavaScript come first
 * and the hero image is found late; after, the image is preloaded and starts early.
 */
const BARS: Record<State, { start: number; width: number }[]> = {
  before: [{ start: 0, width: 12 }, { start: 12, width: 24 }, { start: 36, width: 26 }, { start: 62, width: 22 }],
  after: [{ start: 0, width: 12 }, { start: 12, width: 7 }, { start: 30, width: 26 }, { start: 12, width: 20 }],
};
const LCP: Record<State, number> = { before: 84, after: 32 };

export interface LcpWaterfallProps {
  title: string;
  buttons: Record<State, string>;
  groupLabel: string;
  /** Row labels, in order: HTML document, CSS, JavaScript, LCP image. */
  rows: [string, string, string, string];
  /** Legend labels for the four bar colours, same order. */
  legend: [string, string, string, string];
  /** Label on the LCP marker. */
  marker: string;
  captions: Record<State, string>;
  /** Small print under the caption. */
  note: string;
  /** Shown under the waterfall in the same card, e.g. a code sample and the LCP slider. */
  children?: React.ReactNode;
}

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

/** A simplified load waterfall with a Before/After switch and a moving LCP marker. */
export function LcpWaterfall({ title, buttons, groupLabel, rows, legend, marker, captions, note, children }: LcpWaterfallProps) {
  const [state, setState] = useState<State>('before');

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label={groupLabel}>
          {STATES.map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {buttons[s]}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-wf" aria-hidden="true" style={cssVars({ '--x': `${LCP[state]}%` })}>
        <div className="cs-wf-lcp"><i></i><b>{marker}</b></div>
        {rows.map((label, i) => (
          <div key={label} className="cs-wf-row">
            <span>{label}</span>
            <div className="cs-wf-track">
              <div className={`cs-wf-bar b${i + 1}`} style={cssVars({ '--s': `${BARS[state][i].start}%`, '--w': `${BARS[state][i].width}%` })}></div>
            </div>
          </div>
        ))}
      </div>
      <ul className="cs-wf-legend" aria-hidden="true">
        {legend.map((l, i) => <li key={l} className={`b${i + 1}`}>{l}</li>)}
      </ul>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">{note}</p>
      {children}
    </div>
  );
}
