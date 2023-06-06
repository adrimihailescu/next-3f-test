'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
})

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
    <div className={styles.container}>
      <div className={styles.logo}>
        <View className='flex h-96 w-full flex-col items-center justify-center'>
          <Suspense fallback={null}>
            <Logo route='/blob' scale={1} position={[1, 0, 0]} />
          </Suspense>
        </View>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
