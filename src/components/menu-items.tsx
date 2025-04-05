'use client';
import { topBarMenus } from '@/constants';
import React, { useEffect, useRef, useState } from 'react';

export default function MenuItems() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (label: string) => {
    if (openMenu === label) setOpenMenu(null);
    else setOpenMenu(label);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return topBarMenus.map((menu) => (
    <div key={menu.label} className="relative text-sm " ref={dropdownRef}>
      <button
        onClick={() => handleClick(menu.label)}
        className={`px-2 py-0.5 hover:bg-border rounded cursor-pointer hidden md:block ${
          openMenu === menu.label ? 'bg-[#3c3c3c]' : ''
        }`}
      >
        {menu.label}
      </button>

      {openMenu === menu.label && (
        <div className="absolute left-0 top-full mt-2 bg-editor border border-border text-sm rounded shadow min-w-[200px]">
          {menu.items.map((item, index) =>
            item.separator ? (
              <div
                key={`separator-${index}-${item.label}`}
                className="border-t border-border my-1"
              />
            ) : (
              <div
                key={`item-${index}-${item.label}`}
                className="flex justify-between items-center px-3 py-1 cursor-pointer basis-full hover:bg-border"
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="text-xs text-gray-400">{item.shortcut}</span>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  ));
}
