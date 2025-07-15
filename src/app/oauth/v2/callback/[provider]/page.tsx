"use client"

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { oauthLoginV2 } from '@/lib/api/oauth-v2.api';
import { OAuthProvider } from '@/types/auth.type';
import { getMe } from '@/lib/api/me.api';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface CallbackPageProps {
  params: Promise<{ provider: string }>
}

export default function OAuthCallback({ params }: CallbackPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
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
        const oauthResponse = await oauthLoginV2({ provider: provider as OAuthProvider, code })
        const { accessToken, refreshToken } = oauthResponse.data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken);

        const meResponse = await getMe()
        localStorage.setItem('me', JSON.stringify(meResponse.data));
        const destination = state ? decodeURIComponent(state) : '/'
        router.push(destination, { scroll: false })
      } catch (error) {
        throw error;
      }
    }
    
    handleCallback()
  }, [params, searchParams, router])
  
  return <LoadingScreen title="로그인 처리 중" description="알고고에 안전하게 연결하고 있습니다" loadingMessage="Authenticating" />
}