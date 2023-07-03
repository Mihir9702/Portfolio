import React from 'react'
import useInView from 'react-cool-inview'

const ContactSectionHeader: React.FC = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  })
  return (
    <div
      ref={observe}
      className={`${inView ? 'opacity-100' : 'opacity-0'} transition-all`}
    >
      <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-gray-300">
        The best way to contact me is through
        <strong className="ml-1 border-b-2 border-gray-400 font-semibold leading-8">
          email
        </strong>
        .
      </p>
    </div>
  )
}

export default ContactSectionHeader
