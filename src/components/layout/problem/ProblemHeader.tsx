'use client';

import { useState } from 'react';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/Breadcrumb';
import { Settings, FileText } from 'lucide-react';
import { CompilerInfoModal } from '@/components/modals/CompilerInfoModal';
import Link from 'next/link';

interface ProblemHeaderProps {
  problemTitle?: string;
}

export function ProblemHeader({ problemTitle }: ProblemHeaderProps) {
  const [isCompilerInfoOpen, setIsCompilerInfoOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b border-editor-page-border bg-editor-page-bg backdrop-blur supports-[backdrop-filter]:bg-editor-page-bg/60">
      <div className="px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Breadcrumb - Always left aligned */}
          <div className="flex items-center min-w-0 flex-1">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link 
                      href="/" 
                      className="text-editor-page-text-secondary hover:text-editor-page-text transition-colors duration-200 font-medium"
                    >
                      홈
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link 
                      href="/problems" 
                      className="text-editor-page-text-secondary hover:text-editor-page-text transition-colors duration-200 font-medium"
                    >
                      문제
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-editor-page-text font-semibold truncate">
                    {problemTitle || '문제 상세'}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          {/* Header controls - Always right aligned */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
            {/* 컴파일러 정보 문서 */}
            <div className="relative group">
              <button
                onClick={() => setIsCompilerInfoOpen(true)}
                className="p-2 rounded-md text-editor-page-text-secondary hover:text-editor-page-text hover:bg-editor-page-surface transition-colors duration-200 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
              </button>
              <div className="absolute top-full right-0 mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                컴파일러 정보
              </div>
            </div>
            
            {/* 에디터 세팅 모달 */}
            <div className="relative group">
              <button
                className="p-2 rounded-md text-editor-page-text-secondary hover:text-editor-page-text hover:bg-editor-page-surface transition-colors duration-200 cursor-pointer"
              >
                <Settings className="w-5 h-5" />
              </button>
              <div className="absolute top-full right-0 mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                에디터 설정
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    {/* 컴파일러 정보 모달 */}
    <CompilerInfoModal
      isOpen={isCompilerInfoOpen}
      onClose={() => setIsCompilerInfoOpen(false)}
    />
    </>
  );
}