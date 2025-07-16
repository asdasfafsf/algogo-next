'use client';

import { useState, useEffect, useCallback } from 'react';
import { Settings2, Monitor, Code2, Palette, Type, AlignLeft, Hash, Globe, Save } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

interface CodeEditorSettingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock 타입 정의 (실제 프로젝트에 맞게 수정 필요)
interface EditorSettings {
  theme: string;
  fontSize: number;
  tabSize: number;
  lineNumber: string;
  defaultLanguage: string;
}

const themeOptions = [
  { value: 'vs-light', label: 'Light', icon: '☀️' },
  { value: 'vs-dark', label: 'Dark', icon: '🌙' },
  { value: 'monokai', label: 'Monokai', icon: '🎨' },
  { value: 'github', label: 'GitHub', icon: '🐙' },
];

const fontSizeOptions = [
  { value: 12, label: '12px' },
  { value: 14, label: '14px' },
  { value: 16, label: '16px' },
  { value: 18, label: '18px' },
  { value: 20, label: '20px' },
];

const lineNumberOptions = [
  { value: 'on', label: '표시' },
  { value: 'off', label: '숨김' },
  { value: 'relative', label: '상대' },
];

const languageOptions = [
  { value: 'python', label: 'Python', icon: '🐍' },
  { value: 'javascript', label: 'JavaScript', icon: '🟨' },
  { value: 'java', label: 'Java', icon: '☕' },
  { value: 'cpp', label: 'C++', icon: '🔧' },
];

const problemSizeOptions = [
  { value: 100, label: '작게' },
  { value: 110, label: '보통' },
  { value: 120, label: '크게' },
  { value: 130, label: '매우 크게' },
];

export function CodeEditorSettingModal({ isOpen, onClose }: CodeEditorSettingModalProps) {
  const [settings, setSettings] = useState<EditorSettings>({
    theme: 'vs-dark',
    fontSize: 14,
    tabSize: 4,
    lineNumber: 'on',
    defaultLanguage: 'python',
  });
  
  const [problemSize, setProblemSize] = useState(110);
  const [saveToServer, setSaveToServer] = useState(true);

  const handleSave = useCallback(() => {
    // 저장 로직 구현
    console.log('Settings saved:', { settings, problemSize, saveToServer });
    onClose();
  }, [settings, problemSize, saveToServer, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="!w-full !h-full md:!w-[700px] md:!h-auto md:!max-h-[85vh] md:!rounded-lg !rounded-none overflow-hidden p-0 flex flex-col">
        {/* 헤더 */}
        <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Settings2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-gray-900">화면 설정</DialogTitle>
                <p className="text-sm text-gray-600 mt-1">문제 화면과 코드 에디터를 설정하세요</p>
              </div>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* 전체를 2열로 나누기 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 왼쪽: 문제 설정 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">문제 화면</h3>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Type className="w-4 h-4" />
                    글꼴 크기
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {problemSizeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setProblemSize(option.value)}
                        className={cn(
                          "h-11 py-3 px-4 rounded-lg text-sm font-medium transition-all border w-full",
                          problemSize === option.value
                            ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 오른쪽: 에디터 설정 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">코드 에디터</h3>
                </div>

                {/* 테마 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Palette className="w-4 h-4" />
                    테마
                  </label>
                  <Select
                    value={settings.theme}
                    onValueChange={(value) => setSettings({ ...settings, theme: value })}
                  >
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {themeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <span className="flex items-center gap-2">
                            <span>{option.icon}</span>
                            <span>{option.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 글꼴 크기 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Type className="w-4 h-4" />
                    글꼴 크기
                  </label>
                  <Select
                    value={settings.fontSize.toString()}
                    onValueChange={(value) => setSettings({ ...settings, fontSize: parseInt(value) })}
                  >
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fontSizeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value.toString()}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 탭 크기 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <AlignLeft className="w-4 h-4" />
                    탭 크기
                  </label>
                  <Input
                    type="number"
                    min="2"
                    max="8"
                    value={settings.tabSize}
                    onChange={(e) => setSettings({ ...settings, tabSize: parseInt(e.target.value) || 4 })}
                    className="h-11 w-full"
                  />
                </div>

                {/* 줄 번호 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Hash className="w-4 h-4" />
                    줄 번호
                  </label>
                  <Select
                    value={settings.lineNumber}
                    onValueChange={(value) => setSettings({ ...settings, lineNumber: value })}
                  >
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {lineNumberOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 기본 언어 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Globe className="w-4 h-4" />
                    기본 언어
                  </label>
                  <Select
                    value={settings.defaultLanguage}
                    onValueChange={(value) => setSettings({ ...settings, defaultLanguage: value })}
                  >
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languageOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <span className="flex items-center gap-2">
                            <span>{option.icon}</span>
                            <span>{option.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* 서버 저장 옵션 - 전체 하단 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={saveToServer}
                    onCheckedChange={(checked) => setSaveToServer(checked as boolean)}
                    className="w-5 h-5 mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Save className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">
                        이 설정을 서버에 저장하기
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      다른 기기에서도 동일한 설정을 사용할 수 있습니다
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
          <div className="flex justify-end gap-3">
            <Button
              onClick={onClose}
              variant="outline"
              className="px-6"
            >
              취소
            </Button>
            <Button
              onClick={handleSave}
              variant="default"
              color="blue"
              className="px-6"
            >
              저장
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}