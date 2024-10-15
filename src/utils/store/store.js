import { create } from 'zustand';

export const useStore = create((set) => ({
  loading: true,
  isErrorPopupOpen: false,
  isAuthenticated: false,

  setLoading: (value) => set({ loading: value }),
  setErrorPopup: (isOpen) => set({ isErrorPopupOpen: isOpen }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));
