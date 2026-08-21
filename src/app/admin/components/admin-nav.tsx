'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/admin', label: 'Projects' },
  { href: '/admin/experience', label: 'Experience' },
  { href: '/admin/blogs', label: 'Blogs' },
  { href: '/admin/repos', label: 'Repos' },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="border-border mt-4 flex gap-2 border-b pb-3">
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-3 py-1 text-sm ${
            pathname === link.href ? 'bg-list-active' : 'bg-sidebar'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
