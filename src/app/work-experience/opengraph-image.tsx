import { ImageResponse } from 'next/og';

import { OgCard } from '@/components/og/og-card';
import { ogImageContentType, ogImageSize } from '@/components/og/og-config';

export const alt = 'Work Experience of Gautam Anand';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        title="Work Experience"
        subtitle="Career timeline of Gautam Anand"
        tag="work-experience.tsx"
      />
    ),
    size,
  );
}
