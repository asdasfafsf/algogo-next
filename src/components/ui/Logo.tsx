interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  color?: 'blue' | 'black' | 'white' | 'green' | 'purple' | 'red';
  animate?: boolean;
  animateOnHover?: boolean;
}

const sizeMap = {
  small: 'w-10 h-10',
  medium: 'w-14 h-14',
  large: 'w-18 h-18',
};

const colorMap = {
  blue: {
    bg: 'bg-blue-100',
    border: 'border-blue-500',
    dot: 'bg-blue-500',
  },
  black: {
    bg: 'bg-gray-100',
    border: 'border-black',
    dot: 'bg-black',
  },
  white: {
    bg: 'bg-white',
    border: 'border-white',
    dot: 'bg-white',
  },
  green: {
    bg: 'bg-green-100',
    border: 'border-green-500',
    dot: 'bg-green-500',
  },
  purple: {
    bg: 'bg-purple-100',
    border: 'border-purple-500',
    dot: 'bg-purple-500',
  },
  red: {
    bg: 'bg-red-100',
    border: 'border-red-500',
    dot: 'bg-red-500',
  },
};

export function Logo({ 
  size = 'medium', 
  className = '', 
  color = 'blue', 
  animate = false, 
  animateOnHover = false 
}: LogoProps) {
  const colors = colorMap[color];
  
  const wrapperClass = animateOnHover ? 'logo-bounce-on-hover' : '';
  const dotClass = animate ? 'logo-bounce' : '';
  
  return (
    <div className={`relative ${sizeMap[size]} ${className} ${wrapperClass}`}>
      {/* Background Circle */}
      <div className={`w-full h-full rounded-full`} />
      
      {/* Logo Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Bracket */}
        <div className={`absolute left-[15%] w-[30%] h-[70%] border-2 border-r-0 ${colors.border} rounded-l-md`} />
        {/* Right Bracket */}
        <div className={`absolute right-[15%] w-[30%] h-[70%] border-2 border-l-0 ${colors.border} rounded-r-md`} />
        {/* Center Dot - 통통 튀는 공! */}
        <div className={`w-[25%] h-[25%] ${colors.dot} rounded-full ${dotClass}`} />
      </div>
    </div>
  );
}
  