import React from 'react'
import Login from './Login'

const Navbar = () => {
  return (
    <div className='p-10 h-1/10 items-center justify-between w-full bg-white flex text-black'>
        <div className='flex bg-slate-700'>
            <div className=''> </div>
            <div className=''> </div>
        </div>
        <Login />
    </div>
  )
}

export default Navbar