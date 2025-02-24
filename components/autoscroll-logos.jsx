"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


const logos = [
    "Image-3.png",
    "Image-4.png",
    "Image-5.png",
    "Image-6.png",
    "Image-7.png",
    "Image-8.png",
    "Image-9.png",
    "Image-10.png",
    "Image-11.png",
  ];

export default function AutoScrollCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trim" },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex h-20 w-44 flex-shrink-0 items-center justify-center rounded-md bg-black px-4 py-2 shadow-md"
            >
              <Image src={'/images/partners/'+logo} alt="Partner Logo" width={120} height={40} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
