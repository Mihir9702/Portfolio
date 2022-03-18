import React from 'react'
import Link from 'next/link'

const MobileNavItems = () => {
  return (
    <ul>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/projects'}>
          <a>Projects</a>
        </Link>
      </li>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
    </ul>
  )
}

export default MobileNavItems
