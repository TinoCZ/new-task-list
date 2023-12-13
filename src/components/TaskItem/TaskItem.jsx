import React from 'react'
import './TaskItem.css'

export const TaskItem = ({task, deleteTask}) => {
  return (
    <div className='tarea-container'>
      <div className='tarea'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>Finalizar</button>
           </div>
          </div>
  )
}
