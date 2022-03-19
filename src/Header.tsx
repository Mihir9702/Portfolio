import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between" />
        <div className="m-auto mt-16 text-center">
          <h1 className="m-auto mt-6 max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Hello!
          </h1>
          <h1 className="m-auto mt-6 max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            My name is
          </h1>
          <h1 className="m-auto mt-6 max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Mihir Patel
          </h1>
          <p className="mt-6 text-2xl font-medium text-gray-300">
            and I am a <em>Web Developer</em>
          </p>
        </div>
        <div className="m-20 text-center">
          <Link href={'/projects'}>
            <a className="inline-block transform rounded-xl bg-gray-900 py-4 px-8 text-xl font-medium shadow-lg transition-all hover:scale-105 hover:no-underline">
              View My Work
            </a>
          </Link>
          <p className="mt-6 text-sm font-medium text-gray-400">
            Take a look at some of my&nbsp;
            <span className="font-bold">personal projects</span> I have built.
          </p>
        </div>
        {/* Image */}
      </div>
    </header>
  )
}

export default Header
