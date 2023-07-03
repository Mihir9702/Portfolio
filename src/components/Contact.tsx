import React from 'react'
import ContactSectionHeader from './ContactSectionHeader'
import InnerContactSectionHeader from './InnerContactSectionHeader'
import ContactForm from './ContactForm'
import useInView from 'react-cool-inview'

const Contact = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  })
  return (
    <section className="bg-gray-800 py-24 text-center text-white" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactSectionHeader />
        <div className="m-auto mt-16 w-full max-w-4xl space-y-6 text-left text-gray-900 md:flex md:space-x-6 md:space-y-0">
          <div
            ref={observe}
            className={`${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-1/4 opacity-0'
            } mx-auto w-full overflow-hidden rounded-xl transition-all`}
          >
            <InnerContactSectionHeader />
            <div className="bg-gray-100 p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
