'use client';

import { experienceItems } from '@/constants/self';

import ExperienceCard from './components/experience-card';

export default function WorkExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-6">
      <h2 className="mb-6 text-xl font-semibold">Work Experience</h2>
      <div className="border-border relative flex flex-col gap-6 border-l pl-4">
        {experienceItems.map((exp, idx) => (
          <ExperienceCard exp={exp} idx={idx} key={idx} />
        ))}
      </div>
    </section>
  );
}
