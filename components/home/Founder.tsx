import Link from 'next/link';

export function Founder() {
  return (
    <section className="founder" style={{ borderTop: '1px solid var(--light-sage)' }}>
      <div className="wrap reveal">
        <div className="founder-grid">
          
          <div className="founder-photo">
            <span>Founder photograph</span>
          </div>

          <div>
            <p className="label">From the founder</p>
            <h2>Founder’s Thoughts</h2>
            
            <p className="founder-intro">
              Occasional essays by Aryan, Sage Kite’s founder, on growth, systems and how selling is changing.
            </p>
            
            <p className="sub" style={{ color: 'var(--dark-sage)', maxWidth: '52ch' }}>
              Written from the work: why growth breaks between interest and revenue, where automation and AI genuinely help, and how teams should be built now.
            </p>
            
            <div className="founder-latest">
              <span style={{ fontSize: '0.8125rem', color: 'var(--sage)', marginRight: '12px', fontWeight: 600 }}>Latest essay</span>
              <Link href="#essay-1" style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--ink)', textDecoration: 'underline', textDecorationStyle: 'dashed', textDecorationColor: 'var(--sage)', textUnderlineOffset: '4px' }}>
                [First published essay title]
              </Link>
            </div>
            
            <Link href="#founder-thoughts" className="text-link">Read Founder’s Thoughts</Link>
          </div>

        </div>
      </div>
    </section>
  );
}
