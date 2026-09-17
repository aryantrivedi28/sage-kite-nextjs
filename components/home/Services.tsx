import Link from 'next/link';

export function Services() {
  return (
    <section style={{ padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="wrap reveal">
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
        <p className="label">What Sage Kite does</p>
        <h2 style={{ maxWidth: '18em' }}>Business growth consulting, from strategy to delivery.</h2>
      </div>
      
      <div className="svc-grid">
        {/* Consultancy */}
        <Link href="#consulting" className="svc" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
          <div className="svc-k">Direction</div>
          <h3>Consultancy</h3>
          <div className="tags">
            <span className="tag">GTM</span>
            <span className="tag">AI</span>
            <span className="tag">Fractional CMO</span>
          </div>
          <span className="more" style={{ textDecorationColor: 'var(--c)' }}>Growth consulting</span>
        </Link>

        {/* CRM */}
        <Link href="#crm" className="svc" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
          <div className="svc-k">Systems</div>
          <h3>CRM Implementation</h3>
          <div className="tags">
            <span className="tag">Setup</span>
            <span className="tag">Pipelines</span>
            <span className="tag">Migration</span>
            <span className="tag">Automation</span>
            <span className="tag">Training</span>
          </div>
          <span className="more" style={{ textDecorationColor: 'var(--c)' }}>CRM implementation services</span>
        </Link>

        {/* Marketing */}
        <Link href="#marketing" className="svc" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
          <div className="svc-k">Demand</div>
          <h3>Marketing</h3>
          <div className="tags">
            <span className="tag">SEO</span>
            <span className="tag">AI SEO</span>
            <span className="tag">Paid media</span>
            <span className="tag">Email</span>
            <span className="tag">Social</span>
          </div>
          <span className="more" style={{ textDecorationColor: 'var(--c)' }}>Marketing services</span>
        </Link>

        {/* Specialist Staffing */}
        <Link href="#staffing" className="svc" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
          <div className="svc-k">Capability</div>
          <h3>Specialist Staffing</h3>
          <div className="tags">
            <span className="tag">CRM and automation</span>
            <span className="tag">Marketing ops</span>
            <span className="tag">Lead generation</span>
          </div>
          <span className="more" style={{ textDecorationColor: 'var(--c)' }}>Recruitment and staffing</span>
        </Link>

        {/* White-label */}
        <Link href="#whitelabel" className="svc" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
          <div className="svc-k">For agencies</div>
          <h3>White-label delivery</h3>
          <div className="tags">
            <span className="tag">Fulfilment under your brand</span>
          </div>
          <span className="more" style={{ textDecorationColor: 'var(--c)' }}>White-label delivery</span>
        </Link>
      </div>
      </div>
    </section>
  );
}
