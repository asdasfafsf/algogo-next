"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import useModal from "@/plugins/modal/useModal";
import AlertModal from "@/components/modals/AlertModal";

export default function Home() {
  const modal = useModal();

  const handleClick = () => {
    console.log('handleClick');
    modal.push('Alert', AlertModal as any, { content: '기본 알림입니다.' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <Typography variant="h1" className="text-xl font-bold text-gray-900 dark:text-white">
              AlgoGo
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost">로그인</Button>
            <Button onClick={handleClick}>시작하기</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Typography variant="h1" className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          알고리즘 학습의 <br />
          <span className="text-blue-600">새로운 여정</span>
        </Typography>
        <Typography variant="p" className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          체계적인 학습 경로와 실전 문제로 알고리즘 마스터가 되어보세요
        </Typography>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="px-8">
            학습 시작하기
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            문제 풀어보기
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <Typography variant="h2" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          핵심 기능
        </Typography>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">📚</span>
            </div>
            <Typography variant="h3" className="text-xl font-semibold mb-3">체계적 학습</Typography>
            <Typography variant="p" className="text-gray-600 dark:text-gray-300">
              기초부터 고급까지 단계별 알고리즘 학습 경로를 제공합니다
            </Typography>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-xl">💡</span>
            </div>
            <Typography variant="h3" className="text-xl font-semibold mb-3">실전 문제</Typography>
            <Typography variant="p" className="text-gray-600 dark:text-gray-300">
              코딩 테스트와 실무에서 자주 나오는 문제들을 연습할 수 있습니다
            </Typography>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-xl">📊</span>
            </div>
            <Typography variant="h3" className="text-xl font-semibold mb-3">진도 관리</Typography>
            <Typography variant="p" className="text-gray-600 dark:text-gray-300">
              학습 진도와 성취도를 시각적으로 확인하고 관리할 수 있습니다
            </Typography>
          </Card>
        </div>
      </section>

      {/* Color System Preview */}
      <section className="container mx-auto px-4 py-16">
        <Typography variant="h2" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          UI 컴포넌트 시스템
        </Typography>
        
        {/* Button Colors Grid */}
        <div className="mb-12">
          <Typography variant="h3" className="text-xl font-semibold mb-6 text-center">
            버튼 색상 시스템
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <Button color="red" className="w-full">Red</Button>
            <Button color="orange" className="w-full">Orange</Button>
            <Button color="yellow" className="w-full">Yellow</Button>
            <Button color="green" className="w-full">Green</Button>
            <Button color="blue" className="w-full">Blue</Button>
            <Button color="indigo" className="w-full">Indigo</Button>
            <Button color="purple" className="w-full">Purple</Button>
            <Button color="pink" className="w-full">Pink</Button>
            <Button color="teal" className="w-full">Teal</Button>
            <Button color="cyan" className="w-full">Cyan</Button>
            <Button color="lime" className="w-full">Lime</Button>
            <Button color="amber" className="w-full">Amber</Button>
          </div>
        </div>

        {/* Extended Color Palette */}
        <div className="mb-12">
          <Typography variant="h3" className="text-xl font-semibold mb-6 text-center">
            확장 색상 팔레트
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <Button color="deep-purple" variant="outline" size="sm">Deep Purple</Button>
            <Button color="light-blue" variant="secondary" size="sm">Light Blue</Button>
            <Button color="light-green" variant="ghost" size="sm">Light Green</Button>
            <Button color="deep-orange" variant="outline" size="sm">Deep Orange</Button>
            <Button color="brown" variant="secondary" size="sm">Brown</Button>
            <Button color="blue-gray" variant="ghost" size="sm">Blue Gray</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 text-center">
          <Typography variant="p" className="text-gray-600 dark:text-gray-400">
            © 2024 AlgoGo. 모든 권리 보유.
          </Typography>
        </div>
      </footer>
    </main>
  );
}
