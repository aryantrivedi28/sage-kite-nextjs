'use client';

import { useEffect, useRef, useState } from 'react';
import { CarShape } from './Car';

/* Illustrative street grid: roads at these x and y positions, six dealership pins on the crossings, and the visitor. */
const ROADS_X = [90, 200, 330, 460];
const ROADS_Y = [70, 160, 250, 330];
const BLOCKS = [
  [105, 85, 80, 60], [215, 85, 100, 60], [345, 85, 100, 60],
  [105, 175, 80, 60], [215, 175, 100, 60], [345, 175, 100, 60],
  [105, 265, 80, 50], [215, 265, 100, 50], [345, 265, 100, 50],
];
const PINS: [number, number][] = [[200, 70], [460, 70], [90, 160], [330, 160], [460, 250], [200, 330]];
const START = { x: 330, y: 330 };
/** Map units per second. */
const SPEED = 190;

export interface ShowroomMapProps {
  ariaLabel: string;
  /** Status line before anything is picked. */
  idle: string;
  /** Status while driving and on arrival; `{n}` is the dealership number. */
  driving: string;
  arrived: string;
  /** Accessible name and visible label of each pin; `{n}` is the dealership number. */
  pinLabel: string;
  pinText: string;
  button: string;
}

const fill = (s: string, n: number) => s.split('{n}').join(String(n));

/**
 * The hero map: dealership pins on an illustrative street grid. Picking a pin, or "Find nearest showroom",
 * drives the car there along the roads (across, then up or down). On load it drives to the nearest one.
 */
export function ShowroomMap({ ariaLabel, idle, driving, arrived, pinLabel, pinText, button }: ShowroomMapProps) {
  const [active, setActive] = useState<number | null>(null);
  const [info, setInfo] = useState(idle);
  const car = useRef<SVGGElement>(null);
  const pos = useRef({ ...START, a: 0 });
  const run = useRef(0);

  const place = (x: number, y: number, a: number) => {
    pos.current = { x, y, a };
    car.current?.setAttribute('transform', `translate(${x} ${y}) rotate(${a}) scale(1.15) translate(-20 -10)`);
  };

  const go = (i: number) => {
    const [tx, ty] = PINS[i];
    const id = ++run.current;
    setActive(i);
    const { x: sx, y: sy } = pos.current;
    const d1 = Math.abs(tx - sx);
    const total = d1 + Math.abs(ty - sy);
    const done = () => setInfo(fill(arrived, i + 1));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (total === 0 || reduce) { place(tx, ty, 0); done(); return; }
    setInfo(fill(driving, i + 1));
    let t0: number | null = null;
    const step = (ts: number) => {
      if (id !== run.current) return;
      if (t0 === null) t0 = ts;
      const d = Math.min(total, ((ts - t0) / 1000) * SPEED);
      if (d <= d1) place(sx + Math.sign(tx - sx) * d, sy, tx >= sx ? 0 : 180);
      else place(tx, sy + Math.sign(ty - sy) * (d - d1), ty >= sy ? 90 : -90);
      if (d < total) requestAnimationFrame(step);
      else done();
    };
    requestAnimationFrame(step);
  };

  const nearest = () => {
    let best = -1;
    let bd = Infinity;
    PINS.forEach(([x, y], i) => {
      const d = Math.abs(x - pos.current.x) + Math.abs(y - pos.current.y);
      if (d > 0 && d < bd) { bd = d; best = i; }
    });
    if (best > -1) go(best);
  };

  useEffect(() => {
    place(START.x, START.y, 0);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(nearest, reduce ? 0 : 900);
    const runs = run;
    return () => { clearTimeout(t); runs.current += 1; };
  }, []);

  return (
    <div className="cs-map">
      <svg viewBox="0 0 560 360" role="group" aria-label={ariaLabel}>
        <rect className="bg" width="560" height="360" />
        <g className="blk">{BLOCKS.map(([x, y, w, h]) => <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="8" />)}</g>
        <g>
          {ROADS_Y.map((y) => <path key={`y${y}`} className="rd" d={`M20 ${y} H540`} />)}
          {ROADS_X.map((x) => <path key={`x${x}`} className="rd" d={`M${x} 20 V345`} />)}
        </g>
        <circle className="you" cx={START.x} cy={START.y} r="8" />
        {PINS.map(([x, y], i) => (
          <g
            key={i}
            className={`cs-pin${active === i ? ' on' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={fill(pinLabel, i + 1)}
            onClick={() => go(i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(i); } }}
          >
            <path className="o" d={`M${x} ${y + 2} C${x - 16} ${y - 14} ${x - 14} ${y - 30} ${x} ${y - 30} C${x + 14} ${y - 30} ${x + 16} ${y - 14} ${x} ${y + 2}Z`} />
            <circle className="hole" cx={x} cy={y - 18} r="4.5" />
            <text x={x} y={y + 16}>{fill(pinText, i + 1)}</text>
          </g>
        ))}
        <g ref={car} transform={`translate(${START.x} ${START.y}) scale(1.15) translate(-20 -10)`}><CarShape /></g>
      </svg>
      <div className="cs-map-ui">
        <span className="cs-map-info" aria-live="polite">{info}</span>
        <button className="cs-ghost" type="button" onClick={nearest}>{button}</button>
      </div>
    </div>
  );
}
