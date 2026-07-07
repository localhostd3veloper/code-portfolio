export type ThemeType = 'dark' | 'light';

export type ThemeId =
  | 'dark-plus'
  | 'dracula'
  | 'monokai'
  | 'night-owl'
  | 'one-dark-pro'
  | 'light-plus'
  | 'github-light'
  | 'one-light'
  | 'quiet-light'
  | 'solarized-light';

export interface Theme {
  id: ThemeId;
  label: string;
  type: ThemeType;
}

export const THEME_STORAGE_KEY = 'portfolio-theme';

export const themes: Theme[] = [
  { id: 'dark-plus', label: 'Dark+ (default dark)', type: 'dark' },
  { id: 'dracula', label: 'Dracula', type: 'dark' },
  { id: 'monokai', label: 'Monokai', type: 'dark' },
  { id: 'night-owl', label: 'Night Owl', type: 'dark' },
  { id: 'one-dark-pro', label: 'One Dark Pro', type: 'dark' },
  { id: 'light-plus', label: 'Light+ (default light)', type: 'light' },
  { id: 'github-light', label: 'GitHub Light', type: 'light' },
  { id: 'one-light', label: 'One Light', type: 'light' },
  { id: 'quiet-light', label: 'Quiet Light', type: 'light' },
  { id: 'solarized-light', label: 'Solarized Light', type: 'light' },
];

export const DEFAULT_DARK_THEME: ThemeId = 'dark-plus';
export const DEFAULT_LIGHT_THEME: ThemeId = 'light-plus';

export const isThemeId = (value: string | undefined | null): value is ThemeId =>
  themes.some((theme) => theme.id === value);
