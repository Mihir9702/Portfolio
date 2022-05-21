import React from 'react'
import useInView from 'react-cool-inview'

const Heading: React.FC = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  })
  return (
    <div
      ref={observe}
      className={`${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-2/4 opacity-0'
      } transition-all`}
    >
      <h1 className="none text-5xl leading-tight">
        <span className="font-semibold">Hello!</span> My name is{' '}
        <span className="name">Mihir Patel</span>
      </h1>
      <p className="mt-6 text-2xl">
        and I&apos;m a{' '}
        <em className="rounded-lg border-b-2 border-b-gray-200 text-3xl">
          Frontend Developer
        </em>
      </p>
    </div>
  )
}

export default Heading
