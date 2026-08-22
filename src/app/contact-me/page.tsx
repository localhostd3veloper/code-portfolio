import { socialMediaLinks } from '@/constants/self';

import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';

import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
  title: 'Contact Me',
  description:
    'Get in touch with Gautam Anand. Connect on GitHub, LinkedIn, Dev.to, and more.',
  path: '/contact-me',
});

export default function ContactMePage() {
  return (
    <Stagger
      startDelay={0.12}
      className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 md:py-12"
    >
      <Reveal>
        <h1 className="text-2xl font-semibold">Contact Me</h1>
      </Reveal>
      {socialMediaLinks.map(({ icon: Icon, link, name }) => (
        <Reveal key={link}>
          <a
            href={link}
            className="border-border hover:bg-token-hover flex items-center gap-2 border p-4 transition-colors duration-150 hover:border-blue-500"
          >
            <Icon className="h-6 w-6" />
            {name}
          </a>
        </Reveal>
      ))}
    </Stagger>
  );
}
