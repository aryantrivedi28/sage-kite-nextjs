const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const startIndex = code.indexOf('<section id="faq"');

if (startIndex === -1) {
    console.error("Could not find bounds for faq section.");
    process.exit(1);
}

const newSections = `<section id="faq" style={{paddingTop: "clamp(56px, 8vw, 80px)", paddingBottom: "clamp(64px, 8vw, 96px)"}}>
          <div className="wrap">
            <div style={{marginBottom: "48px"}}>
              <span className="label">In brief</span>
              <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(2.3rem, 4vw, 3rem)", marginTop: "12px", color: "var(--ink)"}}>Sage Kite, explained plainly</h2>
            </div>
            
            <div className="qa">
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>What is Sage Kite?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>What does Sage Kite do?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>It advises on growth through GTM consultancy, AI consultancy and fractional CMO support; implements CRM systems and automation; runs marketing; and provides specialist virtual assistants to operate those systems.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Does Sage Kite implement as well as advise?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Yes. Implementation projects are scoped after discovery and delivered at a fixed price, followed by handover and optional maintenance.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Is Sage Kite a CRM company or a marketing agency?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Neither. CRM and marketing are two of the capabilities Sage Kite uses, alongside consultancy, automation and specialist people, to make growth work as one system.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Who does Sage Kite work with?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>SMEs in the United States, Canada, Europe, Australia and New Zealand, and marketing agencies that need a white-label delivery partner.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>How do I start?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Book a discovery call. It covers your current process, the outcome you want and whether Sage Kite is the right fit.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tint" id="contact" style={{borderBottom: "4px solid var(--butter)", paddingTop: "clamp(64px, 8vw, 96px)", paddingBottom: "clamp(64px, 8vw, 96px)"}}>
          <div className="wrap final-inner" style={{alignItems: "center"}}>
            <div className="final">
              <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(2.3rem, 4vw, 3.2rem)", marginBottom: "24px", color: "var(--ink)", lineHeight: "1.1"}}>Tell us where growth<br />is getting stuck.</h2>
              <p className="lede" style={{color: "var(--ink)"}}>It might be the CRM, the marketing, the manual work or the lack of hands to do it. A discovery call is where we work out what to look at first, and whether Sage Kite is the right partner.</p>
            </div>
            <div className="cta-col" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px"}}>
              <Link className="btn" href="https://glasspane.pages.dev/contact" style={{backgroundColor: "var(--coral)", color: "var(--ink)", borderColor: "var(--coral)"}}>Book a discovery call</Link>
              <Link className="text-link" href="https://glasspane.pages.dev/insights" style={{fontWeight: "600", fontSize: "0.95rem"}}>Or read the Library first</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{paddingBottom: "44px", paddingTop: "64px"}}>
        <div className="wrap foot-grid">
          
          <div className="foot-brand" style={{paddingRight: "clamp(40px, 8vw, 120px)"}}>
            <Link className="logo" href="/" aria-label="Sage Kite home">
              <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" style={{maxWidth: "180px"}} />
            </Link>
            <p style={{color: "var(--ink)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "24px"}}>Sage Kite is a business growth consultancy. We improve the systems, people and execution behind growth for SMEs, and deliver white-label work for agencies.</p>
          </div>
          
          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Services</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="https://glasspane.pages.dev/services/consultancy" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Business growth consulting</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/crm-implementation" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>CRM implementation</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/custom-crm-development" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Custom CRM development</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/marketing" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Marketing</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/recruitment-staffing" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Recruitment and staffing</Link></li>
              <li><Link href="https://glasspane.pages.dev/for-agencies" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>White-label delivery</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Explore</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="https://glasspane.pages.dev/platforms" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Platforms</Link></li>
              <li><Link href="https://glasspane.pages.dev/industries" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Industries</Link></li>
              <li><Link href="https://glasspane.pages.dev/work" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Work</Link></li>
              <li><Link href="https://glasspane.pages.dev/insights" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Insights</Link></li>
              <li><Link href="https://glasspane.pages.dev/insights/founders-thoughts" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Founder's Thoughts</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Company</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="https://glasspane.pages.dev/about" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>About</Link></li>
              <li><Link href="https://glasspane.pages.dev/contact" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Contact</Link></li>
              <li><Link href="https://glasspane.pages.dev/privacy" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>[Privacy policy]</Link></li>
              <li><Link href="https://glasspane.pages.dev/terms" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>[Terms]</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="wrap">
          <div className="legal" style={{borderTop: "1px solid var(--light-sage)", marginTop: "44px", paddingTop: "24px", display: "flex", justifyContent: "space-between", color: "var(--ink)", fontSize: "0.85rem"}}>
            <p style={{margin: 0}}>© [Year] Sage Kite. [Registered legal entity and details]</p>
            <p style={{margin: 0}}>Streamlined systems for growth.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
`;

code = code.substring(0, startIndex) + newSections;

fs.writeFileSync('app/page.tsx', code);
console.log("Updated FAQ, CTA, and footer successfully.");
