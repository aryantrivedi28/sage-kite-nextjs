import React from 'react';
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/content/share-image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { FeaturedBlog } from '@/components/blog/FeaturedBlog';
import { BlogCard } from '@/components/blog/BlogCard';
import { getFeaturedPost, getPublishedPosts } from '@/content/blog/live';

const SITE_URL = 'https://www.sagekite.com';

export const metadata: Metadata = {
  title: 'Business Growth, CRM & Marketing Insights | Sage Kite',
  description:
    'Practical guides to CRM platforms, marketing automation and the systems behind business growth, written for small and medium-sized businesses.',
  keywords: ["business growth insights", "CRM blog", "marketing automation guides", "growth operations", "Sage Kite blog"],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: `${SITE_URL}/blog`,
    title: 'Business Growth, CRM & Marketing Insights | Sage Kite',
    description:
      'Practical thinking on CRM, marketing, automation and the systems behind sustainable business growth.',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Growth, CRM & Marketing Insights | Sage Kite',
    description:
      'Practical thinking on CRM, marketing, automation and the systems behind sustainable business growth.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default async function BlogIndexPage() {
  const featured = await getFeaturedPost();
  // For now the featured post is also listed in the grid.
  const gridPosts = await getPublishedPosts();

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
