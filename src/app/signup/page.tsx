import AuthPage from '@/components/auth/AuthPage';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function SignupPage() {
  return (
    <Suspense fallback={<LoadingScreen title="회원가입 페이지 로딩 중" description="페이지를 준비하고 있습니다" loadingMessage="Loading" />}>
      <AuthPage />
    </Suspense>
  );
}