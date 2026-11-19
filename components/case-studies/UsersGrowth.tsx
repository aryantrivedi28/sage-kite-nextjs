'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;
const fmt = (v: number) => (v >= 1e6 ? `${(v / 1e6).toFixed(1)}M` : `${Math.round(v / 1e3)}K`);

export interface UsersGrowthProps {
  /** Leave both out to show `toLabel` without counting (Industrybuying's "+40%"). */
  from?: number;
  to?: number;
  /** Text shown at the start and at the end of the count, e.g. "200K" and "4M". */
  fromLabel?: string;
  toLabel: string;
  /** One or more bar groups, each with its title (e.g. "Monthly users") and before/after bars. */
  groups: { title: string; ariaLabel: string; bars: { label: string; value: string; width: number; after?: boolean }[] }[];
  channels?: { small: string; title: string }[];
  note: string;
}

/**
 * The results card: a figure that counts up from the starting users to the final users when it scrolls into view,
 * before/after bars that grow in (one group or more), and optional channels. With reduced motion it shows the final figure at once.
 */
export function UsersGrowth({ from, to, fromLabel, toLabel, groups, channels, note }: UsersGrowthProps) {
  const box = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const counts = from !== undefined && to !== undefined;
  const [shown, setShown] = useState(counts ? fromLabel ?? toLabel : toLabel);

  useEffect(() => {
    const el = box.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce || !('IntersectionObserver' in window)) { setInView(true); setShown(toLabel); return; }
    let raf = 0;
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      setInView(true);
      if (from === undefined || to === undefined) return;
      let start: number | null = null;
      const step = (t: number) => {
        if (start === null) start = t;
        const p = Math.min(1, (t - start) / 1800);
        setShown(p < 1 ? fmt(from + (to - from) * (1 - Math.pow(1 - p, 3))) : toLabel);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [from, to, toLabel]);

  return (
    <div ref={box} className={`cs-nw-users${inView ? ' in' : ''}`}>
      <p className="cs-nw-bignum">{shown}</p>
      {groups.map((g) => (
        <div key={g.title} className="cs-nw-group">
          <p className="cs-nw-bars-title">{g.title}</p>
          <div className="cs-bars" role="img" aria-label={g.ariaLabel}>
            {g.bars.map((b) => (
              <div key={b.label} className="cs-bar">
                <div className="cs-bar-label"><span>{b.label}</span><span>{b.value}</span></div>
                <div className="cs-bar-track"><div className={`cs-nw-fill${b.after ? ' after' : ''}`} style={cssVars({ '--w': `${b.width}%` })}></div></div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {channels && (
        <div className="cs-nw-chn">
          {channels.map((c) => <div key={c.title}><span>{c.small}</span><b>{c.title}</b></div>)}
        </div>
      )}
      <p className="note">{note}</p>
    </div>
  );
}
