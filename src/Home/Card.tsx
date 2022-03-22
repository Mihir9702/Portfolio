import React from 'react'
import Image from 'next/image'
import Tags from './Tags'

interface Props {
  src: StaticImageData
  title: string
  content?: string
  tags: string[]
}

const Card: React.FC<Props> = ({ src, title, content, tags }) => {
  return (
    <div className="card mt-8 flex max-w-sm flex-col items-center justify-evenly overflow-hidden rounded-xl">
      <div className="absolute top-0">
        <Image src={src} alt="cake" />
      </div>

      <div className="mt-48 px-6 py-6">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{content}</p>
        <button className="mt-6 w-full rounded-xl bg-gray-800 text-white shadow-md transition-all hover:bg-gray-600">
          Website
        </button>
        <button className="mt-6 w-full rounded-xl bg-gray-800 text-white shadow-md transition-all hover:bg-gray-600">
          Source Code
        </button>
      </div>

      <div className="px-6 pt-4 pb-2">
        {tags.map(tag => (
          <Tags key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default Card
