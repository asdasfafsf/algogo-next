import { Button, Typography } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Typography variant="h2" className="text-2xl font-bold text-gray-900 border-none pb-0">
              AlgoGo
            </Typography>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              기능
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              소개
            </a>
            <Button variant="default" size="sm">
              시작하기
            </Button>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Typography variant="h1" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            알고리즘 학습의
            <br />
            <span className="text-blue-600">새로운 경험</span>
          </Typography>
          <Typography variant="lead" className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            효율적인 알고리즘 학습과 문제 해결을 위한 플랫폼입니다.
            단계별 학습으로 프로그래밍 실력을 향상시켜보세요.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" color="blue" size="lg">
              학습 시작하기
            </Button>
            <Button variant="outline" color="blue" size="lg">
              문제 둘러보기
            </Button>
          </div>
        </div>

        {/* 기능 소개 */}
        <section id="features" className="mt-24">
          <Typography variant="h2" className="text-3xl font-bold text-center text-gray-900 mb-16 border-none pb-0">
            주요 기능
          </Typography>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">📚</span>
              </div>
              <Typography variant="h4" className="text-xl font-semibold text-gray-900 mb-2">
                단계별 학습
              </Typography>
              <Typography variant="p" className="text-gray-600 mt-0">
                기초부터 고급까지 체계적으로 구성된 알고리즘 학습 과정을 제공합니다.
              </Typography>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">⚡</span>
              </div>
              <Typography variant="h4" className="text-xl font-semibold text-gray-900 mb-2">
                실시간 피드백
              </Typography>
              <Typography variant="p" className="text-gray-600 mt-0">
                코드 작성 중 실시간으로 피드백을 받아 효율적으로 학습할 수 있습니다.
              </Typography>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">🏆</span>
              </div>
              <Typography variant="h4" className="text-xl font-semibold text-gray-900 mb-2">
                성과 추적
              </Typography>
              <Typography variant="p" className="text-gray-600 mt-0">
                학습 진도와 성취도를 시각적으로 확인하고 목표를 달성해보세요.
              </Typography>
            </div>
          </div>
        </section>

        {/* 버튼 색상 예시 */}
        <section className="mt-24">
          <Typography variant="h2" className="text-3xl font-bold text-center text-gray-900 mb-16 border-none pb-0">
            새로운 버튼 색상 시스템
          </Typography>
          
          {/* 버튼 예시들 */}
          <div className="mb-16 space-y-8">
            <div className="text-center">
              <Typography variant="h3" className="text-xl font-semibold text-gray-900 mb-4 border-none pb-0">
                Material Design 색상 버튼
              </Typography>
                             <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                 <Button color="red" size="sm">Red</Button>
                 <Button color="pink" size="sm">Pink</Button>
                 <Button color="purple" size="sm">Purple</Button>
                 <Button color="blue" size="sm">Blue</Button>
                 <Button color="cyan" size="sm">Cyan</Button>
                 <Button color="teal" size="sm">Teal</Button>
                 <Button color="green" size="sm">Green</Button>
                 <Button color="lime" size="sm">Lime</Button>
                 <Button color="yellow" size="sm">Yellow</Button>
                 <Button color="amber" size="sm">Amber</Button>
                 <Button color="orange" size="sm">Orange</Button>
                 <Button color="gray" size="sm">Gray</Button>
               </div>
            </div>
            
            <div className="text-center">
                             <Typography variant="h3" className="text-xl font-semibold text-gray-900 mb-4 border-none pb-0">
                 추가 색상 버튼
               </Typography>
                             <div className="flex flex-wrap justify-center gap-3">
                 <Button color="yellow">Yellow</Button>
                 <Button color="amber">Amber</Button>
                 <Button color="lime">Lime</Button>
                 <Button color="cyan">Cyan</Button>
                 <Button color="indigo">Indigo</Button>
                 <Button color="gray">Gray</Button>
                 <Button color="pink">Pink</Button>
               </div>
            </div>
            
            <div className="text-center">
              <Typography variant="h3" className="text-xl font-semibold text-gray-900 mb-4 border-none pb-0">
                Outline 버튼 (다양한 색상)
              </Typography>
                             <div className="flex flex-wrap justify-center gap-3">
                 <Button color="red" variant="outline" size="sm">Red</Button>
                 <Button color="pink" variant="outline" size="sm">Pink</Button>
                 <Button color="cyan" variant="outline" size="sm">Cyan</Button>
                 <Button color="green" variant="outline" size="sm">Green</Button>
                 <Button color="amber" variant="outline" size="sm">Amber</Button>
                 <Button color="purple" variant="outline" size="sm">Purple</Button>
               </div>
            </div>
            
            <div className="text-center">
              <Typography variant="h3" className="text-xl font-semibold text-gray-900 mb-4 border-none pb-0">
                Ghost 버튼 (다양한 색상)
              </Typography>
                              <div className="flex flex-wrap justify-center gap-3">
                  <Button color="red" variant="ghost" size="sm">Red</Button>
                  <Button color="blue" variant="ghost" size="sm">Blue</Button>
                  <Button color="lime" variant="ghost" size="sm">Lime</Button>
                  <Button color="purple" variant="ghost" size="sm">Purple</Button>
                  <Button color="teal" variant="ghost" size="sm">Teal</Button>
                  <Button color="amber" variant="ghost" size="sm">Amber</Button>
                </div>
            </div>
          </div>
        </section>

        {/* 색상 시스템 미리보기 */}
        <section className="mt-24">
          <Typography variant="h2" className="text-3xl font-bold text-center text-gray-900 mb-16 border-none pb-0">
            색상 팔레트
          </Typography>
          
          {/* 추가 색상들 */}
          <div className="mb-12">
            <Typography variant="h3" className="text-2xl font-semibold text-gray-900 mb-6 border-none pb-0">
              추가 색상들
            </Typography>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Yellow</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Amber</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Lime</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Cyan</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Indigo</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Gray</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Pink</Typography>
              </div>
            </div>
          </div>

          {/* 확장 색상 팔레트 */}
          <div className="mb-12">
            <Typography variant="h3" className="text-2xl font-semibold text-gray-900 mb-6 border-none pb-0">
              확장 색상 팔레트
            </Typography>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Pink</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-700 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Deep Purple</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Light Blue</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Light Green</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-700 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Deep Orange</Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-lg mx-auto mb-2"></div>
                <Typography variant="small" className="text-sm text-gray-600">Blue Gray</Typography>
              </div>
            </div>
          </div>

          {/* Material Design 색상 샘플 */}
          <div className="mb-12">
            <Typography variant="h3" className="text-2xl font-semibold text-gray-900 mb-6 border-none pb-0">
              Material Design 색상
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Red */}
              <div className="text-center">
                <div className="flex mb-2">
                  <div className="w-4 h-8 bg-red-100"></div>
                  <div className="w-4 h-8 bg-red-300"></div>
                  <div className="w-4 h-8 bg-red-500"></div>
                  <div className="w-4 h-8 bg-red-700"></div>
                  <div className="w-4 h-8 bg-red-900"></div>
                </div>
                <Typography variant="small" className="text-sm text-gray-600">Red</Typography>
              </div>
              
              {/* Blue */}
              <div className="text-center">
                <div className="flex mb-2">
                  <div className="w-4 h-8 bg-blue-100"></div>
                  <div className="w-4 h-8 bg-blue-300"></div>
                  <div className="w-4 h-8 bg-blue-500"></div>
                  <div className="w-4 h-8 bg-blue-700"></div>
                  <div className="w-4 h-8 bg-blue-900"></div>
                </div>
                <Typography variant="small" className="text-sm text-gray-600">Blue</Typography>
              </div>
              
              {/* Green */}
              <div className="text-center">
                <div className="flex mb-2">
                  <div className="w-4 h-8 bg-green-100"></div>
                  <div className="w-4 h-8 bg-green-300"></div>
                  <div className="w-4 h-8 bg-green-500"></div>
                  <div className="w-4 h-8 bg-green-700"></div>
                  <div className="w-4 h-8 bg-green-900"></div>
                </div>
                <Typography variant="small" className="text-sm text-gray-600">Green</Typography>
              </div>
              
              {/* Orange */}
              <div className="text-center">
                <div className="flex mb-2">
                  <div className="w-4 h-8 bg-orange-100"></div>
                  <div className="w-4 h-8 bg-orange-300"></div>
                  <div className="w-4 h-8 bg-orange-500"></div>
                  <div className="w-4 h-8 bg-orange-700"></div>
                  <div className="w-4 h-8 bg-orange-900"></div>
                </div>
                <Typography variant="small" className="text-sm text-gray-600">Orange</Typography>
              </div>
              
              {/* Purple */}
              <div className="text-center">
                <div className="flex mb-2">
                  <div className="w-4 h-8 bg-purple-100"></div>
                  <div className="w-4 h-8 bg-purple-300"></div>
                  <div className="w-4 h-8 bg-purple-500"></div>
                  <div className="w-4 h-8 bg-purple-700"></div>
                  <div className="w-4 h-8 bg-purple-900"></div>
                </div>
                <Typography variant="small" className="text-sm text-gray-600">Purple</Typography>
              </div>
              
              {/* Teal */}
              <div className="text-center">
                <div className="flex mb-2">
                  <div className="w-4 h-8 bg-teal-100"></div>
                  <div className="w-4 h-8 bg-teal-300"></div>
                  <div className="w-4 h-8 bg-teal-500"></div>
                  <div className="w-4 h-8 bg-teal-700"></div>
                  <div className="w-4 h-8 bg-teal-900"></div>
                </div>
                <Typography variant="small" className="text-sm text-gray-600">Teal</Typography>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="mt-24 text-center">
          <div className="bg-blue-600 rounded-2xl px-8 py-16 text-white">
            <Typography variant="h2" className="text-3xl font-bold mb-4 text-white border-none pb-0">
              지금 바로 시작해보세요
            </Typography>
            <Typography variant="lead" className="text-xl text-blue-100 mb-8">
              무료로 알고리즘 학습을 시작할 수 있습니다.
            </Typography>
            <Button variant="secondary" color="yellow" size="lg">
              무료로 시작하기
            </Button>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="mt-24 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <Typography variant="muted" className="text-gray-600 mt-0">
            &copy; 2024 AlgoGo. 모든 권리 보유.
          </Typography>
        </div>
      </footer>
    </div>
  );
}
