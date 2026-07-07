'use client';

import { useEffect, useRef, useState } from 'react';
import { topBarMenus } from '@/constants';
import { popIn } from '@/constants/motion';
import { AnimatePresence, motion } from 'motion/react';

type Menu = (typeof topBarMenus)[number];

export default function MenuItems() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuBarRef.current?.contains(event.target as Node)) return;
      setOpenMenu(null);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpenMenu(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openMenu]);

  return (
    <div ref={menuBarRef} className="flex items-center">
      {topBarMenus.map((menu) => (
        <div key={menu.label} className="relative text-sm">
          <button
            onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
            onMouseEnter={() => openMenu && setOpenMenu(menu.label)}
            className={`hover:bg-border hidden cursor-pointer rounded px-2 py-0.5 md:block ${
              openMenu === menu.label ? 'bg-border' : ''
            }`}
          >
            {menu.label}
          </button>
          <AnimatePresence>
            {openMenu === menu.label && (
              <MenuDropdown menu={menu} onSelect={() => setOpenMenu(null)} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function MenuDropdown({ menu, onSelect }: { menu: Menu; onSelect: () => void }) {
  return (
    <motion.div
      {...popIn}
      style={{ originY: 0 }}
      className="bg-editor border-border absolute top-full left-0 z-20 mt-1 min-w-[220px] rounded-md border py-1 text-sm shadow-lg"
    >
      {menu.items.map((item, index) =>
        item.separator ? (
          <div key={`separator-${index}`} className="border-border my-1 border-t" />
        ) : (
          <button
            key={`item-${index}-${item.label}`}
            onClick={onSelect}
            className="hover:bg-list-active hover:text-list-active-fg flex w-full cursor-pointer items-center justify-between px-3 py-1"
          >
            <span>{item.label}</span>
            {item.shortcut && <span className="text-muted text-xs">{item.shortcut}</span>}
          </button>
        ),
      )}
    </motion.div>
  );
}
