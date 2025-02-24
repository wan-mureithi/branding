import { Twitter, Facebook,Instagram } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../components/ui/button'

function Footer() {
    const navigation = {
      main: [
        { name: 'Programs and Initiatives', href: '/programs' },
        { name: 'Partner with us', href: '/partners' },
        { name: 'Log In', href: '/login' },
        { name: 'Blog', href: '/blog' },
      ],
      secondary: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Join Us', href: '/register' },
        { name: 'Start Your Journey', href: '#' },
        { name: 'Donate', href: '/' },
      ],
      legal: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
      social: [
        {
          name: 'Twitter',
          icon: (
            <Image
              src="/icons/twitter.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 md:w-6 md:h-6"
            />
          ),
          href: 'https://x.com/typn_i?lang=en',
        },
        {
          name: 'Facebook',
          icon: (
            <Image
              src="/icons/facebook.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 md:w-6 md:h-6"
            />
          ),
          href: 'https://www.instagram.com/typn_i/',
        },
        {
          name: 'Instagram',
          icon: (
            <Image
              src="/icons/insta.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 md:w-6 md:h-6"
            />
          ),
          href: 'https://www.instagram.com/typn_i/',
        },
      ],
    }
    return (
      <footer className="bg-black text-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="container mx-auto px-4 pb-8 pt-16">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            {/* Logo and Social Links */}
            <div className="space-y-8">
              <Image
                src="/typni-logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="w-24"
              />
              <div className="space-y-4">
                <p className="text-sm">Follow us</p>
                <div className="flex gap-4">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <ul role="list" className="space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6  text-gray-400 hover:text-pink-500 hover:underline underline-offset-4 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul role="list" className="space-y-4">
                  {navigation.secondary.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6  text-gray-400 hover:text-pink-500 hover:underline underline-offset-4 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 xl:mt-0">
              <h3 className="text-xl font-semibold">Still Have Questions?</h3>
              <p className="mt-2 text-sm text-gray-300">Book a call</p>
              <Button className="mt-4 px-8">CONTACT US →</Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-900/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs leading-5 text-gray-400">
                @2025 The Young People's Network
              </p>
              <div className="flex gap-6">
                {navigation.legal.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-xs leading-5 text-gray-400 hover:text-pink-500 hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer