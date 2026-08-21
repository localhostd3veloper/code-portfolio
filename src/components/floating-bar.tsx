'use client';

import { sidebarLinks } from '@/constants';
import { fadeIn, SPRING } from '@/constants/motion';
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
      variants={fadeIn}
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-3 rounded-full border border-white/20 bg-white/10 p-3 shadow-lg shadow-black/20 backdrop-blur-md backdrop-saturate-150 md:hidden dark:bg-black/20"
    >
      {sidebarLinks.map(({ icon: Icon, color, href, label }) => (
        <Link
          key={label}
          href={href}
          onClick={() => handleNewEditor({ label, icon: Icon, color, href })}
          className="relative flex items-center justify-center p-1.5"
        >
          {pathname === href && (
            <motion.div
              layoutId="active-nav-pill"
              style={{ borderRadius: 9999 }}
              className="absolute inset-0 bg-white/20"
              transition={SPRING.indicator}
            />
          )}
          <motion.div whileTap={{ scale: 0.9 }} className="relative">
            <Icon className="h-5 w-5" style={{ color }} />
          </motion.div>
        </Link>
      ))}
      <motion.button
        aria-label="Search"
        onClick={() => setSearchOpen(true)}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center"
      >
        <VscSearch className="text-foreground h-5 w-5" />
      </motion.button>
      <motion.button
        aria-label="Change color theme"
        onClick={() => setThemePickerOpen(true)}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center"
      >
        <VscColorMode className="text-foreground h-5 w-5" />
      </motion.button>
    </motion.div>
  );
}
