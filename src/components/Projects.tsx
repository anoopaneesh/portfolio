
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { tiltCardVariants } from '../utils/motion'
import { Tilt } from 'react-tilt'
import github from '../assets/images/github.png'
import { projects } from '../data'
const Projects = () => {
    return (
        <>
            <motion.div
                variants={textVariant}
                className="flex flex-col gap-2">
                <h3 className="uppercase text-secondary tracking-wider">My Work</h3>
                <h2 className="text-[28px] md:text-[38px] lg:text-[58px] font-bold">Projects.</h2>
                <p className="text-secondary leading-relaxed">Following projects showcases my skills and experience through real-world examples of my work.Each project is briefly described with lines to code repositories and live demos in it. It reflects my ability to solve complex problems , work with different technologies and manage projects efficiently.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {projects.map((project, index) => (<Tilt options={{ scale: 1 }} key={index}>

                    <motion.div
                        variants={tiltCardVariants}

                        className="border border-[#454545] bg-gradient-to-br from-tertiary to-[#0b0716] h-[400px] flex flex-col rounded-lg backdrop-blur-md shadow-card shadow-gray-900 bg-red-700  p-2 gap-4"
                    >
                        <div className='rounded-md overflow-hidden relative'>
                            <div className='w-8 h-8 absolute top-2 right-2 rounded-full bg-black'>
                                <a href={project.github} target="_blank"><img src={github} alt="" /></a>
                            </div>
                            <img src={project.image} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <h3 className='font-bold tracking-wide text-[20px]'>{project.title}</h3>
                                <a href={project.live} target="_blank"><img src="/link.png" className='w-4 h-4' /></a>
                            </div>
                            <p className='text-secondary text-sm leading-relaxed'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 text-sm justify-self-end'>
                                {project.keywords.map(keyword => <p key={keyword}>#{keyword}</p>)}
                            </div>
                        </div>
                    </motion.div>

                </Tilt>))}
            </div>
        </>
    )
}

export default Projects