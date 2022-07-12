import React, { useState } from 'react'

export const TaskCreator = ({createNewTask}) => {
    
    const [newTaskName, setNewTaskName] = useState('')
  
    const handleSubmit =(e) =>{
      e.preventDefault();
      createNewTask(newTaskName);
      
      alert(newTaskName)
      setNewTaskName('');
    }
  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
        <div className='col-9'>
          <input
              type="text"
              placeholder='Ingresa Nueva tarea'
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value) }
              className='form-control'>
          </input>
        </div>
       <div className='col-3'>
       <button onClick={handleSubmit} className='btn btn-primary btn-sm' type='button'>Guardar</button>
            
       </div>
    </form>
  )
}
