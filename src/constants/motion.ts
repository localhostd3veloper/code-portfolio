const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const STAGGER = 0.05;

export const transitionFast = { duration: 0.15, ease: easeOut };

export const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2, ease: easeOut, delay },
});

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: easeOut, delay },
});

export const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -8 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.25, ease: easeOut, delay },
});

export const popIn = {
  initial: { opacity: 0, y: -4, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -4, scale: 0.98 },
  transition: transitionFast,
};

export const slideUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: easeOut },
};
