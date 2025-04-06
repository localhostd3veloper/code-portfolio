'use client';
import PersistentSidebar from '@/components/persistent-sidebar';
import TopBar from '@/components/top-bar';
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';
import BottomBar from '@/components/bottom-bar';
import Explorer from '@/components/explorer';
import EditorTabs from '@/components/editor-tabs';
import Terminal from './terminal';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useEditorStore } from '@/store';

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
        <span className="text-green-400">200</span> in{' '}
        {new Date().getUTCMilliseconds()}ms{' '}
      </div>
    );
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
    <div className="min-h-screen h-dvh bg-editor  flex flex-col">
      <TopBar />
      <PanelGroup autoSaveId={'tabs'} direction="horizontal" className="flex-1">
        <PersistentSidebar
          togglePanel={togglePanel}
          toggleSidebar={toggleSidebar}
        />
        <Panel
          defaultSize={20}
          minSize={15}
          maxSize={30}
          collapsible
          ref={sidebarRef}
        >
          <Explorer />
        </Panel>

        <PanelResizeHandle className="w-0.5 bg-border hover:bg-blue-500 cursor-col-resize" />

        <Panel minSize={40}>
          <PanelGroup autoSaveId={'editor'} direction="vertical">
            <Panel defaultSize={80} minSize={30} collapsible order={0}>
              <main className="h-full w-full bg-panel">
                <EditorTabs />
                <div className="h-full overflow-y-auto">{children}</div>
              </main>
            </Panel>

            <PanelResizeHandle className="h-0.5 bg-border hover:bg-blue-500 cursor-row-resize" />

            <Panel
              id="terminal"
              defaultSize={30}
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
