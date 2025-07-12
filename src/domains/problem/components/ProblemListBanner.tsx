import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel'
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
  return (
    <div className="w-full mb-8">
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {bannerItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative w-full h-60 md:h-72 bg-black/90 rounded-lg overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <div className="relative w-full h-full">
                    {/* 텍스트 영역 */}
                    <div className="absolute left-16 space-y-6 -translate-y-1/2 top-[45%] w-[calc(100%-8rem)]">
                      <div className="flex justify-center py-2 rounded-full bg-white/10 w-28">
                        <span className="text-sm text-white/80">{item.badge}</span>
                      </div>

                      <Typography variant="h3" color="white" className="text-white font-bold whitespace-pre-line">
                        {item.title}
                      </Typography>

                      <p className="text-sm text-white/60 !mt-8">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* 이미지 영역 */}
                    <div className="absolute hidden -translate-y-1/2 right-16 top-[45%] md:block">
                      <div className="flex items-center justify-center">
                        <Image src="/images/Gear.png" alt="Gear" width={64} height={64} className="w-12 h-12 md:w-20 md:h-20 opacity-90 animate-spin" />
                      </div>
                      <div className="flex items-center justify-center mt-4 ml-8">
                        <Image src="/images/Key.png" alt="Key" width={56} height={56} className="w-10 h-10 md:w-16 md:h-16 opacity-85 animate-pulse" />
                      </div>
                    </div>

                    {/* 모바일 이미지 - 상단에 작게 표시 */}
                    <div className="absolute right-16 top-8 md:hidden">
                      <div className="flex items-center justify-center">
                        <Image src="/images/Gear.png" alt="Gear" width={32} height={32} className="w-8 h-8 opacity-70 animate-spin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* 나중에 슬라이드가 2개 이상일 때만 표시되도록 조건부 렌더링 가능 */}
        {bannerItems.length > 1 && (
          <>
            <CarouselPrevious className="left-4 top-1/2" />
            <CarouselNext className="right-4 top-1/2" />
          </>
        )}
      </Carousel>
    </div>
  )
}