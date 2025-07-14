import axios from "axios";
import { cookies } from "next/headers";

export const serverApiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for server-side
serverApiClient.interceptors.request.use(
    async (config) => {
        // Server-side에서 쿠키 가져오기
        const cookieStore = await cookies();
        const token = cookieStore.get('token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token.value}`;
        }
        
        // 추가 헤더 설정 가능
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for common error handling
serverApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // 공통 에러 처리
        if (error.response?.status === 401) {
            // 인증 에러 처리
            console.error('Authentication error');
        }
        return Promise.reject(error);
    }
);
