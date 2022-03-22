import React from 'react'

const Heading: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl leading-tight">
        <span className="font-semibold">Hello!</span> My name is{' '}
        <span className="name">Mihir Patel</span>
      </h1>
      <p className="mt-6 text-2xl">
        and I am a{' '}
        <em className="rounded-xl border-b-2 border-b-gray-200 text-3xl">
          Full Stack Web Developer
        </em>
      </p>
    </>
  )
}

export default Heading
