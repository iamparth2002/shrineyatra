'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'


export default function Component({ points, title }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-pretty">
        Want to know why the kailash yatra is best operator for {title}?
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[22px] top-[40px] bottom-10 w-[2px] bg-red-200" />

        <div className="space-y-12">
          {points?.slice(0, showMore ? 5 : 3).map((point, index) => (
            <div key={index} className="relative pl-14">
              <div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 ">
                {point?.title}
              </h3>
              <div
                className="text-gray-500 leading-relaxed text-pretty html-content"
                dangerouslySetInnerHTML={{ __html: point?.description }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 pl-14">
          <Button
            className=" text-white px-8 py-2 rounded flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Read More'}
            {showMore ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}