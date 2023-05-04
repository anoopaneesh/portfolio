import { Tilt } from "react-tilt"
import fullstack from '../assets/images/web.png'
import mobile from '../assets/images/mobile.png'
import { textVariant, tiltCardVariants } from '../utils/motion'
import { motion } from 'framer-motion'
const About = () => {
    const { services } = useAboutProps()
    return (
        <>
            <motion.div
                variants={textVariant}
                className="flex flex-col gap-2">
                <h3 className="uppercase text-secondary tracking-wider">Introduction</h3>
                <h2 className="text-[28px] md:text-[38px] lg:text-[58px] font-bold">Overview.</h2>
                <p className="text-secondary leading-relaxed">I'm a skilled full-stack developer with experience in JavaScript , React , NodeJS , ExpressJS, MongoDB and more.I'm a quick learner and collaborte closely with clients to create efficient scalable,and user-friendly solutions that solve real-world problems.Let's work together to bring your ideas to life!</p>
            </motion.div>
            <div className="flex gap-4 mt-8">
                {services.map((service, index) => <Tilt key={index} options={{ scale: 1 }}>

                    <motion.div
                        variants={tiltCardVariants}

                        className="border border-[#454545] bg-gradient-to-br from-tertiary to-[#0b0716] h-[300px] flex  flex-col items-center justify-center gap-4 px-16 rounded-lg backdrop-blur-md shadow-card shadow-gray-900"
                    >
                        <img src={service.icon} alt="fullstack" className="w-16 h-16 object-contain" />
                        <p>{service.name}</p>
                    </motion.div>

                </Tilt>)}
            </div>
        </>
    )
}


const useAboutProps = () => {

    const services = [
        {
            name: 'Full-Stack Developer',
            icon: fullstack
        },
        {
            name: 'Mobile Developer',
            icon: mobile
        }
    ]
    return { services }
}

export default About