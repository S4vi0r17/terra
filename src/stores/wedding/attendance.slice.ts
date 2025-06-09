import { type StateCreator } from 'zustand';
import type { AttendanceStatus } from '@/interfaces';

export interface AttendanceSlice {
  attendance: AttendanceStatus;

  setAttendance: (attendanceStatus: AttendanceStatus) => void;
}
export const createAttendanceSlice: StateCreator<AttendanceSlice> = (set) => ({
  attendance: 'yes',

  setAttendance: (attendanceStatus: AttendanceStatus) => {
    set({ attendance: attendanceStatus });
  },
});
