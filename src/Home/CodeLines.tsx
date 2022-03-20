import React from 'react'

interface Props {
  number: number
  text: string
  element: string
  renderText?: string
}

const CodeLines: React.FC<Props> = ({ number, text, element, renderText }) => {
  return (
    <div className="whitespace-no-wrap">
      <div className="inline-block text-gray-600">{number}&nbsp;&nbsp;</div>
      <div className="inline-block text-blue-300">
        {number > 1 && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
        {number > 2 && number <= 7 && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
        {'<'}
      </div>
      <div className="inline-block text-red-400">{element}&nbsp;</div>
      <div className="inline-block text-yellow-300">class</div>
      <div className="inline-block text-blue-300">{'="'}</div>
      <div className="inline-block text-green-300">{text}</div>
      <div className="inline-block text-blue-300">{'">'}</div>
      {renderText && (
        <>
          <div className="inline-block text-white">{renderText}</div>
          <div className="inline-block text-blue-300">{'</'}</div>
          <div className="inline-block text-red-400">{element}</div>
          <div className="inline-block text-blue-300">{'>'}</div>
        </>
      )}
    </div>
  )
}

export default CodeLines
