import Link from 'next/link'
import React from 'react'
import useInView from 'react-cool-inview'
import Cards from './Cards'

const Projects: React.FC = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  })

  return (
    <section className="flex justify-center bg-gray-100 py-24 text-gray-900">
      <div className="max-w-8xl px-4 sm:px-6 md:px-8">
        <div
          ref={observe}
          className={`${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-2/4 opacity-0'
          } 
           transition-all`}
        >
          <h2 className="text-center text-4xl font-black leading-tight tracking-tight text-gray-900">
            What does he do?
          </h2>
          <p className="mx-auto mt-4 text-md text-gray-400 md:text-xl md:w-max">
            These are some of the technical projects I have worked on!
          </p>
        </div>
        <Cards />
      </div>
    </section>
  )
}

export default Projects
