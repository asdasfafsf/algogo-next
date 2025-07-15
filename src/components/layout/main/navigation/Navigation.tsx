'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navigationConfig } from './config'
import { DropdownMenu } from './DropdownMenu'
import { MobileMenu } from './MobileMenu'
import { ProfileDropdown } from './ProfileDropdown'
import { useAuthStore } from '@/lib/stores/useAuthStore'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { me } = useAuthStore();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center ml-12 space-x-8">
        {navigationConfig.items.map((item) => (
          <div key={item.title} className={item.hasDropdown ? 'relative group' : ''}>
            <Link 
              href={item.href} 
              className={`flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors ${
                item.hasDropdown ? 'py-2 group' : ''
              }`}
            >
              {item.title}
              {item.hasDropdown && (
                <svg className="ml-1 h-4 w-4 text-gray-400 transition-all duration-200 group-hover:text-gray-600 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            
            {item.hasDropdown && <DropdownMenu item={item} />}
          </div>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex items-center ml-auto md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop User Actions */}
      <div className="hidden md:flex items-center ml-auto">
        {me ? (
          <ProfileDropdown me={me} />
        ) : (
          <Link 
            href="/login"
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            시작하기
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        items={navigationConfig.items}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        me={me}
      />
    </>
  )
}