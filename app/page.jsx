'use client'

import Text from '@/components/texts/Text'
import Flag from '@/components/texts/Flag'
import { GradientTexture } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import styles from './page.module.css'
const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.view}>
          <View className={styles.viewLogo}>
            <Suspense fallback={null}>
              <Logo route='/blob' scale={1.5} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
        <div>
          <h2 className={styles.h2Class}>Some H2 text here</h2>
        </div>
      </div>
      <View orbit className='relative h-full  sm:h-96 sm:w-full'>
        <Suspense fallback={null}>
          <Text />
        </Suspense>
      </View>
      <View className='relative h-full'>
        <Suspense fallback={null}>
          <ambientLight />
          <Flag />
        </Suspense>
      </View>
    </>
  )
}
