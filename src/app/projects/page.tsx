import { projectsData } from '@/constants/self';
import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="h-full w-full p-3 flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div key={project.projectURL} className="p-4 border border-border">
            <img
              src={project.imageURLs[0]}
              alt={project.name}
              width={100}
              height={100}
              className="w-full min-h-[100px] object-cover"
            />
            <h3 className="font-semibold text-lg mt-3">{project.name}</h3>
            <p className="text-muted">
              {project.description}...{' '}
              <a
                href={project.projectURL}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500 hover:underline text-sm text-right"
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
