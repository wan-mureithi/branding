'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../../components/footer'
import Topbar from '../../components/topbar'
import ProgramsGallery from '../../components/programs-gallery'
import Testimonials from '../../components/testimonials'
import Difference from '../../components/difference'
import SectionHeading from '../../components/ui/section-heading'

function Page() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }
  return (
    <main className="min-h-screen bg-black text-white">
      <Topbar />
      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="container mx-auto px-4 py-24 text-center relative"
      >
        {/* Floating Stars */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="absolute left-10 top-10 hidden md:block"
        >
          <Image src="/icons/star.svg" alt="Star Icon" width={30} height={30} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="absolute right-10 top-20 hidden md:block"
        >
          <Image src="/icons/star.svg" alt="Star Icon" width={24} height={24} />
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          className="mb-8 mx-auto flex max-w-4xl flex-col items-center justify-center"
        >
          {/* <Image
            src="/icons/star.svg"
            alt=""
            width={24}
            height={24}
            className="inline-block ml-2 w-6 h-6 md:w-8 md:h-8"
          /> */}
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Let’s Build a Future Where{' '}
            <span className="relative inline-block">
              Technology Connects Us
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 -z-10 bg-pink-600 -skew-y-2 origin-left"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-6 max-w-3xl text-lg text-white md:text-xl"
        >
          In a fast-moving digital world, technology should empower and uplift.
          Let's create tools, platforms, and spaces that foster deeper human
          connection, inclusivity, and purpose.
        </motion.p>
      </motion.section>
      {/* Impact Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Section Heading */}
        <motion.div
          variants={fadeInUp}
          className="mb-12 flex items-center gap-2"
        >
          <SectionHeading title="Our Impact" />
        </motion.div>

        {/* Image Grid */}
        <div className="mb-12 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="w-full h-auto"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/programs/hero${index}.svg`}
                  alt={`Impact image ${index}`}
                  width={400}
                  height={300}
                  className="h-auto w-full rounded-lg shadow-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Text Content */}
        <motion.div variants={fadeInUp} className="mb-16 max-w-3xl">
          <p className="text-lg text-white">
            Our programs have empowered thousands of young individuals,
            equipping them with the skills and opportunities needed to thrive in
            today’s world . From leadership training to hands-on learning
            experiences, we are committed to ensuring that every person has a
            chance to unlock their full potential. Together, we are building a
            future where young people are leaders, creators, and change-makers.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9E0059] hover:bg-[#6929FF] text-white rounded-full text-primary-foreground shadow px-6 py-2 text-lg">
            Join Us
          </button>
        </motion.div>
      </motion.section>
      <ProgramsGallery />
      <Testimonials />
      <Difference />
      <Footer />
    </main>
  )
}

export default Page
