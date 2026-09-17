const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add responsive classes to the CSS block
const css = `
        /* Platforms and Industries Section */
        .plat-ind-container { width: 100%; max-width: 100%; box-sizing: border-box; }
        .plat-ind-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 8vw, 80px); }
        .plat-row { display: grid; grid-template-columns: 140px 1fr; gap: 16px; }
        .ind-cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ind-card {
          display: flex;
          flex-direction: column;
          padding: 24px 28px;
          background: var(--warm-white);
          border: 1px solid var(--light-sage);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .ind-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.04); border-color: var(--sage); }
        
        @media (max-width: 768px) {
          #platforms {
            padding: clamp(60px, 8vw, 80px) 0 !important;
            box-sizing: border-box;
            width: 100%;
          }
          #platforms .wrap {
            padding: 0 24px !important;
            box-sizing: border-box;
            width: 100%;
          }
          .plat-ind-grid {
            grid-template-columns: 1fr;
            gap: 72px; /* Platforms -> Industries: 64-80px */
          }
          
          /* Typography for mobile */
          .plat-ind-header h2 {
            font-size: clamp(42px, 11vw, 48px) !important;
            line-height: 1.05 !important;
            text-align: left;
            margin-bottom: 28px !important;
          }
          .plat-ind-header p {
            font-size: 18px !important;
            line-height: 1.6 !important;
            text-align: left;
          }
          .plat-ind-header {
            margin-bottom: 56px !important; /* Intro -> Platforms: 48-64px */
          }
          
          /* Platforms Section */
          .plat-col h3 {
            font-size: clamp(32px, 8vw, 38px) !important;
            margin-bottom: 24px !important;
          }
          .plat-col > p {
            font-size: 17px !important;
          }
          .plat-list {
            gap: 32px !important;
          }
          .plat-row {
            grid-template-columns: 38% 1fr;
            gap: 16px;
          }
          .plat-row dt {
            font-size: 15px !important;
          }
          .plat-row dd {
            font-size: 15px !important;
            word-wrap: break-word;
          }
          
          /* Industries Section */
          .ind-col h3 {
            font-size: clamp(32px, 8vw, 38px) !important;
            margin-bottom: 24px !important;
          }
          .ind-col > p {
            font-size: 17px !important;
          }
          .ind-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ind-card {
            padding: 24px !important;
          }
          .ind-card strong {
            font-size: 24px !important;
            margin-bottom: 8px;
          }
          .ind-card span {
            font-size: 17px !important;
          }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);

// Now apply these classes to the JSX
const oldHtmlRegex = /<section className="reveal-new" id="platforms" style=\{\{ padding: "clamp\(80px, 10vw, 120px\) 0", borderTop: "1px solid var\(--light-sage\)" \}\}>.*?<\/section>/s;

const newHtml = `<section className="reveal-new plat-ind-container" id="platforms" style={{ padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid var(--light-sage)" }}>
          <div className="wrap">
            
            <div className="plat-ind-header" style={{ marginBottom: "64px" }}>
              <span className="label" style={{ marginBottom: "16px", display: "block" }}>Platforms and industries</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "24px", fontFamily: "var(--serif)" }}>Start from your platform or your industry</h2>
              <p className="mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)" }}>Many businesses first come to Sage Kite with a specific tool or a problem particular to their sector. Those pages go deeper. The same approach to systems, people and execution sits behind each one.</p>
            </div>
            
            <div className="plat-ind-grid">
              
              <div className="plat-col">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--serif)" }}>Platforms we implement and improve</h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--dark-sage)", marginBottom: "32px" }}>We work in established CRMs and industry systems. Every engagement starts by confirming what is feasible on your account.</p>
                <dl className="plat-list" style={{ display: "flex", flexDirection: "column", gap: "24px", borderTop: "1px solid var(--light-sage)", paddingTop: "24px", margin: 0 }}>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Cross-industry</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>GoHighLevel, Keap, custom CRM development</dd>
                  </div>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Real estate</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Follow Up Boss, Lofty</dd>
                  </div>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Home services</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>ServiceTitan, Housecall Pro, Jobber</dd>
                  </div>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Coaching and courses</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Kajabi</dd>
                  </div>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Law firms</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Clio Grow</dd>
                  </div>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Service businesses</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Dubsado</dd>
                  </div>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Fitness and wellness</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Mindbody</dd>
                  </div>
                  <div className="plat-row">
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Nonprofits</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Bloomerang</dd>
                  </div>
                </dl>
                <p className="route-foot" style={{ fontSize: "0.85rem", color: "var(--dark-sage)", marginTop: "32px", padding: "16px", background: "rgba(0,0,0,0.02)", borderRadius: "8px", boxSizing: "border-box" }}>Groupings reflect common use, not a limit on who each platform serves. GoHighLevel implementation is delivered with GHL Scale Up. <Link href="https://glasspane.pages.dev/platforms" className="text-link" style={{ marginLeft: "8px" }}>Browse supported platforms</Link></p>
              </div>
              
              <div className="ind-col">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--serif)" }}>Industries we focus on</h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--dark-sage)", marginBottom: "32px" }}>Each industry page explains the customer journey in that market and the services that support it.</p>
                <div className="ind-cards-grid">
                  <Link href="https://glasspane.pages.dev/industries/real-estate" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Real estate</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Lead ownership, agent follow-up and pipeline visibility</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/home-services" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Home services</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Enquiry handling, quote follow-up and repeat work</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/coaching" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Coaches and course businesses</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Enquiries, enrolment and audience nurturing</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/agencies" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Marketing agencies</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>White-label CRM implementation, automation and VA delivery</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/service" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Service businesses</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Standardised lead capture, quoting and client onboarding</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/custom" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Custom operations</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Connecting disparate tools or building bespoke CRM architecture</span>
                  </Link>
                </div>
              </div>
              
            </div>
            
          </div>
        </section>`;

content = content.replace(oldHtmlRegex, newHtml);

fs.writeFileSync(file, content);
console.log('Applied platform and industry mobile fixes.');
