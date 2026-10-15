'use client';

import { useState } from 'react';

type State = 'before' | 'after';

export interface PdpToggleProps {
  title: string;
  /** Button labels, e.g. "Basics" and "With the revamp". */
  buttons: Record<State, string>;
  /** Labels on what the revamp adds: the tag over the image, then the two content blocks. */
  adds: [string, string, string];
  captions: Record<State, string>;
  /** Small print under the illustration. */
  note: string;
  /** Which view shows first. Defaults to 'after'. */
  initial?: State;
}

/** Illustration: a product page wireframe with and without what a redesign adds. */
export function PdpToggle({ title, buttons, adds, captions, note, initial = 'after' }: PdpToggleProps) {
  const [state, setState] = useState<State>(initial);

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label="Choose a product page view">
          {(['before', 'after'] as State[]).map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {buttons[s]}
            </button>
          ))}
        </div>
      </div>
      <div className={`cs-pdp ${state}`} aria-hidden="true">
        <div>
          <div className="cs-pdp-hero"><span>[Product image]</span></div>
          <div className="cs-pdp-thumbs cs-pdp-more"><i></i><i></i><i></i><i></i></div>
        </div>
        <div className="cs-pdp-info">
          <b className="cs-pdp-title">[Product name]</b>
          <span className="cs-pdp-price">[Price]</span>
          <span className="cs-pdp-cta">[Add to cart]</span>
          <div className="cs-pdp-block info cs-pdp-more"><b>{adds[1]}</b><i></i><i></i><i className="s"></i></div>
          <div className="cs-pdp-block seo cs-pdp-more"><b>{adds[2]}</b><i></i><i></i><i className="s"></i></div>
        </div>
        <span className="cs-pdp-tag cs-pdp-more">{adds[0]}</span>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">{note}</p>
    </div>
  );
}
