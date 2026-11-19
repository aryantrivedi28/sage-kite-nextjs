'use client';

import { useEffect, useState } from 'react';

export interface CountdownProps {
  title: string;
  /** Line above the clock, e.g. "[Sale event] ends in". */
  label: string;
  /** Placeholder button text under the clock. */
  cta: string;
  /** Sample time left, in seconds. The clock counts down from it and loops. */
  start: number;
  /** Screen-reader description of the timer. */
  ariaLabel: string;
  caption: string;
  /** Small print under the illustration. */
  note: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Illustration: a sale-event countdown with a sample time. Holds still when reduced motion is on. */
export function Countdown({ title, label, cta, start, ariaLabel, caption, note }: CountdownProps) {
  const [left, setLeft] = useState(start);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setLeft((l) => (l > 0 ? l - 1 : start)), 1000);
    return () => clearInterval(id);
  }, [start]);

  const parts: [number, string][] = [
    [Math.floor(left / 86400), 'days'],
    [Math.floor((left % 86400) / 3600), 'hours'],
    [Math.floor((left % 3600) / 60), 'minutes'],
    [left % 60, 'seconds'],
  ];

  return (
    <div className="cs-sim">
      <div className="cs-sim-top"><h3>{title}</h3></div>
      <div className="cs-cd" role="timer" aria-label={ariaLabel}>
        <p className="cs-cd-label">{label}</p>
        <div className="cs-cd-row">
          {parts.map(([v, unit]) => <div key={unit} className="cs-cd-box"><b>{pad(v)}</b><span>{unit}</span></div>)}
        </div>
        <span className="cs-cd-btn">{cta}</span>
      </div>
      <p className="cs-sim-caption">{caption}</p>
      <p className="note">{note}</p>
    </div>
  );
}
