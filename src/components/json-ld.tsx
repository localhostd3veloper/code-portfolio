import { socialMediaLinks } from '@/constants/self';
import { SITE_NAME, SITE_URL } from '@/constants/seo';

export default function JsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    jobTitle: 'Full Stack Engineer',
    sameAs: socialMediaLinks.map(({ link }) => link),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
