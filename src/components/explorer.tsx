'use client';
import { sidebarLinks } from '@/constants';
import { useEditorStore } from '@/store';
import { SidebarLinksType } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
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
    <aside className="h-full w-full bg-sidebar flex flex-col p-2 ">
      <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-sm text-muted font-light">EXPLORER</h3>
        <VscEllipsis />
      </div>

      <div className="flex items-center px-2 text-muted justify-between">
        <p className="text-xs font-semibold">CODE-PORTFOLIO</p>
        <div className="flex gap-2">
          <VscNewFile />
          <VscNewFolder />
          <VscRefresh />
          <VscCollapseAll />
        </div>
      </div>

      <nav className="flex flex-col gap-1 mt-2">
        {sidebarLinks.map(({ label, icon: Icon, color, href }) => (
          <Link
            href={href}
            key={label}
            className={`flex items-center space-x-2 px-3 py-1 hover:bg-editor/80 duration-300 text-sm w-full text-left ${
              pathname === href && 'bg-editor'
            }`}
            onClick={() => handleNewEditor({ label, icon: Icon, color, href })}
          >
            <Icon style={{ color }} className="w-4 h-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
