'use client';

import { RepoRecord } from '@/types';

import { useEntityCrud } from '../hooks/use-entity-crud';
import EntityList from './entity-list';
import RepoForm from './repo-form';

const BLANK_REPO: RepoRecord = { name: '', description: '', url: '' };

export default function AdminRepos() {
  const { items, selected, selectedIndex, setSelectedIndex, save, remove, status } =
    useEntityCrud<RepoRecord>('/api/admin/repos', BLANK_REPO);

  if (!items) return <p className="text-muted mt-6 text-sm">Loading...</p>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
      <EntityList
        items={items}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        getLabel={(repo) => repo.name}
      />
      <div>
        {status && <p className="text-muted mb-3 text-sm">{status}</p>}
        <RepoForm
          key={selectedIndex ?? 'new'}
          repo={selected}
          onSave={save}
          onDelete={selectedIndex === null ? undefined : remove}
        />
      </div>
    </div>
  );
}
