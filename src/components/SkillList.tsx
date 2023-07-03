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
  SiApollographql,
  SiChakraui,
  SiDocker,
  SiElectron,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHandlebarsdotjs,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVim,
} from 'react-icons/si'

export const skills = [
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
    title: 'Frontend',
    skills: [
      {
        skill: 'HTML5',
        icon: <FaHtml5 />,
      },
      {
        skill: 'React',
        icon: <FaReact />,
      },
      {
        skill: 'NextJS',
        icon: <SiNextdotjs />,
      },
      {
        skill: 'Electron',
        icon: <SiElectron />,
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
        skill: 'Chakra',
        icon: <SiChakraui />,
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
    title: 'Backend',
    skills: [
      {
        skill: 'Express',
        icon: <SiExpress />,
      },
      {
        skill: 'NodeJS',
        icon: <FaNodeJs />,
      },
      {
        skill: 'PostgreSQL',
        icon: <SiPostgresql />,
      },
      {
        skill: 'Redis',
        icon: <SiRedis />,
      },
      {
        skill: 'MongoDB',
        icon: <SiMongodb />,
      },
    ],
  },
  {
    title: 'Other',
    skills: [
      {
        skill: 'GraphQL',
        icon: <SiGraphql />,
      },
      {
        skill: 'Apollo',
        icon: <SiApollographql />,
      },
      {
        skill: 'Docker',
        icon: <SiDocker />,
      },
      {
        skill: 'Git',
        icon: <SiGit />,
      },
      {
        skill: 'Vim',
        icon: <SiVim />,
      },
    ],
  },
]
