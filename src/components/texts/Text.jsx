import { Center, Text3D, useMatcapTexture } from '@react-three/drei'
import * as THREE from 'three'

import { useEffect } from 'react'

const material = new THREE.MeshMatcapMaterial()

export default function Text() {
  const [matCapTexture] = useMatcapTexture('254FB0_99AFF0_6587D8_1D3279', 256)

  useEffect(() => {
    matCapTexture.encoding = THREE.sRGBEncoding
    matCapTexture.needsUpdate = true
    material.matcap = matCapTexture
    material.needsUpdate = true
  }, [])

  return (
    <>
      <Center>
        <Text3D
          font='./fonts/helvetiker_regular.typeface.json'
          material={material}
          height={0.2}
          size={1.2}
          curveSegments={6}
          bevelEnabled
          bevelThickness={0.02}
          bevelOffset={0}
          bevelSegments={5}
          bevelSize={0.02}
        >
          Text
          {/* <meshMatcapMaterial matcap={matCapTexture} /> */}
        </Text3D>
      </Center>
    </>
  )
}
