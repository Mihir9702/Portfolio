import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

const Navbar = () => {
  const [display, setDisplay] = useState('hidden')
  const [menu, setMenu] = useState(false)

  const handleMenuToggle = () => {
    setMenu(!menu)
    if (!menu) {
      setDisplay('block')
    } else {
      setDisplay('hidden')
    }
  }

  return (
    <nav className="sticky inset-0 bg-white p-5 shadow-md md:inset-auto md:flex md:items-center md:justify-between">
      <Logo />

      <ul className={`${display} text-center text-xl md:flex md:items-center`}>
        <ListLink href="/" text="Home" />
        <ListLink href="/about" text="About" />
        <ListLink href="/projects" text="Projects" />
        <ListLink href="/roadmap" text="Roadmap" />
        <ListLink href="/contact" text="Contact" />
      </ul>
      <button
        className="pointer absolute top-0 right-0 p-8 md:hidden"
        onClick={handleMenuToggle}
      >
        {menu ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

interface ListLink {
  href: string
  text: string
}

const ListLink: React.FC<ListLink> = ({ href, text }) => {
  return (
    <li className="mx-4 my-6 cursor-pointer md:my-0">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default Navbar
