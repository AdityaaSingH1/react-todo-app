import React from 'react'
import { Link } from 'react-router-dom'

const Navcontent = () => {
  return (
    <div className=' flex justify-evenly w-1/2'>
        <Link className='hover:font-bold transition-all' to='/'>Home</Link>
        <Link className='hover:font-bold transition-all' to='/Task'>Your Task</Link>
    </div>
  )
}

export default Navcontent