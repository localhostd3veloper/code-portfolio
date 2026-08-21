import { ExperienceRecord } from '@/types';

import { createCrudRoute } from '@/utils/crud-route';

export const { GET, PUT } = createCrudRoute<ExperienceRecord>('src/data/experience.json');
