import React from 'react';

/**
 * Blog listing hero. Server component — no client JS.
 * Mirrors the site's section + .head + .label + .sub typography scale.
 */
export function BlogHeader() {
  return (
    <section className="tint blog-hero">
      <div className="wrap">
        <div className="head">
          <span className="label">Sage Kite Blog</span>
          <h1 className="blog-hero-title">Insights for Smarter Business Growth</h1>
          <p className="sub blog-hero-sub">
            Practical thinking on the systems, people and execution behind growth —
            spanning business growth, CRM, marketing, automation, operations, people,
            strategy and technology. Written from the work we do with growing businesses,
            not from theory.
          </p>
        </div>
      </div>
    </section>
  );
}
