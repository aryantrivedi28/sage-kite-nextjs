'use client';

import { useEffect, useId, useRef, useState } from 'react';

const X = (i: number) => 20 + i * 52;
const Y = (v: number) => 200 - v * 1.7;

export interface FestiveLaunchProps {
  ariaLabel: string;
  months: string[];
  /** Illustrative search demand per month (0–100). */
  demand: number[];
  /** Month indexes of the festive window, in order. */
  window: number[];
  /** Month the page goes live on load. */
  initial: number;
  labels: { window: string; live: string; slider: string; play: string; covered: string };
  captions: { full: string; none: string; part: string };
  note: string;
}

/**
 * Search demand across a year with a festive window. The slider (or Play) sets the month the festive page goes live:
 * the demand from then on is shaded, and the share of the festive window covered is shown.
 */
export function FestiveLaunch({ ariaLabel, months, demand, window: win, initial, labels, captions, note }: FestiveLaunchProps) {
  const id = useId();
  const clip = `cs-nw-clip-${id.replace(/[^a-zA-Z0-9]/g, '')}`;
  const [m, setM] = useState(initial);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  const last = months.length - 1;
  const pts = demand.map((v, i) => `${X(i)},${Y(v)}`).join(' ');
  const area = `M${X(0)},200 L${pts.split(' ').join(' L')} L${X(last)},200Z`;
  let tot = 0;
  let got = 0;
  win.forEach((i) => { tot += demand[i]; if (i >= m) got += demand[i]; });
  const p = Math.round((got / tot) * 100);
  const caption = p === 100 ? captions.full : p === 0 ? captions.none : captions.part;
  const x = X(m);

  const play = () => {
    if (timer.current) clearInterval(timer.current);
    let v = 0;
    setM(0);
    timer.current = setInterval(() => {
      v += 1;
      if (v > last) { if (timer.current) clearInterval(timer.current); return; }
      setM(v);
    }, 450);
  };

  return (
    <div className="cs-sim">
      <svg className="cs-nw-cvs" viewBox="0 0 600 230" role="img" aria-label={ariaLabel}>
        <defs><clipPath id={clip}><rect x={x - 26} y="0" width="600" height="230" /></clipPath></defs>
        <rect className="win" x={X(win[0]) - 26} y="20" width={X(win[win.length - 1]) - X(win[0]) + 52} height="180" rx="6" />
        <text x={X(win[Math.floor(win.length / 2)])} y="34" textAnchor="middle">{labels.window}</text>
        <path className="all" d={area} />
        <path className="got" d={area} clipPath={`url(#${clip})`} />
        <polyline className="ln" points={pts} />
        {months.map((mo, i) => <text key={mo} x={X(i)} y="220" textAnchor="middle">{mo}</text>)}
        <line className="live" x1={x} x2={x} y1="14" y2="200" />
        <text className="lv" x={x} y="10" textAnchor="middle">{labels.live}</text>
      </svg>
      <div className="cs-nw-ctl">
        <label htmlFor={`${id}-m`} className="cs-nw-lab">{labels.slider}</label>
        <input className="cs-nw-rng grow" id={`${id}-m`} type="range" min="0" max={last} step="1" value={m} onChange={(e) => { if (timer.current) clearInterval(timer.current); setM(+e.target.value); }} />
        <output className="cs-nw-out" htmlFor={`${id}-m`}>{months[m]}</output>
        <button className="cs-ghost" type="button" onClick={play}>{labels.play}</button>
      </div>
      <ul className="cs-stats"><li>{labels.covered} <b>{p}%</b></li></ul>
      <p className="cs-nw-cap" aria-live="polite">{caption}</p>
      <p className="note">{note}</p>
    </div>
  );
}
