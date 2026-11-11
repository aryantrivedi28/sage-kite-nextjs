'use client';

import { useState } from 'react';
import { HalfGauge, gaugeTone } from './HalfGauge';

export interface LocalPageBuilderProps {
  /** Page elements and their illustrative weights (they add up to 100). */
  elements: { label: string; weight: number }[];
  ariaLabel: string;
  /** Below 40, below 75, and from 75. */
  captions: { low: string; mid: string; high: string };
  empty: string;
  note: string;
}

/** Switch page elements on: the local relevance gauge rises and the page preview fills in, in the order chosen. */
export function LocalPageBuilder({ elements, ariaLabel, captions, empty, note }: LocalPageBuilderProps) {
  const [on, setOn] = useState<number[]>([]);
  const v = on.reduce((a, i) => a + elements[i].weight, 0);
  const caption = v < 40 ? captions.low : v < 75 ? captions.mid : captions.high;

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-nw-layers">
          {elements.map((e, i) => (
            <button key={e.label} type="button" aria-pressed={on.includes(i)} onClick={() => setOn((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]))}>{e.label}</button>
          ))}
        </div>
        <div className="cs-ms-build">
          <HalfGauge value={v} color={gaugeTone(v, 35, 75)} showValue ariaLabel={ariaLabel} />
          <p className="cs-nw-cap cs-ms-gcap" aria-live="polite">{caption}</p>
          <div className="cs-ms-pvw">
            {on.length ? on.map((i) => <div key={i} className="pvb">{elements[i].label}</div>) : <span className="note">{empty}</span>}
          </div>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
