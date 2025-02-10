import { createJSONStorage, StateStorage } from 'zustand/middleware';

const firebaseUrl = import.meta.env.VITE_FIREBASE_URL;

const storageApi: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      const response = await fetch(`${firebaseUrl}/${name}.json`);
      const data = await response.json();
      return JSON.stringify(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await fetch(`${firebaseUrl}/${name}.json`, {
      method: 'PUT',
      body: value,
    });
  },
  removeItem: (name: string): void | Promise<void> => {
    sessionStorage.removeItem(name);
  },
};

export const firebaseStorage = createJSONStorage(() => storageApi);
