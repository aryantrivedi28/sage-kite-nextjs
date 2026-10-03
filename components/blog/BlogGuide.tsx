'use client';

import React, { useEffect, useId, useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { BookOpen, ChevronDown } from 'lucide-react';
import { BlogGuideItem } from '@/content/blog';

interface BlogGuideProps {
  items: BlogGuideItem[];
}

export function BlogGuide({ items }: BlogGuideProps) {
  const [activeId, setActiveId] = useState<string>('');
  // Only used in the stacked (mobile/tablet) layout, where the guide is a collapsible bar.
  // On desktop the CSS always shows the list.
  const [open, setOpen] = useState(false);
  const listId = useId();
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple are visible, prefer the one closest to the top
          visibleEntries.sort((a, b) => {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-120px 0px -40% 0px',
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  // Keep the active item visible inside the guide's own scrolling list.
  // Not scrollIntoView: that also scrolls the page, and on mobile (guide above
  // the article, not sticky) it yanked the reader back up to the guide.
  useEffect(() => {
    const list = listRef.current;
    const link = activeId ? linkRefs.current[activeId] : null;
    if (!list || !link || list.scrollHeight <= list.clientHeight) return;

    const linkTop = link.offsetTop - list.offsetTop;
    const linkBottom = linkTop + link.offsetHeight;
    if (linkTop < list.scrollTop) {
      list.scrollTo({ top: linkTop, behavior: 'smooth' });
    } else if (linkBottom > list.scrollTop + list.clientHeight) {
      list.scrollTo({ top: linkBottom - list.clientHeight, behavior: 'smooth' });
    }
  }, [activeId]);

  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="In this guide" className="blog-guide">
      <div className="blog-guide-card">
        <h3 className="blog-guide-title">
          <BookOpen size={16} aria-hidden="true" />
          In this guide
        </h3>
        <button
          type="button"
          className="blog-guide-toggle"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((o) => !o)}
        >
          <BookOpen size={16} aria-hidden="true" />
          <span className="blog-guide-toggle-label">In this guide</span>
          <span className="blog-guide-count">{items.length} sections</span>
          <ChevronDown size={18} aria-hidden="true" className="blog-guide-chevron" />
        </button>
        <ul id={listId} className={`blog-guide-list${open ? ' is-open' : ''}`} ref={listRef}>
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="blog-guide-item">
                <a
                  ref={(el) => {
                    linkRefs.current[item.id] = el;
                  }}
                  href={`#${item.id}`}
                  className={`blog-guide-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(item.id);
                    if (target) {
                      // Collapse the stacked guide first so the scroll target is measured
                      // after the content above it has shrunk.
                      if (open) flushSync(() => setOpen(false));
                      const headerOffset = 120;
                      const elementPosition = target.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                      setActiveId(item.id);
                      history.pushState(null, '', `#${item.id}`);
                    }
                  }}
                >
                  {isActive && <span className="blog-guide-active-dot">●</span>}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
