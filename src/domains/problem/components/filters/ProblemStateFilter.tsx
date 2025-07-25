"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/Checkbox"
import { cn } from "@/lib/utils"
import { useProblemStateFilter } from "@/domains/problem/hooks/useProblemStateFilter"
import type { ProblemState } from "@/types/problem.type"
import { PROBLEM_STATE } from "@/constants/problem.constant"

interface ProblemStateFilterProps {
  states: ProblemState[]
  placeholder?: string
  disabled?: boolean
  className?: string
}

// 문제 상태 목록
const PROBLEM_STATES = [
  { value: PROBLEM_STATE.SOLVED, label: "맞힌 문제" },
  { value: PROBLEM_STATE.FAILED, label: "틀린 문제" },
  { value: PROBLEM_STATE.NONE, label: "안 푼 문제" }
]

export function ProblemStateFilter({
  states,
  placeholder = "상태 선택",
  disabled = false,
  className,
}: ProblemStateFilterProps) {
  const {
    isOpen,
    selectedStates,
    buttonText: hookButtonText,
    handleOpenChange,
    handleStateChange,
  } = useProblemStateFilter({ states })

  const buttonText = hookButtonText === "상태 선택" ? placeholder : hookButtonText

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
            "border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
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
      <PopoverContent className="w-[180px] max-w-[90vw] p-0 border-0 shadow-lg rounded-xl" align="start" sideOffset={6}>
        <div className="p-2 bg-white rounded-xl">
          <div className="space-y-0.5">
            {PROBLEM_STATES.map((state) => {
              const isSelected = selectedStates.includes(state.value)
              return (
                <div
                  key={state.value}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded-md transition-colors"
                  onClick={() => handleStateChange(state.value)}
                >
                  <Checkbox
                    id={state.value}
                    checked={isSelected}
                    onCheckedChange={() => handleStateChange(state.value)}
                    className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <label
                    htmlFor={state.value}
                    className="text-sm font-medium cursor-pointer flex-1 text-gray-700"
                  >
                    {state.label}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}