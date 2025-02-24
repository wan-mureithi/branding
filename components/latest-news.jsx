import React from 'react'
import Link from 'next/link'
import { User, CalendarDays } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import SectionHeading from '../components/ui/section-heading'
import { Card, CardContent } from '../components/ui/card'

function LatestNews() {
  const articles = [
    {
      image: '/images/article1.png',
      author: 'Ann Njeri',
      date: '20 Feb 2025',
      title: 'Charity, Expectations vs. Reality',
      description:
        'Lorem ipsum dolor sit amet consectetur. Libero nisi faucibus convallis morbi enim tortor condimentum a. Non vitae sed sed mauris vulputate adipiscing facilisi dui...',
    },
    {
      image: '/images/article2.png',
      author: 'Peter Kamau',
      date: '20 Feb 2025',
      title: 'Charity, Expectations vs. Reality',
      description:
        'Lorem ipsum dolor sit amet consectetur. Libero nisi faucibus...',
    },
    {
      image: '/images/article2.png',
      author: 'Peter Kamau',
      date: '20 Feb 2025',
      title: 'Charity, Expectations vs. Reality',
      description:
        'Lorem ipsum dolor sit amet consectetur. Libero nisi faucibus...',
    },
  ]
  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionHeading title="Latest news" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Articles you may read
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Featured Article */}
          <Card className="bg-white border shadow-lg md:row-span-2">
            <CardContent className="p-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
                <Image
                  src={articles[0].image || '/placeholder.svg'}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {articles[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {articles[0].date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{articles[0].title}</h3>
                <p className="text-gray-600 mb-6">{articles[0].description}</p>
                <Button variant="outline" className="group">
                  Read More
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Articles */}
          <div className="space-y-6">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="bg-white border shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 aspect-[16/10] md:aspect-square">
                      <Image
                        src={article.image || '/placeholder.svg'}
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {article.description}
                      </p>
                      <Button variant="outline" className="group">
                        Read More
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex mt-8 justify-center items-center gap-4">
          <Link href="/programs">
            <Button className="px-8 py-6 text-md">
              View all Programs and Initiatives
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
