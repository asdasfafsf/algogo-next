'use client';

import { Terminal, Code } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';

interface CompilerInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CompilerInfo {
  language: string;
  version: string;
  compile?: string;
  execute: string;
  badge: {
    bg: string;
    text: string;
    icon: string;
  };
}

const compilerData: CompilerInfo[] = [
  {
    language: 'C++',
    version: 'GCC 11.1.0',
    compile: 'g++ Main.cc -o Main -O2 -Wall -lm -static -std=gnu++17 -DONLINE_JUDGE -DBOJ',
    execute: './Main',
    badge: {
      bg: 'bg-gradient-to-r from-blue-50 to-indigo-50',
      text: 'text-blue-800',
      icon: '🔧',
    },
  },
  {
    language: 'Java',
    version: 'AWS Corretto JDK 21',
    compile: 'javac --release 21 -J-Xms128m -J-Xmx256m -J-Xss512k -encoding UTF-8 Main.java',
    execute: 'java -Xms128m -Xmx256m -Xss512k -XX:+UseSerialGC Main',
    badge: {
      bg: 'bg-gradient-to-r from-orange-50 to-red-50',
      text: 'text-orange-800',
      icon: '☕',
    },
  },
  {
    language: 'Node.js',
    version: 'Node.js 22',
    execute: 'node Main.js',
    badge: {
      bg: 'bg-gradient-to-r from-green-50 to-emerald-50',
      text: 'text-green-800',
      icon: '🟢',
    },
  },
  {
    language: 'Python',
    version: 'Python 3.6',
    execute: 'python3 Main.py',
    badge: {
      bg: 'bg-gradient-to-r from-yellow-50 to-amber-50',
      text: 'text-yellow-800',
      icon: '🐍',
    },
  },
];

export function CompilerInfoModal({ isOpen, onClose }: CompilerInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="!w-full !h-full md:!w-[90vw] md:!h-[80vh] md:!max-w-[1000px] md:!max-h-[700px] md:!rounded-lg !rounded-none overflow-hidden p-0 flex flex-col">
        {/* 헤더 */}
        <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Terminal className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900">컴파일러 정보</DialogTitle>
                <p className="text-sm text-gray-600 mt-1">지원되는 언어별 컴파일 및 실행 환경</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 콘텐츠 */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {compilerData.map((compiler, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* 언어 헤더 */}
                <div className={`px-6 py-4 ${compiler.badge.bg} border-b border-gray-100`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{compiler.badge.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{compiler.language}</h3>
                      <span className={`inline-block px-3 py-1 ${compiler.badge.text} bg-white/70 text-xs font-medium rounded-full`}>
                        {compiler.version}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 명령어 섹션 */}
                <div className="p-6 space-y-4">
                  {compiler.compile && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-700">컴파일 명령어</span>
                      </div>
                      <div className="relative">
                        <pre className="p-4 bg-gray-900 text-green-400 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all">
                          {compiler.compile}
                        </pre>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-700">실행 명령어</span>
                    </div>
                    <div className="relative">
                      <pre className="p-4 bg-gray-900 text-green-400 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap">
                        {compiler.execute}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 푸터 */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">
          <div className="flex justify-center">
            <Button
              onClick={onClose}
              variant="default"
              color="gray"
              className="px-8 py-3 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              닫기
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}