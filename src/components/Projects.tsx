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
          <p className="text-md mx-auto w-max border-b-2 border-b-gray-200 py-4 text-gray-400 md:text-xl">
            I&apos;m currently a Frontend Developer at{' '}
            <Link href={'https://bytrellus.com'}>
              <a className="font-semibold text-gray-600 hover:opacity-80">
                Trellus
              </a>
            </Link>
          </p>
          <p className="mx-auto mt-4 w-max text-xs text-gray-400 md:text-xl">
            These are some of my personal projects that I&apos;ve worked on
          </p>
        </div>
        <div className="mt-6 rounded-lg bg-gray-200 p-8 px-12 pb-12 shadow-sm md:w-max">
          <Cards />
        </div>
      </div>
    </section>
  )
}

export default Projects
