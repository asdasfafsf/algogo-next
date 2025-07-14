import axios from "axios";

export const clientApiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // withCredentials는 config에 설정
});

// Request interceptor for client-side
clientApiClient.interceptors.request.use(
    (config) => {
        // Client-side에서 localStorage나 쿠키에서 토큰 가져오기
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        // 추가 헤더 설정 가능
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for common error handling
clientApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // 공통 에러 처리
        if (error.response?.status === 401) {
            // 인증 에러 처리 - 로그인 페이지로 리다이렉트 등
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);