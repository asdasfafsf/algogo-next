'use client'

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { RotateCcw } from "lucide-react"
import { ProblemLevelChip } from "@/components/shared/ProblemLevelChip"

interface AppliedFiltersProps {
  levelList: number[]
}

export function AppliedFilters({ levelList }: AppliedFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  const selectedLevels = levelList
  const hasFilters = selectedLevels.length > 0
  
  const handleClearAll = () => {
    // 기존 URL의 다른 파라미터들 유지하면서 levelList만 제거
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    newSearchParams.delete('levelList')
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl)
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
    
    router.push(newUrl)
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
        <div className="flex flex-wrap gap-2">
          {selectedLevels.map((level) => (
            <ProblemLevelChip
              key={level}
              level={level}
              onRemove={handleRemoveLevel}
            />
          ))}
        </div>
      </div>
    </div>
  )
}