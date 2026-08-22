import { SITE_URL } from '@/constants/seo';
import { MetadataRoute } from 'next';

const routes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about-me', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/blogs', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/work-experience', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact-me', priority: 0.6, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
