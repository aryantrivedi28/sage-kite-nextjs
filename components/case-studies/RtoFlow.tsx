'use client';

import { useState } from 'react';

type State = 'before' | 'after';

export interface RtoFlowProps {
  title: string;
  /** Button labels, e.g. "COD as is" and "Targeted payment". */
  buttons: Record<State, string>;
  captions: Record<State, string>;
  /** Screen-reader description of the diagram. */
  ariaLabel: string;
  /** Small print under the illustration. */
  note: string;
}

/**
 * Before/after diagram of a cash on delivery order: it ends as delivered or as
 * returned to origin (RTO). After, targeted payment methods sit at the start
 * and RTO is marked as the loss being reduced.
 */
export function RtoFlow({ title, buttons, captions, ariaLabel, note }: RtoFlowProps) {
  const [state, setState] = useState<State>('before');

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label="Choose a flow">
          {(['before', 'after'] as State[]).map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {buttons[s]}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-scroll">
        <svg className="cs-rto" data-state={state} viewBox="0 0 800 250" role="img" aria-label={ariaLabel}>
          <rect className="r-order" x="10" y="85" width="190" height="80" rx="10" />
          <g fontSize="16" fontWeight="700" textAnchor="middle">
            <text x="105" y="120">Cash on delivery</text>
            <text x="105" y="142">order placed</text>
          </g>

          <g className="r-tpm">
            <rect className="r-tpm-box" x="250" y="20" width="200" height="56" rx="10" />
            <g fontSize="15" fontWeight="700" textAnchor="middle">
              <text x="350" y="46">Targeted payment</text>
              <text x="350" y="64">methods</text>
            </g>
            <path className="r-tpm-line" d="M105 85 C105 50 180 48 250 48" />
            <path className="r-tpm-line" d="M350 76 V95" />
          </g>

          <line className="r-line" x1="200" y1="125" x2="330" y2="125" />
          <rect className="r-step" x="330" y="95" width="170" height="60" rx="10" />
          <text x="415" y="130" fontSize="16" fontWeight="700" textAnchor="middle">Delivery attempt</text>
          <line className="r-line" x1="500" y1="125" x2="560" y2="125" />

          <path className="r-line" d="M560 125 C600 125 600 62 640 62" />
          <path className="r-line" d="M560 125 C600 125 600 190 640 190" />
          <rect className="r-ok" x="640" y="36" width="150" height="52" rx="10" />
          <text x="715" y="68" fontSize="16" fontWeight="700" textAnchor="middle">Delivered</text>
          <rect className="r-box" x="640" y="164" width="150" height="52" rx="10" />
          <text x="715" y="188" fontSize="16" fontWeight="700" textAnchor="middle">Returned to origin</text>
          <text className="r-loss" x="715" y="206" fontSize="13" fontWeight="600" textAnchor="middle">(RTO)</text>
          <text className="r-goal" x="715" y="236" fontSize="13" fontWeight="600" textAnchor="middle">The loss being reduced</text>
        </svg>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">{note}</p>
    </div>
  );
}
