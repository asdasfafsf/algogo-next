"use client"

import { Button } from '@/components/ui/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';
import { LucideIcon } from 'lucide-react';

interface CodeEditorActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  isCompact: boolean;
  color?: string;
}

export function CodeEditorActionButton({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  isCompact,
  color = 'text-editor-page-text-secondary'
}: CodeEditorActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          variant={isCompact ? "ghost" : "default"}
          color={isCompact ? "default" : "blue"}
          size="sm" 
          disabled={disabled}
          onClick={onClick}
          className={`font-semibold text-xs ${!isCompact ? 'px-4' : 'w-10 h-10 p-0'} ${isCompact ? `${color} hover:${color} hover:bg-editor-page-base-neutral-hover rounded-lg transition-all duration-200 cursor-pointer` : ''}`}
        >
          {isCompact && <Icon className="h-4 w-4" />}
          {!isCompact && <span>{label}</span>}
        </Button>
      </TooltipTrigger>
      <TooltipContent className={isCompact ? '' : 'hidden'}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}