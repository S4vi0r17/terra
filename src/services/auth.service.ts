import { AxiosError } from 'axios';
import { tesloApi } from '@/apis';
import { useAuthStore } from '@/stores';

export interface LoginResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

export class AuthService {
  static login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response = await tesloApi.post<LoginResponse>('/auth/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        useAuthStore
          .getState()
          .setErrorMessage(error.response?.data.message || 'Login failed');
        throw new Error(error.response?.data.message);
      }
      console.log(error);
      throw new Error('An error occurred');
    }
  };

  static checkAuthStatus = async (): Promise<LoginResponse> => {
    try {
      const response = await tesloApi.get<LoginResponse>('/auth/check-status');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        useAuthStore
          .getState()
          .setErrorMessage(error.response?.data.message || 'Unauthorized');
        console.log(error.response?.data);
        throw new Error(error.response?.data.message);
      }
      console.log(error);
      throw new Error('An error occurred');
    }
  };
}
