import { projectAnchorId } from '@/constants/search';
import { projectsData } from '@/constants/self';
import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/motion/reveal';

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 2);

  return (
    <div className="flex flex-col gap-3">
      {featured.map((project) => (
        <Reveal key={project.name}>
          <Link
            href={`/projects#${projectAnchorId(project.name)}`}
            className="group border-border bg-editor flex flex-col overflow-hidden border transition-colors duration-150 hover:border-blue-500"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={project.imageURLs[0]}
                alt={project.name}
                fill
                quality={100}
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 p-3">
              <p className="text-sm font-medium group-hover:text-blue-400">
                {project.name}
              </p>
              <p className="text-muted line-clamp-2 text-xs">{project.description}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
