import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const ColorCard = ({ name, colorClass, description }: { name: string; colorClass: string; description?: string }) => (
  <div className="rounded-lg border p-4 space-y-3">
    <div className={`h-16 w-full rounded-md ${colorClass}`}></div>
    <div>
      <h3 className="font-semibold text-sm">{name}</h3>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <code className="text-xs bg-muted px-2 py-1 rounded mt-1 inline-block">{colorClass}</code>
    </div>
  </div>
)

const ColorPalette = ({ title, colors }: { title: string; colors: Array<{ name: string; class: string; description?: string }> }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {colors.map((color) => (
        <ColorCard key={color.name} name={color.name} colorClass={color.class} description={color.description} />
      ))}
    </div>
  </div>
)

// 브랜드 및 등급 색상
export const BrandAndRankColors: Story = {
  render: () => (
    <ColorPalette
      title="브랜드 & 등급 색상"
      colors={[
        { name: 'Kakao', class: 'bg-kakao', description: '카카오 브랜드 컬러' },
        { name: 'Ruby', class: 'bg-ruby', description: '루비 등급' },
        { name: 'Diamond', class: 'bg-diamond', description: '다이아몬드 등급' },
        { name: 'Platinum', class: 'bg-platinum', description: '플래티넘 등급' },
        { name: 'Gold', class: 'bg-gold', description: '골드 등급' },
        { name: 'Silver', class: 'bg-silver', description: '실버 등급' },
        { name: 'Bronze', class: 'bg-bronze', description: '브론즈 등급' },
      ]}
    />
  ),
}

// Gray 색상 팔레트
export const GrayColors: Story = {
  render: () => (
    <ColorPalette
      title="Gray"
      colors={[
        { name: 'Gray 50', class: 'bg-gray-50' },
        { name: 'Gray 100', class: 'bg-gray-100' },
        { name: 'Gray 200', class: 'bg-gray-200' },
        { name: 'Gray 300', class: 'bg-gray-300' },
        { name: 'Gray 400', class: 'bg-gray-400' },
        { name: 'Gray 500', class: 'bg-gray-500' },
        { name: 'Gray 600', class: 'bg-gray-600' },
        { name: 'Gray 700', class: 'bg-gray-700' },
        { name: 'Gray 800', class: 'bg-gray-800' },
        { name: 'Gray 900', class: 'bg-gray-900' },
      ]}
    />
  ),
}

// Blue 색상 팔레트
export const BlueColors: Story = {
  render: () => (
    <ColorPalette
      title="Blue"
      colors={[
        { name: 'Blue 50', class: 'bg-blue-50' },
        { name: 'Blue 100', class: 'bg-blue-100' },
        { name: 'Blue 200', class: 'bg-blue-200' },
        { name: 'Blue 300', class: 'bg-blue-300' },
        { name: 'Blue 400', class: 'bg-blue-400' },
        { name: 'Blue 500', class: 'bg-blue-500' },
        { name: 'Blue 600', class: 'bg-blue-600' },
        { name: 'Blue 700', class: 'bg-blue-700' },
        { name: 'Blue 800', class: 'bg-blue-800' },
        { name: 'Blue 900', class: 'bg-blue-900' },
      ]}
    />
  ),
}

// Green 색상 팔레트
export const GreenColors: Story = {
  render: () => (
    <ColorPalette
      title="Green"
      colors={[
        { name: 'Green 50', class: 'bg-green-50' },
        { name: 'Green 100', class: 'bg-green-100' },
        { name: 'Green 200', class: 'bg-green-200' },
        { name: 'Green 300', class: 'bg-green-300' },
        { name: 'Green 400', class: 'bg-green-400' },
        { name: 'Green 500', class: 'bg-green-500' },
        { name: 'Green 600', class: 'bg-green-600' },
        { name: 'Green 700', class: 'bg-green-700' },
        { name: 'Green 800', class: 'bg-green-800' },
        { name: 'Green 900', class: 'bg-green-900' },
      ]}
    />
  ),
}

// Purple 색상 팔레트
export const PurpleColors: Story = {
  render: () => (
    <ColorPalette
      title="Purple"
      colors={[
        { name: 'Purple 50', class: 'bg-purple-50' },
        { name: 'Purple 100', class: 'bg-purple-100' },
        { name: 'Purple 200', class: 'bg-purple-200' },
        { name: 'Purple 300', class: 'bg-purple-300' },
        { name: 'Purple 400', class: 'bg-purple-400' },
        { name: 'Purple 500', class: 'bg-purple-500' },
        { name: 'Purple 600', class: 'bg-purple-600' },
        { name: 'Purple 700', class: 'bg-purple-700' },
        { name: 'Purple 800', class: 'bg-purple-800' },
        { name: 'Purple 900', class: 'bg-purple-900' },
      ]}
    />
  ),
}

// Red 색상 팔레트
export const RedColors: Story = {
  render: () => (
    <ColorPalette
      title="Red"
      colors={[
        { name: 'Red 50', class: 'bg-red-50' },
        { name: 'Red 100', class: 'bg-red-100' },
        { name: 'Red 200', class: 'bg-red-200' },
        { name: 'Red 300', class: 'bg-red-300' },
        { name: 'Red 400', class: 'bg-red-400' },
        { name: 'Red 500', class: 'bg-red-500' },
        { name: 'Red 600', class: 'bg-red-600' },
        { name: 'Red 700', class: 'bg-red-700' },
        { name: 'Red 800', class: 'bg-red-800' },
        { name: 'Red 900', class: 'bg-red-900' },
      ]}
    />
  ),
}

// 모든 Material Design 색상 개요
export const AllMaterialColors: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Tailwind 클래스들을 명시적으로 선언 (숨김) */}
      <div className="hidden">
        {/* 브랜드 색상 */}
        <div className="bg-kakao bg-ruby bg-diamond bg-platinum bg-gold bg-silver bg-bronze"></div>
        {/* Gray 색상들 */}
        <div className="bg-gray-50 bg-gray-100 bg-gray-200 bg-gray-300 bg-gray-400 bg-gray-500 bg-gray-600 bg-gray-700 bg-gray-800 bg-gray-900"></div>
        {/* Blue Gray 색상들 */}
        <div className="bg-blue-gray-50 bg-blue-gray-100 bg-blue-gray-200 bg-blue-gray-300 bg-blue-gray-400 bg-blue-gray-500 bg-blue-gray-600 bg-blue-gray-700 bg-blue-gray-800 bg-blue-gray-900"></div>
        {/* Brown 색상들 */}
        <div className="bg-brown-50 bg-brown-100 bg-brown-200 bg-brown-300 bg-brown-400 bg-brown-500 bg-brown-600 bg-brown-700 bg-brown-800 bg-brown-900"></div>
        {/* Deep Orange 색상들 */}
        <div className="bg-deep-orange-50 bg-deep-orange-100 bg-deep-orange-200 bg-deep-orange-300 bg-deep-orange-400 bg-deep-orange-500 bg-deep-orange-600 bg-deep-orange-700 bg-deep-orange-800 bg-deep-orange-900"></div>
        {/* Orange 색상들 */}
        <div className="bg-orange-50 bg-orange-100 bg-orange-200 bg-orange-300 bg-orange-400 bg-orange-500 bg-orange-600 bg-orange-700 bg-orange-800 bg-orange-900"></div>
        {/* Amber 색상들 */}
        <div className="bg-amber-50 bg-amber-100 bg-amber-200 bg-amber-300 bg-amber-400 bg-amber-500 bg-amber-600 bg-amber-700 bg-amber-800 bg-amber-900"></div>
        {/* Yellow 색상들 */}
        <div className="bg-yellow-50 bg-yellow-100 bg-yellow-200 bg-yellow-300 bg-yellow-400 bg-yellow-500 bg-yellow-600 bg-yellow-700 bg-yellow-800 bg-yellow-900"></div>
        {/* Lime 색상들 */}
        <div className="bg-lime-50 bg-lime-100 bg-lime-200 bg-lime-300 bg-lime-400 bg-lime-500 bg-lime-600 bg-lime-700 bg-lime-800 bg-lime-900"></div>
        {/* Light Green 색상들 */}
        <div className="bg-light-green-50 bg-light-green-100 bg-light-green-200 bg-light-green-300 bg-light-green-400 bg-light-green-500 bg-light-green-600 bg-light-green-700 bg-light-green-800 bg-light-green-900"></div>
        {/* Green 색상들 */}
        <div className="bg-green-50 bg-green-100 bg-green-200 bg-green-300 bg-green-400 bg-green-500 bg-green-600 bg-green-700 bg-green-800 bg-green-900"></div>
        {/* Teal 색상들 */}
        <div className="bg-teal-50 bg-teal-100 bg-teal-200 bg-teal-300 bg-teal-400 bg-teal-500 bg-teal-600 bg-teal-700 bg-teal-800 bg-teal-900"></div>
        {/* Cyan 색상들 */}
        <div className="bg-cyan-50 bg-cyan-100 bg-cyan-200 bg-cyan-300 bg-cyan-400 bg-cyan-500 bg-cyan-600 bg-cyan-700 bg-cyan-800 bg-cyan-900"></div>
        {/* Light Blue 색상들 */}
        <div className="bg-light-blue-50 bg-light-blue-100 bg-light-blue-200 bg-light-blue-300 bg-light-blue-400 bg-light-blue-500 bg-light-blue-600 bg-light-blue-700 bg-light-blue-800 bg-light-blue-900"></div>
        {/* Blue 색상들 */}
        <div className="bg-blue-50 bg-blue-100 bg-blue-200 bg-blue-300 bg-blue-400 bg-blue-500 bg-blue-600 bg-blue-700 bg-blue-800 bg-blue-900"></div>
        {/* Indigo 색상들 */}
        <div className="bg-indigo-50 bg-indigo-100 bg-indigo-200 bg-indigo-300 bg-indigo-400 bg-indigo-500 bg-indigo-600 bg-indigo-700 bg-indigo-800 bg-indigo-900"></div>
        {/* Deep Purple 색상들 */}
        <div className="bg-deep-purple-50 bg-deep-purple-100 bg-deep-purple-200 bg-deep-purple-300 bg-deep-purple-400 bg-deep-purple-500 bg-deep-purple-600 bg-deep-purple-700 bg-deep-purple-800 bg-deep-purple-900"></div>
        {/* Purple 색상들 */}
        <div className="bg-purple-50 bg-purple-100 bg-purple-200 bg-purple-300 bg-purple-400 bg-purple-500 bg-purple-600 bg-purple-700 bg-purple-800 bg-purple-900"></div>
        {/* Pink 색상들 */}
        <div className="bg-pink-50 bg-pink-100 bg-pink-200 bg-pink-300 bg-pink-400 bg-pink-500 bg-pink-600 bg-pink-700 bg-pink-800 bg-pink-900"></div>
        {/* Red 색상들 */}
        <div className="bg-red-50 bg-red-100 bg-red-200 bg-red-300 bg-red-400 bg-red-500 bg-red-600 bg-red-700 bg-red-800 bg-red-900"></div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">전체 컬러 팔레트</h2>
        <p className="text-muted-foreground">
          Material Design 기반의 풍부한 컬러 팔레트를 제공합니다. 
          각 색상은 50부터 900까지의 다양한 톤으로 구성되어 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          'gray', 'blue-gray', 'brown', 'deep-orange', 'orange', 'amber',
          'yellow', 'lime', 'light-green', 'green', 'teal', 'cyan',
          'light-blue', 'blue', 'indigo', 'deep-purple', 'purple', 'pink', 'red'
        ].map((colorName) => (
          <div key={colorName} className="space-y-2">
            <h3 className="font-semibold capitalize">{colorName.replace('-', ' ')}</h3>
            <div className="grid grid-cols-5 gap-1">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div
                  key={shade}
                  className={`h-8 w-full rounded-sm bg-${colorName}-${shade}`}
                  title={`${colorName}-${shade}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

// 사용 예시
export const ColorUsageExample: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">색상 사용 예시</h2>
        <p className="text-muted-foreground">
          다양한 UI 컴포넌트에서 색상이 어떻게 사용되는지 확인해보세요.
        </p>
      </div>

      <div className="grid gap-6">
        {/* 등급별 배지 예시 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">알고리즘 문제 난이도</h3>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Easy
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              Medium
            </span>
            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
              Hard
            </span>
          </div>
        </div>

        {/* 사용자 등급 예시 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">사용자 등급</h3>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-bronze px-3 py-1 text-sm font-medium text-white">
              Bronze
            </span>
            <span className="inline-flex items-center rounded-full bg-silver px-3 py-1 text-sm font-medium text-white">
              Silver
            </span>
            <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-sm font-medium text-white">
              Gold
            </span>
            <span className="inline-flex items-center rounded-full bg-platinum px-3 py-1 text-sm font-medium text-white">
              Platinum
            </span>
            <span className="inline-flex items-center rounded-full bg-diamond px-3 py-1 text-sm font-medium text-white">
              Diamond
            </span>
            <span className="inline-flex items-center rounded-full bg-ruby px-3 py-1 text-sm font-medium text-white">
              Ruby
            </span>
          </div>
        </div>

        {/* 상태 표시 예시 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">상태 표시</h3>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              진행 중
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              완료
            </span>
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              대기 중
            </span>
            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
              실패
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
} 