import { LogoWithText } from '@/components/ui/LogoWithText';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <LogoWithText size="medium" animateOnHover />
          
          {/* Navigation Component */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}