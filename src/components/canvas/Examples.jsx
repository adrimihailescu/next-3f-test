'use client'

import { useGLTF, useMatcapTexture, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  const [matcapTexture] = useMatcapTexture('660505_F2B090_DD4D37_AA1914', 256)

  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
      scale={0.2}
    >
      <sphereGeometry args={[1, 64, 64]} />
      {/* <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} speed={5} /> */}
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  )
}

export const Logo = ({ route = '/blob', ...props }) => {
  const texture1 = useTexture('./textures/matcap-green.jpg')
  const texture2 = useTexture('./textures/matcap-red.jpg')
  // const [matcapTexture] = useMatcapTexture('254FB0_99AFF0_6587D8_1D3279', 256)
  // const [matcapTexture2] = useMatcapTexture('660505_F2B090_DD4D37_AA1914', 256)
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshBasicMaterial map={texture1} />
      </mesh>
    </group>
  )
}

export function Duck({ route = '/blob', ...props }) {
  const router = useRouter()

  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} onClick={() => router.push(route)} />
}

export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}
