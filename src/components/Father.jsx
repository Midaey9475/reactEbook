import { useState } from 'react'
import Mother from './Mother'
import { UserContext } from './UserContext'

const Father = () => {
  
  const [user, setUser] = useState('Festus Akinboye')
    
  return (
    <>
    <div className='m-2 border-0 bg-amber-500 p-4 flex flex-col gap-3 text-white'>
        <h1>I am the father that provides the username</h1>
        <p>Example when a user logs in, i can say; <br />
        <strong className='text-2xl'>Welcome ({user})</strong>
        </p>
        {/* <Mother User={username}/> */}
        <UserContext.Provider value={user}>
          <Mother/>
        </UserContext.Provider>
    </div>
    </>
  )
}
export default Father