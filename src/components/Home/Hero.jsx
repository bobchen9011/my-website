import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    
    // 設置畫布大小
    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }
    resize()
    window.addEventListener('resize', resize)

    // 創建粒子
    const particles = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width / dpr,
        y: Math.random() * canvas.height / dpr,
        radius: Math.random() * 2 + 1,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25
      })
    }

    // 動畫循環
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
      
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        
        if (p.x < 0) p.x = canvas.width / dpr
        if (p.x > canvas.width / dpr) p.x = 0
        if (p.y < 0) p.y = canvas.height / dpr
        if (p.y > canvas.height / dpr) p.y = 0
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })
      
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])
  
  return (
    <div className="relative isolate overflow-hidden min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full" 
        style={{ pointerEvents: 'none' }}
      />
      
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-radial from-blue-500/20 blur-3xl opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-radial from-purple-500/20 blur-3xl opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="flex items-center gap-2 mb-8 group hover:transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
              <Image
                src="/logo.png"
                alt="PTCTrade Logo"
                width={40}
                height={40}
                priority
                className="rounded-full bg-black transform transition-transform duration-500 group-hover:rotate-12"
              />
            </div>
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              PTCTrade
            </span>
          </div>
          
          <div className="animate-fade-in-up" style={{ '--delay': '0.2s' }}>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              新一代
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                加密貨幣
              </span>
              交易平台
            </h1>
          </div>
          
          <div className="animate-fade-in-up mt-6" style={{ '--delay': '0.4s' }}>
            <p className="text-xl leading-8 text-gray-300">
              安全、快速、可靠的加密貨幣交易體驗，為您提供最優質的服務。
            </p>
          </div>
          
          <div className="animate-fade-in-up mt-10 flex items-center gap-x-6" style={{ '--delay': '0.6s' }}>
            <a
              href="#"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full group"
            >
              <span className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-lg">開始交易</span>
            </a>
            <a href="#" className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 group">
              了解更多 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>
        </div>
        
        <div className="hidden lg:block lg:flex-1 relative animate-fade-in-up" style={{ '--delay': '0.8s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-3xl"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="crypto-sphere w-64 h-64 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-full"></div>
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="PTCTrade Logo"
                  width={40}
                  height={40}
                  className="animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 