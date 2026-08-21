'use client';

import { useState, type FormEvent } from 'react';
import { RepoRecord } from '@/types';

interface RepoFormProps {
  repo: RepoRecord;
  onSave: (repo: RepoRecord) => Promise<void>;
  onDelete?: () => void;
}

export default function RepoForm({ repo, onSave, onDelete }: RepoFormProps) {
  const [form, setForm] = useState(repo);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    await onSave(form);
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
        Description
        <input
          value={form.description}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, description: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        URL
        <input
          value={form.url}
          onChange={(event) => setForm((prev) => ({ ...prev, url: event.target.value }))}
          className="bg-editor border-border border px-2 py-1"
          required
        />
      </label>

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
