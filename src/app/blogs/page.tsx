import React from 'react';
import { blogs } from '@/constants/self';
import Image from 'next/image';

export default function BlogsPage() {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <h1 className="text-2xl font-semibold">Blogs</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(({ description, hashtags, imgURL, name, url }) => (
          <div key={url} id="blog-card" className="border-border grid w-full border">
            <Image
              src={imgURL}
              alt={name}
              height={200}
              width={400}
              quality={100}
              className="w-full md:w-lg"
            />
            <div className="flex flex-col gap-3 p-3">
              <h1 className="text-lg font-semibold">{name}</h1>
              <p className="text-muted text-sm">{description}</p>
              <div className="flex flex-wrap gap-1">
                {hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-sidebar border-border border px-3 py-0.5 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
