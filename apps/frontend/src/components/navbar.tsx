import { Github } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end pr-2 pt-2'>
        <div className='rotate-30'>
          <Github className='h-4 w-4 text-white'/>
        </div>
    </div>
  )
}

export default Navbar