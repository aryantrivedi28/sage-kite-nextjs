'use client';

import { useId, useState } from 'react';

const MAX = 48;
const TAU = 6;
const PX = 50;
const PW = 570;
const PT = 20;
const PB = 210;
const X = (t: number) => PX + (t / MAX) * PW;
const Y = (v: number) => PT + (PB - PT) * (1 - v);
const value = (t: number) => Math.exp(-t / TAU);

function curve() {
  let p = `M${X(0)} ${Y(1)}`;
  for (let i = 1; i <= 96; i++) { const t = (i * MAX) / 96; p += ` L${X(t).toFixed(1)} ${Y(value(t)).toFixed(1)}`; }
  return p;
}
function area(t0: number, t1: number) {
  let p = `M${X(t0).toFixed(1)} ${PB}`;
  for (let i = 0; i <= 96; i++) { const t = t0 + ((t1 - t0) * i) / 96; p += ` L${X(t).toFixed(1)} ${Y(value(t)).toFixed(1)}`; }
  return `${p} L${X(t1).toFixed(1)} ${PB}Z`;
}
const CURVE = curve();

export interface DecayCurveProps {
  ariaLabel: string;
  /** Axis words: start, end and the vertical axis. */
  axis: { start: string; end: string; value: string };
  /** Label of the slider. */
  label: string;
  presets: { label: string; hours: number }[];
  /** `{t}` the hours, `{p}` the share of attention left. Then one of `tails`, by how late the story was found. */
  caption: string;
  tails: { fast: string; mid: string; late: string };
  note: string;
}

/**
 * A story's attention fading over 48 hours (illustrative exponential curve). The slider sets when it is discovered:
 * the attention lost before then is shaded, and the share still available is shown as a percentage.
 */
export function DecayCurve({ ariaLabel, axis, label, presets, caption, tails, note }: DecayCurveProps) {
  const id = useId();
  const [t, setT] = useState(18);
  const v = value(t);
  const pct = Math.round(v * 100);
  const tail = t <= 2 ? tails.fast : t <= 8 ? tails.mid : tails.late;

  return (
    <div className="cs-sim">
      <svg className="cs-nw-decay" viewBox="0 0 640 250" role="img" aria-label={ariaLabel}>
        <line className="bs" x1={PX} y1={PB} x2={PX + PW} y2={PB} />
        <path className="lost" d={area(0, t)} />
        <path className="ar" d={area(t, MAX)} />
        <path className="cv" d={CURVE} />
        <line className="hd" x1={X(t)} x2={X(t)} y1={PT} y2={PB} />
        <circle className="mark" cx={X(t)} cy={Y(v)} r="7" />
        <text x={PX} y={PB + 22}>{axis.start}</text>
        <text x={PX + PW} y={PB + 22} className="end">{axis.end}</text>
        <text x={PX} y="14">{axis.value}</text>
      </svg>
      <label htmlFor={`${id}-t`} className="cs-nw-lab">{label}</label>
      <input className="cs-nw-rng" id={`${id}-t`} type="range" min="0" max="48" step="0.5" value={t} aria-describedby={`${id}-cap`} onChange={(e) => setT(parseFloat(e.target.value))} />
      <div className="cs-robots-chips" role="group" aria-label="Presets">
        {presets.map((p) => <button key={p.label} type="button" onClick={() => setT(p.hours)}>{p.label}</button>)}
      </div>
      <div className="cs-nw-ctl">
        <span className="cs-nw-big">{pct}%</span>
        <span className="cs-nw-cap" id={`${id}-cap`} aria-live="polite">{`${caption.split('{t}').join(String(t)).split('{p}').join(String(pct))}${tail}`}</span>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
