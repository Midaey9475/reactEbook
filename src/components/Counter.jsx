import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
    const increment = ()=> setCount((count)=> count + 1)
    const decrement = ()=> setCount((count)=> (count <= 0)? count : count - 1)
    const reset = ()=> setCount(0)
  return (
    <>
        <main className='flex flex-col items-center gap-4'>
            <h1 className='text-5xl font-black'>{count}</h1>
            <div className='flex gap-2'>
                <button onClick={decrement} className='bg-red-500 px-4 py-2 text-white cursor-pointer rounded-lg'>
                    Decrement
                </button>
                <button onClick={reset} className='bg-blue-500 px-4 py-2 text-white cursor-pointer rounded-lg'>
                    Reset
                </button>
                <button onClick={increment} className='bg-green-500 px-4 py-2 text-white cursor-pointer rounded-lg'>
                    Increment
                </button>
            </div>
        </main>
    </>
  );
}

export default Counter
