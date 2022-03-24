import React from 'react'
import Card from './Card'
import useInView from 'react-cool-inview'
import site from '../../assets/site.png'
import mycb from '../../assets/mycb.png'
import mt from '../../assets/monotrivia.png'
import jump from '../../assets/jump.png'

const Cards = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '50px',
  })
  return (
    <div
      ref={observe}
      className={`${
        inView
          ? 'lg:translate-y-0 lg:opacity-100'
          : 'lg:translate-y-2/4 lg:opacity-0'
      } flex flex-col items-center justify-center gap-x-16 transition-all lg:flex-row`}
    >
      <Card
        project={'/'}
        github={'https://github.com/Mihir9702/Portfolio'}
        src={site}
        title="Portfolio"
        content="Styling this site was super fun and easy using Tailwind! Want to see how I made this site? Check out the code on GitHub!"
        tags={['TypeScript', 'NextJS', 'TailwindCSS']}
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
        content="Are you starring on a gameshow tomorrow night or do you just want to see how smart you really are? Check out MonoTrivia! It has questions ranging from easy-hard to improve your skills!"
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
        tags={['JavaScript', 'Canvas', 'OOP']}
      />
    </div>
  )
}

export default Cards
