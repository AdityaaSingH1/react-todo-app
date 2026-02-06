import React from 'react'
import { SquarePen } from 'lucide-react';
import { Trash } from 'lucide-react';
import { useState } from 'react'


const Content = ({notes,submitchange,setnote,savenote,setsavenote,task,taskdone}) => {
  const [first, setfirst] = useState('')
  return (
    <div>
      <h1 className='text-2xl font-bold'>Your Todos</h1>

      {task.map((elem, idx) => (
      <div key={idx} className="mt-2 flex items-center justify-between">
  
    <div className="flex items-center gap-2 ">
      <input  type="checkbox" onChange={()=>{
         taskdone(idx)
        
      }} />
      <span className={elem.iscompleted ? "line-through" : ""}>{elem.notes}</span>
    </div>
    <div className="flex gap-2">
      <button className="flex items-center gap-1 p-1 cursor-pointer bg-purple-800 text-white rounded">
        <SquarePen size={18} />
      </button>
      <button className="flex items-center gap-1 p-1 cursor-pointer bg-purple-800 text-white rounded">
        <Trash size={18} />
      </button>
    </div>
  </div>
))}

    </div>
  )
}

export default Content