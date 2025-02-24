'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../../components/footer'
import Topbar from '../../components/topbar'
import { ArrowRight } from 'lucide-react'
import WhoAreWe from '../../components/who-are-we'
import WhatWeDo from '../../components/what-we-do'
import Community from '../../components/community'
import FAQ from '../../components/faq'

function Page() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }
  return (
    <main className="min-h-screen bg-black text-white">
      <Topbar />
      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="container mx-auto px-4 py-24 text-center"
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Empowering Youth,
          <span className="relative">Inspiring Change</span>
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Lorem ipsum dolor sit amet consectetur. Porttitor risus aenean morbi
          leo dui. Nulla risus urna augue eget cursus pharetra sem volutpat.
        </motion.p>
        <motion.div variants={textVariants}>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9E0059] hover:bg-[#6929FF] text-white rounded-full text-primary-foreground shadow px-6 py-2 text-lg">
            Join Us
          </button>
        </motion.div>
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Data for Stat Boxes */}
          {[
            {
              id: 1,
              title: '87%',
              subtitle: 'Impact Rate',
              image: '/images/about/us-1.png',
            },
            {
              id: 2,
              title: 'LEADERSHIP',
              subtitle: 'One initiative at a time!',
              image: '/images/about/us-2.png',
            },
            {
              id: 3,
              title: 'PERSONAL CHANGE',
              subtitle: 'Transforming lives daily!',
              image: '/images/about/us-3.png',
            },
            {
              id: 4,
              title: '87%',
              subtitle: 'Community Growth',
              image: '/images/about/us-4.png',
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              variants={statVariants}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.subtitle}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-left">
                {item.id === 1 || item.id === 4 ? (
                  <>
                    <h3 className="mb-4 text-4xl font-bold md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-200">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <button className="group border border-input shadow-sm hover:bg-accent hover:text-black rounded-full flex h-auto w-fit items-center bg-transparent text-white">
                      {item.id === 1 ? 'Join Community' : 'Donate Now'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="mb-2 text-lg font-semibold">
                      {item.title}
                    </span>
                    <h3 className="text-xl font-bold">{item.subtitle}</h3>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <WhoAreWe />
      <WhatWeDo />
      <Community />
      <FAQ />
      <Footer />
    </main>
  )
}

export default Page
