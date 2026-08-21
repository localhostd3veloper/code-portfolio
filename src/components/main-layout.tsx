'use client';

import { useEffect, useRef, useState } from 'react';
import { fadeIn, staggerContainer } from '@/constants/motion';
import { useEditorStore } from '@/store';
import { motion, MotionConfig } from 'motion/react';
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
import MobileFloatingBar from '@/components/floating-bar';
import PersistentSidebar from '@/components/persistent-sidebar';
import SearchPalette from '@/components/search-palette';
import Terminal from '@/components/terminal';
import ThemePicker from '@/components/theme-picker';
import TopBar from '@/components/top-bar';

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { addLog, isTerminalOpen } = useEditorStore();
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    if (window.innerWidth < 1024) setIsMobile(true);
    if (isMobile) {
      terminalRef.current?.collapse();
      sidebarRef.current?.collapse();
    }
  }, [isMobile]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        animate="show"
        className="bg-background flex h-dvh min-h-screen flex-col"
      >
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          <PersistentSidebar togglePanel={togglePanel} toggleSidebar={toggleSidebar} />
          <PanelGroup autoSaveId={'tabs'} direction="horizontal" className="flex-1 p-2">
            <Panel
              className="hidden md:block"
              defaultSize={isMobile ? 50 : 20}
              minSize={0}
              maxSize={100}
              collapsible
              ref={sidebarRef}
            >
              <Explorer />
            </Panel>

            <PanelResizeHandle className="group relative w-3 shrink-0 cursor-col-resize outline-none">
              <div className="bg-border absolute inset-y-2 left-1/2 w-0.5 -translate-x-1/2 rounded-full transition-colors group-data-[resize-handle-state=drag]:bg-blue-500 group-data-[resize-handle-state=hover]:bg-blue-500" />
            </PanelResizeHandle>

            <Panel minSize={0} collapsible defaultSize={isMobile ? 50 : 80}>
              <PanelGroup autoSaveId={'editor'} direction="vertical">
                <Panel defaultSize={80} collapsible order={0}>
                  <main className="bg-panel border-border flex h-full w-full flex-col overflow-hidden rounded-lg border shadow-[0_2px_10px_var(--color-shadow)]">
                    <EditorTabs />
                    <div className="flex-1 overflow-y-auto">{children}</div>
                  </main>
                </Panel>

                <PanelResizeHandle className="group relative h-3 shrink-0 cursor-row-resize outline-none">
                  <div className="bg-border absolute inset-x-2 top-1/2 h-0.5 -translate-y-1/2 rounded-full transition-colors group-data-[resize-handle-state=drag]:bg-blue-500 group-data-[resize-handle-state=hover]:bg-blue-500" />
                </PanelResizeHandle>

                <Panel
                  id="terminal"
                  defaultSize={20}
                  order={1}
                  minSize={0}
                  maxSize={40}
                  collapsible
                  ref={terminalRef}
                >
                  <motion.div variants={fadeIn} className="h-full w-full">
                    <Terminal collapsePanel={collapsePanel} />
                  </motion.div>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </div>
        <MobileFloatingBar />
        <ThemePicker />
        <SearchPalette />
        <BottomBar />
      </motion.div>
    </MotionConfig>
  );
}
