import Image from 'next/image'
import SectionHeading from './ui/section-heading'


function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F9F5] text-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeading title="Testimonials" />
          <h2 className="text-2xl md:text-4xl font-bold max-w-2xl mx-auto">
            Here's What People Are Saying About Our Programmes and Initiatives
          </h2>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {/* First Column */}
            <div className="space-y-8 md:pl-20">
              {[1, 2].map((index) => (
                <div key={index} className="w-full">
                  <Image
                    src={`/images/programs/testimonial-${index}.png`}
                    alt={`Testimonial ${index}`}
                    width={400}
                    height={300}
                    className="w-[400px] h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            {/* Second Column (Overlapping) */}
            <div className="space-y-8 md:-ml-24 md:mt-16 md:pl-20">
              {[3, 4].map((index) => (
                <div key={index} className="w-full">
                  <Image
                    src={`/images/programs/testimonial-${index}.png`}
                    alt={`Testimonial ${index}`}
                    width={400}
                    height={300}
                    className="w-[400px] h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials