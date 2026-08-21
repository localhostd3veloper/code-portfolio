'use client';

import { useEffect, useState } from 'react';
import { DURATION, EASE, SPRING } from '@/constants/motion';
import { projectAnchorId } from '@/constants/search';
import { IProject } from '@/types';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { VscFileCode } from 'react-icons/vsc';

import { slugify } from '@/utils/slugify';

import ProjectGallery from './project-gallery';

const PROJECT_ICON_COLOR = '#f472b6';

export default function ProjectsExplorer({ projects }: { projects: IProject[] }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const index = projects.findIndex(
        (project) => projectAnchorId(project.name) === hash,
      );
      if (index >= 0) setSelected(index);
    };

    syncFromHash();
    const interval = setInterval(syncFromHash, 250);
    return () => clearInterval(interval);
  }, [projects]);

  const project = projects[selected];
  const hasLink = Boolean(project.projectURL) && project.projectURL !== '#';

  return (
    <div className="grid min-w-0 gap-4 md:grid-cols-[240px_1fr] md:items-start">
      <div className="border-border bg-editor min-w-0 border md:sticky md:top-6">
        <div className="border-border bg-sidebar text-muted border-b px-3 py-2 text-xs tracking-wide uppercase">
          Explorer
        </div>
        <ul className="flex min-w-0 flex-row gap-2 overflow-x-auto p-2 md:flex-col md:gap-1 md:overflow-visible">
          {projects.map((item, index) => {
            const isActive = index === selected;

            return (
              <li
                key={item.name}
                id={projectAnchorId(item.name)}
                className="w-24 shrink-0 md:w-auto md:shrink"
              >
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`group relative flex w-full flex-col gap-1.5 p-1.5 text-left md:flex-row md:items-center md:gap-2.5 md:p-1.5 ${
                    isActive ? 'text-list-active-fg' : 'text-muted hover:bg-token-hover'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-explorer-active"
                      transition={SPRING.indicator}
                      className="bg-list-active absolute inset-0 -z-10"
                    />
                  )}
                  <div
                    className={`relative aspect-video w-full shrink-0 overflow-hidden border md:w-14 ${
                      isActive ? 'border-blue-500' : 'border-border'
                    }`}
                  >
                    <Image
                      src={item.imageURLs[0]}
                      alt=""
                      fill
                      quality={100}
                      sizes="96px"
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <span className="min-w-0 truncate text-xs font-medium md:text-sm">
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-border bg-editor min-w-0 border">
        <div className="border-border bg-sidebar text-muted flex items-center gap-2 border-b px-4 py-2 text-sm">
          <VscFileCode className="h-4 w-4" style={{ color: PROJECT_ICON_COLOR }} />
          {slugify(project.name)}.tsx
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: DURATION.base, ease: EASE.out },
            }}
            exit={{
              opacity: 0,
              transition: { duration: DURATION.instant, ease: EASE.in },
            }}
          >
            <ProjectGallery images={project.imageURLs} name={project.name} />
            <div className="flex flex-col gap-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                {hasLink && (
                  <a
                    href={project.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="text-muted mt-1 shrink-0 hover:text-blue-400"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-muted text-sm leading-relaxed md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((stack) => (
                  <span
                    key={stack}
                    className="bg-sidebar border-border border px-2.5 py-0.5 text-xs"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
