import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/content/blog';
import { BlogArticleLayout } from '@/components/blog/BlogArticleLayout';
import { buildBlogMetadata } from '@/components/blog/blogMetadata';
import WhatIsDubsadoClient from './client';

const SLUG = 'what-is-dubsado';

/*
 * Title, excerpt, dates, tags, guide and FAQs for this post live in
 * content/blog/index.tsx, so the /blog listing, sitemap, metadata and
 * Article/FAQ schema all stay in sync. The article body is in ./client.tsx.
 */
export function generateMetadata(): Metadata {
  const post = getPostBySlug(SLUG);
  return post ? buildBlogMetadata(post) : { title: 'Article not found | Sage Kite' };
}

export default function WhatIsDubsadoPage() {
  const post = getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  return (
    <BlogArticleLayout post={post}>
      <WhatIsDubsadoClient />
    </BlogArticleLayout>
  );
}
