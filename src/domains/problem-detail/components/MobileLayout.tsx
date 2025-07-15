'use client';

import { useState } from 'react';
import { FileText, Code, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MobileLayoutProps {
  problemPanel: React.ReactNode;
  codePanel: React.ReactNode;
  resultPanel: React.ReactNode;
}

type TabType = 'problem' | 'code' | 'result';

export function MobileLayout({
  problemPanel,
  codePanel,
  resultPanel,
}: MobileLayoutProps) {
  const [activeTab, setActiveTab] = useState<TabType>('problem');

  const tabs = [
    { id: 'problem' as const, label: '문제', icon: FileText },
    { id: 'code' as const, label: '코드', icon: Code },
    { id: 'result' as const, label: '결과', icon: TestTube },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* 탭 컨텐츠 */}
      <div className="flex-1 overflow-hidden bg-editor-page-bg">
        {activeTab === 'problem' && (
          <div className="h-full overflow-y-auto">
            {problemPanel}
          </div>
        )}
        {activeTab === 'code' && (
          <div className="h-full">
            {codePanel}
          </div>
        )}
        {activeTab === 'result' && (
          <div className="h-full">
            {resultPanel}
          </div>
        )}
      </div>

      {/* 하단 탭 네비게이션 */}
      <div className="flex bg-editor-page-bg border-t border-editor-page-border safe-area-padding-bottom">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex-col justify-center gap-1 py-2 text-xs font-medium transition-colors rounded-none min-h-[60px] ${
                activeTab === tab.id
                  ? 'text-editor-page-text editor-bottom-tab-active'
                  : 'text-editor-page-text-secondary hover:text-editor-page-text'
              }`}
              aria-label={`${tab.label} 탭`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}