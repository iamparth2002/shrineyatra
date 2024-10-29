'use client'

import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'
import { reviews } from '@/utils/data'

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}




export default function SpiritualReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Spiritual Journeys: Pilgrim Experiences</h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="bg-white shadow-lg rounded-lg p-8 mx-4">
                  <div className="flex flex-col items-center">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-4 border-4 border-primary"
                    />
                    <h3 className="text-2xl font-semibold mb-2">{review.name}</h3>
                    <StarRating rating={review.rating} />
                    <p className="text-center mt-4 text-gray-600 italic">"{review.description}"</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>{review.location}</p>
                      <p>{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
            !canScrollPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
            !canScrollNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6 text-primary-600" />
        </button>
      </div>
      <div className="flex justify-center mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-primary w-4' : 'bg-gray-300'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}