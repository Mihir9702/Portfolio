import React from 'react'
import {
  FaAws,
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import { BsFiletypeSql } from 'react-icons/bs'
import {
  SiApollographql,
  SiAsana,
  SiChakraui,
  SiDjango,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiHandlebarsdotjs,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSequelize,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVim,
  SiVuedotjs,
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
      {
        skill: 'Java',
        icon: <FaJava />
      },
      {
        skill: "SQL",
        icon: <BsFiletypeSql />
      }
    ],
  },
  {
    title: 'Frontend',
    skills: [
      {
        skill: 'React',
        icon: <FaReact />,
      },
      {
        skill: 'Vue',
        icon: <SiVuedotjs />,
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
        skill: 'Tailwind',
        icon: <SiTailwindcss />,
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        skill: 'NodeJS',
        icon: <FaNodeJs />,
      },
      {
        skill: 'Spring',
        icon: <SiSpring />
      },
      {
        skill: 'Django',
        icon: <SiDjango />
      },
      {
        skill: 'GraphQL',
        icon: <SiGraphql />,
      },
      {
        skill: 'AWS',
        icon: <FaAws />,
      },
    ],
  },
  {
    title: 'Database',
    skills: [
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
      {
        skill: 'Firebase',
        icon: <SiFirebase />
      }
    ]
  },
  {
    title: 'Other',
    skills: [
      {
        skill: 'Docker',
        icon: <SiDocker />,
      },
      {
        skill: 'Asana',
        icon: <SiAsana />
      },
      {
        skill: 'Figma',
        icon: <SiFigma />
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
