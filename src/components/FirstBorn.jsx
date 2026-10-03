import {} from 'react'
import Lastborn from './Lastborn'

const FirstBorn = () => {
  return (
    <>
        <div className='border-2 p-4 flex flex-col gap-3 bg-red-500 text-white'>
            <h1>I am the firstborn</h1>
            <p>I also don't need the username
                <b>Also more like the user still within the application</b>
            </p>
            <Lastborn/>
        </div>
        
    </>
  )
}
export default FirstBorn