'use client';

import type React from 'react';
import { useRef, useState } from 'react';

const CX = 110;
const CY = 110;
const R = 84;
const MIN = 20;
const MAXV = 50;
const pt = (a: number): [number, number] => { const r = (a * Math.PI) / 180; return [CX + R * Math.sin(r), CY - R * Math.cos(r)]; };
const angleOf = (v: number) => -135 + ((v - MIN) / (MAXV - MIN)) * 270;
const arc = (a0: number, a1: number) => {
  const p0 = pt(a0);
  const p1 = pt(a1);
  return `M${p0[0].toFixed(1)} ${p0[1].toFixed(1)} A${R} ${R} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p1[0].toFixed(1)} ${p1[1].toFixed(1)}`;
};

export interface OutputDialProps {
  ariaLabel: string;
  unit: string;
  presets: { label: string; value: number }[];
  stats: { perHour: string; vs: string; extra: string };
  tilesLabel: string;
  captions: { low: string; mid: string; high: string };
  note: string;
}

/**
 * A dial from 20 to 50 articles a day: drag it, use the arrow keys (Home / End for the ends) or a preset. The 50
 * tiles fill with the original 20 and the extra articles, and the stats show the simple arithmetic.
 */
export function OutputDial({ ariaLabel, unit, presets, stats, tilesLabel, captions, note }: OutputDialProps) {
  const [v, setV] = useState(MIN);
  const svg = useRef<SVGSVGElement>(null);
  const drag = useRef(false);
  const set = (x: number) => setV(Math.max(MIN, Math.min(MAXV, Math.round(x))));

  const fromEvent = (e: React.PointerEvent) => {
    const r = svg.current!.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    let a = (Math.atan2(x, -y) * 180) / Math.PI;
    if (a > 135 || a < -135) a = a > 0 ? (a >= 157 ? -135 : 135) : -135;
    a = Math.max(-135, Math.min(135, a));
    set(MIN + ((a + 135) / 270) * (MAXV - MIN));
  };

  const a = angleOf(v);
  const thumb = pt(a);
  const p20 = pt(angleOf(MIN));
  const p50 = pt(angleOf(MAXV));
  const caption = v <= MIN ? captions.low : v < MAXV ? captions.mid : captions.high;

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-nw-dialw">
          <svg
            ref={svg}
            className="cs-nw-dial"
            viewBox="0 0 220 220"
            role="slider"
            tabIndex={0}
            aria-label={ariaLabel}
            aria-valuemin={MIN}
            aria-valuemax={MAXV}
            aria-valuenow={v}
            onPointerDown={(e) => { drag.current = true; svg.current?.setPointerCapture(e.pointerId); fromEvent(e); }}
            onPointerMove={(e) => { if (drag.current) fromEvent(e); }}
            onPointerUp={() => { drag.current = false; }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); set(v + 1); }
              else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); set(v - 1); }
              else if (e.key === 'Home') { e.preventDefault(); set(MIN); }
              else if (e.key === 'End') { e.preventDefault(); set(MAXV); }
            }}
          >
            <path className="tr" d={arc(-135, 135)} />
            <path className="fg" d={arc(-135, Math.max(-134.9, a))} />
            <circle className="th" r="11" cx={thumb[0]} cy={thumb[1]} />
            <text className="v" x="110" y="118">{v}</text>
            <text className="unit" x="110" y="138">{unit}</text>
            <text className="tk" x={p20[0] - 6} y={p20[1] + 26}>{MIN}</text>
            <text className="tk" x={p50[0] + 6} y={p50[1] + 26}>{MAXV}</text>
          </svg>
          <div className="cs-robots-chips" role="group" aria-label="Presets">
            {presets.map((p) => <button key={p.label} type="button" onClick={() => set(p.value)}>{p.label}</button>)}
          </div>
        </div>
        <div className="cs-nw-field">
          <ul className="cs-stats">
            <li>{stats.perHour} <b>{(v / 24).toFixed(1)}</b></li>
            <li>{stats.vs} <b>{(v / MIN).toFixed(1)}×</b></li>
            <li>{stats.extra} <b>{v - MIN}</b></li>
          </ul>
          <div className="cs-nw-tiles" role="img" aria-label={tilesLabel}>
            {Array.from({ length: MAXV }, (_, k) => <i key={k} className={k < MIN ? 'on' : k < v ? 'new' : undefined}></i>)}
          </div>
          <p className="cs-nw-cap" aria-live="polite">{caption}</p>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
