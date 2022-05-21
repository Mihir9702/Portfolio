import React from 'react'
import useInView from 'react-cool-inview'

interface Skills {
  skill: string
  icon: any
}

interface Props {
  title: string
  skills: Skills[]
}

const Skill: React.FC<Props> = ({ title, skills }) => {
  let delay = 100
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '-120px',
  })
  return (
    <>
      <div ref={observe} className="justify-between md:flex">
        <div className="my-6 text-center">{title}</div>
        <div className="flex-2 flex flex-wrap gap-x-4 md:gap-x-8">
          {skills.map((skill, i) => (
            <figure
              key={skill.skill}
              className={`${
                inView
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-2/4 opacity-0'
              } 
               transition-all delay-[${delay * i}] mx-auto`}
            >
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
