'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MenuItem } from './types'
import { subCategories } from './config'
import { Me } from '@/types/me.type'

interface MobileMenuProps {
  items: MenuItem[]
  isOpen: boolean
  onClose: () => void
  me?: Me | null
}

export function MobileMenu({ items, isOpen, onClose, me }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const router = useRouter()
  const displayName = me?.name || '사용자'

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('me')
    router.push('/')
  }

  if (!isOpen) return null

  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <div className="px-4 py-4 space-y-1">
        {items.map((item) => (
          <div key={item.title}>
            {item.hasDropdown ? (
              <>
                <button
                  onClick={() => toggleExpanded(item.title)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="font-medium">{item.title}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${expandedItems[item.title] ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedItems[item.title] && (
                  <div className="mt-2 ml-4 space-y-1">
                    {/* 메인 카테고리들 */}
                    {item.categories?.map((category) => (
                      <Link 
                        key={category.href}
                        href={category.href} 
                        className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        <span className={`w-2 h-2 bg-gradient-to-br ${category.color.replace('from-', '').replace(' to-', '-').split('-')[0]}-500 rounded-full mr-3`}></span>
                        {category.title}
                      </Link>
                    ))}
                    
                    {/* 서브 카테고리들 - 카테고리가 있을 때만 표시 */}
                    {subCategories.length > 0 && (
                      <>
                        <div className="border-t border-gray-100 my-2"></div>
                        <div className="px-3 py-1">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">카테고리</span>
                        </div>
                        
                        {subCategories.map((subCategory) => (
                          <Link 
                            key={subCategory.href}
                            href={subCategory.href} 
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={onClose}
                          >
                            <span className={`w-2 h-2 ${subCategory.color} rounded-full mr-3`}></span>
                            {subCategory.title}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </>
            ) : (
              <Link 
                href={item.href} 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={onClose}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}

        {/* 모바일 사용자 액션 */}
        <div className="pt-4 border-t border-gray-100">
          {me ? (
            <div className="space-y-2">
              <div className="flex items-center space-x-3 px-3 py-2 bg-gray-50 rounded-lg">
                <Image 
                  src={me.profilePhoto} 
                  alt={displayName}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{displayName}</p>
                  <p className="text-xs text-gray-500">알고고 사용자</p>
                </div>
              </div>
              
              <Link 
                href="/profile"
                className="block w-full px-4 py-3 text-center text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                내 프로필
              </Link>
              
              <div className="block w-full px-4 py-3 text-center text-gray-400 cursor-not-allowed rounded-lg">
                설정
              </div>
              
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-3 text-center text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <Link 
              href="/login"
              className="block w-full bg-gray-900 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors"
              onClick={onClose}
            >
              시작하기
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}