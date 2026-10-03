import { useState } from 'react'

const TodoApp = () => {
    const [task, setTask] = useState('')
    const [todos, setTodos] = useState([])

    const handleTaskInput = (e)=> setTask(e.target.value)

    const addTodo = ()=>{
        if(task.trim() === ''){
            return;
        }
        const newTodo = { id: Date.now() , task: task }
        setTodos((prevTodos)=> [...prevTodos , newTodo])
        setTask('')
    }

    const deleteTask = (id)=>{
        setTodos((allTask)=> allTask.filter((t)=> t.id !== id))
    }
    
  return (
    <>
        <div className="flex flex-col gap-4 p-2">
            <h1 className="font-black text-2xl text-blue-600">Sample Todo App</h1>
            <div className="flex gap-2">
                <input type="text" className="border-2 p-2 rounded-lg focus:outline-0" placeholder="Add Task..." onChange={handleTaskInput} />
                <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 duration-500 ease-in" onClick={addTodo}>Add task</button>
            </div>
        </div>

        <main className="flex flex-col gap-2 border mx-2 my-4 p-2">
            {
                todos.map((todo)=>{
                    return(
                        <div key={todo.id} className='flex items-center justify-between border border-blue-400 rounded-lg p-2'>
                            <h1 className='text-md font-bold max-w-[70%]'>{todo.task}</h1>
                            <button className='bg-red-500 text-sm px-3 py-1.5 rounded-lg text-white cursor-pointer' onClick={()=>deleteTask(todo.id)}>delete</button>
                        </div>
                    )
                })
            }

        </main>
   
    
    </>
  )
}

export default TodoApp