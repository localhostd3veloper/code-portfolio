import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import { VscChevronRight } from 'react-icons/vsc';

import Reveal from '@/components/motion/reveal';

const DESCRIPTIONS: Record<string, string> = {
  '/about-me': 'Who I am, off the clock.',
  '/projects': 'Things I have designed, built, and shipped.',
  '/blogs': 'Notes on engineering and AI.',
  '/work-experience': 'Roles, teams, and what I owned there.',
  '/contact-me': 'Email, socials, and how to reach me.',
};

export default function QuickLinks() {
  const links = sidebarLinks.filter((link) => link.href !== '/');

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {links.map(({ label, icon: Icon, color, href }) => (
        <Reveal key={href}>
          <Link
            href={href}
            className="group border-border bg-editor hover:bg-token-hover flex items-center justify-between gap-3 border p-3 transition-colors duration-150 hover:border-blue-500"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0" style={{ color }} />
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-muted text-xs">{DESCRIPTIONS[href]}</p>
              </div>
            </div>
            <VscChevronRight className="text-muted h-4 w-4 shrink-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
