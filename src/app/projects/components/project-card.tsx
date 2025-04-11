'use client';

import React from 'react';
import { IProject } from '@/types';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-border flex flex-col gap-3 border p-4"
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        stopOnHover={false}
        infiniteLoop
        autoPlay
        interval={2500}
      >
        {project.imageURLs.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              quality={100}
              className="w-full"
              height={200}
              width={400}
              alt={`${index} image of ${project.name}`}
            />
          </div>
        ))}
      </Carousel>
      <h3 className="mt-3 text-lg font-semibold">{project.name}</h3>
      <p className="text-muted">
        {project.description}...{' '}
        <a
          href={project.projectURL}
          rel="noopener noreferrer"
          target="_blank"
          className="text-right text-sm text-blue-500 hover:underline"
        >
          Learn More
        </a>
      </p>
      <div className="flex flex-wrap gap-1">
        Tech Stack:{' '}
        {project.techStack.map((stack) => (
          <span
            key={stack}
            className="bg-sidebar border-border border px-3 py-0.5 text-sm"
          >
            {stack}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
