import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

const kailashPoints = [
  {
    title: "Trip To Temples serves the largest number of pilgrims for Kailash Mansarovar Yatra in India",
    description: "Preserving the best interest of the pilgrims made Trip to Temples the top choice for the pilgrims. We have been there in the industry for the past 8 years with an outstanding customer review providing the best packages at the most affordable prices."
  },
  {
    title: "Customer centric approach for Kailash Yatra",
    description: "Trip To Temples started with an exclusive pilgrimage to Kailash Mansarovar & we began with a mantra: \"A satisfied customer is the best business strategy of all\". We serve all our yatris with love & devotion. It's just not a tour package for us, but a responsibility to wave off our pilgrims with happy faces."
  },
  {
    title: "End to End support for Kailash Yatra :",
    description: "To ensure the best interest of our pilgrims we provide end to end support and guidance and probably we are the only company which deploys on ground professional staff just to keep a check that everything goes well. Just to prove our commitment of providing an impeccable experience to our visitors we are trying to get better everyday."
  },
  {
    title: "Experienced and Knowledgeable Guides",
    description: "Our team consists of experienced guides who are well-versed in the spiritual and cultural significance of the Kailash Manasarovar Yatra. They provide invaluable insights and ensure a safe and meaningful journey for all pilgrims."
  },
  {
    title: "Eco-friendly and Responsible Tourism",
    description: "We are committed to preserving the pristine environment of the Kailash region. Our tours follow strict eco-friendly guidelines, minimizing the environmental impact while maximizing the spiritual experience for our pilgrims."
  }
]

export default function Component() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
        Want to know why Trip To Temples is best operator for Kailash Manasarovar Yatra?
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[22px] top-[40px] bottom-10 w-[2px] bg-red-200" />
        
        <div className="space-y-12">
          {kailashPoints.slice(0, showMore ? 5 : 3).map((point, index) => (
            <div key={index} className="relative pl-14">
              <div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 ">
                {point.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-pretty">
                {point.description}
              </p>
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