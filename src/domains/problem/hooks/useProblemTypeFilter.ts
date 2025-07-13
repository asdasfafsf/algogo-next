import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { ProblemType } from "@/types/problem.type"

interface UseProblemTypeFilterProps {
  typeList: ProblemType[]
}

interface UseProblemTypeFilterReturn {
  isOpen: boolean
  tempSelectedTypes: ProblemType[]
  selectedCount: number
  buttonText: string
  handleOpenChange: (open: boolean) => void
  handleChipClick: (type: ProblemType) => void
  handleConfirm: () => void
  handleCancel: () => void
}

export function useProblemTypeFilter({ 
  typeList
}: UseProblemTypeFilterProps): UseProblemTypeFilterReturn {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [tempSelectedTypes, setTempSelectedTypes] = useState<ProblemType[]>(typeList)

  // typeList props가 변경될 때 tempSelectedTypes 동기화
  useEffect(() => {
    setTempSelectedTypes(typeList)
  }, [typeList])

  // 팝오버가 열릴 때 현재 선택된 값들로 초기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempSelectedTypes([...typeList])
    }
    setIsOpen(open)
  }

  const handleChipClick = (type: ProblemType) => {
    setTempSelectedTypes(prev => {
      if (prev.includes(type)) {
        return prev.filter(t => t !== type)
      } else {
        return [...prev, type]
      }
    })
  }

  const handleConfirm = () => {
    // 기존 searchParams 유지하면서 typeList만 업데이트
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    
    if (tempSelectedTypes.length > 0) {
      newSearchParams.set('typeList', tempSelectedTypes.join(','))
    } else {
      newSearchParams.delete('typeList')
    }
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl, { scroll: false })
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempSelectedTypes([...typeList])
    setIsOpen(false)
  }

  const selectedCount = typeList.length
  const buttonText = selectedCount > 0 
    ? `유형 (${selectedCount}개 선택됨)`
    : "유형 선택"

  return {
    isOpen,
    tempSelectedTypes,
    selectedCount,
    buttonText,
    handleOpenChange,
    handleChipClick,
    handleConfirm,
    handleCancel,
  }
}