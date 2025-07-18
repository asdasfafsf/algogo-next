import { Typography } from '@/components/ui/Typography'
import Image from 'next/image'

const bannerItems = [
  {
    id: 1,
    badge: '시스템 업데이트',
    title: '더 나은 서비스를 위해\n계정 연동을 준비하고 있어요',
    subtitle: '곧 다양한 플랫폼과의 연동 기능을 만나보실 수 있습니다',
  },
  // 나중에 다른 슬라이드들 추가 예정
]

export function ProblemListBanner() {
  // 서버 컴포넌트로써 현재는 단일 배너만 표시
  const item = bannerItems[0]
  
  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-60 md:h-72 bg-gradient-to-br from-black/95 via-black/90 to-black/85 rounded-lg overflow-hidden group">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* 장식 요소 - 광선 효과 */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent transform rotate-45 translate-x-48 -translate-y-48" />
        </div>
        
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* 텍스트 영역 */}
            <div className="absolute left-8 md:left-16 space-y-6 -translate-y-1/2 top-[45%] w-[calc(100%-4rem)] md:w-[calc(100%-8rem)]">
              <div className="inline-flex justify-center px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sm text-white/90 font-medium">{item.badge}</span>
              </div>

              <Typography variant="h3" color="white" className="text-white font-bold whitespace-pre-line">
                {item.title}
              </Typography>

              <p className="text-base text-white/70 !mt-6">
                {item.subtitle}
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="absolute hidden -translate-y-1/2 right-16 top-[45%] md:block">
              <div className="flex items-center justify-center">
                <Image src="/images/Gear.png" alt="시스템 업데이트 진행 중" width={64} height={64} className="w-12 h-12 md:w-20 md:h-20 opacity-90 animate-[spin_8s_linear_infinite] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-center mt-4 ml-8">
                <Image src="/images/Key.png" alt="계정 연동 준비" width={56} height={56} className="w-10 h-10 md:w-16 md:h-16 opacity-85 animate-[pulse_3s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            {/* 모바일 이미지 - 상단에 작게 표시 */}
            <div className="absolute right-16 top-8 md:hidden">
              <div className="flex items-center justify-center">
                <Image src="/images/Gear.png" alt="시스템 업데이트 진행 중" width={32} height={32} className="w-8 h-8 opacity-70 animate-[spin_8s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}