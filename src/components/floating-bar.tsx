'use client';

import { sidebarLinks } from '@/constants';
import { slideUp } from '@/constants/motion';
import { useEditorStore } from '@/store';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscColorMode, VscSearch } from 'react-icons/vsc';

export default function MobileFloatingBar() {
  const { handleNewEditor, setThemePickerOpen, setSearchOpen } = useEditorStore();
  const pathname = usePathname();

  return (
    <motion.div
      {...slideUp}
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-3 rounded-full border border-white/20 bg-white/10 p-3 shadow-lg shadow-black/20 backdrop-blur-md backdrop-saturate-150 md:hidden dark:bg-black/20"
    >
      {sidebarLinks.map(({ icon: Icon, color, href, label }) => (
        <Link
          key={label}
          href={href}
          onClick={() => handleNewEditor({ label, icon: Icon, color, href })}
          className={`flex items-center justify-center transition-all duration-200 ease-out ${
            pathname === href ? 'mx-2 scale-125' : 'scale-100 hover:scale-105'
          } `}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </Link>
      ))}
      <button
        aria-label="Search"
        onClick={() => setSearchOpen(true)}
        className="flex items-center justify-center transition-all duration-200 ease-out hover:scale-105"
      >
        <VscSearch className="text-foreground h-5 w-5" />
      </button>
      <button
        aria-label="Change color theme"
        onClick={() => setThemePickerOpen(true)}
        className="flex items-center justify-center transition-all duration-200 ease-out hover:scale-105"
      >
        <VscColorMode className="text-foreground h-5 w-5" />
      </button>
    </motion.div>
  );
}
