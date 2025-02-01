import { create } from 'zustand';

export const useStore = create((set) => ({
  loading: true,
  isErrorPopupOpen: false,
  isRegisterPopupOpen: false,
  isAuthenticated: false,
  language: 'rus',

  setLoading: (value) => set({ loading: value }),
  setErrorPopup: (isOpen) => set({ isErrorPopupOpen: isOpen }),
  setRegisterPopup: (popup) => set({ isRegisterPopupOpen: popup }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setLanguage: (value) => set({ language: value }),
}));
