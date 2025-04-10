import { create } from 'zustand';

import { createEditorSlice, EditorSlice } from './slices/editor-slice';
import { createTerminalSlice, TerminalSlice } from './slices/terminal-slice';

type StoreState = EditorSlice & TerminalSlice;

export const useEditorStore = create<StoreState>()((...a) => ({
  ...createEditorSlice(...a),
  ...createTerminalSlice(...a),
}));
