
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { useState } from 'react'
import EarthCanvas from './EarthCanvas'
const Contact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.table({name,email,message})
        clearForm()
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <motion.div
                variants={textVariant}
                className="flex flex-col gap-2 bg-[#100D25] px-6 lg:px-16 py-6 rounded-xl">
                <h3 className="uppercase text-secondary tracking-wider">get in touch</h3>
                <h2 className="text-[28px] md:text-[38px] lg:text-[58px] font-bold">Contact.</h2>
                <form className='mt-1' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2 py-4'>
                        <label htmlFor='name'>Your name</label>
                        <input type="text" className='bg-[#161031] p-2 rounded-md focus:outline-none hover:border hover:border-[#362874] focus:border focus:border-[#362874]' id="name" placeholder="What's your good name?" onChange={(e) => {setName(e.target.value)}} value={name} required/>
                    </div>
                    <div className='flex flex-col gap-2 py-4'>
                        <label htmlFor='name'>Your email</label>
                        <input type="email" className='bg-[#161031] p-2 rounded-md focus:outline-none hover:border hover:border-[#362874] focus:border focus:border-[#362874]' id="name" placeholder="What's your web address?" onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                    </div>
                    <div className='flex flex-col gap-2 py-4'>
                        <label htmlFor='name'>Your message</label>
                        <textarea className='bg-[#161031] p-2 rounded-md focus:outline-none hover:border hover:border-[#362874] focus:border focus:border-[#362874]' id="name" placeholder="What's your web address?" onChange={(e) => {setMessage(e.target.value)}} value={message}  rows={6} required/>
                    </div>
                    <button type="submit" className='px-6 py-4 backdrop-blur-md bg-[#2a1c68] hover:bg-[#362291]  rounded-md'>Send</button>
                </form>
            </motion.div>
            <div className='row-start-1 sm:row-auto'>
                <EarthCanvas />
            </div>
        </div>
    )
}

export default Contact