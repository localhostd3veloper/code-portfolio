'use client';

import React, { useEffect, useRef, useState } from 'react';
import { topBarMenus } from '@/constants';

export default function MenuItems() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (label: string) => {
    if (openMenu === label) setOpenMenu(null);
    else setOpenMenu(label);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return topBarMenus.map((menu) => (
    <div key={menu.label} className="relative text-sm" ref={dropdownRef}>
      <button
        onClick={() => handleClick(menu.label)}
        className={`hover:bg-border hidden cursor-pointer rounded px-2 py-0.5 md:block ${
          openMenu === menu.label ? 'bg-[#3c3c3c]' : ''
        }`}
      >
        {menu.label}
      </button>

      {openMenu === menu.label && (
        <div className="bg-editor border-border absolute top-full left-0 mt-2 min-w-[200px] rounded border text-sm shadow">
          {menu.items.map((item, index) =>
            item.separator ? (
              <div
                key={`separator-${index}-${item.label}`}
                className="border-border my-1 border-t"
              />
            ) : (
              <div
                key={`item-${index}-${item.label}`}
                className="hover:bg-border flex basis-full cursor-pointer items-center justify-between px-3 py-1"
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="text-muted text-xs">{item.shortcut}</span>
                )}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  ));
}
