'use client';

import { useId, useState } from 'react';

const num = (n: number) => n.toLocaleString('en-IN');

interface Slider { label: string; min: number; max: number; step: number; value: number }

export interface CrawlWasteProps {
  products: Slider;
  outOfStock: Slider;
  looping: Slider;
  /** `{n}` a count; `{p}` a percentage. */
  outputs: { products: string; share: string };
  boxes: { loops: string; wasted: string; rules: string };
  /** `{w}` wasted visits, `{n}` pages in loops. */
  captions: { some: string; none: string };
  /** Visits one looping page uses up before the crawler gives up. */
  visitsPerLoop: number;
  note: string;
}

const fill = (s: string, v: Record<string, string>) => Object.entries(v).reduce((t, [k, x]) => t.split(`{${k}}`).join(x), s);

/** Three sliders (catalog size, share out of stock, share of those looping) and the crawl visits the loops could waste. */
export function CrawlWaste({ products, outOfStock, looping, outputs, boxes, captions, visitsPerLoop, note }: CrawlWasteProps) {
  const id = useId();
  const [n, setN] = useState(products.value);
  const [o, setO] = useState(outOfStock.value);
  const [l, setL] = useState(looping.value);
  const oos = Math.round((n * o) / 100);
  const loops = Math.round((oos * l) / 100);
  const w = loops * visitsPerLoop;

  const row = (key: string, s: Slider, v: number, set: (x: number) => void, out: string) => (
    <>
      <label htmlFor={`${id}${key}`}><span>{s.label}</span><b>{out}</b></label>
      <input className="cs-nw-rng" id={`${id}${key}`} type="range" min={s.min} max={s.max} step={s.step} value={v} onChange={(e) => set(+e.target.value)} />
    </>
  );

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-ib-cin">
          {row('n', products, n, setN, fill(outputs.products, { n: num(n) }))}
          {row('o', outOfStock, o, setO, fill(outputs.share, { p: String(o), n: num(oos) }))}
          {row('l', looping, l, setL, fill(outputs.share, { p: String(l), n: num(loops) }))}
        </div>
        <div className="cs-ib-big3">
          <div className="a"><span>{boxes.loops}</span><div className="n">{num(loops)}</div></div>
          <div className="b"><span>{boxes.wasted}</span><div className="n">{num(w)}</div></div>
          <div className="c"><span>{boxes.rules}</span><div className="n">1</div></div>
        </div>
      </div>
      <p className="cs-nw-cap cs-ib-min" aria-live="polite">{loops ? fill(captions.some, { w: num(w), n: num(loops) }) : captions.none}</p>
      <p className="note">{note}</p>
    </div>
  );
}
