import React from 'react'
import ContactSectionHeader from './ContactSectionHeader'
import InnerContactSectionHeader from './InnerContactSectionHeader'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section className="bg-gray-800 py-24 text-center text-white" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactSectionHeader />
        <div className="m-auto mt-16 w-full max-w-4xl space-y-6 text-left text-gray-900 md:flex md:space-x-6 md:space-y-0">
          <div className="mx-auto w-full overflow-hidden rounded-xl">
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
