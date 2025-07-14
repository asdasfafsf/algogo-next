"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { OAuthProvider } from '@/types/auth.type';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const destination = searchParams.get('destination') || '';
  
  const handleOAuth = async (e: React.MouseEvent<HTMLButtonElement>, provider: OAuthProvider) => {
    e.preventDefault();
    
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://www.algogo.co.kr' 
      : 'http://localhost:3001';
    
    const url = `${baseUrl}/oauth/v2/${provider}?destination=${encodeURIComponent(destination)}`;

    window.location.href = url;
  };

  return (
    <section className="grid items-center min-h-screen p-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="text-center">
        <Typography variant="h2" className="mb-8 font-bold">
          시작하기
        </Typography>
        
        <div className="mx-auto max-w-[24rem] space-y-4">
          {/* 구글 로그인 버튼 */}
          <Button
            fullWidth
            size="lg"
            variant="outline"
            className="flex items-center justify-center w-full h-12 gap-2 text-black bg-white border-gray-300 hover:bg-gray-50 text-xs font-bold"
            onClick={(e) => handleOAuth(e, 'google')}
            ripple
          >
            <Image
              src="/images/google-mark.png"
              alt="Google"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            구글로 시작하기
          </Button>

          {/* 카카오 로그인 버튼 */}
          <Button
            fullWidth
            size="lg"
            className="bg-[#FEE500] hover:bg-[#FEE500]/90 flex items-center justify-center w-full h-12 gap-2 text-black border-0 text-xs font-bold"
            onClick={(e) => handleOAuth(e, 'kakao')}
            ripple
          >
            <Image
              src="/images/kakao-mark.jpg"
              alt="Kakao"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            카카오로 시작하기
          </Button>

          {/* 구분선 */}
          <div className="flex items-center w-full gap-2 my-6">
            <hr className="w-full border-gray-200" />
            <Typography
              variant="small"
              className="font-medium text-gray-400 px-2"
            >
              OR
            </Typography>
            <hr className="w-full border-gray-200" />
          </div>

          {/* 네비게이션 버튼들 */}
          <div className="space-y-2">
            <Button
              fullWidth
              variant="ghost"
              className="w-full text-xs font-bold"
              onClick={() => router.push('/')}
            >
              처음으로
            </Button>

            <Button
              fullWidth
              className="w-full text-xs font-bold"
              onClick={() => router.back()}
            >
              이전으로
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}