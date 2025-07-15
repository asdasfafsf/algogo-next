import AuthPage from '@/components/auth/AuthPage';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingScreen title="로그인 페이지 로딩 중" description="페이지를 준비하고 있습니다" loadingMessage="Loading" />}>
      <AuthPage />
    </Suspense>
  );
}