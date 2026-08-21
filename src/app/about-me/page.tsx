import { blogs, experienceItems, projectsData, socialMediaLinks } from '@/constants/self';
import Image from 'next/image';
import { FaCamera, FaDumbbell, FaGamepad, FaMicrophone, FaUsers } from 'react-icons/fa';
import { VscJson, VscMarkdown } from 'react-icons/vsc';

import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';
import TypewriterEffect from '@/components/typewriter-effect';

const YEARS_SHIPPING = 5;

const INTERESTS = [
  { label: 'Gaming', icon: FaGamepad },
  { label: 'Fitness', icon: FaDumbbell },
  { label: 'Singing', icon: FaMicrophone },
  { label: 'Photography', icon: FaCamera },
  { label: 'Family & friends', icon: FaUsers },
];

const normalizeSkillKey = (stack: string) =>
  stack.toLowerCase().replace(/[^a-z0-9]/g, '');

const buildSkillCloud = () => {
  const counts = new Map<string, { label: string; count: number }>();

  projectsData.forEach((project) => {
    project.techStack.forEach((stack) => {
      if (/more/i.test(stack)) return;
      const key = normalizeSkillKey(stack);
      const existing = counts.get(key);

      if (!existing) {
        counts.set(key, { label: stack, count: 1 });
        return;
      }

      existing.count += 1;
      if (
        existing.label === existing.label.toLowerCase() &&
        stack !== stack.toLowerCase()
      ) {
        existing.label = stack;
      }
    });
  });

  return Array.from(counts.values()).sort(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label),
  );
};

export default function AboutMePage() {
  const activeRole = experienceItems.find((item) => item.isActive);
  const companyCount = new Set(experienceItems.map((item) => item.cardSubtitle)).size;
  const skills = buildSkillCloud();

  const stats = [
    { label: 'Years shipping software', value: `${YEARS_SHIPPING}+` },
    { label: 'Projects shipped', value: `${projectsData.length}` },
    { label: 'Companies', value: `${companyCount}` },
    { label: 'Articles published', value: `${blogs.length}` },
  ];

  return (
    <Stagger
      startDelay={0.12}
      className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 md:px-6 md:py-10"
    >
      <div className="grid min-w-0 gap-6 md:grid-cols-[260px_1fr] md:items-start">
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
            {activeRole && (
              <div className="border-border w-full border-t pt-3">
                <p className="text-muted text-xs tracking-wide uppercase">Currently</p>
                <p className="text-sm font-medium">{activeRole.cardTitle}</p>
                <p className="text-muted text-xs">{activeRole.cardSubtitle}</p>
              </div>
            )}
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
                potential to change the world. I started learning programming when I was
                15 years old and have been hooked ever since. Over the years, I have
                worked on a wide range of projects, from simple websites to complex
                applications. I am always eager to learn new technologies and stay up to
                date with the latest trends in the industry.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal variant="rise">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-border bg-editor border p-4 text-center"
            >
              <div className="text-2xl font-semibold md:text-3xl">{stat.value}</div>
              <div className="text-muted mt-1 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal variant="rise">
        <div className="border-border bg-editor min-w-0 border">
          <div className="border-border bg-sidebar text-muted flex items-center gap-2 border-b px-4 py-2 text-sm">
            <VscJson className="h-4 w-4 text-yellow-400" />
            skills.json
          </div>
          <div className="flex flex-wrap gap-1.5 p-4">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className="bg-sidebar border-border border px-2.5 py-0.5 text-xs"
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal variant="rise">
        <div className="flex flex-col gap-3">
          <h2 className="text-muted text-xs tracking-wide uppercase">Outside of work</h2>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="border-border bg-editor flex items-center gap-2 border px-3 py-1.5 text-sm"
              >
                <Icon className="text-muted h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Stagger>
  );
}
