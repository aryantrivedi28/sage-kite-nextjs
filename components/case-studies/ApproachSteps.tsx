'use client';

import type React from 'react';
import { useState } from 'react';

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

/** The steps of the approach as buttons with a progress track; the selected step's heading and text show below. */
export function ApproachSteps({ steps }: { steps: { small: string; title: string; heading: string; text: string }[] }) {
  const [cur, setCur] = useState(0);
  const s = steps[cur];
  return (
    <div className="cs-sim">
      <div className="cs-pipe">
        {steps.map((st, i) => (
          <button key={st.title} type="button" className={`cs-stage c${i + 1}`} aria-pressed={i === cur} onClick={() => setCur(i)}>
            <small>{st.small}</small><b>{st.title}</b>
          </button>
        ))}
      </div>
      <div className="cs-pipe-track" aria-hidden="true"><i style={cssVars({ '--p': `${((cur + 1) / steps.length) * 100}%` })}></i></div>
      <div className="cs-pbox one" aria-live="polite">
        <div><p className="lab">{s.heading}</p><p>{s.text}</p></div>
      </div>
    </div>
  );
}
