'use client';

import { useState } from 'react';
import {
  VscArrowLeft,
  VscArrowRight,
  VscChromeMaximize,
  VscChromeMinimize,
  VscClose,
  VscCopilot,
  VscVscode,
} from 'react-icons/vsc';

import MenuItems from './menu-items';

export default function TopBar() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch((err) => {
          console.error('Error attempting to enable full-screen mode:', err);
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
        })
        .catch((err) => {
          console.error('Error attempting to disable full-screen mode:', err);
        });
    }
  };

  return (
    <div className="bg-sidebar border-border relative z-10 flex w-full items-center justify-between border-b px-2 py-1 text-sm">
      <div className="flex items-center">
        <VscVscode className="mr-2 h-5 w-5 text-blue-500" />
        <MenuItems />
      </div>
      <div className="flex flex-1 items-center justify-center gap-2">
        <div className="hidden items-center gap-1 md:flex">
          <VscArrowLeft className="h-4 w-4" />
          <VscArrowRight className="text-muted h-4 w-4" />
        </div>
        <input
          placeholder="code-portfolio"
          className="bg-editor border-border text-muted flex w-full justify-center rounded-md border py-0.5 text-center outline-none md:w-1/2"
        />
        <VscCopilot className="text-muted hidden h-4 w-4 md:block" />
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <button className="" onClick={toggleFullscreen} disabled={!isFullscreen}>
          <VscChromeMinimize />
        </button>
        <button className="" onClick={toggleFullscreen} disabled={isFullscreen}>
          <VscChromeMaximize />
        </button>
        <VscClose />
      </div>
    </div>
  );
}
