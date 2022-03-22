import React from 'react'

const ContactSectionHeader: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl font-black leading-tight tracking-tight text-white">
        Can I say hi?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-gray-300">
        Yes! The best way to contact me is through
        <strong className="ml-1 border-b-2 border-gray-400 font-semibold leading-8">
          email
        </strong>
        .
      </p>
    </>
  )
}

export default ContactSectionHeader
