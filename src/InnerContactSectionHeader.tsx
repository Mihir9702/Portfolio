import React from 'react'

const InnerContactSectionHeader: React.FC = () => {
  return (
    <div className="bg-white p-8">
      <span className="rounded-full bg-blue-50 py-2 px-4 text-xs font-bold uppercase text-slate-400">
        Email
      </span>
      <div className="mt-4 mb-5 flex justify-center">
        <span className="text-3xl font-black leading-tight tracking-tight text-gray-900">
          {'<form>'}
        </span>
      </div>
      <p className="text-md text-center leading-7 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default InnerContactSectionHeader
