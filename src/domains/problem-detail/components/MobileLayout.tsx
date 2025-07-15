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
      {/* 탭 헤더 */}
      <div className="flex bg-editor-page-bg border-b border-editor-page-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 justify-center gap-2 py-3 text-sm font-medium transition-colors rounded-none ${
                activeTab === tab.id
                  ? 'text-editor-page-text'
                  : 'text-editor-page-text-secondary hover:text-editor-page-text'
              }`}
              style={{
                ...(activeTab === tab.id && {
                  color: 'var(--color-editor-ui-primary)',
                  borderBottom: '2px solid var(--color-editor-ui-primary)',
                  backgroundColor: 'var(--color-editor-page-surface)'
                })
              }}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </Button>
          );
        })}
      </div>

      {/* 탭 컨텐츠 */}
      <div className="flex-1 overflow-hidden bg-editor-page-surface">
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
    </div>
  );
}