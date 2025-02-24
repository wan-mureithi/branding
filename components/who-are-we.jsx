'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from './ui/section-heading'
import { Button } from './ui/button'
import { GradientArrowButton } from './ui/gradient-arrow-btn'
import { Card, CardContent } from './ui/card'

function WhoAreWe() {
  // Animation Variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const staggerVariants = {
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const imageHoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  }
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
      className="bg-[#F5F9F5] py-24 text-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div variants={fadeUpVariants}>
          <SectionHeading title="Who are we" />
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          className="mb-6 max-w-2xl text-2xl font-bold md:text-4xl"
        >
          Unlocking Opportunities, Inspiring Generations
        </motion.h2>

        {/* Content Row */}
        <div className="flex w-full gap-8">
          {/* Left Side */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col justify-between text-left md:w-1/2"
          >
            <div>
              <p>
                We are a community of dreamers, doers, and changemakers who
                believe that young people hold the key to shaping the future.
                Our mission is to unlock opportunities and provide the tools,
                support, and networks that empower youth to create meaningful
                change in their lives and communities. Through skill-building
                programs, mentorship, and access to transformative experiences,
                we help young people develop the confidence and knowledge they
                need to thrive. Whether it's through education,
                entrepreneurship, or leadership initiatives, we are committed to
                creating an environment where ideas are nurtured, talents are
                celebrated, and every individual has the opportunity to reach
                their full potential.
              </p>
              <p className="mt-4">
                By fostering a culture of collaboration, innovation, and
                inclusion, we are not just preparing young people for the
                future—we are helping them build it.
              </p>
            </div>

            <div>
              <div className="flex gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button>Start your journey</Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="hidden w-full justify-end md:flex"
              >
                <Image
                  src="/icons/smiley-black.svg"
                  alt=""
                  width={95}
                  height={70}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="relative md:w-1/2">
            <motion.div whileHover={imageHoverEffect} className="relative">
              <Image
                src="/images/about/about.svg"
                alt="Team photo"
                width={600}
                height={400}
                className="w-full rounded hidden md:block"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 hidden md:block"
            >
              <Image
                src="/icons/yellow-bulb.png"
                alt="bulb"
                width={80}
                height={80}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={staggerVariants}
          className="mt-24 grid gap-8 md:grid-cols-2"
        >
          {/* Our Mission */}
          <motion.div variants={fadeUpVariants}>
            <Card className="border-0 bg-purple-50">
              <CardContent className="p-8">
                <SectionHeading title="Our Mission" />
                <h3 className="mb-4 text-2xl font-bold">
                  Empowering Youth, Creating Change
                </h3>
                <p className="text-gray-600">
                  Our mission is to bridge the gap between ambition and
                  opportunity by equipping young people with the resources,
                  skills, and support systems they need to succeed. We are
                  dedicated to fostering a generation of leaders, innovators,
                  and changemakers who are ready to take on the world’s biggest
                  challenges with confidence and creativity. Through mentorship,
                  career development programs, and access to a dynamic network
                  of professionals and peers, we help young individuals turn
                  their aspirations into reality. Whether they are launching a
                  business, pursuing a career, or leading community-driven
                  projects, we are here to support them every step of the way.
                  We believe that by investing in young people today, we are
                  shaping a brighter and more sustainable tomorrow.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Vision */}
          <motion.div variants={fadeUpVariants}>
            <Card className="border-0 bg-purple-50">
              <CardContent className="p-8">
                <SectionHeading title="Our Vision" />
                <h3 className="mb-4 text-2xl font-bold">
                  A Future Driven by Young Innovators
                </h3>
                <p className="text-gray-600">
                  Our vision is to create a world where every young person has
                  the opportunity, support, and resources to turn their ideas
                  into impactful actions. We imagine a future where youth-led
                  innovation and leadership are at the forefront of solving
                  social, economic, and environmental challenges. We see a world
                  where barriers to success are broken down, where access to
                  education and career opportunities is not limited by
                  background or circumstance, and where young people feel
                  empowered to take ownership of their futures. By fostering a
                  global community of forward-thinkers and problem-solvers, we
                  aim to inspire generations to lead with purpose, act with
                  courage, and contribute to building a world that is more
                  inclusive, diverse, and filled with possibilities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default WhoAreWe
