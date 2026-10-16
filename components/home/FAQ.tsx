'use client';

import { useId, useState, useSyncExternalStore } from 'react';
import { HOME_FAQ_GROUPS } from './faqData';

// Matches the 680px breakpoint in globals.css. Below it the answers collapse;
// above it every answer is always shown, so there is nothing to toggle.
const ACCORDION_QUERY = '(max-width: 680px)';

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(ACCORDION_QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

function useIsAccordion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(ACCORDION_QUERY).matches,
    () => false,
  );
}

function FAQItem({ question, isAccordion, children }: { question: string, isAccordion: boolean, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <h3>
        {isAccordion ? (
          <button
            type="button"
            className="faq-toggle"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={() => setOpen(!open)}
          >
            {question}
            <span className="toggle-icon" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        ) : (
          <>
            {question}
            <span className="toggle-icon" aria-hidden="true">+</span>
          </>
        )}
      </h3>
      <div className="faq-content" id={contentId}>
        {children}
      </div>
    </div>
  );
}

export function FAQ() {
  const isAccordion = useIsAccordion();

  return (
    <section className="brief" style={{ borderTop: '1px solid var(--light-sage)' }}>
      <div className="wrap reveal">
        <h2 style={{ fontFamily: 'var(--sans)', fontSize: '2rem', marginBottom: '48px', color: 'var(--ink)' }}>
          Sage Kite in brief
        </h2>

        {HOME_FAQ_GROUPS.map((group, i) => (
          <div
            key={group.label}
            className="faq-group"
            style={i === HOME_FAQ_GROUPS.length - 1 ? { borderBottom: '1px solid var(--light-sage)' } : undefined}
          >
            <p className="label">{group.label}</p>
            <div className="brief-grid faq-grid">
              {group.items.map((item) => (
                <FAQItem key={item.q} question={item.q} isAccordion={isAccordion}>
                  <p>{item.a}</p>
                </FAQItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
