'use client';

import { useEffect, useRef } from 'react';

/**
 * Reading progress bar for Founder's Thoughts essays. Also highlights the
 * contents link (any element with data-section="<section id>") for the section
 * currently in view.
 */
export function ReadingProgress() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    const sections = links
      .map((a) => document.getElementById(a.dataset.section ?? ''))
      .filter((s): s is HTMLElement => s !== null);
    let scheduled = false;

    const update = () => {
      const full = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) {
        bar.current.style.width = `${full > 0 ? Math.min(100, Math.max(0, (window.scrollY / full) * 100)) : 0}%`;
      }
      let current = sections[0]?.id;
      for (const s of sections) {
        if (s.getBoundingClientRect().top < 200) current = s.id;
      }
      for (const a of links) {
        const active = a.dataset.section === current;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      }
      scheduled = false;
    };
    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <span ref={bar}></span>
    </div>
  );
}
