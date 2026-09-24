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

export const metadata: Metadata = {
  title: 'Business Growth Consulting for SMEs | Sage Kite',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: 'https://www.sagekite.com/',
    title: 'Sage Kite: business growth through systems, people and execution',
    description:
      'A business growth consultancy that advises, implements and executes: consultancy, CRM, marketing automation, marketing and specialist VA support, working as one system.',
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
