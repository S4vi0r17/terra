import { type StateCreator } from 'zustand';

export interface DateSlice {
  eventDateValue: Date;

  eventDate: () => string;
  eventTime: () => string;

  setEventDate: (parcialDate: string) => void;
  setEventTime: (parcialTime: string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  eventDateValue: new Date(), // new Date().getTime()

  eventDate: () => {
    return get().eventDateValue.toISOString().split('T')[0];
  },

  eventTime: () => {
    const hours = get().eventDateValue.getHours().toString().padStart(2, '0');
    const minutes = get()
      .eventDateValue.getMinutes()
      .toString()
      .padStart(2, '0');

    return `${hours}:${minutes}`;
  },

  setEventDate: (parcialDate: string) => {
    const date = new Date(parcialDate);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + 1;

    const newDate = new Date(get().eventDateValue);

    newDate.setFullYear(year);
    newDate.setMonth(month);
    newDate.setDate(day);

    set({ eventDateValue: newDate });
  },
  setEventTime: (parcialTime: string) => {
    const [hours, minutes] = parcialTime.split(':');

    const newDate = new Date(get().eventDateValue);

    newDate.setHours(Number(hours));
    newDate.setMinutes(Number(minutes));

    set({ eventDateValue: newDate });
  },
});
