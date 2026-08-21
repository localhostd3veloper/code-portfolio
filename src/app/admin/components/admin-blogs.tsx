'use client';

import { BlogRecord } from '@/types';

import { useEntityCrud } from '../hooks/use-entity-crud';
import BlogForm from './blog-form';
import EntityList from './entity-list';

const BLANK_BLOG: BlogRecord = {
  name: '',
  description: '',
  hashtags: [],
  url: '',
  imgURL: '',
};

export default function AdminBlogs() {
  const { items, selected, selectedIndex, setSelectedIndex, save, remove, status } =
    useEntityCrud<BlogRecord>('/api/admin/blogs', BLANK_BLOG);

  if (!items) return <p className="text-muted mt-6 text-sm">Loading...</p>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
      <EntityList
        items={items}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        getLabel={(blog) => blog.name}
      />
      <div>
        {status && <p className="text-muted mb-3 text-sm">{status}</p>}
        <BlogForm
          key={selectedIndex ?? 'new'}
          blog={selected}
          onSave={save}
          onDelete={selectedIndex === null ? undefined : remove}
        />
      </div>
    </div>
  );
}
