import React from 'react'
import Link from 'next/link'

const Roadmap = () => {
  return (
    <section className="bg-gray-50 py-24 text-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-x-20 md:flex-row">
          <div className="flex-grow text-center md:text-left">
            <h2 className=" text-4xl font-black leading-tight tracking-tight text-gray-900">
              Roadmap
            </h2>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quod.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-lg flex-grow">
            <Link href={'/'}>
              <a>
                <button className="cursor-pointer rounded-lg bg-gray-900 px-8 py-4 font-bold tracking-wide text-white transition-all hover:scale-110">
                  Preview
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
