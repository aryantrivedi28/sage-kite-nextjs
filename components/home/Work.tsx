import Link from 'next/link';

export function Work() {
  return (
    <section className="work">
      <div className="wrap reveal">
        <div className="work-grid">
          
          <div>
            <p className="label">Selected work</p>
            <h2 style={{ marginBottom: '16px' }}>Evidence, with its context.</h2>
            <p style={{ color: 'var(--dark-sage)', fontSize: '0.9rem', maxWidth: '36ch' }}>
              Every example states its origin and the basis for any result.
            </p>
          </div>

          <ul className="work-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <Link href="#work-1" style={{ display: 'contents', textDecoration: 'none', color: 'inherit' }}>
                <div className="tag" style={{ '--bg': 'var(--sky-soft)' } as React.CSSProperties}>Systems</div>
                <strong style={{ borderBottom: '1.5px dashed var(--sage)', paddingBottom: '2px', display: 'inline-block', justifySelf: 'start' }}>[Verified work example]</strong>
                <div style={{ fontSize: '0.75rem', color: 'var(--sage)' }}>[Origin label]</div>
              </Link>
            </li>
            
            <li>
              <Link href="#work-2" style={{ display: 'contents', textDecoration: 'none', color: 'inherit' }}>
                <div className="tag" style={{ '--bg': 'var(--coral-soft)' } as React.CSSProperties}>Marketing</div>
                <strong style={{ borderBottom: '1.5px dashed var(--sage)', paddingBottom: '2px', display: 'inline-block', justifySelf: 'start' }}>[Verified work example]</strong>
                <div style={{ fontSize: '0.75rem', color: 'var(--sage)' }}>[Origin label]</div>
              </Link>
            </li>
            
            <li>
              <Link href="#work-3" style={{ display: 'contents', textDecoration: 'none', color: 'inherit' }}>
                <div className="tag" style={{ '--bg': 'var(--butter-soft)' } as React.CSSProperties}>Growth operations</div>
                <strong style={{ borderBottom: '1.5px dashed var(--sage)', paddingBottom: '2px', display: 'inline-block', justifySelf: 'start' }}>[Verified work example]</strong>
                <div style={{ fontSize: '0.75rem', color: 'var(--sage)' }}>[Origin label]</div>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}
