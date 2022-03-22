import React from 'react'
import Heading from './Heading'
import background from '../../public/header.svg'
import Image from 'next/image'
import Navbar from '../Navbar'

const Header: React.FC = () => {
  return (
    <>
      <header className="header-home bg-gray-800">
        <div className="min-w-7xl mx-auto flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-300">
            <Heading />
          </div>
          {/* Image */}
        </div>
      </header>
    </>
  )
}

export default Header
