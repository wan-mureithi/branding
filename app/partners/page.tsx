'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Footer from '../../components/footer'
import Topbar from '../../components/topbar'
import FAQ from '../../components/faq'
import { Button } from '../../components/ui/button'
import PartnerSection from '../../components/partners'

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
        className="container mx-auto px-4 py-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              <span className="relative mb-2 inline-block">
                Driving Youth
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 -z-10 bg-pink-600 -skew-y-2 origin-left"
                />
              </span>
              <br />
              Empowerment Together
            </h1>
            <p className="max-w-xl text-lg ">
              Our mission is to create opportunities for young individuals to
              thrive. Through mentorship, leadership programs, and
              collaborations, we empower the next generation with the tools they
              need to lead, innovate, and inspire.
            </p>
            <motion.div variants={fadeInUp}>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9E0059] hover:bg-[#6929FF] text-white rounded-full group px-8 py-6 text-lg">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeInUp} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/partners/hero1.png"
                alt="Group photo of partners"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="bg-[#F5F9F5] py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* First Image */}
            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-3xl"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/partners/grid1.png"
                  alt="Partners collaborating"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Second Image with Text Overlay */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-3xl"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/partners/grid2.png"
                  alt="Group of young professionals"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="absolute left-8 bottom-8 w-2 h-56 bg-pink-600 rounded-md" />
                <h2 className="ml-4 max-w-md text-3xl font-bold md:text-4xl lg:text-5xl">
                  When we come together, we create opportunities for the next
                  generation to thrive.
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <PartnerSection />
      <FAQ />
      <Footer />
    </main>
  )
}

export default Page
