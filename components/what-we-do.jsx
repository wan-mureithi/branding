import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { GradientArrowButton } from './ui/gradient-arrow-btn'
import SectionHeading from './ui/section-heading'

function WhatWeDo() {
  const galleryImages = [
    {
      src: '/images/programs/program1.png',
      alt: 'Large group photo of program participants',
      className: 'w-full md:w-[90%] aspect-[16/9]',
    },
    {
      src: '/images/programs/program2.png',
      alt: 'Outdoor presentation event',
      className: 'w-full md:w-[95%] aspect-[3/4]',
    },
    {
      src: '/images/programs/program3.png',
      alt: 'Check presentation ceremony with balloons',
      className: 'w-full md:w-[95%] aspect-[3/4]',
    },
    {
      src: '/images/programs/program4.png',
      alt: 'Group photo at university entrance',
      className: 'w-full md:w-[95%] aspect-square',
    },
  ]

  return (
    <section className="bg-white py-16 text-black md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <SectionHeading title="What We Do" />

        {/* Main Heading */}
        <h2 className="mb-12 max-w-2xl text-2xl font-bold md:text-4xl">
          Empowering young individuals with the tools, skills, and confidence to
          shape their future and create lasting impact in their communities.
        </h2>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl ${image.className}`}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes={
                  index === 0
                    ? '100vw'
                    : index === 3
                    ? '(max-width: 768px) 100vw, 25vw'
                    : '(max-width: 768px) 100vw, 50vw'
                }
              />
            </div>
          ))}
        </div>

        {/* Content Row */}
        <div className="mt-12 flex w-full items-center gap-4">
          {/* Image on Left */}
          <div className="hidden w-1/2 md:block">
            <Image
              src="/images/yp.png"
              alt="Youth Program"
              width={400}
              height={400}
            />
          </div>

          {/* Text Content on Right */}
          <div className="md:w-1/2">
            <p className="mb-6 text-gray-600">
              Our youth empowerment program is designed to help young
              individuals turn their ambitions into reality. Through hands-on
              training, leadership development, and access to a supportive
              network of mentors and peers, we equip youth with the necessary
              skills to navigate challenges, pursue meaningful careers, and
              contribute positively to society.
            </p>

            <p className="mb-6 text-gray-600">
              Whether it's **entrepreneurship, personal development, or career
              advancement**, we create tailored experiences that foster
              creativity, resilience, and confidence. By bridging the gap
              between education and real-world application, we ensure that young
              people have the opportunities and resources to thrive in an
              ever-evolving landscape.
            </p>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
              <Button className="bg-pink-600 hover:bg-pink-700">Join Us</Button>
              <GradientArrowButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo