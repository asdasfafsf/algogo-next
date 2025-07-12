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
    name: "알 수 없음", 
    levels: PROBLEM_LEVELS.filter(l => l.tier === "unrated") 
  },
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
]

interface ProblemLevelFilterProps {
  selectedLevels?: number[]
  onLevelsChange?: (levels: number[]) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function ProblemLevelFilter({
  selectedLevels = [],
  onLevelsChange,
  placeholder = "레벨 선택",
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
  } = useProblemLevelFilter({ selectedLevels, onLevelsChange })

  const buttonText = hookButtonText === "레벨 선택" ? placeholder : hookButtonText

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
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
        >
          <span className="text-gray-700">{buttonText}</span>
          <ChevronDown className="ml-2 h-3.5 w-3.5 shrink-0 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 border-0 shadow-lg rounded-xl" align="start" sideOffset={8}>
        <div className="p-4 bg-white rounded-xl">
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {PROBLEM_LEVEL_GROUPS.map((group) => (
              <div key={group.name} className="space-y-2">
                <h4 className="text-xs font-medium text-gray-700">{group.name}</h4>
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
                        className="cursor-pointer transition-all"
                      >
                        {level.label}
                      </Chip>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* 확인/취소 버튼 */}
          <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
              className="text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
            >
              취소
            </Button>
            <Button
              size="sm"
              onClick={handleConfirm}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium shadow-sm"
            >
              확인
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}