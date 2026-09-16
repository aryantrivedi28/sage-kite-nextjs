"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [perspectiveHover, setPerspectiveHover] = useState<string | null>(null);
  const [osHover, setOsHover] = useState<'none'|'systems'|'people'|'execution'>('none');

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
              <li><Link href="/#agencies" onClick={() => setMenuOpen(false)}>For agencies</Link></li>
              <li><Link href="/#insights" onClick={() => setMenuOpen(false)}>Insights</Link></li>
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
        {/* 1. Hero */}
        <section className="hero" style={{padding: "clamp(56px, 8vw, 88px) 0"}}>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="label">About Sage Kite</div>
              <h1 style={{fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15, marginBottom: "24px", color: "var(--ink)", fontFamily: "var(--serif)"}}>We believe good businesses deserve better systems behind them.</h1>
              <p className="lede">Sage Kite exists to help growing businesses make sense of the increasingly complicated world around them — technology, marketing, automation, AI and people.</p>
              <p className="lede">We work with businesses that have already started growing but have reached the point where the way they operate needs to catch up.</p>
              
              <div className="cta-row" style={{marginTop: "40px"}}>
                <a className="btn" href="#our-story">Meet Sage Kite</a>
                <Link className="text-link" href="https://glasspane.pages.dev/contact">Start a conversation</Link>
              </div>
            </div>
            
            {/* Business OS Typographic Diagram */}
            <div style={{position: "relative", padding: "16px 0", maxWidth: "420px", width: "100%"}}>
               {/* SYSTEMS */}
               <div className="reveal" style={{position: "relative", zIndex: 2, paddingBottom: "40px", animationDelay: "0ms"}}>
                  {/* Node Dot */}
                  <div style={{position: "absolute", left: "0", top: "6px", width: "10px", height: "10px", borderRadius: "50%", background: "var(--sky)", zIndex: 2}}></div>
                  {/* Vertical Drop Line */}
                  <div style={{position: "absolute", left: "4px", top: "12px", width: "2px", height: "100%", background: "var(--light-sage)", zIndex: 1}}></div>
                  
                  <div 
                     onMouseEnter={() => setOsHover('systems')} onMouseLeave={() => setOsHover('none')}
                     style={{paddingLeft: "32px", opacity: osHover !== 'none' && osHover !== 'systems' ? 0.3 : 1, transition: "opacity 0.4s ease"}}
                  >
                     <div style={{fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.1em", color: "var(--sky)", marginBottom: "16px"}}>SYSTEMS</div>
                     <div style={{display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "0.95rem", color: osHover === 'systems' ? "var(--ink)" : "var(--sage)", transition: "color 0.4s ease", fontWeight: "500"}}>
                        <span>CRM</span><span>AUTOMATION</span><span>DATA</span><span>AI</span>
                     </div>
                  </div>
               </div>

               {/* PEOPLE */}
               <div className="reveal" style={{position: "relative", zIndex: 2, paddingBottom: "40px", marginLeft: "40px", animationDelay: "150ms"}}>
                  {/* Horizontal connecting line from previous spine */}
                  <div style={{position: "absolute", left: "-36px", top: "10px", width: "40px", height: "2px", background: "var(--light-sage)", zIndex: 1}}></div>
                  {/* Node Dot */}
                  <div style={{position: "absolute", left: "0", top: "6px", width: "10px", height: "10px", borderRadius: "50%", background: "var(--ink)", zIndex: 2}}></div>
                  {/* Vertical Drop Line */}
                  <div style={{position: "absolute", left: "4px", top: "12px", width: "2px", height: "100%", background: "var(--light-sage)", zIndex: 1}}></div>
                  
                  <div 
                     onMouseEnter={() => setOsHover('people')} onMouseLeave={() => setOsHover('none')}
                     style={{paddingLeft: "32px", opacity: osHover !== 'none' && osHover !== 'people' ? 0.3 : 1, transition: "opacity 0.4s ease"}}
                  >
                     <div style={{fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.1em", color: "var(--ink)", marginBottom: "16px"}}>PEOPLE</div>
                     <div style={{display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "0.95rem", color: osHover === 'people' ? "var(--ink)" : "var(--sage)", transition: "color 0.4s ease", fontWeight: "500"}}>
                        <span>MARKETING</span><span>SALES</span><span>OPERATIONS</span>
                     </div>
                  </div>
               </div>

               {/* EXECUTION */}
               <div className="reveal" style={{position: "relative", zIndex: 2, marginLeft: "80px", animationDelay: "300ms"}}>
                  {/* Horizontal connecting line from previous spine */}
                  <div style={{position: "absolute", left: "-36px", top: "10px", width: "40px", height: "2px", background: "var(--light-sage)", zIndex: 1}}></div>
                  {/* Node Dot */}
                  <div style={{position: "absolute", left: "0", top: "6px", width: "10px", height: "10px", borderRadius: "50%", background: "var(--coral)", zIndex: 2}}></div>
                  
                  <div 
                     onMouseEnter={() => setOsHover('execution')} onMouseLeave={() => setOsHover('none')}
                     style={{paddingLeft: "32px", opacity: osHover !== 'none' && osHover !== 'execution' ? 0.3 : 1, transition: "opacity 0.4s ease"}}
                  >
                     <div style={{fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.1em", color: "var(--coral)", marginBottom: "16px"}}>EXECUTION</div>
                     <div style={{display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "0.95rem", color: osHover === 'execution' ? "var(--ink)" : "var(--sage)", transition: "color 0.4s ease", fontWeight: "500"}}>
                        <span>STRATEGY</span><span>IMPLEMENTATION</span><span>IMPROVEMENT</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. Our Story */}
        <section className="rule-top reveal" id="our-story" style={{padding: "clamp(56px, 8vw, 88px) 0"}}>
          <div className="wrap split">
            <div className="split-head">
              <span className="label">Our Story</span>
              <h2>Sage Kite was built around a simple observation.</h2>
            </div>
            <div>
              <p className="lede" style={{marginTop: 0, marginBottom: "40px"}}>As businesses grow, complexity grows with them.</p>
              
              <div style={{display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontStyle: "italic", color: "var(--ink)", marginBottom: "48px"}}>
                <div className="reveal" style={{marginLeft: "0%", animationDelay: "0ms"}}>Customers <span style={{color: "var(--sage)", fontSize: "1.2rem", fontStyle: "normal"}}>↓</span></div>
                <div className="reveal" style={{marginLeft: "8%", animationDelay: "100ms"}}>Conversations <span style={{color: "var(--sage)", fontSize: "1.2rem", fontStyle: "normal"}}>↓</span></div>
                <div className="reveal" style={{marginLeft: "16%", animationDelay: "200ms"}}>Systems <span style={{color: "var(--sage)", fontSize: "1.2rem", fontStyle: "normal"}}>↓</span></div>
                <div className="reveal" style={{marginLeft: "24%", animationDelay: "300ms"}}>Processes <span style={{color: "var(--sage)", fontSize: "1.2rem", fontStyle: "normal"}}>↓</span></div>
                <div className="reveal" style={{marginLeft: "32%", animationDelay: "400ms"}}>People <span style={{color: "var(--sage)", fontSize: "1.2rem", fontStyle: "normal"}}>↓</span></div>
                <div className="reveal" style={{marginLeft: "40%", color: "var(--coral)", animationDelay: "500ms"}}>Complexity</div>
              </div>

              <div style={{fontSize: "1.1rem", lineHeight: 1.65, display: "flex", flexDirection: "column", gap: "24px"}}>
                <p style={{margin: 0}}>And eventually, what once felt manageable starts becoming difficult to see clearly.</p>
                <p style={{margin: 0}}>Businesses don't necessarily need another tool or another strategy document. Often, they need someone to step back and understand how everything is working together.</p>
                <p style={{margin: 0}}>That is where Sage Kite sits. We bring together strategic thinking, technology, marketing and people to help businesses build an operation that can actually support the next stage of growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why We Started */}
        <section className="tint reveal" id="why-we-exist" style={{padding: "clamp(56px, 8vw, 88px) 0"}}>
          <div className="wrap split" style={{alignItems: "center"}}>
            <div className="split-head" style={{paddingRight: "24px"}}>
              <span className="label">Why We Exist</span>
              <h2 style={{fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.1, marginBottom: "24px"}}>There is too much distance between advice and execution.</h2>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'stretch', width: '100%', padding: '20px 0', overflowX: "auto" }}>
              {/* Left Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1, position: 'relative', minWidth: "160px" }}>
                <div className="reveal" style={{ position: 'relative', paddingRight: '24px', animationDelay: '0ms' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.06em', color: 'var(--ink)' }}>CONSULTANCY</div>
                  <div style={{ fontSize: '1rem', color: 'var(--sage)' }}>Recommendations</div>
                  <div style={{ position: 'absolute', top: '50%', right: '0', width: '24px', height: '1px', background: 'var(--light-sage)' }}></div>
                </div>
                <div className="reveal" style={{ position: 'relative', paddingRight: '24px', animationDelay: '100ms' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.06em', color: 'var(--ink)' }}>AGENCY</div>
                  <div style={{ fontSize: '1rem', color: 'var(--sage)' }}>Marketing channels</div>
                  <div style={{ position: 'absolute', top: '50%', right: '0', width: '24px', height: '1px', background: 'var(--light-sage)' }}></div>
                </div>
                <div className="reveal" style={{ position: 'relative', paddingRight: '24px', animationDelay: '200ms' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.06em', color: 'var(--ink)' }}>TECHNOLOGY</div>
                  <div style={{ fontSize: '1rem', color: 'var(--sage)' }}>Implementation</div>
                  <div style={{ position: 'absolute', top: '50%', right: '0', width: '24px', height: '1px', background: 'var(--light-sage)' }}></div>
                </div>
                <div className="reveal" style={{ position: 'relative', paddingRight: '24px', animationDelay: '300ms' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.06em', color: 'var(--ink)' }}>STAFFING</div>
                  <div style={{ fontSize: '1rem', color: 'var(--sage)' }}>People</div>
                  <div style={{ position: 'absolute', top: '50%', right: '0', width: '24px', height: '1px', background: 'var(--light-sage)' }}></div>
                </div>
                
                {/* Vertical Spine */}
                <div className="reveal" style={{ position: 'absolute', top: '24px', bottom: '24px', right: '0', width: '1px', background: 'var(--light-sage)', animationDelay: '400ms' }}></div>
              </div>

              {/* Middle Connector */}
              <div className="reveal" style={{ width: '40px', position: 'relative', animationDelay: '500ms' }}>
                <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '1px', background: 'var(--light-sage)' }}></div>
                <div style={{ position: 'absolute', top: '50%', right: '-4px', transform: 'translateY(-50%)', color: 'var(--light-sage)' }}>→</div>
              </div>

              {/* Destination */}
              <div className="reveal" style={{ flex: 1.2, display: 'flex', alignItems: 'center', paddingLeft: '16px', animationDelay: '600ms', minWidth: "220px" }}>
                <div style={{ background: 'var(--warm-white)', borderTop: '4px solid var(--coral)', borderLeft: '1px solid var(--light-sage)', borderRight: '1px solid var(--light-sage)', borderBottom: '1px solid var(--light-sage)', padding: '32px', width: '100%' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', letterSpacing: '0.02em', marginBottom: '24px', color: 'var(--ink)' }}>SAGE KITE</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '1.05rem', color: 'var(--dark-sage)', fontWeight: '500' }}>
                    <div><span style={{color: "var(--coral)", marginRight: "8px"}}>+</span>Strategy</div>
                    <div><span style={{color: "var(--coral)", marginRight: "8px"}}>+</span>Systems</div>
                    <div><span style={{color: "var(--coral)", marginRight: "8px"}}>+</span>People</div>
                    <div><span style={{color: "var(--coral)", marginRight: "8px"}}>+</span>Execution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="wrap" style={{marginTop: "80px"}}>
            <div style={{maxWidth: "80ch", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px"}}>
              <p style={{fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontStyle: "italic", lineHeight: 1.3, color: "var(--ink)", margin: 0, textAlign: "center"}}>
                Sage Kite was created around the belief that these things should not have to exist in isolation.
              </p>
              <p style={{fontSize: "1.15rem", lineHeight: 1.65, color: "var(--dark-sage)", margin: 0, textAlign: "center"}}>
                A business should be able to understand what needs changing, build the right systems, find the people to operate them and actually execute the work. That is the gap Sage Kite is designed to fill.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Our Philosophy */}
        <section className="rule-top reveal" id="philosophy" style={{padding: "clamp(56px, 8vw, 88px) 0"}}>
          <div className="wrap split">
            <div className="split-head">
              <span className="label">What We Believe</span>
              <h2>Technology changes quickly. Good business principles don't.</h2>
            </div>
            
            <div style={{display: "flex", flexDirection: "column", gap: "56px"}}>
              <div style={{display: "grid", gridTemplateColumns: "64px 1fr", gap: "24px", alignItems: "start"}}>
                <div style={{fontFamily: "var(--serif)", fontSize: "3.5rem", lineHeight: 0.9, color: "var(--sky)"}}>01</div>
                <div>
                  <h3 style={{fontSize: "1.6rem", marginBottom: "12px"}}>Keep things useful</h3>
                  <p style={{fontSize: "1.1rem", lineHeight: "1.6", margin: 0}}>We are not interested in technology for technology's sake. A system is valuable when it makes someone's work easier, gives a business better visibility or helps something happen that otherwise would not.</p>
                </div>
              </div>

              <div style={{display: "grid", gridTemplateColumns: "64px 1fr", gap: "24px", alignItems: "start"}}>
                <div style={{fontFamily: "var(--serif)", fontSize: "3.5rem", lineHeight: 0.9, color: "var(--coral)"}}>02</div>
                <div>
                  <h3 style={{fontSize: "1.6rem", marginBottom: "12px"}}>Start with the business</h3>
                  <p style={{fontSize: "1.1rem", lineHeight: "1.6", margin: 0}}>We don't start with a favourite tool and try to fit the business around it. We start with the way the business actually works and then determine what should change.</p>
                </div>
              </div>

              <div style={{display: "grid", gridTemplateColumns: "64px 1fr", gap: "24px", alignItems: "start"}}>
                <div style={{fontFamily: "var(--serif)", fontSize: "3.5rem", lineHeight: 0.9, color: "var(--butter)"}}>03</div>
                <div>
                  <h3 style={{fontSize: "1.6rem", marginBottom: "12px"}}>Make complexity understandable</h3>
                  <p style={{fontSize: "1.1rem", lineHeight: "1.6", margin: 0}}>Business technology can become unnecessarily complicated. Our job is partly to remove that complexity and give people a clear understanding of what is happening and why.</p>
                </div>
              </div>

              <div style={{display: "grid", gridTemplateColumns: "64px 1fr", gap: "24px", alignItems: "start"}}>
                <div style={{fontFamily: "var(--serif)", fontSize: "3.5rem", lineHeight: 0.9, color: "var(--sage)"}}>04</div>
                <div>
                  <h3 style={{fontSize: "1.6rem", marginBottom: "12px"}}>Build for real people</h3>
                  <p style={{fontSize: "1.1rem", lineHeight: "1.6", margin: 0}}>A perfect process on paper is useless if nobody follows it. Systems need to work for the people using them every day.</p>
                </div>
              </div>
              
              <div style={{display: "grid", gridTemplateColumns: "64px 1fr", gap: "24px", alignItems: "start"}}>
                <div style={{fontFamily: "var(--serif)", fontSize: "3.5rem", lineHeight: 0.9, color: "var(--ink)"}}>05</div>
                <div>
                  <h3 style={{fontSize: "1.6rem", marginBottom: "12px"}}>Leave things better than we found them</h3>
                  <p style={{fontSize: "1.1rem", lineHeight: "1.6", margin: 0}}>Every engagement should leave the business with greater clarity, better systems, stronger processes or more operational capability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. The Sage Kite Perspective */}
        <section className="tint reveal" id="perspective" style={{padding: "clamp(56px, 8vw, 88px) 0"}}>
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch", marginBottom: "48px"}}>
              <span className="label">Our Perspective</span>
              <h2>The future of business is not less human. It is better connected.</h2>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
              .perspective-card {
                background: var(--warm-white);
                border: 1px solid var(--light-sage);
                padding: clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px);
                border-radius: var(--radius);
                margin-bottom: 40px;
              }
              .perspective-grid {
                display: flex;
                justify-content: space-between;
                align-items: stretch;
                gap: 16px;
              }
              .p-col {
                flex: 0 0 200px;
                display: flex;
                flex-direction: column;
              }
              .p-conn-desktop {
                flex: 1;
                position: relative;
                margin-top: 100px;
              }
              .p-conn-mobile { display: none; }
              @media (max-width: 800px) {
                .perspective-grid {
                  flex-direction: column;
                  gap: 32px;
                  align-items: center;
                }
                .p-col { flex: none; width: 100%; max-width: 400px; }
                .p-conn-desktop { display: none; }
                .p-conn-mobile { 
                  display: flex; 
                  flex-direction: column;
                  align-items: center;
                }
              }
            `}} />

            <div className="perspective-card">
              <div className="perspective-grid">
                
                {/* Tech Column */}
                <div className="p-col">
                  <div style={{height: "100px"}}>
                    <div style={{fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.1em", color: "var(--sky)", marginBottom: "12px"}}>TECHNOLOGY</div>
                    <div style={{fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", color: "var(--ink)", fontStyle: "italic", lineHeight: 1.1}}>Creates leverage</div>
                  </div>
                  
                  <div style={{display: "flex", flexDirection: "column", position: "relative"}}>
                    {['AI', 'Automation', 'Systems', 'Data', 'Workflows'].map((item, i, arr) => (
                      <React.Fragment key={item}>
                        <div 
                          onMouseEnter={() => setPerspectiveHover('tech-'+i)} 
                          onMouseLeave={() => setPerspectiveHover(null)}
                          style={{
                            height: "24px", 
                            display: "flex", 
                            alignItems: "center",
                            fontSize: "1.1rem", 
                            color: perspectiveHover === 'tech-'+i ? "var(--sky)" : "var(--ink)", 
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                            cursor: "default"
                          }}
                        >
                          {item}
                        </div>
                        {i < arr.length - 1 && (
                          <div style={{height: "16px", display: "flex", alignItems: "center", color: "var(--light-sage)", fontSize: "0.8rem"}}>•</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div style={{marginTop: "40px", borderLeft: "2px solid var(--sky)", paddingLeft: "16px", fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.5, opacity: 0.9}}>
                    The tools and structure that make it all possible.
                  </div>
                </div>

                {/* Desktop Convergence Connection */}
                <div className="p-conn-desktop" style={{ height: "184px" }}>
                  <svg viewBox="0 0 100 184" preserveAspectRatio="none" style={{ width: "100%", height: "100%", overflow: "visible", position: "absolute", top: 0, left: 0 }}>
                    {/* Tech paths */}
                    {[12, 52, 92, 132, 172].map((y, i) => {
                      const isHovered = perspectiveHover === 'tech-'+i;
                      const isDimmed = perspectiveHover && !isHovered;
                      return (
                        <path 
                          key={'tl-'+i} 
                          d={`M 0,${y} C 40,${y} 40,92 50,92`} 
                          fill="none" 
                          stroke={isHovered ? "var(--sky)" : "var(--light-sage)"} 
                          strokeWidth={isHovered ? "1.5" : "1"} 
                          opacity={isDimmed ? 0.2 : (isHovered ? 1 : 0.6)}
                          vectorEffect="non-scaling-stroke"
                          style={{ transition: "all 0.3s ease" }}
                        />
                      );
                    })}
                    
                    {/* People paths */}
                    {[32, 72, 112, 152].map((y, i) => {
                      const isHovered = perspectiveHover === 'people-'+i;
                      const isDimmed = perspectiveHover && !isHovered;
                      return (
                        <path 
                          key={'pl-'+i} 
                          d={`M 100,${y} C 60,${y} 60,92 50,92`} 
                          fill="none" 
                          stroke={isHovered ? "var(--coral)" : "var(--light-sage)"} 
                          strokeWidth={isHovered ? "1.5" : "1"} 
                          opacity={isDimmed ? 0.2 : (isHovered ? 1 : 0.6)}
                          vectorEffect="non-scaling-stroke"
                          style={{ transition: "all 0.3s ease" }}
                        />
                      );
                    })}
                  </svg>

                  {/* Center Node and Text */}
                  <div style={{ position: "absolute", top: "92px", left: "0", right: "0", display: "flex", flexDirection: "column", alignItems: "center", transform: "translateY(-5px)", pointerEvents: "none" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--ink)", marginBottom: "8px", position: "relative", zIndex: 2 }}></div>
                    <div style={{ width: "1px", height: "24px", background: "var(--light-sage)", marginBottom: "12px", position: "relative", zIndex: 1 }}></div>
                    <div style={{ background: "var(--warm-white)", padding: "0 12px", position: "relative", zIndex: 2 }}>
                       <div style={{ fontSize: "0.95rem", fontWeight: "600", letterSpacing: "0.15em", color: "var(--ink)" }}>BETTER CONNECTED</div>
                    </div>
                  </div>
                </div>

                {/* People Column */}
                <div className="p-col">
                  <div style={{height: "100px"}}>
                    <div style={{fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.1em", color: "var(--coral)", marginBottom: "12px"}}>PEOPLE</div>
                    <div style={{fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", color: "var(--ink)", fontStyle: "italic", lineHeight: 1.1}}>Create meaning</div>
                  </div>
                  
                  <div style={{display: "flex", flexDirection: "column", position: "relative", paddingTop: "20px"}}>
                    {['Decisions', 'Relationships', 'Customers', 'Responsibility'].map((item, i, arr) => (
                      <React.Fragment key={item}>
                        <div 
                          onMouseEnter={() => setPerspectiveHover('people-'+i)} 
                          onMouseLeave={() => setPerspectiveHover(null)}
                          style={{
                            height: "24px", 
                            display: "flex", 
                            alignItems: "center",
                            fontSize: "1.1rem", 
                            color: perspectiveHover === 'people-'+i ? "var(--coral)" : "var(--ink)", 
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                            cursor: "default"
                          }}
                        >
                          {item}
                        </div>
                        {i < arr.length - 1 && (
                          <div style={{height: "16px", display: "flex", alignItems: "center", color: "var(--light-sage)", fontSize: "0.8rem"}}>•</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div style={{marginTop: "40px", borderLeft: "2px solid var(--coral)", paddingLeft: "16px", fontSize: "0.9rem", color: "var(--dark-sage)", lineHeight: 1.5, opacity: 0.9}}>
                    The people who use the systems, create opportunities and make things happen.
                  </div>
                </div>

              </div>

              {/* Mobile Fallback Destination */}
              <div className="p-conn-mobile" style={{marginTop: "16px"}}>
                  <svg width="60" height="40" viewBox="0 0 60 40" style={{marginBottom: "16px"}}>
                      <path d="M 10 0 C 10 20 30 20 30 40" fill="none" stroke="var(--sky)" strokeWidth="1.5" opacity="0.5" />
                      <path d="M 50 0 C 50 20 30 20 30 40" fill="none" stroke="var(--coral)" strokeWidth="1.5" opacity="0.5" />
                      <circle cx="30" cy="40" r="3" fill="var(--ink)" />
                  </svg>
                  <div style={{ fontSize: "1rem", fontWeight: "600", letterSpacing: "0.15em", color: "var(--ink)" }}>BETTER CONNECTED</div>
              </div>

              {/* Bottom Statement */}
              <div style={{ textAlign: "center", marginTop: "48px", paddingTop: "24px", borderTop: "1px solid var(--light-sage)" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.15em", color: "var(--sage)", textTransform: "uppercase" }}>
                      Technology works best with people.
                  </div>
              </div>
            </div>

            <div className="wrap split" style={{marginTop: "0", padding: "0"}}>
              <div className="split-head" style={{paddingRight: "24px"}}>
                <span className="label">The Reality</span>
                <p style={{fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: "var(--ink)", fontStyle: "italic", margin: 0, lineHeight: 1.3}}>AI and automation are changing what businesses can accomplish with small teams. But technology alone does not create a good business.</p>
              </div>
              <div style={{fontSize: "1.15rem", lineHeight: 1.65, display: "flex", flexDirection: "column", gap: "24px"}}>
                <p style={{margin: 0, color: "var(--dark-sage)"}}>The opportunity is to use technology to remove unnecessary work and give people more time to do the work that actually requires them.</p>
                <p style={{margin: 0, color: "var(--dark-sage)"}}>This is an important part of how Sage Kite thinks about AI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How We See Our Role */}
        <section className="rule-top reveal" id="role" style={{padding: "clamp(56px, 8vw, 88px) 0"}}>
          <div className="wrap">
            <span className="label">Our Role</span>
            <h2 style={{fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "48px"}}>Sometimes we advise. Sometimes we build.<br/>Sometimes we stay and help run it.</h2>
            
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", margin: "48px 0"}}>
              <div style={{padding: "32px", borderTop: "4px solid var(--sky)", background: "var(--tint)", borderRadius: "var(--radius)"}}>
                <h3 style={{fontSize: "1.2rem", letterSpacing: "0.05em", color: "var(--sky)", marginBottom: "16px", textTransform: "uppercase"}}>Advise</h3>
                <p style={{margin: 0, fontSize: "1.1rem", lineHeight: 1.6}}>For one business, that might mean helping decide what to change.</p>
              </div>
              <div style={{padding: "32px", borderTop: "4px solid var(--coral)", background: "var(--tint)", borderRadius: "var(--radius)"}}>
                <h3 style={{fontSize: "1.2rem", letterSpacing: "0.05em", color: "var(--coral)", marginBottom: "16px", textTransform: "uppercase"}}>Build</h3>
                <p style={{margin: 0, fontSize: "1.1rem", lineHeight: 1.6}}>For another, it might mean implementing a CRM or improving marketing operations.</p>
              </div>
              <div style={{padding: "32px", borderTop: "4px solid var(--ink)", background: "var(--tint)", borderRadius: "var(--radius)"}}>
                <h3 style={{fontSize: "1.2rem", letterSpacing: "0.05em", color: "var(--ink)", marginBottom: "16px", textTransform: "uppercase"}}>Run</h3>
                <p style={{margin: 0, fontSize: "1.1rem", lineHeight: 1.6}}>For another, it might mean providing specialist people to keep everything moving.</p>
              </div>
            </div>
            
            <p style={{margin: 0, padding: "32px 0", borderTop: "1px solid var(--light-sage)", fontSize: "1.35rem", color: "var(--ink)", fontFamily: "var(--serif)", lineHeight: 1.5, maxWidth: "70ch"}}>
              The common thread is not a particular service. It is helping the business move from <strong>"we know something needs to change"</strong> to <strong>"this is now working."</strong>
            </p>
          </div>
        </section>

        {/* 7. Founder Perspective */}
        <section className="tint reveal" id="founder" style={{padding: "clamp(56px, 8vw, 88px) 0"}}>
          <div className="wrap">
            <div className="feature" style={{borderTopColor: "var(--butter)", maxWidth: "800px", margin: "0 auto", padding: "clamp(40px, 6vw, 64px)"}}>
              <span className="label" style={{alignSelf: "flex-start", marginBottom: "32px"}}>From the Founder</span>
              <div style={{display: "flex", flexDirection: "column", gap: "24px", color: "var(--ink)"}}>
                <p style={{fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: "1.4", margin: 0, color: "var(--sage)"}}>
                  "Businesses are surrounded by more technology, more channels and more possibilities than ever before. That should make growth easier. Sometimes it does the opposite."
                </p>
                <p style={{fontSize: "1.1rem", lineHeight: "1.65", margin: 0}}>
                  The real challenge is not finding another tool or another tactic, but understanding how everything fits together.
                </p>
                <p style={{fontFamily: "var(--serif)", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", lineHeight: "1.4", margin: 0, fontStyle: "italic", fontWeight: "500"}}>
                  The hard part is making a plan work inside a real business, with its real tools and real team.
                </p>
              </div>
              <div style={{marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--light-sage)", fontSize: "1rem", fontWeight: "600", color: "var(--ink)"}}>
                Aryan — Founder, Sage Kite
              </div>
            </div>
          </div>
        </section>

        {/* 8. What We Are Building */}
        <section className="rule-top reveal" id="looking-ahead" style={{padding: "clamp(48px, 6vw, 80px) 0"}}>
          <div className="wrap split">
            <div className="split-head" style={{paddingRight: "24px"}}>
              <span className="label">Looking Ahead</span>
              <h2 style={{fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.1, margin: 0}}>A better way for growing businesses to operate.</h2>
            </div>
            
            <div className="roadmap-visual" style={{position: "relative", paddingLeft: "16px", marginTop: "24px"}}>
              {/* Vertical continuous line */}
              <div className="reveal" style={{position: "absolute", top: "12px", bottom: "-32px", left: "22px", width: "1px", background: "var(--light-sage)", animationDelay: "0ms"}}></div>

              {/* Items */}
              <div style={{display: "flex", flexDirection: "column", gap: "32px"}}>
                {[
                  "Businesses having clearer systems",
                  "Teams spending less time on repetitive administration",
                  "AI being used where it genuinely helps",
                  "Marketing and sales becoming better connected",
                  "Founders having greater visibility into their operation",
                  "Specialist people being used where they create the most value"
                ].map((text, i) => (
                  <div key={i} className="reveal" style={{position: "relative", paddingLeft: "48px", animationDelay: `${(i+1)*100}ms`}}>
                    {/* Node Marker */}
                    <div style={{position: "absolute", left: "17px", top: "8px", width: "10px", height: "10px", borderRadius: "50%", background: "var(--coral)", border: "2px solid var(--warm-white)", zIndex: 1}}></div>
                    
                    {/* Content */}
                    <div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
                      <span style={{fontFamily: "var(--serif)", fontSize: "0.95rem", color: "var(--sage)", letterSpacing: "0.05em", fontWeight: "600"}}>0{i+1}</span>
                      <span style={{fontSize: "1.25rem", color: "var(--ink)", lineHeight: 1.4}}>{text}</span>
                    </div>
                  </div>
                ))}

                {/* Endpoint */}
                <div className="reveal" style={{position: "relative", marginTop: "24px", paddingLeft: "48px", animationDelay: "800ms"}}>
                  {/* Arrow head pointing down */}
                  <div style={{position: "absolute", left: "14px", top: "-32px", color: "var(--light-sage)", fontSize: "16px", background: "var(--warm-white)", padding: "4px 0"}}>↓</div>
                  <div>
                    <span style={{fontSize: "0.95rem", fontWeight: "600", letterSpacing: "0.08em", color: "var(--ink)"}}>BETTER WAY TO OPERATE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Closing Statement */}
        <section className="tint reveal" id="contact" style={{borderBottom: "4px solid var(--butter)", padding: "clamp(64px, 8vw, 96px) 0"}}>
          <div className="wrap final-inner" style={{alignItems: "center"}}>
            <div className="final">
              <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "24px", color: "var(--ink)", lineHeight: "1.1"}}>Better systems.<br/>Better supported people.<br/>Better businesses.</h2>
              <p className="lede" style={{color: "var(--ink)"}}>That is what Sage Kite is here to build.</p>
            </div>
            <div className="cta-col" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px"}}>
              <Link className="btn" href="https://glasspane.pages.dev/contact" style={{backgroundColor: "var(--coral)", color: "var(--ink)", borderColor: "var(--coral)"}}>Start a conversation</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{paddingBottom: "44px", paddingTop: "56px"}}>
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
              <li><Link href="/about" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>About</Link></li>
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
