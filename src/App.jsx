import { useEffect, useState } from 'react'

import './App.css'
import { TaskForm, TaskList } from './components'

function App() {

const [tasks, setTasks] = useState([])

const [currentTask, setCurrentTasks] = useState([])

const [searchString, setSearchString] = useState('')

const addTask = (task) => {
  setTasks([...tasks, task])
}

const deleteTask = (taskId) => {
   setTasks(tasks.filter(task => task.id != taskId))
}



const handleChangeFilter = (e) => {
  setSearchString(e.target.value)
}

useEffect(() => {
  setCurrentTasks(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))
}, [searchString, tasks])

  return (
    <>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
    <div className='container'>
      <input className='buscador' type="text" placeholder='Escribe para buscar...' value={searchString} onChange={handleChangeFilter} />
     <TaskForm addTask={addTask}/>
     </div>
     <TaskList tasks={currentTask} deleteTask={deleteTask}/>
     
    </>
  )
}

export default App
