'use client';

import { ErrorPage } from '@/components/error/ErrorPage';
import { AxiosError } from 'axios';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Axios 에러인지 확인하는 타입 가드
  const isAxiosError = (error: any): error is AxiosError => {
    return error?.isAxiosError === true;
  };

  // 에러에서 status code 추출
  const getStatusCode = (error: Error & { digest?: string }) => {
    // 1. Axios 에러인 경우 직접 접근 (타입 캐스팅 없음)
    if (isAxiosError(error)) {
      // 서버 응답 에러 (4xx, 5xx)
      if (error.response?.status) {
        return error.response.status;
      }
      // 네트워크 에러 등의 경우
      return 500;
    }
    
    // 2. Error 객체의 cause 속성에서 Axios 에러 확인
    if (error.cause && isAxiosError(error.cause)) {
      if (error.cause.response?.status) {
        return error.cause.response.status;
      }
      return 500;
    }
    
    // 3. 일반적인 에러 처리
    // Next.js에서 일부 에러는 message에 상태 코드가 포함될 수 있음
    const statusMatch = error.message?.match(/(\d{3})/);
    if (statusMatch) {
      return parseInt(statusMatch[1]);
    }
    
    return 500; // 기본값
  };

  const statusCode = getStatusCode(error);

  return (
    <ErrorPage 
      statusCode={statusCode}
      showBackButton={true}
      onRetry={statusCode === 500 ? reset : undefined} // 500에러에서만 다시 시도 제공
    />
  );
}