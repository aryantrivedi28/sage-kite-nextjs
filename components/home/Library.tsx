import Link from 'next/link';

export function Library() {
  return (
    <section id="library" className="library" style={{ padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="wrap reveal">
        <div className="lib-top">
          <div>
            <p className="label">The Sage Kite library</p>
            <h2 style={{ maxWidth: '14em', margin: 0 }}>
              Building became cheap. Distribution did not.
            </h2>
          </div>
          <div>
            <Link href="/insights/founders-thoughts" className="link" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Read the Library</Link>
          </div>
        </div>
        
        <div className="streams">
          <Link href="/insights/founders-thoughts/when-everyone-has-ai" className="stream" style={{ '--c': 'var(--butter)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            How selling changes when building is abundant.
          </Link>
          <Link href="/services/marketing" className="stream" style={{ '--c': 'var(--sky)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            SEO, answer engines and AI citations.
          </Link>
          <Link href="/insights/founders-thoughts/when-everyone-has-ai#judgment" className="stream" style={{ '--c': 'var(--coral)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            Where systems act, and where people should.
          </Link>
          <Link href="/blog/how-to-automate-lead-follow-ups-in-gohighlevel-without-missing-leads" className="stream" style={{ '--c': 'var(--light-sage)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            Why growth breaks between interest and revenue.
          </Link>
          <Link href="/insights/founders-thoughts/when-everyone-has-ai#changes" className="stream" style={{ '--c': 'var(--sage)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            The roles that matter more now.
          </Link>
          <Link href="/case-studies" className="stream" style={{ '--c': 'var(--ink)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            What real work reveals.
          </Link>
        </div>
      </div>
    </section>
  );
}
