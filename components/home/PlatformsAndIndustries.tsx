import Link from 'next/link';

export function PlatformsAndIndustries() {
  return (
    <section id="platforms" className="tint">
      <div className="wrap reveal">
        <div className="two">
          
          {/* Platforms */}
          <div>
            <p className="label">Platforms</p>
            <h2 style={{ maxWidth: '12em' }}>The systems we build in.</h2>
            
            <ul className="plat-grid">
              {['GoHighLevel', 'Keap', 'Follow Up Boss', 'Lofty', 'ServiceTitan', 'Housecall Pro', 'Jobber', 'Kajabi', 'Clio Grow', 'Dubsado', 'Mindbody', 'Bloomerang', 'HoneyBook', 'HubSpot', 'ActiveCampaign'].map((plat, i) => (
                <li key={i}>{plat}</li>
              ))}
            </ul>
            
            <p className="foot">
              Plus custom CRM development. GoHighLevel work is delivered with GHL Scale Up. <Link href="#platforms" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}>All platforms</Link>
            </p>
          </div>

          {/* Industries */}
          <div id="industries">
            <p className="label">Who we work with</p>
            <h2 style={{ maxWidth: '14em' }}>SMEs in the US, Canada, Europe, Australia and New Zealand.</h2>
            
            <div className="ind-grid">
              <Link href="#real-estate">
                Real estate <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#home-services">
                Home services <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#coaches">
                Coaches and course businesses <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#law">
                Law firms <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#fitness">
                Fitness and wellness <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#nonprofits">
                Nonprofits <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
