'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import AutoScrollCarousel from './autoscroll-logos'
import SectionHeading from './ui/section-heading'

function PartnerSection() {
    const partners = [
        {
          name: "Microsoft",
          logo: "/images/partners/Image-3.png",
        },
        {
          name: "NextTech",
          logo: "/images/partners/Image-4.png",
        },
        {
          name: "PointAve",
          logo: "/images/partners/Image-5.png",
        },
        {
          name: "PWC",
          logo: "/images/partners/Image-6.png",
        },
        {
          name: "Bank of America",
          logo: "/images/partners/Image-7.png",
        },
        {
          name: "Spotify",
          logo: "/images/partners/Image-8.png",
        },
        {
          name: "Summit",
          logo: "/images/partners/Image-9.png",
        },
        {
          name: "UNIS",
          logo: "/images/partners/Image-10.png",
        },
        {
          name: "Vietcombank",
          logo: "/images/partners/Image-11.png",
        },
      ]
  return (
    <section className="py-24 bg-gradient-to-br from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading title="Partners and Sponsors" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our Program is backed by the best who Empowering Youth Through Strategic Partnerships and Innovative
            Programs for a Brighter Future.
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sit viverra tristique dolor molestie lectus ac. Adipiscing cras
            lorem at ac. Sed blandit sem magna eget elementum. Morbi lorem turpis viverra felis sed.
          </p>
          <Button className="px-8 py-6 text-lg group">
            Partner with us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="relative z-10 mt-16">
        <AutoScrollCarousel />
      </div>
      </div>
    </section>
  )
}

export default PartnerSection