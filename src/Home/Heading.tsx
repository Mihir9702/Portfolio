import React from 'react'

interface HeadingContainerProps {
  text: string
}

const Heading: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl leading-tight">
        <span className="font-semibold">Hello!</span> My name is{' '}
        <span className="name">Mihir Patel</span>
      </h1>
      <p className="mt-6 text-2xl">
        and I am a <em className="text-3xl">Full Stack Web Developer</em>
      </p>
    </>
  )
}

const HeadingContainer: React.FC<HeadingContainerProps> = ({ text }) => {
  return (
    <h1 className="m-auto mt-6 max-w-2xl whitespace-nowrap text-center text-5xl font-black leading-tight tracking-tight sm:text-6xl">
      {text}
    </h1>
  )
}

export default Heading
