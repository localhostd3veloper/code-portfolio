import React from 'react';
import { projectsData } from '@/constants/self';

import ProjectCard from './components/project-card';

export default function ProjectsPage() {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-3">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
