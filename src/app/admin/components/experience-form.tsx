'use client';

import { useState, type FormEvent } from 'react';
import { ExperienceRecord } from '@/types';

interface ExperienceFormProps {
  experience: ExperienceRecord;
  onSave: (experience: ExperienceRecord) => Promise<void>;
  onDelete?: () => void;
}

export default function ExperienceForm({
  experience,
  onSave,
  onDelete,
}: ExperienceFormProps) {
  const [form, setForm] = useState(experience);
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
        Title
        <input
          value={form.cardTitle}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, cardTitle: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
          required
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Company
        <input
          value={form.cardSubtitle}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, cardSubtitle: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
          required
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Role
        <input
          value={form.jobRole}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, jobRole: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
        />
      </label>

      <div className="flex gap-4">
        <label className="flex flex-1 flex-col gap-1 text-sm">
          Start date
          <input
            type="date"
            value={form.startDate}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, startDate: event.target.value }))
            }
            className="bg-editor border-border border px-2 py-1"
            required
          />
        </label>
        <label className="flex flex-1 flex-col gap-1 text-sm">
          End date
          <input
            type="date"
            value={form.endDate}
            disabled={form.isActive}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, endDate: event.target.value }))
            }
            className="bg-editor border-border border px-2 py-1 disabled:opacity-50"
          />
        </label>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={form.isActive}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, isActive: event.target.checked }))
          }
        />
        Current role
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Website
        <input
          value={form.url}
          onChange={(event) => setForm((prev) => ({ ...prev, url: event.target.value }))}
          className="bg-editor border-border border px-2 py-1"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Details (one bullet per line, starting with -)
        <textarea
          value={form.cardDetailedText}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, cardDetailedText: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
          rows={6}
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
