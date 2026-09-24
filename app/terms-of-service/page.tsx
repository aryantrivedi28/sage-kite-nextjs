"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function TermsOfService() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -60% 0px" }
    );

    const sections = document.querySelectorAll(".pp-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="site-header" style={{background: "var(--warm-white)", zIndex: 100, backdropFilter: "none", WebkitBackdropFilter: "none"}}>
        <div className="wrap header-inner">
          <Link className="logo" href="/" aria-label="Sage Kite home">
            <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" title="Sage Kite logo" />
          </Link>
          
          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            <ul>
              <li><Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="/#platforms" onClick={() => setMenuOpen(false)}>Platforms</Link></li>
              <li><Link href="/#industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
              <li><Link href="/#white-label" onClick={() => setMenuOpen(false)}>For agencies</Link></li>
              <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Insights</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><a className="btn btn-small" href="https://wa.me/message/C22YQ52VUDLCA1" onClick={() => setMenuOpen(false)}>Book a discovery call</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
        </div>
      </header>

      <main id="main">
        

        {/* Hero */}
        <section className="pp-hero">
          <div className="wrap">
            <span className="label">Legal</span>
            <h1>Terms of Service</h1>
            <p>
              These Terms of Service govern your use of Sage Kite&apos;s services, including consultancy, CRM implementation, marketing, specialist staffing, and white-label delivery.
            </p>
            <div className="pp-meta">
              Effective Date <span>· September 18, 2026</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pp-body">
          <div className="wrap pp-layout">
            <div className="pp-content">

              {/* 1 */}
              <div className="pp-section" id="section1">
                <h2>1. Our Services</h2>
                <p>Sage Kite provides professional business growth consultancy and implementation services, including:</p>
                <ul>
                  <li>Business growth consultancy, GTM consultancy, AI consultancy, and fractional CMO support</li>
                  <li>CRM implementation, setup, pipeline configuration, and platform migration</li>
                  <li>Custom CRM development</li>
                  <li>Marketing services including SEO, paid advertising, email marketing, and social media management</li>
                  <li>Specialist staffing and virtual assistant recruitment</li>
                  <li>White-label delivery for marketing agencies</li>
                  <li>Workflow automation design and implementation</li>
                  <li>Ongoing support and consulting</li>
                </ul>
              </div>

              {/* 2 */}
              <div className="pp-section" id="section2">
                <h2>2. Client Responsibilities</h2>
                <p>As a client, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information required for service delivery</li>
                  <li>Maintain active subscriptions to any required third-party platforms (e.g. GoHighLevel, CRM platforms)</li>
                  <li>Grant reasonable access to your accounts and systems for setup, implementation, and migration purposes</li>
                  <li>Respond to communications and requests within reasonable timeframes</li>
                  <li>Comply with all applicable laws and regulations in your use of our services</li>
                </ul>
              </div>

              {/* 3 */}
              <div className="pp-section" id="section3">
                <h2>3. Payment Terms</h2>
                <p>Project fees are outlined in your engagement proposal or statement of work. Payment terms are specified in your agreement.</p>
                <p>For fixed-price projects, an advance payment may be required before work commences. For ongoing services, recurring fees are billed in advance. All fees are non-refundable except as explicitly stated in our Refund Policy.</p>
                <p>Third-party platform subscription fees (e.g. GoHighLevel, CRM platforms) are paid directly to the respective providers and are non-refundable by Sage Kite under any circumstances.</p>
              </div>

              {/* 4 */}
              <div className="pp-section" id="section4">
                <h2>4. Intellectual Property</h2>
                <p>Upon full payment, you own all custom deliverables created specifically for your project, including configured workflows, CRM pipelines, marketing assets, and system architectures.</p>
                <p>However, Sage Kite retains ownership of its proprietary frameworks, templates, methodologies, and pre-built automation sequences. These may be reused for other clients.</p>
                <p>Any intellectual property you provide to us remains your property.</p>
              </div>

              {/* 5 */}
              <div className="pp-section" id="section5">
                <h2>5. Third-Party Platforms</h2>
                <p>Our services are delivered through various third-party platforms including GoHighLevel, Follow Up Boss, ServiceTitan, Kajabi, and others. We are not responsible for:</p>
                <ul>
                  <li>Platform outages, downtime, or service interruptions</li>
                  <li>API changes that may affect custom integrations</li>
                  <li>Account suspensions, terminations, or policy changes by platform providers</li>
                  <li>Issues arising from third-party integrations (Stripe, Twilio, Mailgun, etc.)</li>
                </ul>
                <div className="pp-callout">
                  <strong>Important Disclosure:</strong> Sage Kite is an independent service provider and is not affiliated with, endorsed by, or officially partnered with GoHighLevel Inc. or any other platform provider referenced on this website. All platform names are registered trademarks of their respective owners.
                </div>
                <p>Usage-based costs incurred through Twilio, Mailgun, Stripe, or any other third-party platform during project delivery are the client&apos;s responsibility and are not refundable by Sage Kite.</p>
              </div>

              {/* 6 */}
              <div className="pp-section" id="section6">
                <h2>6. No Guaranteed Results</h2>
                <p>Sage Kite makes no guarantees regarding specific outcomes from using our services, including but not limited to lead generation, conversion rates, revenue growth, or return on investment.</p>
                <p>The effectiveness of systems and strategies we implement depends on many factors outside our control, including market conditions, client execution, platform changes, and business environment.</p>
              </div>

              {/* 7 */}
              <div className="pp-section" id="section7">
                <h2>7. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Sage Kite&apos;s total liability for any claim arising from our services shall not exceed the total fees paid by you to us in the six months preceding the claim.</p>
                <p>We are not liable for indirect, incidental, or consequential damages, including lost profits, data loss, or business interruption.</p>
              </div>

              {/* 8 */}
              <div className="pp-section" id="section8">
                <h2>8. Confidentiality</h2>
                <p>Both parties agree to keep confidential any proprietary or sensitive information disclosed during the engagement. This includes client data, account credentials, business processes, and proprietary methodologies.</p>
                <p>This confidentiality obligation survives termination of our agreement.</p>
              </div>

              {/* 9 */}
              <div className="pp-section" id="section9">
                <h2>9. Termination</h2>
                <p>Either party may terminate this agreement with 14 days written notice via email.</p>
                <p>Upon termination, you will be billed for any work completed up to the termination date. Outstanding invoices remain due and payable. We reserve the right to suspend services if payments are delinquent.</p>
              </div>

              {/* 10 */}
              <div className="pp-section" id="section10">
                <h2>10. Revisions Policy</h2>
                <p>Each fixed-price project includes up to two rounds of revisions within the agreed scope. Additional revisions beyond this limit will be billed separately at an agreed hourly or fixed rate.</p>
                <p>Revisions must be requested within 14 days of project delivery.</p>
              </div>

              {/* 11 */}
              <div className="pp-section" id="section11">
                <h2>11. Governing Law</h2>
                <p>These Terms of Service are governed by the laws of India, without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana, India.</p>
              </div>

              {/* 12 */}
              <div className="pp-section" id="section12">
                <h2>12. Changes to These Terms</h2>
                <p>We may modify these Terms of Service at any time. Changes become effective when posted on this page. Your continued use of our services after changes constitutes acceptance of the updated terms.</p>
                <p>Material changes will be communicated via email when reasonably possible.</p>
              </div>

              {/* 13 */}
              <div className="pp-section" id="section13">
                <h2>13. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:aryan@sagekite.com">aryan@sagekite.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+919893270210">+91 98932 70210</a></li>
                  <li><strong>WhatsApp:</strong> <a href="https://wa.me/919893270210?text=Hello" target="_blank" rel="noopener noreferrer">+91 98932 70210</a></li>
                  <li><strong>Address:</strong> Gurugram, Haryana, India</li>
                </ul>
              </div>

            </div>

            {/* Table of Contents Sidebar */}
            <aside className={`pp-toc ${tocOpen ? "is-open" : ""}`}>
              <div className="pp-toc-header" onClick={() => setTocOpen(!tocOpen)}>
                <div className="pp-toc-title">ON THIS PAGE</div>
                <button className="pp-toc-toggle" aria-label="Toggle Table of Contents">
                  {tocOpen ? "−" : "+"}
                </button>
              </div>
              <ul className="pp-toc-list">
                <li><a href="#section1" className={activeSection === "section1" ? "active" : ""} onClick={() => setTocOpen(false)}>1. Our Services</a></li>
                <li><a href="#section2" className={activeSection === "section2" ? "active" : ""} onClick={() => setTocOpen(false)}>2. Client Responsibilities</a></li>
                <li><a href="#section3" className={activeSection === "section3" ? "active" : ""} onClick={() => setTocOpen(false)}>3. Payment Terms</a></li>
                <li><a href="#section4" className={activeSection === "section4" ? "active" : ""} onClick={() => setTocOpen(false)}>4. Intellectual Property</a></li>
                <li><a href="#section5" className={activeSection === "section5" ? "active" : ""} onClick={() => setTocOpen(false)}>5. Third-Party Platforms</a></li>
                <li><a href="#section6" className={activeSection === "section6" ? "active" : ""} onClick={() => setTocOpen(false)}>6. No Guaranteed Results</a></li>
                <li><a href="#section7" className={activeSection === "section7" ? "active" : ""} onClick={() => setTocOpen(false)}>7. Limitation of Liability</a></li>
                <li><a href="#section8" className={activeSection === "section8" ? "active" : ""} onClick={() => setTocOpen(false)}>8. Confidentiality</a></li>
                <li><a href="#section9" className={activeSection === "section9" ? "active" : ""} onClick={() => setTocOpen(false)}>9. Termination</a></li>
                <li><a href="#section10" className={activeSection === "section10" ? "active" : ""} onClick={() => setTocOpen(false)}>10. Revisions Policy</a></li>
                <li><a href="#section11" className={activeSection === "section11" ? "active" : ""} onClick={() => setTocOpen(false)}>11. Governing Law</a></li>
                <li><a href="#section12" className={activeSection === "section12" ? "active" : ""} onClick={() => setTocOpen(false)}>12. Changes to Terms</a></li>
                <li><a href="#section13" className={activeSection === "section13" ? "active" : ""} onClick={() => setTocOpen(false)}>13. Contact Information</a></li>
              </ul>
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer" style={{background: "var(--pale-sage)", padding: "clamp(48px, 8vw, 80px) 0 32px"}}>
        <div className="wrap" style={{display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "clamp(32px, 5vw, 56px)", alignItems: "start"}}>
          <div className="foot-brand" style={{paddingRight: "clamp(40px, 8vw, 120px)"}}>
            <Link className="logo" href="/" aria-label="Sage Kite home">
              <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" title="Sage Kite logo" style={{maxWidth: "180px"}} />
            </Link>
            <p style={{color: "var(--ink)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "24px"}}>Sage Kite is a business growth consultancy. We improve the systems, people and execution behind growth for SMEs, and deliver white-label work for agencies.</p>
          </div>
          
          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Services</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="/#services" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Business growth consulting</Link></li>
              <li><Link href="/#services" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>CRM implementation</Link></li>
              <li><Link href="/#services" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Custom CRM development</Link></li>
              <li><Link href="/#services" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Marketing</Link></li>
              <li><Link href="/#services" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Recruitment and staffing</Link></li>
              <li><Link href="/#white-label" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>White-label delivery</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Explore</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="/#platforms" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Platforms</Link></li>
              <li><Link href="/#industries" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Industries</Link></li>
              <li><Link href="/#library" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Work</Link></li>
              <li><Link href="/blog" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Insights</Link></li>
              <li><Link href="/#founders-thoughts" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Founder&apos;s Thoughts</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Company</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="/about" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>About</Link></li>
              <li><Link href="/contact" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Contact</Link></li>
              <li><Link href="/privacy-policy" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="wrap">
          <div className="legal" style={{borderTop: "1px solid var(--light-sage)", marginTop: "44px", paddingTop: "24px", display: "flex", justifyContent: "space-between", color: "var(--ink)", fontSize: "0.85rem"}}>
            <p style={{margin: 0}}>© 2026 Sage Kite. All rights reserved.</p>
            <p style={{margin: 0}}>Streamlined systems for growth.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
