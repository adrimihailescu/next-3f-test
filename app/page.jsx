'use client'

import Contact from '@/contact/page'
import Text from '@/components/texts/Text'
import { Sky } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import styles from './page.module.css'
const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <View className='flex h-96 w-full flex-col items-center justify-center'>
          <Suspense fallback={null}>
            <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
            <Common />
          </Suspense>
        </View>
        <div>
          <h2 className={styles.h2Class}>Some H2 text here</h2>
        </div>
      </div>
      <View orbit className='relative h-full  sm:h-60 sm:w-full'>
        <Suspense fallback={null}>
          <Text />
        </Suspense>
      </View>
      {/* <View className='relative h-full  sm:h-60 sm:w-full'> */}
      {/* <Suspense fallback={null}> */}
      <Contact />
      {/* <Sky /> */}
      {/* <Common color={'#000000'} /> */}
      {/* </Suspense>
      </View> */}
    </>
  )
}
