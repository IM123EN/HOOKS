import React from 'react'

const Filter = ({search,setSearch}) => {
  return (
    <div className='search'>
        <input type="text" placeholder='search for task' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Filter