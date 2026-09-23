import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPublishedPosts, getPostBySlug } from '@/content/blog';
import { BlogArticleLayout } from '@/components/blog/BlogArticleLayout';
import { buildBlogMetadata } from '@/components/blog/blogMetadata';

type Params = Promise<{ slug: string }>;

/**
 * Pre-render every live post at build time. Posts without `content` have
 * their own folder under app/blog/ and are rendered there instead.
 */
export function generateStaticParams() {
  return getPublishedPosts()
    .filter((post) => post.content)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Article not found | Sage Kite' };
  }

  return buildBlogMetadata(post);
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post?.content) {
    notFound();
  }

  return (
    <BlogArticleLayout post={post}>
      <post.content />
    </BlogArticleLayout>
  );
}
