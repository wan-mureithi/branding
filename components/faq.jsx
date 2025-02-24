
import { Plus, Minus, ArrowRight } from 'lucide-react'
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion'

import SectionHeading from './ui/section-heading'

function FAQ() {
  const faqs = [
    {
      question: 'What is the application process like?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Fermentum lorem ut fusce et pellentesque lectus id. Metus sit libero duis mauris vel at ut nec gravida.',
    },
    {
      question: 'Are there any job or internship opportunities?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Fermentum lorem ut fusce et pellentesque lectus id. Metus sit libero duis mauris vel at ut nec gravida. Nibh donec egestas non diam pretium pharetra. Accumsan eget pharetra pretium amet in accumsan malesuada nec consequat. Condimentum ut pellentesque in porttitor. Odio laoreet tincidunt velit ut. Aliquam rutrum sed in tincidunt vestibulum elementum id. Amet.',
    },
    {
      question: 'Where can I follow updates about the initiative?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Fermentum lorem ut fusce et pellentesque lectus id. Metus sit libero duis mauris vel at ut nec gravida.',
    },
    {
      question: 'Is there a membership fee?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Fermentum lorem ut fusce et pellentesque lectus id. Metus sit libero duis mauris vel at ut nec gravida.',
    },
    {
      question: 'Do I need any qualifications to join?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Fermentum lorem ut fusce et pellentesque lectus id. Metus sit libero duis mauris vel at ut nec gravida.',
    },
    {
      question: 'What kind of events do you organize?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Fermentum lorem ut fusce et pellentesque lectus id. Metus sit libero duis mauris vel at ut nec gravida.',
    },
    {
      question: 'Do you offer mentorship programs?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Fermentum lorem ut fusce et pellentesque lectus id. Metus sit libero duis mauris vel at ut nec gravida.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 text-black">
          <div className="flex items-center justify-center gap-2 mb-6">
            <SectionHeading title="FAQS" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 pb-6"
              >
                <AccordionTrigger className="flex items-center justify-between w-full text-left">
                  <div className="flex gap-8 items-center">
                    <span className="text-gray-400 text-sm">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-xl font-semibold text-black">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-16">
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl mb-6">Still have questions?</p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9E0059] hover:bg-[#6929FF] text-white rounded-full text-primary-foreground shadow px-6 py-2 text-lg">
            Reach out to us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ