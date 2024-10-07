'use client';

import AddBlogForm from './add-blog-form';
import BlogCard from './blog-card';
import useBlogPosts from '@/hooks/useBlogPosts';

const BlogList = () => {
  const { blogList, addBlogPost } = useBlogPosts();

  return (
    <div>
      <AddBlogForm addBlogPost={addBlogPost} />
      <div className="grid md:grid-cols-2 gap-6">
        {blogList.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
