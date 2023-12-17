import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css'


 export const TaskForm = ({ addTask }) => {
    const [IsOpenModal, setIsOpenModal] = useState(false)

    const handleCloseModal = () => {
      setIsOpenModal(false)
    }

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    const handleSubmitTask = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const task = {title, description, createAt: new Date().toTimeString(), id: uuidv4()}
        console.log("Task fueron agregadas", task)
        addTask(task);
        handleCloseModal();
    }
    


    return (
        <div>

            <button className='new-task' onClick={handleOpenModal}>Nueva Tarea  <FaPlusCircle className='icon'/></button>
            {
                IsOpenModal
                &&

                <div className='modal-background'>
                    <div className='modal'>
                        <h2>Agregar nueva tarea</h2>
                        <form onSubmit={handleSubmitTask}>
                            <div className="input-container">
                                <label htmlFor="title">Ingresa el titulo de tu tarea</label>
                                <input className='input' type="text" id='title' name='title' placeholder='Titulo ejemplo' />
                            </div>
                            <div className="input-container">
                                <label htmlFor="description">Ingresa una descripción</label>
                                <textarea name="description" id="description" placeholder='Alguna aclaracion/descripcion'></textarea>
                            </div>
                            <div className='btn-container'>
                                <button onClick={handleCloseModal}>Cancelar</button>
                                <button type='submit'>Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default TaskForm
