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
          <h1 className="blog-hero-title">Insights on CRM, marketing and business growth</h1>
          <p className="sub blog-hero-sub">
            Practical guides and perspectives on CRM, marketing, automation, operations,
            people and the systems behind business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
