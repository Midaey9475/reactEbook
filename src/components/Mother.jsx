import {} from 'react'
import FirstBorn from './FirstBorn'

const Mother = () => {
  return (
    <>
        <div className='border-2 p-4 flex flex-col gap-3 bg-blue-500 text-white'>
            <h1>I am the mother component</h1>
            <p>I don't need the username value.
                <b>More like the user within his/her app component</b>
            </p>
            <FirstBorn/>
        </div>
    </>
  )
}
export default Mother