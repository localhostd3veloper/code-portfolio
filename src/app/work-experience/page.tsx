import { experienceItems } from '@/constants/self';

import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';

import { buildMetadata } from '@/utils/seo';

import ExperienceCard from './components/experience-card';

export const metadata = buildMetadata({
  title: 'Work Experience',
  description:
    'Work history and career timeline of Gautam Anand, a full stack engineer, including roles in product and software engineering teams.',
  path: '/work-experience',
});

export default function WorkExperiencePage() {
  return (
    <Stagger startDelay={0.12} className="mx-auto w-full max-w-4xl px-4 py-6">
      <Reveal>
        <h2 className="mb-6 text-xl font-semibold">Work Experience</h2>
      </Reveal>
      <div className="border-border relative flex flex-col gap-6 border-l pl-4">
        {experienceItems.map((exp, idx) => (
          <ExperienceCard exp={exp} key={idx} />
        ))}
      </div>
    </Stagger>
  );
}
