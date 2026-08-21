'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { sidebarLinks } from '@/constants';
import { SEARCH_GROUP_ORDER, searchHaystack, searchItems } from '@/constants/search';
import { useEditorStore } from '@/store';
import { SearchGroup, SearchItem } from '@/types';
import { useRouter } from 'next/navigation';
import { VscLinkExternal, VscSearch } from 'react-icons/vsc';

import QuickPickShell from '@/components/quick-pick-shell';

import { scrollToAnchor } from '@/utils/scroll-to-anchor';

interface SearchSectionData {
  group: SearchGroup;
  items: SearchItem[];
  startIndex: number;
}

const buildSections = (query: string) => {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const matched = searchItems.filter((item) => {
    const haystack = searchHaystack(item);
    return terms.every((term) => haystack.includes(term));
  });

  const flat: SearchItem[] = [];
  const sections: SearchSectionData[] = [];

  SEARCH_GROUP_ORDER.forEach((group) => {
    const items = matched.filter((item) => item.group === group);
    if (!items.length) return;
    sections.push({ group, items, startIndex: flat.length });
    flat.push(...items);
  });

  return { sections, flat };
};

export default function SearchQuickPick() {
  const { setSearchOpen, handleNewEditor, addLog } = useEditorStore();
  const [query, setQuery] = useState('');
  const [highlighted, setHighlighted] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const { sections, flat } = useMemo(() => buildSections(query), [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index='${highlighted}']`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [highlighted]);

  const close = () => setSearchOpen(false);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setHighlighted(0);
  };

  const moveHighlight = (delta: number) => {
    if (!flat.length) return;
    setHighlighted((current) => (current + delta + flat.length) % flat.length);
  };

  const runItem = (item: SearchItem) => {
    close();
    const action = item.action;

    switch (action.type) {
      case 'external':
        window.open(action.url, '_blank', 'noopener,noreferrer');
        addLog(
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Opened {item.label} in a new tab
          </div>,
        );
        return;
      case 'navigate': {
        const link = sidebarLinks.find((l) => l.href === action.href);
        if (link) handleNewEditor(link);
        router.push(action.anchorId ? `${action.href}#${action.anchorId}` : action.href);
        if (action.anchorId) scrollToAnchor(action.anchorId);
        return;
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        close();
        break;
      case 'Enter': {
        const selected = flat[highlighted];
        if (selected) runItem(selected);
        break;
      }
      case 'ArrowDown':
        event.preventDefault();
        moveHighlight(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        moveHighlight(-1);
        break;
    }
  };

  return (
    <QuickPickShell
      onDismiss={close}
      onKeyDown={handleKeyDown}
      className="w-[92vw] max-w-[620px]"
    >
      <div className="flex items-center gap-2.5 p-3">
        <input
          autoFocus
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          placeholder="Search pages, projects, experience, blogs, socials"
          className="bg-editor text-foreground placeholder:text-muted w-full border border-blue-500 px-3 py-2 text-sm outline-none"
        />
        <VscSearch className="text-foreground h-5 w-5 shrink-0" />
      </div>

      <ul ref={listRef} role="listbox" className="max-h-[60vh] overflow-y-auto px-2 py-2">
        {sections.length ? (
          sections.map((section) => (
            <SearchSection
              key={section.group}
              section={section}
              highlighted={highlighted}
              onHighlight={setHighlighted}
              onSelect={runItem}
            />
          ))
        ) : (
          <li className="text-muted px-4 py-2.5 text-sm select-none">
            No matching results
          </li>
        )}
      </ul>

      <div className="border-border text-muted flex gap-4 border-t px-4 py-2 text-xs select-none">
        <span>↑↓ to navigate</span>
        <span>Enter to open</span>
        <span>Esc to dismiss</span>
      </div>
    </QuickPickShell>
  );
}

function SearchSection({
  section,
  highlighted,
  onHighlight,
  onSelect,
}: {
  section: SearchSectionData;
  highlighted: number;
  onHighlight: (index: number) => void;
  onSelect: (item: SearchItem) => void;
}) {
  return (
    <>
      <li className="text-muted border-border mt-1 border-t px-4 pt-2 pb-1 text-xs select-none first:mt-0 first:border-t-0">
        {section.group}
      </li>
      {section.items.map((item, index) => {
        const flatIndex = section.startIndex + index;
        const isHighlighted = flatIndex === highlighted;

        return (
          <li
            key={item.id}
            role="option"
            aria-selected={isHighlighted}
            data-index={flatIndex}
            className={`flex cursor-pointer items-center gap-2.5 px-4 py-2 text-sm ${
              isHighlighted ? 'bg-list-active text-list-active-fg' : ''
            }`}
            onMouseEnter={() => onHighlight(flatIndex)}
            onClick={() => onSelect(item)}
          >
            <item.icon className="h-4 w-4 shrink-0" style={{ color: item.color }} />
            <span className="max-w-[45%] shrink-0 truncate">{item.label}</span>
            <span
              className={`min-w-0 flex-1 truncate text-xs ${
                isHighlighted ? 'opacity-80' : 'text-muted'
              }`}
            >
              {item.description}
            </span>
            {item.action.type === 'external' && (
              <VscLinkExternal className="h-3.5 w-3.5 shrink-0 opacity-70" />
            )}
          </li>
        );
      })}
    </>
  );
}
