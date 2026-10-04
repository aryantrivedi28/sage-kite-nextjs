import React from 'react';
import type { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingEmbedScript } from "@/components/book/BookingEmbedScript";

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/book`;

export const metadata: Metadata = {
  title: "Book a Discovery Call | Sage Kite",
  description: "Pick a time for a discovery call with Sage Kite to talk through your CRM, marketing, automation and the growth goals behind them.",
  keywords: ["book a discovery call", "Sage Kite discovery call", "business growth consultation", "CRM consultation call"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Book a discovery call | Sage Kite",
    description: "Pick a time for a discovery call with Sage Kite to talk through your CRM, marketing, automation and growth goals.",
  },
  twitter: {
    card: "summary",
    title: "Book a discovery call | Sage Kite",
    description: "Pick a time for a discovery call with Sage Kite to talk through your CRM, marketing, automation and growth goals.",
  },
};

/**
 * Discovery-call booking page. Every "Book a discovery call" button on the site
 * links here. The calendar is the GoHighLevel booking widget, embedded exactly
 * as supplied; form_embed.js resizes the iframe to fit the widget.
 */
export default function BookPage() {
  return (
    <>
      <Header />

      <main id="main">
        <style dangerouslySetInnerHTML={{ __html: `
          .bk{padding:clamp(48px,6vw,88px) 0 clamp(72px,9vw,112px)}
          .bk-head{display:flex;flex-direction:column;align-items:flex-start}
          .bk-ribbon{display:flex;gap:6px;margin-bottom:22px}
          .bk-ribbon span{width:28px;height:6px;border-radius:3px}
          .bk-ribbon .c{background:var(--coral)}.bk-ribbon .b{background:var(--butter)}.bk-ribbon .s{background:var(--sky)}
          .bk h1{font-size:clamp(2.3rem,4vw,3.3rem);line-height:1.05;letter-spacing:-.025em}
          .bk h1 .u{text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:.12em;text-underline-offset:.12em;text-decoration-skip-ink:none}

          /* The GHL widget's own white card, framed by a pale-sage panel like the homepage hero visual */
          .bk-panel{position:relative;isolation:isolate;margin-top:clamp(32px,4vw,48px);padding:clamp(14px,3vw,40px)}
          /* Cut corner on a background layer, so it never clips the calendar itself */
          .bk-panel::before{content:"";position:absolute;inset:0;z-index:-1;background:var(--pale-sage);border-radius:var(--r);clip-path:polygon(0 0,calc(100% - 56px) 0,100% 56px,100% 100%,0 100%)}
          /* Holds space while the widget loads; form_embed.js then sets the real height */
          .bk-panel iframe{display:block;min-height:640px;border-radius:var(--r)}
          /* From ~1180px the iframe is wide enough (~992px) for the widget's two-column
             layout, which adds its own ~64px above the card, so the panel adds none. */
          @media (min-width:1180px){.bk-panel{padding-top:0}}

          @media (max-width:680px){
            .bk-panel{padding:10px}
            .bk-panel::before{clip-path:polygon(0 0,calc(100% - 28px) 0,100% 28px,100% 100%,0 100%)}
          }
        ` }} />

        <section className="bk" aria-labelledby="book-title">
          <div className="wrap">
            <div className="bk-head">
              <div className="bk-ribbon" aria-hidden="true"><span className="c"></span><span className="b"></span><span className="s"></span></div>
              <p className="label">Discovery call</p>
              <h1 id="book-title">Book a <span className="u">discovery call</span></h1>
            </div>

            <div className="bk-panel">
              <iframe
                src="https://pay.ghlscaleup.com/widget/booking/p11W8VUan5yI69fRHjVl"
                allow="payment"
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                id="p11W8VUan5yI69fRHjVl_1791032182352"
                title="Book a discovery call"
              />
              <BookingEmbedScript />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
