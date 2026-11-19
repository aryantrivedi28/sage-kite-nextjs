'use client';

import type React from 'react';
import { useState } from 'react';

type State = 'without' | 'with';
const STATES: State[] = ['without', 'with'];

export interface SchemaToggleProps {
  title: string;
  buttons: Record<State, string>;
  groupLabel: string;
  /** The illustrated search result. `rich` are the extras shown only with schema; the first is drawn as stars. */
  result: { url: string; title: string; rich: [string, ...string[]]; description: string };
  /** The page source without and with markup, e.g. <CodeBlock>. */
  code: Record<State, React.ReactNode>;
  captions: Record<State, string>;
  /** Small print under the caption. */
  note: string;
}

/** A search result with and without product and review markup, beside the markup itself. */
export function SchemaToggle({ title, buttons, groupLabel, result, code, captions, note }: SchemaToggleProps) {
  const [state, setState] = useState<State>('without');
  const [stars, ...rest] = result.rich;

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label={groupLabel}>
          {STATES.map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {buttons[s]}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-schema">
        <div className="cs-rich" data-state={state}>
          <span className="cs-rich-u">{result.url}</span>
          <span className="cs-rich-t">{result.title}</span>
          <span className="cs-rich-r"><span className="cs-stars-row" aria-hidden="true">{stars}</span>{rest.map((x) => <span key={x}>{x}</span>)}</span>
          <span className="cs-rich-d">{result.description}</span>
        </div>
        {/* Both versions are in the HTML; only the selected one is shown. */}
        <div>
          <div hidden={state !== 'without'}>{code.without}</div>
          <div hidden={state !== 'with'}>{code.with}</div>
        </div>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">{note}</p>
    </div>
  );
}
