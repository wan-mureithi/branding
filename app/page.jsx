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

function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Topbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className=" space-y-6">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.8,
              }}
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
                  className="absolute -bottom-1 right-0  md:-bottom-2 z-[-1]"
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
              Lorem ipsum dolor sit amet consectetur. Adipiscing vulputate nisi
              sit ut tempor. Phasellus sed blandit amet sed tortor. Sit nec
              placerat in nam in. Est purus enim eget magna lacinia at mauris
              non.
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
            <div className="w-full flex justify-end">
              <Image
                src="/star-img-2.svg"
                alt=""
                width={64}
                height={64}
                className="w-12 h-12"
              />
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-square">
            <Image
              src="/images/hero.svg"
              alt="Youth empowerment activities"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-16 md:mt-24 p-6 md:p-8 bg-zinc-900/50 rounded-xl backdrop-blur">
          <p className="text-sm text-center mb-6">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image
              src="/images/tech-crunch.png"
              alt="TechCrunch"
              width={150}
              height={30}
            />
            <Image
              src="/images/forbes.png"
              alt="Forbes"
              width={120}
              height={30}
            />
            <Image
              src="/images/bloomberg.png"
              alt="Bloomberg"
              width={150}
              height={30}
            />
          </div>
          <p className="text-center mt-6 text-lg italic">
            "The power of youths is the common wealth for the entire world."
          </p>
        </div>
      </section>

      <WhatWeDo />

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="PARTNERS AND SPONSORS" />
          <h2 className="text-2xl md:text-4xl font-bold max-w-2xl mb-6">
            Our Program is backed by the best who Empowering Youth Through
            Strategic Partnerships and Innovative Programs for a Brighter
            Future.
          </h2>
          <p className="text-gray-300 max-w-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur. Sit viverra tristique dolor
            molestie lectus ac. Adipiscing cras lorem at ac. Sed blandit sem
            magna eget elementum. Morbi lorem turpis viverra felis sed. Amet
            massa venenatis nisi in massa scelerisque scelerisque turpis.
          </p>
          <Button className="bg-pink-600 hover:bg-pink-700">
            Partner with us
          </Button>
        </div>
        <div className="relative z-10 mt-16">
          <AutoScrollCarousel />
        </div>
      </section>
      <WhyWeDoThis />
      <Programs />
      <LatestNews />
      <Difference />
      <Footer />
    </main>
  )
}

export default Page
