import { ImageResponse } from 'next/og';

import { OgCard } from '@/components/og/og-card';
import { ogImageContentType, ogImageSize } from '@/components/og/og-config';

export const alt = 'Blogs by Gautam Anand';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return new ImageResponse(
    <OgCard title="Blogs" subtitle="Writing by Gautam Anand" tag="blogs.tsx" />,
    size,
  );
}
