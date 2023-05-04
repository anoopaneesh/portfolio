import logo from '../assets/images/logo.svg'
import menu from '../assets/images/menu.svg'
import close from '../assets/images/close.svg'
import { useState } from 'react'
const Navbar = () => {
    const { currentRoute, menuActive, setCurrentRoute, routes, setMenuActive } = useNavbarProps()

    return (
        <div className='wrapper flex items-center justify-between h-[80px] relative z-20 bg-primary'>
            <div className='flex items-center -translate-x-5'>
                <img className=' h-24 object-contain' src={logo} alt="" />
                <p className='font-bold'>Anoop | Fullstack Developer</p>
            </div>
            <div className='hidden sm:flex items-center gap-10'>
                {routes.map(route => <a className={`${currentRoute === route.path ? 'text-white' : 'text-secondary'} hover:text-white`} key={route.path} href={route.path} onClick={() => {
                    setCurrentRoute(route.path)
                }}>{route.name}</a>)}
            </div>
            <img src={menuActive ? close : menu} alt="navbar menu" className='w-[20px] h-[20px] block sm:hidden cursor-pointer' onClick={() => setMenuActive((state) => !state)} />
            <div className={`${menuActive ? 'flex' : 'hidden'} sm:hidden flex-col gap-8 absolute top-[80px] right-6 items-end bg-gradient-to-r from-cyan-600 to-blue-900 px-8 py-6 rounded`}>
                {routes.map(route => <a className={`${currentRoute === route.path ? 'text-white' : 'text-secondary'} hover:text-white`} key={route.path} href={route.path} onClick={() => {
                    setMenuActive(false)
                    setCurrentRoute(route.path)
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
    const [currentRoute, setCurrentRoute] = useState(routes[0].path)
    const [menuActive, setMenuActive] = useState(false)

    return { currentRoute, setCurrentRoute, menuActive, setMenuActive, routes }
}

export default Navbar