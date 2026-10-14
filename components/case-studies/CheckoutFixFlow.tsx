'use client';

import { useState } from 'react';

type State = 'before' | 'after';
const X = [100, 300, 500, 700];

export interface CheckoutFixFlowProps {
  title: string;
  /** Four steps of the journey, left to right. */
  steps: [string, string, string, string];
  captions: Record<State, string>;
  /** Screen-reader description of the diagram. */
  ariaLabel: string;
}

/**
 * Before/after diagram of a checkout journey: before, bugs sit between the
 * steps and shoppers drop off; after, every step is ticked and the path is clear.
 */
export function CheckoutFixFlow({ title, steps, captions, ariaLabel }: CheckoutFixFlowProps) {
  const [state, setState] = useState<State>('before');

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label="Choose a checkout state">
          {(['before', 'after'] as State[]).map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {s === 'before' ? 'Before' : 'After'}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-scroll">
        <svg className="cs-path cs-ck" data-state={state} viewBox="0 0 800 250" role="img" aria-label={ariaLabel}>
          <line className="pp-track" x1="100" y1="110" x2="700" y2="110" />
          <line className="pp-flow" x1="100" y1="110" x2="700" y2="110" />
          {X.map((x, i) => <circle key={x} className={`pp-node n${i}`} cx={x} cy="110" r="22" />)}
          <g fontSize="15" fontWeight="700" textAnchor="middle">
            {steps.map((t, i) => <text key={t} x={X[i]} y="166">{t}</text>)}
          </g>
          <g className="ck-bugs">
            {[200, 400, 600].map((x) => (
              <g key={x} transform={`translate(${x} 62)`}>
                <circle className="ck-bug" r="15" />
                <path className="ck-x" d="M-6 -6 L6 6 M6 -6 L-6 6" />
              </g>
            ))}
            {[300, 500].map((x) => (
              <g key={x}>
                <path className="ck-drop" d={`M${x} 186 V226 M${x - 6} 218 L${x} 226 L${x + 6} 218`} />
                <text className="ck-drop-text" x={x + 16} y="214" fontSize="13" fontWeight="600">Drop-off</text>
              </g>
            ))}
          </g>
          <g className="ck-clear">
            {X.map((x) => <path key={x} d={`M${x - 8} 192 l6 6 l12 -14`} />)}
          </g>
          <circle className="pp-dot" cx="100" cy="110" r="7" />
        </svg>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">Illustrative journey, not a measured funnel. No conversion figures were provided for this project.</p>
    </div>
  );
}
