import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Logo from '@/components/ui/custom/Logo'
import Header from '@/components/ui/custom/Header'
import Footer from '@/components/ui/custom/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center  my-24">
        <div className="flex flex-col items-center text-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* <Logo className="mx-auto w-24 h-24 mb-8" /> */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</p>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button size="lg" className="px-8 py-3 text-lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

