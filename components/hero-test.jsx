
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '../lib/utils'


export default function HeroTest() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", containScroll: "trimSnaps" }, [
        Autoplay({ delay: 5000, stopOnInteraction: false }),
      ])
    
      const [selectedIndex, setSelectedIndex] = useState(0)
    
      const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
      }, [emblaApi])
    
      useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", onSelect)
        return () => emblaApi.off("select", onSelect)
      }, [emblaApi, onSelect])
  
    const images = ["/images/about/hero-1.svg", "/images/about/hero-2.svg", "/images/about/hero-3.svg","/images/about/hero-1.svg", "/images/about/hero-2.svg", "/images/about/hero-3.svg"]
  
    return (
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex gap-2 h-full">
          {images.map((src, index) => {
            const isActive = index === selectedIndex
  
            return (
              <div
                key={index}
                className={cn(
                  "relative top-5 rounded-t-md flex gap-2 pr-2 h-full w-1/4 flex-shrink-0 items-center justify-center transition-all duration-700",
                 // isActive ? "opacity-100" : "opacity-40 -translate-x-1",
                )}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Hero Image ${index + 1}`}
                  fill
                  className="object-cover rounded-t-lg"
                  //priority={index === 0}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  