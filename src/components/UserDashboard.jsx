import {} from 'react'
import ContextFooter from './ContextFooter'
import ContextLoginMsg from './ContextLoginMsg'

const UserDashboard = () => {
  return (
    <>
        <main className='h-100 bg-blue-500 grid place-content-center gap-2.5 p-6'>
            <ContextLoginMsg login={true}/>
            <h1 className='font-black text-4xl'>This is the user Dashboard</h1>
        </main>
        <ContextFooter/>
    </>
  )
}

export default UserDashboard