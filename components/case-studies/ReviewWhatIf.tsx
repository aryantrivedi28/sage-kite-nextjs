'use client';

import { useId, useState } from 'react';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export interface ReviewWhatIfProps {
  delivered: { label: string; min: number; max: number; step: number; value: number };
  asked: { label: string; min: number; max: number; step: number; value: number };
  /** Share of the people asked who leave a review, and the share of all customers who review when asking is ad hoc. */
  reviewRate: number;
  adhocRate: number;
  total: string;
  chartLabel: string;
  axis: { start: string; end: string };
  legend: { adhoc: string; mine: string };
  note: string;
}

/** What-if for one showroom: cars delivered and share asked give the reviews a year, against ad-hoc asking. */
export function ReviewWhatIf({ delivered, asked, reviewRate, adhocRate, total, chartLabel, axis, legend, note }: ReviewWhatIfProps) {
  const [d, setD] = useState(delivered.value);
  const [a, setA] = useState(asked.value);
  const id = useId();
  const mine = (d * a) / 100 * reviewRate;
  const adhoc = d * adhocRate * reviewRate;
  const year = Math.min(9999, Math.round(mine * 12));
  const max = Math.max(mine * 12, adhoc * 12, 1);
  const line = (r: number) => MONTHS.map((k) => `${30 + k * 30},${170 - (r * k / max) * 150}`).join(' ');

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-ms-what">
          <div className="cs-ms-sl">
            <label htmlFor={`${id}d`}>{delivered.label} <b>{d}</b></label>
            <input className="cs-nw-rng" id={`${id}d`} type="range" min={delivered.min} max={delivered.max} step={delivered.step} value={d} onChange={(e) => setD(+e.target.value)} />
          </div>
          <div className="cs-ms-sl">
            <label htmlFor={`${id}a`}>{asked.label} <b>{a}%</b></label>
            <input className="cs-nw-rng" id={`${id}a`} type="range" min={asked.min} max={asked.max} step={asked.step} value={a} onChange={(e) => setA(+e.target.value)} />
          </div>
          <div>
            <p className="cs-nw-bars-title">{total}</p>
            <div className="cs-ms-odo" aria-live="polite">
              <span className="cs-ms-sr">{year}</span>
              {String(year).padStart(4, '0').split('').map((c, i) => (
                <div key={i} aria-hidden="true"><i style={{ transform: `translateY(-${+c * 46}px)` }}>{DIGITS.map((n) => <span key={n}>{n}</span>)}</i></div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <svg className="cs-nw-cvs" viewBox="0 0 400 200" role="img" aria-label={chartLabel}>
            <line x1="30" y1="170" x2="390" y2="170" className="axis" />
            <polyline points={line(adhoc)} className="adhoc" />
            <polyline points={line(mine)} className="mine" />
            <text x="30" y="188">{axis.start}</text>
            <text x="390" y="188" textAnchor="end">{axis.end}</text>
          </svg>
          <div className="cs-ms-tags"><span className="a">{legend.adhoc}</span><span className="c">{legend.mine}</span></div>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
