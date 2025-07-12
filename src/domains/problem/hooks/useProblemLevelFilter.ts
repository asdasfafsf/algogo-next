import { useState } from "react"

interface UseProblemLevelFilterProps {
  selectedLevels?: number[]
  onLevelsChange?: (levels: number[]) => void
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
  selectedLevels = [], 
  onLevelsChange 
}: UseProblemLevelFilterProps): UseProblemLevelFilterReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [tempSelectedLevels, setTempSelectedLevels] = useState<number[]>([])

  // 팝오버가 열릴 때 현재 선택된 값들로 초기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempSelectedLevels([...selectedLevels])
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
    onLevelsChange?.(tempSelectedLevels)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempSelectedLevels([...selectedLevels])
    setIsOpen(false)
  }

  const selectedCount = selectedLevels.length
  const buttonText = selectedCount > 0 
    ? `레벨 (${selectedCount}개 선택됨)`
    : "레벨 선택"

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