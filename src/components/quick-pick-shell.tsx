'use client';

import { overlayFade, quickPickPanel } from '@/constants/motion';
import { motion } from 'motion/react';

export default function QuickPickShell({
  onDismiss,
  onKeyDown,
  className,
  children,
}: {
  onDismiss: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50" onKeyDown={onKeyDown}>
      <motion.div
        {...overlayFade}
        className="absolute inset-0 bg-black/25"
        onMouseDown={onDismiss}
      />
      <motion.div
        {...quickPickPanel}
        style={{ originY: 0 }}
        className={`bg-sidebar border-border absolute top-9 left-1/2 -translate-x-1/2 overflow-hidden rounded-lg border shadow-2xl ${className ?? ''}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
