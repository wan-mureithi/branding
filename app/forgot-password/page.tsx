import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Topbar from '../../components/topbar'

function Page() {
  return (
    <main className="min-h-screen bg-[#F5F9F5] text-black">
        <div className='bg-black'>
        <Topbar />
        </div>
      <div className='flex  flex-col justify-center items-center h-[calc(100vh-6rem)] '>
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Image
             src="/typni-logo.svg" alt="Logo"
              width={120}
              height={40}
              priority
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">Forgot Password</h1>
            <p className="text-gray-500">An email with your password reset link will be emailed to you</p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" className="w-full flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
          </div>
          <button className="w-full bg-[#8E2657] hover:bg-[#7D2049] text-white text-sm p-2 rounded-lg">
            SEND RESET LINK
          </button>
          <div className="text-center">
            <Link href="/login" className="text-[#8E2657] hover:text-[#7D2049] text-sm">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
      <footer className="text-sm text-gray-500 mt-8">©2025 TYPNI All Rights Reserved</footer>
      </div>
    </main>
  )
}

export default Page