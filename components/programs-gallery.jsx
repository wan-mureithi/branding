'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import SectionHeading from '../components/ui/section-heading'

function ProgramsGallery() {
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
      image: '/images/programs/gameon.png',
      title: 'The',
      highlightedWord: 'GameOn',
      suffix: 'Program',
      description: `Transforming how young people access sports facilities. This initiative bridges the gap between players and venue owners by providing a seamless platform to discover, book, and connect with others for games.`,
    },
    {
      image: '/images/programs/Image-12.png',
      title: 'The',
      highlightedWord: 'Qrix',
      suffix: 'Platform',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vitae neque aliquet tortor aenean non. Feugiat eu vitae mattis volutpat a. Ullamcorper hac vivamus id dui etiam sed turpis. Enim tempus diam sed vitae.',
    },
    {
      image: '/images/programs/Image-13.png',
      title: 'Our',
      highlightedWord: 'BeeKeeping',
      suffix: 'Initiative',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vitae neque aliquet tortor aenean non. Feugiat eu vitae mattis volutpat a. Ullamcorper hac vivamus id dui etiam sed turpis. Enim tempus diam sed vitae.',
    },
    {
      image: '/images/programs/Image-14.png',
      title: 'Our',
      highlightedWord: 'BeeKeeping',
      suffix: 'Initiative',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vitae neque aliquet tortor aenean non. Feugiat eu vitae mattis volutpat a. Ullamcorper hac vivamus id dui etiam sed turpis. Enim tempus diam sed vitae.',
    },
    {
      image: '/images/programs/Image-12.png',
      title: 'Our',
      highlightedWord: 'BeeKeeping',
      suffix: 'Initiative',
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
  ]

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
      className="container mx-auto px-4 py-16"
    >
      {/* Section Heading */}
      <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-2">
        <SectionHeading title="Explore Our Top Programs" />
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        variants={fadeInUp}
        className="mb-12 text-3xl font-bold md:text-4xl"
      >
        Featured Programs and Initiatives
      </motion.h2>

      {/* Program Cards */}
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
    </motion.section>
  )
}

export default ProgramsGallery
