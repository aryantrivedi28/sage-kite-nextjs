import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReadingProgress } from '@/components/founders-thoughts/ReadingProgress';

/*
 * Founder's Thoughts essay: Where should we draw the line?
 * Reconstructed word-for-word from the provided screenshots.
 */

const SITE_URL = 'https://www.sagekite.com';
const SLUG = 'where-should-we-draw-the-line';
const PAGE_URL = `${SITE_URL}/founders-thoughts/${SLUG}`;
const IMAGE_URL = `${SITE_URL}/images/founders-thoughts/where-should-we-draw-the-line.png`;

export const metadata: Metadata = {
  title: 'Clients keep asking us to automate all their marketing. Where should we draw the line? | Sage Kite',
  description: 'A trapeze school planned a year of social posts and emails with Claude. Aryan Trivedi on what to automate, what to check and who should hit send.',
  keywords: ['marketing automation', 'AI automation', 'human in the loop', 'Claude', 'Founder\u2019s Thoughts'],
  authors: [{ name: 'Aryan Trivedi', url: `${SITE_URL}/about` }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    siteName: 'Sage Kite',
    url: PAGE_URL,
    title: 'Clients keep asking us to automate all their marketing. Where should we draw the line?',
    description: 'A trapeze school planned a year of social posts and emails with Claude. Aryan Trivedi on what to automate, what to check and who should hit send.',
    authors: ['Aryan Trivedi'],
    section: 'Founder\u2019s Thoughts',
    images: [{ url: IMAGE_URL, width: 1448, height: 1086, alt: 'A trapeze artist swinging above a notebook' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clients keep asking us to automate all their marketing. Where should we draw the line?',
    description: 'A trapeze school planned a year of social posts and emails with Claude. Aryan Trivedi on what to automate, what to check and who should hit send.',
    images: [IMAGE_URL],
  },
};

const sources = [
  {
    authors: 'Anders Humlum & Emilie Vestergaard',
    title: 'Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI',
    meta: 'NBER Working Paper 33777, revised March 2026. Table E.3 gives the marketing figures. Section 2.3 describes the new tasks across occupations. The survey round covered about 25,000 workers in Denmark in late 2024.',
    url: 'https://www.nber.org/papers/w33777',
  },
  {
    authors: 'Anil R. Doshi & Oliver P. Hauser',
    title: 'Generative AI enhances individual creativity but reduces the collective diversity of novel content',
    meta: 'Science Advances, 2024. An experiment with short fiction, reader ratings and a text-similarity measure. See Figures 2 and 4.',
    url: 'https://www.science.org/doi/10.1126/sciadv.adn5290',
  },
  {
    authors: 'Fabrizio Dell\u2019Acqua and colleagues',
    title: 'Navigating the Jagged Technological Frontier',
    meta: 'Organization Science, 2026. The wider experiment involved 758 consultants. Figure 5 and Table 7 cover accuracy on the strategy task. Table 9, column 1, gives the coherence gains.',
    url: 'https://pubsonline.informs.org/doi/10.1287/orsc.2025.20888',
  },
  {
    authors: 'Abhinav Mahajan',
    title: 'AI-Driven Autonomous Enterprises and the Future of Work: Impact, Ethics, and Value Creation by 2026',
    meta: 'Practitioner\u2019s narrative review, 2026. Sections III, VI.B, IX and XVII discuss permissions, error chains and oversight. Table IV proposes measures for quality and rework. SSRN preprint',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5150817',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${PAGE_URL}#article`,
      headline: 'Clients keep asking us to automate all their marketing. Where should we draw the line?',
      description: 'A trapeze school planned a year of social posts and emails with Claude. Aryan Trivedi on what to automate, what to check and who should hit send.',
      image: IMAGE_URL,
      datePublished: '2026-11-01', // Approximate based on screenshot "NOVEMBER 2026"
      author: {
        '@type': 'Person',
        name: 'Aryan Trivedi',
        jobTitle: 'Founder',
        url: `${SITE_URL}/about`,
        sameAs: ['https://www.linkedin.com/in/aryantrivedi'],
        worksFor: { '@id': `${SITE_URL}/#organization` },
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: PAGE_URL,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      articleSection: 'Founder\u2019s Thoughts',
      keywords: 'marketing automation, AI, Claude, human in the loop',
      citation: sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })),
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Founder\u2019s Thoughts', item: `${SITE_URL}/founders-thoughts` },
        { '@type': 'ListItem', position: 3, name: 'Where should we draw the line?' },
      ],
    },
  ],
};

export default function WhereShouldWeDrawTheLinePage() {
  return (
    <>
      <a className="skip" href="#bro-you-guys">Skip to article</a>
      <Header />
      <main id="main" className="essay">
        <style dangerouslySetInnerHTML={{ __html: `
          .essay{font-size:16px;color:var(--ink)}.essay p{margin:1em 0}.essay section{padding-block:0}.essay *{box-sizing:border-box}.essay a{color:inherit;text-underline-offset:5px}.essay a:hover{color:color-mix(in srgb,var(--coral) 70%,var(--ink))}.essay a:focus-visible{outline:3px solid var(--coral);outline-offset:5px}.essay img{max-width:100%;height:auto}.essay a{-webkit-tap-highlight-color:transparent}.essay .reading-progress{position:fixed;top:0;left:0;width:100%;height:4px;background:var(--butter);z-index:60}.essay .reading-progress span{display:block;height:100%;background:var(--coral);width:0}.essay .ess-hero{padding-top:38px;padding-bottom:32px}.essay .eyebrow{display:flex;justify-content:space-between;gap:20px;font-size:12px;letter-spacing:1.6px;font-weight:700;color:var(--dark-sage);margin-bottom:45px}.essay .eyebrow>span:first-child:before{content:'';display:inline-block;width:22px;height:8px;background:var(--coral);margin-right:12px}.essay .ess-hero-grid{display:grid;grid-template-columns:1.38fr 1fr;align-items:center;gap:25px}.essay .ess-hero h1{font-size:clamp(48px,5.15vw,78px);line-height:1.08;letter-spacing:-3.5px;font-weight:800;margin:0;position:relative;z-index:2}.essay .actually{box-shadow:inset 0 -.1em var(--butter);font-style:normal}.essay .dek{font-size:19px;line-height:1.6;color:var(--dark-sage);margin:28px 0 0}.essay .hero-art{position:relative;margin:0;align-self:stretch;display:flex;flex-direction:column;justify-content:center;padding-top:8px}.essay .hero-art>img{width:100%;aspect-ratio:1/1;object-fit:cover;mix-blend-mode:multiply;filter:grayscale(1);border-radius:50% 50% 2px 2px}.essay .hero-art figcaption{font-size:10px;letter-spacing:1.1px;border-top:1px solid var(--ink);display:flex;gap:10px;justify-content:space-between;padding-top:12px;margin-top:10px}.essay .art-tag{position:absolute;bottom:90px;right:-12px;transform:rotate(-7deg);background:var(--butter);padding:12px 17px;font-size:12px;font-weight:800;letter-spacing:1px}.essay .hero-bottom{display:flex;align-items:center;justify-content:space-between;gap:25px;border-top:1px solid var(--light-sage);padding-top:23px;margin-top:35px}.essay .byline{display:flex;align-items:center;gap:14px}.essay .byline img{width:52px;height:52px;border-radius:50%;object-fit:cover;object-position:50% 32%;filter:grayscale(1)}.essay .byline strong{display:block;font-size:14px;margin-bottom:4px}.essay .byline span{display:block;font-size:12px;color:var(--sage)}.essay .reading-meta{font-size:11px;letter-spacing:1px}.essay .reading-meta span{margin:0 15px;color:var(--sage)}.essay .read-link{font-weight:700;font-size:14px}.essay .read-link span{display:none}.essay .thesis-band{background:var(--dark-sage);color:var(--warm-white);margin-top:25px;padding:49px 0 53px}.essay .thesis-band>.wrap{display:grid;grid-template-columns:1fr 2fr;align-items:start;column-gap:45px}.essay .section-label{font-size:12px;letter-spacing:1.4px;text-transform:uppercase;font-weight:700;display:block}.essay .thesis-band .section-label{color:var(--light-sage);padding-top:12px}.essay .thesis-band p{font-size:clamp(34px,3.4vw,50px);line-height:1.2;letter-spacing:-1.7px;font-weight:600;margin:0}.essay .thesis-band em{font-style:normal;color:var(--butter)}.essay .band-note{grid-column:2;font-size:13px;color:var(--light-sage);line-height:1.7;margin-top:20px}.essay .reading-layout{display:grid;grid-template-columns:225px minmax(0,1fr);gap:85px;padding-top:85px}.essay .contents-sticky{position:sticky;top:140px}.essay .toc-label{font-size:11px;letter-spacing:1.7px;font-weight:700;color:var(--sage)}.essay .contents nav{margin-top:22px;display:flex;flex-direction:column;border-top:1px solid var(--light-sage)}.essay .contents nav a{display:flex;gap:13px;padding:14px 0;border-bottom:1px solid var(--light-sage);font-size:13px;font-weight:600;text-decoration:none;color:var(--sage)}.essay .contents nav a span{font-size:11px;color:var(--sage);width:22px;flex-shrink:0}.essay .contents nav a.active{color:var(--ink);font-weight:800}.essay .contents nav a.active span{color:var(--coral)}.essay .margin-thought{margin-top:55px;border-left:3px solid var(--butter);padding-left:17px;max-width:190px}.essay .margin-thought span{font-size:10px;font-weight:700;letter-spacing:1.3px;color:var(--sage)}.essay .margin-thought p{font-size:16px;line-height:1.6;font-weight:600}.essay .article{min-width:0;max-width:890px}.essay .essay-section{position:relative;padding-bottom:72px;margin-bottom:68px;border-bottom:1px solid var(--light-sage);scroll-margin-top:110px}.essay .section-heading{margin-bottom:32px}.essay .section-heading .section-label{color:var(--sage);margin-bottom:17px}.essay .section-heading h2{font-size:clamp(31px,3.1vw,46px);line-height:1.12;letter-spacing:-1.8px;max-width:730px;margin:0;font-weight:800}.essay .prose{max-width:690px}.essay .prose p{font-size:18px;line-height:1.85;margin:0 0 24px;color:var(--dark-sage)}.essay .prose p:first-child{font-size:21px;line-height:1.65;color:var(--ink);font-weight:500}.essay .prose strong{font-weight:800;color:var(--ink)}.essay .prose sup{line-height:0}.essay .prose sup a{display:inline-flex;align-items:center;justify-content:center;font-size:11px;min-width:19px;height:19px;border:1px solid var(--light-sage);border-radius:50%;text-decoration:none;color:var(--dark-sage);margin-left:3px}.essay .prose sup a:hover{background:var(--butter)}.essay .pullquote{margin:42px 0;background:var(--pale-sage);color:var(--dark-sage);padding:35px 38px 35px 32px;border-left:5px solid var(--coral);font-size:30px;line-height:1.4;letter-spacing:-.7px;font-weight:700}.essay .research-note{float:right;width:190px;margin:0 -7px 25px 32px;padding:20px 0 20px 20px;border-left:1px solid var(--light-sage);position:relative;z-index:1;background:var(--warm-white)}.essay .research-note>span{font-size:9px;letter-spacing:1px;font-weight:700}.essay .research-note>b{display:block;font-size:48px;line-height:1.3;letter-spacing:-3px;font-weight:800;color:var(--coral);margin:10px 0}.essay .research-note p{font-size:13px;line-height:1.7;color:var(--sage)}.essay .research-note a{font-size:12px;font-weight:700}.essay .portrait-note{float:right;width:160px;margin:5px 0 22px 30px}.essay .portrait-note img{aspect-ratio:4/5;object-fit:cover;filter:grayscale(1);border-radius:90px 90px 0 0}.essay .portrait-note>span{display:block;font-size:13px;font-weight:800;margin-top:10px}.essay .portrait-note p{font-size:11px;line-height:1.7;color:var(--sage);margin:4px 0}.essay .table-scroll{margin:35px 0;overflow:auto}.essay table{border-collapse:collapse;width:100%;font-size:14px;line-height:1.7;min-width:450px}.essay caption{text-align:left;font-size:12px;padding-bottom:14px;color:var(--sage)}.essay th{background:var(--dark-sage);color:var(--warm-white);text-align:left;padding:18px;font-weight:600;width:58%}.essay th+th{width:42%}.essay td{padding:20px 18px;border-bottom:1px solid var(--light-sage);vertical-align:top}.essay tr:nth-child(even) td{background:var(--pale-sage)}.essay .sources{display:grid;grid-template-columns:1fr 1.6fr;gap:80px;padding:20px 0 75px;scroll-margin-top:115px}.essay .sources h2{font-size:38px;line-height:1.2;letter-spacing:-1.5px;margin:24px 0}.essay .sources p{font-size:15px;line-height:1.8;color:var(--sage)}.essay .sources ol{padding:0;margin:0;list-style:none}.essay .sources li{display:flex;gap:20px;padding:16px 0;border-bottom:1px solid var(--light-sage);scroll-margin-top:125px;transition:background .2s}.essay .sources li:target{background:var(--butter-soft)}.essay .sources li>span{font-size:11px;line-height:2;color:var(--sage);flex-shrink:0}.essay .sources li>a{font-size:14px;line-height:1.6;text-decoration:none}.essay .sources li>a:hover{text-decoration:underline}.essay .author-end{background:var(--pale-sage);padding:45px;display:grid;grid-template-columns:240px 1fr;align-items:center;gap:60px;margin-bottom:90px}.essay .author-end>img{width:240px;aspect-ratio:4/5;object-fit:cover;filter:grayscale(1);object-position:center;border-radius:130px 130px 0 0}.essay .author-end h2{font-size:48px;line-height:1.1;letter-spacing:-2px;margin:20px 0}.essay .author-end p{font-size:17px;line-height:1.7;max-width:600px;color:var(--dark-sage)}.essay .text-link{display:inline-block;font-size:14px;font-weight:800;margin-top:10px}@media(min-width:1450px){.essay .ess-hero h1{font-size:80px}.essay .hero-art>img{max-height:510px}.essay .ess-hero-grid{grid-template-columns:1.4fr 1fr}.essay .reading-layout{gap:100px}.essay .prose{max-width:720px}}@media(max-width:1100px){.essay .ess-hero h1{font-size:59px;letter-spacing:-2.8px}.essay .ess-hero-grid{grid-template-columns:1.35fr 1fr;gap:8px}.essay .hero-art figcaption{font-size:8px}.essay .art-tag{font-size:10px;right:0;bottom:60px}.essay .reading-layout{grid-template-columns:180px minmax(0,1fr);gap:45px}.essay .reading-meta{display:none}.essay .research-note{float:none;width:auto;display:grid;grid-template-columns:110px 1fr;gap:8px 20px;margin:0 0 32px;padding:22px;border-left:0;background:var(--pale-sage)}.essay .research-note>span{grid-column:1/-1}.essay .research-note>b{grid-row:2/4;margin:0;align-self:center}.essay .research-note p{margin:0}.essay .research-note a{grid-column:2}.essay .sources{gap:45px}.essay .thesis-band>.wrap{grid-template-columns:1fr 2fr}}@media(max-width:760px){.essay .ess-hero{padding-top:27px}.essay .eyebrow{font-size:10px;letter-spacing:.9px;margin-bottom:30px;align-items:center}.essay .eyebrow>span:last-child{font-size:9px;text-align:right;max-width:130px}.essay .ess-hero-grid{display:block}.essay .ess-hero h1{font-size:clamp(38px,8.1vw,61px);letter-spacing:-2px;line-height:1.12}.essay .dek{font-size:17px;line-height:1.55;margin-top:23px}.essay .hero-art{margin-top:25px;max-width:440px;margin-inline:auto}.essay .hero-art>img{aspect-ratio:1.5;border-radius:160px 160px 0 0}.essay .hero-art figcaption{font-size:9px;padding-top:10px;margin-top:9px}.essay .art-tag{bottom:47px;right:-3px}.essay .hero-bottom{margin-top:26px;padding-top:20px;gap:10px}.essay .byline img{width:42px;height:42px}.essay .byline{gap:10px}.essay .byline strong{font-size:13px}.essay .byline span{font-size:10px;max-width:170px}.essay .read-link{font-size:12px;flex-shrink:0}.essay .thesis-band{margin-top:10px;padding:35px 0}.essay .thesis-band>.wrap{display:block}.essay .thesis-band .section-label{font-size:10px;padding:0;margin-bottom:22px}.essay .thesis-band p{font-size:36px;letter-spacing:-1.3px}.essay .band-note{display:block;font-size:12px;margin-top:20px}.essay .reading-layout{display:block;padding-top:35px}.essay .contents{margin-bottom:40px}.essay .contents-sticky{position:static}.essay .contents nav{display:flex;flex-flow:row wrap;margin-top:15px;border:0;gap:9px}.essay .contents nav a{padding:9px 10px;border:1px solid var(--light-sage);font-size:11px;gap:7px}.essay .contents nav a span{font-size:10px;width:auto}.essay .contents nav a.active{background:var(--pale-sage)}.essay .margin-thought{display:none}.essay .section-heading .section-label{font-size:10px;margin-bottom:15px}.essay .section-heading h2{font-size:34px;line-height:1.15;letter-spacing:-1.2px}.essay .essay-section{padding-bottom:37px;margin-bottom:39px;scroll-margin-top:95px}.essay .prose p{font-size:17px;line-height:1.85;margin-bottom:22px}.essay .prose p:first-child{font-size:19px;line-height:1.65}.essay .pullquote{padding:27px 23px;margin:32px 0;font-size:25px;line-height:1.4}.essay .research-note{grid-template-columns:95px 1fr;padding:20px;gap:6px 18px}.essay .research-note>b{font-size:40px}.essay .research-note p{font-size:12px}.essay .research-note a{font-size:11px}.essay .portrait-note{display:none}.essay .sources{display:block;padding:10px 0 50px}.essay .sources h2{font-size:33px;margin:18px 0}.essay .sources>div{margin-bottom:25px}.essay .sources li{gap:15px}.essay .sources li>a{font-size:13px}.essay .author-end{padding:28px;grid-template-columns:90px 1fr;gap:23px;margin-bottom:50px;align-items:start}.essay .author-end>img{width:90px;aspect-ratio:3/4}.essay .author-end .section-label{font-size:9px;letter-spacing:1px}.essay .author-end h2{font-size:28px;line-height:1.15;letter-spacing:-1px;margin:14px 0}.essay .author-end p{font-size:14px;line-height:1.7}.essay .author-end .text-link{font-size:12px}}@media(prefers-reduced-motion:reduce){.essay *{transition:none!important}}@media print{.essay .contents,.essay .hero-art,.essay .reading-progress,.essay .read-link,.essay .author-end{display:none}.essay .reading-layout{display:block}.essay .ess-hero h1{font-size:40px}.essay .ess-hero-grid{display:block}.essay .thesis-band{background:none;color:var(--ink);padding:20px 0}.essay .thesis-band em{color:var(--ink)}.essay .essay-section{break-inside:auto}.essay .prose{max-width:none}.essay .sources{display:block}.essay .pullquote,.essay .concept{break-inside:avoid}.essay .research-note{float:none}}
          .essay .research-link{font-weight:700;text-decoration-color:var(--butter);text-decoration-thickness:3px;text-underline-offset:3px}
          
          /* CUSTOM CHART STYLES FOR THIS ESSAY */
          .essay .chart-container{margin:45px 0;border:1px solid var(--light-sage);border-radius:4px;padding:30px;position:relative}
          .essay .chart-header{display:flex;justify-content:space-between;font-size:9px;letter-spacing:1px;font-weight:800;text-transform:uppercase;color:var(--sage);margin-bottom:25px}
          .essay .chart-title{font-size:24px;font-weight:800;margin:0 0 8px;letter-spacing:-0.5px}
          .essay .chart-subtitle{font-size:12px;color:var(--dark-sage);margin:0 0 30px}
          
          /* Chart 1: Danish Worker Survey */
          .essay .chart-blue{background:#dbeafe;border-color:#bfdbfe}
          .essay .chart-blue .chart-title{color:#1e3a8a}
          .essay .chart-bar-row{display:grid;grid-template-columns:1fr 60px;gap:15px;align-items:center;margin-bottom:16px;font-size:13px;font-weight:600}
          .essay .chart-bar-track{grid-column:1;height:12px;background:rgba(255,255,255,0.5);border-radius:2px;overflow:hidden;position:relative}
          .essay .chart-bar-fill{height:100%;background:#5b8cc9;border-radius:2px}
          .essay .chart-bar-label{grid-column:2;text-align:right;font-weight:800;color:#1e3a8a}
          .essay .chart-axis{display:flex;justify-content:space-between;font-size:10px;color:var(--sage);margin-top:10px;border-top:1px solid rgba(0,0,0,0.1);padding-top:10px}
          .essay .chart-source{font-size:10px;color:var(--sage);margin-top:20px;line-height:1.5}
          
          /* Chart 2: Two Subject Lines */
          .essay .chart-yellow{background:#fef3c7;border-color:#fde68a}
          .essay .chart-yellow .chart-title{color:#78350f}
          .essay .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px}
          .essay .subject-card{background:var(--warm-white);padding:25px;border:1px solid var(--light-sage)}
          .essay .subject-label{font-size:9px;letter-spacing:1px;font-weight:800;color:var(--sage);text-transform:uppercase;margin-bottom:15px}
          .essay .subject-text{font-size:18px;font-weight:700;line-height:1.4;margin-bottom:20px;color:var(--ink)}
          .essay .subject-note{font-size:12px;color:var(--sage);border-top:1px solid var(--light-sage);padding-top:15px}
          
          /* Chart 3: Field Experiment */
          .essay .chart-dark{background:#1e293b;border-color:#0f172a;color:#f8fafc}
          .essay .chart-dark .chart-header{color:#94a3b8}
          .essay .chart-dark .chart-title{color:#f8fafc}
          .essay .chart-dark table{border-collapse:collapse;width:100%;font-size:13px;min-width:0}
          .essay .chart-dark th{background:transparent;color:#94a3b8;font-size:10px;text-transform:uppercase;padding:0 0 15px;border-bottom:1px solid #334155;font-weight:700}
          .essay .chart-dark td{padding:16px 0;border-bottom:1px solid #334155;background:transparent!important}
          .essay .chart-dark tr:last-child td{border-bottom:none}
          .essay .chart-dark .bar{height:6px;background:#3b82f6;border-radius:2px;margin-top:8px}
          .essay .chart-dark .gain{text-align:right;color:#f8fafc;font-weight:700}
          
          /* Chart 4: Error Spreads */
          .essay .chart-red{background:#fee2e2;border-color:#fecaca}
          .essay .chart-red .chart-title{color:#7f1d1d}
          .essay .error-flow{border:1px solid var(--ink);padding:15px 20px;background:var(--warm-white);display:flex;justify-content:space-between;font-size:14px;font-weight:600;margin-bottom:25px}
          .essay .error-flow .change{color:#dc2626;font-weight:800}
          .essay .error-tree{position:relative;display:flex;flex-direction:column;align-items:center;margin-bottom:30px}
          .essay .error-root{background:var(--warm-white);border:1px dashed #dc2626;padding:10px 20px;font-size:12px;color:#7f1d1d;z-index:2}
          .essay .error-lines{width:66%;height:20px;border-left:1px solid #dc2626;border-right:1px solid #dc2626;border-bottom:1px solid #dc2626;margin-top:-1px}
          .essay .error-branches{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;width:100%}
          .essay .error-box{background:var(--warm-white);border:1px solid var(--light-sage);padding:15px;text-align:center;font-size:12px}
          .essay .error-box strong{display:block;margin-bottom:5px;color:var(--ink)}
          
          /* Chart 5: Three Jobs */
          .essay .chart-green{background:#f0fdf4;border-color:#bbf7d0}
          .essay .chart-green .chart-title{color:#14532d}
          .essay .rule-row{display:grid;grid-template-columns:130px 1fr;gap:20px;padding:18px 0;border-bottom:1px solid #bbf7d0;align-items:start;font-size:13px;line-height:1.6}
          .essay .rule-row:last-child{border-bottom:none}
          .essay .rule-label{font-weight:800;display:flex;align-items:center;gap:8px;color:var(--ink)}
          .essay .rule-desc{color:var(--dark-sage)}
          .essay .dot{width:8px;height:8px;border-radius:50%;display:inline-block}
          .essay .dot-outline{border:2px solid var(--dark-sage);background:transparent}
          .essay .dot-solid{background:var(--dark-sage)}
          .essay .dot-coral{background:var(--coral)}

          @media(max-width:760px){
            .essay .grid-2{grid-template-columns:1fr}
            .essay .error-branches{grid-template-columns:1fr}
            .essay .error-lines{display:none}
            .essay .error-root{margin-bottom:15px}
            .essay .rule-row{grid-template-columns:1fr;gap:5px}
          }
        ` }} />
        <ReadingProgress />

        {/* HERO */}
        <div className="ess-hero wrap">
          <div className="ess-hero-top">
            <div className="eyebrow">
              <span>FOUNDER'S THOUGHTS</span>
              <span>NOVEMBER 2026</span>
            </div>
            <div className="ess-hero-grid">
              <div className="ess-hero-copy">
                <h1>
                  Clients keep asking us to automate all their marketing. Where should we draw the line?
                </h1>
                <p className="dek">
                  A trapeze school wanted a year of social posts and emails on autopilot. Its owner still pays us. What he pays us to do has changed.
                </p>
              </div>
              <figure className="hero-art">
                <Image
                  src="/images/founders-thoughts/where-should-we-draw-the-line.png"
                  alt="Illustration of a woman swinging on a trapeze above a notebook"
                  width={1448}
                  height={1086}
                  priority
                  sizes="(max-width: 760px) 90vw, 40vw"
                />
              </figure>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="byline">
              <Image src="/aryan_t.jpeg" alt="Aryan Trivedi" width={60} height={60} />
              <div>
                <strong>Aryan Trivedi</strong>
                <span>Founder, <Link href="/">Sage Kite</Link></span>
              </div>
            </div>
            <div className="reading-meta">
              7 MIN READ
            </div>
            <a className="read-link" href="#bro-you-guy">
              Read the essay <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* READING LAYOUT */}
        <div className="reading-layout wrap">
          <aside className="contents">
            <div className="contents-sticky">
              <span className="toc-label">IN THIS ESSAY</span>
              <nav aria-label="Article sections">
                <a href="#bro-you-guys" data-section="bro-you-guys">
                  <span>01</span>"Bro, you guys are in danger."
                </a>
                <a href="#what-would-a-first-time-flyer" data-section="what-would-a-first-time-flyer">
                  <span>02</span>What would a first-time flyer actually open?
                </a>
                <a href="#one-wrong-date" data-section="one-wrong-date">
                  <span>03</span>One wrong date can fill three channels.
                </a>
                <a href="#who-gets-to-hit-send" data-section="who-gets-to-hit-send">
                  <span>04</span>Who gets to hit send?
                </a>
                <a href="#the-client-who-kept-paying" data-section="the-client-who-kept-paying">
                  <span>05</span>The client who kept paying us
                </a>
                <a href="#sources" data-section="sources">
                  <span>↗</span>Sources
                </a>
              </nav>
            </div>
          </aside>

          <article className="article">
            {/* 01 — BRO YOU GUYS ARE IN DANGER */}
            <section className="essay-section" id="bro-you-guys" aria-labelledby="heading-bro">
              <div className="section-heading">
                <h2 id="heading-bro">“Bro, you guys are in danger.”</h2>
              </div>
              <div className="prose">
                <p>
                  A client of ours runs a trapeze school, where students learn to swing through the air on a horizontal bar hanging from two ropes. He used to send us an Excel sheet with dates and events. We'd turn those rows into social posts and emails. Then he showed us a year's worth of content briefs he'd made with Claude. We read through them. They were good. We used them.
                </p>
                <p>
                  He grinned and said something along the lines of, “Bro, you guys are in danger. I can do all my marketing with Claude.”
                </p>
                <p>
                  I thought he was right about a fair chunk of what we did. He still works with someone on our team, though, and he pays us more now. We spend less time filling the calendar and more time deciding what deserves a place on it. For a first-time flyer, would another discount help? Or would they rather hear an instructor answer, “What happens if I get to the top of the ladder and change my mind?”
                </p>
                <p>
                  That's the part I want to unpack. When a client asks us to automate their marketing, writing the email is one decision. Choosing what to promise, who should receive it and when to stop sending it are three more.
                </p>
                <p>
                  Other marketers seem to recognise that gain. In a 2024 Danish survey, economists Anders Humlum and Emilie Vestergaard asked people who had used chatbots at work what they got out of them. Here's what the marketers said. <sup><a href="#source-1">[1]</a></sup>
                </p>

                {/* Chart 1 */}
                <div className="chart-container chart-blue">
                  <div className="chart-header">
                    <span>DANISH WORKER SURVEY</span>
                    <span>MARKETING</span>
                  </div>
                  <h3 className="chart-title">What marketers got back</h3>
                  <p className="chart-subtitle">Share of marketing respondents who reported each benefit</p>
                  
                  <div className="chart-bar-row">
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}><span>Saved time</span><span className="chart-bar-label">89.8%</span></div>
                    <div className="chart-bar-track"><div className="chart-bar-fill" style={{width: "89.8%"}}></div></div>
                  </div>
                  <div className="chart-bar-row">
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}><span>Better work quality</span><span className="chart-bar-label">69.8%</span></div>
                    <div className="chart-bar-track"><div className="chart-bar-fill" style={{width: "69.8%"}}></div></div>
                  </div>
                  <div className="chart-bar-row">
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}><span>More creativity</span><span className="chart-bar-label">62.5%</span></div>
                    <div className="chart-bar-track"><div className="chart-bar-fill" style={{width: "62.5%"}}></div></div>
                  </div>
                  
                  <div className="chart-axis">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                  <p className="chart-source">
                    Marketers who had ever used a chatbot for work. Respondents could report several benefits. Humlum & Vestergaard, Table E.3
                  </p>
                </div>

                <p>
                  Look at that last bar. Plenty of people felt more creative with AI. I can believe it. Give me ten possible openings for an email and I'll often see an angle I missed. The harder question comes when every school in town can ask for those same ten openings.
                </p>
              </div>
            </section>

            {/* 02 — WHAT WOULD A FIRST-TIME FLYER ACTUALLY OPEN? */}
            <section className="essay-section" id="what-would-a-first-time-flyer" aria-labelledby="heading-flyer">
              <div className="section-heading">
                <h2 id="heading-flyer">What would a first-time flyer actually open?</h2>
              </div>
              <div className="prose">
                <p>
                  “Add some human flavour” is a vague brief to give a writer. For the trapeze school, I'd make it more specific. Imagine someone who's looked at a beginner class twice and still hasn't booked. We have room for one email. What would we put in it?
                </p>

                {/* Chart 2 */}
                <div className="chart-container chart-yellow">
                  <div className="chart-header">
                    <span>AT THE EDITING DESK</span>
                    <span>ILLUSTRATIVE COPY</span>
                  </div>
                  <h3 className="chart-title">One class, two subject lines</h3>
                  
                  <div className="grid-2">
                    <div className="subject-card">
                      <div className="subject-label">THE PROMOTION</div>
                      <div className="subject-text">Ready to take your next adventure to new heights?</div>
                      <div className="subject-note">Could come from a climbing gym, a zip line or a travel company.</div>
                    </div>
                    <div className="subject-card">
                      <div className="subject-label">THE FIRST-TIMER'S QUESTION</div>
                      <div className="subject-text">What if I get up the ladder and change my mind?</div>
                      <div className="subject-note">Gives the instructor a real question to answer.</div>
                    </div>
                  </div>
                  
                  <p className="chart-source">
                    Both lines are examples written for this essay. I'd ask the instructor what actually happens before writing the second email.
                  </p>
                </div>

                <p>
                  That choice is what I mean by taste. It shows up in the detail you keep, the line you cut and the person you think of while you're editing. Claude could suggest the second line too. Someone still has to notice that fear might be why a customer is hesitating, ask the school if that's true, and decide whether to lead with it.
                </p>
                <p>
                  There's an interesting parallel in an experiment by Anil Doshi and Oliver Hauser. Readers evaluated 293 short stories. Writers who could ask GPT-4 for up to five ideas earned novelty scores 8.1% higher, on average, than writers working alone. Yet the stories written with AI ideas were also more alike. An individual writer could gain an edge while the group produced a narrower range of stories. <sup><a href="#source-2">[2]</a></sup>
                </p>
                <p>
                  They tested fiction. The question of what goes viral is still open. An AI-written post can take off, but if every business can make a decent post, being decent gives people little reason to share yours. My bet is that as the average post gets better, a detail that only this school could tell you becomes more valuable. I'd happily try a line Claude wrote. I'd also leave room in that beautiful calendar for something an instructor hears on Tuesday.
                </p>
              </div>
            </section>

            {/* 03 — ONE WRONG DATE CAN FILL THREE CHANNELS */}
            <section className="essay-section" id="one-wrong-date" aria-labelledby="heading-date">
              <div className="section-heading">
                <h2 id="heading-date">One wrong date can fill three channels.</h2>
              </div>
              <div className="prose">
                <p>
                  The more convincing a draft sounds, the easier it is to approve on a quick read. An experiment by Fabrizio Dell'Acqua and colleagues shows how convincing a wrong answer can sound. They asked consultants to make a business recommendation using material that included conflicting evidence. On this particular task, the groups using GPT-4 gave fewer correct answers. Graders still found their arguments clearer and more convincing, even among the wrong answers. <sup><a href="#source-3">[3]</a></sup>
                </p>

                {/* Chart 3 */}
                <div className="chart-container chart-dark">
                  <div className="chart-header">
                    <span>FIELD EXPERIMENT</span>
                    <span>ONE CONSULTING TASK</span>
                  </div>
                  <h3 className="chart-title">Better writing, fewer correct answers</h3>
                  
                  <table>
                    <thead>
                      <tr>
                        <th>Group</th>
                        <th style={{width: "40%"}}>Correct answer</th>
                        <th style={{textAlign: "right"}}>Gain in coherence<br/><span style={{fontWeight: "400", textTransform: "none", letterSpacing: "0"}}>vs. no AI · 10-point scale</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>No AI</td>
                        <td>
                          <strong>84.5%</strong>
                          <div className="bar" style={{width: "84.5%"}}></div>
                        </td>
                        <td className="gain">Baseline</td>
                      </tr>
                      <tr>
                        <td>GPT-4</td>
                        <td>
                          <strong>70.6%</strong>
                          <div className="bar" style={{width: "70.6%"}}></div>
                        </td>
                        <td className="gain">+1.05 points</td>
                      </tr>
                      <tr>
                        <td>GPT-4 with a prompting guide</td>
                        <td>
                          <strong>60.0%</strong>
                          <div className="bar" style={{width: "60%"}}></div>
                        </td>
                        <td className="gain">+1.47 points</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <p className="chart-source" style={{color: "#94a3b8"}}>
                    Accuracy and coherence were graded separately. These figures apply to one difficult strategy exercise. Dell'Acqua et al., Tables 7 and 9
                  </p>
                </div>

                <p>
                  In marketing, the mistake can be much less glamorous. A model can invent a date. It can also copy a perfectly accurate date from a brief that's now three months old. Even perfect copying sends customers the wrong information if the class has moved.
                </p>

                {/* Chart 4 */}
                <div className="chart-container chart-red">
                  <div className="chart-header">
                    <span>HOW AN ERROR SPREADS</span>
                    <span>ILLUSTRATIVE SCENARIO</span>
                  </div>
                  <h3 className="chart-title">The class moves to Sunday.</h3>
                  
                  <div className="error-flow">
                    <span style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{width: "3px", height: "16px", background: "var(--dark-sage)"}}></span> LIVE BOOKING CALENDAR</span>
                    <span>Saturday <span className="change">→</span> Sunday</span>
                  </div>
                  
                  <div className="error-tree">
                    <div className="error-root">The old brief still says Saturday</div>
                    <div className="error-lines"></div>
                    <div className="error-branches">
                      <div className="error-box">
                        <strong>Social post</strong>
                        "See you Saturday."
                      </div>
                      <div className="error-box">
                        <strong>Booking email</strong>
                        "Grab a Saturday spot."
                      </div>
                      <div className="error-box">
                        <strong>Reminder</strong>
                        "Your class is Saturday."
                      </div>
                    </div>
                  </div>
                  
                  <p className="chart-source">
                    One stale source can produce three messages that agree with each other. The booking calendar is the place to check the date.
                  </p>
                </div>

                <p>
                  That's why asking a second AI to proofread the first draft can miss the point. If both read the same old brief, they can agree on the same wrong date. I'd give every message the event ID from the booking system. If the date changes after approval, hold the queued messages for that event and let one person check them together.
                </p>
              </div>
            </section>

            {/* 04 — WHO GETS TO HIT SEND? */}
            <section className="essay-section" id="who-gets-to-hit-send" aria-labelledby="heading-send">
              <div className="section-heading">
                <h2 id="heading-send">Who gets to hit send?</h2>
              </div>
              <div className="prose">
                <p>
                  In his review of businesses using AI, Abhinav Mahajan asks managers to spell out what a system may do, which actions need approval and who handles exceptions. For a small marketing team, I'd start with what each message promises a customer. <sup><a href="#source-4">[4]</a></sup>
                </p>

                {/* Chart 5 */}
                <div className="chart-container chart-green">
                  <div className="chart-header">
                    <span>A SMALL TEAM'S SENDING RULES</span>
                    <span>MY SUGGESTED SETUP</span>
                  </div>
                  <h3 className="chart-title">Three jobs in the same inbox</h3>
                  
                  <div style={{marginTop: "20px"}}>
                    <div className="rule-row">
                      <div className="rule-label"><span className="dot dot-outline"></span> Let it draft</div>
                      <div className="rule-desc">Turn confirmed event details into briefs, subject lines and caption options. Keep drafts in the team's workspace.</div>
                    </div>
                    <div className="rule-row">
                      <div className="rule-label"><span className="dot dot-solid"></span> Let it send</div>
                      <div className="rule-desc">Send an approved reminder to a booked customer when the live date, booking status and contact preferences all match.</div>
                    </div>
                    <div className="rule-row">
                      <div className="rule-label"><span className="dot dot-coral"></span> Ask a person</div>
                      <div className="rule-desc">Hold a new discount, a change to the cancellation policy or a message to the whole list. The campaign owner checks the offer and audience before release.</div>
                    </div>
                  </div>
                  
                  <p className="chart-source">
                    Adapted from Mahajan's discussion of permissions and oversight. The examples and sending rules are mine. Sections III, IX and XVII
                  </p>
                </div>

                <p>
                  Handling the AI is a job in itself. Someone maintains the event data, checks which people enter each email sequence and reads the replies. If a customer books after the first sales email, someone has to make sure the next “Still thinking about it?” email drops out of the queue. Good copy won't fix a bad audience list.
                </p>
                <p>
                  Across the eleven occupations in the Danish study, about <strong>35% of the new AI-related tasks</strong> people described involved checking quality or handling ethics and compliance. The researchers counted tasks. A business still has to work out how many hours those checks will take. <sup><a href="#source-1">[1]</a></sup>
                </p>
                <p>
                  For a small business, I'd put a name next to every live campaign. Give that person time to check it, access to the booking system and a way to pause the send. If they're away, someone else has to know where the pause button is. That's a job an existing marketer can own.
                </p>
              </div>
            </section>

            {/* 05 — THE CLIENT WHO KEPT PAYING US */}
            <section className="essay-section" id="the-client-who-kept-paying" aria-labelledby="heading-client">
              <div className="section-heading">
                <h2 id="heading-client">The client who kept paying us</h2>
              </div>
              <div className="prose">
                <p>
                  The trapeze-school owner still works with someone on our team. He pays us more now. The spreadsheet used to tell us where to begin. Today a first pass is waiting for us, and we spend more of our time editing it, finding a better angle and making things that weren't in the original brief. AI saved both of us time, and we've used it to take on more projects together.
                </p>
                <p>
                  The most telling number in the Danish marketing results, for me, was <strong>85.8%</strong>. Among marketers who said chatbots saved them time, that share said they spent some of it on other tasks. <sup><a href="#source-1">[1]</a></sup> That sounds familiar. Our fee tells you what one client chose to pay. To find out what the change did for his business, I'd look at bookings per eligible recipient, customer complaints and how much time the team spent putting mistakes right. A full calendar can't answer any of those questions.
                </p>
                <p>
                  For some businesses, an owner, a good brief and a few reliable automations may be plenty. Our client was right about how much of our old work Claude could do. I hope he keeps making that joke. If most of my invoice still covered turning rows into drafts, I'd ask the same thing.
                </p>
                <p>
                  What I'd say to him now is simpler. “Yes, let's use the calendar. Before we schedule next week's email, what are people asking you at the bottom of the ladder?” That answer might change the best thing we send all month.
                </p>
              </div>
            </section>
          </article>
        </div>

        {/* SOURCES */}
        <section className="sources wrap" id="sources" aria-labelledby="source-heading">
          <div>
            <span className="section-label">READING NOTES</span>
            <h2 id="source-heading">Sources</h2>
          </div>
          <ol>
            {sources.map((source, index) => (
              <li key={index} id={`source-${index + 1}`}>
                <span>0{index + 1}</span>
                <div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
                  <span style={{fontSize: "12px", color: "var(--sage)", fontWeight: 600}}>{source.authors}</span>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" style={{fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px"}}>{source.title}</a>
                  <span style={{fontSize: "12px", color: "var(--sage)", lineHeight: 1.5}}>{source.meta}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* AUTHOR END */}
        <section className="author-end wrap">
          <Image src="/aryan_t.jpeg" alt="Aryan Trivedi outdoors" width={1230} height={1259} sizes="240px" />
          <div>
            <span className="section-label">FROM THE FOUNDER</span>
            <h2>
              Building for<br />how work evolves.
            </h2>
            <p>
              I started <Link href="/" className="research-link">Sage Kite</Link> to build an ecosystem around AI: products, workflows, insights, services and workforce.
            </p>
            <Link href="/about" className="text-link">
              More about Sage Kite
            </Link>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </>
  );
}
