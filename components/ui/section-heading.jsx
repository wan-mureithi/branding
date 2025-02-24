import React from 'react'
import Image from 'next/image'

function SectionHeading({title}) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Image src="/gradient-star.png" alt="icon" width={20} height={20} />
      <span className="uppercase text-sm font-medium">{title}</span>
    </div>
  )
}

export default SectionHeading
