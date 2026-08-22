import { ImageResponse } from 'next/og';

import { OgCard } from '@/components/og/og-card';
import { ogImageContentType, ogImageSize } from '@/components/og/og-config';

export const alt = 'Gautam Anand, Full Stack Engineer';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return new ImageResponse(
    <OgCard title="Gautam Anand" subtitle="Full Stack Engineer" tag="portfolio.tsx" />,
    size,
  );
}
