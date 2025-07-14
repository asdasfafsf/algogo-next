import type { Meta, StoryObj } from '@storybook/nextjs-vite'
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

const meta: Meta<typeof Pagination> = {
  title: 'UI Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const CleanDesign: Story = {
  render: () => (
    <div className="max-w-6xl mx-auto space-y-16 p-8 bg-gray-50/30">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-slate-900">깔끔한 페이지네이션</h3>
        <p className="text-slate-600">세련되고 깔끔한 한국어 디자인</p>
      </div>
      
      <div className="space-y-12">
        {/* 기본 스타일 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-slate-800">기본 스타일</h4>
            <div className="text-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">20</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="text-sm text-slate-500 mt-4">
                3 / 20 페이지
              </div>
            </div>
          </div>
        </div>

        {/* 정보와 개수 선택 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-200/40">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="text-lg font-medium text-slate-900">문제 목록</h4>
                <p className="text-sm text-slate-600">총 1,234개 문제</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600">페이지당</span>
                <Select>
                  <SelectTrigger className="w-20 h-9">
                    <SelectValue placeholder="20" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20개</SelectItem>
                    <SelectItem value="50">50개</SelectItem>
                    <SelectItem value="100">100개</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                21-40 / 1,234개
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">62</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="text-sm text-slate-600">
                2 / 62 페이지
              </div>
            </div>
          </div>
        </div>

        {/* 컴팩트 스타일 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-slate-800">컴팩트 스타일</h4>
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                총 400개 중 81-100개
              </div>
              <div className="flex items-center gap-4">
                <Pagination>
                  <PaginationContent className="gap-1">
                    <PaginationItem>
                      <PaginationPrevious href="#" className="h-9 px-3 text-sm" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="h-9 w-9 text-sm">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive className="h-9 w-9 text-sm">
                        4
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="h-9 w-9 text-sm">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" className="h-9 px-3 text-sm" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">개수</span>
                  <Select>
                    <SelectTrigger className="w-20 h-9">
                      <SelectValue placeholder="20" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20개</SelectItem>
                      <SelectItem value="50">50개</SelectItem>
                      <SelectItem value="100">100개</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 심플 스타일 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-slate-800">심플 스타일</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">7</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        8
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">9</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>141-160개 표시</span>
                <div className="flex items-center gap-4">
                  <span>8 / 25 페이지</span>
                  <div className="flex items-center gap-2">
                    <span>표시 개수</span>
                    <Select>
                      <SelectTrigger className="w-24 h-8 text-xs">
                        <SelectValue placeholder="20개" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">20개</SelectItem>
                        <SelectItem value="50">50개</SelectItem>
                        <SelectItem value="100">100개</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 최소 스타일 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-slate-800">최소 스타일</h4>
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                총 1,234개
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <button className="h-9 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    ← 이전
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="h-9 w-9 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">1</button>
                    <button className="h-9 w-9 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">2</button>
                    <button className="h-9 w-9 text-sm font-medium bg-slate-900 text-white rounded-xl shadow-sm">3</button>
                    <button className="h-9 w-9 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">4</button>
                    <button className="h-9 w-9 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">5</button>
                  </div>
                  <button className="h-9 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    다음 →
                  </button>
                </div>
                <Select>
                  <SelectTrigger className="w-20 h-9">
                    <SelectValue placeholder="20" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20개</SelectItem>
                    <SelectItem value="50">50개</SelectItem>
                    <SelectItem value="100">100개</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const ProblemPagination: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-slate-50/30">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-slate-900">문제 페이지 전용 페이지네이션</h3>
        <p className="text-slate-600">개수 선택 기능이 포함된 깔끔한 디자인</p>
      </div>
      
      <div className="space-y-8">
        {/* 헤더형 레이아웃 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden">
          <div className="bg-slate-50/70 px-6 py-4 border-b border-slate-200/50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="text-lg font-semibold text-slate-900">알고리즘 문제</h4>
                <p className="text-sm text-slate-600">총 2,847개 문제</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-700">페이지당</span>
                <Select>
                  <SelectTrigger className="w-24 h-9 bg-white">
                    <SelectValue placeholder="20개" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20개</SelectItem>
                    <SelectItem value="50">50개</SelectItem>
                    <SelectItem value="100">100개</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                41-60 / 2,847개 문제
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >143</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="text-sm text-slate-600">
                3 / 143 페이지
              </div>
            </div>
          </div>
        </div>

        {/* 인라인 레이아웃 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-slate-900">문제 목록</h4>
              <div className="flex items-center gap-4">
                <div className="text-sm text-slate-600">
                  총 1,234개
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-700">개수</span>
                  <Select>
                    <SelectTrigger className="w-20 h-9">
                      <SelectValue placeholder="50" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20개</SelectItem>
                      <SelectItem value="50">50개</SelectItem>
                      <SelectItem value="100">100개</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >6</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >25</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="text-center text-sm text-slate-600">
              201-250 / 1,234개 표시 중
            </div>
          </div>
        </div>

        {/* 하단 고정형 레이아웃 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-slate-900">고정형 레이아웃</h4>
              <div className="text-sm text-slate-600">
                총 3,492개 문제
              </div>
            </div>
            <div className="min-h-[200px] bg-slate-50/50 rounded-lg flex items-center justify-center text-slate-400">
              문제 목록 영역
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-700">보기</span>
                <Select>
                  <SelectTrigger className="w-20 h-9">
                    <SelectValue placeholder="20" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20개</SelectItem>
                    <SelectItem value="50">50개</SelectItem>
                    <SelectItem value="100">100개</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-sm text-slate-600">
                  1-20 / 3,492개
                </div>
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >175</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="text-sm text-slate-600">
                1 / 175 페이지
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const currentPage = 5
    const totalPages = 20

    return (
      <div className="space-y-4">
        <div className="text-sm text-slate-600 text-center">
          {currentPage} / {totalPages} 페이지
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  alert(`이전 페이지 (${currentPage - 1})로 이동`)
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            <PaginationItem>
              <PaginationLink 
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert('1페이지로 이동')
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            
            {currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            
            {currentPage > 2 && (
              <PaginationItem>
                <PaginationLink 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    alert(`${currentPage - 1}페이지로 이동`)
                  }}
                >
                  {currentPage - 1}
                </PaginationLink>
              </PaginationItem>
            )}
            
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            
            {currentPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationLink 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    alert(`${currentPage + 1}페이지로 이동`)
                  }}
                >
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>
            )}
            
            {currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            
            <PaginationItem>
              <PaginationLink 
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert(`${totalPages}페이지로 이동`)
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  alert(`다음 페이지 (${currentPage + 1})로 이동`)
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    )
  },
}