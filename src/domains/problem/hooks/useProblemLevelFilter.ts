import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

interface UseProblemLevelFilterProps {
  levelList: number[]  // 현재 선택된 레벨들 (URL에서 파싱된 순수한 데이터)
}

interface UseProblemLevelFilterReturn {
  isOpen: boolean
  tempSelectedLevels: number[]
  selectedCount: number
  buttonText: string
  handleOpenChange: (open: boolean) => void
  handleChipClick: (levelValue: number) => void
  handleConfirm: () => void
  handleCancel: () => void
}

export function useProblemLevelFilter({ 
  levelList
}: UseProblemLevelFilterProps): UseProblemLevelFilterReturn {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [tempSelectedLevels, setTempSelectedLevels] = useState<number[]>(levelList)

  // levelList props가 변경될 때 tempSelectedLevels 동기화
  useEffect(() => {
    setTempSelectedLevels(levelList)
  }, [levelList])

  // 팝오버가 열릴 때 현재 선택된 값들로 초기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempSelectedLevels([...levelList])
    }
    setIsOpen(open)
  }

  const handleChipClick = (levelValue: number) => {
    setTempSelectedLevels(prev => {
      if (prev.includes(levelValue)) {
        return prev.filter(l => l !== levelValue)
      } else {
        return [...prev, levelValue]
      }
    })
  }

  const handleConfirm = () => {
    // 기존 searchParams 유지하면서 levelList만 업데이트
    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    
    if (tempSelectedLevels.length > 0) {
      newSearchParams.set('levelList', tempSelectedLevels.join(','))
    } else {
      newSearchParams.delete('levelList')
    }
    
    // Next.js router를 사용하여 페이지 이동
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempSelectedLevels([...levelList])
    setIsOpen(false)
  }

  const selectedCount = levelList.length
  const buttonText = selectedCount > 0 
    ? "난이도"
    : "난이도"

  return {
    isOpen,
    tempSelectedLevels,
    selectedCount,
    buttonText,
    handleOpenChange,
    handleChipClick,
    handleConfirm,
    handleCancel,
  }
}