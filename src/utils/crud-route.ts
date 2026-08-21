import { NextRequest, NextResponse } from 'next/server';

import { isDev } from '@/utils/dev-guard';
import { readJsonFile, writeJsonFile } from '@/utils/json-store';

export function createCrudRoute<T>(
  dataPath: string,
  validate?: (items: T[]) => string | null,
) {
  async function GET() {
    if (!isDev()) return NextResponse.json({ error: 'Not available' }, { status: 404 });

    const items = await readJsonFile<T[]>(dataPath);
    return NextResponse.json(items);
  }

  async function PUT(request: NextRequest) {
    if (!isDev()) return NextResponse.json({ error: 'Not available' }, { status: 404 });

    const items: T[] = await request.json();
    const error = validate?.(items);
    if (error) return NextResponse.json({ error }, { status: 400 });

    await writeJsonFile(dataPath, items);
    return NextResponse.json(items);
  }

  return { GET, PUT };
}
