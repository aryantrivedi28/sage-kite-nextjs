import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/sage-kite-logo-transparent.png';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          
          <div className="foot-brand">
            <Link href="/" className="logo" style={{ '--w': '160px' } as React.CSSProperties}>
              <Image src={logo} alt="Sage Kite" title="Sage Kite" sizes="160px" style={{ aspectRatio: `${logo.width} / ${logo.height}` }} />
            </Link>
            <p>
              Sage Kite is a business growth consultancy building growth operations and systems that scale, for SMEs and agencies.
            </p>
          </div>

          <div>
            <h2>Services</h2>
            <Link href="/services/consultancy">Business growth consulting</Link><br />
            <Link href="/services/crm-implementation">CRM implementation</Link><br />
            <Link href="/services/crm-implementation#custom-crm">Custom CRM development</Link><br />
            <Link href="/services/marketing">Marketing</Link><br />
            <Link href="/services/specialist-staffing">Specialist staffing</Link><br />
            <Link href="/services/white-label">White-label delivery</Link>
          </div>

          <div>
            <h2>Explore</h2>
            <Link href="/platforms">Platforms</Link><br />
            <Link href="/industries">Industries</Link><br />
            <Link href="/case-studies">Case studies</Link><br />
            <Link href="/blog">Insights</Link><br />
            <Link href="/insights/founders-thoughts">Founder's Thoughts</Link>
          </div>

          <div>
            <h2>Company</h2>
            <Link href="/about">About</Link><br />
            <Link href="/contact">Contact</Link><br />
            <Link href="/privacy-policy">Privacy Policy</Link><br />
            <Link href="/terms-of-service">Terms of Service</Link>
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
