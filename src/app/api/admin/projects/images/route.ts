import fs from 'fs/promises';
import path from 'path';
import { ProjectRecord } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

import { isDev } from '@/utils/dev-guard';
import { readJsonFile, writeJsonFile } from '@/utils/json-store';
import { slugify } from '@/utils/slugify';

const DATA_PATH = 'src/data/projects.json';

export async function POST(request: NextRequest) {
  if (!isDev()) return NextResponse.json({ error: 'Not available' }, { status: 404 });

  const formData = await request.formData();
  const name = formData.get('name');
  const mode = formData.get('mode');
  const files = formData
    .getAll('files')
    .filter((entry): entry is File => entry instanceof File);

  if (typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ error: 'Missing project name' }, { status: 400 });
  }
  if (!files.length) {
    return NextResponse.json({ error: 'No images provided' }, { status: 400 });
  }

  const slug = slugify(name);
  const dir = path.join(process.cwd(), 'public/projects', slug);

  if (mode === 'replace') {
    await fs.rm(dir, { recursive: true, force: true });
  }
  await fs.mkdir(dir, { recursive: true });

  const existing = await fs
    .readdir(dir)
    .then((entries) => entries.filter((entry) => /^\d+\.png$/.test(entry)).length)
    .catch(() => 0);

  for (const [index, file] of files.entries()) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const png = await sharp(buffer).png().toBuffer();
    await fs.writeFile(path.join(dir, `${existing + index + 1}.png`), png);
  }

  const imageCount = existing + files.length;

  const projects = await readJsonFile<ProjectRecord[]>(DATA_PATH);
  const updated = projects.map((project) =>
    project.name === name ? { ...project, imageCount } : project,
  );
  await writeJsonFile(DATA_PATH, updated);

  return NextResponse.json({ imageCount });
}
