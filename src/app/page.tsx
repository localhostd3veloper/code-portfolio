'use client';

import { useState } from 'react';
import PersistentSidebar from '@/components/persistent-sidebar';
import TopBar from '@/components/top-bar';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import BottomBar from '@/components/bottom-bar';

export default function Home() {
  const [terminalVisible, setTerminalVisible] = useState(true);

  return (
    <div className="min-h-screen h-dvh bg-editor overflow-hidden flex flex-col">
      <TopBar />

      <PanelGroup direction="horizontal" className="flex-1">
        <PersistentSidebar />
        <Panel defaultSize={15} minSize={15} maxSize={30} collapsible>
          <aside className="h-full w-full bg-sidebar">Files</aside>
        </Panel>

        <PanelResizeHandle className="w-0.5 bg-border hover:bg-token-keyword cursor-col-resize" />

        <Panel minSize={40}>
          <PanelGroup direction="vertical" className="h-full w-full">
            <Panel defaultSize={80} minSize={30}>
              <main className="h-full w-full bg-panel">editor area</main>
            </Panel>

            <PanelResizeHandle className="h-0.5 bg-border hover:bg-token-keyword cursor-row-resize" />

            <Panel
              defaultSize={20}
              minSize={0}
              collapsible
              onResize={(size) => setTerminalVisible(size > 0)}
            >
              {terminalVisible && (
                <div className="h-full w-full bg-sidebar text-white p-2">
                  <div className="text-sm font-mono">Terminal</div>
                </div>
              )}
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
      <BottomBar />
    </div>
  );
}
