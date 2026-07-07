'use client';

import { fadeUp } from '@/constants/motion';
import { motion } from 'motion/react';

export default function FadeIn({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div {...fadeUp(delay)} className={className}>
      {children}
    </motion.div>
  );
}
