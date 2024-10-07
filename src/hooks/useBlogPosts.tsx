'use client';

import { blogPosts } from '@/utils/fake-data';
import { useState } from 'react';

type BlogPost = (typeof blogPosts)[number];
type AddBlogPost = Pick<BlogPost, 'content' | 'imageUrl' | 'title'>;

const useBlogPosts = () => {
  const [blogList, setBlogList] = useState(blogPosts);

  const addBlogPost = (blogPost: AddBlogPost) => {
    setBlogList((prevData) => [
      {
        id: prevData.length + 1,
        ...blogPost,
      },
      ...prevData,
    ]);
  };

  const getBlogPost = (id: number) => {
    return blogList.find((blog) => blog.id === id);
  };

  console.log(blogList);

  return {
    blogList,
    addBlogPost,
    getBlogPost,
  };
};

export default useBlogPosts;
