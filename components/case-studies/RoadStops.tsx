'use client';

import { useEffect, useRef, useState } from 'react';
import { Car } from './Car';

export interface RoadStopsProps {
  stops: { small: string; title: string; text: string }[];
}

/**
 * The steps of the work as stops along a road. As the page scrolls, the car drives down the road and each
 * stop lights up once the car reaches it. With reduced motion the car waits at the end and every stop is lit.
 */
export function RoadStops({ stops }: RoadStopsProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const car = useRef<SVGSVGElement>(null);
  const stopEls = useRef<(HTMLDivElement | null)[]>([]);
  const [arrived, setArrived] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = wrap.current;
      if (!el || !car.current) return;
      const r = el.getBoundingClientRect();
      const h = r.height;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        car.current.style.top = `${h - 26}px`;
        setArrived(stops.length);
        return;
      }
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.55 - r.top) / h));
      const y = p * (h - 24);
      car.current.style.top = `${y + 1}px`;
      setArrived(stopEls.current.filter((s) => s && y >= s.offsetTop + 10).length);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [stops.length]);

  return (
    <div className="cs-road" ref={wrap}>
      <div className="cs-road-line"></div>
      <Car className="cs-road-car" svgRef={car} />
      {stops.map((s, i) => (
        <div key={s.title} ref={(el) => { stopEls.current[i] = el; }} className={`cs-stop${i < arrived ? ' arrived' : ''}`}>
          <small>{s.small}</small><b>{s.title}</b><span>{s.text}</span>
        </div>
      ))}
    </div>
  );
}
