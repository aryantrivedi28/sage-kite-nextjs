import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { FeaturedBlog } from '@/components/blog/FeaturedBlog';
import { BlogCard } from '@/components/blog/BlogCard';
import { getFeaturedPost, getRestPosts } from '@/content/blog';

const SITE_URL = 'https://www.sagekite.com';

export const metadata: Metadata = {
  title: 'Blog | Sage Kite',
  description:
    'Insights for smarter business growth — practical thinking on CRM, marketing, automation, operations, people and the systems behind sustainable growth.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: `${SITE_URL}/blog`,
    title: 'Insights for Smarter Business Growth | Sage Kite',
    description:
      'Practical thinking on CRM, marketing, automation and the systems behind sustainable business growth.',
  },
  twitter: {
    card: 'summary',
    title: 'Insights for Smarter Business Growth | Sage Kite',
    description:
      'Practical thinking on CRM, marketing, automation and the systems behind sustainable business growth.',
  },
};

export default function BlogIndexPage() {
  const featured = getFeaturedPost();
  const gridPosts = getRestPosts();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <BlogHeader />

        <section className="blog-listing">
          <div className="wrap">
            {featured && (
              <div className="blog-featured-wrap">
                <FeaturedBlog post={featured} />
              </div>
            )}

            {gridPosts.length > 0 && (
              <>
                <div className="blog-grid-head">
                  <h2 className="blog-grid-title">Latest articles</h2>
                </div>
                <div className="blog-grid">
                  {gridPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
