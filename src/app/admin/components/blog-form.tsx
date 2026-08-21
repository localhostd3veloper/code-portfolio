'use client';

import { useState, type FormEvent } from 'react';
import { BlogRecord } from '@/types';

interface BlogFormProps {
  blog: BlogRecord;
  onSave: (blog: BlogRecord) => Promise<void>;
  onDelete?: () => void;
}

export default function BlogForm({ blog, onSave, onDelete }: BlogFormProps) {
  const [form, setForm] = useState(blog);
  const [hashtagsInput, setHashtagsInput] = useState(form.hashtags.join(', '));
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    const hashtags = hashtagsInput
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean);
    await onSave({ ...form, hashtags });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        Title
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

      <label className="flex flex-col gap-1 text-sm">
        Cover image URL
        <input
          value={form.imgURL}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, imgURL: event.target.value }))
          }
          className="bg-editor border-border border px-2 py-1"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Hashtags (comma separated)
        <input
          value={hashtagsInput}
          onChange={(event) => setHashtagsInput(event.target.value)}
          className="bg-editor border-border border px-2 py-1"
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
