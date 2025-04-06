'use client';

import { sidebarIcons } from '@/constants';
import React from 'react';
import { VscFiles, VscTerminal } from 'react-icons/vsc';

export default function PersistentSidebar({
  togglePanel,
  toggleSidebar,
}: {
  togglePanel: () => void;
  toggleSidebar: () => void;
}) {
  return (
    <div className="h-full w-14 bg-sidebar flex flex-col border-r border-border gap-3 py-2">
      <button
        className="p-2 hover:bg-token-hover text-xl border-l-2 border-blue-500 flex items-center justify-center cursor-pointer hover:text-foreground"
        title="Terminal"
        onClick={toggleSidebar}
      >
        <VscFiles className="w-6 h-6" />
      </button>
      {sidebarIcons.map(({ id, icon: Icon, label }, index) => (
        <button
          key={id}
          className={`p-2 hover:bg-token-hover text-xl text-muted flex items-center justify-center cursor-pointer hover:text-foreground`}
          title={label}
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}

      <button
        className="p-2 hover:bg-token-hover text-xl text-amber-600 flex items-center justify-center cursor-pointer hover:text-foreground"
        title="Terminal"
        onClick={togglePanel}
      >
        <VscTerminal className="w-6 h-6" />
      </button>
    </div>
  );
}
