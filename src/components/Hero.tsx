import { ComputerCanvas } from "."
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='relative h-screen bg-hero-pattern bg-no-repeat bg-cover w-full wrapper pt-8'>
            <div className='flex gap-2'>
                <div className='flex flex-col items-center'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 h-32 sm:h-60 rounded-full bg-gradient-to-b from-[#915eff] to-transparent' />
                </div>
                <div>
                    <p className='font-bold text-[38px] md:text-[48px] lg:text-[68px]'>Hi,I'm <span className='text-[#915eff]'>Anoop</span></p>
                    <p className='font'>Passionate Web Developer skilled in MERN Stack with a thirst for <br className='sm:block hidden' /> learning new technologies.</p>
                </div>
            </div>

            <div className="absolute inset-0 w-full -translate-y-8 ">
                <ComputerCanvas />
                <a href="#about">
                    <div className="cursor-pointer absolute flex justify-center py-2 w-[30px] h-[56px] left-1/2 -translate-x-1/2 top-[80vh] rounded-full border-4 border-secondary">
                        <motion.div
                            className="w-2 h-2 bg-secondary rounded-full"

                            animate={{
                                y: [0, 24, 0],
                            }}

                            transition={{
                                duration: 3,
                                repeatType: 'loop',
                                repeat: Infinity
                            }}
                        />
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Hero