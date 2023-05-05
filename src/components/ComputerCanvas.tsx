
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Preload, useGLTF, useProgress } from '@react-three/drei'
import CanvasLoader from './CanvasLoader'

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    console.log('reached')
    const mediaQuery = window.matchMedia('(max-width:700px)')
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      console.log('media query change', event.matches)
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

type ComputerProps = {
  isMobile: boolean
}

const Computer: React.FC<ComputerProps> = ({ isMobile }) => {
  const model = useGLTF('./models/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={model.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -2, -2] : [0, -2.75, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}


export default ComputerCanvas