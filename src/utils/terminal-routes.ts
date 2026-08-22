import { sidebarLinks } from '@/constants';

export const routeEntries = sidebarLinks.map((link) => ({
  slug: link.href === '/' ? 'home' : link.href.slice(1),
  href: link.href,
  label: link.label,
}));

export const routeAliases: Record<string, string> = {
  welcome: '/',
  about: '/about-me',
  experience: '/work-experience',
  contact: '/contact-me',
  blog: '/blogs',
};

routeEntries.forEach((entry) => {
  routeAliases[entry.slug] = entry.href;
});

export const resolveRoute = (slug: string | undefined): string | null => {
  if (!slug) return null;
  return routeAliases[slug.toLowerCase()] ?? null;
};
