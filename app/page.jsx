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
import HeroTest from '../components/hero-test'

function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Topbar />

      <div className="relative w-full h-[calc(100vh-6rem)] overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0 md:block hidden">
          <HeroTest />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"
            style={{
              backgroundImage:
                'linear-gradient(to right, black 45%, rgba(0, 0, 0, 0.6) 55%, transparent 65%)',
            }}
          ></div>
          <div
            className="relative inset-y-0 right-30 w-1/4 z-10"
            style={{
              backgroundImage:
                'linear-gradient(to left, black 90%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.4) 20%, transparent 0%)',
            }}
          ></div>
        </div>

        {/* Content container */}
        <div className="relative z-20 flex flex-col h-full max-w-7xl mx-auto justify-center md:items-start items-center">
          {/* Heading with highlighted text */}
          <motion.h1
            className="text-4xl font-bold text-white mb-6 leading-tight md:text-5xl lg:text-6xl max-w-3xl relative"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <span className="relative inline-block">
              Empowering Yout
              <span className="relative">
                h
                <Image
                  src="/images/three-lines.svg"
                  alt="Decorative lines"
                  width={77}
                  height={90}
                  className="absolute md:-right-6 -right-4 top-1 w-16 h-auto"
                />
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              Building the Future
              <span className="absolute bottom-2 right-0 w-1/2 h-6 bg-[#ff23bd] -z-10"></span>
            </span>
          </motion.h1>

          {/* Paragraph text */}
          <p className="text-white max-w-2xl mb-10 md:text-lg text-md md:text-left text-center">
            Lorem ipsum dolor sit amet consectetur. Adipiscing vulputate vitae
            sit ut feugiat. Potenti sed volutpat arcu eget lorem. Tortor
            dignissim mi nibh in. Eu proin enim eget magna laoreet at magna non.
            Orci varius sed vitae risus dignissim amet et arcu diam. Id sed elit
            felis mattis. Et eleifend diam lorem nunc ultricies. Facilisis sed
            blandit amet ac scelerisque mi blandit. Ut praesent.
          </p>

          {/* Donate button */}
          <div>
            <button className="flex items-center gap-2 px-8 py-3 text-white rounded-full bg-[#9e0059] hover:bg-opacity-90 transition-all">
              <span className="font-medium">Donate</span>
              <GiftIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Decorative elements */}
          {/* Star element (top right) */}
          <div className="absolute top-[70%] left-[36%] md:block hidden">
            <Image
              src="/star-img-2.svg"
              alt="Decorative star"
              width={49}
              height={44}
              className="w-12 h-12 opacity-80"
            />
          </div>

          {/* Smiley face icon */}
          <div className="absolute bottom-20 left-1/4 -translate-x-1/2 md:block hidden">
            <Image
              src="/images/smiley.svg"
              alt="Smiley face"
              width={70}
              height={65}
              className="w-20 h-auto text-white"
            />
          </div>

          {/* Bottom star */}
          <div className="absolute bottom-1 left-[45%] -translate-x-3/4 md:block hidden">
            <Image
              src="/star-img.svg"
              alt="Star"
              width={68}
              height={71}
              className="w-16 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 md:flex justify-center hidden p-6 relative w-full h-full bottom-0">
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