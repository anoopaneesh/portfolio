import { Tilt } from "react-tilt"
import { textVariant, tiltCardVariants } from '../utils/motion'
import { motion } from 'framer-motion'
import { services } from "../data"
const About = () => {
    return (
      <>
        <motion.div variants={textVariant} className="flex flex-col gap-2">
          <h3 className="uppercase text-secondary tracking-wider">
            Introduction
          </h3>
          <h2 className="text-[28px] md:text-[38px] lg:text-[58px] font-bold">
            Overview.
          </h2>
          <p className="text-secondary leading-relaxed">
            I'm a dedicated Full-Stack Software Engineer with a passion for
            crafting innovative and user-centric web applications. With a strong
            foundation in React, Node.js, and NestJS, I'm adept at building
            robust and scalable solutions. I'm driven by a commitment to quality
            and efficiency, and I'm always seeking opportunities to learn and
            grow. I enjoy collaborating with cross-functional teams to deliver
            exceptional results.
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {services.map((service, index) => (
            <Tilt key={index} options={{ scale: 1 }}>
              <motion.div
                variants={tiltCardVariants}
                className="border border-[#454545] bg-gradient-to-br from-tertiary to-[#0b0716] h-[300px] flex  flex-col items-center justify-center gap-4 px-16 rounded-lg backdrop-blur-md shadow-card shadow-gray-900"
              >
                <img
                  src={service.icon}
                  alt="fullstack"
                  className="w-16 h-16 object-contain"
                />
                <p>{service.name}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </>
    );
}


export default About