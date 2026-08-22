import { ImageResponse } from 'next/og';

import { OgCard } from '@/components/og/og-card';
import { ogImageContentType, ogImageSize } from '@/components/og/og-config';

export const alt = 'Contact Gautam Anand';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        title="Contact Me"
        subtitle="Get in touch with Gautam Anand"
        tag="contact-me.tsx"
      />
    ),
    size,
  );
}
