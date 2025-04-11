'use client';

import React from 'react';
import { sidebarLinks } from '@/constants';
import { useEditorStore } from '@/store';
import { SidebarLinksType } from '@/types';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  VscCollapseAll,
  VscEllipsis,
  VscNewFile,
  VscNewFolder,
  VscRefresh,
} from 'react-icons/vsc';

export default function Explorer() {
  const pathname = usePathname();
  const { activeEditors, addEditor } = useEditorStore();
  const handleNewEditor = (editor: SidebarLinksType) => {
    // check if the editor is already open
    const isEditorOpen = activeEditors.some((e) => e.href === editor.href);
    if (isEditorOpen) return;
    addEditor(editor);
  };
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-sidebar flex h-full w-full flex-col p-2"
    >
      <div className="mb-2 flex items-center justify-between px-2">
        <h3 className="text-muted text-sm font-light">EXPLORER</h3>
        <VscEllipsis />
      </div>

      <div className="text-muted flex items-center justify-between px-2">
        <p
          title="CODE-PORTFOLIO"
          className="overflow-hidden text-xs font-medium text-ellipsis whitespace-nowrap"
        >
          CODE-PORTFOLIO
        </p>
        <div className="flex gap-2">
          <VscNewFile />
          <VscNewFolder />
          <VscRefresh />
          <VscCollapseAll />
        </div>
      </div>

      <nav className="mt-2 flex flex-col gap-1">
        {sidebarLinks.map(({ label, icon: Icon, color, href }) => (
          <Link
            href={href}
            key={label}
            className={`hover:bg-editor/80 flex w-full items-center space-x-2 overflow-hidden px-3 py-1 text-sm duration-300 ${
              pathname === href && 'bg-editor'
            }`}
            onClick={() => handleNewEditor({ label, icon: Icon, color, href })}
          >
            <Icon style={{ color }} className="min-h-4 min-w-4" />
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
}
