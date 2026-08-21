'use client';

import { sidebarIcons } from '@/constants';
import { fadeIn } from '@/constants/motion';
import { useEditorStore } from '@/store';
import { motion } from 'motion/react';
import { VscFiles, VscTerminal } from 'react-icons/vsc';

export default function PersistentSidebar({
  togglePanel,
  toggleSidebar,
}: {
  togglePanel: () => void;
  toggleSidebar: () => void;
}) {
  const { setThemePickerOpen, setSearchOpen } = useEditorStore();

  const handleIconClick = (id: string) => {
    switch (id) {
      case 'search':
        setSearchOpen(true);
        return;
      case 'settings':
        setThemePickerOpen(true);
        return;
    }
  };

  const iconTitle = (id: string, label: string) => {
    switch (id) {
      case 'search':
        return 'Search (Ctrl+K)';
      case 'settings':
        return 'Color Theme (Ctrl+K Ctrl+T)';
      default:
        return label;
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      className="bg-background hidden h-full w-14 flex-col gap-3 py-2 md:flex"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="hover:bg-token-hover hover:text-foreground flex cursor-pointer items-center justify-center border-l-2 border-blue-500 p-2 text-xl"
        title="Explorer"
        onClick={toggleSidebar}
      >
        <VscFiles className="h-6 w-6" />
      </motion.button>
      {sidebarIcons.map(({ id, icon: Icon, label }) => (
        <motion.button
          key={id}
          whileTap={{ scale: 0.9 }}
          className="hover:bg-token-hover text-muted hover:text-foreground flex cursor-pointer items-center justify-center p-2 text-xl"
          title={iconTitle(id, label)}
          onClick={() => handleIconClick(id)}
        >
          <Icon className="h-6 w-6" />
        </motion.button>
      ))}

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="hover:bg-token-hover hover:text-foreground flex cursor-pointer items-center justify-center p-2 text-xl text-amber-600"
        title="Terminal"
        onClick={togglePanel}
      >
        <VscTerminal className="h-6 w-6" />
      </motion.button>
    </motion.div>
  );
}
