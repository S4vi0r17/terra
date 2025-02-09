import { StateCreator } from 'zustand';

export interface ConfirmationSlice {
  confirmed: boolean;

  setConfirmed: (confirmed: boolean) => void;
}
export const createConfirmationSlice: StateCreator<ConfirmationSlice> = (
  set
) => ({
  confirmed: true,
  setConfirmed: (confirmed: boolean) => {
    set({ confirmed });
  },
});
