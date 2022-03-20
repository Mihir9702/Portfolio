import React from 'react'
import Image from 'next/image'
import Tags from './Tags'

interface Props {
  src: StaticImageData
  title: string
  content?: string
}

const Card: React.FC<Props> = ({ src, title, content }) => {
  return (
    <div className="mt-8 max-w-sm overflow-hidden rounded-xl shadow-lg">
      <Image className="w-full" src={src} alt="cake" />

      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{content}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <Tags tag="#winter" />
        <Tags tag="#travel" />
        <Tags tag="#city" />
      </div>
    </div>
  )
}

export default Card
