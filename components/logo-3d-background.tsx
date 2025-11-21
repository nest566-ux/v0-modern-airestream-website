"use client"

import { Canvas } from "@react-three/fiber"
import { Float, useTexture } from "@react-three/drei"
import { Suspense } from "react"

function BackgroundLogo({ position }: { position: [number, number, number] }) {
  const texture = useTexture("/images/logo-main.png")

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh position={position} rotation={[0, 0, 0]}>
        <planeGeometry args={[3, 1.8]} />
        <meshStandardMaterial map={texture} transparent opacity={0.15} roughness={0.4} metalness={0.7} />
      </mesh>
    </Float>
  )
}

export function Logo3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#60a5fa" />

          {/* Multiple floating logos at different positions */}
          <BackgroundLogo position={[-8, 4, -5]} />
          <BackgroundLogo position={[8, -3, -8]} />
          <BackgroundLogo position={[0, 6, -10]} />
          <BackgroundLogo position={[-6, -5, -7]} />
          <BackgroundLogo position={[6, 2, -6]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
