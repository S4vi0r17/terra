export interface Bear {
  id: string;
  name: string;
  type: BearType;
}

export type BearType = 'black' | 'polar' | 'panda';
