import type { Metadata } from 'next';
import type { BlogPost } from '@/content/blog';

const SITE_URL = 'https://www.sagekite.com';

/** Page metadata (title, canonical, Open Graph, Twitter) for a blog post. */
export function buildBlogMetadata(post: BlogPost): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = `${SITE_URL}${post.featuredImage}`;

  return {
    title: `${post.title} | Sage Kite`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'Sage Kite',
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 675,
          alt: post.imageAlt ?? post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}
