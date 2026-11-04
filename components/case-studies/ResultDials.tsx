'use client';

import { useEffect, useRef, useState } from 'react';

/** One third of the dial's arc (a half circle of radius 80). */
const ZONE = 83.77;

export interface ResultDialsProps {
  dials: { title: string; value: string; ariaLabel: string }[];
  note: string;
}

/**
 * One dial per result, with three zones. The needles swing from the first zone to the last when the
 * dials scroll into view. They show the direction of change only, never a figure.
 */
export function ResultDials({ dials, note }: ResultDialsProps) {
  const box = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || !('IntersectionObserver' in window)) { setInView(true); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="cs-dials-wrap" ref={box}>
      <div className={`cs-dials${inView ? ' in' : ''}`}>
        {dials.map((d) => (
          <div key={d.title} className="cs-dial">
            <svg viewBox="0 0 200 120" role="img" aria-label={d.ariaLabel}>
              {['z1', 'z2', 'z3'].map((z, i) => (
                <path key={z} className={`z ${z}`} strokeDasharray={`${ZONE} 251.3`} strokeDashoffset={-ZONE * i} d="M 20 100 A 80 80 0 0 1 180 100" />
              ))}
              <line className="cs-needle" x1="100" y1="100" x2="100" y2="38" />
              <circle className="hub" cx="100" cy="100" r="7" />
            </svg>
            <h3>{d.title}</h3>
            <p>{d.value}</p>
          </div>
        ))}
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
