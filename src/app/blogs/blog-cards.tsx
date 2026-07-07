'use client';

import { fadeUp, STAGGER } from '@/constants/motion';
import { blogs } from '@/constants/self';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function BlogCards() {
  return blogs.map(({ description, hashtags, imgURL, name, url }, index) => (
    <motion.a
      href={url}
      target="_blank"
      {...fadeUp(index * STAGGER)}
      key={url}
      id="blog-card"
      className="border-border grid w-full border transition-colors duration-150 hover:border-blue-500"
    >
      <>
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
      </>
    </motion.a>
  ));
}
