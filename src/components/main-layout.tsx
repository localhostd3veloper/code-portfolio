'use client';

import { useEffect, useRef } from 'react';
import { useEditorStore } from '@/store';
import { usePathname } from 'next/navigation';
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';

import BottomBar from '@/components/bottom-bar';
import EditorTabs from '@/components/editor-tabs';
import Explorer from '@/components/explorer';
import PersistentSidebar from '@/components/persistent-sidebar';
import TopBar from '@/components/top-bar';

import Terminal from './terminal';

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { addLog, isTerminalOpen } = useEditorStore();

  useEffect(() => {
    if (!isTerminalOpen) return;

    addLog(
      <div className="flex items-center gap-2">
        <span className="text-green-400">✓</span> GET {pathname}{' '}
        <span className="text-green-400">200</span> in {new Date().getUTCMilliseconds()}
        ms{' '}
      </div>,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const terminalRef = useRef<ImperativePanelHandle>(null);
  const sidebarRef = useRef<ImperativePanelHandle>(null);

  const collapsePanel = () => {
    const panel = terminalRef.current;
    if (panel) panel.collapse();
  };

  const togglePanel = () => {
    const panel = terminalRef.current;
    if (panel) {
      if (panel.isExpanded()) panel.collapse();
      else panel.expand();
    }
  };

  const toggleSidebar = () => {
    const panel = sidebarRef.current;
    if (panel) {
      if (panel.isExpanded()) panel.collapse();
      else panel.expand();
    }
  };
  return (
    <div className="bg-editor flex h-dvh min-h-screen flex-col">
      <TopBar />
      <PanelGroup autoSaveId={'tabs'} direction="horizontal" className="flex-1">
        <PersistentSidebar togglePanel={togglePanel} toggleSidebar={toggleSidebar} />
        <Panel defaultSize={20} minSize={15} maxSize={30} collapsible ref={sidebarRef}>
          <Explorer />
        </Panel>

        <PanelResizeHandle className="bg-border w-0.5 cursor-col-resize hover:bg-blue-500" />

        <Panel minSize={40} defaultValue={80}>
          <PanelGroup autoSaveId={'editor'} direction="vertical">
            <Panel defaultSize={80} collapsible order={0}>
              <main className="bg-panel flex h-full w-full flex-col">
                <EditorTabs />
                <div className="flex-1 overflow-y-auto">{children}</div>
              </main>
            </Panel>

            <PanelResizeHandle className="bg-border h-0.5 cursor-row-resize hover:bg-blue-500" />

            <Panel
              id="terminal"
              defaultSize={20}
              order={1}
              minSize={0}
              maxSize={40}
              collapsible
              ref={terminalRef}
            >
              <Terminal collapsePanel={collapsePanel} />
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
      <BottomBar />
    </div>
  );
}
