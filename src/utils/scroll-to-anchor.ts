const TIMEOUT_MS = 1000;

export const scrollToAnchor = (
  anchorId: string,
  deadline = performance.now() + TIMEOUT_MS,
) => {
  const target = document.getElementById(anchorId);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  if (performance.now() >= deadline) return;

  requestAnimationFrame(() => scrollToAnchor(anchorId, deadline));
};
