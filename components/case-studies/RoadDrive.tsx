'use client';

import { useEffect, useId, useRef, useState } from 'react';

const ROAD = 'M30,150 C130,30 230,250 330,140 S520,40 590,130';
const DRIVE_MS = 1300;
const PAUSE_MS = 900;
/** Where station i sits along the road, as a share of its length. */
const at = (i: number) => 0.08 + i * 0.28;

export interface RoadDriveProps {
  ariaLabel: string;
  stations: { title: string; text: string }[];
  button: string;
  /** `{n}` the step's number, `{title}` its name. */
  stepLabel: string;
  idle: { label: string; text: string };
}

/** A winding road with one station per step: tap a station and the car drives there, or take the whole drive. */
export function RoadDrive({ ariaLabel, stations, button, stepLabel, idle }: RoadDriveProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGGElement>(null);
  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);
  const [step, setStep] = useState<number | null>(null);
  const pos = useRef(0);
  const frame = useRef(0);
  const wait = useRef<ReturnType<typeof setTimeout> | null>(null);
  const run = useRef(0);
  const dashId = useId();

  const place = (t: number) => {
    const p = pathRef.current;
    const car = carRef.current;
    if (!p || !car) return;
    const len = p.getTotalLength();
    const a = p.getPointAtLength(len * t);
    const b = p.getPointAtLength(Math.min(len, len * t + 2));
    car.setAttribute('transform', `translate(${a.x},${a.y}) rotate(${(Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI})`);
  };

  useEffect(() => {
    const p = pathRef.current;
    if (p) {
      const len = p.getTotalLength();
      setPts(stations.map((_, i) => { const q = p.getPointAtLength(len * at(i)); return { x: q.x, y: q.y }; }));
    }
    place(0);
    return () => { cancelAnimationFrame(frame.current); if (wait.current) clearTimeout(wait.current); };
  }, [stations]);

  const drive = (to: number, done?: () => void) => {
    cancelAnimationFrame(frame.current);
    const from = pos.current;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { pos.current = to; place(to); done?.(); return; }
    const t0 = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / DRIVE_MS);
      pos.current = from + (to - from) * k;
      place(pos.current);
      if (k < 1) frame.current = requestAnimationFrame(tick);
      else done?.();
    };
    frame.current = requestAnimationFrame(tick);
  };

  const goTo = (i: number) => {
    run.current += 1;
    if (wait.current) clearTimeout(wait.current);
    drive(at(i));
    setStep(i);
  };

  const tour = () => {
    const me = ++run.current;
    if (wait.current) clearTimeout(wait.current);
    cancelAnimationFrame(frame.current);
    pos.current = 0;
    place(0);
    const next = (i: number) => {
      if (i >= stations.length || run.current !== me) return;
      drive(at(i), () => {
        if (run.current !== me) return;
        setStep(i);
        wait.current = setTimeout(() => next(i + 1), PAUSE_MS);
      });
    };
    next(0);
  };

  return (
    <div className="cs-sim">
      <svg className="cs-ms-road" viewBox="0 0 620 220" role="group" aria-label={ariaLabel}>
        <path d={ROAD} className="bed" />
        <path ref={pathRef} id={dashId} d={ROAD} className="dash" />
        {pts.map((p, i) => (
          <g
            key={stations[i].title}
            className={`st${step !== null && i <= step ? ' on' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={stations[i].title}
            onClick={() => goTo(i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(i); } }}
          >
            <circle cx={p.x} cy={p.y} r="15" />
            <text x={p.x} y={p.y + 4} textAnchor="middle">{i + 1}</text>
            <text x={p.x} y={p.y - 24} textAnchor="middle">{stations[i].title}</text>
          </g>
        ))}
        <g ref={carRef} className="car" aria-hidden="true">
          <rect x="-16" y="-8" width="32" height="13" rx="4" className="body" />
          <rect x="-8" y="-15" width="17" height="9" rx="3" className="body" />
          <circle cx="-9" cy="6" r="4.5" className="wheel" />
          <circle cx="9" cy="6" r="4.5" className="wheel" />
        </g>
      </svg>
      <div className="cs-nw-ctl"><button className="btn" type="button" onClick={tour}>{button}</button></div>
      <div className="cs-ms-desc" aria-live="polite">
        <span className="lab">{step === null ? idle.label : stepLabel.split('{n}').join(String(step + 1)).split('{title}').join(stations[step].title)}</span>
        <p>{step === null ? idle.text : stations[step].text}</p>
      </div>
    </div>
  );
}
