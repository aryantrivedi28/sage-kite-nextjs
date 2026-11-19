'use client';

import { useState } from 'react';

type FixId = 'content' | 'links' | 'url' | 'review';
const FIX_IDS: FixId[] = ['content', 'links', 'url', 'review'];
const TONES: Record<FixId, string> = { content: 'coral', links: 'butter', url: 'sky', review: 'sage' };

export interface CategoryFix {
  title: string;
  text: string;
  /** Announced when the fix is switched on. */
  message: string;
}

export interface CategoryFixesProps {
  /** Heading of the illustrated category page, e.g. "Mountain bikes". */
  pageTitle: string;
  /** The duplicate (e.g. uppercase) and the kept version of the category URL. */
  urls: { duplicate: string; kept: string };
  /** Domain shown in the search preview, e.g. "example.com". */
  domain: string;
  fixes: Record<FixId, CategoryFix>;
  messages: { initial: string; all: string; removed: string };
  /** Small print under the illustration. */
  note: string;
}

const Stars = () => <span className="cs-stars-row">★★★★★</span>;

/**
 * Four fixes to one category page, each switched on with its own button: the
 * illustrated page and its search preview change to match. Content, internal
 * links, one clean URL, and review markup (shown on product results, since
 * Google only shows review snippets for a specific item, not a category).
 */
export function CategoryFixes({ pageTitle, urls, domain, fixes, messages, note }: CategoryFixesProps) {
  const [on, setOn] = useState<Record<FixId, boolean>>({ content: false, links: false, url: false, review: false });
  const [status, setStatus] = useState(messages.initial);

  const toggle = (id: FixId) => {
    const next = !on[id];
    setOn({ ...on, [id]: next });
    setStatus(next ? fixes[id].message : messages.removed);
  };
  const setAll = (value: boolean) => {
    setOn({ content: value, links: value, url: value, review: value });
    setStatus(value ? messages.all : messages.initial);
  };

  const cls = FIX_IDS.filter((id) => on[id]).map((id) => ` on-${id}`).join('');

  return (
    <div className="cs-build">
      <div className="cs-fixes">
        {FIX_IDS.map((id) => (
          <article key={id} className={`cs-tile ${TONES[id]}`}>
            <h3>{fixes[id].title}</h3>
            <p>{fixes[id].text}</p>
            <button className="cs-ghost cs-fix-btn" type="button" aria-pressed={on[id]} onClick={() => toggle(id)}>
              {on[id] ? 'Hide this fix' : 'Show this fix'}
            </button>
          </article>
        ))}
        <div className="cs-fix-actions">
          <button className="btn btn-s" type="button" onClick={() => setAll(true)}>Show all four</button>
          <button className="cs-ghost" type="button" onClick={() => setAll(false)}>Reset</button>
        </div>
      </div>

      <figure className="cs-mockwrap">
        <div className={`cs-mock${cls}`} aria-hidden="true">
          <div className="cs-mock-bar">
            {on.url ? (
              <span className="cs-url one">{urls.kept} <em>one version</em></span>
            ) : (
              <>
                <span className="cs-url">{urls.duplicate}</span>
                <span className="cs-url dup">{urls.kept} <em>duplicate</em></span>
              </>
            )}
          </div>
          <div className="cs-mock-body">
            <div className="cs-mock-title">{pageTitle}</div>
            <div className="cs-layer links">
              <div className="cs-chips-row"><span>[Related category]</span><span>[Related category]</span><span>[Related category]</span></div>
            </div>
            <div className="cs-mock-grid">
              {[0, 1, 2].map((i) => (
                <div key={i} className="cs-pc"><div className="cs-pc-img"></div><i></i><i className="s"></i><div className="cs-pc-stars"><Stars /></div></div>
              ))}
            </div>
            <div className="cs-layer content">
              <div className="cs-content-block"><b>Helpful category content</b><i></i><i></i><i className="s"></i></div>
            </div>
          </div>
          <div className="cs-mock-serp">
            <small>How results can look in search</small>
            <div className="cs-serp-title">{pageTitle}</div>
            <div className="cs-serp-url">{domain} › {urls.kept.replace(/^\//, '')}</div>
            <div className="cs-layer review">
              <div className="cs-serp-product">
                <div className="cs-serp-title">[Product name]</div>
                <div className="cs-serp-url">{domain} › [product]</div>
                <div className="cs-serp-stars"><Stars /> Rating from review markup on the product page</div>
              </div>
            </div>
          </div>
        </div>
        <figcaption aria-live="polite">{status}</figcaption>
        <p className="note">{note}</p>
      </figure>
    </div>
  );
}
