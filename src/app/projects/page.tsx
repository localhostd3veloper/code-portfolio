import { projectsData } from '@/constants/self';

import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';

import ProjectCard from './components/project-card';

export default function ProjectsPage() {
  return (
    <Stagger startDelay={0.12} className="flex h-full w-full flex-col gap-2 p-3">
      <Reveal>
        <h1 className="text-2xl font-semibold">Projects</h1>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Stagger>
  );
}
