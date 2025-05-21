import { useEffect, useState } from 'react'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // 自定義游標效果
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = () => {
      setIsHovering(true)
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    // 為所有可點擊元素添加懸停狀態
    const clickableElements = document.querySelectorAll('a, button, [role="button"]')
    clickableElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver)
      el.addEventListener('mouseout', handleMouseOut)
    })

    window.addEventListener('mousemove', updateCursorPosition)

    // 添加深色模式支持
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      clickableElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver)
        el.removeEventListener('mouseout', handleMouseOut)
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>PTCTrade | 新一代加密貨幣交易平台</title>
        <meta name="description" content="安全、快速、可靠的加密貨幣交易體驗，為您提供最優質的服務。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 自定義游標 */}
      <div 
        className="custom-cursor" 
        style={{ 
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{ 
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          width: isHovering ? '4px' : '8px',
          height: isHovering ? '4px' : '8px',
        }}
      />

      <Component {...pageProps} />
    </>
  )
} 