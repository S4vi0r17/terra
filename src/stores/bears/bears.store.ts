import { create } from 'zustand';

interface BearStore {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  modifyBlackBears: (by: number) => void;
  modifyPolarBears: (by: number) => void;
  modifyPandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;

  computed: {
    totalBears: number;
  };
}

interface Bear {
  id: number;
  name: string;
}

export const useBearStore = create<BearStore>()((set, get) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  bears: [{ id: 1, name: 'Oso #1' }],

  modifyBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  modifyPolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
  modifyPandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
  addBear: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` },
      ],
    })),
  clearBears: () => set({ bears: [] }),

  computed: {
    get totalBears(): number {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
    },
  },
}));
