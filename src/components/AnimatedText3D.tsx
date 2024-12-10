import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Mesh } from 'three'

interface AnimatedText3DProps {
  text: string
}

export function AnimatedText3D({ text }: AnimatedText3DProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.06
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
  })

  return (
    <mesh ref={meshRef}>
      <Text
        fontSize={2.8}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.01}
        textAlign="center"
        font="/fonts/Inter_18pt-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        {text}
        <meshPhongMaterial attach="material" color="#64748b" />
      </Text>
    </mesh>
  )
}
