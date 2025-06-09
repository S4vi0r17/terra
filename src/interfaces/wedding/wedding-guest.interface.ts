export interface WeddingGuest {
  id: string;
  name: string;
  lastName: string;
  guestCount: number;
  eventDate: string;
  eventTime: string;
  attendance: AttendanceStatus;
}

export type AttendanceStatus = 'yes' | 'maybe' | 'no';
