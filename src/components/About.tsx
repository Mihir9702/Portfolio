import React from 'react'
import AboutSection from './AboutSection'
import Code from './Code'
import useInView from 'react-cool-inview'

// TODO | Change this lol
const About: React.FC = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  })

  return (
    <section className="bg-gray-50 py-24 text-gray-900">
      <div
        ref={observe}
        className={`${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-2/4 opacity-0'
        } 
         mx-auto flex flex-col-reverse max-w-5xl md:gap-24 items-center justify-center px-4 transition-all sm:px-6 md:flex-row md:items-end lg:px-8`}
      >
        <Code />
        <AboutSection />
      </div>
    </section>
  )
}

export default About
