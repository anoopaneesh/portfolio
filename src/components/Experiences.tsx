
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data';

const Experiences = () => {

    return (
        <div className='flex flex-col items-center'>
            <motion.div
                variants={textVariant}
                className="flex flex-col gap-2 items-center">
                <h3 className="uppercase text-secondary tracking-wider">What i have done so far</h3>
                <h2 className="text-[28px] md:text-[38px] lg:text-[58px] font-bold">Work Experience.</h2>

            </motion.div>
            <div className='w-full md:w-[700px] lg:w-[70%]'>
                <VerticalTimeline
                    layout='1-column-left'
                >
                    {experiences.map((experience, index) => (<VerticalTimelineElement
                        className='w-full'
                        key={index}
                        contentStyle={{ background: 'linear-gradient(to bottom right,#151030,#3e165c)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #343991' }}
                        date={`${experience.startDate} - ${experience.endDate}`}
                        iconStyle={{ background: '#343991', }}
                        icon={
                            <img className='rounded-full' src={experience.company_logo} alt="" />
                        }
                    >
                        <h3 className='font-bold tracking-wide'><a className='hover:underline' href={experience.certificate_link} target="_blank"><span>{experience.title}</span></a>&nbsp;@&nbsp;<a className='hover:underline' href={experience.company_website} target='_blank'><span>{experience.company_name}</span></a></h3>
                        <h4>{experience.location}</h4>
                        <h4>{experience.duration}&nbsp;|&nbsp;{experience.type}</h4>
                        <ul className='list-disc px-6'>
                            {experience.points.map(point => <li key={point}><p className='text-secondary'>{point}</p></li>)}
                        </ul>
                    </VerticalTimelineElement>))}
                </VerticalTimeline>
            </div>
        </div>
    )
}




export default Experiences