import React from 'react'

const AboutSection = () => {
  return (
    <div className="flex flex-grow flex-col items-start text-center">
      <h1 className="mt-12 text-4xl font-black leading-tight tracking-tight text-gray-900">
        Who am I?
      </h1>
      <h2 className="mt-6 whitespace-nowrap max-w-3xl text-xl leading-8 text-gray-600">
        {'>'} Developing apps since 2020 (5 years now)
      </h2>
      <h2 className="mt-6 whitespace-nowrap max-w-3xl text-xl leading-8 text-gray-500">
        {'>'} Language Agnostic but I love React / TypeScript
      </h2>
      <h2 className="mt-6 whitespace-nowrap max-w-3xl text-xl leading-8 text-gray-500">
        {'>'} I love to test my limits
      </h2>
    </div>
  )
}

export default AboutSection
