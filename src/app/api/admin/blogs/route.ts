import { BlogRecord } from '@/types';

import { createCrudRoute } from '@/utils/crud-route';

export const { GET, PUT } = createCrudRoute<BlogRecord>('src/data/blogs.json');
