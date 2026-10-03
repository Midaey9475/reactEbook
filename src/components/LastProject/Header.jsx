import {} from 'react'
import logo from '/public/assets/dogP.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='h-20 px-4 py-2 flex items-center justify-between sticky top-0 bg-white shadow-[0px_5px_8px_#2585d8]'>
        <div className='h-full rounded-[50%]'>
            <img src={logo} alt="logo" className='h-full rounded-[50%]'/>
        </div>
        <nav className='flex gap-5 text-xl font-bold'>
            <Link className='hover:underline' to='/'>Home</Link>
            <Link className='hover:underline' to='/TodoApp'>TodoApp</Link>
            <Link className='hover:underline' to='/Counter'>Counter</Link>
        </nav>
    </header>
    
    </>
  )
}

export default Header