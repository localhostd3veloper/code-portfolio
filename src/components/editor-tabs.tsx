'use client';

import { useEffect } from 'react';
import { DURATION, EASE, fadeIn, SPRING } from '@/constants/motion';
import { useEditorStore } from '@/store';
import { SidebarLinksType } from '@/types';
import { AnimatePresence, motion, useIsPresent } from 'motion/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { VscClose } from 'react-icons/vsc';

const tabTransition = { duration: DURATION.fast, ease: EASE.out };

export default function EditorTabs() {
  const { activeEditors, setActiveEditor, removeEditor } = useEditorStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const editor = activeEditors.find((e) => e.href === pathname);
    if (editor) {
      setActiveEditor(editor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleEditorClose = (editor: SidebarLinksType) => {
    if (activeEditors.length === 1) {
      alert('At least one open editor is required');
      return;
    }
    removeEditor(editor);

    if (editor.isActive) {
      const nextEditor = activeEditors.find((e) => e !== editor);
      if (nextEditor) {
        router.push(nextEditor.href);
      }
    }
  };
  return (
    <motion.div
      layoutScroll
      variants={fadeIn}
      className="border-border flex overflow-x-auto border-b"
    >
      <AnimatePresence initial={false}>
        {activeEditors?.map((editor) => {
          const isActive = pathname === editor.href;
          return (
            <motion.div
              key={editor.label}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={tabTransition}
              className={`relative flex items-center gap-2 border-x border-x-transparent px-2 py-1 ${
                isActive ? '' : 'bg-sidebar text-muted'
              }`}
            >
              <ActiveTabIndicator active={isActive} />
              <Link
                href={editor.href}
                className="text-muted flex items-center gap-2 text-sm"
              >
                <editor.icon className="min-h-4 min-w-4" color={editor.color} />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {' '}
                  {editor.label}
                </span>
              </Link>
              <button onClick={() => handleEditorClose(editor)}>
                <VscClose className="h-4 w-4 cursor-pointer" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

function ActiveTabIndicator({ active }: { active: boolean }) {
  const isPresent = useIsPresent();
  if (!active || !isPresent) return null;

  return (
    <motion.div
      layoutId="active-tab"
      className="absolute inset-x-0 -top-px h-0.5 bg-blue-500"
      transition={SPRING.indicator}
    />
  );
}
