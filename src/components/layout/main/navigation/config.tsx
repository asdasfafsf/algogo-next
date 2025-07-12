import { NavigationConfig } from './types'

export const navigationConfig: NavigationConfig = {
  items: [
    {
      title: '문제',
      href: '/problems',
      hasDropdown: true,
      categories: [
        {
          title: '전체 문제',
          href: '/problems',
          description: '모든 알고리즘 문제',
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          color: 'from-blue-500 to-blue-600'
        },
        {
          title: '오늘의 문제',
          href: '/problems/today',
          description: '매일 새로운 도전',
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
          color: 'from-green-500 to-green-600'
        }
      ]
    },
    // {
    //   title: '연습',
    //   href: '/practice'
    // },
    // {
    //   title: '학습',
    //   href: '/learning'
    // }
  ]
}

export const subCategories = [
  // { title: '알고리즘', href: '/problems/algorithm', color: 'bg-purple-500' },
  // { title: '자료구조', href: '/problems/data-structure', color: 'bg-orange-500' },
  // { title: 'SQL', href: '/problems/sql', color: 'bg-red-500' },
  // { title: '코딩테스트', href: '/problems/coding-test', color: 'bg-blue-500' }
]