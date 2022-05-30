import React  from "react";
import { useState } from "react";
import Tasks from "./Tasks";

const onAdd=(task)=>{
    console.log(task)
 
        const id=Math.floor(Math.random *1000)+1
        const newTask={id,...task}
        Tasks.setTasks([...Tasks,newTask])
    }


const AddTask=()=>{
    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        if (!text){
            alert('please enter a task')
        }
        onAdd({text,day})
    }
    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add task' value={text} onChange={(e)=>setText(e.target.value)}   />
            </div>
            <div className='form-control'>
                <label>day -time</label>
                <input type='text' placeholder='Timing' value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div>
                <button type="submit">Save task</button>
            </div>
        </form>
    )

}
export default AddTask