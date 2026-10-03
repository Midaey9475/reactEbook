import {} from 'react'
import { Link } from 'react-router-dom'
import logo from '/public/assets/dogP.jpg'

const NavBar = () => {
  return (
    <>
        <header className="h-20 flex items-center justify-between px-4 py-2">
        <div className="h-full">
          <img src={logo} alt="logo" className="h-full w-full rounded-[50%]" />
        </div>
        <nav className="flex gap-5">
          <Link className="text-lg font-bold" to='/'>Home</Link>
          <Link className="text-lg font-bold" to='/about'>About</Link>
          <Link className="text-lg font-bold" to='/signup'>SignUp</Link>
          <Link className="text-lg font-bold" to='/dashboard'>Dashboard</Link>
        </nav>
      </header>
    </>
  )
}

export default NavBar