export interface MenuCategory {
  title: string
  href: string
  description: string
  icon: React.ReactNode
  color: string
}

export interface MenuItem {
  title: string
  href: string
  hasDropdown?: boolean
  categories?: MenuCategory[]
}

export interface NavigationConfig {
  items: MenuItem[]
}