import { RepoRecord } from '@/types';

import { createCrudRoute } from '@/utils/crud-route';

export const { GET, PUT } = createCrudRoute<RepoRecord>('src/data/repos.json');
