'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';

export interface StagePipelineProps {
  title: string;
  /** Labels of the play button while stopped and while playing. */
  play: { play: string; pause: string };
  groupLabel: string;
  /** Labels of the three boxes, e.g. "Problem", "Fix applied", "Benefit". */
  boxes: [string, string, string];
  /** Up to four stages, in order. */
  stages: { small: string; title: string; problem: string; fix: string; benefit: string }[];
}

/** Time each stage stays selected while playing. */
const STEP_MS = 2200;
const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

/** The stages of the work as buttons, with the problem, fix and benefit of the selected one. Play steps through them. */
export function StagePipeline({ title, play, groupLabel, boxes, stages }: StagePipelineProps) {
  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setPlaying(false);
  };

  const start = () => {
    stop();
    setCur(0);
    setPlaying(true);
    let k = 0;
    timer.current = setInterval(() => {
      k += 1;
      if (k >= stages.length) { stop(); return; }
      setCur(k);
    }, STEP_MS);
  };

  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <button className="cs-ghost" type="button" onClick={() => (playing ? stop() : start())}>{playing ? play.pause : play.play}</button>
      </div>
      <div className="cs-pipe" role="group" aria-label={groupLabel}>
        {stages.map((st, i) => (
          <button key={st.title} type="button" className={`cs-stage c${i + 1}`} aria-pressed={i === cur} onClick={() => { stop(); setCur(i); }}>
            <small>{st.small}</small><b>{st.title}</b>
          </button>
        ))}
      </div>
      <div className="cs-pipe-track" aria-hidden="true"><i style={cssVars({ '--p': `${((cur + 1) / stages.length) * 100}%` })}></i></div>
      {/* Every stage is in the HTML; only the selected one is shown. */}
      <div aria-live="polite">
        {stages.map((st, i) => (
          <div key={st.title} className="cs-pbox" hidden={i !== cur}>
            <div><p className="lab">{boxes[0]}</p><p>{st.problem}</p></div>
            <div><p className="lab">{boxes[1]}</p><p>{st.fix}</p></div>
            <div><p className="lab">{boxes[2]}</p><p>{st.benefit}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
