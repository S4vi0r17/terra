import type { StateCreator } from 'zustand';
import type { WeddingGuest } from '@/interfaces';

export type GuestSlice = {
  guests: WeddingGuest[];

  addGuest: (guest: WeddingGuest) => void;
  removeGuest: (id: string) => void;
};

export const createGuestSlice: StateCreator<GuestSlice> = (set) => ({
  guests: [],

  addGuest: (guest) =>
    set((state: GuestSlice) => ({
      guests: [...state.guests, guest],
    })),
  removeGuest: (id) =>
    set((state: GuestSlice) => ({
      guests: state.guests.filter((g) => g.id !== id),
    })),
});
