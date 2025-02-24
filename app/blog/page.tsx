import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/button'
import Topbar from '../../components/topbar'
import SectionHeading from '../../components/ui/section-heading'
import { Separator } from '../../components/ui/separator'
import Difference from '../../components/difference'
import Footer from '../../components/footer'

function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Topbar />
      <section className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="relative inline-block mb-2">
                What's new
                {/* <div className="absolute inset-x-0 bottom-0 h-4 bg-pink-600/50 -skew-y-2" /> */}
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Lorem metus dui augue
              vitae eu leo. Sapien in integer sit cras mi quisque bibendum ut.
              Fusce laoreet non.
              <br />
              Lorem ipsum dolor sit amet consectetur. Lorem metus dui augue
              vitae eu leo. Sapien in integer sit cras mi quisque bibendum ut.
              Fusce laoreet non. Lorem ipsum dolor sit amet consectetur. Lorem
              metus dui augue vitae eu leo. Sapien in integer sit cras mi
              quisque bibendum ut. Fusce laoreet non.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9E0059] hover:bg-[#6929FF] text-white rounded-full px-8 py-6 text-lg group">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/blog/hero1.png"
                alt="Group photo of partners"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/images/blog/bg.png")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col text-black items-center justify-center gap-2 mb-8">
            <SectionHeading title="Blogs" />
            <h2 className="text-3xl md:text-4xl font-bold"> Recent Articles</h2>
            <p className="text-gray-600 mt-2">
              Here's what we've been upto recently
            </p>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/blog/article1.png"
                  alt="Partners collaborating"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/blog/article2.png"
                  alt="Group of young professionals"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator />
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col text-black items-center justify-center gap-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">In our news</h2>
            <p className="text-gray-600 mt-2">
              Here's what we've been upto recently
            </p>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/blog/blog1.png"
                  alt="Partners collaborating"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/blog/blog2.png"
                  alt="Group of young professionals"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4 px-4">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-all hover:scale-[1.02]"
                >
                  <Image
                    src={`/images/blog/blog${index + 3}.png`}
                    alt={`Blog ${index + 3}`}
                    width={380}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Difference />
      <Footer />
    </main>
  )
}

export default Page
