"use client"
import React from 'react'
import Btn from './btn'
import { useRouter } from 'next/navigation'
import {motion} from "framer-motion"
const Hero = () => {
  const navigate = useRouter()
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <motion.div
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true }}
         className='flex flex-col justify-center overflow-hidden text-center w-full h-dvh '>

        <div className='max-w-6xl mx-auto'>

              <motion.div variants={itemVariants} className='text-7xl font-bold'>
                <p>Chat&apos;s</p>
              </motion.div>
              
              <div className='text-muted-foreground mb-2 font-light'>
               <p>Let&apos;s chat to anyone, anytime, anywhere.</p>
              </div>

              <div className='shadow-input py-2'>
                  <Btn onClick={()=> navigate.push('/chats')}/>
              </div>
        </div>
    </motion.div>
  )
}

export default Hero