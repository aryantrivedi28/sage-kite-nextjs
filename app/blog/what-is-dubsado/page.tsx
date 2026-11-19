import { BlogPostPage, blogPostMetadata } from '@/components/blog/BlogPostPage';
import post from './post';

export const metadata = blogPostMetadata(post);

export default function Page() {
  return <BlogPostPage post={post} />;
}
