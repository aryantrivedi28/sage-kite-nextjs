"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" />
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
            <h1>Privacy Policy</h1>
            <p>
              Your privacy matters to us. This Privacy Policy explains how Sage Kite collects, uses, and protects your personal information when you use our services.
            </p>
            <div className="pp-meta">
              Effective Date <span>· September 18, 2026</span>
              <div>Last Updated: <span>September 18, 2026</span></div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pp-body">
          <div className="wrap pp-layout">
            <div className="pp-content">

              {/* 1 */}
              <div className="pp-section" id="section1">
                <h2>1. Personal Information We Collect</h2>
                <p>We collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Contact us through our website forms</li>
                  <li>Book a consultation or discovery call</li>
                  <li>Sign up for our newsletter or free resources</li>
                  <li>Engage our consultancy, CRM implementation, marketing, staffing, or white-label delivery services</li>
                  <li>Communicate with us via email, phone, or WhatsApp</li>
                </ul>
                <p>The types of personal information we may collect include your name, email address, phone number, company name, billing information, CRM account details (when providing implementation or migration services), and any other information you choose to provide.</p>
              </div>

              {/* 2 */}
              <div className="pp-section" id="section2">
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                  <li>To provide and deliver our services, including consultancy, CRM implementation, marketing, specialist staffing, and white-label delivery</li>
                  <li>To process payments and manage client accounts</li>
                  <li>To communicate with you about your project, updates, and support</li>
                  <li>To send you marketing communications, newsletters, and promotional offers (you may opt out at any time)</li>
                  <li>To improve our website, services, and client experience</li>
                  <li>To comply with legal obligations and enforce our terms</li>
                </ul>
              </div>

              {/* 3 */}
              <div className="pp-section" id="section3">
                <h2>3. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand how you interact with our site, remember your preferences, and improve our services.</p>
                <p>You can control cookie settings through your browser preferences. Third-party analytics services may also use cookies to collect information about your browsing activity.</p>
              </div>

              {/* 4 */}
              <div className="pp-section" id="section4">
                <h2>4. Third-Party Service Providers</h2>
                <p>We share your information with third-party service providers who assist us in delivering our services:</p>
                <ul>
                  <li><strong>GoHighLevel</strong> — CRM and marketing automation platform</li>
                  <li><strong>Stripe</strong> — payment processing</li>
                  <li><strong>Twilio</strong> — SMS and communication services</li>
                  <li><strong>Mailgun</strong> — email delivery infrastructure</li>
                  <li><strong>Brevo</strong> (formerly Sendinblue) — email marketing and newsletter delivery</li>
                </ul>
              </div>

              {/* 5 */}
              <div className="pp-section" id="section5">
                <h2>5. Data Security</h2>
                <p>We implement reasonable security measures to protect your personal information from unauthorised access, disclosure, or misuse. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                <p>While we strive to protect your data, we cannot guarantee absolute security.</p>
              </div>

              {/* 6 */}
              <div className="pp-section" id="section6">
                <h2>6. Client Data and CRM Access</h2>
                <p>When we provide CRM implementation, migration, or management services, we may access your CRM account and any client data stored within it. We treat all client data as confidential and access it solely for the purpose of delivering our services.</p>
                <p>We do not extract, retain, or use client data beyond what is necessary for service delivery. You retain full ownership of all your CRM data at all times.</p>
              </div>

              {/* 7 */}
              <div className="pp-section" id="section7">
                <h2>7. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                <p>When you are a client, we retain your information for the duration of our engagement and for a reasonable period thereafter for legal and business purposes.</p>
              </div>

              {/* 8 */}
              <div className="pp-section" id="section8">
                <h2>8. International Users</h2>
                <p>Sage Kite operates from India. We have clients in the United States, Canada, United Kingdom, Australia, New Zealand, and across Europe. Your information may be transferred to and processed in countries other than your country of residence, including India and the United States.</p>

                <h3>GDPR Compliance (UK and EU Users)</h3>
                <p>If you are a resident of the United Kingdom or European Union, you have the following rights under the General Data Protection Regulation (GDPR):</p>
                <ul>
                  <li><strong>Right to access</strong> — request a copy of your personal data</li>
                  <li><strong>Right to rectification</strong> — correct inaccurate or incomplete data</li>
                  <li><strong>Right to erasure</strong> (Right to be forgotten) — request deletion of your data</li>
                  <li><strong>Right to restrict processing</strong> — limit how we use your data</li>
                  <li><strong>Right to data portability</strong> — receive your data in a structured format</li>
                  <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
                </ul>
                <p>Our lawful basis for processing your personal data includes contract fulfilment (to provide our services), legitimate business interests (to improve our services and communicate with clients), and consent (for marketing communications). We will respond to all data subject access requests within 30 days.</p>
              </div>

              {/* 9 */}
              <div className="pp-section" id="section9">
                <h2>9. Your Rights and Choices</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the information in the Contact section below. We will respond to data requests within 30 days.</p>
              </div>

              {/* 10 */}
              <div className="pp-section" id="section10">
                <h2>10. Children&apos;s Privacy</h2>
                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to delete such information.</p>
              </div>

              {/* 11 */}
              <div className="pp-section" id="section11">
                <h2>11. WhatsApp Communication</h2>
                <p>We communicate with clients and prospects via WhatsApp. Messages sent through WhatsApp are processed by Meta (formerly Facebook) and are subject to Meta&apos;s privacy policy. We encourage you to review WhatsApp&apos;s privacy practices before using the platform to communicate with us.</p>
              </div>

              {/* 12 */}
              <div className="pp-section" id="section12">
                <h2>12. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a new effective date. We encourage you to review this Privacy Policy periodically for any changes.</p>
              </div>

              {/* 13 */}
              <div className="pp-section" id="section13">
                <h2>13. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:</p>
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
                <li><a href="#section1" className={activeSection === "section1" ? "active" : ""} onClick={() => setTocOpen(false)}>1. Personal Information</a></li>
                <li><a href="#section2" className={activeSection === "section2" ? "active" : ""} onClick={() => setTocOpen(false)}>2. How We Use Your Information</a></li>
                <li><a href="#section3" className={activeSection === "section3" ? "active" : ""} onClick={() => setTocOpen(false)}>3. Cookies and Tracking</a></li>
                <li><a href="#section4" className={activeSection === "section4" ? "active" : ""} onClick={() => setTocOpen(false)}>4. Third-Party Providers</a></li>
                <li><a href="#section5" className={activeSection === "section5" ? "active" : ""} onClick={() => setTocOpen(false)}>5. Data Security</a></li>
                <li><a href="#section6" className={activeSection === "section6" ? "active" : ""} onClick={() => setTocOpen(false)}>6. Client Data and CRM Access</a></li>
                <li><a href="#section7" className={activeSection === "section7" ? "active" : ""} onClick={() => setTocOpen(false)}>7. Data Retention</a></li>
                <li><a href="#section8" className={activeSection === "section8" ? "active" : ""} onClick={() => setTocOpen(false)}>8. International Users &amp; GDPR</a></li>
                <li><a href="#section9" className={activeSection === "section9" ? "active" : ""} onClick={() => setTocOpen(false)}>9. Your Rights</a></li>
                <li><a href="#section10" className={activeSection === "section10" ? "active" : ""} onClick={() => setTocOpen(false)}>10. Children&apos;s Privacy</a></li>
                <li><a href="#section11" className={activeSection === "section11" ? "active" : ""} onClick={() => setTocOpen(false)}>11. WhatsApp Communication</a></li>
                <li><a href="#section12" className={activeSection === "section12" ? "active" : ""} onClick={() => setTocOpen(false)}>12. Changes to Policy</a></li>
                <li><a href="#section13" className={activeSection === "section13" ? "active" : ""} onClick={() => setTocOpen(false)}>13. Contact Us</a></li>
              </ul>
            </aside>
          </div>
        </section>
      </main>

      {/* Footer — matches about page */}
      <footer className="site-footer" style={{background: "var(--pale-sage)", padding: "clamp(48px, 8vw, 80px) 0 32px"}}>
        <div className="wrap" style={{display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "clamp(32px, 5vw, 56px)", alignItems: "start"}}>
          <div className="foot-brand" style={{paddingRight: "clamp(40px, 8vw, 120px)"}}>
            <Link className="logo" href="/" aria-label="Sage Kite home">
              <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" style={{maxWidth: "180px"}} />
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
