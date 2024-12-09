import logo from '../assets/images/logo.svg'
import menu from '../assets/images/menu.svg'
import close from '../assets/images/close.svg'
import { useState } from 'react'
const Navbar = () => {
    const { menuActive, routes, setMenuActive } = useNavbarProps()

    return (
        <div className='wrapper flex items-center justify-between h-[80px] sticky top-0 w-full z-20 bg-primary'>
            <a href="#">
                <div className='flex items-center -translate-x-5'>
                    <img className=' h-24 object-contain select-none' src={logo} alt="" />
                    <p className='font-bold select-none'>Anoop | Fullstack Developer</p>
                </div>
            </a>
            <div className='hidden sm:flex items-center gap-10'>
                {routes.map(route => <a className='text-secondary hover:text-white select-none' key={route.path} href={route.path} onClick={() => {

                }}>{route.name}</a>)}
                <a className='text-secondary hover:text-white select-none' href='./resume.pdf' target='_blank'>Resume</a>
            </div>
            <img src={menuActive ? close : menu} alt="navbar menu" className='w-[20px] h-[20px] block sm:hidden cursor-pointer' onClick={() => setMenuActive((state) => !state)} />
            <div className={`${menuActive ? 'flex' : 'hidden'} sm:hidden flex-col gap-8 absolute top-[80px] right-6 items-end bg-gradient-to-r from-cyan-600 to-blue-900 px-8 py-6 rounded`}>
                {routes.map(route => <a className='text-secondary hover:text-white select-none' key={route.path} href={route.path} onClick={() => {
                    setMenuActive(false)
                }}>{route.name}</a>)}
            </div>
        </div>
    )
}

const useNavbarProps = () => {
    const routes = [
        {
            path: '#about',
            name: 'About'
        },
        {
            path: '#works',
            name: 'Works'
        },
        {
            path: '#contact',
            name: 'Contact'
        }
    ]
    const [menuActive, setMenuActive] = useState(false)

    return { menuActive, setMenuActive, routes }
}

export default Navbar