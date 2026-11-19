'use client';

import { useState } from 'react';

export interface PricingDemoProps {
  title: string;
  /** `id` goes into the checkout link; `name` fills {currency} in the caption. */
  currencies: { id: string; label: string; name: string }[];
  /** `id` goes into the checkout link and fills {billing} in the caption. */
  billing: { id: string; label: string }[];
  /** `id` goes into the checkout link. `popular` highlights the card. */
  plans: { id: string; name: string; for: string; popular?: boolean }[];
  /** Start of every checkout link, e.g. "plans.example.com/". The link is base + currency-plan-billing. */
  linkBase: string;
  /** Small label above each link, e.g. "Checkout link". */
  linkLabel: string;
  /** `changed` has {currency} and {billing} filled in. */
  captions: { initial: string; changed: string };
  /** Small print under the illustration. */
  note: string;
}

/** Illustration: a pricing page's currency and billing switches, showing which checkout each plan button opens. */
export function PricingDemo({ title, currencies, billing, plans, linkBase, linkLabel, captions, note }: PricingDemoProps) {
  const [cur, setCur] = useState(currencies[0]);
  const [bill, setBill] = useState(billing[0]);
  const [changed, setChanged] = useState(false);

  return (
    <div className="cs-sim">
      <div className="cs-sim-top"><h3>{title}</h3></div>
      <div className="cs-pp-controls">
        <div className="cs-seg" role="group" aria-label="Currency">
          {currencies.map((c) => (
            <button key={c.id} type="button" aria-pressed={cur.id === c.id} onClick={() => { setCur(c); setChanged(true); }}>{c.label}</button>
          ))}
        </div>
        <div className="cs-seg" role="group" aria-label="Billing period">
          {billing.map((b) => (
            <button key={b.id} type="button" aria-pressed={bill.id === b.id} onClick={() => { setBill(b); setChanged(true); }}>{b.label}</button>
          ))}
        </div>
      </div>
      <div className="cs-pp-plans">
        {plans.map((p) => (
          <article key={p.id} className={`cs-pp-plan${p.popular ? ' pop' : ''}`}>
            <h4>{p.name}</h4>
            <p className="cs-pp-for">{p.for}</p>
            <p className="cs-pp-link"><span>{linkLabel}</span><code>{`${linkBase}${cur.id}-${p.id}-${bill.id}`}</code></p>
          </article>
        ))}
      </div>
      <p className="cs-sim-caption" aria-live="polite">
        {changed ? captions.changed.replace('{currency}', cur.name).replace('{billing}', bill.id) : captions.initial}
      </p>
      <p className="note">{note}</p>
    </div>
  );
}
