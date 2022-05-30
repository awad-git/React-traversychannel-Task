import React from 'react'

const Button=({text})=>{
 const click=()=>{
     alert('button clicked')
 }
    return(
        <div>
            <button onClick={click} className='btn'>{text}</button>
        </div>
    )
}
export default Button ;