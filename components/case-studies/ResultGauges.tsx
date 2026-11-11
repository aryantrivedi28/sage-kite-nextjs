'use client';

import { useEffect, useRef, useState } from 'react';
import { HalfGauge, gaugeTone } from './HalfGauge';

export interface ResultGaugesProps {
  /** `value` only sets how far the needle swings (direction of change); it is never shown as a figure. */
  gauges: { title: string; value: number }[];
  note: string;
}

/** Three gauges whose needles swing up, one after another, when they scroll into view. */
export function ResultGauges({ gauges, note }: ResultGaugesProps) {
  const box = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = box.current;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const start = () => gauges.forEach((_, i) => timers.push(setTimeout(() => setShown((n) => Math.max(n, i + 1)), 100 + i * 200)));
    if (!el || !('IntersectionObserver' in window)) { start(); return () => timers.forEach(clearTimeout); }
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { start(); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, [gauges]);

  return (
    <div className="cs-sim cs-ms-results" ref={box}>
      <div className="cs-ms-g3">
        {gauges.map((g, i) => {
          const v = i < shown ? g.value : 0;
          return (
            <div key={g.title}>
              <HalfGauge value={v} color={gaugeTone(v, 35, 75)} />
              <h3>{g.title}</h3>
            </div>
          );
        })}
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
