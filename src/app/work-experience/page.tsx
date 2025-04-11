'use client';

import { experienceItems } from '@/constants/self';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function WorkExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-6">
      <h2 className="mb-6 text-xl font-semibold">Work Experience</h2>
      <div className="border-border relative flex flex-col gap-6 border-l pl-4">
        {experienceItems.map((exp, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.3, duration: 0.5 }}
            key={idx}
            className="relative"
          >
            <span className="absolute top-2 -left-6 h-3 w-3 rounded-full bg-blue-500 shadow-sm" />
            <div className="bg-editor border-border rounded-lg border p-4">
              <div className="text-muted mb-1 text-sm">{exp.title}</div>
              <div className="text-base font-semibold">{exp.cardTitle}</div>
              <div className="text-muted mb-2 text-sm">
                {exp.jobRole} | {exp.cardSubtitle}
              </div>
              <p className="text-muted-foreground mb-2 text-sm whitespace-pre-line">
                {exp.cardDetailedText}
              </p>
              {exp.url && (
                <Link
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:underline"
                >
                  Organization <FaExternalLinkAlt className="h-3 w-3" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
