import React from 'react'

interface Props {
  type: string
  name: string
}

const FormInput: React.FC<Props> = ({ type, name }) => {
  return (
    <>
      <label className="mb-3 block font-medium text-gray-600" htmlFor={name}>
        {name.charAt(0).toUpperCase()}
        {name.slice(1)}:
      </label>
      <input
        className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-md outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type={type}
        name={name}
      />
    </>
  )
}

export default FormInput
