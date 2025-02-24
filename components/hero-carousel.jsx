"use client";

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '../lib/utils'

const images = [
  '/images/hero.svg',
  '/images/hero.svg',
  '/images/hero.svg',
  '/images/hero.svg',
]

export default function HeroCarousel() {
  // const [emblaRef] = useEmblaCarousel(
  //   { loop: true, align: 'start', containScroll: 'trim' },
  //   [Autoplay({ delay: 3000, stopOnInteraction: true })]
  // )
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-2 h-[55vh] w-full">
        {images.map((src, index) => {
          const isActive = index === selectedIndex

          return (
            <div
              key={index}
              className={cn(
                'relative flex h-[100%] w-96 flex-shrink-0 items-center justify-center rounded-md px-2 py-2 shadow-md transition-all duration-700',
                isActive
                  ? 'scale-110 opacity-100'
                  : 'scale-90 opacity-40 blur-[1px]' // Makes side images more faded
              )}
            >
              <Image
                src={src}
                alt="Hero Image"
                width={300}
                height={200}
                className="object-cover rounded-lg w-96 h-full"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
