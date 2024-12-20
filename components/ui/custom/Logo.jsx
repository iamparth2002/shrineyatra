import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 cursor-pointer">
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full">
        <Image
          src="/logo.png"
          alt="Kailash Mansarovar Yatra Logo"
          height={100}
          width={100}
          objectFit="contain"
          className='rounded-full'
        />
      </div>
      <div className="flex flex-col border-l-2 border-gray-300 pl-2">
        <span className="text-lg sm:text-xl font-bold text-black">The Kailash Yatra</span>
        <span className="text-sm sm:text-base font-medium text-primary">द कैलाश यात्रा</span>
      </div>
    </Link>
  )
}

export default Logo