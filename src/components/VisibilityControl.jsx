import React from 'react'

export const VisibilityControl = ({isCheked,setShowCompleted,cleanTasks}) => {

  const  handleDelete=()=>{
        if(window.confirm('estas seguro de eliminarlo?')){
            cleanTasks()
        }
       
    }
  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
   <div className='form-check form-switch'>
   <input className='form-check-input' type="checkbox" checked={isCheked} onChange={e =>setShowCompleted(e.target.checked)}/ >
    {" "}
   <label>Tareas terminadas.</label>
   </div>
   <button className='btn btn-danger' onClick={handleDelete}>
    Clear
   </button>
  </div>
  )
}
