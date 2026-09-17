import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="tint final" style={{ padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="wrap reveal">
        <div className="final-inner">
          
          <div className="final-words">
            <span><span style={{ color: 'var(--coral)' }}>●</span> Revenue</span>
            <span><span style={{ color: 'var(--sage)' }}>●</span> Growth operations</span>
            <span><span style={{ color: 'var(--sky)' }}>●</span> Systems</span>
            <span><span style={{ color: 'var(--dark-sage)' }}>●</span> Execution</span>
          </div>

          <h2>Find what is holding revenue back.</h2>
          
          <p className="sub" style={{ fontSize: '1.1rem', color: 'var(--dark-sage)', maxWidth: '44ch', lineHeight: 1.6 }}>
            A discovery call looks at how your leads, systems and team work today, and what to fix first.
          </p>
          
          <div className="cta-row">
            <Link href="#book" className="btn">Book a discovery call</Link>
            <Link href="#library" className="link" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Read the Library first</Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
