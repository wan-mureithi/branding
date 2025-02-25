'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '../../components/registerform'

const steps = [
  {
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text' },
      { id: 'phone', label: 'Phone Number', type: 'tel' },
      { id: 'email', label: 'What is your email address?', type: 'email' },
    ],
  },
  {
    fields: [
      { id: 'idNumber', label: 'ID Number', type: 'text' },
      { id: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
      {
        id: 'gender',
        label: 'Gender',
        type: 'select',
        options: ['Male', 'Female', 'Other', 'Prefer not to say'],
      },
      { id: 'country', label: 'Country', type: 'text' },
    ],
  },
  {
    fields: [
      {
        id: 'education',
        label: 'What is your highest education level?',
        type: 'select',
        options: ['High School', 'Diploma', "Bachelor's", "Master's", 'PhD'],
      },
      {
        id: 'employed',
        label: 'Are you Employed?',
        type: 'select',
        options: ['Yes', 'No', 'Self-employed', 'Student'],
      },
      { id: 'interests', label: "Let's Pick Your Interests", type: 'text' },
    ],
  },
]
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
function Page() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-1 flex-col p-8 md:p-12 lg:p-16"
      >
        <motion.div
          variants={fadeInUp}
          className="mx-auto flex w-full max-w-md flex-col flex-grow"
        >
          <Link href="/" className="mb-12">
            <Image src="/typni-logo.svg" alt="Logo" width={135} height={70} />
          </Link>
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="mb-2 text-sm text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-full bg-green-500"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInUp} className="flex-grow">
            <div className="mb-8">
              <h1 className="mb-2 text-2xl font-bold">Create Your Account</h1>
              <p className="text-sm text-gray-600">
                Join a network of changemakers, gain access to exclusive
                programs, and start your journey today.
              </p>
            </div>
            <RegisterForm
              currentStep={currentStep}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </motion.div>

          {/* Footer */}
          <motion.div variants={fadeInUp} className="mt-8">
            <p className="text-center text-sm text-gray-600">
              Already registered?{' '}
              <Link href="/login" className="text-[#8B1B3F] hover:underline">
                Sign In
              </Link>
            </p>
            <p className="mt-8 text-center text-xs text-gray-400">
              ©2025 TYPN All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden flex-1 items-center justify-center p-8 md:flex"
      >
        <div className="relative aspect-[3/4] h-[calc(100vh-8rem)] w-full max-w-3xl">
          <Image
            src="/images/auth/auth2.png"
            alt="Testimonial"
            fill
            priority
            //className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </main>
  )
}

export default Page
