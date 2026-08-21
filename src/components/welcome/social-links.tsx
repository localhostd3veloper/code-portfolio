import { socialMediaLinks } from '@/constants/self';

import Reveal from '@/components/motion/reveal';

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {socialMediaLinks.map(({ name, link, icon: Icon }) => (
        <Reveal key={name}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-editor hover:bg-token-hover flex items-center gap-3 border px-3 py-2 transition-colors duration-150 hover:border-blue-500"
          >
            <Icon className="text-foreground h-5 w-5 transition-colors duration-150 group-hover:text-blue-400" />
            <span className="text-foreground text-sm font-medium group-hover:text-blue-400">
              {name}
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
