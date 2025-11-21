"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, useTexture } from "@react-three/drei"
import { Suspense } from "react"

function Logo() {
  const texture = useTexture("/images/logo-main.png")

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh rotation={[0.1, 0.2, 0]}>
        <planeGeometry args={[5, 3]} />
        <meshStandardMaterial map={texture} transparent roughness={0.3} metalness={0.6} />
      </mesh>
    </Float>
  )
}

export function Logo3D() {
  return (
    <div className="w-full h-[400px] lg:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60a5fa" />
          <Logo />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
