import Link from 'next/link';

export function Agency() {
  return (
    <section className="agency">
      <div className="wrap reveal">
        <div className="agency-card">
          <div>
            <p className="label">For agencies</p>
            <h2>Your clients. Your brand. Our delivery.</h2>
            <p className="sub" style={{ color: 'var(--dark-sage)' }}>
              White-label fulfilment, with scope and client communication agreed before work begins.
            </p>
          </div>
          <div className="cta-col">
            <Link href="#agency-delivery" className="btn">Explore white-label delivery</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
