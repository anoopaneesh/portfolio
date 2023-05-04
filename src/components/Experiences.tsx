
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
textVariant
const Experiences = () => {

    const { experiences } = useExperiencesProps()

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
                            <img className='rounded-full' src="/companies/unokard.jpeg" alt="" />
                        }
                    >
                        <h3 className='font-bold tracking-wide'><a className='hover:underline' href={experience.certificate_link} target="_blank"><span>{experience.title}</span></a>&nbsp;@&nbsp;<a className='hover:underline' href={experience.company_website} target='_blank'><span>{experience.company_name}</span></a></h3>
                        <h4>{experience.location}</h4>
                        <h4>{experience.duration}&nbsp;|&nbsp;{experience.type}</h4>
                        <ul className='list-disc px-6'>
                            {experience.points.map(point => <li><p className='text-secondary'>{point}</p></li>)}
                        </ul>
                    </VerticalTimelineElement>))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

const useExperiencesProps = () => {
    const experiences = [
        {
            company_name: "Unokard (formerly Vkonex AI)",
            time: "Part-Time(3-4 hrs/day)",
            type: "Internship",
            company_website: "https://unokard.com/",
            title: "Software Developer Intern",
            location: "Remote",
            startDate: "07/2021",
            endDate: "01/2022",
            duration: "6 months",
            points: [
                "Created a web based interview platform using NodeJS",
                "Worked on a frontend of social media platform for professionals to find potential opportunities using PHP",
                "Handled the deployment of websites and APIs of emotion detection , nlp using the AWS",
                "Used NodeJS,ExpressJS,MySQL,Nodemailer,AWS EC2,S3,RDS,Nginx"
            ],
            skills: ["NodeJS", "ExpressJS", "MySQL", "AWS", "Nginx", "PHP"],
            certificate_link: "https://drive.google.com/file/d/1Dh7BzEFkDhxBy7vmaqejg2VYsi6_AJuR/view?usp=sharing",
            company_logo: '/companies/unokard.jpeg'
        }
    ]
    return { experiences }
}


export default Experiences