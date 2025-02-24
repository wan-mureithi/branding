import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata = {
  title: 'TYPNI',
  description: 'Empowering Youth, Building the Future',
  icons: { icon: '/Favico.png' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Favicon.png" />
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
