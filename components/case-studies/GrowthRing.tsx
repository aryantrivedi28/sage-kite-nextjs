'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';

/** Circumference of the ring (radius 65). */
const C = 408.4;
const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

export interface GrowthRingProps {
  value: string;
  ariaLabel: string;
  /** Share of a second lap drawn in the second colour, e.g. 20 for +120%. */
  extra: number;
  note: string;
}

/**
 * A growth figure as laps of a ring: one full lap for the starting level, then the extra share in the second
 * colour. Both draw in when the ring scrolls into view.
 */
export function GrowthRing({ value, ariaLabel, extra, note }: GrowthRingProps) {
  const box = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || !('IntersectionObserver' in window)) { setInView(true); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={box} className={`cs-big${inView ? ' in' : ''}`}>
      <svg className="cs-bigring" viewBox="0 0 160 160" role="img" aria-label={ariaLabel} style={cssVars({ '--c': String(C), '--x': String(1 - extra / 100) })}>
        <circle className="bg" cx="80" cy="80" r="65" />
        <circle className="r1" cx="80" cy="80" r="65" />
        <circle className="r2" cx="80" cy="80" r="65" />
        <text x="80" y="92">{value}</text>
      </svg>
      <p className="note">{note}</p>
    </div>
  );
}
