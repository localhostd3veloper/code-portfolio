import { ImageResponse } from 'next/og';

import { OgCard } from '@/components/og/og-card';
import { ogImageContentType, ogImageSize } from '@/components/og/og-config';

export const alt = 'About Gautam Anand';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        title="About Me"
        subtitle="Gautam Anand, Full Stack Engineer"
        tag="about-me.tsx"
      />
    ),
    size,
  );
}
