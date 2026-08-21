'use client';

import { useState } from 'react';
import Image from 'next/image';

import { slugify } from '@/utils/slugify';

interface ImageManagerProps {
  name: string;
  imageCount: number;
  onUploaded: (imageCount: number) => void;
}

export default function ImageManager({
  name,
  imageCount,
  onUploaded,
}: ImageManagerProps) {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadMode, setUploadMode] = useState<'append' | 'replace'>('append');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const slug = slugify(name || 'project');

  async function handleUpload() {
    if (!files?.length) return;
    setBusy(true);
    setError('');
    const body = new FormData();
    body.set('name', name);
    body.set('mode', uploadMode);
    Array.from(files).forEach((file) => body.append('files', file));
    const res = await fetch('/api/admin/projects/images', { method: 'POST', body });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setError(data.error);
      return;
    }
    setFiles(null);
    onUploaded(data.imageCount);
  }

  return (
    <div className="border-border flex flex-col gap-2 border p-3">
      <p className="text-muted text-sm">
        Images ({imageCount} in public/projects/{slug}/)
      </p>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {imageCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: imageCount }, (_, index) => (
            <Image
              key={index}
              src={`/projects/${slug}/${index + 1}.png`}
              alt={`${name} image ${index + 1}`}
              width={96}
              height={54}
              className="aspect-video object-cover"
            />
          ))}
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(event) => setFiles(event.target.files)}
        className="text-sm"
      />
      <div className="flex items-center gap-3 text-sm">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            checked={uploadMode === 'append'}
            onChange={() => setUploadMode('append')}
          />
          Add to gallery
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            checked={uploadMode === 'replace'}
            onChange={() => setUploadMode('replace')}
          />
          Replace all
        </label>
        <button
          type="button"
          onClick={handleUpload}
          disabled={!files?.length || busy}
          className="bg-sidebar border-border border px-3 py-1 disabled:opacity-50"
        >
          {busy ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </div>
  );
}
