import React from 'react'

const AboutSection = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center text-center">
      <h1 className="mt-12 text-4xl font-black leading-tight tracking-tight text-gray-900">
        Who is this guy?
      </h1>
      <h2 className="mt-6 max-w-3xl text-xl leading-8 text-gray-600">
        Web Developer - React | TypeScript
      </h2>
      <h2 className="mt-6 max-w-3xl text-xl leading-8 text-gray-500">
        Currently residing in Pennsylvania
      </h2>
      <h2 className="mt-6 max-w-3xl text-xl leading-8 text-gray-500">
        I like coding and building PCs
      </h2>
    </div>
  )
}

export default AboutSection
