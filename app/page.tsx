
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openService, setOpenService] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <style dangerouslySetInnerHTML={{__html: `
        /* FAQ Accordion */
        .faq-grid { display: grid; grid-template-columns: 0.6fr 1fr; gap: clamp(40px, 8vw, 80px); }
        .faq-item { border-bottom: 1px solid var(--light-sage); cursor: pointer; transition: all 0.3s ease; padding: 24px 32px; border-radius: 8px; margin-bottom: 4px; }
        .faq-item:first-of-type { border-top: 1px solid var(--light-sage); }
        .faq-item:hover { background: rgba(0,0,0,0.015); transform: translateX(4px); }
        .faq-q { display: flex; justify-content: space-between; align-items: center; gap: 24px; }
        .faq-q h3 { font-size: 1.35rem; font-family: var(--serif); color: var(--ink); margin: 0; line-height: 1.4; transition: color 0.3s ease; }
        .faq-icon { font-size: 1.5rem; color: var(--sage); transition: transform 0.3s ease; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; font-weight: 300; }
        .faq-a-wrapper { display: grid; transition: grid-template-rows 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), opacity 0.35s ease; }
        .faq-a-inner { overflow: hidden; }
        .faq-a-content { padding-top: 16px; padding-bottom: 8px; font-size: 1.05rem; line-height: 1.6; color: var(--dark-sage); }
        
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr; gap: 48px; }
          .faq-item { padding: 20px 16px; }
        }

        .header-scrolled {
          background: rgba(247, 245, 238, 0.95) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 24px rgba(0,0,0,0.03);
          padding: 8px 0 !important;
          border-bottom: 1px solid rgba(0,0,0,0.04);
        }
        .site-header { transition: all 0.3s ease; padding: 16px 0; border-bottom: 1px solid transparent; }
        
        .hero-section { padding: clamp(32px, 5vw, 64px) 0 clamp(80px, 10vw, 120px); overflow: hidden; }
        .hero-grid-new { display: grid; grid-template-columns: 1fr 1.1fr; gap: clamp(40px, 8vw, 80px); align-items: center; }
        .hero-img-wrapper { position: relative; border-radius: 12px; overflow: hidden; border: 1px solid var(--light-sage); box-shadow: 0 24px 48px rgba(0,0,0,0.06); }
        .hero-img-wrapper img { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3; transform: scale(1.03); transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1); }
        .hero-img-wrapper:hover img { transform: scale(1); }
        
        @media (max-width: 900px) {
          .hero-grid-new { grid-template-columns: 1fr; }
        }
        
        .prob-item { padding: 32px; background: transparent; border-left: 1px solid var(--light-sage); transition: all 0.4s ease; cursor: default; position: relative; }
        .prob-item::before { content: ""; position: absolute; left: -2px; top: 32px; width: 3px; height: 0; background: var(--coral); transition: height 0.4s ease; }
        .prob-item:hover { background: var(--warm-white); border-left-color: transparent; transform: translateX(8px); border-radius: 0 8px 8px 0; box-shadow: 0 12px 24px rgba(0,0,0,0.02); }
        .prob-item:hover::before { height: 24px; }
        
        .pillar-card { padding: 48px 40px; background: var(--warm-white); border: 1px solid var(--light-sage); border-radius: 8px; transition: transform 0.4s ease; height: 100%; display: flex; flex-direction: column; }
        .pillar-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.04); border-color: var(--card-color); }
        
        .timeline-node { position: relative; padding-left: 48px; padding-bottom: 64px; border-left: 1px solid var(--light-sage); transition: all 0.4s ease; cursor: default; }
        .timeline-node:last-child { border-left-color: transparent; padding-bottom: 0; }
        .timeline-node::before { content: ""; position: absolute; left: -6px; top: 0; width: 11px; height: 11px; border-radius: 50%; background: var(--light-sage); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .timeline-node:hover::before { transform: scale(1.6); background: var(--hover-color); }
        .timeline-node:hover { border-left-color: var(--hover-color); }
        .timeline-node h3 { transition: color 0.3s ease; }
        .timeline-node:hover h3 { color: var(--hover-color); }

        /* Accordion Refinements */
        .svc h3 { font-size: clamp(1.25rem, 1.8vw, 1.55rem) !important; }
        .svc-content-inner { max-width: 58ch; }
        .svc-content-inner p { font-size: 0.95rem !important; line-height: 1.5 !important; margin-bottom: 10px !important; }
        .svc-content-inner p.mt { margin-top: 10px !important; margin-bottom: 14px !important; }
        .svc-content-inner .text-link.mt { margin-top: 0 !important; font-size: 0.95rem !important; }

        
        
        @media (max-width: 900px) {
          
        .approach-header-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .approach-header-grid { grid-template-columns: 1fr; gap: 40px; }
        }
          .approach-cards-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .clean-card { transform: none !important; }
        }

        .eq-layout-grid { grid-template-columns: 0.85fr 1fr; }
        @media (max-width: 900px) {
          .eq-layout-grid { grid-template-columns: 1fr; }
        }

        .timeline-grid::-webkit-scrollbar { display: none; }
        .timeline-grid { -ms-overflow-style: none; scrollbar-width: none; }


        .srv-row { display: grid; grid-template-columns: 240px 1fr; gap: 40px; padding: 48px 0; border-bottom: 1px solid var(--light-sage); position: relative; transition: all 0.4s ease; }
        @media (max-width: 768px) { .srv-row { grid-template-columns: 1fr; gap: 16px; } }
        .srv-rail-new { position: absolute; left: -16px; top: 48px; bottom: 48px; width: 3px; background: var(--rail-color); transform: scaleY(0); transform-origin: top; transition: transform 0.4s ease; }
        .srv-row:hover .srv-rail-new { transform: scaleY(1); }
        .srv-row:hover { background: rgba(0,0,0,0.02); padding-left: 16px; padding-right: 16px; margin-left: -16px; margin-right: -16px; border-radius: 8px; border-bottom-color: transparent; }
        .srv-row:hover .srv-title { transform: translateX(6px); color: var(--rail-color); }
        .srv-title { transition: all 0.4s ease; }

        .sme-checklist { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 40px; }
        .sme-item { display: flex; align-items: flex-start; gap: 16px; transition: transform 0.3s ease; }
        .sme-item:hover { transform: translateX(4px); }
        
        .ind-card { padding: 32px; border: 1px solid var(--light-sage); border-radius: 8px; background: transparent; transition: all 0.4s ease; display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: inherit; height: 100%; }
        .ind-card:hover { background: var(--warm-white); transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.03); border-color: var(--ink); }
        
        .step-card { padding: 0; }
        .step-num { font-family: var(--serif); font-size: 3rem; color: var(--light-sage); line-height: 1; margin-bottom: 16px; transition: color 0.4s ease; }
        .step-card:hover .step-num { color: var(--ink); }
        
        .proof-new { padding: 40px; background: var(--warm-white); border: 1px solid var(--light-sage); border-radius: 8px; transition: all 0.5s ease; position: relative; overflow: hidden; height: 100%; display: flex; flex-direction: column; }
        .proof-new::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--edge-color); transform: scaleX(0); transform-origin: left; transition: transform 0.5s ease; }
        .proof-new:hover { transform: translateY(-12px); box-shadow: 0 24px 48px rgba(0,0,0,0.06); border-color: transparent; }
        .proof-new:hover::before { transform: scaleX(1); }
        
        .lib-grid-new { display: grid; grid-template-columns: 1fr 1.2fr; gap: clamp(40px, 8vw, 80px); }
        @media (max-width: 900px) { .lib-grid-new { grid-template-columns: 1fr; } .sme-checklist { grid-template-columns: 1fr; } }
        
        .cta-section { position: relative; overflow: hidden; background: var(--ink); color: var(--warm-white); padding: clamp(100px, 15vw, 160px) 0; }
        .cta-bg-text { position: absolute; font-size: 30vw; font-family: var(--serif); opacity: 0.02; top: 50%; left: 50%; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none; }
        .cta-section h2 { color: var(--warm-white); }
        .cta-section p { color: rgba(255,255,255,0.7); }

        .reveal-new { animation: fadeUp 0.8s forwards; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      <header className={`site-header ${menuOpen ? "open" : ""} ${scrolled ? "header-scrolled" : ""}`} style={{ background: "var(--warm-white)", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="wrap header-inner">
          <a className="logo" href="/" aria-label="Sage Kite home">
            <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" />
          </a>
          
          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            <ul>
              <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="#platforms" onClick={() => setMenuOpen(false)}>Platforms</Link></li>
              <li><Link href="#industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
              <li><Link href="#agencies" onClick={() => setMenuOpen(false)}>For agencies</Link></li>
              <li><Link href="#insights" onClick={() => setMenuOpen(false)}>Insights</Link></li>
              <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><a className="btn btn-small" href="https://wa.me/message/C22YQ52VUDLCA1" onClick={() => setMenuOpen(false)}>Book a discovery call</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
        </div>
      </header>

      <main id="main">
        {/* 2. HERO SECTION */}
        <section className="hero-section">
          <div className="wrap hero-grid-new">
            <div className="hero-copy">
              <div className="label" style={{ marginBottom: "24px" }}>Business growth consultancy</div>
              <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", lineHeight: 1.1, marginBottom: "32px", color: "var(--ink)" }}>Growth works when the <span className="u" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: "normal" }}>systems, people<br/>and execution</span><br/>behind it do.</h1>
              <p className="lede" style={{ fontSize: "1.15rem", lineHeight: 1.6, marginBottom: "32px", color: "var(--dark-sage)", maxWidth: "55ch" }}>Sage Kite is a business growth consultancy for small and medium-sized businesses. We find what is holding growth back, then help fix it: shaping the strategy, implementing CRM and automation, running marketing and providing specialist people to keep the work moving.</p>
              <p className="sub" style={{ fontSize: "1.1rem", fontFamily: "var(--serif)", fontStyle: "italic", marginBottom: "40px", color: "var(--ink)" }}>Most businesses do not lack tools or ideas. They lack the connection between them.</p>
              
              <div className="cta-row" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <a className="btn" href="https://wa.me/message/C22YQ52VUDLCA1" style={{ padding: "16px 32px", fontSize: "1rem" }}>Book a discovery call</a>
                <Link className="text-link" href="#what-we-do" style={{ fontWeight: 600 }}>See how Sage Kite works</Link>
              </div>
            </div>

            <div className="hero-img-wrapper">
               <img src="/Team_meeting.jpeg" alt="Business strategy meeting" />
            </div>
          </div>

          <div className="wrap mt-large reveal-new">
            <div className="eq-layout-grid" style={{ display: "grid", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
              <div style={{ width: "100%", position: "relative" }}>
                 <img src="/sage-kite-growth-workflow.jpeg" alt="Sage Kite growth workflow" style={{ width: "100%", borderRadius: "14px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 32px rgba(0,0,0,0.03)", objectFit: "cover", aspectRatio: "16/10" }} />
              </div>

              <figure className="equation" aria-label="What Sage Kite brings together" style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", gap: "4px" }}>
                <h2 style={{ fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink)", marginBottom: "16px", fontFamily: "var(--serif)" }}>What Sage Kite brings together</h2>
                
                <div className="eq-part" style={{ width: "92%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--sky)', padding: '16px 20px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Systems</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>CRM, automation, AI and the workflows between them</span>
                </div>
                
                <div className="op" style={{ width: "92%", color: "var(--ink)", fontSize: "1.2rem", fontWeight: 600, textAlign: "center", margin: "4px 0" }}>+</div>
                
                <div className="eq-part" style={{ width: "92%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--ink)', padding: '16px 20px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>People</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Specialist VAs who operate and improve those systems</span>
                </div>
                
                <div className="op" style={{ width: "92%", color: "var(--ink)", fontSize: "1.2rem", fontWeight: 600, textAlign: "center", margin: "4px 0" }}>+</div>
                
                <div className="eq-part" style={{ width: "92%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--coral)', padding: '16px 20px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Execution</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Consultancy, implementation and ongoing marketing</span>
                </div>
                
                <div className="op" style={{ width: "92%", color: "var(--ink)", fontSize: "1.2rem", fontWeight: 600, textAlign: "center", margin: "4px 0" }}>=</div>
                
                <div className="eq-part" style={{ width: "92%", backgroundColor: 'var(--ink)', border: "1px solid var(--ink)", padding: "16px 20px", borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", color: 'var(--warm-white)', fontFamily: "var(--serif)" }}>Growth</strong>
                  <span style={{ fontSize: "0.95rem", color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, display: "block" }}>A growth operation that works as one</span>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* 3. WHY GROWTH STALLS */}
        <section className="reveal-new" id="problem" style={{ padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid var(--light-sage)" }}>
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "clamp(40px, 8vw, 100px)" }}>
            <div className="split-head" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
              <span className="label" style={{ marginBottom: "24px" }}>Why growth stalls</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "32px", fontFamily: "var(--serif)" }}>Growth rarely stalls for one reason. It stalls in the gaps between things.</h2>
              <p className="mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)" }}>Marketing, sales tools, processes and people are usually bought, hired or started at different times. Each part may work on its own. The trouble is that nothing connects them, so leads, information and effort leak out between them.</p>
            </div>
            
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
              <li className="prob-item">
                <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--ink)" }}>The tools are there, but underused</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>A CRM was bought and never properly set up. Features that would save hours sit untouched, and the team works around the system instead of through it.</p>
              </li>
              <li className="prob-item">
                <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--ink)" }}>Marketing and sales do not talk to each other</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Campaigns bring in enquiries that nobody follows up consistently, so it becomes impossible to tell which spend is producing customers.</p>
              </li>
              <li className="prob-item">
                <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--ink)" }}>Too much of the work is manual</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Follow-ups, updates and reports depend on someone remembering. Repetitive work crowds out the work that actually grows the business.</p>
              </li>
              <li className="prob-item">
                <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--ink)" }}>The strategy is clear, the execution is not</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>The business knows what it should be doing. Nobody has the time or specialist skill to do it consistently.</p>
              </li>
              <li className="prob-item">
                <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--ink)" }}>The founder is carrying the operation</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Decisions, fixes and follow-ups route through one or two people, and growth slows to the pace they can manage.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. PHOTO 2 - Transition */}
        <div className="wrap reveal-new" style={{ padding: "clamp(40px, 6vw, 80px) 0", display: "flex", justifyContent: "center" }}>
           <img src="/people.jpeg" alt="Team collaboration" style={{ width: "100%", maxWidth: "1000px", borderRadius: "16px", border: "1px solid var(--light-sage)", boxShadow: "0 24px 48px rgba(0,0,0,0.05)", objectFit: "cover", aspectRatio: "16/7" }} />
        </div>

        {/* 5. THE SAGE KITE APPROACH */}
        <section className="tint reveal-new" id="approach" style={{ padding: "clamp(120px, 12vw, 160px) 0" }}>
          
          {/* Header Grid */}
          <div className="wrap approach-header-grid" style={{ marginBottom: "120px", display: "grid", gap: "80px 40px", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span className="label" style={{ marginBottom: 0, border: "none" }}>The Sage Kite approach</span>
            </div>
            <div style={{ textAlign: "center", padding: "0 20px" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", lineHeight: 1.05, fontFamily: "var(--serif)", color: "var(--ink)" }}>Business growth consulting that carries on past the advice</h2>
            </div>
            
            <div style={{ textAlign: "center", padding: "0 40px" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--dark-sage)", margin: 0 }}>Business growth consulting helps a business understand what is limiting its growth and decide what to change. Sage Kite also does the work that follows: we implement the systems, provide the people and carry out the execution, so the plan is proven in the business rather than left in a document.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ paddingLeft: "24px", borderLeft: "2px solid var(--butter)", maxWidth: "320px" }}>
                <p style={{ fontSize: "1.1rem", fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--ink)", margin: 0, lineHeight: 1.5 }}>Plans are easier to come by than ever. The hard part is making one work inside a real business, with its real tools and real team.</p>
              </div>
            </div>
          </div>
          
          {/* Cards Grid */}
          <div className="wrap">
            <div className="approach-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px, 3vw, 40px)" }}>
              
              <div className="clean-card" style={{ transform: "translateY(0)", background: "var(--warm-white)", borderRadius: "12px", padding: "40px 32px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 40px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sky)", marginBottom: "16px" }}>How work moves</div>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--serif)", marginBottom: "24px", color: "var(--ink)" }}>Systems</h3>
                <p style={{ color: "var(--dark-sage)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>Systems are how work moves through a business: how enquiries are captured, where customer information lives, what happens automatically and what needs a person.</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "40px", color: "var(--dark-sage)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem", listStyleType: "disc" }}>
                  <li>CRM setup, pipeline design and cleanup</li>
                  <li>Customer journeys and follow-up workflows</li>
                  <li>Marketing automation inside your CRM platform</li>
                  <li>AI consultancy on where AI can reduce repetitive work</li>
                  <li>Custom CRM development where a platform does not fit</li>
                </ul>
                <Link href="#what-we-do" className="text-link" style={{ fontWeight: 600, fontSize: "0.95rem" }}>Explore CRM implementation</Link>
              </div>

              <div className="clean-card" style={{ transform: "translateY(48px)", background: "var(--warm-white)", borderRadius: "12px", padding: "40px 32px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 40px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "16px" }}>Who runs it</div>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--serif)", marginBottom: "24px", color: "var(--ink)" }}>People</h3>
                <p style={{ color: "var(--dark-sage)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>People operate and improve the system every day. A well-built CRM still needs someone to keep records clean, run campaigns and follow up with leads.</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "40px", color: "var(--dark-sage)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem", listStyleType: "disc" }}>
                  <li>CRM and automation VA</li>
                  <li>Marketing operations VA</li>
                  <li>Email marketing VA</li>
                  <li>Social media VA</li>
                  <li>Lead generation and sales support VA</li>
                </ul>
                <Link href="#what-we-do" className="text-link" style={{ fontWeight: 600, fontSize: "0.95rem" }}>Explore specialist staffing</Link>
              </div>

              <div className="clean-card" style={{ transform: "translateY(96px)", background: "var(--warm-white)", borderRadius: "12px", padding: "40px 32px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 40px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--coral)", marginBottom: "16px" }}>What gets done</div>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--serif)", marginBottom: "24px", color: "var(--ink)" }}>Execution</h3>
                <p style={{ color: "var(--dark-sage)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>Execution turns a plan and a system into results over time: the consultancy, the implementation projects and the marketing that continues after launch.</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "40px", color: "var(--dark-sage)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem", listStyleType: "disc" }}>
                  <li>GTM consultancy and fractional CMO support</li>
                  <li>Fixed-price CRM implementation projects</li>
                  <li>SEO and AI SEO</li>
                  <li>Google Ads, Meta Ads and LinkedIn Ads</li>
                  <li>Email marketing, social media and maintenance</li>
                </ul>
                <Link href="#what-we-do" className="text-link" style={{ fontWeight: 600, fontSize: "0.95rem" }}>Explore marketing services</Link>
              </div>

            </div>
            
            {/* Footer Text */}
            <div style={{ marginTop: "160px", display: "flex", justifyContent: "center" }}>
              <div style={{ padding: "40px", borderTop: "1px solid var(--light-sage)", borderBottom: "1px solid var(--light-sage)", textAlign: "center", maxWidth: "800px", width: "100%" }}>
                <p className="together" style={{ fontSize: "1rem", lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>These are not three departments. A system without people falls out of use; people without a system repeat the same manual work; execution without either rarely lasts. Sage Kite scopes all three around the same commercial goal.</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* 6. HOW IT CONNECTS (TIMELINE) */}
        <section className="reveal-new" id="operation" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 8vw, 100px)" }}>
            <div className="split-head" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
              <span className="label" style={{ marginBottom: "24px" }}>How it connects</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "32px", fontFamily: "var(--serif)" }}>How CRM, marketing, AI and automation work together</h2>
              <p className="mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)", marginBottom: "48px" }}>Each capability does a different job. Growth depends on how well those jobs hand over to one another.</p>
              
              <div className="def-block" style={{ padding: "32px", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "12px" }}>What is a growth system?</h3>
                <p style={{ margin: 0, color: "var(--dark-sage)", lineHeight: 1.6 }}>A growth system is the connected set of tools, processes and people a business uses to attract, convert and keep customers. When the parts are connected, each one makes the others more effective.</p>
              </div>
            </div>
            
            <div style={{ padding: "24px 0 24px 24px" }}>
              <div className="timeline-node" style={{ '--hover-color': 'var(--butter)' } as React.CSSProperties}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "8px" }}>Direction</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Consultancy</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Decides what needs to change, in what order, and how it connects to the commercial goal.</p>
              </div>
              <div className="timeline-node" style={{ '--hover-color': 'var(--coral)' } as React.CSSProperties}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "8px" }}>Demand</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Marketing</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Brings in the right enquiries through search, AI search, paid ads, social media and email.</p>
              </div>
              <div className="timeline-node" style={{ '--hover-color': 'var(--sage)' } as React.CSSProperties}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "8px" }}>Relationships</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>CRM</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Holds customer information, sales processes and follow-up in one place, so every opportunity has an owner and a next step.</p>
              </div>
              <div className="timeline-node" style={{ '--hover-color': 'var(--sky)' } as React.CSSProperties}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "8px" }}>Leverage</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Automation and AI</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Automation moves work forward without anyone having to remember. Applied carefully, AI reduces repetitive work so teams do more with the resources they have.</p>
              </div>
              <div className="timeline-node" style={{ '--hover-color': 'var(--ink)' } as React.CSSProperties}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "8px" }}>Capability</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>People</h3>
                <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, margin: 0 }}>Specialists operate the system day to day and improve it as the business learns.</p>
              </div>
              <div className="timeline-node" style={{ '--hover-color': 'var(--ink)' } as React.CSSProperties}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "8px" }}>The outcome</div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "12px", fontFamily: "var(--serif)" }}>Growth</h3>
                <p style={{ color: "var(--ink)", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>Enquiries followed up, marketing that can be measured, less manual work and a business that is easier to sell from.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SERVICES */}
        <section className="rule-top reveal-new" id="what-we-do" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">Services</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "24px", fontFamily: "var(--serif)" }}>Five service areas, scoped around one growth operation</h2>
              <p className="lede mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)" }}>A client may need one of these or several. Most engagements begin with a scoped, fixed-price project and continue into maintenance, staffing or marketing where it is useful, each with its own clearly stated terms.</p>
            </div>
            
            <ul className="svc-list mt-large">
              <li className="svc" onClick={() => setOpenService(openService === 0 ? null : 0)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--butter)"}}></div>
                <div className="svc-kind">Direction</div>
                <div>
                  <h3>Consultancy</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 0 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 0 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "12px", paddingBottom: "8px" }} className="svc-content-inner">
                        <p>For businesses that need clarity before they spend more on tools, campaigns or hires. Recommended outputs include a growth diagnosis, priorities, an implementation roadmap and guidance on marketing decisions.</p>
                        <p className="mt"><strong>Includes:</strong> GTM consultancy, AI consultancy and fractional CMO support.</p>
                        <Link href="https://glasspane.pages.dev/services/consultancy" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore business growth consulting</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 1 ? null : 1)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--sky)"}}></div>
                <div className="svc-kind">Systems</div>
                <div>
                  <h3>CRM implementation</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 1 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 1 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "12px", paddingBottom: "8px" }} className="svc-content-inner">
                        <p>For businesses whose CRM is missing, messy or no longer fits how they sell. Setup, pipeline design, cleanup, feasible migrations, platform-native workflows, testing, training and handover.</p>
                        <p className="mt"><strong>Also:</strong> <Link href="https://glasspane.pages.dev/services/custom-crm-development" className="text-link" onClick={e => e.stopPropagation()}>custom CRM development</Link> built around your sales process and reporting needs.</p>
                        <Link href="https://glasspane.pages.dev/services/crm-implementation" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore CRM implementation services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 2 ? null : 2)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--coral)"}}></div>
                <div className="svc-kind">Execution</div>
                <div>
                  <h3>Marketing</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 2 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 2 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "12px", paddingBottom: "8px" }} className="svc-content-inner">
                        <p>An ongoing marketing plan built around your priorities and connected to the systems that show what each channel produced.</p>
                        <p className="mt"><strong>Includes:</strong> <Link href="https://glasspane.pages.dev/services/marketing#seo" className="text-link" onClick={e => e.stopPropagation()}>SEO</Link>, <Link href="https://glasspane.pages.dev/services/marketing#ai-seo" className="text-link" onClick={e => e.stopPropagation()}>AI SEO</Link>, Google Ads, Meta Ads, LinkedIn Ads, social media management and email marketing.</p>
                        <Link href="https://glasspane.pages.dev/services/marketing" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore marketing services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 3 ? null : 3)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--ink)"}}></div>
                <div className="svc-kind">People</div>
                <div>
                  <h3>Recruitment and staffing</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 3 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 3 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "12px", paddingBottom: "8px" }} className="svc-content-inner">
                        <p>Tier 1 virtual assistants for growth and automation work, so the systems a business invests in are used and maintained every day.</p>
                        <p className="mt"><strong>Roles:</strong> CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support.</p>
                        <Link href="https://glasspane.pages.dev/services/recruitment-staffing" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore recruitment and staffing</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 4 ? null : 4)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--sage)"}}></div>
                <div className="svc-kind">Agencies</div>
                <div>
                  <h3>White-label delivery</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 4 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 4 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "12px", paddingBottom: "8px" }} className="svc-content-inner">
                        <p>Agreed services fulfilled for marketing agencies under the agency's own brand, with scope, communication and handover defined for each engagement.</p>
                        <Link href="https://glasspane.pages.dev/for-agencies" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore white-label delivery</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="maint mt-large" style={{borderTop: "1px solid var(--light-sage)", paddingTop: "40px"}}>
              <b style={{ fontSize: "1.1rem" }}>After handover</b>
              <p style={{margin: 0, color: "var(--dark-sage)", lineHeight: 1.6, maxWidth: "65ch" }}>Maintenance with a defined support scope, including ownership and boundaries for changes, connects each project to ongoing support and execution.</p>
            </div>
          </div>
        </section>

        {/* 8/9. PHOTO 3 & SMEs */}
        <section className="tint reveal-new" id="who" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 6vw, 80px)" }}>
            
            <div style={{ maxWidth: "75ch" }}>
              <span className="label" style={{ marginBottom: "24px" }}>Who Sage Kite helps</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "24px", fontFamily: "var(--serif)", color: "var(--ink)" }}>For SMEs whose growth has become harder to manage</h2>
              <p className="mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)", margin: 0 }}>Sage Kite works with small and medium-sized businesses in the United States, Canada, Europe, Australia and New Zealand that need to improve one part of their growth operation, or bring the whole function together.</p>
            </div>
            
            <div style={{ width: "88%", marginLeft: "auto", position: "relative" }}>
               <img src="/sme_section.jpeg" alt="Small business team" style={{ width: "100%", borderRadius: "12px", border: "1px solid var(--light-sage)", objectFit: "cover", aspectRatio: "21/9" }} />
            </div>
            
            <div style={{ marginTop: "16px" }}>
              <h3 style={{fontSize: "1.1rem", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink)"}}>It is usually a good fit when:</h3>
              <ul className="sme-checklist" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 64px" }}>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Growth has become messy and hard to see clearly</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Your systems do not talk to each other</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>The CRM is underused or distrusted</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Marketing is disconnected from sales</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Too much work is done by hand</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Tools were bought but never properly implemented</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>The team lacks operational capacity</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>The founder is carrying too much of the operation</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. PLATFORMS & INDUSTRIES */}
        <section className="reveal-new" id="platforms" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap">
            <div className="section-head" style={{ maxWidth: "70ch", marginBottom: "80px", textAlign: "center", margin: "0 auto 80px" }}>
              <span className="label" style={{ marginBottom: "24px", justifyContent: "center" }}>Platforms and industries</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "24px", fontFamily: "var(--serif)" }}>Start from your platform or your industry</h2>
              <p className="mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)" }}>Many businesses first come to Sage Kite with a specific tool or a problem particular to their sector. Those pages go deeper. The same approach to systems, people and execution sits behind each one.</p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 8vw, 80px)" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--serif)" }}>Platforms we implement and improve</h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--dark-sage)", marginBottom: "32px" }}>We work in established CRMs and industry systems. Every engagement starts by confirming what is feasible on your account.</p>
                <dl style={{ display: "flex", flexDirection: "column", gap: "24px", borderTop: "1px solid var(--light-sage)", paddingTop: "24px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Cross-industry</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>GoHighLevel, Keap, custom CRM development</dd>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Real estate</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Follow Up Boss, Lofty</dd>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Home services</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>ServiceTitan, Housecall Pro, Jobber</dd>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Coaching and courses</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Kajabi</dd>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Law firms</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Clio Grow</dd>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Service businesses</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Dubsado</dd>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Fitness and wellness</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Mindbody</dd>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "16px" }}>
                    <dt style={{ fontWeight: 600, color: "var(--ink)" }}>Nonprofits</dt>
                    <dd style={{ color: "var(--dark-sage)", margin: 0 }}>Bloomerang</dd>
                  </div>
                </dl>
                <p className="route-foot" style={{ fontSize: "0.85rem", color: "var(--dark-sage)", marginTop: "32px", padding: "16px", background: "rgba(0,0,0,0.02)", borderRadius: "8px" }}>Groupings reflect common use, not a limit on who each platform serves. GoHighLevel implementation is delivered with GHL Scale Up. <Link href="https://glasspane.pages.dev/platforms" className="text-link" style={{ marginLeft: "8px" }}>Browse supported platforms</Link></p>
              </div>
              
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--serif)" }}>Industries we focus on</h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--dark-sage)", marginBottom: "32px" }}>Each industry page explains the customer journey in that market and the services that support it.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
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
                  <Link href="https://glasspane.pages.dev/industries/law-firms" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Law firms</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Client intake and consultation follow-up</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/fitness-wellness" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Fitness and wellness</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Trial enquiries, membership conversion and retention</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/nonprofits" className="ind-card">
                    <strong style={{ fontSize: "1.1rem" }}>Nonprofits</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.4 }}>Donor records, segmentation and follow-up</span>
                  </Link>
                </div>
                <Link href="https://glasspane.pages.dev/industries" className="text-link" style={{display: "inline-block", fontSize: "1rem", fontWeight: 600, marginTop: "32px"}}>See all industries</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 11. PROCESS */}
        <section className="reveal-new" id="process" style={{ padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid var(--light-sage)", overflow: "hidden" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.05, marginBottom: "80px", fontFamily: "var(--serif)", color: "var(--ink)", maxWidth: "15ch" }}>
              From first<br />conversation to<br />ongoing work
            </h2>
            
            <div style={{ position: "relative" }}>
              {/* The continuous horizontal line */}
              <div style={{ position: "absolute", top: "12px", left: 0, width: "100%", height: "1px", background: "var(--coral)", zIndex: 1 }}></div>

              <ul className="timeline-grid" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "24px", position: "relative", zIndex: 2, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "24px" }}>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>01</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Enquiry</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>A first conversation about where growth is getting stuck.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>02</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Discovery</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>A look at the systems, the team and the work as it runs today.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>03</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Proposal</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Scope, sequence and cost, written against what discovery found.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>04</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Implementation</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>The build and the delivery, done inside your tools.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>05</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Handover</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Documentation and training so the team can run it without us.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>06</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Maintenance</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Keeping what was built working as the business changes.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>07</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Ongoing work</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Continued delivery where it is useful, ended where it is not.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. EVIDENCE */}
        <section className="tint reveal-new" id="evidence" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap">
            <div className="section-head" style={{ maxWidth: "70ch", marginBottom: "80px", textAlign: "center", margin: "0 auto 80px" }}>
              <span className="label" style={{ marginBottom: "24px", justifyContent: "center" }}>Work and experience</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "24px", fontFamily: "var(--serif)" }}>Evidence, shown with its context</h2>
              <p className="lede mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)" }}>Each example will state its origin, what the specialist did, the delivery period and the basis for any result. Sample builds will be labelled as demonstrations. Numbers that cannot be supported will not appear here.</p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {/* Card 1 */}
              <div className="proof-new" style={{ '--edge-color': 'var(--sky)', transform: 'translateY(0)' } as React.CSSProperties}>
                <span style={{ padding: "6px 12px", background: "rgba(138, 182, 214, 0.15)", color: "var(--sky)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, borderRadius: "4px", alignSelf: "flex-start", marginBottom: "24px" }}>Systems</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", fontFamily: "var(--serif)", lineHeight: 1.3 }}>[Verified example to be added]</h3>
                <dl style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1, margin: 0 }}>
                  <div>
                    <dt style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dark-sage)", marginBottom: "4px" }}>Starting situation</dt>
                    <dd style={{ margin: 0, color: "var(--ink)", fontWeight: 500 }}>[Business type and problem]</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dark-sage)", marginBottom: "4px" }}>Specialist's role</dt>
                    <dd style={{ margin: 0, color: "var(--ink)", fontWeight: 500 }}>[Contribution and work completed]</dd>
                  </div>
                </dl>
              </div>

              {/* Card 2 */}
              <div className="proof-new" style={{ '--edge-color': 'var(--coral)', transform: 'translateY(24px)' } as React.CSSProperties}>
                <span style={{ padding: "6px 12px", background: "rgba(224, 122, 95, 0.15)", color: "var(--coral)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, borderRadius: "4px", alignSelf: "flex-start", marginBottom: "24px" }}>Execution</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", fontFamily: "var(--serif)", lineHeight: 1.3 }}>[Verified example to be added]</h3>
                <dl style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1, margin: 0 }}>
                  <div>
                    <dt style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dark-sage)", marginBottom: "4px" }}>Starting situation</dt>
                    <dd style={{ margin: 0, color: "var(--ink)", fontWeight: 500 }}>[Business type and problem]</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dark-sage)", marginBottom: "4px" }}>Specialist's role</dt>
                    <dd style={{ margin: 0, color: "var(--ink)", fontWeight: 500 }}>[Contribution and work completed]</dd>
                  </div>
                </dl>
              </div>

              {/* Card 3 */}
              <div className="proof-new" style={{ '--edge-color': 'var(--butter)', transform: 'translateY(48px)' } as React.CSSProperties}>
                <span style={{ padding: "6px 12px", background: "rgba(242, 204, 143, 0.25)", color: "var(--ink)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, borderRadius: "4px", alignSelf: "flex-start", marginBottom: "24px" }}>People</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", fontFamily: "var(--serif)", lineHeight: 1.3 }}>[Verified example to be added]</h3>
                <dl style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1, margin: 0 }}>
                  <div>
                    <dt style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dark-sage)", marginBottom: "4px" }}>Starting situation</dt>
                    <dd style={{ margin: 0, color: "var(--ink)", fontWeight: 500 }}>[Business type and problem]</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dark-sage)", marginBottom: "4px" }}>Specialist's role</dt>
                    <dd style={{ margin: 0, color: "var(--ink)", fontWeight: 500 }}>[Contribution and work completed]</dd>
                  </div>
                </dl>
              </div>
            </div>
            
            <div style={{ textAlign: "center", marginTop: "100px" }}>
              <Link href="https://glasspane.pages.dev/work" className="text-link" style={{ fontWeight: 600, fontSize: "1rem" }}>See work and specialist experience</Link>
            </div>
          </div>
        </section>

        {/* 13. LIBRARY */}
        <section className="reveal-new" id="journal" style={{ background: "var(--ink)", color: "var(--warm-white)", padding: "clamp(100px, 12vw, 160px) 0" }}>
          <div className="wrap">
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "80px", maxWidth: "800px" }}>
              <span className="label" style={{ color: "var(--sage)", borderColor: "var(--sage)" }}>The Sage Kite Library</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontFamily: "var(--serif)", color: "var(--warm-white)", lineHeight: 1.1 }}>We write about how growth actually works</h2>
              <div>
                <p style={{ fontSize: "1.5rem", fontFamily: "var(--serif)", color: "var(--light-sage)", marginBottom: "24px" }}>Building became cheap. Distribution did not.</p>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.7)" }}>The Library is where Sage Kite thinks in public about marketing, systems, AI and selling: essays, field notes and practical guides, written to be useful whether or not you ever work with us.</p>
              </div>
            </div>
            
            <div className="lib-grid-new">
              <article style={{ padding: "48px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", transition: "transform 0.4s ease", cursor: "pointer" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-8px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <span style={{ color: "var(--sage)", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem", fontWeight: 600, marginBottom: "24px" }}>Founder's Thoughts</span>
                <h3 style={{ fontSize: "2.5rem", fontFamily: "var(--serif)", marginBottom: "24px", color: "var(--warm-white)", lineHeight: 1.2 }}>[First published article title]</h3>
                <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, flex: 1, margin: 0 }}>[Short introduction from the published article]</p>
                <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ color: "var(--warm-white)", marginBottom: "8px", fontWeight: 500 }}>Occasional essays by Aryan, Sage Kite's founder.</p>
                  <p style={{ color: "var(--sage)", fontSize: "0.9rem" }}>[Publication date]</p>
                </div>
              </article>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
                <li style={{ padding: "32px", borderTop: "2px solid var(--sage)", background: "rgba(255,255,255,0.02)", borderRadius: "0 0 8px 8px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: "12px" }}>Growth systems</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>Why do funnels, teams and processes fail between interest and revenue?</p>
                </li>
                <li style={{ padding: "32px", borderTop: "2px solid var(--coral)", background: "rgba(255,255,255,0.02)", borderRadius: "0 0 8px 8px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: "12px" }}>Automation and CRM</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>Where should a system route, respond and hand off to a person?</p>
                </li>
                <li style={{ padding: "32px", borderTop: "2px solid var(--sky)", background: "rgba(255,255,255,0.02)", borderRadius: "0 0 8px 8px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: "12px" }}>Search and discovery</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>How do SEO, answer engines and AI citations shape demand?</p>
                </li>
                <li style={{ padding: "32px", borderTop: "2px solid var(--butter)", background: "rgba(255,255,255,0.02)", borderRadius: "0 0 8px 8px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: "12px" }}>AI and distribution</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>How do attention and selling change when building becomes abundant?</p>
                </li>
                <li style={{ padding: "32px", borderTop: "2px solid var(--light-sage)", background: "rgba(255,255,255,0.02)", borderRadius: "0 0 8px 8px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: "12px" }}>Teams and staffing</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>Which roles become more valuable, and how should teams be designed now?</p>
                </li>
                <li style={{ padding: "32px", borderTop: "2px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.02)", borderRadius: "0 0 8px 8px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: "12px" }}>Field notes</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>What did real work reveal that a generic playbook would miss?</p>
                </li>
              </ul>
            </div>
            
            <div style={{ marginTop: "80px", display: "flex", gap: "32px", flexWrap: "wrap" }}>
              <Link href="https://glasspane.pages.dev/insights" className="text-link" style={{ color: "var(--warm-white)", fontWeight: 600 }}>Read the Sage Kite Library</Link>
              <Link href="https://glasspane.pages.dev/insights/founders-thoughts" className="text-link" style={{ color: "var(--warm-white)", fontWeight: 600 }}>Read Founder's Thoughts</Link>
            </div>
          </div>
        </section>

        {/* AGENCIES */}
        <section className="reveal-new" id="agencies" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap">
            <div style={{ backgroundColor: "var(--pale-sage)", padding: "clamp(48px, 8vw, 80px)", borderRadius: "16px", display: "flex", flexWrap: "wrap", gap: "48px", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontFamily: "var(--serif)", margin: 0, color: "var(--ink)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>For marketing<br />agencies</h2>
              <div style={{ maxWidth: "50ch" }}>
                <p style={{ margin: "0 0 32px", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--ink)" }}>Agencies can use Sage Kite for specialist white-label fulfilment. We deliver agreed services under your brand, with scope, client communication, project ownership and handover defined before work begins.</p>
                <Link className="text-link" href="https://glasspane.pages.dev/for-agencies" style={{ fontWeight: "600", fontSize: "1rem" }}>White-label delivery for agencies</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="reveal-new" id="faq" style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
          <div className="wrap faq-grid">
            
            {/* Left Column - Intro & Visual */}
            <div style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
              <span className="label" style={{ marginBottom: "20px", display: "block" }}>In brief</span>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 4vw, 3.2rem)", color: "var(--ink)", lineHeight: 1.1, marginBottom: "40px", maxWidth: "100%" }}>Sage Kite, explained plainly</h2>
              
              {/* Subtle visual element: Abstract System Workflow */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", opacity: 0.8 }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--sky)", background: "transparent" }}></div>
                <div style={{ height: "1px", width: "40px", backgroundColor: "var(--light-sage)" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--ink)", background: "var(--ink)" }}></div>
                <div style={{ height: "1px", width: "40px", backgroundColor: "var(--light-sage)" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--coral)" }}></div>
              </div>
            </div>
            
            {/* Right Column - Accordion */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              
              {/* Item 1 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                <div className="faq-q">
                  <h3>What is Sage Kite?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 1 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 1 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 1 ? "1fr" : "0fr", opacity: openFaq === 1 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                <div className="faq-q">
                  <h3>What does Sage Kite do?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 2 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 2 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 2 ? "1fr" : "0fr", opacity: openFaq === 2 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>It advises on growth through GTM consultancy, AI consultancy and fractional CMO support; implements CRM systems and automation; runs marketing; and provides specialist virtual assistants to operate those systems.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                <div className="faq-q">
                  <h3>Does Sage Kite implement as well as advise?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 3 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 3 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 3 ? "1fr" : "0fr", opacity: openFaq === 3 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Yes. Implementation projects are scoped after discovery and delivered at a fixed price, followed by handover and optional maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                <div className="faq-q">
                  <h3>Is Sage Kite a CRM company or a marketing agency?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 4 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 4 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 4 ? "1fr" : "0fr", opacity: openFaq === 4 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Neither. CRM and marketing are two of the capabilities Sage Kite uses, alongside consultancy, automation and specialist people, to make growth work as one system.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}>
                <div className="faq-q">
                  <h3>Who does Sage Kite work with?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 5 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 5 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 5 ? "1fr" : "0fr", opacity: openFaq === 5 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>SMEs in the United States, Canada, Europe, Australia and New Zealand, and marketing agencies that need a white-label delivery partner.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="faq-item" style={{ borderBottom: "none" }} onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}>
                <div className="faq-q">
                  <h3>How do I start?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 6 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 6 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 6 ? "1fr" : "0fr", opacity: openFaq === 6 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Book a discovery call. It covers your current process, the outcome you want and whether Sage Kite is the right fit.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-section reveal-new" id="contact">
          <div className="cta-bg-text">SAGE KITE</div>
          <div className="wrap" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem, 5vw, 4.5rem)", marginBottom: "32px", lineHeight: 1.1 }}>Tell us where growth<br />is getting stuck.</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, maxWidth: "60ch", marginBottom: "48px" }}>It might be the CRM, the marketing, the manual work or the lack of hands to do it. A discovery call is where we work out what to look at first, and whether Sage Kite is the right partner.</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
              <Link className="btn" href="https://glasspane.pages.dev/contact" style={{ backgroundColor: "var(--coral)", color: "var(--ink)", borderColor: "var(--coral)", padding: "20px 40px", fontSize: "1.1rem" }}>Book a discovery call</Link>
              <Link className="text-link" href="https://glasspane.pages.dev/insights" style={{ fontWeight: "600", fontSize: "1rem", color: "var(--warm-white)" }}>Or read the Library first</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{ padding: "100px 0 40px", background: "var(--warm-white)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "64px" }}>
          
          <div style={{ paddingRight: "clamp(20px, 4vw, 60px)" }}>
            <Link className="logo" href="/" aria-label="Sage Kite home">
              <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" style={{ maxWidth: "160px" }} />
            </Link>
            <p style={{ color: "var(--dark-sage)", fontSize: "1rem", lineHeight: 1.6, marginTop: "32px", maxWidth: "40ch" }}>Sage Kite is a business growth consultancy. We improve the systems, people and execution behind growth for SMEs, and deliver white-label work for agencies.</p>
          </div>
          
          <div>
            <h2 style={{ color: "var(--ink)", marginBottom: "32px", fontWeight: "600", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Services</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="https://glasspane.pages.dev/services/consultancy" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Business growth consulting</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/crm-implementation" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>CRM implementation</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/custom-crm-development" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Custom CRM development</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/marketing" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Marketing</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/recruitment-staffing" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Recruitment and staffing</Link></li>
              <li><Link href="https://glasspane.pages.dev/for-agencies" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>White-label delivery</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "var(--ink)", marginBottom: "32px", fontWeight: "600", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Explore</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="https://glasspane.pages.dev/platforms" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Platforms</Link></li>
              <li><Link href="https://glasspane.pages.dev/industries" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Industries</Link></li>
              <li><Link href="https://glasspane.pages.dev/work" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Work</Link></li>
              <li><Link href="https://glasspane.pages.dev/insights" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Insights</Link></li>
              <li><Link href="https://glasspane.pages.dev/insights/founders-thoughts" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Founder's Thoughts</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "var(--ink)", marginBottom: "32px", fontWeight: "600", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Company</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="https://glasspane.pages.dev/about" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>About</Link></li>
              <li><Link href="https://glasspane.pages.dev/contact" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>Contact</Link></li>
              <li><Link href="https://glasspane.pages.dev/privacy" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>[Privacy policy]</Link></li>
              <li><Link href="https://glasspane.pages.dev/terms" style={{ color: "var(--dark-sage)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color='var(--ink)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--dark-sage)'}>[Terms]</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="wrap">
          <div style={{ borderTop: "1px solid var(--light-sage)", marginTop: "80px", paddingTop: "32px", display: "flex", justifyContent: "space-between", color: "var(--dark-sage)", fontSize: "0.9rem" }}>
            <p style={{ margin: 0 }}>© [Year] Sage Kite. [Registered legal entity and details]</p>
            <p style={{ margin: 0 }}>Streamlined systems for growth.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
