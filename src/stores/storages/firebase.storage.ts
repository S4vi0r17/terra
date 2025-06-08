import { createJSONStorage, type StateStorage } from 'zustand/middleware';

const firebaseUrl = import.meta.env.VITE_FIREBASE_URL;

const firebaseStoreAdapter: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      const response = await fetch(`${firebaseUrl}/terra/${name}.json`);
      const data = await response.json();
      return JSON.stringify(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await fetch(`${firebaseUrl}/terra/${name}.json`, {
      method: 'PUT',
      body: value,
    });
  },
  removeItem: (name: string): void | Promise<void> => {
    sessionStorage.removeItem(name);
  },
};

export const firebaseStorageProvider = createJSONStorage(
  () => firebaseStoreAdapter
);
