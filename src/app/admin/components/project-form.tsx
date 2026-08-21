'use client';

import { useState, type FormEvent } from 'react';
import { ProjectRecord } from '@/types';

import ImageManager from './image-manager';

interface ProjectFormProps {
  project: ProjectRecord;
  onSave: (project: ProjectRecord) => Promise<void>;
  onDelete?: () => void;
}

export default function ProjectForm({ project, onSave, onDelete }: ProjectFormProps) {
  const [form, setForm] = useState(project);
  const [techStackInput, setTechStackInput] = useState(form.techStack.join(', '));
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    const techStack = techStackInput
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean);
    await onSave({ ...form, techStack });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        Name
        <input
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="bg-editor border-border border px-2 py-1"
          required
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Project URL
        <input
          value={form.projectURL}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, projectURL: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Description
        <textarea
          value={form.description}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, description: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
          rows={4}
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Tech stack (comma separated)
        <input
          value={techStackInput}
          onChange={(event) => setTechStackInput(event.target.value)}
          className="bg-editor border-border border px-2 py-1"
        />
      </label>

      <ImageManager
        name={form.name}
        imageCount={form.imageCount}
        onUploaded={(imageCount) => setForm((prev) => ({ ...prev, imageCount }))}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-list-active border-border w-fit border px-4 py-1.5 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="border-border w-fit border px-4 py-1.5 text-red-500"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
