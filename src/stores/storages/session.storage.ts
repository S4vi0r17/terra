import { createJSONStorage, type StateStorage } from 'zustand/middleware';

const sessionStorageAdapter: StateStorage = {
  getItem: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.warn('SessionStorage getItem failed:', error);
      return null;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      console.warn('SessionStorage setItem failed:', error);
    }
  },

  removeItem: (key: string): void => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.warn('SessionStorage removeItem failed:', error);
    }
  },
};

export const sessionStorageProvider = createJSONStorage(
  () => sessionStorageAdapter
);
