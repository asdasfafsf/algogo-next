import { AxiosResponse } from 'axios';
import { ApiResponse } from '@/types/api.type';
import { Token } from '@/types/auth.type';
import apiClient from '@/lib/api/api-client';

export const refresh = async (): Promise<ApiResponse<Token>> => {
  const response: AxiosResponse<ApiResponse<Token>> = await apiClient.post(
    '/api/v2/auth/refresh',
    {},
  );
  return response.data;
};

export const logout = async (): Promise<ApiResponse<void>> => {
  const response: AxiosResponse<ApiResponse<void>> = await apiClient.post(
    '/api/v2/auth/logout',
    {},
  );
  return response.data;
};