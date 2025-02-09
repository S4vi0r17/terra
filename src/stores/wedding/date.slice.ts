import { StateCreator } from 'zustand';

export interface DateSlice {
  eventDate: Date;

  eventYYYYMMDD: () => string;
  eventHHMM: () => string;

  setEventDate: (parcialDate: string) => void;
  setEventTime: (parcialTime: string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  eventDate: new Date(), // new Date().getTime()

  eventYYYYMMDD: () => {
    return get().eventDate.toISOString().split('T')[0];
  },
  eventHHMM: () => {
    const hours = get().eventDate.getHours().toString().padStart(2, '0');
    const minutes = get().eventDate.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  },

  setEventDate: (parcialDate: string) => {
    const date = new Date(parcialDate);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + 1;

    const newDate = new Date(get().eventDate);

    newDate.setFullYear(year);
    newDate.setMonth(month);
    newDate.setDate(day);

    set({ eventDate: newDate });
  },
  setEventTime: (parcialTime: string) => {
    const [hours, minutes] = parcialTime.split(':');

    const newDate = new Date(get().eventDate);

    newDate.setHours(Number(hours));
    newDate.setMinutes(Number(minutes));

    set({ eventDate: newDate });
  },
});
