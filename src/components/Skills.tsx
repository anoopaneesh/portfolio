import { Decal, Float, Html, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { skills } from "../data"
const Skills = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {skills.map(skill => <div className="w-28 h-28" key={skill.name}>
                <BallCanvas icon={skill.icon} />
            </div>)}
        </div>
    )
}

const BallCanvas = ({ icon }: { icon: string }) => {
    return (
        <Canvas
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Html>
                <div>
                    <img src={icon} alt="" width="100%" height="100%" style={{ objectFit: "contain" }} />
                </div>
            </Html>}>
                <OrbitControls enableZoom={false} />
                <Ball icon={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

const Ball = ({ icon }: { icon: string }) => {
    const [decal] = useTexture([icon])
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal
                    map={decal}
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

export default Skills