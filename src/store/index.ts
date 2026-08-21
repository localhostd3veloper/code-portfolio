import { create } from 'zustand';

import { createEditorSlice, EditorSlice } from './slices/editor-slice';
import { createSearchSlice, SearchSlice } from './slices/search-slice';
import { createTerminalSlice, TerminalSlice } from './slices/terminal-slice';
import { createThemeSlice, ThemeSlice } from './slices/theme-slice';

type StoreState = EditorSlice & TerminalSlice & ThemeSlice & SearchSlice;

export const useEditorStore = create<StoreState>()((...a) => ({
  ...createEditorSlice(...a),
  ...createTerminalSlice(...a),
  ...createThemeSlice(...a),
  ...createSearchSlice(...a),
}));
