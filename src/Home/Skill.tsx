import React from 'react'

interface Skills {
  skill: string
  icon: any
}

interface Props {
  title: string
  skills: Skills[]
}

const Skill: React.FC<Props> = ({ title, skills }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="mr-16 flex items-center">{title}</div>
        <div className="flex gap-x-8">
          {skills.map(skill => (
            <figure key={skill.skill}>
              <div className="flex justify-center text-4xl">{skill.icon}</div>
              <figcaption className="text-center">{skill.skill}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <hr />
    </>
  )
}

export default Skill
