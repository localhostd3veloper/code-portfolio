'use client';

import { sidebarIcons } from '@/constants';
import React from 'react';

export default function PersistentSidebar() {
  return (
    <div className="h-full w-14 bg-sidebar flex flex-col border-r border-border gap-3 py-2">
      {sidebarIcons.map(({ id, icon: Icon, label }, index) => (
        <button
          key={id}
          className={`p-2 hover:bg-token-hover text-xl text-gray-400 flex items-center justify-center cursor-pointer hover:text-white ${
            index === 0 && 'border-l-2 border-blue-500'
          }`}
          title={label}
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}
    </div>
  );
}
