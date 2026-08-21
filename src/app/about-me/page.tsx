import { socialMediaLinks } from '@/constants/self';
import Image from 'next/image';
import { VscMarkdown } from 'react-icons/vsc';

import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';
import TypewriterEffect from '@/components/typewriter-effect';

export default function AboutMePage() {
  return (
    <Stagger
      startDelay={0.12}
      className="mx-auto grid w-full max-w-4xl min-w-0 gap-6 px-4 py-6 md:grid-cols-[260px_1fr] md:items-start md:px-6 md:py-10"
    >
      <Reveal variant="rise">
        <div className="bg-editor border-border flex min-w-0 flex-col items-center gap-4 border p-6 text-center md:sticky md:top-6">
          <Reveal variant="soft">
            <Image
              src="/profile.png"
              alt="Gautam Anand"
              width={300}
              height={300}
              quality={100}
              className="h-28 w-28 rounded object-cover md:h-36 md:w-36"
            />
          </Reveal>
          <div>
            <h1 className="text-lg font-semibold md:text-xl">Gautam Anand</h1>
            <p className="text-muted mt-1 text-sm">
              I&apos;m a <TypewriterEffect />
            </p>
          </div>
          <Reveal interval={0.04} className="flex gap-4">
            {socialMediaLinks.map(({ name, icon: Icon, link }) => (
              <Reveal key={link}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5 hover:text-blue-500" />
                </a>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </Reveal>

      <Reveal variant="rise">
        <div className="border-border bg-editor min-w-0 border">
          <div className="border-border bg-sidebar text-muted flex items-center gap-2 border-b px-4 py-2 text-sm">
            <VscMarkdown className="h-4 w-4 text-orange-400" />
            about.md
          </div>
          <div className="text-muted flex flex-col gap-4 p-5 text-sm leading-relaxed tracking-wide md:text-base">
            <p>
              Ever since I was a kid, I have been fascinated by technology and its
              potential to change the world. I started learning programming when I was 15
              years old and have been hooked ever since. Over the years, I have worked on
              a wide range of projects, from simple websites to complex applications. I am
              always eager to learn new technologies and stay up to date with the latest
              trends in the industry.
            </p>
            <p>
              In my free time, I enjoy playing video games, working out, and spending time
              with friends and family. I also have a passion for singing and photography.
            </p>
          </div>
        </div>
      </Reveal>
    </Stagger>
  );
}
