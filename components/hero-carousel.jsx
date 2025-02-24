"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
  "/images/hero.svg",
  "/images/programs/program2.png",
  "/images/article2.png",
];

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000 })] // Change image every 5 seconds
  );

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {carouselImages.map((image, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <Image
                src={image}
                alt={`Hero Slide ${index + 1}`}
                width={700}
                height={500}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
