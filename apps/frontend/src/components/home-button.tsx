"use client"
import { CornerUpLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Back = () => {
    const navigate = useRouter()
  return (
    <div className='flex justify-start pl-5 h-10 gap-2 cursor-pointer pt-4' onClick={()=> navigate.push('/')}>
        <CornerUpLeft className='w-5 h-5'/>
        <div>back</div>
    </div>
  )
}

export default Back