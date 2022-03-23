import React from 'react'
import Skill from './Skill'
import { skills } from './SkillList'

const Roadmap = () => {
  return (
    <section className="bg-gray-50 py-24 text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-x-10 md:flex-row">
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-gray-900">
              Is he good at anything?
            </h2>
            <p className="mt-6">I'm always learning something new</p>
          </div>
          <div className="mx-auto mt-14 max-w-xl flex-grow">
            <div className="flex flex-col gap-y-20">
              {skills.map((skill, i) => (
                <Skill key={i} title={skill.title} skills={skill.skills} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
