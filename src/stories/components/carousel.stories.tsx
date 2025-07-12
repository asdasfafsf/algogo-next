import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'shadcn/ui 기반의 캐러셀 컴포넌트입니다. embla-carousel을 사용하여 구현되었습니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

// 기본 캐러셀
export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-xs">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-lg">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

// 투명한 버튼 캐러셀
export const WithTransparentButtons: Story = {
  render: () => (
    <div className="mx-auto max-w-lg">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-video items-center justify-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">슬라이드 {index + 1}</div>
                    <div className="text-sm opacity-80 mt-2">투명한 버튼으로 자연스럽게</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* 투명한 버튼 - 기본 스타일 적용 */}
        <CarouselPrevious className="left-4 top-1/2" />
        <CarouselNext className="right-4 top-1/2" />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '완전히 투명한 버튼으로 배경에 자연스럽게 녹아드는 캐러셀입니다. 호버 시에만 미묘하게 나타납니다.',
      },
    },
  },
}

// 반응형 다중 슬라이드
export const MultipleSlides: Story = {
  render: () => (
    <div className="mx-auto max-w-4xl">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-lg">
                  <span className="text-xl font-semibold">카드 {index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '반응형으로 여러 슬라이드를 동시에 보여주는 캐러셀입니다. 화면 크기에 따라 슬라이드 개수가 조정됩니다.',
      },
    },
  },
}

// 커스텀 스타일 캐러셀
export const CustomStyled: Story = {
  render: () => (
    <div className="mx-auto max-w-md">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8 text-white">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">제목 {index + 1}</h3>
                    <p className="text-sm opacity-90">
                      이것은 커스텀 스타일이 적용된 캐러셀 아이템입니다.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* 커스텀 스타일 버튼 - 반투명 흰색 배경 */}
        <CarouselPrevious 
          className="left-2 top-1/2 bg-white/20 hover:bg-white/40 text-white hover:text-white" 
        />
        <CarouselNext 
          className="right-2 top-1/2 bg-white/20 hover:bg-white/40 text-white hover:text-white" 
        />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '커스텀 스타일이 적용된 캐러셀과 버튼 디자인 예시입니다.',
      },
    },
  },
}

// 세로 방향 캐러셀
export const Vertical: Story = {
  render: () => (
    <div className="mx-auto max-w-xs">
      <Carousel orientation="vertical" className="w-full max-w-xs h-80">
        <CarouselContent className="h-80">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="p-1">
                <div className="flex h-full items-center justify-center p-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '세로 방향으로 스크롤되는 캐러셀입니다.',
      },
    },
  },
}

// 다양한 배경에서의 투명 버튼
export const OnVariousBackgrounds: Story = {
  render: () => (
    <div className="space-y-8">
      {/* 밝은 배경 */}
      <div className="mx-auto max-w-md">
        <h3 className="text-sm font-medium mb-2 text-gray-600">밝은 배경</h3>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center p-6 bg-gray-100 text-gray-700 rounded-lg">
                    <span className="text-xl font-semibold">밝은 슬라이드 {index + 1}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2" />
          <CarouselNext className="right-2 top-1/2" />
        </Carousel>
      </div>

      {/* 어두운 배경 */}
      <div className="mx-auto max-w-md">
        <h3 className="text-sm font-medium mb-2 text-gray-600">어두운 배경</h3>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center p-6 bg-gray-800 text-white rounded-lg">
                    <span className="text-xl font-semibold">어두운 슬라이드 {index + 1}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2" />
          <CarouselNext className="right-2 top-1/2" />
        </Carousel>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 배경색에서 투명 버튼이 어떻게 자연스럽게 적응하는지 보여주는 예시입니다.',
      },
    },
  },
}

// 자동 재생 캐러셀 (옵션)
export const WithAutoplay: Story = {
  render: () => (
    <div className="mx-auto max-w-md">
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-video items-center justify-center p-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-semibold">슬라이드 {index + 1}</div>
                    <div className="text-sm opacity-80 mt-1">무한 루프 캐러셀</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 top-1/2" />
        <CarouselNext className="right-4 top-1/2" />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '무한 루프가 적용된 캐러셀입니다. 마지막 슬라이드에서 첫 번째 슬라이드로 자연스럽게 연결됩니다.',
      },
    },
  },
}