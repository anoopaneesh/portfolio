import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
    const { progress } = useProgress()
    return (
        <Html>
            <p className='p-2 font-bold'>{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default CanvasLoader