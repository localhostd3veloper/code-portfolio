'use client';

import { ExperienceRecord } from '@/types';

import { useEntityCrud } from '../hooks/use-entity-crud';
import EntityList from './entity-list';
import ExperienceForm from './experience-form';

const BLANK_EXPERIENCE: ExperienceRecord = {
  startDate: '',
  endDate: '',
  cardTitle: '',
  jobRole: '',
  cardSubtitle: '',
  cardDetailedText: '',
  url: '',
  isActive: false,
};

export default function AdminExperience() {
  const { items, selected, selectedIndex, setSelectedIndex, save, remove, status } =
    useEntityCrud<ExperienceRecord>('/api/admin/experience', BLANK_EXPERIENCE);

  if (!items) return <p className="text-muted mt-6 text-sm">Loading...</p>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
      <EntityList
        items={items}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        getLabel={(experience) => `${experience.cardSubtitle} - ${experience.cardTitle}`}
      />
      <div>
        {status && <p className="text-muted mb-3 text-sm">{status}</p>}
        <ExperienceForm
          key={selectedIndex ?? 'new'}
          experience={selected}
          onSave={save}
          onDelete={selectedIndex === null ? undefined : remove}
        />
      </div>
    </div>
  );
}
