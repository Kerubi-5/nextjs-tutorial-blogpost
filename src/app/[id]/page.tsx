import BlogPost from '@/components/blog-post';

const Page = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);

  return <BlogPost id={id} />;
};

export default Page;
