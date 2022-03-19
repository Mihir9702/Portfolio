import React from 'react'
import city from '../public/city.jpg'
import Card from './Card'

const About: React.FC = () => {
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
          <Card
            src={city}
            title="The Coldest Sunset"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab magnam est soluta laboriosam, magni impedit officia maxime consectetur esse!"
          />
        </div>
      </div>
    </section>
  )
}

export default About
