import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

const themeColors = {
  light: '#6366f1',
  dark: '#ffffff',
  cream: '#92400e',
  camo: '#166534'
}

const gradients = {
  light: 'radial-gradient(circle at center, #f5f5f5 0%, #ffffff 100%)',
  dark: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
  cream: 'radial-gradient(circle at center, #fdf6e3 0%, #fff8dc 100%)',
  camo: 'radial-gradient(circle at center, #f0fff4 0%, #dcfce7 100%)'
} as const

function AnimatedMesh() {
  const { theme } = useTheme()
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[9, 3, 768, 3, 4, 3]} />
      <meshPhongMaterial
        color={themeColors[theme]}
        wireframe
        transparent
        opacity={theme === 'dark' ? 0.8 : 0.1}
      />
    </mesh>
  )
}

export function Background() {
  const { theme } = useTheme()

  return (
    <div className={`fixed inset-0 bg-gradient-to-b from-background to-background/80 ${theme === 'dark' ? 'bg-black' : ''}`}>
      <Canvas
        camera={{
          position: [0, 0, 20],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedMesh />
      </Canvas>
    </div>
  )
}