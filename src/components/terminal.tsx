'use client';

import React, { useEffect, useRef } from 'react';
import { DURATION, EASE } from '@/constants/motion';
import { useEditorStore } from '@/store';
import { TerminalTabId } from '@/store/slices/terminal-slice';
import { AnimatePresence, motion } from 'motion/react';
import {
  VscAdd,
  VscArrowRight,
  VscChevronDown,
  VscChevronUp,
  VscClose,
  VscEllipsis,
  VscSplitHorizontal,
  VscTerminal,
  VscTerminalBash,
  VscTrash,
} from 'react-icons/vsc';

import TerminalShell from '@/components/terminal-shell';

function TerminalTabButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: typeof VscTerminal;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs ${
        active ? 'bg-panel' : 'text-muted'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

export default function Terminal({ collapsePanel }: { collapsePanel: () => void }) {
  const { logs, isTerminalOpen, activeTerminalTab, setActiveTerminalTab } =
    useEditorStore();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTerminalTab === 'bun' && logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs, activeTerminalTab]);

  if (!isTerminalOpen) return null;

  const selectTab = (tab: TerminalTabId) => setActiveTerminalTab(tab);

  return (
    <div className="border-border bg-sidebar flex h-full w-full flex-col overflow-hidden rounded-lg border px-4 py-3 font-mono text-sm shadow-[0_2px_10px_var(--color-shadow)]">
      <div className="flex items-center justify-between">
        <div className="text-xs font-light tracking-wide underline decoration-blue-500 underline-offset-4">
          TERMINAL
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <TerminalTabButton
              label="bun"
              icon={VscTerminal}
              active={activeTerminalTab === 'bun'}
              onClick={() => selectTab('bun')}
            />
            <TerminalTabButton
              label="bash"
              icon={VscTerminalBash}
              active={activeTerminalTab === 'shell'}
              onClick={() => selectTab('shell')}
            />
          </div>

          <div className="flex items-center gap-2">
            <VscAdd
              className="h-4 w-4 cursor-pointer"
              onClick={() => selectTab('shell')}
            />
            <VscChevronDown className="h-4 w-4 cursor-pointer" />
            <VscSplitHorizontal className="h-4 w-4 cursor-pointer" />
            <VscTrash className="h-4 w-4 cursor-pointer" />
            <VscEllipsis className="h-4 w-4 cursor-pointer" />
            <VscChevronUp className="h-4 w-4 cursor-pointer" />
            <VscClose className="h-4 w-4 cursor-pointer" onClick={collapsePanel} />
          </div>
        </div>
      </div>

      <div
        className={`mt-3 flex min-h-0 flex-1 flex-col ${
          activeTerminalTab === 'bun' ? '' : 'hidden'
        }`}
      >
        <div className="flex items-center gap-2">
          <VscArrowRight size={14} color="#ef4444" />
          <span className="font-semibold text-green-400">localhostdeveloper@seol</span>
          <span className="">:</span>
          <span className="text-blue-400">~/code-portfolio</span>
          <span className="">$</span>
          <span className="text-green-400">bun dev</span>
        </div>

        <div
          ref={logRef}
          className="mt-3 ml-5 flex-1 space-y-1 overflow-y-scroll scroll-smooth"
        >
          <div className="">
            <span className="text-purple-500"> ▲ Next.js 16.2.10</span> (Turbopack)
          </div>
          <div className="">
            - Local: <span className="text-blue-400">http://localhost:3000</span>
          </div>
          <div className="">
            - Network: <span className="text-blue-400">http://192.168.1.14:3000</span>
          </div>
          <AnimatePresence initial={false}>
            {logs.map((log) => (
              <motion.ol
                key={log.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: DURATION.fast, ease: EASE.out }}
              >
                {log.logline}
              </motion.ol>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div
        className={`mt-3 flex min-h-0 flex-1 flex-col ${
          activeTerminalTab === 'shell' ? '' : 'hidden'
        }`}
      >
        <TerminalShell />
      </div>
    </div>
  );
}
