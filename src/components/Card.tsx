import React from 'react'
import Image from 'next/image'
import Tags from './Tags'
import Link from 'next/link'

interface Props {
  project: string
  github: string
  src: StaticImageData
  title: string
  content?: string
  tags: string[]
}

const Card: React.FC<Props> = ({
  project,
  github,
  src,
  title,
  content,
  tags,
}) => {
  return (
    <div className="card relative mt-8 flex max-w-sm flex-col overflow-hidden rounded-xl">
      <Image src={src} alt="website" className="h-64" />

      <div className="px-6">
        <div className="mt-4 mb-2 text-xl font-bold">{title}</div>
        <p className="md:h-24 text-base text-gray-700">{content}</p>
      </div>

      <div className="flex flex-col justify-around my-3 mx-auto gap-2 md:mx-0 md:gap-0 md:flex-row md:row">
        <Link
          href={project}
          className="w-fit rounded-xl bg-gray-800 px-4 text-white shadow-md transition-all hover:bg-gray-600"
        >
          Website
        </Link>
        <Link
          href={github}
          className="w-fit rounded-xl bg-gray-800 px-4 text-white shadow-md transition-all hover:bg-gray-600"
        >
          Source Code
        </Link>
      </div>

      <div className="px-4 py-4">
        {tags.map(tag => (
          <Tags key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default Card
