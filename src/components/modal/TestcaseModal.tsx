"use client"

import { useState, useEffect } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import { TestCase } from '@/types/testcase.type';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

interface TestCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  testCases: TestCase[];
  onTestCasesChange?: (testCases: TestCase[]) => void;
}

export function TestCaseModal({ 
  isOpen, 
  onClose, 
  testCases, 
  onTestCasesChange 
}: TestCaseModalProps) {
  const [editableTestCases, setEditableTestCases] = useState<TestCase[]>([]);

  const handleOpen = () => {
    if (isOpen) {
      setEditableTestCases(testCases.map(tc => ({ ...tc })));
    }
  };

  const addTestCase = () => {
    const newTestCase: TestCase = {
      input: '',
      output: '',
      expected: '',
      state: '실행 전'
    };
    setEditableTestCases([...editableTestCases, newTestCase]);
  };

  const removeTestCase = (index: number) => {
    const testCase = editableTestCases[index];
    if (testCase.readOnly) return;
    setEditableTestCases(editableTestCases.filter((_, i) => i !== index));
  };

  const updateTestCase = (index: number, field: keyof TestCase, value: string) => {
    const testCase = editableTestCases[index];
    if (testCase.readOnly) return;
    const updated = [...editableTestCases];
    updated[index] = { ...updated[index], [field]: value };
    setEditableTestCases(updated);
  };

  const handleSave = () => {
    onTestCasesChange?.(editableTestCases);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  // Initialize editableTestCases when modal opens
  useEffect(() => {
    if (isOpen) {
      handleOpen();
    }
  }, [isOpen, testCases]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="!max-w-none !w-[95vw] !max-w-[800px] !h-[95vh] !max-h-[700px] p-0 gap-0 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-t-2xl border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex flex-col">
                <DialogTitle className="text-xl font-semibold leading-tight">
                  테스트 케이스 편집
                </DialogTitle>
                <Typography variant="p" className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-tight">
                  알고리즘 문제 해결을 위한 테스트 케이스를 관리하세요
                </Typography>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(95vh-280px)] flex-1">
          <div className="space-y-6">
            {editableTestCases.map((testCase, index) => (
              <div 
                key={index} 
                className={`border rounded-xl p-6 transition-all duration-200 ${
                  testCase.readOnly 
                    ? 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700' 
                    : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-lg dark:bg-gray-900 dark:border-gray-700 dark:hover:border-blue-500'
                }`}
              >
                {/* Test Case Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      testCase.readOnly 
                        ? 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400' 
                        : 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <Typography variant="h4" className="font-semibold">
                        테스트 케이스 {index + 1}
                      </Typography>
                      {testCase.readOnly && (
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">읽기 전용</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTestCase(index)}
                    disabled={testCase.readOnly}
                    className={`transition-all duration-200 ${
                      testCase.readOnly 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20'
                    }`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
                
                {/* Input Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>입력</span>
                    </label>
                    <textarea
                      value={testCase.input}
                      onChange={(e) => updateTestCase(index, 'input', e.target.value)}
                      readOnly={testCase.readOnly}
                      className={`w-full h-28 px-4 py-3 border rounded-lg text-sm font-mono resize-none transition-all duration-200 ${
                        testCase.readOnly 
                          ? 'bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400' 
                          : 'bg-white border-gray-200 text-gray-900 hover:border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:bg-gray-900 dark:border-gray-600 dark:text-white'
                      }`}
                      placeholder="입력값을 입력하세요..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>예상 결과</span>
                    </label>
                    <textarea
                      value={testCase.expected}
                      onChange={(e) => updateTestCase(index, 'expected', e.target.value)}
                      readOnly={testCase.readOnly}
                      className={`w-full h-28 px-4 py-3 border rounded-lg text-sm font-mono resize-none transition-all duration-200 ${
                        testCase.readOnly 
                          ? 'bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400' 
                          : 'bg-white border-gray-200 text-gray-900 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:bg-gray-900 dark:border-gray-600 dark:text-white'
                      }`}
                      placeholder="예상 결과를 입력하세요..."
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add Test Case Button */}
            <button
              onClick={addTestCase}
              className="w-full p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 group dark:border-gray-600 dark:hover:border-blue-500 dark:hover:bg-blue-900/10"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <Plus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-center">
                  <Typography variant="h4" className="font-semibold">
                    새 테스트 케이스 추가
                  </Typography>
                  <Typography variant="p" className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    클릭하여 새로운 테스트 케이스를 생성하세요
                  </Typography>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-4 px-8 py-6 bg-gray-50/50 dark:bg-gray-800/50 border-t border-gray-200/50 dark:border-gray-700/50 rounded-b-2xl">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="min-w-[100px]"
          >
            취소
          </Button>
          <Button
            onClick={handleSave}
            color="blue"
            className="min-w-[100px]"
          >
            저장
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}