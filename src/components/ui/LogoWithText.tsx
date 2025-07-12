import Link from 'next/link';
import { Logo } from './Logo';
import { Typography } from './Typography';

interface LogoWithTextProps {
  size: 'small' | 'medium' | 'large';
  animate?: boolean;
  animateOnHover?: boolean;
}

export function LogoWithText({ size = 'medium', animate = false, animateOnHover = true }: LogoWithTextProps) {
  const textSettings = {
    small: { variant: 'h3' as const, size: 'lg' as const },
    medium: { variant: 'h2' as const, size: 'lg' as const },
    large: { variant: 'h1' as const, size: 'lg' as const },
  };

  return (
    <Link href="/" className="inline-flex items-center min-w-fit">
      <div className="flex items-center">
        <Logo 
          color="black" 
          size={size} 
          className="relative" 
          animate={animate}
          animateOnHover={animateOnHover}
        />
        <Typography
          color="black"
          className="relative p-0 m-0 font-Tenada top-1"
          variant={textSettings[size].variant}
          size={textSettings[size].size}
        >
          알고고
        </Typography>
      </div>
    </Link>
  );
}
