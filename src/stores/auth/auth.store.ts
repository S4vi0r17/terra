import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthService } from '@/services';
import type { AuthStatus, User } from '@/interfaces';

export interface AuthState {
  status: AuthStatus;
  token: string | undefined;
  user: User | undefined;

  isLoading: boolean;
  errorMessage: string | null;

  login: (email: string, password: string) => Promise<void>;
  setIsLoading: (isLoading: boolean) => void;
  setErrorMessage: (errorMessage: string | null) => void;
  checkAuthStatus: () => Promise<void>;
  logout: () => void;

  
}

export const AuthStateCreator: StateCreator<AuthState> = (set) => ({
  status: 'unauthenticated',
  token: undefined,
  user: undefined,
  isLoading: false,
  errorMessage: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, status: 'pending' });
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: 'authenticated', token, user });
    } catch (error) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      console.log(error);
      throw new Error('unauthenticated');
    } finally {
      set({ isLoading: false });
    }
  },
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
  setErrorMessage: (errorMessage: string | null) => {
    set({ errorMessage });
  },
  checkAuthStatus: async () => {
    set({ status: 'pending', isLoading: true });
    try {
      const { token, ...user } = await AuthService.checkAuthStatus();
      set({ status: 'authenticated', token, user });
    } catch (error) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      console.log(error);
      throw new Error('Unauthorized');
    } finally {
      set({ isLoading: false });
    }
  },
  logout: () => {
    set({ status: 'unauthenticated', token: undefined, user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(AuthStateCreator, { name: 'auth-store' }))
);
