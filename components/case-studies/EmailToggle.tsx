'use client';

import { useState } from 'react';

type State = 'default' | 'custom';

/** Illustration: the same email as a default template and as a custom-themed one. */
export function EmailToggle({ title, captions, note }: { title: string; captions: Record<State, string>; note: string }) {
  const [state, setState] = useState<State>('default');

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label="Choose an email style">
          {(['default', 'custom'] as State[]).map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {s === 'default' ? 'Default' : 'Custom-themed'}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-mail-stage" aria-hidden="true">
        <div className={`cs-mail ${state}`}>
          <div className="cs-mail-head"><span>[Brand]</span><span className="cs-mail-tag">[Email touchpoint]</span></div>
          <div className="cs-mail-body">
            <b>[Headline for this message]</b>
            <i></i><i></i><i className="s"></i>
            <span className="cs-mail-btn">[Call to action]</span>
          </div>
          <div className="cs-mail-foot"><i></i></div>
        </div>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">{note}</p>
    </div>
  );
}
