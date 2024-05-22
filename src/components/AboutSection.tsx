import React from 'react'

const AboutSection = () => {
  return (
    <div className="flex flex-col items-start text-center">
      <h1 className="mt-12 text-4xl font-black leading-tight tracking-tight text-gray-900">
        Who am I?
      </h1>
      <h2 className="mt-6 whitespace-nowrap max-w-3xl text-md md:mx-0 mx-auto md:text-xl leading-8 text-gray-600">
        {'>'} Developing apps since 2020 (5 years now)
      </h2>
      <h2 className="mt-6 whitespace-nowrap max-w-3xl text-md md:mx-0 mx-auto md:text-xl leading-8 text-gray-500">
        {'>'} Full Stack Web & Mobile Development
      </h2>
      <h2 className="mt-6 whitespace-nowrap max-w-3xl text-md md:mx-0 mx-auto md:text-xl leading-8 text-gray-500">
        {'>'} I am always testing my limits
      </h2>
    </div>
  )
}

export default AboutSection
