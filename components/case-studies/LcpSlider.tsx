'use client';

import type React from 'react';
import { useId, useState } from 'react';

export interface LcpSliderProps {
  title: string;
  /** Accessible name of the slider, e.g. "LCP in seconds". */
  ariaLabel: string;
  /** Verdict labels for good (up to 2.5 s), needs improvement (up to 4 s) and poor. */
  verdicts: [string, string, string];
  /** Labels on the three bands of the scale. */
  bands: [string, string, string];
  /** Small print under the scale. */
  note: string;
}

/** Scale runs 0–6 s; the slider moves in tenths. Bands follow Google's LCP thresholds (2.5 s and 4 s). */
const MAX = 6;
const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

/** Try an LCP value and see which of Google's published bands it falls in. */
export function LcpSlider({ title, ariaLabel, verdicts, bands, note }: LcpSliderProps) {
  const id = useId();
  const [tenths, setTenths] = useState(25);
  const v = tenths / 10;
  const band = v <= 2.5 ? 0 : v <= 4 ? 1 : 2;

  return (
    <div className="cs-vital">
      <h4>{title}</h4>
      <div className="cs-vital-row">
        <output htmlFor={id}>{v.toFixed(1)} s</output>
        <input id={id} type="range" min={0} max={MAX * 10} value={tenths} aria-label={ariaLabel} aria-valuetext={`${v.toFixed(1)} seconds, ${verdicts[band]}`} onChange={(e) => setTenths(Number(e.target.value))} />
        <span className={`cs-verdict v${band}`}>{verdicts[band]}</span>
      </div>
      <div className="cs-vscale" aria-hidden="true">
        <i className="v0">{bands[0]}</i><i className="v1">{bands[1]}</i><i className="v2">{bands[2]}</i>
        <span className="cs-vpin" style={cssVars({ '--x': `${(v / MAX) * 100}%` })}></span>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
