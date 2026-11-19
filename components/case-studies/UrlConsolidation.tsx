'use client';

import type React from 'react';
import { useId, useState } from 'react';

type State = 'before' | 'after';
const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

export interface UrlConsolidationProps {
  title: string;
  buttons: Record<State, string>;
  groupLabel: string;
  inputLabel: string;
  initialPath: string;
  samples: string[];
  samplesLabel: string;
  /** `text` follows the tested path. */
  messages: { empty: string; separate: { title: string; text: string }; single: { title: string; text: string }; consolidated: { title: string; text: string } };
  /** The rule, e.g. a CodeBlock. */
  code: React.ReactNode;
  signals: { ariaLabel: string; rows: { path: string; before: string; after: string }[] };
  captions: Record<State, string>;
  note: string;
}

/** Type or pick a case variant of a category URL: before, each is its own URL; after, all redirect to the lowercase one, and the signal bars consolidate. */
export function UrlConsolidation({ title, buttons, groupLabel, inputLabel, initialPath, samples, samplesLabel, messages, code, signals, captions, note }: UrlConsolidationProps) {
  const id = useId();
  const [s, setS] = useState<State>('before');
  const [path, setPath] = useState(initialPath);
  let v = path.trim();
  if (v && !v.startsWith('/')) v = `/${v}`;
  const low = v.toLowerCase();

  let out: React.ReactNode;
  let ok = true;
  if (!v) out = messages.empty;
  else if (s === 'before') { ok = false; out = <><b>{messages.separate.title}</b>{v}{messages.separate.text}</>; }
  else if (v === low) out = <><b>{messages.single.title}</b>{v}{messages.single.text}</>;
  else out = <><b>{messages.consolidated.title}</b>{v} → {low}{messages.consolidated.text}</>;

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label={groupLabel}>
          {(['before', 'after'] as State[]).map((x) => (
            <button key={x} type="button" aria-pressed={s === x} onClick={() => setS(x)}>{buttons[x]}</button>
          ))}
        </div>
      </div>
      <div className="cs-code-split">
        <div className="cs-robots">
          <div className="cs-robots-in">
            <label htmlFor={id}>{inputLabel}</label>
            <input id={id} type="text" value={path} autoComplete="off" spellCheck={false} onChange={(e) => setPath(e.target.value)} />
          </div>
          <div className="cs-robots-chips" role="group" aria-label={samplesLabel}>
            {samples.map((x) => <button key={x} type="button" onClick={() => setPath(x)}>{x}</button>)}
          </div>
          <p className={`cs-robots-out ${ok ? 'ok' : 'no'}`} aria-live="polite">{out}</p>
          {code}
        </div>
        <div className="cs-jn-sig" role="img" aria-label={signals.ariaLabel}>
          {signals.rows.map((r, i) => (
            <div key={r.path} className="row">
              <span>{r.path}</span>
              <div className="track"><div className={`fill${s === 'after' && i === 0 ? ' kept' : ''}`} style={cssVars({ '--w': r[s] })}></div></div>
              <span>{r[s]}</span>
            </div>
          ))}
          <p className="cs-nw-cap cs-ib-min">{captions[s]}</p>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
