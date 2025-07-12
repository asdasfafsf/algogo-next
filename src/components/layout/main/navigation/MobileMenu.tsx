'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MenuItem } from './types'
import { subCategories } from './config'

interface MobileMenuProps {
  items: MenuItem[]
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
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

        {/* 모바일 시작하기 버튼 */}
        <div className="pt-4 border-t border-gray-100">
          <Link 
            href="/login"
            className="block w-full bg-gray-900 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors"
            onClick={onClose}
          >
            시작하기
          </Link>
        </div>
      </div>
    </div>
  )
}