'use client';

import { staggerContainer } from '@/constants/motion';
import { motion } from 'motion/react';

export default function Stagger({
  className,
  children,
  interval = 0.05,
  startDelay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  interval?: number;
  startDelay?: number;
}) {
  return (
    <motion.div
      variants={staggerContainer(interval, startDelay)}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}
