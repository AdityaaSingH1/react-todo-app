import React from 'react'
import { Link } from 'react-router-dom'
import Navcontent from './Navcontent'

const Navbar = () => {
  return (
    <div className="w-screen h-10 bg-blue-900 text-white">
      <div className="flex items-center justify-between p-1">
        <h2 className="text-2xl font-bold px-50">iTask</h2>
        <Navcontent />
      </div>
    </div>
  )
}


export default Navbar