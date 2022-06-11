import React, { useState } from 'react'

const Addtask =  ({ addT }) => {
    const[task,setTask]=useState({name: "", description: "", done: false});
  return (
    <div>
        <button onClick={()=>addT(task)}> add new task </button>
        <div className='f'>
            <input type="text" placeholder='Task name'
            onChange={(e)=>setTask({...task, name: e.target.value})}
            />
            <input type="text" placeholder='Task Description' onChange={(e)=>setTask({...task, description: e.target.value})}/>

        </div>
    </div>
  )
}

export default Addtask