import React from 'react'
import Button from './Button'
import Tasks  from './Tasks'
import AddTask from './AddTask'


const Header=(props)=>{
    return(

        < header className='header'>
            <h1 style={{color:'red',backgroundColor:'green'}}>{props.title} app</h1>
            <AddTask />
            <Button text='Add Task' />
            <Tasks  />
        </header>
    )
}
Header.defaultProps={title:'loading contents....'}
export default Header