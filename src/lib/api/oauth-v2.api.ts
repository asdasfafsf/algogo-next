import { AxiosResponse } from 'axios'
import apiClient from '@/lib/api/api-client'
import { ApiResponse } from '@/types/api.type'
import { OAuthProvider } from '@/types/auth.type'

// OAuth v2 토큰 응답 타입
type OAuthTokenResponse = {
  accessToken: string
  refreshToken: string
}

// OAuth v2 요청 파라미터 타입
interface OAuthParams {
  provider: OAuthProvider   
  code: string
}

export const oauthLoginV2 = async ({ provider, code }: OAuthParams) => {
  const response: AxiosResponse<ApiResponse<OAuthTokenResponse>> = await apiClient.post(
    `api/v2/oauth/${provider}?code=${code}`
  )
  return response.data
}

export const oauthConnectV2 = async ({ provider, code }: OAuthParams) => {
  const response: AxiosResponse<ApiResponse<OAuthTokenResponse>> = await apiClient.post(
    `api/v2/oauth/connect/${provider}?code=${code}`
  )
  return response.data
}

export const oauthDisconnectV2 = async ({ provider, code }: OAuthParams) => {
  const response: AxiosResponse<ApiResponse<OAuthTokenResponse>> = await apiClient.post(
    `api/v2/oauth/disconnect/${provider}?code=${code}`
  )
  return response.data
}
