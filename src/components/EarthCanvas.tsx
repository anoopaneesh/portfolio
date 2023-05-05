import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from "./CanvasLoader"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"


const EarthCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

const Earth = () => {
    const model = useGLTF('./models/planet/scene.gltf')
    return (
        <primitive object={model.scene} scale={2.5} rotation-y={0} position-y={0} />
    )
}

export default EarthCanvas