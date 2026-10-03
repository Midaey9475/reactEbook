import { useContext } from "react"
import { TestUserContext } from "./TestUserContext"

const ContextHeader = () => {
    const {user , uImage} = useContext(TestUserContext)
    
  return (
    <>
        <header className='flex items-center justify-between px-4 h-20 border-b-2'>
            <h2 className='font-bold text-xl italic'>Welcome {user}</h2>
            <div className='h-12 w-12 rounded-[50%] p-0.5 border border-blue-400  '>
                <img src={uImage} alt="profile picture" className='h-full w-full object-cover rounded-[50%]' />
            </div>
        </header>
    </>
  )
}

export default ContextHeader