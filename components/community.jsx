import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import SectionHeading from './ui/section-heading'
import {Carousel, CarouselContent, CarouselItem} from './ui/carousel'
import { GradientArrowButton } from './ui/gradient-arrow-btn'

function Community() {
  return (
    <section className="bg-black py-24">
        <div className="container mx-auto px-4">
         <div className='flex flex-col items-center justify-center gap-2 mb-8'>
         <SectionHeading title="Our community and netwrok" />
         <h2 className="text-3xl md:text-4xl font-bold text-white">Learn, Connect, and Grow</h2>
         </div>
            </div>
            <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {[1, 2, 3, 4].map((_, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
                <Image
                    src={"/images/about/"+`Frame-${index+1}.png`}
                    alt={`Community member ${index}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <div className="hidden md:flex justify-end gap-2 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div> */}
        </Carousel>
        <div className='flex justify-center items-center gap-4 mt-8'>
            <Button className="px-8 py-6 text-lg">
                Become a member
            </Button>
            <GradientArrowButton/>
        </div>
    </section>
  )
}

export default Community