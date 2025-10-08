"use client"

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { oauthLoginV2 } from '@/lib/api/pure/oauth.api';
import { OAuthProvider } from '@/types/auth.type';
import { getMe } from '@/lib/api/pure/me.api';
import { useAuthStore } from '@/lib/stores/useAuthStore';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface CallbackPageProps {
  params: Promise<{ provider: string }>
}

export default function OAuthCallback({ params }: CallbackPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setMe } = useAuthStore()
  
  useEffect(() => {
    const handleCallback = async () => {
      const { provider } = await params
      const code = searchParams.get('code')
      const state = searchParams.get('state')
      const error = searchParams.get('error')
      
      if (error) {
        console.error('OAuth error:', error)
        router.push(`/auth?error=${error}`)
        return
      }
      
      if (!code) {
        console.error('No authorization code received')
        router.push('/auth?error=no_code')
        return
      }
      
      try {
        const loginResponse = await oauthLoginV2({ provider: provider as OAuthProvider, code })

        if (loginResponse.data?.accessToken) {
          localStorage.setItem('accessToken', loginResponse.data.accessToken);
          localStorage.setItem('refreshToken', loginResponse.data.refreshToken);
        }

        await new Promise(resolve => setTimeout(resolve, 100));

        const meResponse = await getMe()
        const userData = meResponse.data
        setMe(userData)
        
        let parsedState: { destination: string } = {
          destination: '/',
        };
        try {
          parsedState = state ? JSON.parse(state) : {
            destination: '/',
          };
        } catch {
          parsedState = {
            destination: '/',
          };
        }
        const { destination } = parsedState;
        router.push(destination, { scroll: false })
      } catch (error) {
        throw error;
      }
    }
    
    handleCallback()
  }, [params, searchParams, router, setMe])
  
  return <LoadingScreen title="로그인 처리 중" description="알고고에 안전하게 연결하고 있습니다" loadingMessage="Authenticating" />
}