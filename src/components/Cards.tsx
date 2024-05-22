import React from 'react'
import Card from './Card'
import useInView from 'react-cool-inview'
import site from '../assets/site.png'
import mycb from '../assets/cookbook.png'
import mt from '../assets/monotrivia.png'
import jump from '../assets/jump.png'
import discord from '../assets/discord.png'
import fitnessElevator from '../assets/fitness-elevator.png'
import kpam from '../assets/kpam.png'
import crown from '../assets/crown.png'

const Cards = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '50px',
  })
  return (
    <div className="mt-6 rounded-lg bg-gray-200 p-8 px-12 pb-12 shadow-sm md:w-max">
      <div
        ref={observe}
        className={`${
          inView
            ? 'lg:translate-y-0 lg:opacity-100'
            : 'lg:translate-y-2/4 lg:opacity-0'
        } grid md:grid-cols-3 gap-8`}
      >
        <Card
          project={'https://kpam-eng.vercel.app/'}
          github={'https://github.com/Mihir9702/kpam-engineering'}
          src={kpam}
          title="KPAM Engineering"
          content="Redesigned a manufacturing technician service site for KPAM Engineering, an early-size startup"
          tags={['TypeScript', 'Next', 'Redux', 'Tailwind']}
        />
        <Card
          project={'https://github.com/Mihir9702/discord'}
          github={'https://github.com/Mihir9702/discord'}
          src={discord}
          title="Discord"
          content="As a learning opportunity, I recreated 'Discord' from scratch allowing users to send messages, join social groups, and make new friends!"
          tags={[
            'TypeScript',
            'React',
            'Tailwind',
            'GraphQL',
            'Apollo',
            'Express',
            'PostgreSQL',
          ]}
        />
        <Card
          project={'https://github.com/Mihir9702/fitness-elevator'}
          github={'https://github.com/Mihir9702/fitness-elevator'}
          src={fitnessElevator}
          title="Fitness Elevator"
          content="Run your gym with Fitness Elevator! A gym management app to manage equipment, classes, members, and employees! Now gym members can check in / out and log their exercises!"
          tags={['Vue', 'Vuex', 'Axios', 'Java', 'Spring', 'SQL', 'PostgreSQL']}
        />
        <Card
          project={'https://github.com/Mihir9702/crown'}
          github={'https://github.com/Mihir9702/crown'}
          src={crown}
          title="Crown"
          content="A social news website and forum where users can post content, ask questions, and like each other's posts!"
          tags={[
            'React',
            'Material UI',
            'Tailwind',
            'TypeScript',
            'Express',
            'GraphQL',
            'Urql',
            'AWS',
            'S3',
            'ByteScale',
            'PostgreSQL',
            'Redis',
          ]}
        />
        <Card
          project={'/'}
          github={'https://github.com/Mihir9702/Portfolio'}
          src={site}
          title="Portfolio"
          content="Styling this site was super fun and easy using Tailwind! Want to see how I made this site? All of the code is on GitHub!"
          tags={['TypeScript', 'React', 'Next', 'Tailwind']}
        />
        <Card
          project={'https://makemybook.netlify.app/'}
          github={'https://github.com/Mihir9702/MyCookbookClient'}
          src={mycb}
          title="MyCookbook"
          content="Always hungry but never know what to eat? Check out MyCookbook for a variety of recipes and you can make your own personal cookbooks!"
          tags={[
            'TypeScript',
            'React',
            'Chakra',
            'SCSS',
            'MongoDB',
            'Express',
            'NodeJS',
            'JWT',
          ]}
        />
        <Card
          project={'https://mono-trivia.herokuapp.com/'}
          github={'https://github.com/Mihir9702/Trivia'}
          src={mt}
          title="MonoTrivia"
          content="Are you starring on a gameshow tomorrow night or do you just want to see how smart you really are? MonoTrivia has questions ranging from easy-hard to improve your skills!"
          tags={[
            'JavaScript',
            'Handlebars',
            'SASS',
            'Express',
            'NodeJS',
            'MongoDB',
            'Sessions',
          ]}
        />
        <Card
          project={'https://mihir9702.github.io/JUMP/'}
          github={'https://github.com/Mihir9702/JUMP'}
          src={jump}
          title="Jump"
          content={`"I've played Boshy, I've played Super Mario, I've played everything! Is there anything good out there?" Look no further because we got Jump, a parallax side scrolling platform game!`}
          tags={[
            'JavaScript',
            'Canvas',
            'Tilemap',
            'Events',
            'Object-Oriented Programming',
            'Game Mechanics',
            'Collision Detection',
            'Physics',
          ]}
        />
      </div>
    </div>
  )
}

export default Cards
