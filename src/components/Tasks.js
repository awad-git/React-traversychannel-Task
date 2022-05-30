import React from 'react'
import { useState } from 'react'


const Tasks=()=>{
    const delet=(id)=>{
        console.log(`deleting ${id}`)
        
         setTasks(tasks.filter((task)=>task.id !== id))
    }
    const [tasks,setTasks]=useState([
        {id:1,text:'first task ',reminder:'h',day:'2-3-44'},
        {id:2,text:' second task',reminder:'h22',day:'3-43434'},
                ])
    return ( 
        <>       
        {tasks.map((task)=>(<h1 key={task.id}>{task.text } <button onClick={()=>delet(task.id)} style={{color:'red'}}>delete</button></h1>))}
        </>
    )
}
export default Tasks