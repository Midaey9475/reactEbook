import {} from 'react'
import { Outlet, Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <div className='flex justify-between font-bold border-2 p-4'>
        <h1>This is the dashboard</h1>
        <div className='flex gap-4'>
            <Link to="profile">Profile</Link>
            <Link to="settings">Settings</Link>
        </div>
    </div>
    <Outlet/>
    </>
  )
}
export default Dashboard