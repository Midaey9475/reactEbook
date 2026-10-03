import { useContext } from 'react'
import { UserContext } from './UserContext'

const Lastborn = () => {
  
  const user = useContext(UserContext) 
  return (
    <>
        <div className='border-2 p-4 flex flex-col bg-green-500 text-white'>
            <h1>I am the last born that needs the username
            <p>More like when a user want to log out <br />
                <strong className='text-2xl'>Are you sure you want to log out ({user})</strong>
            </p>
            </h1>
        </div>
    </>
  )
}
export default Lastborn