'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Theme } from '@/types/theme.type';
import { Button } from '@/components/ui/Button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/Select';

interface ThemeToggleProps {
  variant?: 'button' | 'select';
  className?: string;
}

export function ThemeToggle({ variant = 'button', className = '' }: ThemeToggleProps) {
  const { theme, setTheme, toggleTheme } = useTheme();

  const themeOptions = [
    { value: 'light' as Theme, label: '라이트', icon: Sun },
    { value: 'dark' as Theme, label: '다크', icon: Moon },
    { value: 'auto' as Theme, label: '자동', icon: Monitor },
  ];

  if (variant === 'select') {
    return (
      <div className={className}>
        <Select value={theme} onValueChange={(value) => setTheme(value as Theme)}>
          <SelectTrigger className="w-32 theme-bg theme-text-primary theme-border-primary">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {themeOptions.map((option) => {
              const Icon = option.icon;
              return (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {option.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    );
  }

  // 간단한 토글 버튼 (라이트 ↔ 다크)
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`theme-text-secondary hover:theme-text-primary hover:theme-surface ${className}`}
      title={theme === 'light' ? '다크 모드로 변경' : '라이트 모드로 변경'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </Button>
  );
}