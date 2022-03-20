import Link from 'next/link'
import React from 'react'

const CallToAction: React.FC = () => {
  return (
    <div className="m-20 text-center">
      <Link href={'/projects'}>
        <a className="inline-block transform rounded-xl bg-gray-900 py-4 px-8 text-xl font-medium shadow-lg transition-all hover:scale-105 hover:no-underline">
          View My Work
        </a>
      </Link>
      <p className="mt-6 text-sm font-medium text-gray-400">
        Take a look at some of my&nbsp;
        <span className="font-bold">personal projects</span> I have built.
      </p>
    </div>
  )
}

export default CallToAction
