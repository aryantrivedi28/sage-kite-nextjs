import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page not found | Sage Kite',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="tint final">
          <div className="wrap final-inner">
            <h1>Page not found</h1>
            <p className="sub">
              The page you are looking for does not exist or has moved.
            </p>
            <div className="cta-row" style={{ marginTop: '32px' }}>
              <Link href="/" className="btn">
                Back to home
              </Link>
              <Link href="/blog" className="link">
                Read the blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
