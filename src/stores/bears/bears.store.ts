import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Bear, BearType } from '@/interfaces/bears/bear.interface';

interface BearStore {
  bears: Bear[];

  numBlackBears: () => number;
  numPolarBears: () => number;
  numPandaBears: () => number;

  selectedBearType: BearType;
  setSelectedBearType: (type: BearType) => void;

  addBear: (type: BearType) => void;

  doNothing: () => void;
  clearBears: () => void;

  totalBears: () => number;
}

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      bears: [],

      numBlackBears: () => get().bears.filter((b) => b.type === 'black').length,
      numPolarBears: () => get().bears.filter((b) => b.type === 'polar').length,
      numPandaBears: () => get().bears.filter((b) => b.type === 'panda').length,

      selectedBearType: 'black',

      setSelectedBearType: (type: BearType) =>
        set(() => ({ selectedBearType: type })),

      addBear: (type: BearType) =>
        set((state) => {
          const newBear: Bear = {
            id: Date.now().toString(),
            name: `Oso ${state.bears.length + 1}`,
            type,
          };
          return { bears: [...state.bears, newBear] };
        }),

      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      clearBears: () => set({ bears: [] }),

      totalBears: (): number => {
        return (
          get().numBlackBears() + get().numPolarBears() + get().numPandaBears()
        );
      },
    }),
    { name: 'bear-storage' }
  )
);
