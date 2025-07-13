import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { ProblemState } from "@/types/problem.type"

interface UseProblemStateFilterProps {
  states: ProblemState[]
}

interface UseProblemStateFilterReturn {
  isOpen: boolean
  selectedStates: ProblemState[]
  selectedCount: number
  buttonText: string
  handleOpenChange: (open: boolean) => void
  handleStateChange: (state: ProblemState) => void
}

export function useProblemStateFilter({ 
  states
}: UseProblemStateFilterProps): UseProblemStateFilterReturn {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  const handleStateChange = (state: ProblemState) => {
    // 현재 선택된 상태에서 해당 상태를 토글
    const newStates = states.includes(state)
      ? states.filter(s => s !== state)
      : [...states, state]
    
    // 즉시 URL 업데이트
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    
    if (newStates.length > 0) {
      newSearchParams.set('states', newStates.join(','))
    } else {
      newSearchParams.delete('states')
    }
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl, { scroll: false })
  }

  const selectedCount = states.length
  const buttonText = selectedCount > 0 
    ? `상태 (${selectedCount}개 선택됨)`
    : "상태 선택"

  return {
    isOpen,
    selectedStates: states,
    selectedCount,
    buttonText,
    handleOpenChange,
    handleStateChange,
  }
}