"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Globe2,
  LineChart,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const proofSlides = [
  {
    eyebrow: "Organic search",
    title: "Visibility that compounds",
    description:
      "Search systems built around the questions buyers actually ask, across SEO, AEO and emerging AI discovery.",
    visual: "search",
  },
  {
    eyebrow: "Global distribution",
    title: "Growth beyond one market",
    description:
      "Positioning, campaigns and operating systems designed to travel across markets without losing clarity.",
    visual: "global",
  },
  {
    eyebrow: "Funnel recovery",
    title: "Broken journeys, repaired",
    description:
      "We find the leaks between lead, conversation, booking and revenue, then rebuild the system around them.",
    visual: "funnel",
  },
];

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "AI growth consultancy",
    description:
      "We diagnose what is slowing growth, repair the underlying system, and build a practical strategy your team can actually execute.",
    items: [
      "Growth and funnel audits",
      "Positioning and go-to-market strategy",
      "Distribution system design",
      "Execution and ongoing optimisation",
    ],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Marketing automation services",
    description:
      "The connected infrastructure behind modern marketing, from first discovery to conversion and retention.",
    items: [
      "CRM and lifecycle automation",
      "SEO, AEO and content systems",
      "Paid ads and social media",
      "n8n, workflows and integrations",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Marketing staffing",
    description:
      "Flexible people who can operate inside the systems we build, without forcing you to create a large team too early.",
    items: [
      "CRM and automation VAs",
      "Marketing and content VAs",
      "General virtual assistants",
      "Specialist and general hiring",
    ],
  },
];

const articles = [
  {
    category: "AI & distribution",
    title: "Building became cheap. Distribution did not.",
    excerpt:
      "What changes when almost anyone can build a product, but very few can earn sustained attention?",
    read: "8 min",
  },
  {
    category: "Search",
    title: "AEO is not SEO with a new acronym",
    excerpt:
      "A practical view of how discovery changes when answers are assembled instead of ranked.",
    read: "11 min",
  },
  {
    category: "Automation",
    title: "Where n8n ends and your CRM begins",
    excerpt:
      "A clearer way to decide what belongs inside the CRM and what should live in an automation layer.",
    read: "9 min",
  },
  {
    category: "Growth systems",
    title: "The hidden cost of a five-minute lead response",
    excerpt:
      "Speed-to-lead is not a notification problem. It is an operating-system problem.",
    read: "6 min",
  },
  {
    category: "Teams",
    title: "Designing a marketing team around AI",
    excerpt:
      "Which roles become more valuable, which tasks disappear, and where human judgment still compounds.",
    read: "10 min",
  },
  {
    category: "Field notes",
    title: "Why most funnels break after the form fill",
    excerpt:
      "The unglamorous handoffs between interest, conversation and sales that quietly destroy conversion.",
    read: "7 min",
  },
];

function SearchGrowthVisual() {
  return (
    <div className="proof-visual search-proof" aria-label="Illustrative organic search growth chart">
      <div className="proof-toolbar">
        <span>Search performance</span>
        <span className="proof-live"><i /> Compounding</span>
      </div>
      <div className="search-scoreline">
        <div><span>Visibility</span><strong>↑</strong></div>
        <div><span>Qualified clicks</span><strong>↑</strong></div>
        <div><span>AI citations</span><strong>↑</strong></div>
      </div>
      <div className="chart-shell">
        <span className="chart-gridline one" />
        <span className="chart-gridline two" />
        <span className="chart-gridline three" />
        <svg viewBox="0 0 560 190" role="img" aria-label="Rising search visibility curve">
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#4f82a3" stopOpacity=".3" />
              <stop offset="1" stopColor="#4f82a3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="chart-area" d="M0 176 C64 173 74 155 122 158 C174 161 188 130 234 135 C286 141 304 101 350 108 C406 116 421 58 470 71 C510 80 523 31 560 22 L560 190 L0 190 Z" />
          <path className="chart-line" d="M0 176 C64 173 74 155 122 158 C174 161 188 130 234 135 C286 141 304 101 350 108 C406 116 421 58 470 71 C510 80 523 31 560 22" />
          <circle cx="560" cy="22" r="6" />
        </svg>
      </div>
    </div>
  );
}

function GlobalGrowthVisual() {
  return (
    <div className="proof-visual global-proof" aria-label="Illustrative global growth system">
      <div className="global-orbit">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="globe-core"><Globe2 size={39} strokeWidth={1.4} /></div>
        <span className="market-node node-one">US</span>
        <span className="market-node node-two">EU</span>
        <span className="market-node node-three">APAC</span>
      </div>
      <div className="global-copy">
        <span>One growth system</span>
        <strong>Multiple markets.<br />One clear position.</strong>
        <div className="market-bars">
          <i style={{ width: "92%" }} />
          <i style={{ width: "76%" }} />
          <i style={{ width: "61%" }} />
        </div>
      </div>
    </div>
  );
}

function FunnelRepairVisual() {
  const steps = [
    ["Lead captured", "working"],
    ["Instant response", "fixed"],
    ["Qualified", "fixed"],
    ["Meeting booked", "working"],
  ];
  return (
    <div className="proof-visual funnel-proof" aria-label="Illustrative repaired lead funnel">
      <div className="funnel-header">
        <span>Revenue journey</span>
        <span><Bot size={15} /> Assisted by automation</span>
      </div>
      <div className="funnel-flow">
        {steps.map(([label, status], index) => (
          <div className="funnel-step" key={label}>
            <span className="step-index">0{index + 1}</span>
            <strong>{label}</strong>
            <span className={status === "fixed" ? "status-fixed" : "status-working"}>
              {status === "fixed" ? <Check size={13} /> : null}
              {status === "fixed" ? "Leak fixed" : "Connected"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProofCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % proofSlides.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, []);

  const previous = () =>
    setActive((current) =>
      current === 0 ? proofSlides.length - 1 : current - 1
    );

  const next = () =>
    setActive((current) => (current + 1) % proofSlides.length);

  return (
    <div className="evidence-folio">
      <div className="folio-kicker">
        <span>Selected outcomes</span>
        <span>0{active + 1} / 0{proofSlides.length}</span>
      </div>
      <div
        className="proof-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected Sage Kite outcomes"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") previous();
          if (event.key === "ArrowRight") next();
        }}
      >
        <div className="proof-window">
          <div
            className="proof-track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
          {proofSlides.map((slide) => (
            <div
              className="proof-slide-wrap"
              role="group"
              aria-roledescription="slide"
              aria-label={`${proofSlides.indexOf(slide) + 1} of ${proofSlides.length}`}
              key={slide.title}
            >
              <article className={`proof-slide proof-slide-${slide.visual}`}>
                <div className="proof-slide-copy">
                  <span>{slide.eyebrow}</span>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                {slide.visual === "search" ? <SearchGrowthVisual /> : null}
                {slide.visual === "global" ? <GlobalGrowthVisual /> : null}
                {slide.visual === "funnel" ? <FunnelRepairVisual /> : null}
              </article>
            </div>
          ))}
          </div>
        </div>
        <button className="carousel-arrow carousel-prev" type="button" onClick={previous} aria-label="Previous outcome">
          <ArrowLeft size={16} />
        </button>
        <button className="carousel-arrow carousel-next" type="button" onClick={next} aria-label="Next outcome">
          <ArrowRight size={16} />
        </button>
      </div>
      <div className="folio-tabs" aria-label="Carousel position">
        {proofSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={index === active ? "active" : ""}
            aria-label={`Show ${slide.title}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => setActive(index)}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Sage Kite home">
          <img src="/sage-kite-logo.png" alt="Sage Kite" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#proof">Proof</a>
          <a href="#services">Services</a>
          <a href="#articles">Articles</a>
        </nav>
        <a className="header-cta" href="#services">How we help <ArrowDownRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-color-ribbon" aria-hidden="true"><i /><i /><i /></div>
          <div className="eyebrow"><span /> Growth systems for the AI era</div>
          <h1>We make selling in the world of <em>AI</em> easier.</h1>
          <p>
            Building scalable growth systems for businesses that actually want to grow.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#services">See how we work <ArrowRight size={17} /></a>
            <a className="text-link" href="#articles">Read our thinking <span>↘</span></a>
          </div>
          <div className="hero-note">
            <LineChart size={17} /> Strategy, systems and people connected to revenue.
          </div>
        </div>
        <ProofCarousel />
      </section>

      <section className="proof-section" id="proof">
        <div className="section-intro proof-intro">
          <span className="section-number">02</span>
          <div>
            <p className="section-kicker">Proof before promises</p>
            <h2>Built from operating experience, not theory.</h2>
          </div>
          <p className="section-aside">Final figures marked XX should be replaced with verified data before public launch.</p>
        </div>

        <div className="metrics-grid">
          <article><strong>XX+</strong><span>Projects delivered</span></article>
          <article><strong>4+</strong><span>Years across growth & operations</span></article>
          <article><strong>XX%</strong><span>Client retention</span></article>
          <article><strong>X+</strong><span>Countries served</span></article>
        </div>

        <div className="trusted-row">
          <p>Experience behind Sage Kite includes work with</p>
          <div className="trusted-brands" aria-label="Selected client brands">
            <span>JENSON USA</span>
            <span>260 SAMPLE SALE</span>
            <span>SWEET BUSINESS IN A BOX</span>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-intro services-intro">
          <span className="section-number">03</span>
          <div>
            <p className="section-kicker">What we build</p>
            <h2>One growth partner.<br />Three ways to work together.</h2>
          </div>
          <p className="section-aside">Start with the bottleneck. Add capability only where the system needs it.</p>
        </div>

        <div className="service-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-row" key={service.title}>
                <div className="service-identity">
                  <span>{service.number}</span>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="articles-section" id="articles">
        <div className="articles-heading">
          <div>
            <span className="section-number light">04</span>
            <p className="section-kicker light">The Sage Kite library</p>
          </div>
          <h2>Ideas for selling<br />in a changed world.</h2>
          <p>Essays, explanations and practical field notes on AI, marketing, automation and the systems connecting them.</p>
        </div>

        <div className="article-grid">
          {articles.map((article, index) => (
            <article className={index === 0 ? "article-card featured" : "article-card"} key={article.title}>
              <div className="article-meta"><span>{article.category}</span><span>{article.read}</span></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="article-arrow" aria-hidden="true"><ArrowDownRight size={20} /></span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-mark">
          <img src="/sage-kite-mark.png" alt="" />
          <div><strong>Sage Kite</strong><span>Make selling easier.</span></div>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a href="#services">Services</a>
          <a href="#articles">Articles</a>
        </div>
        <p>Strategy · Systems · People</p>
      </footer>
    </main>
  );
}
