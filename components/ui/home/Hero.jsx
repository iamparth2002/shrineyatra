'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { slideTexts } from '@/utils/data'

const bannerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
}

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
}


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideTexts.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[620px] overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        <Image
          src="/home-banner.jpg"
          alt="Beautiful cityscape with boats"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </motion.div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="space-y-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={textVariants}
            >
              {slideTexts[currentSlide].heading}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mx-auto"
              variants={textVariants}
            >
              {slideTexts[currentSlide].subheading}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 pb-8"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {slideTexts.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
}