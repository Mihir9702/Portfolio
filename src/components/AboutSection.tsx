import React from 'react'

const AboutSection = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center text-center">
      <h1 className="mt-12 text-4xl font-black leading-tight tracking-tight text-gray-900">
        Who am I?
      </h1>
      <h2 className="mt-6 max-w-3xl text-xl leading-8 text-gray-600">
        Frontend Developer
      </h2>
      <h2 className="mt-6 max-w-3xl text-xl leading-8 text-gray-500">
        Currently residing in Pennsylvania
      </h2>
      <h2 className="mt-6 max-w-3xl text-xl leading-8 text-gray-500">
        Recently worked as a Frontend Developer @ Trellus
      </h2>
    </div>
  )
}

export default AboutSection
