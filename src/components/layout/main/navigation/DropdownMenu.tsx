import Link from 'next/link'
import { MenuItem, MenuCategory } from './types'
import { subCategories } from './config'

interface DropdownMenuProps {
  item: MenuItem
}

export function DropdownMenu({ item }: DropdownMenuProps) {
  if (!item.hasDropdown || !item.categories) return null

  return (
    <div className="absolute left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 backdrop-blur-sm">
        {/* 메인 아이템들 */}
        <div className="px-2">
          {item.categories.map((category: MenuCategory) => (
            <Link 
              key={category.href}
              href={category.href} 
              className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                {category.icon}
              </div>
              <div>
                <div className="font-medium">{category.title}</div>
                <div className="text-xs text-gray-500">{category.description}</div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* 카테고리 섹션 - 카테고리가 있을 때만 표시 */}
        {subCategories.length > 0 && (
          <>
            {/* 구분선 */}
            <div className="border-t border-gray-100 my-2"></div>
            
            <div className="px-2">
              <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">카테고리</div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {subCategories.map((subCategory) => (
                  <Link 
                    key={subCategory.href}
                    href={subCategory.href} 
                    className="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className={`w-2 h-2 ${subCategory.color} rounded-full mr-2`}></span>
                    {subCategory.title}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}