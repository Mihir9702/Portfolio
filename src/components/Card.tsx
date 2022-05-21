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
      <Image src={src} alt="website" />

      <div className=" px-6 py-6">
        <div
          className={`mb-2 text-xl font-bold ${
            title !== 'Jump' ? 'mt-6' : 'mt-0'
          }`}
        >
          {title}
        </div>
        <p
          className={`${
            title === 'Portfolio' || title === 'MyCookbook' ? 'pb-10' : 'pb-0'
          } text-base text-gray-700`}
        >
          {content}
        </p>
        <Link href={project}>
          <a>
            <button className="mt-6 w-full rounded-xl bg-gray-800 text-white shadow-md transition-all hover:bg-gray-600">
              Website
            </button>
          </a>
        </Link>
        <Link href={github}>
          <a>
            <button className="mt-6 w-full rounded-xl bg-gray-800 text-white shadow-md transition-all hover:bg-gray-600">
              Source Code
            </button>
          </a>
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
