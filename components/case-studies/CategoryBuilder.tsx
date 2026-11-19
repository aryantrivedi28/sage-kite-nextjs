'use client';

import type React from 'react';
import { useState } from 'react';

type Key = 'content' | 'links' | 'url' | 'schema';

export interface CategoryBuilderProps {
  title: string;
  groupLabel: string;
  /** One toggle per layer, in order; the caption and code show for the layer last switched. */
  layers: { key: Key; label: string; caption: string; codeLabel: string; code: React.ReactNode }[];
  wire: {
    url: { before: string; after: string };
    badge: { before: string; after: string };
    contentTag: string;
    linksTag: string;
    links: string[];
    /** Shown on each product card once review schema is on. */
    stars: string;
    cards: number;
  };
  /** Read as "<applied> 2 / 4". */
  applied: string;
  idle: { caption: string; codeLabel: string; code: React.ReactNode };
  note: string;
}

/** A category page wireframe built up layer by layer (content, internal links, clean URL, review schema), with the code for the layer last switched. */
export function CategoryBuilder({ title, groupLabel, layers, wire, applied, idle, note }: CategoryBuilderProps) {
  const [on, setOn] = useState<Record<Key, boolean>>({ content: false, links: false, url: false, schema: false });
  const [last, setLast] = useState<Key | null>(null);
  const cur = layers.find((l) => l.key === last);
  const flip = (k: Key) => {
    setOn((o) => ({ ...o, [k]: !o[k] }));
    setLast(k);
  };

  return (
    <div className="cs-sim">
      <div className="cs-sim-top"><h3>{title}</h3></div>
      <div className="cs-nw-layers row" role="group" aria-label={groupLabel}>
        {layers.map((l) => <button key={l.key} type="button" aria-pressed={on[l.key]} onClick={() => flip(l.key)}>{l.label}</button>)}
      </div>
      <div className="cs-code-split">
        <div className={`cs-jn-wire${on.url ? ' clean' : ''}`}>
          <div className="bar"><span className="url">{on.url ? wire.url.after : wire.url.before}</span><span className="badge">{on.url ? wire.badge.after : wire.badge.before}</span></div>
          <div className="body">
            <div className="h1"></div>
            {on.content && <div className="content"><span className="tg">{wire.contentTag}</span><i></i><i></i><i></i></div>}
            {on.links && (
              <div className="lk"><span className="tg">{wire.linksTag}</span><div className="links">{wire.links.map((l, i) => <span key={i}>{l}</span>)}</div></div>
            )}
            <div className="grid">
              {Array.from({ length: wire.cards }, (_, i) => (
                <div key={i} className="card"><div className="img"></div><div className="line"></div><div className="line s"></div>{on.schema && <span className="stars">{wire.stars}</span>}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="cs-jn-side">
          <ul className="cs-stats"><li>{applied} <b>{Object.values(on).filter(Boolean).length}</b> / {layers.length}</li></ul>
          <p className="cs-nw-cap cs-ib-min" aria-live="polite">{cur ? cur.caption : idle.caption}</p>
          <div className="cs-code"><p className="cs-code-lab">{cur ? cur.codeLabel : idle.codeLabel}</p><pre>{cur ? cur.code : idle.code}</pre></div>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
