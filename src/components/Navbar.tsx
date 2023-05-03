import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { useState } from 'react'
const Navbar = () => {
    const routes = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/works',
            name: 'Works'
        },
        {
            path: '/contact',
            name: 'Contact'
        }
    ]
    const [currentRoute, setCurrentRoute] = useState(routes[0].path)
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className='px-6 sm:px-16 flex items-center justify-between h-[80px] relative z-20'>
            <div className='flex items-center -translate-x-5'>
                <img className=' h-24 object-contain' src={logo} alt="" />
                <p className='font-bold'>Anoop | Fullstack Developer</p>
            </div>
            <div className='hidden sm:flex items-center gap-10'>
                {routes.map(route => <Link className={`${currentRoute === route.path ? 'text-white' : 'text-secondary'} hover:text-white`} key={route.path} to={route.path} onClick={() => {
                    setCurrentRoute(route.path)
                }}>{route.name}</Link>)}
            </div>
            <img src={menuActive ? close : menu} alt="navbar menu" className='w-[20px] h-[20px] block sm:hidden cursor-pointer' onClick={() => setMenuActive((state) => !state)} />
            <div className={`${menuActive ? 'flex' : 'hidden'} sm:hidden flex-col gap-8 absolute top-[80px] right-6 items-end bg-gradient-to-r from-cyan-600 to-blue-900 px-8 py-6 rounded`}>
                {routes.map(route => <Link className={`${currentRoute === route.path ? 'text-white' : 'text-secondary'} hover:text-white`} key={route.path} to={route.path} onClick={() => {
                    setMenuActive(false)
                    setCurrentRoute(route.path)
                }}>{route.name}</Link>)}
            </div>
        </div>
    )
}

export default Navbar