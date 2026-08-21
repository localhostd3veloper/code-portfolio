import fs from 'fs/promises';
import path from 'path';

export async function readJsonFile<T>(relativePath: string): Promise<T> {
  const raw = await fs.readFile(
    path.join(/* turbopackIgnore: true */ process.cwd(), relativePath),
    'utf-8',
  );
  return JSON.parse(raw);
}

export async function writeJsonFile<T>(relativePath: string, data: T) {
  await fs.writeFile(
    path.join(/* turbopackIgnore: true */ process.cwd(), relativePath),
    `${JSON.stringify(data, null, 2)}\n`,
    'utf-8',
  );
}
