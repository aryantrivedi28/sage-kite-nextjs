'use client';

import { useState } from 'react';

export interface SearchFlowProps {
  title: string;
  /** Three searches, top to bottom. The first is already reaching the site before the work. */
  queries: [{ text: string; label: string }, { text: string; label: string }, { text: string; label: string }];
  /** Name in the site box, e.g. "Jiva Ayurveda site". */
  siteName: string;
  siteBefore: string;
  siteAfter: string;
  /** Shown in the competitors box in the Before state. */
  competitorsBefore: string;
  captions: { before: string; after: string };
  /** Screen-reader description of the diagram. */
  ariaLabel: string;
}

type State = 'before' | 'after';

/** Before/after diagram of where three kinds of search ended up. */
export function SearchFlow({ title, queries, siteName, siteBefore, siteAfter, competitorsBefore, captions, ariaLabel }: SearchFlowProps) {
  const [state, setState] = useState<State>('before');
  const rows = [20, 134, 248];

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
        <svg className="cs-flow" data-state={state} viewBox="0 0 800 330" role="img" aria-label={ariaLabel}>
          <g className="fl-text">
            {queries.map((q, i) => (
              <g key={q.text}>
                <rect className="fl-q" x="10" y={rows[i]} width="290" height="62" rx="8" />
                <text x="28" y={rows[i] + 28} fontSize={q.text.length > 32 ? 15 : 16} fontWeight="700">&quot;{q.text}&quot;</text>
                <text className="fl-muted" x="28" y={rows[i] + 48} fontSize="13">{q.label}</text>
              </g>
            ))}
          </g>
          <path className="flow-ok" d="M300 51 C 420 51, 420 62, 540 62" />
          <path className="flow-lost s-before" d="M300 165 C 420 165, 420 238, 540 238" />
          <path className="flow-lost s-before" d="M300 279 C 420 279, 420 270, 540 270" />
          <path className="flow-ok s-after" d="M300 165 C 420 165, 420 94, 540 94" />
          <path className="flow-ok s-after" d="M300 279 C 440 279, 420 126, 540 126" />
          <g className="fl-text">
            <rect className="fl-site" x="540" y="20" width="250" height="150" rx="10" />
            <text x="560" y="46" fontSize="17" fontWeight="700">{siteName}</text>
            <text className="s-before fl-strong" x="560" y="156" fontSize="13" fontWeight="700">{siteBefore}</text>
            <text className="s-after fl-strong" x="560" y="156" fontSize="13" fontWeight="700">{siteAfter}</text>
            <g className="comp-box">
              <rect className="fl-comp" x="540" y="200" width="250" height="110" rx="10" />
              <text x="560" y="228" fontSize="17" fontWeight="700">Competitors</text>
              <text className="s-before fl-strong" x="560" y="296" fontSize="13" fontWeight="700">{competitorsBefore}</text>
            </g>
          </g>
        </svg>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">Illustrative diagram, not measured data.</p>
    </div>
  );
}
