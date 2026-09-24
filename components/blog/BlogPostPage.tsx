import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { BlogPost } from '@/content/blog';
import { BlogArticleLayout } from './BlogArticleLayout';
import { buildBlogMetadata } from './blogMetadata';

/**
 * Shared page for every blog post. Each post folder (app/blog/<slug>/) has a
 * page.tsx that only passes its post.tsx data to these two helpers.
 */
export function blogPostMetadata(post: BlogPost): Metadata {
  if (post.draft) {
    return { title: 'Article not found | Sage Kite', robots: { index: false } };
  }
  return buildBlogMetadata(post);
}

export function BlogPostPage({ post }: { post: BlogPost }) {
  if (post.draft || !post.content) {
    notFound();
  }

  return (
    <BlogArticleLayout post={post}>
      <post.content />
    </BlogArticleLayout>
  );
}
