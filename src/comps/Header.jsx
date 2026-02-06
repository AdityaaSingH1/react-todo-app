import React from 'react'
import { useState } from 'react'
const Header = ({notes,submitchange,setnote,savenote,setsavenote,task}) => {
    
    return (
    <div className='w-full h-1/2' >
        <h1 className='text-xl font-bold w-full flex  justify-center '>iTask- Manage yout todos at one place</h1>

        <p className='text-2xl px-2 '>Add a Todo</p>

        <form onSubmit={submitchange} action="">
            <input type="text" placeholder='Add a Task' value={notes} className='w-160 bg-white ml-5 rounded-3xl h-7 text-center text-xl' onChange={(e)=>{
                setnote(e.target.value)
            }} />

            <button onClick={(e)=>{
                console.log('data submitted');
            }} className='h-10 w-15 rounded-4xl bg-purple-700 text-white ml-2'>Save</button>
            
        </form>

        <form action="">
            <input className='ml-2' type="checkbox" name=""  id="" />
            <span className='ml-2 font-semibold'>Show Finished</span>
        </form>

        <hr className="border-t-3 border-black my-8 w-4/5 mx-auto" />
    </div>
  )
}

export default Header