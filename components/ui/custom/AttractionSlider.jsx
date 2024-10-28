"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import AttractionCard from "./AttractionCard"


export default function AttractionSlider({ options, attractions }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    align: "start",
    loop: true,
    dragFree: true,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = React.useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = React.useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="relative mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {attractions.map((attraction, subIndex) => (
            <div key={subIndex} className="flex-[0_0_360px] mr-4">
              <AttractionCard
                data={attraction}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile layout */}
      <div className="flex justify-between items-center mt-4 md:hidden">
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="icon"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 rounded-full mx-1 p-0 ${
                index === selectedIndex ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Desktop layout */}
      <div className="hidden md:block">
        <Button
          variant="default"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="flex justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 rounded-full mx-1 p-0 ${
                index === selectedIndex ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}