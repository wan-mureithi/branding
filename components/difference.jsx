import React from 'react'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { GradientArrowButton } from '../components/ui/gradient-arrow-btn'

function Difference() {
  return (
    <section className='className="bg-black overflow-hidden'>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/difference-bg.png"
              alt=""
              fill
              className="object-cover object-center"
            />
            {/* Gradient Overlay 
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent"></div>
            */}
          </div>

          {/* Content */}
          <div className="relative z-10 md:max-w-[50%] py-16 md:py-24 px-6 md:px-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Ready to make
                  <br />a difference?
                </h2>
              </div>
              <Image
                src="/images/cool-arrow.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 relative left-56"
              />

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-full"
                >
                  Empower Youths ☀️
                </Button>
                <Button
                  variant="secondary"
                  className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-full"
                >
                  Support Young People 🚀
                </Button>
                <Button
                  variant="secondary"
                  className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-full"
                >
                  Make New Friends 👥
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button className=" px-8 py-6 text-lg">Donate</Button>
                <GradientArrowButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Difference