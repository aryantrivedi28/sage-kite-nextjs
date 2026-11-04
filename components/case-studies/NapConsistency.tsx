'use client';

import type React from 'react';
import { useState } from 'react';

/** Length of the gauge's arc (a half circle of radius 80). */
const ARC = 251.3;
const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

export interface NapConsistencyProps {
  /** Column headings: source, name, address, phone. */
  headings: [string, string, string, string];
  /** The correct name, address and phone. */
  correct: [string, string, string];
  /** Where the dealership appears, with the details shown there. */
  sources: { source: string; values: [string, string, string] }[];
  /** Tag on a mismatched cell, e.g. "fix". */
  fixLabel: string;
  buttons: { fixAll: string; reset: string };
  gaugeLabel: string;
  gaugeAriaLabel: string;
  /** Caption under the gauge while any detail is mismatched, and once all match. */
  captions: { mismatch: string; consistent: string };
  note: string;
}

/**
 * Name, address and phone as listed in four places. A mismatched detail is a button: clicking it corrects it.
 * The gauge shows the share of the twelve details that match.
 */
export function NapConsistency({ headings, correct, sources, fixLabel, buttons, gaugeLabel, gaugeAriaLabel, captions, note }: NapConsistencyProps) {
  const initial = () => sources.map((s) => [...s.values]);
  const [rows, setRows] = useState<string[][]>(initial);

  const total = rows.length * correct.length;
  const ok = rows.reduce((n, r) => n + r.filter((v, c) => v === correct[c]).length, 0);
  const pct = total ? ok / total : 0;

  const fix = (r: number, c: number) => setRows((rs) => rs.map((row, k) => (k === r ? row.map((v, j) => (j === c ? correct[c] : v)) : row)));

  return (
    <div className="cs-sim">
      <div className="cs-nap-split">
        <div className="cs-nap">
          <div className="cs-nap-head" aria-hidden="true">{headings.map((h) => <span key={h}>{h}</span>)}</div>
          <div className="cs-nap-rows">
            {rows.map((row, r) => (
              <div key={sources[r].source} className="cs-nap-row">
                <b>{sources[r].source}</b>
                {row.map((v, c) => (v === correct[c]
                  ? <span key={c} className="cs-cell ok">{v}</span>
                  : <button key={c} type="button" className="cs-cell bad" onClick={() => fix(r, c)}>{v}<small>{fixLabel}</small></button>))}
              </div>
            ))}
          </div>
          <div className="cs-ctl">
            <button className="cs-ghost" type="button" onClick={() => setRows(sources.map(() => [...correct]))}>{buttons.fixAll}</button>
            <button className="cs-ghost" type="button" onClick={() => setRows(initial())}>{buttons.reset}</button>
          </div>
        </div>
        <div className="cs-gauge-wrap">
          {/* Taller than the arc so the percentage sits below the needle's hub, not under it. */}
          <svg className="cs-gauge" viewBox="0 0 200 140" role="img" aria-label={gaugeAriaLabel}>
            <path className="tr" d="M 20 100 A 80 80 0 0 1 180 100" />
            <path className="fg" d="M 20 100 A 80 80 0 0 1 180 100" style={{ strokeDashoffset: ARC * (1 - pct) }} />
            <line className="cs-needle" x1="100" y1="100" x2="100" y2="40" style={cssVars({ '--a': `${-90 + pct * 180}deg` })} />
            <circle className="hub" cx="100" cy="100" r="7" />
            <text x="100" y="136">{Math.round(pct * 100)}%</text>
          </svg>
          <p className="cs-gauge-lab">{gaugeLabel}</p>
          <p className="cs-sim-caption" aria-live="polite">{pct < 1 ? captions.mismatch : captions.consistent}</p>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
