import { create } from 'zustand';

export const useStore = create((set) => ({
  loading: false,
  isErrorPopupOpen: false,

  setLoading: (value) => set({ loading: value }),
  setErrorPopup: (isOpen) => set({ isErrorPopupOpen: isOpen }),
}));
