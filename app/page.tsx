import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/home/Hero';
import { Problem } from '../components/home/Problem';
import { GrowthOperations } from '../components/home/GrowthOperations';
import { Systems } from '../components/home/Systems';
import { Services } from '../components/home/Services';
import { HowItWorks } from '../components/home/HowItWorks';
import { SpecialistCapability } from '../components/home/SpecialistCapability';
import { MarketingEngine } from '../components/home/MarketingEngine';
import { PlatformsAndIndustries } from '../components/home/PlatformsAndIndustries';
import { Work } from '../components/home/Work';
import { Founder } from '../components/home/Founder';
import { Library } from '../components/home/Library';
import { Agency } from '../components/home/Agency';
import { FAQ } from '../components/home/FAQ';
import { HOME_FAQ_GROUPS } from '../components/home/faqData';
import { FinalCTA } from '../components/home/FinalCTA';
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/content/share-image';

export const metadata: Metadata = {
  title: 'Business Growth Consulting & Consultancy for SMEs | Sage Kite',
  description:
    'Sage Kite is a business growth consultancy for SMEs. Growth consulting, CRM implementation, digital marketing, AI SEO and virtual assistants, run as one system.',
  keywords: ["business growth consultancy", "business growth consulting", "CRM implementation", "marketing automation", "growth operations", "SME growth consulting"],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: 'https://www.sagekite.com/',
    title: 'Business Growth Consulting & Consultancy for SMEs | Sage Kite',
    description:
      'A business growth consultancy that advises, implements and executes: consultancy, CRM, marketing automation, marketing and specialist VA support, working as one system.',
    images: DEFAULT_OG_IMAGES,
  },
  // Same text as the root layout's twitter block except the title, which now matches the page title.
  // A page-level twitter block replaces the root one, so the rest is repeated here.
  twitter: {
    card: 'summary_large_image',
    title: 'Business Growth Consulting & Consultancy for SMEs | Sage Kite',
    description:
      'Sage Kite improves the systems, people and execution behind growth for small and medium-sized businesses.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.sagekite.com/#webpage',
      url: 'https://www.sagekite.com/',
      name: 'Business growth consulting for SMEs | Sage Kite',
      description:
        'Sage Kite is a business growth consultancy that improves the systems, people and execution behind growth.',
      isPartOf: { '@id': 'https://www.sagekite.com/#website' },
      about: { '@id': 'https://www.sagekite.com/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagekite.com/#faq',
      isPartOf: { '@id': 'https://www.sagekite.com/#website' },
      about: { '@id': 'https://www.sagekite.com/#organization' },
      inLanguage: 'en',
      mainEntity: HOME_FAQ_GROUPS.flatMap((group) => group.items).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <GrowthOperations />
        <Systems />
        <Services />
        <HowItWorks />
        <SpecialistCapability />
        <MarketingEngine />
        <PlatformsAndIndustries />
        <Work />
        <Founder />
        <Library />
        <Agency />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
