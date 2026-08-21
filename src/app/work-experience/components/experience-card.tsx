'use client';

import { useEffect, useState } from 'react';
import { fadeRise } from '@/constants/motion';
import { experienceAnchorId } from '@/constants/search';
import { ExperienceItem } from '@/constants/self';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [endDate, setEndDate] = useState(exp.endDate);

  useEffect(() => {
    if (!exp.isActive) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEndDate(new Date());
  }, [exp.isActive]);

  const formatDate = (
    date: Date | null,
    isActive: boolean,
    dateType: 'start' | 'end',
  ) => {
    if (isActive && dateType === 'end') return 'Present';
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if (!date) return 'Present';
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };
  const duration = (startDate: Date, endDate: Date) => {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearPart = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthPart = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

    return [yearPart, monthPart].filter(Boolean).join(' ') || '0 mos';
  };
  return (
    <motion.div
      variants={fadeRise}
      id={experienceAnchorId(exp)}
      className="relative scroll-mt-4"
    >
      <span className="absolute top-2 -left-6 h-3 w-3 rounded-full bg-blue-500 shadow-sm" />
      <div className="bg-editor border-border border p-4">
        <div className="text-muted mb-1 text-sm">
          {formatDate(exp.startDate, exp.isActive, 'start')} -{' '}
          {formatDate(exp.endDate, exp.isActive, 'end')} (
          {duration(exp.startDate, endDate)})
        </div>
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
            Website <FaExternalLinkAlt className="h-3 w-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
