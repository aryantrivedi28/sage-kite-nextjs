import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          
          <div className="foot-brand">
            <Link href="/" className="logo" style={{ '--w': '160px' } as React.CSSProperties}>
              <img src="/sage-kite-logo-transparent.png" alt="Sage Kite" />
            </Link>
            <p>
              Sage Kite is a business growth consultancy building growth operations and systems that scale, for SMEs and agencies.
            </p>
          </div>

          <div>
            <h2>Services</h2>
            <Link href="#consulting">Business growth consulting</Link><br />
            <Link href="#crm">CRM implementation</Link><br />
            <Link href="#custom-crm">Custom CRM development</Link><br />
            <Link href="#marketing">Marketing</Link><br />
            <Link href="#staffing">Specialist staffing</Link><br />
            <Link href="#whitelabel">White-label delivery</Link>
          </div>

          <div>
            <h2>Explore</h2>
            <Link href="#platforms">Platforms</Link><br />
            <Link href="#industries">Industries</Link><br />
            <Link href="#work">Work</Link><br />
            <Link href="#insights">Insights</Link><br />
            <Link href="#thoughts">Founder's Thoughts</Link>
          </div>

          <div>
            <h2>Company</h2>
            <Link href="#about">About</Link><br />
            <Link href="#contact">Contact</Link><br />
            <Link href="/privacy-policy">Privacy Policy</Link><br />
            <Link href="/terms-of-service">[Terms]</Link>
          </div>

        </div>

        <div className="legal">
          <div>© {new Date().getFullYear()} Sage Kite. All rights reserved.</div>
          <div>Streamlined systems for growth</div>
        </div>
      </div>
    </footer>
  );
}
