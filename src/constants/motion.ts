import { stagger, TargetAndTransition, Variants } from 'motion/react';

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  in: [0.7, 0, 0.84, 0],
} as const;

export const DURATION = {
  instant: 0.12,
  fast: 0.18,
  base: 0.3,
  slow: 0.5,
} as const;

export const SPRING = {
  indicator: { type: 'spring', stiffness: 500, damping: 40 },
} as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.base, ease: EASE.out } },
};

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE.out } },
};

export const fadeSoft: Variants = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

export const staggerContainer = (interval = 0.05, startDelay = 0): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: stagger(interval, { startDelay }) } },
});

export const withStagger = (
  base: Variants,
  interval: number,
  startDelay = 0,
): Variants => {
  const show = base.show as TargetAndTransition;

  return {
    hidden: base.hidden,
    show: {
      ...show,
      transition: {
        ...show.transition,
        delayChildren: stagger(interval, { startDelay }),
      },
    },
  };
};

export const overlayFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: DURATION.fast, ease: EASE.out } },
  exit: { opacity: 0, transition: { duration: DURATION.instant, ease: EASE.in } },
};

export const quickPickPanel = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.fast, ease: EASE.out },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: DURATION.instant, ease: EASE.in },
  },
};

export const dropdownPanel = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.fast, ease: EASE.out },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: DURATION.instant, ease: EASE.in },
  },
};
