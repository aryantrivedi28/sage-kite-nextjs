'use client';

import { useRef, useState } from 'react';

export interface NapListingsProps {
  /** The correct name, address and phone (the Business Profile's). */
  canonical: string[];
  /** Each listing and its three details; `ok` when the detail already matches. */
  sources: { name: string; cells: { text: string; ok: boolean }[] }[];
  label: string;
  buttons: { fixAll: string; reset: string };
  captions: { idle: string; matches: string; done: string; /** `{n}` corrected, `{total}` mismatches. */ progress: string };
  note: string;
}

/** Listings side by side: tap each detail that doesn't match the profile to correct it, and watch the consistency meter. */
export function NapListings({ canonical, sources, label, buttons, captions, note }: NapListingsProps) {
  const [fixed, setFixed] = useState<string[]>([]);
  const [shake, setShake] = useState<string | null>(null);
  const [msg, setMsg] = useState(captions.idle);
  const fixedRef = useRef<string[]>([]);
  const cells = sources.flatMap((s) => s.cells);
  const bad = sources.flatMap((s, r) => s.cells.flatMap((c, j) => (c.ok ? [] : [`${r}-${j}`])));
  const pct = Math.round(((cells.length - (bad.length - fixed.length)) / cells.length) * 100);
  const color = pct < 70 ? 'var(--coral)' : pct < 100 ? 'var(--butter)' : 'var(--sky)';

  const apply = (next: string[]) => {
    fixedRef.current = next;
    setFixed(next);
    if (next.length) setMsg(next.length === bad.length ? captions.done : captions.progress.split('{n}').join(String(next.length)).split('{total}').join(String(bad.length)));
  };
  const tap = (key: string, ok: boolean) => {
    if (fixedRef.current.includes(key)) return;
    if (ok) {
      setShake(key);
      setTimeout(() => setShake((s) => (s === key ? null : s)), 400);
      setMsg(captions.matches);
      return;
    }
    apply([...fixedRef.current, key]);
  };

  return (
    <div className="cs-sim">
      <div className="cs-ms-nap">
        {sources.map((s, r) => (
          <div key={s.name} className="cs-ms-nrow">
            <b>{s.name}</b>
            {s.cells.map((c, j) => {
              const key = `${r}-${j}`;
              const isFixed = fixed.includes(key);
              return (
                <button key={key} type="button" className={`${isFixed ? 'fx' : ''}${shake === key ? ' sh' : ''}`} onClick={() => tap(key, c.ok)}>
                  {isFixed || c.ok ? canonical[j] : c.text}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className="cs-ms-meterw">
        <div className="cs-ms-meterlab"><span>{label}</span><span>{pct}%</span></div>
        <div className="cs-ms-meter"><i style={{ width: `${pct}%`, background: color }}></i></div>
      </div>
      <div className="cs-nw-ctl">
        <button className="cs-ghost" type="button" onClick={() => apply(bad)}>{buttons.fixAll}</button>
        <button className="cs-ghost" type="button" onClick={() => { fixedRef.current = []; setFixed([]); setMsg(captions.idle); }}>{buttons.reset}</button>
      </div>
      <p className="cs-nw-cap" aria-live="polite">{msg}</p>
      <p className="note">{note}</p>
    </div>
  );
}
