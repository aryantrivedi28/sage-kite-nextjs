export function GrowthOperations() {
  return (
    <section className="tint">
      <div className="wrap reveal">
        <div className="ops-grid">
          <div>
            <p className="label">Growth operations</p>
            <h2 style={{ maxWidth: '12em' }}>The path from first enquiry to revenue.</h2>
          </div>
          <div className="definition">
            <strong>Growth operations</strong> are the processes and systems that capture demand, convert it into customers and keep them. Sage Kite makes each stage visible, connected and owned.
          </div>
        </div>

        <div className="ops">
          <div className="stages">
            {[
              { num: '01', title: 'Capture', desc: 'Enquiries arrive', isRev: false },
              { num: '02', title: 'Qualify', desc: 'Right fit, right owner', isRev: false },
              { num: '03', title: 'Follow up', desc: 'On time, every time', isRev: false },
              { num: '04', title: 'Convert', desc: 'Opportunity to sale', isRev: false },
              { num: '05', title: 'Retain', desc: 'Repeat and referrals', isRev: false },
              { num: '06', title: 'Revenue', desc: 'Measured and reported', isRev: true }
            ].map((step, i) => (
              <div key={i} className={`stage ${step.isRev ? 'rev' : ''}`}>
                <div className="n">{step.num}</div>
                <strong>{step.title}</strong>
                <span>{step.desc}</span>
              </div>
            ))}
          </div>
          
          <div className="support">
            <div className="support-label">Systems supporting each stage</div>
            
            <div className="sys-bar" style={{ gridColumn: '1 / span 2', '--bg': 'var(--coral-soft)' } as React.CSSProperties}>
              <span className="dot" style={{'--c': 'var(--coral)'} as React.CSSProperties}></span> Marketing
              <small>Demand</small>
            </div>
            
            <div className="sys-bar" style={{ gridColumn: '2 / span 3', '--bg': 'var(--sky-soft)' } as React.CSSProperties}>
              <span className="dot" style={{'--c': 'var(--sky)'} as React.CSSProperties}></span> AI and automation
              <small>Speed</small>
            </div>
            
            <div className="sys-bar" style={{ gridColumn: '5 / span 2', '--bg': 'var(--butter-soft)' } as React.CSSProperties}>
              <span className="dot" style={{'--c': 'var(--butter)'} as React.CSSProperties}></span> Reporting
              <small>Clarity</small>
            </div>
            
            <div className="sys-bar" style={{ gridColumn: '1 / -1', '--bg': 'var(--light-sage)' } as React.CSSProperties}>
              <span className="dot" style={{'--c': 'var(--sage)'} as React.CSSProperties}></span> CRM
              <small>One record across every stage</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
