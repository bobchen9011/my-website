import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('bg-grid');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* 導航欄 */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="relative w-10 h-10 animate-spin-slow">
                <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
              </div>
              <span className="ml-3 text-2xl font-bold neon-text">PTCTrade</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-3d">登入</button>
              <button className="neo-brutalism neo-brutalism-hover px-4 py-2">註冊</button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="pt-20">
        {/* Hero 區塊 */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-gradient">新一代</span>
                  <br />
                  加密貨幣交易平台
                </h1>
                <p className="text-xl text-gray-300">
                  安全、快速、可靠的加密貨幣交易體驗，
                  <br />
                  為您提供最優質的服務。
                </p>
                <div className="flex space-x-4">
                  <button className="btn-3d">開始交易</button>
                  <button className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-all duration-300">
                    了解更多
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="gradient-border p-1 rounded-2xl">
                  <div className="glass-card p-8 rounded-xl">
                    <div className="aspect-square relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-green-500 rounded-xl animate-pulse-slow"></div>
                      <div className="absolute inset-4 bg-gray-900 rounded-lg flex items-center justify-center">
                        <div className="text-4xl font-bold text-gradient">$BTC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 特色區塊 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '安全可靠',
                  description: '採用最先進的加密技術，確保您的資產安全。',
                  icon: '🔒'
                },
                {
                  title: '快速交易',
                  description: '毫秒級交易速度，讓您把握每個市場機會。',
                  icon: '⚡'
                },
                {
                  title: '專業服務',
                  description: '24/7 專業客服團隊，隨時為您解答問題。',
                  icon: '👨‍💼'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="neo-brutalism p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 