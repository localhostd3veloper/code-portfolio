import { ProjectRecord } from '@/types';

import { createCrudRoute } from '@/utils/crud-route';
import { slugify } from '@/utils/slugify';

function validate(projects: ProjectRecord[]): string | null {
  const slugs = new Set<string>();
  for (const project of projects) {
    const slug = slugify(project.name);
    if (slugs.has(slug)) {
      return `Duplicate project slug: "${slug}". Rename one of the projects.`;
    }
    slugs.add(slug);
  }
  return null;
}

export const { GET, PUT } = createCrudRoute<ProjectRecord>(
  'src/data/projects.json',
  validate,
);
