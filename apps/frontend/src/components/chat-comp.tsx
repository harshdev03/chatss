"use client"
import { useSocket } from 'app/hooks/usesocket'
import React ,{ useState } from 'react'
import ResponsiveModalSide from './responsive-modal-side'

const ChatComp = () => {
    const {messages , sendMessage } = useSocket("ws://localhost:8080")
    const [username , setUsername] = useState("")
    const [tempName , setTempname] = useState("")
    const [input , setInput] = useState("")

    const handleSend = () => {

      if(!input.trim() || !username) return

      sendMessage({username: username , text : input})
      setInput("")
    }
    
    
   



  return (
    <div className='h-screen flex flex-col justify-center w-full items-center'>
      <ResponsiveModalSide/>
    </div>
  )
}

export default ChatComp