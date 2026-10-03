import { useContext } from 'react'
import { TestUserContext } from './TestUserContext'
import newImg from '/public/assets/dogP.jpg'

const ContextFooter = () => {
    const {setUser , setUImage} = useContext(TestUserContext)

    const changeUser = ()=>{
        setUser('Festus')
        setUImage(newImg)
    }
  return (
    <footer className='p-4 flex justify-between items-center border-b-2'>
        <h1>&copy;React_Ebook 2026</h1>
        <button
        onClick={changeUser}
        className='bg-blue-600 text-white p-2 rounded-lg'>
            Change User
        </button>
    </footer>
  )
}

export default ContextFooter