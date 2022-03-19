import React from 'react'
import Heading from './Heading'
import CallToAction from './CallToAction'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between" />
        <div className="m-auto mt-16 text-center">
          <Heading />
          <p className="mt-6 text-2xl font-medium text-gray-300">
            and I am a <em>Web Developer</em>
          </p>
        </div>
        <CallToAction />
        {/* Image */}
      </div>
    </header>
  )
}

export default Header
