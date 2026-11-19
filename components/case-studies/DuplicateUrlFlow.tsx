'use client';

import { useState } from 'react';

export interface DuplicateUrlFlowProps {
  title: string;
  /** Two versions of the same page, top to bottom. */
  urls: [{ url: string; note: string }, { url: string; note: string }];
  /** Heading in the right-hand box, e.g. "Ranking signals". */
  target: string;
  /** Line under the bars in each state. */
  states: { before: string; after: string };
  captions: { before: string; after: string };
  /** Screen-reader description of the diagram. */
  ariaLabel: string;
}

type State = 'before' | 'after';

/** Before/after diagram: two URL versions of one page split its signals, or hand them to one version. */
export function DuplicateUrlFlow({ title, urls, target, states, captions, ariaLabel }: DuplicateUrlFlowProps) {
  const [state, setState] = useState<State>('before');
  const rows = [30, 150];

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label="Choose a state to show">
          {(['before', 'after'] as State[]).map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {s === 'before' ? 'Before' : 'After'}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-scroll">
        <svg className="cs-flow" data-state={state} viewBox="0 0 800 250" role="img" aria-label={ariaLabel}>
          <g className="fl-text">
            {urls.map((u, i) => (
              <g key={u.url}>
                <rect className="fl-q" x="10" y={rows[i]} width="290" height="66" rx="8" />
                <text x="28" y={rows[i] + 28} fontSize="17" fontWeight="700">{u.url}</text>
                <text className="fl-muted" x="28" y={rows[i] + 50} fontSize="13">{u.note}</text>
              </g>
            ))}
          </g>
          <path className="flow-lost s-before" d="M300 63 C 420 63, 420 82, 540 82" />
          <path className="flow-lost s-before" d="M300 183 C 420 183, 420 164, 540 164" />
          <path className="flow-ok s-after" d="M300 63 C 420 63, 420 123, 540 123" />
          <path className="flow-ok s-after" d="M300 183 C 420 183, 420 123, 540 123" />
          <g className="fl-text">
            <rect className="fl-site" x="540" y="20" width="250" height="210" rx="10" />
            <text x="560" y="46" fontSize="16" fontWeight="700">{target}</text>
            <g className="s-before">
              <rect className="fl-bar-lost" x="560" y="68" width="100" height="28" rx="5" />
              <rect className="fl-bar-lost" x="560" y="150" width="100" height="28" rx="5" />
              <text x="560" y="212" fontSize="13" fontWeight="700">{states.before}</text>
            </g>
            <g className="s-after">
              <rect className="fl-bar-ok" x="560" y="109" width="210" height="28" rx="5" />
              <text x="560" y="212" fontSize="13" fontWeight="700">{states.after}</text>
            </g>
          </g>
        </svg>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">Illustrative diagram with example URLs, not measured data.</p>
    </div>
  );
}
