'use client'

import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'

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


const reviews= [
  {
    name: "Rajesh Sharma",
    rating: 5,
    description: "The journey to Kedarnath was truly a life-changing experience. The majestic Himalayas, the challenging trek, and the serene atmosphere around the temple filled me with a sense of peace and spiritual awakening. The early morning aarti at the temple was soul-stirring. Despite the difficult terrain, every step felt like a step closer to divinity. A must-visit for every spiritual seeker.",
    image: "/placeholder.jpg",
    location: "Kedarnath, Uttarakhand",
    date: "Pilgrimage in May 2023"
  },
  {
    name: "Priya Gupta",
    rating: 5,
    description: "Badrinath left me in awe of its divine beauty. The sacred Badrinarayan Temple, nestled in the Garhwal Himalayas, exudes a powerful spiritual energy. The hot springs of Tapt Kund were rejuvenating. Witnessing the evening aarti by the Alaknanda River was a magical experience. The peaceful atmosphere and the kindness of locals made this pilgrimage unforgettable.",
    image: "/placeholder.jpg",
    location: "Badrinath, Uttarakhand",
    date: "Visited in June 2023"
  },
  {
    name: "Amit Patel",
    rating: 4,
    description: "The Amarnath Yatra was an incredible test of faith and endurance. The journey through the stunning landscapes of Kashmir to reach the holy cave was challenging but deeply rewarding. Seeing the natural ice lingam of Lord Shiva was a profound spiritual moment. The camaraderie among fellow pilgrims and the support of the locals and army personnel made the tough journey manageable.",
    image: "/placeholder.jpg",
    location: "Amarnath, Jammu and Kashmir",
    date: "Yatra in July 2023"
  },
  {
    name: "Sunita Reddy",
    rating: 5,
    description: "Attending the Kumbh Mela in Prayagraj was an extraordinary experience. The sheer scale of devotion, with millions of pilgrims gathering for the holy dip at the Sangam, was awe-inspiring. The atmosphere was charged with spiritual energy. From sadhus performing rituals to the colorful processions, every moment felt sacred. It's a celebration of faith that everyone should witness at least once in their lifetime.",
    image: "/placeholder.jpg",
    location: "Kumbh Mela, Prayagraj",
    date: "Attended in February 2024"
  },
  {
    name: "Vikram Malhotra",
    rating: 5,
    description: "The Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath was the most fulfilling journey of my life. Each destination had its unique spiritual significance and natural beauty. The challenging treks, especially to Kedarnath, tested our physical limits but strengthened our spiritual resolve. The darshan at each temple left us feeling blessed and at peace. A must-do for every devotee of Lord Shiva and Vishnu.",
    image: "/placeholder.jpg",
    location: "Char Dham, Uttarakhand",
    date: "Yatra completed in September 2023"
  }
]

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