'use client';

import { SidebarLinksType, useEditorStore } from '@/store/editor';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
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
    <div className="flex border border-border">
      {activeEditors.map((editor) => (
        <div
          key={editor.label}
          className={`px-2 py-1 flex gap-2 items-center ${
            editor.isActive
              ? 'border-t-2 border-x border-x-border border-blue-500 '
              : 'bg-sidebar text-gray-400'
          }`}
        >
          <Link
            href={editor.href}
            className="flex gap-2 items-center text-sm text-gray-400"
          >
            <editor.icon className="w-4 h-4" color={editor.color} />
            {editor.label}
          </Link>
          <button onClick={() => handleEditorClose(editor)}>
            <VscClose className="w-4 h-4 cursor-pointer" />
          </button>
        </div>
      ))}
    </div>
  );
}
