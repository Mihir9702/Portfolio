import React from 'react'
import Heading from './Heading'

const Header: React.FC = () => {
  return (
    <>
      <header className="header-home bg-gray-800">
        <div className="min-w-7xl mx-auto flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-300">
            <Heading />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
