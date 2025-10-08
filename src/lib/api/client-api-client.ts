import axios from 'axios';
import { ApiResponse } from '@/types/api.type';

export const clientApiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

let isRefreshing = false;
const failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: ApiResponse<unknown>) => void;
}[] = [];

clientApiClient.interceptors.request.use((config) => {
  return config;
});

clientApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const data = error.response?.data;
    const { config } = error;

    if (data?.statusCode === 401 && (data?.errorCode === 'JWT_EXPIRED' || data?.errorMessage?.includes('만료'))) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => clientApiClient.request(config))
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        failedQueue.forEach(({ reject }) => reject(error));
        failedQueue.length = 0;
        isRefreshing = false;
        return Promise.resolve({
          status: 401,
          errorCode: 'UNAUTHORIZED',
          errorMessage: 'refreshToken이 없습니다.',
          data: null,
        });
      }

      try {
        const { data: refreshResponse } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v2/auth/refresh`,
          {},
          { withCredentials: true },
        );

        localStorage.setItem('accessToken', refreshResponse.data.accessToken);
        localStorage.setItem('refreshToken', refreshResponse.data.refreshToken);

        failedQueue.forEach(({ resolve }) => resolve());
        failedQueue.length = 0;

        return await clientApiClient.request(config);
      } catch (refreshError) {
        failedQueue.forEach(({ reject }) => reject());
        failedQueue.length = 0;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('me');
        
        window.location.href = `/login?destination=${window.location.pathname}`;
        return await Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // 로그아웃 요청의 경우 리다이렉트하지 않음
    if (error.config?.url?.includes('/auth/logout')) {
      return Promise.reject(error);
    }

    // 일반적인 401 에러 처리
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }

    return error.response;
  },
);
