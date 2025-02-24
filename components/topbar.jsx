'use client'
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, User } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '../components/ui/sheet'
import { Button } from '../components/ui/button'

function Topbar() {
  const pathname = usePathname()
  const router = useRouter()
  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/partners', label: 'Partners' },
  ]
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Image
        src="/typni-logo.svg"
        alt="Logo"
        width={120}
        height={40}
        className="w-24 md:w-32"
      />

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black/95">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-4 mt-8">
            <Link
              href="/"
              className="text-lg text-white hover:text-pink-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-lg text-white hover:text-pink-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-lg text-white hover:text-pink-500 transition-colors"
            >
              Programs
            </Link>
            <a
              href="/partners"
              className="text-lg text-white hover:text-pink-500 transition-colors"
            >
              Partners
            </a>
            <Button
              variant="ghost"
              onClick={() => router.push('/login')}
              className="text-white text-left hover:text-pink-500"
            >
              <User className="w-6 h-6" fill="#ffff" />
              Log In
            </Button>
            <Button
              onClick={() => router.push('/register')}
              className="bg-pink-600 hover:bg-pink-700"
            >
              SIGN UP FOR FREE →
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="hidden md:flex items-center gap-8">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg hover:underline underline-offset-4 hover:text-pink-500 transition-colors ${
              pathname === item.href
                ? 'underline underline-offset-4 text-pink-500'
                : 'text-white '
            }`}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Button
          variant="ghost"
          onClick={() => router.push('/login')}
          className="text-white text-left hover:text-pink-500"
        >
          <User className="w-6 h-6" fill="#ffff" />
          Log In
        </Button>
        <Button
          onClick={() => router.push('/register')}
          className="bg-pink-600 hover:bg-pink-700"
        >
          SIGN UP FOR FREE →
        </Button>
      </nav>
    </header>
  )
}

export default Topbar
