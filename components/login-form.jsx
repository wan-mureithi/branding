'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
function LoginForm() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }
  return (
    <form className="space-y-6">
      <motion.div variants={fadeInUp} className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          type="email"
          required
          className="w-full border-gray-200 focus:border-[#8B1B3F] focus:ring-[#8B1B3F] transition-all"
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Input
          id="password"
          type="password"
          required
          className="w-full border-gray-200 focus:border-[#8B1B3F] focus:ring-[#8B1B3F] transition-all"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Link
          href="/forgot-password"
          className="block text-sm text-[#8B1B3F] hover:underline"
        >
          Forgot your password?
        </Link>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Button className="w-full bg-[#8B1B3F] text-white py-6 hover:bg-[#7A1835] transition-transform hover:scale-105">
          Sign In
        </Button>
      </motion.div>
    </form>
  )
}

export default LoginForm
