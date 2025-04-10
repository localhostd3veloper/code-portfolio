import { SidebarLinksType } from '@/types';
import { VscHome } from 'react-icons/vsc';
import { StateCreator } from 'zustand';

export interface EditorSlice {
  activeEditors: SidebarLinksType[];
  addEditor: (editor: SidebarLinksType) => void;
  removeEditor: (editor: SidebarLinksType) => void;
  setActiveEditor: (editor: SidebarLinksType) => void;
}

export const createEditorSlice: StateCreator<EditorSlice> = (set) => ({
  activeEditors: [
    {
      label: 'Welcome',
      icon: VscHome,
      isActive: true,
      href: '/',
      color: '#4ade80',
    },
  ],

  addEditor: (editor) =>
    set((state) => ({
      activeEditors: [...state.activeEditors, editor],
    })),

  removeEditor: (editor) =>
    set((state) => ({
      activeEditors: state.activeEditors.filter((e) => e !== editor),
    })),

  setActiveEditor: (editor) =>
    set((state) => ({
      activeEditors: state.activeEditors.map((e) =>
        e.label === editor.label ? { ...e, isActive: true } : { ...e, isActive: false },
      ),
    })),
});
