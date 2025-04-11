'use client';

import { useEffect } from 'react';
import { useEditorStore } from '@/store';
import { SidebarLinksType } from '@/types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { VscClose } from 'react-icons/vsc';

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
    <div className="border-border flex overflow-x-auto border">
      {activeEditors?.map((editor) => (
        <div
          key={editor.label}
          className={`flex items-center gap-2 px-2 py-1 ${
            editor.isActive
              ? 'border-x-border border-x border-t-2 border-blue-500'
              : 'bg-sidebar text-muted'
          }`}
        >
          <Link href={editor.href} className="text-muted flex items-center gap-2 text-sm">
            <editor.icon className="min-h-4 min-w-4" color={editor.color} />
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {' '}
              {editor.label}
            </span>
          </Link>
          <button onClick={() => handleEditorClose(editor)}>
            <VscClose className="h-4 w-4 cursor-pointer" />
          </button>
        </div>
      ))}
    </div>
  );
}
