'use client'

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { RotateCcw } from "lucide-react"
import { ProblemLevelChip } from "@/components/shared/ProblemLevelChip"
import { ProblemTypeChip } from "@/components/shared/ProblemTypeChip"
import { ProblemStateChip } from "@/components/shared/ProblemStateChip"
import type { ProblemType, ProblemState } from "@/types/problem.type"

interface AppliedFiltersProps {
  levelList: number[]
  typeList?: ProblemType[]
  states?: ProblemState[]
}

export function AppliedFilters({ levelList, typeList = [], states = [] }: AppliedFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  const selectedLevels = levelList
  const selectedTypes = typeList
  const selectedStates = states
  const hasFilters = selectedLevels.length > 0 || selectedTypes.length > 0 || selectedStates.length > 0
  
  const handleClearAll = () => {
    // 기존 URL의 다른 파라미터들 유지하면서 모든 필터 제거
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    newSearchParams.delete('levelList')
    newSearchParams.delete('typeList')
    newSearchParams.delete('states')
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl, { scroll: false })
  }
  
  const handleRemoveLevel = (levelToRemove: number) => {
    // 특정 레벨 제거
    const updatedLevels = selectedLevels.filter(level => level !== levelToRemove)
    
    // 기존 URL의 다른 파라미터들 유지
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    
    if (updatedLevels.length > 0) {
      newSearchParams.set('levelList', updatedLevels.join(','))
    } else {
      newSearchParams.delete('levelList')
    }
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl, { scroll: false })
  }
  
  const handleRemoveType = (typeToRemove: ProblemType) => {
    // 특정 유형 제거
    const updatedTypes = selectedTypes.filter(type => type !== typeToRemove)
    
    // 기존 URL의 다른 파라미터들 유지
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    
    if (updatedTypes.length > 0) {
      newSearchParams.set('typeList', updatedTypes.join(','))
    } else {
      newSearchParams.delete('typeList')
    }
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl, { scroll: false })
  }
  
  const handleRemoveState = (stateToRemove: ProblemState) => {
    // 특정 상태 제거
    const updatedStates = selectedStates.filter(state => state !== stateToRemove)
    
    // 기존 URL의 다른 파라미터들 유지
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    
    if (updatedStates.length > 0) {
      newSearchParams.set('states', updatedStates.join(','))
    } else {
      newSearchParams.delete('states')
    }
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl, { scroll: false })
  }
  
  if (!hasFilters) {
    return null
  }
  
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex flex-wrap items-center gap-3">
        {/* 전체 초기화 버튼 */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearAll}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          전체 초기화
        </Button>
        
        {/* 적용된 난이도 필터 */}
        {selectedLevels.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedLevels.map((level) => (
              <ProblemLevelChip
                key={level}
                level={level}
                variant="filled"
                onRemove={handleRemoveLevel}
                className="font-bold"
              />
            ))}
          </div>
        )}
        
        {/* 적용된 유형 필터 */}
        {selectedTypes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedTypes.map((type) => (
              <ProblemTypeChip
                key={type}
                type={type}
                variant="filled"
                onRemove={handleRemoveType}
                className="font-bold"
              />
            ))}
          </div>
        )}
        
        {/* 적용된 상태 필터 */}
        {selectedStates.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedStates.map((state) => (
              <ProblemStateChip
                key={state}
                state={state}
                variant="filled"
                onRemove={handleRemoveState}
                className="font-bold"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}