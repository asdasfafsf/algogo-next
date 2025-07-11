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
            <Button variant="default" size="lg">
              학습 시작하기
            </Button>
            <Button variant="outline" size="lg">
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

        {/* CTA 섹션 */}
        <section className="mt-24 text-center">
          <div className="bg-blue-600 rounded-2xl px-8 py-16 text-white">
            <Typography variant="h2" className="text-3xl font-bold mb-4 text-white border-none pb-0">
              지금 바로 시작해보세요
            </Typography>
            <Typography variant="lead" className="text-xl text-blue-100 mb-8">
              무료로 알고리즘 학습을 시작할 수 있습니다.
            </Typography>
            <Button variant="secondary" size="lg">
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
