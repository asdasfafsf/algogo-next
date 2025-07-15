'use server'

import axios from "axios";
import { cookies } from "next/headers";

export const serverApiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


// Request interceptor for server-side
serverApiClient.interceptors.request.use(
    async (config) => {
        // Server-side에서 모든 쿠키 가져와서 그대로 전달
        const cookieStore = await cookies();
        const cookieString = cookieStore.toString();

        console.log('cookieString', cookieString)
        
        if (cookieString) {
            config.headers.Cookie = cookieString;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
