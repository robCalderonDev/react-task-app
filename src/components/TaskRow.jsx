import React from 'react'

export const TaskRow = ({task,toggleTask}) => {
  return (
    <tr key={task.name}>
    <td className='d-flex justify-content-between'>
      {task.name}
      <input 
      type="checkbox"
      checked={task.done}
      //on change es si dio click va a hacer algo
      onChange={() => toggleTask(task)}
      ></input>
    </td>
  </tr>
  )
}
