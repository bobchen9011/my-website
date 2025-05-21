<<<<<<< HEAD
import { useRef, useEffect, useState } from 'react'

const stats = [
  { id: 1, name: '活躍用戶', value: '100,000+', color: 'from-blue-400 to-cyan-400', delay: '0.1s' },
  { id: 2, name: '日交易量', value: '$50M+', color: 'from-purple-400 to-pink-400', delay: '0.2s' },
  { id: 3, name: '支援幣種', value: '50+', color: 'from-yellow-400 to-orange-400', delay: '0.3s' },
  { id: 4, name: '用戶滿意度', value: '98%', color: 'from-green-400 to-emerald-400', delay: '0.4s' },
]

// 數字動畫組件
function AnimatedCounter({ value, duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const numericValue = parseInt(value.replace(/[^0-9]/g, '') || 0)
  
  useEffect(() => {
    // 檢查元素是否在視口中
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 元素可見時開始動畫
          let startTime = null
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp + delay
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * numericValue))
            if (progress < 1) requestAnimationFrame(animate)
          }
          
          // 啟動動畫
          setTimeout(() => {
            requestAnimationFrame(animate)
          }, delay)
          
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (countRef.current) {
      observer.observe(countRef.current)
    }
    
    return () => observer.disconnect()
  }, [numericValue, duration, delay])
  
  // 提取數字和尾隨文本
  const numericPart = value.match(/[0-9,]+/)
  const prefix = value.slice(0, (numericPart?.index || 0))
  const suffix = value.slice((numericPart?.index || 0) + (numericPart?.[0].length || 0))
  
  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const statRefs = useRef([])

  useEffect(() => {
    // 滾動觀察器
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    statRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      statRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-24 sm:py-32">
      {/* 波浪背景 */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#4f46e5" fillOpacity="0.3" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#8b5cf6" fillOpacity="0.3" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,90.7C672,64,768,96,864,128C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div 
        ref={sectionRef}
        className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 opacity-0"
      >
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl glow-text">
            平台數據一覽
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            我們的成就不僅僅是數字，而是來自全球用戶的信任與肯定。
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => (statRefs.current[index] = el)}
              className="opacity-0 hover-float"
              style={{ '--delay': stat.delay }}
            >
              <div className="glassmorphism p-8 h-full relative overflow-hidden">
                {/* 裝飾性背景元素 */}
                <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full opacity-20 blur-xl`}></div>
                
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-400">{stat.name}</dt>
                <dd className="mt-3 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 glow-text">
                  <AnimatedCounter value={stat.value} delay={300 * index} />
                </dd>
                
                {/* 裝飾性底部線條 */}
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.color}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
=======
const stats = [
  { id: 1, name: '活躍用戶', value: '100,000+' },
  { id: 2, name: '日交易量', value: '$50M+' },
  { id: 3, name: '支援幣種', value: '50+' },
  { id: 4, name: '用戶滿意度', value: '98%' },
] 
>>>>>>> b90fe229192e6d6552bcac8e8652a02826418983
