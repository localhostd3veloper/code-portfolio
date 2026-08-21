'use client';

import React, { useEffect, useRef } from 'react';
import { useEditorStore } from '@/store';
import {
  VscAdd,
  VscArrowRight,
  VscChevronDown,
  VscChevronUp,
  VscClose,
  VscEllipsis,
  VscSplitHorizontal,
  VscTerminal,
  VscTrash,
} from 'react-icons/vsc';

export default function Terminal({ collapsePanel }: { collapsePanel: () => void }) {
  const { logs, isTerminalOpen } = useEditorStore();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);
  if (!isTerminalOpen) return null;
  return (
    <div className="border-border bg-sidebar flex h-full w-full flex-col overflow-hidden rounded-lg border px-4 py-3 font-mono text-sm shadow-[0_2px_10px_var(--color-shadow)]">
      <div className="flex items-center justify-between">
        <div className="text-xs font-light tracking-wide underline decoration-blue-500 underline-offset-4">
          TERMINAL
        </div>

        <div className="flex items-center gap-2">
          <VscTerminal className="h-4 w-4" />
          <span className="text-xs">bun</span>
          <VscAdd className="h-4 w-4 cursor-pointer" />
          <VscChevronDown className="h-4 w-4 cursor-pointer" />
          <VscSplitHorizontal className="h-4 w-4 cursor-pointer" />
          <VscTrash className="h-4 w-4 cursor-pointer" />
          <VscEllipsis className="h-4 w-4 cursor-pointer" />
          <VscChevronUp className="h-4 w-4 cursor-pointer" />
          <VscClose className="h-4 w-4 cursor-pointer" onClick={collapsePanel} />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
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
        {logs.map((log) => (
          <ol key={log.id} className="">
            {log.logline}
          </ol>
        ))}
      </div>
    </div>
  );
}
