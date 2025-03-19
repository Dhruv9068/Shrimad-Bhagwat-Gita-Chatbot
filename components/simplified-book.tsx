"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Html, useTexture, OrbitControls, Loader } from "@react-three/drei"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

// Book component with improved design
function Book({ onOpenBook }) {
  const bookRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Load textures with error handling
  const coverTexture = useTexture(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/srimad-bhagavad-gita-original-imagb9cycgjpjhyz-wAiFVKqDrLaIeosCbf5SsWh8RDhqbd.webp",
    (texture) => {
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
    },
  )

  const backTexture = useTexture(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The-Enchanted-Melody-of-Krishnas-Flute-Tanmay-Mandal-XhAickIdtNS1Sdv3A6B2kBAJPP6fOD.png",
    (texture) => {
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
    },
  )

  // Create materials with better quality settings
  const coverMaterial = new THREE.MeshStandardMaterial({
    map: coverTexture,
    roughness: 0.7,
    metalness: 0.2,
    bumpScale: 0.002,
  })

  const backMaterial = new THREE.MeshStandardMaterial({
    map: backTexture,
    roughness: 0.7,
    metalness: 0.2,
    bumpScale: 0.002,
  })

  const pageMaterial = new THREE.MeshStandardMaterial({
    color: "#f5f5dc",
    roughness: 0.9,
    metalness: 0.0,
  })

  const spineMaterial = new THREE.MeshStandardMaterial({
    color: "#8B4513",
    roughness: 0.8,
    metalness: 0.3,
  })

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: "#D4AF37",
    roughness: 0.3,
    metalness: 0.8,
  })

  // Smooth animation for the book
  useFrame((state) => {
    if (bookRef.current) {
      // Gentle floating animation
      bookRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1

      // Subtle rotation - more pronounced when hovered
      const hoverIntensity = hovered ? 0.08 : 0.03
      bookRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * hoverIntensity + Math.PI * 0.1
      bookRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.02
    }
  })

  return (
    <group
      ref={bookRef}
      position={[0, 0, 0]}
      rotation={[0, Math.PI * 0.1, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => onOpenBook()}
    >
      {/* Front cover with embossed details */}
      <mesh position={[0, 0, 0.5]} material={coverMaterial}>
        <boxGeometry args={[5, 7, 0.2]} />
      </mesh>

      {/* Pages with slight variation for realism */}
      <mesh position={[0, 0, 0]} material={pageMaterial}>
        <boxGeometry args={[4.9, 6.9, 0.8]} />
      </mesh>

      {/* Back cover */}
      <mesh position={[0, 0, -0.5]} material={backMaterial}>
        <boxGeometry args={[5, 7, 0.2]} />
      </mesh>

      {/* Spine with decorative elements */}
      <mesh position={[-2.55, 0, 0]} rotation={[0, Math.PI / 2, 0]} material={spineMaterial}>
        <boxGeometry args={[1, 6.9, 0.2]} />
      </mesh>

      {/* Decorative gold bands on spine */}
      <mesh position={[-2.55, 2, 0]} rotation={[0, Math.PI / 2, 0]} material={goldMaterial}>
        <boxGeometry args={[1, 0.1, 0.21]} />
      </mesh>

      <mesh position={[-2.55, -2, 0]} rotation={[0, Math.PI / 2, 0]} material={goldMaterial}>
        <boxGeometry args={[1, 0.1, 0.21]} />
      </mesh>

      {/* Instruction text */}
      <Html position={[0, -3.5, 1]} transform>
        <div className="text-center text-amber-300 bg-amber-950/80 p-3 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="mb-2">Click the book to open it</p>
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onOpenBook()
            }}
            className="bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-2 px-6 py-5 text-lg"
            size="lg"
          >
            <BookOpen className="h-5 w-5 mr-2" /> Open Book
          </Button>
        </div>
      </Html>
    </group>
  )
}

// Scene setup with improved lighting and environment
function BookScene({ onOpenBook }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
      <spotLight position={[-10, 5, 10]} angle={0.2} penumbra={1} intensity={0.8} color="#ffd700" castShadow />
      <pointLight position={[0, -10, -10]} intensity={0.5} color="#ff9900" />

      <Book onOpenBook={onOpenBook} />

      <Environment preset="sunset" />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={8}
        maxDistance={15}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  )
}

export function SimplifiedBookViewer({ onOpenBook }) {
  return (
    <div className="w-full h-[35vh] md:h-[40vh] relative rounded-xl overflow-hidden shadow-2xl border border-amber-800/30">
      <Canvas camera={{ position: [0, 0, 14], fov: 30 }} shadows>
        <BookScene onOpenBook={onOpenBook} />
      </Canvas>
      <Loader />
    </div>
  )
}

