import React from 'react';
import { projectsData } from '@/constants/self';

export default function ProjectsPage() {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-3">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div key={project.projectURL} className="border-border border p-4">
            <img
              src={project.imageURLs[0]}
              alt={project.name}
              width={100}
              height={100}
              className="min-h-[100px] w-full object-cover"
            />
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
          </div>
        ))}
      </div>
    </div>
  );
}
