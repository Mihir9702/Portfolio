import React from 'react'
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import {
  SiExpress,
  SiHandlebarsdotjs,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export const skills = [
  {
    title: 'HTML',
    skills: [
      {
        skill: 'HTML5',
        icon: <FaHtml5 />,
      },
      {
        skill: 'JSX',
        icon: <FaReact />,
      },
      {
        skill: 'Handlebars',
        icon: <SiHandlebarsdotjs />,
      },
    ],
  },
  {
    title: 'CSS',
    skills: [
      {
        skill: 'CSS3',
        icon: <FaCss3 />,
      },
      {
        skill: 'Sass',
        icon: <FaSass />,
      },
      {
        skill: 'Tailwind',
        icon: <SiTailwindcss />,
      },
      {
        skill: 'Bootstrap',
        icon: <FaBootstrap />,
      },
    ],
  },
  {
    title: 'Languages',
    skills: [
      {
        skill: 'JavaScript',
        icon: <SiJavascript />,
      },
      {
        skill: 'TypeScript',
        icon: <SiTypescript />,
      },
      {
        skill: 'Python',
        icon: <FaPython />,
      },
    ],
  },
  {
    title: 'Frameworks / Databases',
    skills: [
      {
        skill: 'React',
        icon: <FaReact />,
      },
      {
        skill: 'Express',
        icon: <SiExpress />,
      },
      {
        skill: 'NodeJS',
        icon: <FaNodeJs />,
      },
      {
        skill: 'MongoDB',
        icon: <SiMongodb />,
      },
    ],
  },
]
