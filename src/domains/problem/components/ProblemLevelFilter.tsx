"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"
import { Button } from "@/components/ui/Button"
import { Chip } from "@/components/ui/Chip"
import { cn } from "@/lib/utils"
import { useProblemLevelFilter } from "../hooks/useProblemLevelFilter"

interface ProblemLevel {
  value: number
  label: string
  tier: string
  level: number
  chipColor: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'ruby' | 'gray'
}

const PROBLEM_LEVELS: ProblemLevel[] = [
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
const PROBLEM_LEVEL_GROUPS = [
  { 
    name: "브론즈", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "bronze") 
  },
  { 
    name: "실버", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "silver") 
  },
  { 
    name: "골드", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "gold") 
  },
  { 
    name: "플래티넘", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "platinum") 
  },
  { 
    name: "다이아몬드", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "diamond") 
  },
  { 
    name: "루비", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "ruby") 
  },
  { 
    name: "알 수 없음", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "unrated") 
  },
]

interface ProblemLevelFilterProps {
  levelList: number[]  // 순수한 props - IquiryProblemsSummary의 levelList 타입과 동일
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function ProblemLevelFilter({
  levelList,
  placeholder = "난이도 선택",
  disabled = false,
  className,
}: ProblemLevelFilterProps) {
  const {
    isOpen,
    tempSelectedLevels,
    buttonText: hookButtonText,
    handleOpenChange,
    handleChipClick,
    handleConfirm,
    handleCancel,
  } = useProblemLevelFilter({ levelList })

  const buttonText = hookButtonText === "난이도 선택" ? placeholder : hookButtonText

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          size="sm"
          className={cn(
            "w-[120px] h-9 justify-between text-sm font-medium",
            levelList.length > 0 
              ? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100" 
              : "border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
            "rounded-lg shadow-sm transition-all duration-200",
            "focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
            className
          )}
          disabled={disabled}
        >
          <span className="truncate">{buttonText}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 border-0 shadow-lg rounded-xl" align="start" sideOffset={8}>
        <div className="bg-white rounded-xl">
          {/* 스크롤 영역 - 패딩을 제외하고 순수 콘텐츠만 */}
          <div className="max-h-80 overflow-y-auto overflow-x-hidden overscroll-contain">
            <div className="p-6 space-y-6">
              {PROBLEM_LEVEL_GROUPS.map((group) => (
                <div key={group.name} className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-800">{group.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.levels.map((level) => {
                      const isSelected = tempSelectedLevels.includes(level.value)
                      return (
                        <Chip
                          key={level.value}
                          variant={isSelected ? "filled" : "outlined"}
                          color={level.chipColor}
                          size="small"
                          onClick={() => handleChipClick(level.value)}
                          className="cursor-pointer transition-all font-bold"
                        >
                          <span className="font-bold">{level.label}</span>
                        </Chip>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 확인/취소 버튼 - 스크롤 영역 외부에 고정 */}
          <div className="flex justify-end gap-2 p-6 pt-4 border-t border-gray-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
              className="text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-3 py-1.5 h-7 rounded-md font-medium"
            >
              취소
            </Button>
            <Button
              size="sm"
              onClick={handleConfirm}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 h-7 rounded-md font-medium shadow-sm"
            >
              확인
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}