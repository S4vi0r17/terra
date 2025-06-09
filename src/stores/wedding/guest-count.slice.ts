import { type StateCreator } from 'zustand';

export interface GuestCountSlice {
  guestCount: number;

  setGuestCount: (guestCount: number) => void;
}

export const createGuestCountSlice: StateCreator<GuestCountSlice> = (set) => ({
  guestCount: 0,

  setGuestCount: (guestCount) =>
    set({
      guestCount: guestCount > 0 ? guestCount : 0,
    }),
});
