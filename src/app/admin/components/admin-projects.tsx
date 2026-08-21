'use client';

import { ProjectRecord } from '@/types';

import { useEntityCrud } from '../hooks/use-entity-crud';
import EntityList from './entity-list';
import ProjectForm from './project-form';

const BLANK_PROJECT: ProjectRecord = {
  name: '',
  description: '',
  techStack: [],
  projectURL: '',
  imageCount: 0,
};

export default function AdminProjects() {
  const { items, selected, selectedIndex, setSelectedIndex, save, remove, status } =
    useEntityCrud<ProjectRecord>('/api/admin/projects', BLANK_PROJECT);

  if (!items) return <p className="text-muted mt-6 text-sm">Loading...</p>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
      <EntityList
        items={items}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        getLabel={(project) => project.name}
      />
      <div>
        {status && <p className="text-muted mb-3 text-sm">{status}</p>}
        <ProjectForm
          key={selectedIndex ?? 'new'}
          project={selected}
          onSave={save}
          onDelete={selectedIndex === null ? undefined : remove}
        />
      </div>
    </div>
  );
}
