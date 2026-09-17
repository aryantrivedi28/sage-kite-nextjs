import Link from 'next/link';

export function Library() {
  return (
    <section className="library" style={{ padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="wrap reveal">
        <div className="lib-top">
          <div>
            <p className="label">The Sage Kite library</p>
            <h2 style={{ maxWidth: '14em', margin: 0 }}>
              Building became cheap. Distribution did not.
            </h2>
          </div>
          <div>
            <Link href="#library" className="link" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Read the Library</Link>
          </div>
        </div>
        
        <div className="streams">
          <Link href="#lib-1" className="stream" style={{ '--c': 'var(--butter)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            How selling changes when building is abundant.
          </Link>
          <Link href="#lib-2" className="stream" style={{ '--c': 'var(--sky)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            SEO, answer engines and AI citations.
          </Link>
          <Link href="#lib-3" className="stream" style={{ '--c': 'var(--coral)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            Where systems act, and where people should.
          </Link>
          <Link href="#lib-4" className="stream" style={{ '--c': 'var(--light-sage)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            Why growth breaks between interest and revenue.
          </Link>
          <Link href="#lib-5" className="stream" style={{ '--c': 'var(--sage)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            The roles that matter more now.
          </Link>
          <Link href="#lib-6" className="stream" style={{ '--c': 'var(--ink)', fontWeight: 500, fontSize: '0.95rem' } as React.CSSProperties}>
            What real work reveals.
          </Link>
        </div>
      </div>
    </section>
  );
}
