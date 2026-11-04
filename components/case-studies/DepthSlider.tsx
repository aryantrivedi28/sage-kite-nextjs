'use client';

import { useState } from 'react';

export interface DepthSliderProps {
  label: string;
  ticks: [string, string];
  /** The page's sections, in order; the slider shows the first n. */
  sections: string[];
  /** Labels before the two counters, e.g. "Sections:". */
  stats: { sections: string; questions: string };
  /** Caption for each slider value, from 1 to the number of sections. */
  captions: string[];
  note: string;
}

/** A slider that deepens a treatment page: more sections, more patient questions answered. */
export function DepthSlider({ label, ticks, sections, stats, captions, note }: DepthSliderProps) {
  const [v, setV] = useState(1);
  const max = sections.length;

  return (
    <div className="cs-sim">
      <div className="cs-slide">
        <label htmlFor="cs-depth"><b>{label}</b></label>
        <input type="range" id="cs-depth" min={1} max={max} value={v} onChange={(e) => setV(Number(e.target.value))} aria-describedby="cs-depth-cap" />
        <div className="cs-ticks" aria-hidden="true"><span>{ticks[0]}</span><span>{ticks[1]}</span></div>
      </div>
      <div className="cs-code-split">
        <div className="cs-outline">
          {sections.map((s, i) => (
            <div key={s} className={`cs-ol ${i < v ? 'on' : 'off'}`}><b>{s}</b><i></i><i></i></div>
          ))}
        </div>
        <div className="cs-lp-side">
          <ul className="cs-stats">
            <li>{stats.sections} <b>{v}</b> / {max}</li>
            <li>{stats.questions} <b>{v}</b> / {max}</li>
          </ul>
          <p className="cs-sim-caption" id="cs-depth-cap" aria-live="polite">{captions[v - 1]}</p>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
