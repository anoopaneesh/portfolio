import { motion } from 'framer-motion'
import { containerVariant } from '../utils/motion'
type SectionWrapperProps = {
    id: string
}
const SectionWrapper: React.FC<React.PropsWithChildren<SectionWrapperProps>> = ({ id, children }) => {
    return (
        <motion.div variants={containerVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="pt-8 wrapper py-32" id={id}>
            {children}
        </motion.div>
    )
}

export default SectionWrapper