export function Problem() {
  return (
    <section style={{ borderTop: '1px solid var(--light-sage)', padding: 'clamp(56px,7vw,96px) 0' }}>
      <div className="wrap reveal">
        <p className="label">The commercial problem</p>
        <h2 style={{ maxWidth: '14em' }}>
          Growth gets harder when every part runs on its own.
        </h2>
        
        <div className="fragments">
          <div className="frag">
            <div className="frag-k">Leads</div>
            <h3>No owner</h3>
            <p>Enquiries arrive and wait.</p>
          </div>
          
          <div className="frag">
            <div className="frag-k">Tools</div>
            <h3>Half set up</h3>
            <p>Software bought, barely used.</p>
          </div>
          
          <div className="frag">
            <div className="frag-k">Processes</div>
            <h3>Manual</h3>
            <p>Follow-up depends on memory.</p>
          </div>
          
          <div className="frag">
            <div className="frag-k">Revenue</div>
            <h3>Unclear</h3>
            <p>No line from spend to sales.</p>
          </div>
        </div>
        
        <p className="frag-note label" style={{ fontSize: '0.8125rem', color: 'var(--sage)', fontWeight: 'normal' }}>
          The dashed joins mark where leads, data and effort leak between disconnected parts.
        </p>
      </div>
    </section>
  );
}
