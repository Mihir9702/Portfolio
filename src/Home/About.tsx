import React from 'react'
import Card from './Card'
import city from '../../public/city.jpg'

const About: React.FC = () => {
  return (
    <section className="flex justify-center bg-gray-50 py-24 text-gray-900">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center gap-x-40  md:flex">
          <div className="flex-grow text-center">
            <h2 className="text-center text-4xl font-black leading-tight tracking-tight text-gray-900">
              Want to get to know me?
            </h2>
            <button className="mt-7 cursor-pointer rounded-lg bg-gray-900 px-8 py-4 font-bold tracking-wide text-white transition-all hover:scale-110">
              About
            </button>
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
