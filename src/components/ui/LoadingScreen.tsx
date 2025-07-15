interface LoadingScreenProps {
  title?: string
  description?: string
  loadingMessage?: string
}

export default function LoadingScreen({ 
  title = "로딩 중",
  description = "잠시만 기다려주세요",
  loadingMessage = "Loading"
}: LoadingScreenProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative overflow-hidden">
      {/* Subtle grid pattern background - 알고리즘을 연상시키는 그리드 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 text-center px-8">
        {/* AlgoGo-inspired loading animation */}
        <div className="relative mb-10">
          {/* Main logo container with bracket design */}
          <div className="w-32 h-32 mx-auto relative">
            {/* Left Bracket - 코드 블록을 상징 */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-20 border-4 border-r-0 border-gray-300 rounded-l-lg animate-pulse"></div>
            
            {/* Right Bracket */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-20 border-4 border-l-0 border-gray-300 rounded-r-lg animate-pulse"></div>
            
            {/* Center dot - 알고고의 시그니처 공 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full animate-bounce"></div>
            </div>
            
            {/* Loading ring around the logo */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-2 border-t-black border-r-transparent border-b-transparent border-l-transparent animate-spin [animation-duration:1.5s]"></div>
          </div>
        </div>
        
        {/* Text content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
          <p className="text-gray-600 text-base">{description}</p>
          
          {/* Code-style loading indicator */}
          <div className="inline-flex items-center space-x-1 font-mono text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-md">
            <span>{loadingMessage}</span>
            <span className="inline-flex space-x-1">
              <span className="animate-pulse [animation-delay:0s]">.</span>
              <span className="animate-pulse [animation-delay:0.2s]">.</span>
              <span className="animate-pulse [animation-delay:0.4s]">.</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Algorithm-inspired floating elements */}
      <div className="absolute top-20 left-20 text-gray-200 text-6xl font-mono animate-pulse [animation-duration:3s]">{`{`}</div>
      <div className="absolute top-20 right-20 text-gray-200 text-6xl font-mono animate-pulse [animation-duration:3s]">{`}`}</div>
      <div className="absolute bottom-20 left-32 text-gray-200 text-4xl font-mono animate-pulse [animation-duration:2s] [animation-delay:0.5s]">[</div>
      <div className="absolute bottom-20 right-32 text-gray-200 text-4xl font-mono animate-pulse [animation-duration:2s] [animation-delay:0.5s]">]</div>
    </div>
  )
}