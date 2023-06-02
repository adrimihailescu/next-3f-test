import Link from 'next/link'
import React from 'react'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Projects',
    url: '/projects',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
]

const Navbar = () => {
  return (
    <div>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
    </div>
  )
}

export default Navbar
