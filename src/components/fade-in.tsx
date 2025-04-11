'use client';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
