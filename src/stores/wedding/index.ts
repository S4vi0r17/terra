import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createPersonSlice, type PersonSlice } from './person.slice';
import {
  createGuestCountSlice,
  type GuestCountSlice,
} from './guest-count.slice';
import { createDateSlice, type DateSlice } from './date.slice';
import {
  createAttendanceSlice,
  type AttendanceSlice,
} from './attendance.slice';
import { createGuestSlice, type GuestSlice } from './guest.slice';

type WeddingState = PersonSlice &
  GuestCountSlice &
  DateSlice &
  AttendanceSlice &
  GuestSlice;

export const useWeddingBoundStore = create<WeddingState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestCountSlice(...a),
    ...createDateSlice(...a),
    ...createAttendanceSlice(...a),
    ...createGuestSlice(...a),
  }))
);
