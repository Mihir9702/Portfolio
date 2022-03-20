import React from 'react'

const ContactSectionHeader: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl font-black leading-tight tracking-tight text-white">
        Want to Contact Me?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-gray-300">
        You can reach out to me through
        <strong className="ml-1 border-b-2 border-gray-400 font-semibold leading-8">
          email
        </strong>
        . You can also call me on
        <strong className="ml-1 border-b-2 border-gray-400 font-semibold leading-10">
          mobile
        </strong>
        .
      </p>
    </>
  )
}

export default ContactSectionHeader
