"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogoWithText } from '@/components/ui/LogoWithText';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export function LandingHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 shadow-sm bg-white/80 backdrop-blur-md">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <LogoWithText size="medium" />
          
          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <Button 
              className='text-sm'
              variant="ghost" 
              color="default" 
              onClick={() => router.push('/login')}
            >
              로그인
            </Button>
            <Button className='text-sm' color="blue" onClick={() => router.push('/signup')}>
              시작하기
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
                기능
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                요금
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-blue-600 transition-colors">
                지원
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" color="default" onClick={() => router.push('/login')}>
                  로그인
                </Button>
                <Button color="blue" onClick={() => router.push('/signup')}>
                  시작하기
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
