const MAX_ATTEMPTS = 30;

export const scrollToAnchor = (anchorId: string, attempt = 0) => {
  const target = document.getElementById(anchorId);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  if (attempt >= MAX_ATTEMPTS) return;

  requestAnimationFrame(() => scrollToAnchor(anchorId, attempt + 1));
};
