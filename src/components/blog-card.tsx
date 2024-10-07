import { blogPosts } from '@/utils/fake-data';
import Link from 'next/link';

type BlogCardProps = {
  blog: (typeof blogPosts)[number];
};

const BlogCard = ({ blog }: BlogCardProps) => {
  const { content, id, imageUrl, title } = blog || {};

  return (
    <Link href={`/${id}`}>
      <div className="p-5">
        <h1 className="text-xl font-bold">{title}</h1>
        <img src={imageUrl} alt={title} />
      </div>
    </Link>
  );
};

export default BlogCard;
