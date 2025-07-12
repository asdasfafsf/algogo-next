import Link from 'next/link';
import { LogoWithText } from '@/components/ui/LogoWithText';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <LogoWithText size="medium" animateOnHover />
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/problems" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              문제
            </Link>
            <Link 
              href="/practice" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              연습
            </Link>
            <Link 
              href="/learning" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              학습
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              로그인
            </Link>
            <Link 
              href="/signup"
              className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}