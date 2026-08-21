import { experienceItems } from '@/constants/self';
import Link from 'next/link';
import { VscArrowRight, VscMail } from 'react-icons/vsc';

import Reveal from '@/components/motion/reveal';
import TypewriterEffect from '@/components/typewriter-effect';

const TAGS = ['Engineering', 'Conversational AI', 'Open Source', 'Photography', 'Guitar'];

export default function Hero() {
  const currentRole = experienceItems.find((exp) => exp.isActive);

  return (
    <div className="flex flex-col gap-4">
      <Reveal variant="soft">
        <h1 className="text-2xl font-semibold md:text-5xl">Gautam Anand</h1>
      </Reveal>
      <Reveal className="text-muted text-sm md:text-lg">
        I&apos;m a <TypewriterEffect />
      </Reveal>
      <Reveal className="flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="bg-sidebar border-border border px-2.5 py-0.5 text-xs md:text-sm"
          >
            {tag}
          </span>
        ))}
      </Reveal>
      {currentRole && (
        <Reveal className="text-muted text-sm md:text-base">
          Currently {currentRole.cardTitle} at{' '}
          <a
            href={currentRole.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium hover:text-blue-400"
          >
            {currentRole.cardSubtitle}
          </a>
          .
        </Reveal>
      )}
      <Reveal className="mt-2 flex flex-wrap items-center gap-3">
        <Link
          href="/projects"
          className="flex items-center gap-2 bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-600"
        >
          View Projects
          <VscArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/contact-me"
          className="border-border flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors duration-150 hover:border-blue-500 hover:text-blue-400"
        >
          <VscMail className="h-4 w-4" />
          Get In Touch
        </Link>
      </Reveal>
    </div>
  );
}
