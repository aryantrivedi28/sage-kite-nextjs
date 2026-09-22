import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/content/blog';
import { formatDate } from './formatDate';

/**
 * The headline article, shown above the grid in a larger two-column layout.
 * Server component. Stacks to a single column on tablet and mobile.
 */
export function FeaturedBlog({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="featured-blog" prefetch={false}>
      <div className="featured-blog-media">
        <Image
          src={post.featuredImage}
          alt={post.imageAlt ?? post.title}
          fill
          sizes="(max-width: 1040px) 100vw, 58vw"
          className="featured-blog-img"
          priority
        />
      </div>
      <div className="featured-blog-body">
        <div className="blog-meta">
          <span className="label featured-blog-label">Featured</span>
          <span className="chip blog-chip">{post.category}</span>
        </div>
        <h2 className="featured-blog-title">{post.title}</h2>
        <p className="featured-blog-excerpt">{post.excerpt}</p>
        <div className="blog-meta featured-blog-meta">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="blog-meta-dot" aria-hidden="true">&bull;</span>
          <span>{post.readingTime}</span>
        </div>
        <span className="btn btn-s featured-blog-cta">Read article</span>
      </div>
    </Link>
  );
}
