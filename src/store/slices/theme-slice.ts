import {
  DEFAULT_LIGHT_THEME,
  isThemeId,
  THEME_STORAGE_KEY,
  ThemeId,
} from '@/constants/themes';
import { StateCreator } from 'zustand';

export interface ThemeSlice {
  theme: ThemeId;
  isThemePickerOpen: boolean;
  setTheme: (theme: ThemeId) => void;
  setThemePickerOpen: (open: boolean) => void;
}

const getInitialTheme = (): ThemeId => {
  if (typeof document === 'undefined') return DEFAULT_LIGHT_THEME;
  const current = document.documentElement.dataset.theme;
  return isThemeId(current) ? current : DEFAULT_LIGHT_THEME;
};

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  theme: getInitialTheme(),
  isThemePickerOpen: false,

  setTheme: (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    set({ theme });
  },

  setThemePickerOpen: (open) => set({ isThemePickerOpen: open }),
});
