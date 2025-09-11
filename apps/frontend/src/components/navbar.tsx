import React from 'react'
import { ModeToggle } from './toggle'

const Navbar = () => {
  return (
    <div className='flex justify-end pr-2 pt-2'>
        <div className='rotate-10'>
          <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar