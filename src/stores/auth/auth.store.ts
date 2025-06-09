import { create } from 'zustand';

interface AuthStore {
  isLoading: boolean;

  setIsLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isLoading: false,

  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
}));
