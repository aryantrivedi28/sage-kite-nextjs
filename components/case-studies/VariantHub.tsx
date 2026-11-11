'use client';

import { useState } from 'react';

export interface VariantHubProps {
  title: string;
  ariaLabel: string;
  /** The label in the middle, e.g. "the real page". */
  center: string;
  /** One node per way the same page can be reached: its label and what it does. */
  variants: { label: string; text: string }[];
  /** Caption before a node is chosen. */
  idle: string;
  /** Added after the chosen node's text. */
  suffix: string;
}

/** One page in the middle, its duplicate addresses around it on dashed lines: hover, focus or tap one to read how it duplicates the page. */
export function VariantHub({ title, ariaLabel, center, variants, idle, suffix }: VariantHubProps) {
  const [cur, setCur] = useState<number | null>(null);
  const n = variants.length;
  const pts = variants.map((_, i) => {
    const a = ((-90 + i * (360 / n)) * Math.PI) / 180;
    return { x: +(240 + 170 * Math.cos(a)).toFixed(1), y: +(150 + 112 * Math.sin(a)).toFixed(1) };
  });

  return (
    <div className="cs-sim cs-ib-herocard">
      <p className="cs-ib-lab">{title}</p>
      <svg className="cs-ib-hub" viewBox="0 0 480 300" role="group" aria-label={ariaLabel}>
        {pts.map((p, i) => <path key={`sp${i}`} className="sp" d={`M${p.x} ${p.y} L240 150`} />)}
        {pts.map((p, i) => (
          <g
            key={variants[i].label}
            className="vn"
            tabIndex={0}
            role="button"
            aria-label={variants[i].label}
            onMouseEnter={() => setCur(i)}
            onFocus={() => setCur(i)}
            onClick={() => setCur(i)}
          >
            <rect x={p.x - 54} y={p.y - 15} width="108" height="30" rx="8" />
            <text x={p.x} y={p.y + 4}>{variants[i].label}</text>
          </g>
        ))}
        <g className="cn">
          <rect x="160" y="130" width="160" height="40" rx="10" />
          <text x="240" y="155">{center}</text>
        </g>
      </svg>
      <div className="cs-nw-flowcap cs-ib-cap" aria-live="polite">
        {cur === null ? idle : `${variants[cur].label}: ${variants[cur].text} ${suffix}`}
      </div>
    </div>
  );
}
