import { SITE_NAME, SITE_URL } from '@/constants/seo';
import { Metadata } from 'next';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export const buildMetadata = ({
  title,
  description,
  path,
}: PageMetadataInput): Metadata => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
};
