import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthService } from '../../services/auth.service';
import type { AuthStatus, User } from '../../interfaces';

export interface AuthState {
  status: AuthStatus;
  token: string | undefined;
  user: User | undefined;

  login: (email: string, password: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logout: () => void;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: 'loading',
  token: undefined,
  user: undefined,

  login: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: 'authorized', token, user });
    } catch (error) {
      set({ status: 'unauthorized', token: undefined, user: undefined });
      console.log(error);
      throw new Error('Unauthorized');
    }
  },
  checkAuthStatus: async () => {
    try {
      const { token, ...user } = await AuthService.checkAuthStatus();
      set({ status: 'authorized', token, user });
    } catch (error) {
      set({ status: 'unauthorized', token: undefined, user: undefined });
      console.log(error);
      throw new Error('Unauthorized');
    }
  },
  logout: () => {
    set({ status: 'unauthorized', token: undefined, user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(storeApi, { name: 'auth-store' }))
);
