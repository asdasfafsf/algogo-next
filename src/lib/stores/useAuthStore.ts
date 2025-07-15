'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Me } from '@/types/me.type'
import { logout } from '../api/auth-v2.api'

interface AuthState {
  me: Me | null
  isLoading: boolean
  setMe: (me: Me | null) => void
  setLoading: (loading: boolean) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      me: null,
      isLoading: false,
      
      setMe: (me) => set({ me, isLoading: false }),
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      clearAuth: async () => {
        // localStorage 정리
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('me')
        
        // 상태 초기화
        set({ me: null, isLoading: false })
        await logout();
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ me: state.me })
    }
  )
)