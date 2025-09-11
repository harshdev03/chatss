"use client"
import React from 'react'
import Btn from './btn'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const navigate = useRouter()
  return (
    <div className='flex flex-col justify-center overflow-hidden text-center w-full h-dvh '>
        <div className='max-w-6xl mx-auto'>

              <div className='text-7xl font-bold'>
                <p>Chat&apos;s</p>
              </div>
              
              <div className='text-muted-foreground mb-2 font-light'>
               <p>Let&apos;s chat to anyone, anytime, anywhere.</p>
              </div>

              <div className='shadow-input py-2'>
                  <Btn onClick={()=> navigate.push('/chats')}/>
              </div>
        </div>
    </div>
  )
}

export default Hero