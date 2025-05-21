<<<<<<< HEAD
import { useRef, useEffect } from 'react'
import { 
  BoltIcon, 
  ShieldCheckIcon, 
  ChatBubbleBottomCenterTextIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

=======
>>>>>>> b90fe229192e6d6552bcac8e8652a02826418983
const features = [
  {
    name: '快速交易配對',
    description: '平均3秒內完成交易配對，每日處理超過10,000筆交易',
    icon: BoltIcon,
<<<<<<< HEAD
    color: 'from-yellow-400 to-orange-500',
    delay: '0.1s',
=======
>>>>>>> b90fe229192e6d6552bcac8e8652a02826418983
  },
  {
    name: '安全可靠',
    description: '採用先進加密技術，100%資金安全保障，零資安事件紀錄',
    icon: ShieldCheckIcon,
<<<<<<< HEAD
    color: 'from-green-400 to-emerald-500',
    delay: '0.2s',
=======
>>>>>>> b90fe229192e6d6552bcac8e8652a02826418983
  },
  {
    name: '24/7 客戶支援',
    description: '專業客服團隊全天候服務，平均回應時間低於5分鐘',
    icon: ChatBubbleBottomCenterTextIcon,
<<<<<<< HEAD
    color: 'from-blue-400 to-indigo-500',
    delay: '0.3s',
=======
>>>>>>> b90fe229192e6d6552bcac8e8652a02826418983
  },
  {
    name: '多樣化交易選擇',
    description: '支援超過50種加密貨幣交易對，滿足不同投資需求',
    icon: CurrencyDollarIcon,
<<<<<<< HEAD
    color: 'from-purple-400 to-pink-500',
    delay: '0.4s',
  },
]

export default function Features() {
  const featureRefs = useRef([])
  
  useEffect(() => {
    // 簡易的滾動觀察器
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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 py-24 sm:py-32">
      {/* 網格背景 */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}/>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div 
          ref={(el) => (featureRefs.current[0] = el)}
          className="opacity-0 mx-auto max-w-2xl lg:text-center"
          style={{ '--delay': '0s' }}
        >
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 glow-text">
            交易優勢
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl glow-text">
            為什麼選擇 PTCTrade？
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            我們提供最優質的交易體驗，讓您的加密貨幣投資更加輕鬆愉快。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                ref={(el) => (featureRefs.current[index + 1] = el)}
                className="opacity-0 hover-float group relative"
                style={{ '--delay': feature.delay }}
              >
                <div className="relative glassmorphism p-6 h-full">
                  {/* 裝飾性背景元素 */}
                  <div className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full opacity-20 blur-lg group-hover:opacity-40 transition duration-500`}></div>
                  
                  <dt className="flex items-center gap-x-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${feature.color} glow`}>
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-lg font-semibold leading-7 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition duration-300">
                      {feature.name}
                    </span>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <div className="mt-6">
                      <a 
                        href="#" 
                        className="text-sm font-medium text-blue-400 hover:text-purple-400 transition-colors duration-300 group-hover:underline"
                      >
                        了解更多 <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 
=======
  },
] 
>>>>>>> b90fe229192e6d6552bcac8e8652a02826418983
