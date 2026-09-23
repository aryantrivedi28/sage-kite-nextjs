const fs = require('fs');

let html = fs.readFileSync('activecampaign_clean.html', 'utf8');

// Extract title
const titleMatch = html.match(/<title>(.*?)<\/title>/);
const title = titleMatch ? titleMatch[1] : 'ActiveCampaign Implementation & Automation Services | Sage Kite';

// Extract description
const descMatch = html.match(/<meta name="description" content="(.*?)">/);
const description = descMatch ? descMatch[1] : '';

// Extract canonical
const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)">/);
const canonical = canonicalMatch ? canonicalMatch[1] : 'https://www.sagekite.com/platforms/activecampaign/';
const canonicalClean = canonical.replace('https://www.sagekite.example', 'https://www.sagekite.com');

// Extract JSON-LD
const jsonLdMatch = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
let jsonLd = jsonLdMatch ? jsonLdMatch[1] : '{}';
jsonLd = jsonLd.replace(/https:\/\/www\.sagekite\.example/g, 'https://www.sagekite.com');

// Extract styles
const styleMatches = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)];
let styles = styleMatches.map(m => m[1]).join('\n');

// Extract main
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
let mainContent = mainMatch ? mainMatch[0] : '';

// Convert HTML to JSX
let jsx = mainContent;
jsx = jsx.replace(/class="/g, 'className="');
jsx = jsx.replace(/for="/g, 'htmlFor="');
jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
jsx = jsx.replace(/<br>/g, '<br />');
jsx = jsx.replace(/<hr>/g, '<hr />');
jsx = jsx.replace(/<img([^>]*[^/])>/g, '<img$1 />');
jsx = jsx.replace(/<path([^>]*[^/])>/g, '<path$1 />');
jsx = jsx.replace(/<rect([^>]*[^/])>/g, '<rect$1 />');
jsx = jsx.replace(/<circle([^>]*[^/])>/g, '<circle$1 />');
jsx = jsx.replace(/<svg([^>]*[^/])>/g, '<svg$1>');

// Handle style="..." attribute
jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const objStr = rules.map(rule => {
        let [key, val] = rule.split(':').map(s => s.trim());
        if (!key) return '';
        // Camel case for normal CSS properties, leave variables as is
        let propName = key.startsWith('--') ? `'${key}'` : key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${propName}: '${val}'`;
    }).filter(Boolean).join(', ');
    return `style={{ ${objStr} } as React.CSSProperties}`;
});

// Fix Links
jsx = jsx.replace(/<a([^>]*)href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="$2"$3>$4</Link>');

const output = `import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  alternates: {
    canonical: "${canonicalClean}",
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "${canonicalClean}",
    title: "${title}",
    description: "${description}",
  },
  twitter: {
    card: "summary",
    title: "${title}",
    description: "${description}",
  },
};

export default function ActiveCampaignPage() {
  const jsonLd = ${jsonLd};

  return (
    <>
      <Header />
      
      <style dangerouslySetInnerHTML={{ __html: \`
${styles.replace(/`/g, '\\`')}
      \`}} />
      
      ${jsx}

      <Footer />
    </>
  );
}
`;

fs.mkdirSync('app/platforms/activecampaign', { recursive: true });
fs.writeFileSync('app/platforms/activecampaign/page.tsx', output);
console.log('Successfully created app/platforms/activecampaign/page.tsx');
