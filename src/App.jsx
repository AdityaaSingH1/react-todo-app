import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './comps/Navbar'
import Mainbody from './comps/Mainbody'
import React from 'react'

function App() {
  //const [count, setCount] = useState(0)
  const [notes, setnote] = useState('')
  const[savenote,setsavenote]=useState([])
  
    const submitchange=(e)=>{
      e.preventDefault()
          setnote('')
          console.log(notes);
          
          setsavenote([...savenote,{notes: notes,iscompleted:false}])
    }
    const taskdone=(index)=>{
    const newarr=[...savenote];
    newarr[index].iscompleted=true;
    setsavenote(newarr)
  }
  return (
    <>
        <div className=''>
          <div>
          <Navbar />
        </div>

        <div className="flex justify-center mt-5">
            <div className="w-1/2 h-170 bg-violet-100">
                <Mainbody notes={notes} submitchange={submitchange} setnote={setnote} task={savenote} setsavenote={setsavenote} taskdone={taskdone} />
            </div>
        </div>
        </div>
    </>
      
    
  )
}

export default App
