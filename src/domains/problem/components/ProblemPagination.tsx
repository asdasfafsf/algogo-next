'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/Pagination'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/Select'
import { cn } from '@/lib/utils'

interface ProblemPaginationProps {
  totalCount: number
  pageSize: number
  pageNo: number
  className?: string
}

export function ProblemPagination({
  totalCount,
  pageSize,
  pageNo,
  className,
}: ProblemPaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const totalPages = Math.ceil(totalCount / pageSize)

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, pageNo - delta); i <= Math.min(totalPages - 1, pageNo + delta); i++) {
      range.push(i)
    }

    if (pageNo - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (pageNo + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const getMobileVisiblePages = () => {
    const delta = 1
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, pageNo - delta); i <= Math.min(totalPages - 1, pageNo + delta); i++) {
      range.push(i)
    }

    if (pageNo - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (pageNo + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('pageNo', page.toString())
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const handlePageSizeChange = (value: string) => {
    const newPageSize = parseInt(value)
    const params = new URLSearchParams(searchParams.toString())
    params.set('pageSize', newPageSize.toString())
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <div className={cn("relative flex flex-col sm:flex-row items-center justify-center gap-4", className)}>
      <Pagination>
        <PaginationContent className="flex-wrap justify-center">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(pageNo - 1)
              }}
              className={pageNo === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          <div className="hidden sm:contents">
            {getVisiblePages().map((page, index) => (
              <PaginationItem key={index}>
                {page === '...' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(page as number)
                    }}
                    isActive={page === pageNo}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
          </div>

          <div className="sm:hidden flex items-center gap-1">
            {getMobileVisiblePages().map((page, index) => (
              <PaginationItem key={index}>
                {page === '...' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(page as number)
                    }}
                    isActive={page === pageNo}
                    className="min-w-[2.5rem]"
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
          </div>

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(pageNo + 1)
              }}
              className={pageNo === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 order-1 sm:order-2">
        <Select value={pageSize.toString()} onValueChange={handlePageSizeChange}>
          <SelectTrigger className="w-20 sm:w-24 h-9">
            <SelectValue>
              <span className="sm:hidden">{pageSize}</span>
              <span className="hidden sm:inline">{pageSize}개씩</span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10개씩</SelectItem>
            <SelectItem value="20">20개씩</SelectItem>
            <SelectItem value="50">50개씩</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}