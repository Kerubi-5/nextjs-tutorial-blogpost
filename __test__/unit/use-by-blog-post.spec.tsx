import useBlogPosts from '@/hooks/useBlogPosts';
import { blogPosts } from '@/utils/fake-data';
import { renderHook } from '@testing-library/react';

describe('getByBlogPost', () => {
  it('should get the first blog', () => {
    const useBlogPost = renderHook(() => useBlogPosts());

    const blog = useBlogPost.result.current.getBlogPost(1);

    expect(blog?.id === blogPosts[0].id).toBeTruthy();
  });
});

describe('addBlogPost', () => {});
