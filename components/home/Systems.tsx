export function Systems() {
  return (
    <section style={{ background: 'var(--dark-sage)', color: 'var(--warm-white)', padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="wrap reveal">
        <div style={{ textAlign: 'center' }}>
          <p className="label" style={{ color: 'var(--butter)' }}>Systems that scale</p>
          <h2 style={{ color: 'var(--warm-white)', margin: '0 auto 24px', maxWidth: '16em' }}>
            Turn the moving parts into one operating system.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: '48ch', color: 'var(--pale-sage)', fontSize: '1.1rem' }}>
            Growth stalls when every opportunity depends on manual work and individual effort. A connected system carries that load.
          </p>
        </div>
        
        {/* Org Chart Diagram using native .arch classes */}
        <div className="arch">
          <div className="node node-rev">
            <small>Outcome</small>
            <strong>Revenue</strong>
          </div>
          
          <div className="vline"></div>
          
          <div className="node node-ops">
            <small>Engine</small>
            <strong>Growth operations</strong>
          </div>
          
          <div className="systems">
            <div className="sys" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
              <h3>CRM</h3>
              <p>Customer record, pipeline and ownership</p>
            </div>
            <div className="sys" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
              <h3>Marketing</h3>
              <p>Search, paid media, email and social</p>
            </div>
            <div className="sys" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
              <h3>Automation</h3>
              <p>Workflows that move work forward</p>
            </div>
            <div className="sys" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
              <h3>AI</h3>
              <p>Less repetitive work, applied carefully</p>
            </div>
          </div>
          
          <div className="node node-exec">
            <small>Foundation</small>
            <strong>Execution</strong>
            <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'var(--pale-sage)' }}>Consultancy, implementation and specialist support</p>
          </div>
        </div>
        
        {/* Three pillars below using native .traits classes */}
        <div className="traits">
          <div>
            <strong>Connected</strong>
            <p>Every tool shares one customer record.</p>
          </div>
          <div>
            <strong>Measurable</strong>
            <p>Spend, pipeline and revenue in one view.</p>
          </div>
          <div>
            <strong>Scalable</strong>
            <p>More leads without more manual work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
