'use client';

import React from 'react';
import { sidebarIcons } from '@/constants';
import { VscFiles, VscTerminal } from 'react-icons/vsc';

export default function PersistentSidebar({
  togglePanel,
  toggleSidebar,
}: {
  togglePanel: () => void;
  toggleSidebar: () => void;
}) {
  return (
    <div className="bg-sidebar border-border hidden h-full w-14 flex-col gap-3 border-r py-2 md:flex">
      <button
        className="hover:bg-token-hover hover:text-foreground flex cursor-pointer items-center justify-center border-l-2 border-blue-500 p-2 text-xl"
        title="Terminal"
        onClick={toggleSidebar}
      >
        <VscFiles className="h-6 w-6" />
      </button>
      {sidebarIcons.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          className={`hover:bg-token-hover text-muted hover:text-foreground flex cursor-pointer items-center justify-center p-2 text-xl`}
          title={label}
        >
          <Icon className="h-6 w-6" />
        </button>
      ))}

      <button
        className="hover:bg-token-hover hover:text-foreground flex cursor-pointer items-center justify-center p-2 text-xl text-amber-600"
        title="Terminal"
        onClick={togglePanel}
      >
        <VscTerminal className="h-6 w-6" />
      </button>
    </div>
  );
}
