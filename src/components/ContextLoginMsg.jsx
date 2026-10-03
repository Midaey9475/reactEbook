import { useContext} from 'react'
import { TestUserContext } from './TestUserContext'

const ContextLoginMsg = ( { login }) => {
    
    const {user} = useContext(TestUserContext)
    
    return(
        <>
        {
            login && <h1 className='font-bold text-white'>Welcome {user}</h1>
        }
        </>
    )
  
}

export default ContextLoginMsg