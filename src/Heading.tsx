import React from 'react'

interface HeadingContainerProps {
  text: string
}

const Heading: React.FC = () => {
  return (
    <>
      <HeadingContainer text="Hello" />
      <HeadingContainer text="My name is" />
      <HeadingContainer text="Mihir Patel" />
    </>
  )
}

const HeadingContainer: React.FC<HeadingContainerProps> = ({ text }) => {
  return (
    <h1 className="m-auto mt-6 max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
      {text}
    </h1>
  )
}

export default Heading
