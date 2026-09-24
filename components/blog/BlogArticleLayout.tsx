import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogGuide } from '@/components/blog/BlogGuide';
import { formatDate } from '@/components/blog/formatDate';
import { buildBlogJsonLd } from '@/components/blog/blogJsonLd';
import { getPublishedPosts, type BlogPost } from '@/content/blog';

/**
 * Page shell shared by every blog post: header, hero, guide sidebar, tags,
 * related posts, CTA and JSON-LD. The article body is passed as children.
 */
export function BlogArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const published = formatDate(post.publishedAt);

  const related = getPublishedPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const jsonLd = buildBlogJsonLd(post);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main">
        <article className="article">
          <header className="article-header">
            <div className="article-back">
              <Link href="/blog" className="link">
                &larr; Back to all articles
              </Link>
            </div>

            <span className="chip blog-chip article-category">
              {post.category}
            </span>

            <h1 className="article-title">{post.title}</h1>

            <p className="article-excerpt">{post.excerpt}</p>

            <div className="article-byline">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.author} title={post.author}
                  width={44}
                  height={44}
                  className="article-avatar"
                />
              )}
              <div className="article-byline-text">
                <span className="article-author">{post.author}</span>
                <span className="article-byline-meta">
                  <time dateTime={post.publishedAt}>{published}</time>
                  <span aria-hidden="true"> &middot; </span>
                  {post.readingTime}
                </span>
              </div>
            </div>
          </header>

          <div className="wrap">
            <figure className="article-hero-img">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt ?? post.title} title={post.imageAlt ?? post.title}
                fill
                sizes="(max-width: 1040px) 100vw, 1000px"
                priority
              />
            </figure>

            <div className="article-layout">
              <div className="article-content">
                {children}
              </div>

              <aside className="article-sidebar">
                {post.guide && post.guide.length > 0 && (
                  <BlogGuide items={post.guide} />
                )}
              </aside>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="article-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section className="blog-related">
            <div className="wrap">
              <div className="head">
                <span className="label">Keep reading</span>
                <h2 className="blog-related-title">More on {post.category}</h2>
              </div>
              <div className="blog-grid">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="tint final blog-cta">
          <div className="wrap final-inner">
            <h2>Ready to build systems that scale with you?</h2>
            <p className="sub">
              If a bottleneck, a messy CRM or a manual process is holding your growth
              back, we can help you fix the system behind it.
            </p>
            <div className="cta-row" style={{ marginTop: '32px' }}>
              <Link href="/contact" className="btn">
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
