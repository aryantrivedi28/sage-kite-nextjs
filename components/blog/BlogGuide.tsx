'use client';

import React, { useEffect, useState } from 'react';
import { BlogGuideItem } from '@/content/blog';

interface BlogGuideProps {
  items: BlogGuideItem[];
}

export function BlogGuide({ items }: BlogGuideProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple are visible, pick the one closest to the top of the viewport
          // However, typical behavior is just to pick the first one.
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

  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="In this guide" className="blog-guide">
      <div className="blog-guide-card">
        <h3 className="blog-guide-title">
          <span role="img" aria-label="book" style={{ marginRight: '8px' }}>📖</span> 
          IN THIS GUIDE
        </h3>
        <ul className="blog-guide-list">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="blog-guide-item">
                <a
                  href={`#${item.id}`}
                  className={`blog-guide-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(item.id);
                    if (target) {
                      // Adjust scroll for sticky header
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
