import { StateCreator } from 'zustand';

export interface SearchSlice {
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

export const createSearchSlice: StateCreator<SearchSlice> = (set) => ({
  isSearchOpen: false,

  setSearchOpen: (open) => set({ isSearchOpen: open }),
});
