'use client'

import { motion } from 'framer-motion'
import { Separator } from '../components/ui/separator'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { GradientArrowButton } from '../components/ui/gradient-arrow-btn'
import SectionHeading from './ui/section-heading'

function WhyWeDoThis() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  }

  const hoverEffect = {
    scale: 1.05,
    brightness: 1.2,
  }
  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-6">
            <SectionHeading title="Why we do this" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold max-w-3xl mb-4">
            Empowering youths to lead, innovate, and create a better future
            through community and action
          </h2>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/2">
              <Image
                src="/images/why-top1.png"
                alt=""
                width={560}
                height={250}
                className="rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/why-top2.png"
                alt=""
                width={700}
                height={450}
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="hidden md:flex w-1/2 mx-auto  justify-center">
              <Image
                src="/images/post-it.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <br />
            <div className="md:w-1/2 text-left mt-2">
              <Separator className="my-2" />
              <p className="text-lg font-medium mb-2">Empowering</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Vitae arcu turpis
                dignissim nunc elit turpis est nibh faucibus. Quis justo
                facilisi purus sapien fringilla enim et id magna. Quis placerat
                ac viverra venenatis. Mattis quis fringilla consequat placerat
                aliquam magna morbi. Scelerisque lectus vestibulum orci eget
                tellus convallis pretium at. Massa duis tincidunt in egestas
                eget. Amet etiam erat lorem aliquam pellentesque massa egestas.
                Odio quam aliquet habitasse in amet volutpat accumsan. Amet nec
                vitae egestas sed rutrum ut. Nibh posuere odio in mauris montes
                ultrices fermentum aliquam tincidunt.
              </p>
              <Separator className="my-2" />
              <p className="text-lg font-medium mb-2">Innovating</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Vitae arcu turpis
                dignissim nunc elit turpis est nibh faucibus. Quis justo
                facilisi purus sapien fringilla enim et id magna. Quis placerat
                ac viverra venenatis. Mattis quis fringilla consequat placerat
                aliquam magna morbi. Scelerisque lectus vestibulum orci eget
                tellus convallis pretium at. Massa duis tincidunt in egestas
                eget. Amet etiam erat lorem aliquam pellentesque massa egestas.
                Odio quam aliquet habitasse in amet volutpat accumsan. Amet nec
                vitae egestas sed rutrum ut. Nibh posuere odio in mauris montes
                ultrices fermentum aliquam tincidunt.
              </p>
            </div>
          </div>
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="aspect-[5/6] relative">
              <Image
                src="/images/why1.png"
                alt="Why image 1"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="aspect-[5/6] relative">
              <Image
                src="/images/why2.png"
                alt="Why image 2"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="aspect-[5/6] relative">
              <Image
                src="/images/why3.png"
                alt="Why image 3"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div> */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                variants={imageVariants}
                whileHover={{ scale: hoverEffect.scale }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative aspect-[5/6] overflow-hidden rounded-lg"
              >
                <Image
                  src={`/images/why${num}.png`}
                  alt={`Why image ${num}`}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </motion.div>
          <br />
          <div className="flex justify-center items-center gap-4">
            <Button className="px-8 py-6 text-lg">Start your journey</Button>
            <GradientArrowButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeDoThis
