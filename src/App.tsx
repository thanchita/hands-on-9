import { FormEvent, useState } from 'react'
import './App.css'
import { TaskDTO } from './types/dto'
import Task from './components/Task'

const initTasks: TaskDTO[] = [
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn HTML',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn React',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn Node.js',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn useState',
    isDone: false,
  },
]

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>(initTasks)
  const [newTask, setNewTask] = useState<string>('')

  const handleAdd = (e: FormEvent) => {
    e.preventDefault()

    const currentTasks = [...tasks]

    currentTasks.push({
      id: Math.floor(Math.random() * 1000), // * database should generate id for us
      todo: newTask,
      isDone: false,
    })

    setTasks(currentTasks)
    setNewTask('')
  }

  const handleToggle = (index: number) => {
    const currentTasks = [...tasks]

    currentTasks[index].isDone = !currentTasks[index].isDone

    setTasks(currentTasks)
  }

  const handleDel = (index: number) => {
    const currentTasks = [...tasks]
    currentTasks.splice(index, 1)
    setTasks(currentTasks)
  }
  return (
    <div className="App">
      <h1>React Todo List</h1>
      <form onSubmit={handleAdd}>
        <label>Add Todo List:</label>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} required />
        <input type="submit" value="Add" />
      </form>
      <div className="todo-container">
        {tasks.map((task, idx) => {
          return <Task key={task.id} task={task} handleToggle={handleToggle} idx={idx} handleDel={handleDel} />
        })}
      </div>
    </div>
  )
}

export default App
