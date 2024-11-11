'use client';

import { FormEvent, useState } from 'react';

type AddBlogFormProps = {
  addBlogPost: (param: any) => void;
};

const AddBlogForm = ({ addBlogPost }: AddBlogFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!title || !content || !imageUrl) {
      alert('ERROR');
      return;
    }

    addBlogPost({
      title,
      content,
      imageUrl,
    });
  };

  return (
    <div className="flex justify-center p-3">
      <form onSubmit={handleSubmit}>
        <div className="space-x-2">
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            className="border p-1"
          />
          <input
            type="text"
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
            className="border p-1"
          />
          <input
            type="text"
            placeholder="image url"
            onChange={(e) => setImageUrl(e.target.value)}
            className="border p-1"
          />
          <button className="bg-green-800 p-2 font-bold">Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
