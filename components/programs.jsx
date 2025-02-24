'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Carousel, CarouselContent } from '../components/ui/carousel'
import { Card, CardContent } from '../components/ui/card'
import { GradientArrowButton } from '../components/ui/gradient-arrow-btn'
import SectionHeading from './ui/section-heading'
import Link from 'next/link'

function Programs() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const programs = [
    {
      image: '/images/program-1.png',
      title: 'The',
      highlightedWord: 'GameOn',
      suffix: 'Program',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vitae neque aliquet tortor aenean non. Feugiat eu vitae mattis volutpat a. Ullamcorper hac vivamus id dui etiam sed turpis. Enim tempus diam sed vitae.',
    },
    {
      image: '/images/program-1.png',
      title: 'Our',
      highlightedWord: 'BeeKeeping',
      suffix: 'Initiative',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vitae neque aliquet tortor aenean non. Feugiat eu vitae mattis volutpat a. Ullamcorper hac vivamus id dui etiam sed turpis. Enim tempus diam sed vitae.',
    },
    {
      image: '/images/program-1.png',
      title: 'The',
      highlightedWord: 'GUA',
      suffix: 'Platform',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vitae neque aliquet tortor aenean non. Feugiat eu vitae mattis volutpat a. Ullamcorper hac vivamus id dui etiam sed turpis. Enim tempus diam sed vitae.',
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header and Navigation */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading title="PROGRAMS AND INITIATIVES" />
          </div>
          <div className="flex justify-between items-start gap-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white max-w-3xl">
              Various programs and initiatives under this umbrella address
              education, employment, entrepreneurship, and leadership
              development.
            </h2>
          </div>
        </div>

        {/* <Carousel>
          <CarouselContent className="flex flex-col md:flex-row md:flex-nowrap">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: hoverEffect.scale }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="sm:basis-full md:basis-1/3 pl-0 md:pl-4"
              >
                <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900 to-black">
       
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={program.image || '/placeholder.svg'}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">
                        {program.title}{' '}
                        <span className="text-pink-500">
                          {program.highlightedWord}
                        </span>{' '}
                        {program.suffix}
                      </h3>
                    </div>
                  </div>

  
                  <div className="p-2 md:p-8">
                    <p className="mb-6 text-gray-400">{program.description}</p>
                    <a
                      href="https://game-on-web.web.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="group">
                        Learn More
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </CarouselContent>
        </Carousel> */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="overflow-hidden border-zinc-800 bg-gradient-to-br from-zinc-900 to-black text-white">
                <div className="relative aspect-video">
                  <Image
                    src={program.image || '/placeholder.svg'}
                    alt={`${program.highlightedWord} program`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold">
                      {program.title}{' '}
                      <span className="text-pink-500">
                        {program.highlightedWord}
                      </span>{' '}
                      {program.suffix}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                  <p className="mb-6 text-gray-400">{program.description}</p>
                  <a
                    href="https://game-on-web.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="group">
                      Learn More
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex mt-8 justify-center items-center gap-4">
          <Link href="/programs">
            <Button className="px-8 py-6 text-lg">
              View all Programs and Initiatives
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Programs
