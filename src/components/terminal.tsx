'use client';

import { useEditorStore } from '@/store';
import React, { useEffect, useRef } from 'react';
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

export default function Terminal({
  collapsePanel,
}: {
  collapsePanel: () => void;
}) {
  const { logs, isTerminalOpen, toggleTerminal } = useEditorStore();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);
  if (!isTerminalOpen) return null;
  return (
    <div className="Z-50 h-full w-full bg-sidebar font-mono   text-sm px-4 py-2 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-xs font-light  tracking-wide underline underline-offset-4 decoration-blue-500">
          TERMINAL
        </div>

        <div className=" flex items-center gap-2">
          <VscTerminal className="h-4 w-4" />
          <span className="text-xs ">bun</span>
          <VscAdd className="h-4 w-4 cursor-pointer" />
          <VscChevronDown className="h-4 w-4 cursor-pointer" />
          <VscSplitHorizontal className="h-4 w-4 cursor-pointer" />
          <VscTrash className="h-4 w-4 cursor-pointer" />
          <VscEllipsis className="h-4 w-4 cursor-pointer" />
          <VscChevronUp className="h-4 w-4 cursor-pointer" />
          <VscClose
            className="h-4 w-4 cursor-pointer"
            onClick={collapsePanel}
          />
        </div>
      </div>

      {/* Prompt Line */}
      <div className="flex items-center gap-2 mt-2">
        <VscArrowRight size={14} color="#ef4444" />
        <span className="text-green-400 font-semibold">
          localhostdeveloper@seol
        </span>
        <span className="">:</span>
        <span className="text-blue-400">~/code-portfolio</span>
        <span className="">$</span>
        <span className="text-green-400">bun dev</span>
      </div>

      {/* Startup Logs */}
      <div
        ref={logRef}
        className="mt-2 space-y-1 ml-5 overflow-y-scroll scroll-smooth flex-1"
      >
        <div className="">
          <span className="text-purple-500"> ▲ Next.js 15.2.1</span> (Turbopack)
        </div>
        <div className="">
          - Local: <span className="text-blue-400">http://localhost:3000</span>
        </div>
        <div className="">
          - Network:{' '}
          <span className="text-blue-400">http://192.168.1.14:3000</span>
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
