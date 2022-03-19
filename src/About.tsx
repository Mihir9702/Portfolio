import React from 'react'
import Image from 'next/image'
import city from '../public/city.jpg'

const About = () => {
  return (
    <section className="bg-gray-50 py-24 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center gap-x-20 md:flex">
          <div className="flex-grow">
            <h2 className="text-center text-4xl font-black leading-tight tracking-tight text-gray-900">
              Want to get to know me?
            </h2>
            <p className="mt-6 max-w-3xl text-center text-lg leading-8 text-gray-500">
              Small details can make a big impression.
            </p>
          </div>

          {/* Card */}
          <div className="mx-auto mt-8 max-w-sm overflow-hidden rounded-xl shadow-lg">
            <Image className="w-full" src={city} alt="cake" />

            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #adventure
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #travel
              </span>
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
