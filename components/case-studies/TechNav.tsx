'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Reading progress bar for the technical case study layout, plus an optional sticky on-page
 * menu (only when `items` are given; Croma has none, D058). The menu sits just under the site's sticky header (measured, since its height changes
 * with the screen) and highlights the section in view.
 */
const NO_ITEMS: { id: string; label: string }[] = [];

export function TechNav({ items = NO_ITEMS }: { items?: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const [top, setTop] = useState(96);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.site-header');
    const measure = () => {
      const h = header?.offsetHeight ?? 96;
      setTop(h);
      document.documentElement.style.setProperty('--cs-tech-offset', `${h + (items.length ? 56 : 16)}px`);
    };
    measure();
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`;
    };
    onScroll();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-30% 0px -60% 0px' },
    );
    items.forEach((it) => { const el = document.getElementById(it.id); if (el) obs.observe(el); });

    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
      document.documentElement.style.removeProperty('--cs-tech-offset');
    };
  }, [items]);

  return (
    <>
      <div ref={bar} className="cs-tech-progress" aria-hidden="true"></div>
      {items.length > 0 && <nav className="cs-tech-subnav" aria-label="On this page" style={{ top }}>
        <div className="wrap">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className={active === it.id ? 'on' : undefined} aria-current={active === it.id ? 'location' : undefined}>
              {it.label}
            </a>
          ))}
        </div>
      </nav>}
    </>
  );
}
