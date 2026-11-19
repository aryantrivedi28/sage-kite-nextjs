'use client';

import { useState } from 'react';

export interface SmartCollection {
  /** Collection name, e.g. "Camps". */
  name: string;
  /** The rule shown under the name, e.g. "Rule: product type is Camp". */
  rule: string;
  /** Button label, e.g. "Add a camp". */
  add: string;
  /** Singular noun for a new product, e.g. "camp". Fills {noun} in the templates. */
  noun: string;
}

export interface SmartCollectionsProps {
  title: string;
  /** Three columns read best. */
  collections: SmartCollection[];
  /** Label of each added product. {noun} and {n} are filled in, e.g. "[New {noun} {n}]". */
  newItem: string;
  captions: { initial: string; /** {noun} is filled in. */ added: string };
  /** Small print under the illustration. */
  note: string;
}

const MAX_ITEMS = 6;

/** Illustration: add a product and it lands in the collection whose rule it matches. */
export function SmartCollections({ title, collections, newItem, captions, note }: SmartCollectionsProps) {
  const [items, setItems] = useState<{ label: string; added: boolean }[][]>(() =>
    collections.map(() => [{ label: '[Product]', added: false }, { label: '[Product]', added: false }]),
  );
  const [counts, setCounts] = useState<number[]>(() => collections.map(() => 0));
  const [caption, setCaption] = useState(captions.initial);

  function add(i: number) {
    const c = collections[i];
    const n = counts[i] + 1;
    setCounts(counts.map((v, k) => (k === i ? n : v)));
    setItems(items.map((list, k) =>
      k === i ? [...list, { label: newItem.replace('{noun}', c.noun).replace('{n}', String(n)), added: true }].slice(-MAX_ITEMS) : list,
    ));
    setCaption(captions.added.replace('{noun}', c.noun));
  }

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg add" role="group" aria-label="Add a product">
          {collections.map((c, i) => (
            <button key={c.name} type="button" onClick={() => add(i)}>{c.add}</button>
          ))}
        </div>
      </div>
      <div className="cs-sc">
        {collections.map((c, i) => (
          <div key={c.name} className="cs-sc-col">
            <h4>{c.name}</h4>
            <p className="cs-sc-rule">{c.rule}</p>
            <ul>
              {items[i].map((it, k) => (
                <li key={`${it.label}-${k}`} className={it.added ? 'new' : undefined}>{it.label}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="cs-sim-caption" aria-live="polite">{caption}</p>
      <p className="note">{note}</p>
    </div>
  );
}
