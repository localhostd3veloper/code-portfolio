'use client';

import { useEffect } from 'react';
import { useEditorStore } from '@/store';
import { AnimatePresence } from 'motion/react';

import SearchQuickPick from '@/components/search-quick-pick';

export default function SearchPalette() {
  const isSearchOpen = useEditorStore((state) => state.isSearchOpen);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (!event.ctrlKey && !event.metaKey) return;

      const key = event.key.toLowerCase();
      const isQuickOpen = (key === 'p' || key === 'k') && !event.shiftKey;
      const isFindInFiles = key === 'f' && event.shiftKey;
      if (!isQuickOpen && !isFindInFiles) return;

      event.preventDefault();
      useEditorStore.getState().setSearchOpen(true);
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  return <AnimatePresence>{isSearchOpen && <SearchQuickPick />}</AnimatePresence>;
}
