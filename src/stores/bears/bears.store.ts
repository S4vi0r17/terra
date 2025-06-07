import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Bear } from '../../interfaces/bears/bear.interface';

interface BearStore {
  numBlackBears: number;
  numPolarBears: number;
  numPandaBears: number;

  bears: Bear[];

  // modifyBlackBears: (by: number) => void;
  // modifyPolarBears: (by: number) => void;
  // modifyPandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: (type: Bear) => void;
  clearBears: () => void;

  totalBears: () => number;
}

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      numBlackBears: 10,
      numPolarBears: 5,
      numPandaBears: 1,

      bears: [
        { id: '1', name: 'Oso #1', type: 'black' },
        { id: '2', name: 'Oso #2', type: 'polar' },
        { id: '3', name: 'Oso #3', type: 'panda' },
      ],

      // modifyBlackBears: (by: number) =>
      //   set((state) => ({ numBlackBears: state.numBlackBears + by })),
      // modifyPolarBears: (by: number) =>
      //   set((state) => ({ polarBears: state.polarBears + by })),
      // modifyPandaBears: (by: number) =>
      //   set((state) => ({ pandaBears: state.pandaBears + by })),

      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      addBear: (bear: Bear) =>
        set((state) => ({
          bears: [...state.bears, bear],
        })),
      clearBears: () => set({ bears: [] }),

      totalBears: (): number => {
        return (
          get().numBlackBears +
          get().numPolarBears +
          get().numPandaBears +
          get().bears.length
        );
      },
    }),
    { name: 'bear-storage' }
  )
);
