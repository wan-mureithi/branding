'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import LoginForm from '../../components/login-form'

export default function LoginPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
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
          {/* Logo */}
          <Link href="/" className="mb-12">
            <Image src="/typni-logo.svg" alt="Logo" width={135} height={70} />
          </Link>

          {/* Heading */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="mb-2 text-2xl font-bold">Welcome Back</h1>
            <p className="text-sm text-gray-600">
              Sign in to access exclusive programs, events, and opportunities
              designed to empower young minds.
            </p>
          </motion.div>

          <LoginForm />

          <motion.div variants={fadeInUp} className="mt-8">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#8B1B3F] hover:underline">
                Register
              </Link>
            </p>
            <p className="mt-8 text-center text-xs text-gray-400">
              ©2025 | YPN All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden flex-1 items-center justify-center p-8 md:flex"
      >
        <div className="relative aspect-[4/3] h-[calc(100vh-8rem)] w-full max-w-3xl">
          <Image
            src="/images/auth/auth1.png"
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
