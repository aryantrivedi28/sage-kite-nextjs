import Link from 'next/link';

export function SpecialistCapability() {
  return (
    <section className="cap">
      <div className="wrap reveal">
        <div className="cap-band">
          
          <div>
            <p className="label">Specialist capability</p>
            <h2>When the system needs hands, we provide them.</h2>
            <p className="sub" style={{ color: 'var(--dark-sage)' }}>
              Tier 1 virtual assistants who operate and improve your growth systems.
            </p>
          </div>
          
          <div>
            <div className="cap-tags">
              <div className="chip"><span className="dot"></span> CRM and automation</div>
              <div className="chip"><span className="dot"></span> Marketing operations</div>
              <div className="chip"><span className="dot"></span> Email marketing</div>
              <div className="chip"><span className="dot"></span> Social media</div>
              <div className="chip"><span className="dot"></span> Lead generation and sales support</div>
            </div>
            <Link href="#staffing" className="cap-link" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}>
              Explore specialist staffing
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
