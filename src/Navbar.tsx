import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

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
    <nav className="sticky inset-0 z-10 bg-gray-900 p-5 text-white shadow-md md:inset-auto md:flex md:items-center md:justify-between">
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

const MenuIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      width="32"
      height="32"
    >
      <title>Menu</title>
      <path
        fill="#000"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  )
}

const CloseIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      width="32"
      height="32"
    >
      <title>Close</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  )
}

export default Navbar
