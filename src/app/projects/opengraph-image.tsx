import { ImageResponse } from 'next/og';

import { OgCard } from '@/components/og/og-card';
import { ogImageContentType, ogImageSize } from '@/components/og/og-config';

export const alt = 'Projects by Gautam Anand';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        title="Projects"
        subtitle="Selected work by Gautam Anand"
        tag="projects.tsx"
      />
    ),
    size,
  );
}
