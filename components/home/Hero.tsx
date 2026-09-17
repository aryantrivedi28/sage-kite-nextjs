import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy reveal">
          <div className="ribbon" aria-hidden="true">
            <span className="c"></span>
            <span className="b"></span>
            <span className="s"></span>
          </div>
          <p className="label">Business growth consultancy</p>
          <h1>
            Revenue growth, built on <span className="u">systems</span> <span className="u">that scale.</span>
          </h1>
          <p className="lede sub">
            Sage Kite designs, builds and runs the growth operations behind revenue. CRM, marketing, automation and AI, connected and executed.
          </p>
          <div className="cta-row">
            <Link href="#book" className="btn">Book a discovery call</Link>
            <Link href="#system" className="text-link">See the growth system</Link>
          </div>
        </div>
        
        <div className="hero-visual reveal">
          <div className="ui hv-pipeline">
            <div className="ui-title">Pipeline <b>This month</b></div>
            <div className="bar-row"><span className="label" style={{margin:0}}>New leads</span><div className="track"><span className="fill" style={{'--w': '80%'} as React.CSSProperties}></span></div><b>248</b></div>
            <div className="bar-row"><span className="label" style={{margin:0}}>Qualified</span><div className="track"><span className="fill" style={{'--w': '60%'} as React.CSSProperties}></span></div><b>82</b></div>
            <div className="bar-row"><span className="label" style={{margin:0}}>Opportunities</span><div className="track"><span className="fill" style={{'--w': '40%'} as React.CSSProperties}></span></div><b>31</b></div>
            <div className="bar-row won"><span className="label" style={{margin:0}}>Won</span><div className="track"><span className="fill" style={{'--w': '20%'} as React.CSSProperties}></span></div><b>14</b></div>
          </div>
          
          <div className="ui hv-flow">
            <div className="ui-title">Automation <b>Live</b></div>
            <ul className="flow">
              <li><span className="dot"></span> New enquiry captured</li>
              <li><span className="dot"></span> Added to CRM with an owner</li>
              <li><span className="dot"></span> Lead qualified</li>
              <li><span className="dot"></span> Follow-up sequence starts</li>
              <li><span className="dot"></span> Opportunity created</li>
            </ul>
          </div>
          
          <div className="ui hv-revenue">
            <div className="ui-title">Revenue <b>Trend</b></div>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
              <polyline points="0,35 20,30 40,32 60,20 80,15 100,5" fill="none" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <p className="hv-caption">
            Illustrative interface. Sample data, not client results.
          </p>
        </div>
      </div>
    </section>
  );
}
