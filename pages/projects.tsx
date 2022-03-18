import React from 'react'
import styles from '../styles/Projects.module.scss'
import Image from 'next/image'
import book from '../public/cookbook.svg'

const Projects = () => {
  const projects = ['My Cookbook', 'MonoTrivia', 'Jump']
  return (
    <div className={styles.container}>
      {projects.map(project => (
        <div key={project} className={styles.box}>
          {/* Image of logo */}
          <div className={styles.image}>
            {project === 'My Cookbook' && (
              <Image src={book} alt={'image of cookbook'} />
            )}
          </div>
          <p>{project}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
            omnis.
          </p>
        </div>
      ))}
    </div>
  )
}

export default Projects
