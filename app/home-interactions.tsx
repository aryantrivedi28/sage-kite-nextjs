"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";
import { contactLink } from "./site-content";
export function MobileNav() {
    const [open, setOpen] = useState(false);
    return <div className="mobile-nav" onKeyDown={event => { if (event.key === "Escape")
        setOpen(false); }}>
    <button className="icon-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="mobile-menu" hidden={!open} aria-label="Mobile navigation">
      {[{ href: "#services", label: "What we do" }, { href: "#crm", label: "CRM expertise" }, { href: "#articles", label: "Our thinking" }, { href: contactLink(), label: "Let’s talk" }].map(link => <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={17} aria-hidden="true"/></a>)}
    </nav>
  </div>;
}
const slides = [
    { label: "Fix the follow-through", title: "Interest is only the beginning.", text: "Connect the moments between a new enquiry and a real conversation.", steps: ["Enquiry captured", "Follow-up triggered", "Conversation booked"], category: "CRM & AUTOMATION" },
    { label: "Build your discovery", title: "Be useful before you’re needed.", text: "Connect buyer questions to useful content and a clear next step.", steps: ["Understand the question", "Create a useful answer", "Make the next step clear"], category: "SEO & AI DISCOVERY" },
    { label: "Reach your next market", title: "Good growth travels with a plan.", text: "Bring positioning, campaigns and delivery together for your next market.", steps: ["Define your audience", "Test the right message", "Connect sales & delivery"], category: "GO-TO-MARKET" },
];
export function HeroShowcase() {
    const [active, setActive] = useState(0);
    const slide = slides[active];
    function move(direction: number) { setActive(index => (index + direction + slides.length) % slides.length); }
    return <div className={`hero-showcase showcase-${active}`} role="region" aria-roledescription="carousel" aria-label="Growth system examples">
    <div className="showcase-top"><span>THE WORK BEHIND THE GROWTH</span><span>0{active + 1} / 03</span></div>
    <div className="showcase-slide" aria-live="polite" aria-atomic="true">
      <p className="showcase-category">{slide.category}</p><h2>{slide.title}</h2><p className="showcase-description">{slide.text}</p>
      <div className="workflow-example"><div className="workflow-label"><span>A CONNECTED JOURNEY</span><span>Example</span></div>{slide.steps.map((step, index) => <div className="workflow-row" key={step}><span className="workflow-index">0{index + 1}</span><strong>{step}</strong><Check size={17} aria-hidden="true"/></div>)}</div>
    </div>
    <div className="showcase-bottom"><span>Illustrative workflow, not client results.</span><div className="carousel-controls"><button className="icon-button" type="button" onClick={() => move(-1)} aria-label="Previous example"><ArrowLeft size={19}/></button><button className="icon-button" type="button" onClick={() => move(1)} aria-label="Next example"><ArrowRight size={19}/></button></div></div>
    <div className="showcase-pagination" aria-label="Choose an example">{slides.map((item, index) => <button key={item.label} type="button" aria-label={item.label} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)}><span /></button>)}</div>
  </div>;
}
