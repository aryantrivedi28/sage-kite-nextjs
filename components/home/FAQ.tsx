'use client';

import { useState } from 'react';
import { HOME_FAQ_GROUPS } from './faqData';

function FAQItem({ question, children }: { question: string, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <h3 onClick={() => setOpen(!open)}>
        {question}
        <span className="toggle-icon">{open ? '−' : '+'}</span>
      </h3>
      <div className="faq-content">
        {children}
      </div>
    </div>
  );
}

export function FAQ() {
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
                <FAQItem key={item.q} question={item.q}>
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
