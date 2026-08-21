'use client';

import { fadeIn, fadeRise, fadeSoft, withStagger } from '@/constants/motion';
import { motion, Variants } from 'motion/react';

const VARIANT_MAP = {
  fade: fadeIn,
  rise: fadeRise,
  soft: fadeSoft,
};

export default function Reveal({
  className,
  children,
  variant = 'fade',
  interval,
  startDelay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANT_MAP;
  interval?: number;
  startDelay?: number;
}) {
  const base = VARIANT_MAP[variant];
  const variants: Variants =
    interval === undefined ? (base as Variants) : withStagger(base, interval, startDelay);

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
