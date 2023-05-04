import { Variants } from "framer-motion"

const textVariant: Variants = {
    initial: {
        translateY: -50,
        opacity: 0
    },
    animate: {
        translateY: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            type: 'spring'
        }
    },
}
const containerVariant: Variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.5,
        }
    }
}
const tiltCardVariants: Variants = {
    initial: {
        translateX: -50,
        opacity: 0
    },
    animate: {
        translateX: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            type: 'spring',
        }
    }
}

export { textVariant, containerVariant, tiltCardVariants }