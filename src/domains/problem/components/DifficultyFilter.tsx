"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/Button"
import { Chip } from "@/components/ui/Chip"
import { cn } from "@/lib/utils"

// 모바일 감지 훅
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}

interface DifficultyLevel {
  value: number
  label: string
  tier: string
  level: number
  chipColor: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'ruby' | 'gray'
}

const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  { value: 0, label: "알 수 없음", tier: "unrated", level: 0, chipColor: "gray" },
  
  // 브론즈 (1-5)
  { value: 1, label: "브론즈 5", tier: "bronze", level: 5, chipColor: "bronze" },
  { value: 2, label: "브론즈 4", tier: "bronze", level: 4, chipColor: "bronze" },
  { value: 3, label: "브론즈 3", tier: "bronze", level: 3, chipColor: "bronze" },
  { value: 4, label: "브론즈 2", tier: "bronze", level: 2, chipColor: "bronze" },
  { value: 5, label: "브론즈 1", tier: "bronze", level: 1, chipColor: "bronze" },
  
  // 실버 (6-10)
  { value: 6, label: "실버 5", tier: "silver", level: 5, chipColor: "silver" },
  { value: 7, label: "실버 4", tier: "silver", level: 4, chipColor: "silver" },
  { value: 8, label: "실버 3", tier: "silver", level: 3, chipColor: "silver" },
  { value: 9, label: "실버 2", tier: "silver", level: 2, chipColor: "silver" },
  { value: 10, label: "실버 1", tier: "silver", level: 1, chipColor: "silver" },
  
  // 골드 (11-15)
  { value: 11, label: "골드 5", tier: "gold", level: 5, chipColor: "gold" },
  { value: 12, label: "골드 4", tier: "gold", level: 4, chipColor: "gold" },
  { value: 13, label: "골드 3", tier: "gold", level: 3, chipColor: "gold" },
  { value: 14, label: "골드 2", tier: "gold", level: 2, chipColor: "gold" },
  { value: 15, label: "골드 1", tier: "gold", level: 1, chipColor: "gold" },
  
  // 플래티넘 (16-20)
  { value: 16, label: "플래티넘 5", tier: "platinum", level: 5, chipColor: "platinum" },
  { value: 17, label: "플래티넘 4", tier: "platinum", level: 4, chipColor: "platinum" },
  { value: 18, label: "플래티넘 3", tier: "platinum", level: 3, chipColor: "platinum" },
  { value: 19, label: "플래티넘 2", tier: "platinum", level: 2, chipColor: "platinum" },
  { value: 20, label: "플래티넘 1", tier: "platinum", level: 1, chipColor: "platinum" },
  
  // 다이아몬드 (21-25)
  { value: 21, label: "다이아몬드 5", tier: "diamond", level: 5, chipColor: "diamond" },
  { value: 22, label: "다이아몬드 4", tier: "diamond", level: 4, chipColor: "diamond" },
  { value: 23, label: "다이아몬드 3", tier: "diamond", level: 3, chipColor: "diamond" },
  { value: 24, label: "다이아몬드 2", tier: "diamond", level: 2, chipColor: "diamond" },
  { value: 25, label: "다이아몬드 1", tier: "diamond", level: 1, chipColor: "diamond" },
  
  // 루비 (26-30)
  { value: 26, label: "루비 5", tier: "ruby", level: 5, chipColor: "ruby" },
  { value: 27, label: "루비 4", tier: "ruby", level: 4, chipColor: "ruby" },
  { value: 28, label: "루비 3", tier: "ruby", level: 3, chipColor: "ruby" },
  { value: 29, label: "루비 2", tier: "ruby", level: 2, chipColor: "ruby" },
  { value: 30, label: "루비 1", tier: "ruby", level: 1, chipColor: "ruby" },
]

// 티어별로 그룹화
const DIFFICULTY_GROUPS = [
  { 
    name: "알 수 없음", 
    difficulties: DIFFICULTY_LEVELS.filter(d => d.tier === "unrated") 
  },
  { 
    name: "브론즈", 
    difficulties: DIFFICULTY_LEVELS.filter(d => d.tier === "bronze") 
  },
  { 
    name: "실버", 
    difficulties: DIFFICULTY_LEVELS.filter(d => d.tier === "silver") 
  },
  { 
    name: "골드", 
    difficulties: DIFFICULTY_LEVELS.filter(d => d.tier === "gold") 
  },
  { 
    name: "플래티넘", 
    difficulties: DIFFICULTY_LEVELS.filter(d => d.tier === "platinum") 
  },
  { 
    name: "다이아몬드", 
    difficulties: DIFFICULTY_LEVELS.filter(d => d.tier === "diamond") 
  },
  { 
    name: "루비", 
    difficulties: DIFFICULTY_LEVELS.filter(d => d.tier === "ruby") 
  },
]

interface DifficultyFilterProps {
  selectedDifficulties?: number[]
  onDifficultiesChange?: (difficulties: number[]) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

// 공통 콘텐츠 컴포넌트
function DifficultyContent({
  tempSelectedDifficulties,
  onChipClick,
  onConfirm,
  onCancel,
  isMobile = false,
}: {
  tempSelectedDifficulties: number[]
  onChipClick: (value: number) => void
  onConfirm: () => void
  onCancel: () => void
  isMobile?: boolean
}) {
  return (
    <div className={cn("bg-white", isMobile ? "p-4" : "p-4 rounded-xl")}>
      <div className={cn("space-y-4 overflow-y-auto", isMobile ? "max-h-[85vh]" : "max-h-80")}>
        {DIFFICULTY_GROUPS.map((group) => (
          <div key={group.name} className="space-y-2">
            <h4 className="text-xs font-medium text-gray-700">{group.name}</h4>
            <div className={cn("flex flex-wrap", isMobile ? "gap-3" : "gap-2")}>
              {group.difficulties.map((difficulty) => {
                const isSelected = tempSelectedDifficulties.includes(difficulty.value)
                return (
                  <Chip
                    key={difficulty.value}
                    variant={isSelected ? "filled" : "outlined"}
                    color={difficulty.chipColor}
                    size={isMobile ? "medium" : "small"}
                    onClick={() => onChipClick(difficulty.value)}
                    className={cn(
                      "cursor-pointer transition-all",
                      isMobile && "min-h-[44px] px-4 py-2"
                    )}
                  >
                    {difficulty.label}
                  </Chip>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* 확인/취소 버튼 */}
      <div className={cn(
        "flex justify-end gap-2 border-t border-gray-100",
        isMobile ? "mt-2 pt-2" : "mt-4 pt-4"
      )}>
        <Button
          variant="ghost"
          size={isMobile ? "sm" : "sm"}
          onClick={onCancel}
          className={cn(
            "text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md font-medium",
            isMobile ? "text-xs px-4 py-2" : "text-xs px-4 py-2"
          )}
        >
          취소
        </Button>
        <Button
          size={isMobile ? "sm" : "sm"}
          onClick={onConfirm}
          className={cn(
            "bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium shadow-sm",
            isMobile ? "text-xs px-4 py-2" : "text-xs px-4 py-2"
          )}
        >
          확인
        </Button>
      </div>
    </div>
  )
}

export function DifficultyFilter({
  selectedDifficulties = [],
  onDifficultiesChange,
  placeholder = "난이도 선택",
  disabled = false,
  className,
}: DifficultyFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [tempSelectedDifficulties, setTempSelectedDifficulties] = useState<number[]>([])
  const isMobile = useIsMobile()

  // 팝오버/모달이 열릴 때 현재 선택된 값들로 초기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempSelectedDifficulties([...selectedDifficulties])
    }
    setIsOpen(open)
  }

  const handleChipClick = (difficultyValue: number) => {
    setTempSelectedDifficulties(prev => {
      if (prev.includes(difficultyValue)) {
        return prev.filter(d => d !== difficultyValue)
      } else {
        return [...prev, difficultyValue]
      }
    })
  }

  const handleConfirm = () => {
    onDifficultiesChange?.(tempSelectedDifficulties)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempSelectedDifficulties([...selectedDifficulties])
    setIsOpen(false)
  }

  const selectedCount = selectedDifficulties.length
  const buttonText = selectedCount > 0 
    ? `난이도 (${selectedCount}개 선택됨)`
    : placeholder

  // 공통 버튼
  const triggerButton = (
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={isOpen}
      size="sm"
      className={cn(
        "w-[200px] justify-between text-xs font-medium",
        "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
        "rounded-lg shadow-sm transition-all duration-200",
        "focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
        className
      )}
      disabled={disabled}
      onClick={() => handleOpenChange(true)}
    >
      <span className="text-gray-700">{buttonText}</span>
      <ChevronDown className="ml-2 h-3.5 w-3.5 shrink-0 text-gray-400" />
    </Button>
  )

  // 모바일에서는 Dialog 사용
  if (isMobile) {
    return (
      <>
        {triggerButton}
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogContent 
            className="w-full max-w-none h-full max-h-none m-0 p-0 rounded-none border-0 bg-white overflow-hidden"
            showCloseButton={false}
          >
            <DialogHeader className="px-4 py-2 border-b border-gray-100">
              <DialogTitle className="text-sm font-semibold text-gray-900 text-center">
                난이도 선택
              </DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-hidden">
              <DifficultyContent
                tempSelectedDifficulties={tempSelectedDifficulties}
                onChipClick={handleChipClick}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                isMobile={true}
              />
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  // PC에서는 기존 Popover 사용
  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        {triggerButton}
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 border-0 shadow-lg rounded-xl" align="start" sideOffset={8}>
        <DifficultyContent
          tempSelectedDifficulties={tempSelectedDifficulties}
          onChipClick={handleChipClick}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isMobile={false}
        />
      </PopoverContent>
    </Popover>
  )
}