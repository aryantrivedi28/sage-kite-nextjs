import Image from "next/image";
import { ArrowRight, ArrowUpRight, Compass, Layers3, Users, Megaphone, Workflow, Check } from "lucide-react";
import { HeroShowcase, MobileNav } from "./home-interactions";
import { contactLink, crmGroups, services } from "./site-content";
const icons = [Compass, Layers3, Users, Megaphone, Workflow];
export default function Home() {
    return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container header-inner">
      <a href="#top" className="brand" aria-label="Sage Kite home"><Image src="/sage-kite-logo.png" alt="Sage Kite" width={180} height={45} priority/></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">What we do</a><a href="#crm">CRM expertise</a><a href="#articles">Our thinking</a></nav>
      <a className="button button-small header-contact" href={contactLink()}>Let’s talk <ArrowUpRight size={17} aria-hidden="true"/></a><MobileNav />
    </div></header>
    <main id="main">
      <section className="container hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">Strategy. Systems. People.</p>
          <h1 id="hero-title">We make selling in the world of <em>AI</em> easier.</h1>
          <p className="hero-description">Building scalable systems for businesses that actually want to grow.</p>
          <div className="hero-actions"><a className="button" href={contactLink()}>Build your growth system <ArrowUpRight size={19} aria-hidden="true"/></a><a className="text-link" href="#services">Explore our services <ArrowRight size={17} aria-hidden="true"/></a></div>
          <p className="hero-footnote">From the first strategy conversation to the everyday execution.</p>
        </div><HeroShowcase />
      </section>
      <div className="capability-strip"><div className="container"><span>Clarity before activity.</span><span>Systems before scale.</span><span>People behind the progress.</span></div></div>
      <section className="container section" id="services" aria-labelledby="services-title">
        <div className="section-heading"><div><p className="eyebrow">01 / What we do</p><h2 id="services-title">A sharper strategy.<br />The team to make it happen.</h2></div><p>You don’t need everything at once. Start with what is holding you back, then build from there.</p></div>
        <div className="service-grid">{services.map((service, i) => {
            const Icon = icons[i];
            return <article className={"service-card service-" + service.id} key={service.id} id={service.id}>
          <div className="card-top"><Icon size={25} strokeWidth={1.6} aria-hidden="true"/><span>0{i + 1}</span></div><h3>{service.title}</h3><p>{service.description}</p>
          <ul className="service-list">{service.items.map(item => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul>
          <a className="card-link" href={service.id === "crm-implementation" ? "#crm" : contactLink(service.title)}>{service.cta}<ArrowUpRight size={19} aria-hidden="true"/></a>
        </article>;
        })}</div>
      </section>
      <section className="crm-section" id="crm" aria-labelledby="crm-title"><div className="container section">
        <div className="section-heading"><div><p className="eyebrow">02 / Connected, not complicated</p><h2 id="crm-title">Your CRM should work<br />like your business does.</h2></div><p>Choose, implement or improve the platform behind your sales and operations. Connect the tools. Clean up the handoffs. Make follow-up dependable.</p></div>
        <div className="crm-deliverables">{["Setup & migration", "Workflows & integrations", "Reporting & team training"].map(item => <span key={item}><Check size={16} aria-hidden="true"/>{item}</span>)}</div>
        <div className="crm-groups">{crmGroups.map(group => <div className="crm-group" key={group.title}><h3>{group.title}</h3><ul>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></div>)}</div>
        <div className="custom-crm"><div><h3>Need something your off-the-shelf CRM can’t do?</h3><p>Custom CRM development, designed around your workflow.</p></div><a className="text-link" href={contactLink("Custom CRM development")}>Talk through your requirements <ArrowUpRight size={18} aria-hidden="true"/></a></div>
        <p className="platform-note">Platform names identify service areas, not certifications or official partnerships. Scope and integrations are confirmed during discovery.</p>
      </div></section>
      <section className="container section talent-section" aria-labelledby="talent-title">
        <div><p className="eyebrow">03 / More than another pair of hands</p><h2 id="talent-title">Good systems need<br />good people.</h2><p className="section-copy">Hire virtual assistants and specialists from India for the work your business needs every day. Define the role around the job to be done, not a generic list of tasks.</p><a className="button" href={contactLink("Recruitment and staffing")}>Find your next teammate <ArrowUpRight size={18} aria-hidden="true"/></a></div>
        <div className="talent-board"><div className="board-caption"><span>Build your team around the work</span><Users size={20} aria-hidden="true"/></div>
          {[{ name: "CRM & automation", detail: "Workflows, integrations and pipeline upkeep" }, { name: "Marketing & content", detail: "Campaigns, SEO, email and social media" }, { name: "Executive & admin support", detail: "Coordination, research and daily operations" }].map((role, i) => <div className="talent-row" key={role.name}><span className={"role-number role-" + i}>0{i + 1}</span><div><h3>{role.name}</h3><p>{role.detail}</p></div></div>)}
          <p className="board-bottom">Role clarity → Candidate review → Onboarding</p>
        </div>
      </section>
      <section className="journal-section" id="articles" aria-labelledby="journal-title"><div className="container section">
        <div className="section-heading"><div><p className="eyebrow">04 / The Sage Kite journal</p><h2 id="journal-title">A little less noise.<br />A lot more thought.</h2></div><p>Writing on marketing, AI, automation and the changing work of selling. For people who would rather understand than chase the next hack.</p></div>
        <article className="featured-essay"><div className="essay-art" aria-hidden="true"><span>FIELD NOTE / 001</span><p>Making is easier.<br /><strong>Selling is<br />still human.</strong></p><span>SAGE KITE / ON DISTRIBUTION</span></div>
          <div className="essay-preview"><p className="eyebrow">AI & distribution · Essay</p><h3>AI made making easier.<br />It did not make selling easier.</h3><p>When everyone can produce, producing stops being an advantage. The opportunity is to become easier to discover, easier to trust and easier to buy from.</p>
          <details className="essay-details"><summary>Read the essay <ArrowRight size={18} aria-hidden="true"/></summary><div className="essay-body">
            <p>The internet is about to become far more crowded than it already is. Not because more people suddenly became creative, but because making things has become cheap.</p>
            <p>A business can now create a website in an afternoon, write fifty social posts in an hour, and generate ad creatives before lunch. That is useful. But it also creates a problem.</p>
            <p>When everyone can produce, producing stops being an advantage.</p>
            <p>The difficult part was never simply building a website, running an ad, or writing content. It was understanding what people actually want, earning their trust, reaching them consistently, and building a system that does not drop opportunities once they arrive.</p>
            <p>AI has made execution faster. It has not made attention easier to earn.</p>
            <p>The businesses that win will not be the ones using the most AI tools. They will be the ones that become clearer about who they serve, more useful in public, faster in responding to demand, and better at turning interest into trust.</p>
            <p>A good growth system connects the dots: positioning that makes sense, proof that people can believe, content that reaches the right audience, a website that explains the value clearly, a CRM that captures every enquiry, and follow-up that happens before the prospect loses interest.</p>
            <p>None of these parts are glamorous on their own. Together, they make selling easier.</p>
            <p>The opportunity is not replacing marketing with machines. It is automating repetitive work so people can spend more time understanding customers, creating trust and making better decisions.</p>
          </div></details></div>
        </article>
        <div className="journal-topics"><span>What we write about</span><span>Marketing</span><span>AI & discovery</span><span>Automation</span><span>Distribution</span><span>Building teams</span></div>
      </div></section>
      <section className="container section contact-section" id="contact"><p className="eyebrow">Let’s start with the real problem.</p><h2>What’s getting in<br />the way of your growth?</h2><p>A strategy gap, a disconnected CRM, a campaign that isn’t working, or a team that needs support. Tell us where you are.</p><a className="button" href={contactLink()}>Talk to Sage Kite <ArrowUpRight size={20} aria-hidden="true"/></a><span className="contact-note">Start a conversation on WhatsApp.</span></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#top" aria-label="Back to Sage Kite home"><Image src="/sage-kite-logo.png" alt="Sage Kite" width={180} height={45}/></a><p>Strategy, systems and people.<br />Built for a world changed by AI.</p><nav aria-label="Footer"><a href="#services">Services</a><a href="#articles">Journal</a><a href={contactLink()}>Contact</a></nav><span>© {new Date().getFullYear()} Sage Kite</span></div></footer>
  </>;
}
