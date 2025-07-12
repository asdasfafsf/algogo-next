import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <Main>
            {children}
        </Main>
      <Footer />
    </div>
  )
}