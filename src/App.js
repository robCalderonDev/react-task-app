import './App.css';
import {useState,useEffect} from 'react'

import {TaskCreator} from './components/TaskCreator'
import {TaskTable} from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl';
import {Container} from './components/Container'
function App() {
  //el primero es una variable, y el segundo es una funcion que nos permite actualizar esa variable
 const [taskItems, setTaskItems] = useState([ ])
 const [showCompleted, setShowCompleted] = useState(false)

 
 function createNewTask(taskName){
  
 if( !taskItems.find(task =>task.name ===taskName)){
 setTaskItems([...taskItems,{name:taskName,done:false}])
 
 }

 }

 const cleanTasks=() =>{
 setTaskItems(taskItems.filter(task =>!task.done)) 
 setShowCompleted(false)
 }
const toggleTask=task =>{
setTaskItems(
  taskItems.map(t =>(t.name === task.name) ?{...t,done:!t.done}: t)
)
 }
 useEffect(() =>{
  let data = localStorage.getItem('tasks')
  if(data){
    setTaskItems(JSON.parse(data))
  }
 },[])
 useEffect(()=>{
 localStorage.setItem('tasks',JSON.stringify(taskItems))
 },[taskItems])


  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        
      <TaskCreator createNewTask={createNewTask} />
        <TaskTable  tasks={taskItems} toggleTask={toggleTask}/>
        <VisibilityControl 
          isCheked={showCompleted}
          setShowCompleted={(checked) =>setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
      
      {
        showCompleted=== true  &&(
          <TaskTable  tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>

        )
      }
      </Container>

    
    </main>
  );
}

export default App;
