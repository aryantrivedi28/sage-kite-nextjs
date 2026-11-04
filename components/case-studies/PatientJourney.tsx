'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';

/** Time each stop stays selected while walking the journey. */
const STEP_MS = 2600;
const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

export interface PatientJourneyProps {
  /** Labels of the walk button while stopped and while walking. */
  walk: { walk: string; pause: string };
  /** Small text beside the button, e.g. "or select any stop". */
  hint: string;
  /** Headings of the three boxes: what the patient needs, what was missing, the fix. */
  boxes: [string, string, string];
  /** The stops, in order. `href` is the section that covers the fix, with its link text. */
  stops: { label: string; need: string; missing: string; fix: string; href: string; link: string }[];
}

/** The patient's journey as numbered stops; each shows what the patient needs, what was missing and the fix. */
export function PatientJourney({ walk, hint, boxes, stops }: PatientJourneyProps) {
  const [cur, setCur] = useState(0);
  const [walking, setWalking] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setWalking(false);
  };
  const start = () => {
    stop();
    setCur(0);
    setWalking(true);
    let k = 0;
    timer.current = setInterval(() => {
      k += 1;
      if (k >= stops.length) { stop(); return; }
      setCur(k);
    }, STEP_MS);
  };
  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  const s = stops[cur];
  return (
    <div className="cs-sim">
      <div className="cs-ctl">
        <button className="cs-ghost" type="button" onClick={() => (walking ? stop() : start())}>{walking ? walk.pause : walk.walk}</button>
        <span className="note">{hint}</span>
      </div>
      <div className="cs-jr-nodes">
        <span className="cs-jr-fill" style={cssVars({ '--p': String((cur / Math.max(1, stops.length - 1)) * 100) })}></span>
        {stops.map((st, i) => (
          <button key={st.label} type="button" className={`cs-jn${i < cur ? ' done' : ''}`} aria-pressed={i === cur} onClick={() => { stop(); setCur(i); }}>
            <i>{i + 1}</i><span>{st.label}</span>
          </button>
        ))}
      </div>
      <div className="cs-jr-panel" aria-live="polite">
        <div><p className="lab">{boxes[0]}</p><p>{s.need}</p></div>
        <div><p className="lab">{boxes[1]}</p><p>{s.missing}</p></div>
        <div><p className="lab">{boxes[2]}</p><p>{s.fix} <a className="link" href={s.href}>{s.link}</a></p></div>
      </div>
    </div>
  );
}
