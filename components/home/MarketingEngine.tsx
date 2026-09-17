import Link from 'next/link';

export function MarketingEngine() {
  return (
    <section style={{ borderTop: '1px solid var(--light-sage)', padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="wrap reveal">
        <p className="label">Marketing as a growth engine</p>
        <h2 style={{ maxWidth: '16em' }}>
          Marketing that lands in a system, not a spreadsheet.
        </h2>
        
        <div className="engine">
          <div className="channels">
            <div className="chip"><span className="dot" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></span> SEO</div>
            <div className="chip"><span className="dot" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></span> AI SEO</div>
            <div className="chip"><span className="dot" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></span> Google, Meta and LinkedIn Ads</div>
            <div className="chip"><span className="dot" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></span> Email marketing</div>
            <div className="chip"><span className="dot" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></span> Social media</div>
          </div>
          
          <div className="connector"></div>
          
          <div className="node" style={{ background: 'var(--pale-sage)' }}>
            <small>Captured in</small>
            <strong>CRM pipeline</strong>
          </div>
          
          <div className="connector"></div>
          
          <div className="node node-rev">
            <small>Measured against</small>
            <strong>Revenue</strong>
          </div>
        </div>
        
        <div className="engine-note" style={{ display: 'flex', gap: '16px' }}>
          <Link href="#seo" className="u" style={{ color: 'inherit', fontWeight: 500 }}>SEO</Link>
          <Link href="#ai-seo" className="u" style={{ color: 'inherit', fontWeight: 500 }}>AI SEO</Link>
          <Link href="#marketing" className="u" style={{ color: 'inherit', fontWeight: 500 }}>All marketing services</Link>
        </div>
      </div>
    </section>
  );
}
