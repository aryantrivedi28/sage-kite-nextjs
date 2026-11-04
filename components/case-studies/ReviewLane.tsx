'use client';

import { useEffect, useRef, useState } from 'react';
import { Car } from './Car';

/** How long the car takes to cross the lane. */
const DURATION = 2600;
/** Width of the car on the lane, in px. */
const CAR_W = 56;

export interface ReviewLaneProps {
  /** The four steps of the review process, in order. */
  steps: [string, string, string, string];
  button: string;
  /** Label before the counter, e.g. "Reviews collected:". */
  stat: string;
  note: string;
}

/** "Simulate a customer visit" drives a car along the lane, lighting up the review steps as it passes. */
export function ReviewLane({ steps, button, stat, note }: ReviewLaneProps) {
  const [step, setStep] = useState(-1);
  const [busy, setBusy] = useState(false);
  const [reviews, setReviews] = useState(0);
  const lane = useRef<HTMLDivElement>(null);
  const car = useRef<SVGSVGElement>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const visit = () => {
    if (busy) return;
    setBusy(true);
    setStep(-1);
    const finish = () => { setStep(3); setReviews((n) => n + 1); setBusy(false); };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }
    const width = (lane.current?.clientWidth ?? CAR_W) - CAR_W;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (t0 === null) t0 = ts;
      const p = Math.min(1, (ts - t0) / DURATION);
      if (car.current) car.current.style.left = `${p * width}px`;
      setStep(p < 0.01 ? 0 : Math.min(3, Math.floor(p * 4)));
      if (p < 1) frame.current = requestAnimationFrame(tick);
      else finish();
    };
    frame.current = requestAnimationFrame(tick);
  };

  return (
    <div className="cs-sim">
      <div className="cs-lane" ref={lane} aria-hidden="true"><Car className="cs-lane-car" svgRef={car} /></div>
      <div className="cs-rsteps">{steps.map((s, i) => <span key={s} className={i <= step ? 'on' : undefined}>{s}</span>)}</div>
      <div className="cs-ctl">
        <button className="btn" type="button" disabled={busy} onClick={visit}>{button}</button>
        <ul className="cs-stats"><li>{stat} <b>{reviews}</b></li></ul>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
