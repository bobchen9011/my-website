import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="flex items-center gap-2 mb-8">
            <Image
              src="/logo.png"
              alt="PTCTrade Logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-2xl font-bold">PTCTrade</span>
          </div>
        </div>
      </div>
    </div>
  )
} 