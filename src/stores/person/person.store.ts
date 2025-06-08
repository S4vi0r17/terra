import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { logger } from '../middlewares/logger.middleware';
import type { Person } from '@/interfaces/persons/person.interface';

interface PersonState {
  firstName: string;
  lastName: string;
  image?: string;

  persons: Person[];
}

interface PersonActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setImage: (value: string) => void;

  addPerson: (person: Person) => void;
}

type PersonStore = PersonState & PersonActions;

const personStateCreator: StateCreator<
  PersonStore,
  [['zustand/devtools', never], ['zustand/persist', unknown]]
> = (set) => ({
  firstName: '',
  lastName: '',

  image: undefined,

  persons: [],

  setFirstName: (value: string) =>
    set({ firstName: value }, false, 'setFirstName'),
  setLastName: (value: string) =>
    set({ lastName: value }, false, 'setLastName'),
  setImage: (value: string) => set({ image: value }, false, 'setImage'),

  addPerson: (person: Person) =>
    set(
      (state) => ({
        persons: [...state.persons, person],
      }),
      false,
      'addPerson'
    ),
});

export const usePersonStore = create<PersonState & PersonActions>()(
  logger(
    devtools(
      persist(personStateCreator, {
        name: 'person-storage',
        // storage: createJSONStorage(() => sessionStorage),
        // storage: sessionStorageProvider,
        // storage: firebaseStorageProvider,
      })
    )
  )
);
