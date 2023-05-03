import React from 'react'

const Hero = () => {
    return (
        <div className='bg-hero-pattern bg-no-repeat bg-cover w-full h-screen wrapper pt-8'>
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
        </div>
    )
}

export default Hero