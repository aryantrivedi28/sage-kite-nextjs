import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/content/blog';
import { formatDate } from './formatDate';

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/**
 * A single article card for the responsive grid. Server component.
 * The whole card is one link; the "Read article" affordance is decorative.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card" prefetch={false}>
      <div className="blog-card-media">
        <Image
          src={post.featuredImage}
          alt={post.imageAlt ?? post.title} title={post.imageAlt ?? post.title}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 33vw"
          className="blog-card-img"
        />
      </div>
      <div className="blog-card-content">
        <div className="blog-meta">
          <span className="chip blog-chip">{post.category}</span>
          <span className="blog-meta-dot" aria-hidden="true">&bull;</span>
          <span>{post.readingTime}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="blog-card-foot">
          <span className="blog-card-date">{formatDate(post.publishedAt)}</span>
          <span className="blog-card-cta">
            Read article <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}
