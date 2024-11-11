'use client';
import useBlogPosts from '@/hooks/useBlogPosts';

type BlogPostProps = {
  id: number;
};

const BlogPost = ({ id }: BlogPostProps) => {
  const { getBlogPost } = useBlogPosts();

  const { content, imageUrl, title } = getBlogPost(id) || {};
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{title}</h1>

      <img src={imageUrl} alt={title + 'image'} />

      <p className="text-xl font-semibold">{content}</p>
    </div>
  );
};

export default BlogPost;
