'use client';

import Link from 'next/link';
import { useState } from 'react';

export interface ReadinessCheckProps {
  groupLabel: string;
  /** In the order that worked: each is a toggle, and a next step while it is missing. */
  items: { key: string; label: string; step: string; text: string }[];
  /** `{n}` elements in place, `{m}` to go. */
  partial: string;
  complete: string;
  /** The plan when nothing is missing. */
  keepGoing: { step: string; text: string };
  cta: { label: string; href: string };
  note: string;
}

/** Tick what a newsroom already has; the missing elements become a numbered plan, in the order that worked. */
export function ReadinessCheck({ groupLabel, items, partial, complete, keepGoing, cta, note }: ReadinessCheckProps) {
  const [has, setHas] = useState<Record<string, boolean>>({});
  const missing = items.filter((it) => !has[it.key]);
  const n = items.length - missing.length;
  const plan = missing.length ? missing : [{ key: 'keep', step: keepGoing.step, text: keepGoing.text }];

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-fields" role="group" aria-label={groupLabel}>
          {items.map((it) => (
            <button key={it.key} className="cs-fld" type="button" aria-pressed={!!has[it.key]} onClick={() => setHas({ ...has, [it.key]: !has[it.key] })}>
              <i>✓</i>{it.label}
            </button>
          ))}
        </div>
        <div className="cs-nw-field">
          <div className={`cs-nw-verdict ${missing.length ? 'no' : 'ok'}`} aria-live="polite">
            {missing.length ? partial.split('{n}').join(String(n)).split('{m}').join(String(missing.length)) : complete}
          </div>
          <ol className="cs-nw-plan">
            {plan.map((p) => <li key={p.key}><b>{p.step}.</b> {p.text}</li>)}
          </ol>
          {missing.length > 0 && <div><Link href={cta.href} className="btn">{cta.label}</Link></div>}
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
