'use client';
import PersistentSidebar from '@/components/persistent-sidebar';
import TopBar from '@/components/top-bar';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import BottomBar from '@/components/bottom-bar';
import Explorer from '@/components/explorer';
import EditorTabs from '@/components/editor-tabs';
import Terminal from './terminal';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useEditorStore } from '@/store';

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { addLog, isTerminalOpen } = useEditorStore();
  useEffect(() => {
    addLog(
      <div className="flex items-center gap-2">
        <span className="text-green-400">✓</span> GET {pathname}{' '}
        <span className="text-green-400">200</span> in{' '}
        {new Date().getUTCMilliseconds()}ms{' '}
      </div>
    );
  }, [pathname]);
  return (
    <div className="min-h-screen h-dvh bg-editor overflow-hidden flex flex-col">
      <TopBar />
      <PanelGroup direction="horizontal" className="flex-1">
        <PersistentSidebar />
        <Panel defaultSize={15} minSize={15} maxSize={30} collapsible>
          <Explorer />
        </Panel>

        <PanelResizeHandle className="w-0.5 bg-border hover:bg-blue-500 cursor-col-resize" />

        <Panel minSize={40}>
          <PanelGroup direction="vertical" className="h-full w-full">
            <Panel defaultSize={80} minSize={30}>
              <main className="h-full w-full bg-panel">
                <EditorTabs />
                {children}
              </main>
            </Panel>

            <PanelResizeHandle className="h-0.5 bg-border hover:bg-blue-500 cursor-row-resize" />

            {isTerminalOpen && (
              <Panel defaultSize={20}>
                <Terminal />
              </Panel>
            )}
          </PanelGroup>
        </Panel>
      </PanelGroup>
      <BottomBar />
    </div>
  );
}
