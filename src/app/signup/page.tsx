import AuthPage from '@/components/auth/AuthPage';
import { Suspense } from 'react';

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPage />
    </Suspense>
  );
}