'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { GiftIcon } from 'lucide-react'
import WhyWeDoThis from '../components/why-we-do-this'
import Programs from '../components/programs'
import SectionHeading from '../components/ui/section-heading'
import LatestNews from '../components/latest-news'
import Difference from '../components/difference'
import Footer from '../components/footer'
import Topbar from '../components/topbar'
import WhatWeDo from '../components/what-we-do'
import AutoScrollCarousel from '../components/autoscroll-logos'
import HeroCarousel from '../components/hero-carousel'

function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Topbar />

      <section className="container mx-auto px-4  ">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 py-12 md:py-24 md:pb-12 ">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="relative text-4xl font-bold leading-tight md:text-6xl"
            >
              Empowering Youth
              <span className="relative inline-block">
                Building the Future
                <Image
                  src="/pink-textbg.png"
                  alt=""
                  width={300}
                  height={100}
                  className="absolute hidden -bottom-1 right-0 md:block md:-bottom-2 z-[-1]"
                />
              </span>
              <Image
                src="/images/three-lines.svg"
                alt=""
                width={24}
                height={24}
                className="absolute top-0 right-0 w-6 h-6 md:w-12 md:h-12"
              />
            </motion.h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl">
              Unlocking opportunities and driving change through youth
              empowerment initiatives. Join us in shaping the future today.
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8">
              Donate
              <GiftIcon className="ml-1" />
            </Button>
            <div className="w-full flex justify-center">
              <Image
                src="/images/smiley.svg"
                alt=""
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <div className="w-full md:flex justify-end hidden">
              <Image
                src="/star-img-2.svg"
                alt=""
                width={64}
                height={64}
                className="w-12 h-12"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block aspect-[4/3] md:aspect-square">
            <HeroCarousel />
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-1 md:flex justify-center hidden p-6 relative w-full h-full bottom-10">
          <Image
            src="/images/about/feature-desktop.svg"
            alt="Youth empowerment activities"
            width={750}
            height={300}
            className=""
          />
        </div>
        {/* Featured Section mobile */}
        <div className="mt-1 md:hidden p-6 relative w-full h-full bottom-10">
          <Image
            src="/images/about/feature-mobile.svg"
            alt="Youth empowerment activities"
            width={650}
            height={200}
            className=""
          />
        </div>
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="PARTNERS AND SPONSORS" />
          <h2 className="text-2xl md:text-4xl font-bold max-w-2xl mb-6">
            Empowering Youth Through Strategic Partnerships and Innovation
          </h2>
          <p className="text-gray-300 max-w-2xl mb-8">
            We collaborate with leading organizations that believe in the power
            of youth and their potential to change the world.
          </p>
          <Button className="bg-pink-600 hover:bg-pink-700">
            Partner with us
          </Button>
        </div>
        <div className="relative z-10 mt-16">
          <AutoScrollCarousel />
        </div>
      </section>

      {/* Other Sections */}
      <WhyWeDoThis />
      <Programs />
      <LatestNews />
      <Difference />
      <Footer />
    </main>
  )
}

export default Page