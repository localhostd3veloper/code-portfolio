'use client';

import { useEffect } from 'react';
import { useEditorStore } from '@/store';
import { AnimatePresence } from 'motion/react';

import ThemeQuickPick from '@/components/theme-quick-pick';

const MODIFIER_KEYS = ['Control', 'Meta', 'Shift', 'Alt'];
const CHORD_TIMEOUT_MS = 1500;

export default function ThemePicker() {
  const isThemePickerOpen = useEditorStore((state) => state.isThemePickerOpen);

  useEffect(() => {
    let chordPending = false;
    let chordTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleChord = (event: KeyboardEvent) => {
      if (MODIFIER_KEYS.includes(event.key)) return;

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        chordPending = true;
        clearTimeout(chordTimeout);
        chordTimeout = setTimeout(() => (chordPending = false), CHORD_TIMEOUT_MS);
        return;
      }

      const wasPending = chordPending;
      chordPending = false;
      if (!wasPending) return;
      if (!event.ctrlKey && !event.metaKey) return;
      if (event.key.toLowerCase() !== 't') return;

      event.preventDefault();
      useEditorStore.getState().setSearchOpen(false);
      useEditorStore.getState().setThemePickerOpen(true);
    };

    window.addEventListener('keydown', handleChord);
    return () => {
      window.removeEventListener('keydown', handleChord);
      clearTimeout(chordTimeout);
    };
  }, []);

  return <AnimatePresence>{isThemePickerOpen && <ThemeQuickPick />}</AnimatePresence>;
}
