import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReadingProgress } from '@/components/founders-thoughts/ReadingProgress';

const SITE_URL = 'https://www.sagekite.com';
const SLUG = 'where-should-we-draw-the-line';
const PAGE_URL = `${SITE_URL}/founders-thoughts/${SLUG}`;
const IMAGE_URL = `${SITE_URL}/images/founders-thoughts/where-should-we-draw-the-line.png`;

const ESSAY = {
  slug: SLUG,
  title: 'Clients keep asking us to automate all their marketing. Where should we draw the line?',
  summary:
    'A trapeze school planned a year of social posts and emails with Claude. Aryan Trivedi on what to automate, what to check and who should hit send.',
  datePublished: '2026-11-21',
  image: '/images/founders-thoughts/where-should-we-draw-the-line.png',
  imageAlt:
    'Editorial illustration of a tightrope walker balancing between a human hand and an automated workflow',
};

export const metadata: Metadata = {
  title: 'Where Should We Draw the Line on Marketing Automation? | Sage Kite',
  description: ESSAY.summary,
  keywords: [
    'marketing automation',
    'AI automation agency',
    'Claude for marketing',
    'human in the loop',
    'Founder\u2019s Thoughts',
  ],
  authors: [{ name: 'Aryan Trivedi', url: `${SITE_URL}/about` }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    siteName: 'Sage Kite',
    url: PAGE_URL,
    title: ESSAY.title,
    description: ESSAY.summary,
    authors: ['Aryan Trivedi'],
    section: 'Founder\u2019s Thoughts',
    images: [{ url: IMAGE_URL, width: 1448, height: 1086, alt: ESSAY.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ESSAY.title,
    description: ESSAY.summary,
    images: [IMAGE_URL],
  },
};

const sources: { name: string; url?: string }[] = [
  {
    name: 'Sage Kite client engagement, trapeze school content automation, 2026',
  },
  {
    name: 'Anthropic, Claude model documentation',
    url: 'https://docs.anthropic.com/',
  },
  {
    name: 'Sage Kite internal playbook, Human-in-the-loop review for automated content',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${PAGE_URL}#article`,
      headline: ESSAY.title,
      description: ESSAY.summary,
      image: IMAGE_URL,
      datePublished: ESSAY.datePublished,
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
      keywords:
        'marketing automation, AI automation, human in the loop, content operations, ownership',
      citation: sources.map((s) => ({
        '@type': 'CreativeWork',
        name: s.name,
        ...(s.url ? { url: s.url } : {}),
      })),
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Founder\u2019s Thoughts',
          item: `${SITE_URL}/founders-thoughts`,
        },
        { '@type': 'ListItem', position: 3, name: ESSAY.title },
      ],
    },
  ],
};

export default function WhereShouldWeDrawTheLinePage() {
  return (
    <>
      <a className="skip" href="#the-ask">Skip to article</a>
      <Header />
      <main id="main" className="essay">
        <style dangerouslySetInnerHTML={{ __html: `.essay{font-size:16px;color:var(--ink)}.essay p{margin:1em 0}.essay section{padding-block:0}.essay *{box-sizing:border-box}.essay a{color:inherit;text-underline-offset:5px}.essay a:hover{color:color-mix(in srgb,var(--coral) 70%,var(--ink))}.essay a:focus-visible{outline:3px solid var(--coral);outline-offset:5px}.essay img{max-width:100%;height:auto}.essay a{-webkit-tap-highlight-color:transparent}.essay .reading-progress{position:fixed;top:0;left:0;width:100%;height:4px;background:var(--butter);z-index:60}.essay .reading-progress span{display:block;height:100%;background:var(--coral);width:0}.essay .ess-hero{padding-top:38px;padding-bottom:32px}.essay .eyebrow{display:flex;justify-content:space-between;gap:20px;font-size:12px;letter-spacing:1.6px;font-weight:700;color:var(--dark-sage);margin-bottom:45px}.essay .eyebrow>span:first-child:before{content:'';display:inline-block;width:22px;height:8px;background:var(--coral);margin-right:12px}.essay .ess-hero-grid{display:grid;grid-template-columns:1.38fr 1fr;align-items:center;gap:25px}.essay .ess-hero h1{font-size:clamp(48px,5.15vw,78px);line-height:1.08;letter-spacing:-3.5px;font-weight:800;margin:0;position:relative;z-index:2}.essay .actually{box-shadow:inset 0 -.1em var(--butter);font-style:normal}.essay .dek{font-size:19px;line-height:1.6;color:var(--dark-sage);margin:28px 0 0}.essay .hero-art{position:relative;margin:0;align-self:stretch;display:flex;flex-direction:column;justify-content:center;padding-top:8px}.essay .hero-art>img{width:100%;aspect-ratio:1/1;object-fit:cover;mix-blend-mode:multiply;filter:grayscale(1);border-radius:50% 50% 2px 2px}.essay .hero-art figcaption{font-size:10px;letter-spacing:1.1px;border-top:1px solid var(--ink);display:flex;gap:10px;justify-content:space-between;padding-top:12px;margin-top:10px}.essay .art-tag{position:absolute;bottom:90px;right:-12px;transform:rotate(-7deg);background:var(--butter);padding:12px 17px;font-size:12px;font-weight:800;letter-spacing:1px}.essay .hero-bottom{display:flex;align-items:center;justify-content:space-between;gap:25px;border-top:1px solid var(--light-sage);padding-top:23px;margin-top:35px}.essay .byline{display:flex;align-items:center;gap:14px}.essay .byline img{width:52px;height:52px;border-radius:50%;object-fit:cover;object-position:50% 32%;filter:grayscale(1)}.essay .byline strong{display:block;font-size:14px;margin-bottom:4px}.essay .byline span{display:block;font-size:12px;color:var(--sage)}.essay .reading-meta{font-size:11px;letter-spacing:1px}.essay .reading-meta span{margin:0 15px;color:var(--sage)}.essay .read-link{font-weight:700;font-size:14px}.essay .read-link span{display:none}.essay .thesis-band{background:var(--dark-sage);color:var(--warm-white);margin-top:25px;padding:49px 0 53px}.essay .thesis-band>.wrap{display:grid;grid-template-columns:1fr 2fr;align-items:start;column-gap:45px}.essay .section-label{font-size:12px;letter-spacing:1.4px;text-transform:uppercase;font-weight:700;display:block}.essay .thesis-band .section-label{color:var(--light-sage);padding-top:12px}.essay .thesis-band p{font-size:clamp(34px,3.4vw,50px);line-height:1.2;letter-spacing:-1.7px;font-weight:600;margin:0}.essay .thesis-band em{font-style:normal;color:var(--butter)}.essay .band-note{grid-column:2;font-size:13px;color:var(--light-sage);line-height:1.7;margin-top:20px}.essay .reading-layout{display:grid;grid-template-columns:225px minmax(0,1fr);gap:85px;padding-top:85px}.essay .contents-sticky{position:sticky;top:140px}.essay .toc-label{font-size:11px;letter-spacing:1.7px;font-weight:700;color:var(--sage)}.essay .contents nav{margin-top:22px;display:flex;flex-direction:column;border-top:1px solid var(--light-sage)}.essay .contents nav a{display:flex;gap:13px;padding:14px 0;border-bottom:1px solid var(--light-sage);font-size:13px;font-weight:600;text-decoration:none;color:var(--sage)}.essay .contents nav a span{font-size:11px;color:var(--sage);width:22px;flex-shrink:0}.essay .contents nav a.active{color:var(--ink);font-weight:800}.essay .contents nav a.active span{color:var(--coral)}.essay .margin-thought{margin-top:55px;border-left:3px solid var(--butter);padding-left:17px;max-width:190px}.essay .margin-thought span{font-size:10px;font-weight:700;letter-spacing:1.3px;color:var(--sage)}.essay .margin-thought p{font-size:16px;line-height:1.6;font-weight:600}.essay .article{min-width:0;max-width:890px}.essay .essay-section{position:relative;padding-bottom:72px;margin-bottom:68px;border-bottom:1px solid var(--light-sage);scroll-margin-top:110px}.essay .section-heading{margin-bottom:32px}.essay .section-heading .section-label{color:var(--sage);margin-bottom:17px}.essay .section-heading h2{font-size:clamp(31px,3.1vw,46px);line-height:1.12;letter-spacing:-1.8px;max-width:730px;margin:0;font-weight:800}.essay .prose{max-width:690px}.essay .prose p{font-size:18px;line-height:1.85;margin:0 0 24px;color:var(--dark-sage)}.essay .prose p:first-child{font-size:21px;line-height:1.65;color:var(--ink);font-weight:500}.essay .prose strong{font-weight:800;color:var(--ink)}.essay .prose sup{line-height:0}.essay .prose sup a{display:inline-flex;align-items:center;justify-content:center;font-size:11px;min-width:19px;height:19px;border:1px solid var(--light-sage);border-radius:50%;text-decoration:none;color:var(--dark-sage);margin-left:3px}.essay .prose sup a:hover{background:var(--butter)}.essay .pullquote{margin:42px 0;background:var(--pale-sage);color:var(--dark-sage);padding:35px 38px 35px 32px;border-left:5px solid var(--coral);font-size:30px;line-height:1.4;letter-spacing:-.7px;font-weight:700}.essay .research-note{float:right;width:190px;margin:0 -7px 25px 32px;padding:20px 0 20px 20px;border-left:1px solid var(--light-sage);position:relative;z-index:1;background:var(--warm-white)}.essay .research-note>span{font-size:9px;letter-spacing:1px;font-weight:700}.essay .research-note>b{display:block;font-size:48px;line-height:1.3;letter-spacing:-3px;font-weight:800;color:var(--coral);margin:10px 0}.essay .research-note p{font-size:13px;line-height:1.7;color:var(--sage)}.essay .research-note a{font-size:12px;font-weight:700}.essay .portrait-note{float:right;width:160px;margin:5px 0 22px 30px}.essay .portrait-note img{aspect-ratio:4/5;object-fit:cover;filter:grayscale(1);border-radius:90px 90px 0 0}.essay .portrait-note>span{display:block;font-size:13px;font-weight:800;margin-top:10px}.essay .portrait-note p{font-size:11px;line-height:1.7;color:var(--sage);margin:4px 0}.essay .table-scroll{margin:35px 0;overflow:auto}.essay table{border-collapse:collapse;width:100%;font-size:14px;line-height:1.7;min-width:450px}.essay caption{text-align:left;font-size:12px;padding-bottom:14px;color:var(--sage)}.essay th{background:var(--dark-sage);color:var(--warm-white);text-align:left;padding:18px;font-weight:600;width:58%}.essay th+th{width:42%}.essay td{padding:20px 18px;border-bottom:1px solid var(--light-sage);vertical-align:top}.essay tr:nth-child(even) td{background:var(--pale-sage)}.essay .sources{display:grid;grid-template-columns:1fr 1.6fr;gap:80px;padding:20px 0 75px;scroll-margin-top:115px}.essay .sources h2{font-size:38px;line-height:1.2;letter-spacing:-1.5px;margin:24px 0}.essay .sources p{font-size:15px;line-height:1.8;color:var(--sage)}.essay .sources ol{padding:0;margin:0;list-style:none}.essay .sources li{display:flex;gap:20px;padding:16px 0;border-bottom:1px solid var(--light-sage);scroll-margin-top:125px;transition:background .2s}.essay .sources li:target{background:var(--butter-soft)}.essay .sources li>span{font-size:11px;line-height:2;color:var(--sage);flex-shrink:0}.essay .sources li>a{font-size:14px;line-height:1.6;text-decoration:none}.essay .sources li>a:hover{text-decoration:underline}.essay .author-end{background:var(--pale-sage);padding:45px;display:grid;grid-template-columns:240px 1fr;align-items:center;gap:60px;margin-bottom:90px}.essay .author-end>img{width:240px;aspect-ratio:4/5;object-fit:cover;filter:grayscale(1);object-position:center;border-radius:130px 130px 0 0}.essay .author-end h2{font-size:48px;line-height:1.1;letter-spacing:-2px;margin:20px 0}.essay .author-end p{font-size:17px;line-height:1.7;max-width:600px;color:var(--dark-sage)}.essay .text-link{display:inline-block;font-size:14px;font-weight:800;margin-top:10px}@media(min-width:1450px){.essay .ess-hero h1{font-size:80px}.essay .hero-art>img{max-height:510px}.essay .ess-hero-grid{grid-template-columns:1.4fr 1fr}.essay .reading-layout{gap:100px}.essay .prose{max-width:720px}}@media(max-width:1100px){.essay .ess-hero h1{font-size:59px;letter-spacing:-2.8px}.essay .ess-hero-grid{grid-template-columns:1.35fr 1fr;gap:8px}.essay .hero-art figcaption{font-size:8px}.essay .art-tag{font-size:10px;right:0;bottom:60px}.essay .reading-layout{grid-template-columns:180px minmax(0,1fr);gap:45px}.essay .reading-meta{display:none}.essay .research-note{float:none;width:auto;display:grid;grid-template-columns:110px 1fr;gap:8px 20px;margin:0 0 32px;padding:22px;border-left:0;background:var(--pale-sage)}.essay .research-note>span{grid-column:1/-1}.essay .research-note>b{grid-row:2/4;margin:0;align-self:center}.essay .research-note p{margin:0}.essay .research-note a{grid-column:2}.essay .sources{gap:45px}.essay .thesis-band>.wrap{grid-template-columns:1fr 2fr}}@media(max-width:760px){.essay .ess-hero{padding-top:27px}.essay .eyebrow{font-size:10px;letter-spacing:.9px;margin-bottom:30px;align-items:center}.essay .eyebrow>span:last-child{font-size:9px;text-align:right;max-width:130px}.essay .ess-hero-grid{display:block}.essay .ess-hero h1{font-size:clamp(38px,8.1vw,61px);letter-spacing:-2px;line-height:1.12}.essay .dek{font-size:17px;line-height:1.55;margin-top:23px}.essay .hero-art{margin-top:25px;max-width:440px;margin-inline:auto}.essay .hero-art>img{aspect-ratio:1.5;border-radius:160px 160px 0 0}.essay .hero-art figcaption{font-size:9px;padding-top:10px;margin-top:9px}.essay .art-tag{bottom:47px;right:-3px}.essay .hero-bottom{margin-top:26px;padding-top:20px;gap:10px}.essay .byline img{width:42px;height:42px}.essay .byline{gap:10px}.essay .byline strong{font-size:13px}.essay .byline span{font-size:10px;max-width:170px}.essay .read-link{font-size:12px;flex-shrink:0}.essay .thesis-band{margin-top:10px;padding:35px 0}.essay .thesis-band>.wrap{display:block}.essay .thesis-band .section-label{font-size:10px;padding:0;margin-bottom:22px}.essay .thesis-band p{font-size:36px;letter-spacing:-1.3px}.essay .band-note{display:block;font-size:12px;margin-top:20px}.essay .reading-layout{display:block;padding-top:35px}.essay .contents{margin-bottom:40px}.essay .contents-sticky{position:static}.essay .contents nav{display:flex;flex-flow:row wrap;margin-top:15px;border:0;gap:9px}.essay .contents nav a{padding:9px 10px;border:1px solid var(--light-sage);font-size:11px;gap:7px}.essay .contents nav a span{font-size:10px;width:auto}.essay .contents nav a.active{background:var(--pale-sage)}.essay .margin-thought{display:none}.essay .section-heading .section-label{font-size:10px;margin-bottom:15px}.essay .section-heading h2{font-size:34px;line-height:1.15;letter-spacing:-1.2px}.essay .essay-section{padding-bottom:37px;margin-bottom:39px;scroll-margin-top:95px}.essay .prose p{font-size:17px;line-height:1.85;margin-bottom:22px}.essay .prose p:first-child{font-size:19px;line-height:1.65}.essay .pullquote{padding:27px 23px;margin:32px 0;font-size:25px;line-height:1.4}.essay .research-note{grid-template-columns:95px 1fr;padding:20px;gap:6px 18px}.essay .research-note>b{font-size:40px}.essay .research-note p{font-size:12px}.essay .research-note a{font-size:11px}.essay .portrait-note{display:none}.essay .sources{display:block;padding:10px 0 50px}.essay .sources h2{font-size:33px;margin:18px 0}.essay .sources>div{margin-bottom:25px}.essay .sources li{gap:15px}.essay .sources li>a{font-size:13px}.essay .author-end{padding:28px;grid-template-columns:90px 1fr;gap:23px;margin-bottom:50px;align-items:start}.essay .author-end>img{width:90px;aspect-ratio:3/4}.essay .author-end .section-label{font-size:9px;letter-spacing:1px}.essay .author-end h2{font-size:28px;line-height:1.15;letter-spacing:-1px;margin:14px 0}.essay .author-end p{font-size:14px;line-height:1.7}.essay .author-end .text-link{font-size:12px}}@media(prefers-reduced-motion:reduce){.essay *{transition:none!important}}@media print{.essay .contents,.essay .hero-art,.essay .reading-progress,.essay .read-link,.essay .author-end{display:none}.essay .reading-layout{display:block}.essay .ess-hero h1{font-size:40px}.essay .ess-hero-grid{display:block}.essay .thesis-band{background:none;color:var(--ink);padding:20px 0}.essay .thesis-band em{color:var(--ink)}.essay .essay-section{break-inside:auto}.essay .prose{max-width:none}.essay .sources{display:block}.essay .pullquote,.essay .concept{break-inside:avoid}.essay .research-note{float:none}}.essay .research-link{font-weight:700;text-decoration-color:var(--butter);text-decoration-thickness:3px;text-underline-offset:3px}.essay .concept{clear:both;margin:52px 0 0;border:1px solid var(--sage);background:var(--warm-white);color:var(--ink);padding:30px;position:relative;box-shadow:8px 8px 0 var(--ink)}.essay .concept:before{content:'SAGE KITE / FIELD DIAGRAM';position:absolute;right:20px;top:-10px;background:var(--ink);color:var(--warm-white);padding:5px 8px;font-size:8px;letter-spacing:1.2px}.essay .concept figcaption{display:grid;grid-template-columns:175px 1fr;gap:20px;padding-bottom:24px;border-bottom:2px solid var(--ink)}.essay .concept figcaption span{font-size:10px;letter-spacing:1.2px;font-weight:800}.essay .concept figcaption strong{font-size:20px;line-height:1.35}.essay .concept-takeaway{margin:23px 0 0!important;padding-top:18px;border-top:1px solid var(--light-sage);font-size:14px!important;line-height:1.6!important;font-weight:700!important;color:var(--ink)!important}.essay .ladder-flow{display:grid;grid-template-columns:1fr 125px 1fr 1fr;gap:10px;align-items:stretch;padding-top:25px}.essay .ladder-step{padding:18px;border:1px solid var(--ink);min-height:125px;display:flex;flex-direction:column}.essay .ladder-step>span,.essay .loop-track span{font-size:9px;letter-spacing:1px}.essay .ladder-step b{font-size:16px;margin:22px 0 7px}.essay .ladder-step small{font-size:11px;line-height:1.5;color:var(--dark-sage)}.essay .muted-step{background:repeating-linear-gradient(-45deg,var(--pale-sage),var(--pale-sage) 4px,var(--warm-white) 4px,var(--warm-white) 9px)}.essay .ladder-break{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:7px}.essay .ladder-break i{height:23px;border-left:1px dashed var(--ink)}.essay .ladder-break em{font-size:10px;line-height:1.4;font-weight:800;font-style:normal;background:var(--ink);color:var(--warm-white);padding:8px}.essay .before-after{display:grid;grid-template-columns:1fr 90px 1.45fr;gap:16px;align-items:center;padding-top:25px}.essay .before-after>div:not(.versus){border:1px solid var(--ink);padding:20px;min-height:190px}.essay .before-after span{font-size:9px;letter-spacing:1.2px}.essay .before-after b{display:block;font-size:18px;margin:12px 0 20px}.essay .before-after small{display:block;font-size:11px;margin-top:18px;color:var(--dark-sage)}.essay .single-task{background:var(--ink);color:var(--warm-white);padding:15px;text-align:center;font-weight:800}.essay .function-line{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.essay .function-line i{font-style:normal;font-size:10px;padding:14px 4px;text-align:center;border:1px solid var(--ink);background:var(--pale-sage)}.essay .function-line i:nth-child(even){background:var(--ink);color:var(--warm-white)}.essay .versus{text-align:center;font-size:9px;font-weight:800;letter-spacing:1px}.essay .loop-track{display:grid;grid-template-columns:repeat(7,auto);align-items:center;gap:8px;padding:28px 0 12px}.essay .loop-track>div{width:105px;height:105px;border-radius:50%;border:1px solid var(--ink);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.essay .loop-track b{font-size:14px;margin:7px 0 3px}.essay .loop-track small{font-size:9px;color:var(--dark-sage)}.essay .loop-track>i{display:block;width:35px;border-top:2px solid var(--ink)}.essay .dark-note{background:var(--ink);color:var(--warm-white)!important;border:0;padding:17px 18px!important}.essay .value-stack{padding-top:25px}.essay .value-stack>div{padding:24px;display:grid;grid-template-columns:100px 1fr;align-items:center}.essay .value-stack span{font-size:11px;letter-spacing:1.5px;font-weight:800}.essay .value-stack b{font-size:16px}.essay .stack-top{background:var(--ink);color:var(--warm-white);margin:0 7%}.essay .stack-base{background:var(--light-sage);border:1px solid var(--ink)}.essay .flywheel-grid{width:430px;max-width:100%;aspect-ratio:1;margin:25px auto 10px;display:grid;grid-template-columns:1fr 1fr;gap:68px;position:relative}.essay .flywheel-grid>div:not(.flywheel-center){border:1px solid var(--ink);padding:18px;display:flex;flex-direction:column;justify-content:center;background:var(--warm-white);position:relative;z-index:2}.essay .flywheel-grid>div:not(.flywheel-center):nth-child(2n){background:var(--ink);color:var(--warm-white)}.essay .flywheel-grid span{font-size:9px}.essay .flywheel-grid b{font-size:17px;margin:8px 0}.essay .flywheel-grid small{font-size:10px}.essay .flywheel-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:90px;height:90px;border-radius:50%;background:var(--warm-white);border:2px solid var(--ink);display:grid;place-items:center;text-align:center;font-size:11px;font-weight:800;letter-spacing:1px;z-index:3}.essay .flywheel-grid:before,.essay .flywheel-grid:after{content:'';position:absolute;inset:12%;border:1px dashed var(--ink);border-radius:50%;pointer-events:none}.essay .flywheel-grid:after{inset:25%;border-style:solid}@media(max-width:760px){.essay .concept{margin-top:35px;padding:22px 18px;box-shadow:5px 5px 0 var(--ink)}.essay .concept:before{right:10px}.essay .concept figcaption{display:block;padding-bottom:18px}.essay .concept figcaption span{display:block;margin-bottom:10px}.essay .concept figcaption strong{font-size:17px}.essay .ladder-flow{grid-template-columns:1fr;gap:8px}.essay .ladder-step{min-height:105px}.essay .ladder-break{display:grid;grid-template-columns:1fr auto 1fr}.essay .ladder-break i{height:0;border-left:0;border-top:1px dashed var(--ink);width:100%}.essay .before-after{grid-template-columns:1fr}.essay .versus{padding:4px}.essay .function-line{grid-template-columns:repeat(4,1fr)}.essay .loop-track{grid-template-columns:1fr;justify-items:center}.essay .loop-track>div{width:100%;height:auto;border-radius:0;padding:17px}.essay .loop-track>i{width:0;height:24px;border-top:0;border-left:2px solid var(--ink)}.essay .value-stack>div{display:block}.essay .value-stack span{display:block;margin-bottom:8px}.essay .flywheel-grid{gap:45px}.essay .flywheel-grid>div:not(.flywheel-center){padding:12px}.essay .flywheel-grid b{font-size:14px}.essay .flywheel-center{width:72px;height:72px;font-size:9px}}@media(min-width:1101px){.essay .ess-hero{padding-top:24px;padding-bottom:24px}.essay .eyebrow{margin-bottom:26px}.essay .ess-hero h1{font-size:clamp(47px,min(4.7vw,9.6vh),68px)}.essay .hero-art{width:min(100%,52vh);justify-self:end}.essay .hero-bottom{margin-top:36px;padding-top:18px}}@media(min-width:1101px),(max-width:760px){.essay .ess-hero{--ess-hdr:97px;display:flex;flex-direction:column;min-height:calc(100svh - var(--ess-hdr))}.essay .ess-hero::before{content:'';flex:1 1 0;max-height:32px}.essay .ess-hero::after{content:'';flex:1 1 0}}@media(max-width:420px){.essay .ess-hero{--ess-hdr:88px}}.essay .sources.wrap{padding-left:var(--gutter);padding-right:var(--gutter)}.essay .sources li>span{min-width:18px;font-variant-numeric:tabular-nums}.essay .author-end.wrap{width:calc(100% - 2 * var(--gutter));max-width:calc(var(--wrap) - 2 * var(--gutter));margin-left:auto;margin-right:auto}@media(min-width:761px) and (max-width:1100px){.essay .ess-hero h1{font-size:clamp(40px,5.6vw,59px)}}@media(min-width:761px) and (max-width:1100px){.essay .reading-layout{display:block;padding-top:60px}.essay .contents{margin-bottom:48px}.essay .contents-sticky{position:static}.essay .contents nav{display:flex;flex-flow:row wrap;margin-top:15px;border:0;gap:9px}.essay .contents nav a{padding:9px 12px;border:1px solid var(--light-sage);font-size:12px;gap:7px;color:var(--ink)}.essay .contents nav a span{width:auto}.essay .margin-thought{display:none}.essay .article{max-width:none}}@media(max-width:1100px){.essay .eyebrow,.essay .eyebrow>span:last-child{font-size:11px}.essay .art-tag{font-size:11px}.essay .byline span{font-size:12px;max-width:none}.essay .section-label,.essay .section-heading .section-label,.essay .thesis-band .section-label,.essay .author-end .section-label{font-size:11px}.essay .contents nav a span{font-size:11px}.essay .research-note>span,.essay .concept figcaption span{font-size:11px}.essay .ladder-step>span,.essay .loop-track span,.essay .before-after span,.essay .flywheel-grid span{font-size:11px}.essay .ladder-step small,.essay .before-after small,.essay .loop-track small,.essay .flywheel-grid small{font-size:12px}.essay .ladder-break em,.essay .function-line i,.essay .versus{font-size:11px}.essay .flywheel-center{font-size:11px}.essay .band-note{font-size:13px}}@media(max-width:760px){.essay .ess-hero h1{font-size:clamp(30px,10.1vw,61px)}.essay .eyebrow{flex-wrap:wrap;row-gap:10px}.essay .eyebrow>span{white-space:nowrap}.essay .table-scroll{overflow:visible}.essay table{min-width:0;display:block;font-size:15px}.essay caption{display:block;font-size:13px}.essay thead{display:none}.essay tbody,.essay tr,.essay td{display:block;width:100%}.essay tr{border:1px solid var(--light-sage);margin-bottom:12px}.essay td{border-bottom:0;padding:16px 18px}.essay td+td{border-top:1px dashed var(--light-sage)}.essay td:nth-child(2)::before{content:'What it could look like in practice';display:block;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--sage);margin-bottom:6px}}.essay .hero-art>img,.essay .byline img,.essay .portrait-note img,.essay .author-end>img{filter:none}` }} />
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
                  Clients keep asking us to automate all their marketing.
                  <br />
                  Where should we <span className="actually">draw the line?</span>
                </h1>
                <p className="dek">
                  A trapeze school planned a year of social posts and emails with Claude.
                  <br />
                  What to automate, what to check and who should hit send.
                </p>
              </div>
              <figure className="hero-art">
                <Image
                  src="/images/founders-thoughts/where-should-we-draw-the-line.png"
                  alt={ESSAY.imageAlt}
                  width={1448}
                  height={1086}
                  priority
                  sizes="(max-width: 760px) 90vw, 40vw"
                />
                <span className="art-tag">WHO HITS SEND?</span>
              </figure>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="byline">
              <Image src="/aryan_t.jpeg" alt="Aryan Trivedi" width={60} height={60} />
              <div>
                <strong>Aryan Trivedi</strong>
                <span>
                  Founder, <Link href="/">Sage Kite</Link> &amp;{' '}
                  <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer">
                    GHL Scale Up
                  </a>
                </span>
              </div>
            </div>
            <div className="reading-meta">
              8 MIN READ <span>/</span> AI, MARKETING &amp; OWNERSHIP
            </div>
            <a className="read-link" href="#the-ask">
              Read the essay <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* THESIS BAND */}
        <div className="thesis-band">
          <div className="wrap">
            <span className="section-label">THE LINE I'M LOOKING FOR</span>
            <p>
              Automate the doing.
              <br />
              Never the <em>deciding.</em>
            </p>
            <span className="band-note">
              A founder's note from client work,<br />
              drawn from a year of marketing builds.
            </span>
          </div>
        </div>

        {/* READING LAYOUT */}
        <div className="reading-layout wrap">
          <aside className="contents">
            <div className="contents-sticky">
              <span className="toc-label">IN THIS ESSAY</span>
              <nav aria-label="Article sections">
                <a href="#the-ask" data-section="the-ask">
                  <span>01</span>The ask
                </a>
                <a href="#the-plan" data-section="the-plan">
                  <span>02</span>The plan
                </a>
                <a href="#the-line" data-section="the-line">
                  <span>03</span>The line
                </a>
                <a href="#the-check" data-section="the-check">
                  <span>04</span>The check
                </a>
                <a href="#the-send" data-section="the-send">
                  <span>05</span>The send
                </a>
                <a href="#next" data-section="next">
                  <span>06</span>What comes next
                </a>
                <a href="#sources" data-section="sources">
                  <span>↗</span>Sources &amp; reading
                </a>
              </nav>
              <div className="margin-thought">
                <span>FIELD NOTES</span>
                <p>
                  If the automation sends it,
                  <br />
                  who is accountable for it?
                </p>
              </div>
            </div>
          </aside>

          <article className="article">
            {/* 01 — THE ASK */}
            <section className="essay-section" id="the-ask" aria-labelledby="heading-the-ask">
              <div className="section-heading">
                <span className="section-label">01 / The ask</span>
                <h2 id="heading-the-ask">
                  "Can Claude run our whole marketing for the year?"
                </h2>
              </div>
              <div className="prose">
                <p>
                  A trapeze school came to us with a simple brief: take every social post and every
                  email for the next twelve months, and put it on autopilot with Claude.
                </p>
                <p>
                  On paper, it's the cleanest possible version of what clients are asking for right
                  now. A year of content, generated, scheduled and sent without a human in the loop.
                  Fewer hands, faster turnaround, a flat cost.
                </p>
                <p>
                  I said we could do most of it. I said I wasn't sure we should do all of it.
                </p>
                <p>
                  That gap — between what the tools can do and what a business should hand over — is
                  the same gap showing up in almost every automation conversation we have. It is
                  easy to describe the automation. It is harder to describe the line.
                </p>
                <p>
                  This essay is my attempt to draw that line in public, using a real brief as the
                  example.
                </p>
              </div>
            </section>

            {/* 02 — THE PLAN */}
            <section className="essay-section" id="the-plan" aria-labelledby="heading-the-plan">
              <div className="section-heading">
                <span className="section-label">02 / The plan</span>
                <h2 id="heading-the-plan">What a fully automated year actually looks like.</h2>
              </div>
              <div className="prose">
                <p>
                  The trapeze school's marketing has a rhythm. There are class schedules that change
                  seasonally. There are events, workshops, beginner drops. There are emails that go
                  to people who booked a trial and didn't come back. There are posts that show the
                  class in motion.
                </p>
                <p>
                  A year of that is a lot of output. Claude can draft all of it. It can hold the
                  brand voice, follow the schedule, vary the phrasing and produce a week of emails
                  in a few minutes.
                </p>
                <p>
                  But the plan also contains decisions. Which workshop gets promoted in March? Which
                  segment gets the win-back email first? When a class fills up, does the post go out
                  anyway or does it change to a waitlist? When a customer complains publicly, who
                  decides what the school says?
                </p>
                <p>
                  Those decisions don't live in the same place as the drafting. They live in the
                  business. That's the distinction the trapeze school's brief ran straight into.
                </p>
              </div>
            </section>

            {/* 03 — THE LINE */}
            <section className="essay-section" id="the-line" aria-labelledby="heading-the-line">
              <div className="section-heading">
                <span className="section-label">03 / The line</span>
                <h2 id="heading-the-line">Where the automation stops and the owner starts.</h2>
              </div>
              <aside className="research-note">
                <span>THE LINE</span>
                <b>1 : 1</b>
                <p>
                  Every automated output needs one named person who can veto it. No exceptions, no
                  shared ownership.
                </p>
                <a href="#source-1">Read the field note</a>
              </aside>
              <div className="prose">
                <p>
                  The line I'd draw is not between tasks and tools. It is between{' '}
                  <strong>generation</strong> and <strong>accountability</strong>.
                </p>
                <p>
                  Generating is what the model does. It produces a draft, a variant, a schedule. It
                  can be fast, consistent and cheap. Accountability is what a person does. Someone
                  decides what goes out, what doesn't, and is willing to stand behind the result.
                </p>
                <p>
                  For the trapeze school, that meant a different arrangement than "all year on
                  autopilot." Claude drafts the calendar, the posts and the emails. A person — either
                  on their team or on ours — reviews each batch, approves it and owns the outcome.
                  The volume goes up. The decision-making stays with a human.
                </p>
                <blockquote className="pullquote">
                  The tool can do the work. It can't do the owning.
                </blockquote>
                <p>
                  This is not a small distinction. It changes what the client is buying, how the
                  workflow is priced and what the automation has to be able to do. It also changes
                  who is on the hook when a post lands badly or an email goes out to the wrong
                  segment.
                </p>
              </div>

              <figure className="concept concept-expansion" aria-labelledby="expansion-title">
                <figcaption>
                  <span>THE AUTOMATION LINE</span>
                  <strong id="expansion-title">Who does what.</strong>
                </figcaption>
                <div className="before-after">
                  <div>
                    <span>THE TOOL</span>
                    <b>Claude</b>
                    <div className="single-task">Draft</div>
                    <small>Generates volume</small>
                  </div>
                  <div className="versus">BECOMES</div>
                  <div>
                    <span>THE OWNER</span>
                    <b>One named person</b>
                    <div className="function-line">
                      <i>Read</i>
                      <i>Decide</i>
                      <i>Approve</i>
                      <i>Send</i>
                    </div>
                    <small>Owns what goes out</small>
                  </div>
                </div>
              </figure>
            </section>

            {/* 04 — THE CHECK */}
            <section className="essay-section" id="the-check" aria-labelledby="heading-the-check">
              <div className="section-heading">
                <span className="section-label">04 / The check</span>
                <h2 id="heading-the-check">What "reviewed" has to actually mean.</h2>
              </div>
              <div className="prose">
                <p>
                  The word "reviewed" does a lot of work in automation conversations. It can mean a
                  careful read. It can also mean a glance before hitting publish. Both get called
                  the same thing, and the difference only shows up later.
                </p>
                <p>
                  For our line to hold, the review has to be real. That means the person approving
                  the batch has the time, the context and the authority to say no. If they don't,
                  the automation is not actually supervised. It is just named as if it were.
                </p>
                <p>
                  In practice this looks like a checklist, not a vibe. Every batch has an owner.
                  Every owner reads the whole batch. Any batch that changes a schedule, a price or a
                  customer segment goes to a second reader. The automation can propose. Only the
                  owner can publish.
                </p>
                <p>
                  That is a slower process than pure autopilot. It is also faster than a rebuild
                  after a bad send. The value is not in the speed of the model. It is in the
                  confidence that a person has actually looked.
                </p>
              </div>
            </section>

            {/* 05 — THE SEND */}
            <section className="essay-section" id="the-send" aria-labelledby="heading-the-send">
              <div className="section-heading">
                <span className="section-label">05 / The send</span>
                <h2 id="heading-the-send">Who hits send, and why it matters.</h2>
              </div>
              <div className="prose">
                <p>
                  The most important question in any automation is not "what can it do?" It is "who
                  is responsible when it goes out?"
                </p>
                <p>
                  For the trapeze school, we set a simple rule: no automated send without a named
                  owner. That owner is visible on the calendar, credited in the workflow and
                  reachable if something goes wrong. When a customer replies to a campaign, they
                  are replying to a person, not to a system.
                </p>
                <p>
                  That changes the way the school talks about its marketing. It is not "our AI runs
                  it." It is "our team runs it, with AI helping." The story is more honest, and it
                  sets a better expectation with customers.
                </p>
                <blockquote className="pullquote">
                  Automation without an owner is not leverage. It is borrowed risk.
                </blockquote>
                <p>
                  This is where I think most automation projects quietly fail. The workflow works.
                  The output looks right. But no one is actually accountable, so the small
                  problems compound until the system is rebuilt from scratch.
                </p>
              </div>
            </section>

            {/* 06 — WHAT COMES NEXT */}
            <section className="essay-section" id="next" aria-labelledby="heading-next">
              <div className="section-heading">
                <span className="section-label">06 / What comes next</span>
                <h2 id="heading-next">The line is a product decision.</h2>
              </div>
              <aside className="portrait-note">
                <Image
                  src="/aryan_t.jpeg"
                  alt="Aryan Trivedi, founder of Sage Kite"
                  width={1230}
                  height={1259}
                  sizes="160px"
                />
                <span>Aryan Trivedi</span>
                <p>
                  Founder, Sage Kite &amp;{' '}
                  <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer">
                    GHL Scale Up
                  </a>
                </p>
              </aside>
              <div className="prose">
                <p>
                  I don't think the line is a philosophical question. It's a product decision that
                  every automation business has to make on purpose, or it gets made by default.
                </p>
                <p>
                  The default is total autopilot: everything generated, everything scheduled,
                  nothing reviewed. It demos well. It is cheap. It is also the version that loses
                  clients the first time a bad send goes out to a full list.
                </p>
                <p>
                  The deliberate version is what we built for the trapeze school: a high-volume
                  draft pipeline with a named owner on every batch. It is more expensive to run. It
                  is also the version that keeps the client's trust, which is the only thing that
                  makes the automation worth having.
                </p>
                <p>
                  When everyone has Claude, the differentiator isn't the prompt. It's the line. The
                  businesses that can say clearly what they automate and what they never will are
                  the ones I'd bet on.
                </p>
                <p>
                  For us, the line is simple: automate the doing, own the deciding. The trapeze
                  school gets a year of content out of it. The team gets to sleep at night. That's
                  the trade I want to make.
                </p>
              </div>

              <figure className="concept concept-loop" aria-labelledby="cleanup-title">
                <figcaption>
                  <span>THE OWNERSHIP LOOP</span>
                  <strong id="cleanup-title">Fast output is not the same as finished work.</strong>
                </figcaption>
                <div className="loop-track">
                  <div>
                    <span>01</span>
                    <b>Draft</b>
                    <small>Claude produces</small>
                  </div>
                  <i></i>
                  <div>
                    <span>02</span>
                    <b>Review</b>
                    <small>Owner reads</small>
                  </div>
                  <i></i>
                  <div>
                    <span>03</span>
                    <b>Approve</b>
                    <small>Owner decides</small>
                  </div>
                  <i></i>
                  <div>
                    <span>04</span>
                    <b>Send</b>
                    <small>Owner owns</small>
                  </div>
                </div>
                <p className="concept-takeaway dark-note">
                  The tool is not the leverage. The named owner is.
                </p>
              </figure>
            </section>
          </article>
        </div>

        {/* SOURCES */}
        <section className="sources wrap" id="sources" aria-labelledby="source-heading">
          <div>
            <span className="section-label">FOLLOW THE EVIDENCE</span>
            <h2 id="source-heading">
              The reading
              <br />
              behind the line.
            </h2>
            <p>
              Field notes and references.
              <br />
              Linked for context.
            </p>
          </div>
          <ol>
            <li id="source-1">
              <span>01</span>
              <span>Sage Kite client engagement, trapeze school content automation, 2026</span>
            </li>
            <li id="source-2">
              <span>02</span>
              <a href="https://docs.anthropic.com/" target="_blank" rel="noopener noreferrer">
                Anthropic, Claude model documentation
              </a>
            </li>
            <li id="source-3">
              <span>03</span>
              <span>Sage Kite internal playbook, Human-in-the-loop review for automated content</span>
            </li>
          </ol>
        </section>

        {/* AUTHOR END */}
        <section className="author-end wrap">
          <Image src="/aryan_t.jpeg" alt="Aryan Trivedi outdoors" width={1230} height={1259} sizes="240px" />
          <div>
            <span className="section-label">FROM THE FOUNDER</span>
            <h2>
              Building for
              <br />
              how work evolves.
            </h2>
            <p>
              I started <Link href="/" className="research-link">Sage Kite</Link> to build an ecosystem
              around AI: products, workflows, insights, services and workforce.
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
