'use client';

import { useMemo, useState } from 'react';
import { popIn } from '@/constants/motion';
import { Theme, ThemeId, themes, ThemeType } from '@/constants/themes';
import { useEditorStore } from '@/store';
import { motion } from 'motion/react';
import { VscColorMode, VscSettingsGear } from 'react-icons/vsc';

const applyThemeAttribute = (id: ThemeId) => {
  document.documentElement.dataset.theme = id;
};

const filterThemes = (query: string) =>
  themes.filter((t) => t.label.toLowerCase().includes(query.toLowerCase().trim()));

export default function ThemeQuickPick() {
  const { theme, setTheme, setThemePickerOpen, addLog } = useEditorStore();
  const [query, setQuery] = useState('');
  const [highlighted, setHighlighted] = useState<ThemeId>(theme);

  const filteredThemes = useMemo(() => filterThemes(query), [query]);

  const previewTheme = (id: ThemeId) => {
    applyThemeAttribute(id);
    setHighlighted(id);
  };

  const commitTheme = (t: Theme) => {
    setTheme(t.id);
    addLog(
      <div className="flex items-center gap-2">
        <span className="text-green-400">✓</span> Color theme set to {t.label}
      </div>,
    );
    setThemePickerOpen(false);
  };

  const cancel = () => {
    applyThemeAttribute(theme);
    setThemePickerOpen(false);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    const filtered = filterThemes(value);
    if (!filtered.length || filtered.some((t) => t.id === highlighted)) return;
    previewTheme(filtered[0].id);
  };

  const moveHighlight = (delta: number) => {
    if (!filteredThemes.length) return;
    const index = filteredThemes.findIndex((t) => t.id === highlighted);
    const next =
      filteredThemes[(index + delta + filteredThemes.length) % filteredThemes.length];
    previewTheme(next.id);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        cancel();
        break;
      case 'Enter': {
        const selected =
          filteredThemes.find((t) => t.id === highlighted) ?? filteredThemes[0];
        if (selected) commitTheme(selected);
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
    <div className="fixed inset-0 z-50" onMouseDown={cancel} onKeyDown={handleKeyDown}>
      <motion.div
        {...popIn}
        style={{ originY: 0 }}
        className="bg-sidebar border-border absolute top-9 left-1/2 w-[90vw] max-w-[600px] -translate-x-1/2 overflow-hidden rounded-lg border shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 p-3">
          <input
            autoFocus
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
            placeholder="Select Color Theme (Up/Down Keys to Preview)"
            className="bg-editor text-foreground placeholder:text-muted w-full border border-blue-500 px-3 py-2 text-sm outline-none"
          />
          <VscColorMode className="text-foreground h-5 w-5 shrink-0" />
        </div>
        <ul role="listbox" className="max-h-96 overflow-y-auto px-2 py-2">
          {filteredThemes.length ? (
            (['dark', 'light'] as const).map((type) => (
              <ThemeSection
                key={type}
                type={type}
                themes={filteredThemes.filter((t) => t.type === type)}
                highlighted={highlighted}
                onPreview={previewTheme}
                onCommit={commitTheme}
              />
            ))
          ) : (
            <li className="text-muted px-4 py-2.5 text-sm select-none">
              No color themes found
            </li>
          )}
        </ul>
      </motion.div>
    </div>
  );
}

function ThemeSection({
  type,
  themes: sectionThemes,
  highlighted,
  onPreview,
  onCommit,
}: {
  type: ThemeType;
  themes: Theme[];
  highlighted: ThemeId;
  onPreview: (id: ThemeId) => void;
  onCommit: (theme: Theme) => void;
}) {
  if (!sectionThemes.length) return null;

  return (
    <>
      <li className="text-muted border-border mt-1 border-t px-4 pt-2 pb-1 text-xs select-none first:mt-0 first:border-t-0">
        {type} themes
      </li>
      {sectionThemes.map((t) => (
        <li
          key={t.id}
          role="option"
          aria-selected={t.id === highlighted}
          className={`flex cursor-pointer items-center justify-between px-4 py-1.5 text-sm ${
            t.id === highlighted ? 'bg-list-active text-list-active-fg' : ''
          }`}
          onMouseEnter={() => onPreview(t.id)}
          onClick={() => onCommit(t)}
        >
          <span>{t.label}</span>
          {t.id === highlighted && <VscSettingsGear className="h-4 w-4 opacity-80" />}
        </li>
      ))}
    </>
  );
}
