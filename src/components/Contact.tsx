
import { motion } from 'framer-motion'
import { contactVariants } from '../utils/motion'
import { useState } from 'react'
import EarthCanvas from './EarthCanvas'
import emailjs from '@emailjs/browser'

import { useToast } from '@chakra-ui/react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const clearForm = () => {
        setLoading(false)
        setName('')
        setEmail('')
        setMessage('')
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)


        emailjs.send('service_5ky2xx7', 'template_plxqi0z', {
            from_name: name,
            to_name: 'Anoop',
            from_email: email,
            to_email: 'anoopaneesh808@gmail.com',
            message: message
        }, 'k57d8SXax1AW8YYqN').then(() => {
            toast({
                position: 'bottom',
                duration: 2000,
                render: () => (
                    <ToastContainer title='Email sent successfully' description='Thank you. I will get back to you as soon as possible' type='success' />
                ),
            })
        }).catch((err) => {
            console.log(err)
            toast({
                position: 'bottom',
                duration: 10000,
                render: () => (
                    <ToastContainer title='Email was not sent' description='Please sent the mail at < pk.anoop@outlook.com >' type='error' />
                ),
            })
        }).finally(() => {
            clearForm()
        })
    }
    return (

        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <motion.div
                variants={contactVariants}
                className="flex flex-col gap-2 bg-[#100D25] px-6 lg:px-6 py-6 rounded-xl">
                <h3 className="uppercase text-secondary tracking-wider">get in touch</h3>
                <h2 className="text-[28px] md:text-[38px] lg:text-[58px] font-bold">Contact.</h2>
                <form className='mt-1 text-[14px]' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2 py-4'>
                        <label htmlFor='name'>Your name</label>
                        <input type="text" className='bg-[#161031] p-2 rounded-md focus:outline-none hover:border hover:border-[#362874] focus:border focus:border-[#362874]' id="name" placeholder="What's your good name?" onChange={(e) => { setName(e.target.value) }} value={name} required />
                    </div>
                    <div className='flex flex-col gap-2 py-4'>
                        <label htmlFor='name'>Your email</label>
                        <input type="email" className='bg-[#161031] p-2 rounded-md focus:outline-none hover:border hover:border-[#362874] focus:border focus:border-[#362874]' id="name" placeholder="What's your web address?" onChange={(e) => { setEmail(e.target.value) }} value={email} required />
                    </div>
                    <div className='flex flex-col gap-2 py-4'>
                        <label htmlFor='name'>Your message</label>
                        <textarea className='bg-[#161031] p-2 rounded-md focus:outline-none hover:border hover:border-[#362874] focus:border focus:border-[#362874]' id="name" placeholder="What's your message?" onChange={(e) => { setMessage(e.target.value) }} value={message} rows={6} required />
                    </div>
                    <button type="submit" className='px-6 py-4 backdrop-blur-md bg-[#2a1c68] hover:bg-[#362291]  rounded-md' disabled={loading}>{
                        loading ? 'Sending...' : 'Send'
                    }</button>
                </form>
            </motion.div>
            <div className='row-start-1 sm:row-auto'>
                <EarthCanvas />
            </div>
        </div>
    )
}


type ToastContainerProps = {
    type: "success" | "error"
    title: string
    description: string
}

const ToastContainer: React.FC<ToastContainerProps> = ({ description, title, type }) => {
    return (
        <div className={`${type === 'success' ? 'bg-[#38A169]' : 'bg-[#E53E3E]'} p-4 rounded-md flex gap-2`}>
            {type === 'success' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>

            }

            <div className='flex flex-col gap-2'>
                <p className='font-bold'>{title}</p>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default Contact