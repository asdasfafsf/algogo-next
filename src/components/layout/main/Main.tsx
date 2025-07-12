export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
      {children}
    </div>
  </main>
  )
}