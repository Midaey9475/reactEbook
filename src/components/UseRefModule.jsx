import { useState, useRef } from 'react'

const UseRefModule = () => {

    const [timeCount, setTimeCount] = useState(0)
    const timerRef = useRef(null)

    const start = ()=>{
        if(timerRef.current !== null){return} //Dont duplicate if time has started
        timerRef.current = setInterval(() => {
            setTimeCount((s)=> s + 1)
        }, 1000);
    }

    const stop = ()=>{
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    const reset = ()=>{
        clearInterval(timerRef.current)
        timerRef.current = null
        setTimeCount(0)
    }
      
  return (
    <>
    <h1 className="text-center p-4 m-2 bg-black text-white text-4xl font-bold text-shadow-[2px_2px_6px_blue]">A Simple Stopwatch</h1>
    <div className="m-2 flex flex-col items-center gap-2">
        <h1 className="font-black text-6xl">{timeCount}</h1>
        <div className="flex gap-2">
            <button className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-lg text-xl"onClick={start}>Start</button>
            <button className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg text-xl" onClick={stop}>Stop</button>
            <button className="px-4 py-2 cursor-pointer bg-gray-500 text-white rounded-lg text-xl" onClick={reset}>Reset</button>
        </div>
    </div>
    </>
  )
}
export default UseRefModule