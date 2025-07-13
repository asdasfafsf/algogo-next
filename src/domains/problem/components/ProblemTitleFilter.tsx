'use client'

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { MaterialInput } from "@/components/ui/MaterialInput"
import { useDebounce } from "@/hooks/useDebounce"

interface ProblemTitleFilterProps {
  title?: string
}

export function ProblemTitleFilter({ title = "" }: ProblemTitleFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [searchValue, setSearchValue] = useState(title)
  const debouncedSearchValue = useDebounce(searchValue, 500)

  useEffect(() => {
    setSearchValue(title)
  }, [title])

  useEffect(() => {
    if (debouncedSearchValue === title) return

    const currentUrl = new URL(window.location.href)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    
    if (debouncedSearchValue.trim()) {
      newSearchParams.set('title', debouncedSearchValue.trim())
    } else {
      newSearchParams.delete('title')
    }
    
    const newUrl = newSearchParams.toString()
      ? `${pathname}?${newSearchParams.toString()}`
      : pathname
    
    router.push(newUrl, { scroll: false })
  }, [debouncedSearchValue, pathname, router, title])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <MaterialInput
      label="검색"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="문제 제목 검색..."
      variant="outlined"
      size="small"
      className="w-full"
    />
  )
}