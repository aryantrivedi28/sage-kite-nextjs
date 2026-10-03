'use client';

import React, { useEffect, useState, useRef } from 'react';
import { BlogGuideItem } from '@/content/blog';

interface BlogGuideProps {
  items: BlogGuideItem[];
}

export function BlogGuide({ items }: BlogGuideProps) {
  const [activeId, setActiveId] = useState<string>('');
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
          <span role="img" aria-label="book" style={{ marginRight: '8px' }}>📖</span> 
          IN THIS GUIDE
        </h3>
        <ul className="blog-guide-list" ref={listRef}>
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
