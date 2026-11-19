'use client';

import { useState } from 'react';

export interface CanonicalRulesProps {
  intro: string;
  groupLabel: string;
  /** One toggle per rule; `key` matches a variant's key. */
  rules: { key: string; label: string }[];
  stats: { addresses: string; versions: string };
  products: string[];
  /** The preferred page first (`key: 'main'`), then one chip per duplicate address. */
  variants: { key: string; label: string }[];
  /** `{n}` the number of versions: singular and plural. */
  seen: { one: string; many: string };
  captions: { all: string; some: string; done: string };
  note: string;
}

/** Rules that merge each product's duplicate addresses into its preferred page; the count of versions search engines see falls as rules go on. */
export function CanonicalRules({ intro, groupLabel, rules, stats, products, variants, seen, captions, note }: CanonicalRulesProps) {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const perProduct = 1 + variants.filter((v) => v.key !== 'main' && !on[v.key]).length;
  const addresses = products.length * variants.length;
  const total = products.length * perProduct;

  return (
    <div className="cs-sim">
      <p className="cs-nw-cap">{intro}</p>
      <div className="cs-fields cs-ib-rules" role="group" aria-label={groupLabel}>
        {rules.map((r) => (
          <button key={r.key} className="cs-fld" type="button" aria-pressed={!!on[r.key]} onClick={() => setOn((o) => ({ ...o, [r.key]: !o[r.key] }))}>
            <i>✓</i>{r.label}
          </button>
        ))}
      </div>
      <ul className="cs-stats">
        <li>{stats.addresses} <b>{addresses}</b></li>
        <li>{stats.versions} <b>{total}</b></li>
      </ul>
      <div className="cs-ib-prods">
        {products.map((p) => (
          <div key={p} className="cs-ib-prod">
            <h3>{p}</h3>
            <div className="cs-ib-vch">
              {variants.map((v) => (
                <span key={v.key} className={`cs-ib-vc${v.key === 'main' ? ' main' : on[v.key] ? ' mg' : ''}`}>{v.label}</span>
              ))}
            </div>
            <span className="note">{(perProduct > 1 ? seen.many : seen.one).split('{n}').join(String(perProduct))}</span>
          </div>
        ))}
      </div>
      <p className="cs-nw-cap cs-ib-min" aria-live="polite">{total === addresses ? captions.all : total > products.length ? captions.some : captions.done}</p>
      <p className="note">{note}</p>
    </div>
  );
}
