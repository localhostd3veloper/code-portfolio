import { projectsData } from '@/constants/self';

import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';

import { buildMetadata } from '@/utils/seo';

import ProjectsExplorer from './components/projects-explorer';

export const metadata = buildMetadata({
  title: 'Projects',
  description:
    'A collection of web apps and side projects built by Gautam Anand using Next.js, React, TypeScript, and modern web tools.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <Stagger
      startDelay={0.12}
      className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 md:py-10"
    >
      <Reveal>
        <h1 className="text-2xl font-semibold">Projects</h1>
      </Reveal>
      <Reveal variant="rise">
        <ProjectsExplorer projects={projectsData} />
      </Reveal>
    </Stagger>
  );
}
