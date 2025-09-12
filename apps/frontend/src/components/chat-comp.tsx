"use client"
import { useSocket } from 'app/hooks/usesocket'
import React ,{ useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import Back from './home-button'
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
    
    if(!username){
      return(
      <div className='flex flex-col justify-center'>

        <div>
        <Back/>
        </div>

      <div className="flex flex-col w-full justify-center px-4 sm:px-3 items-center h-screen">
        <div className='font-medium text-sm'>
          This will be your public display name.
        </div>
        <div className='flex pt-4 gap-2'>
        <Input type="email" placeholder="Enter Username" value={tempName} onChange={(e)=> setTempname(e.target.value)}/>
        <Button type="submit" variant="outline" className='cursor-pointer' onClick={()=> setUsername(tempName.trim())}>
          Join Chat
        </Button>
        </div>
    </div>
  </div>
      )
    }


  return (
    <div className='flex flex-col justify-center w-full'>
      <Back/>
    <div className='h-screen flex px-4 sm:px-3 justify-center w-full items-center'>
          <div className='flex flex-col justify-center gap-2'>
            <div className='px-3 sm:px-4 mb-3'>
              <p className='mb-2 text-2xl'>Chats appears here!</p>
            <ScrollArea className='h-[300px] sm:h-[400px] w-[300px] sm:w-[750px] rounded-sm border p-4'>
                {messages.map((msg, index) => (
                  <div
                  key={index}
                  className="mb-2"
                  >
                    <strong>{msg.username}:- </strong>
                    {msg.text}
                  </div>
                ))}
          </ScrollArea>
          </div>
          
          <div className='flex pt-12 max-w-2xl justify-center mx-auto gap-2'>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) =>{
              if(e.key === "Enter"){
                handleSend()
              }
            }} 
          />
          <Button onClick={handleSend} className='cursor-pointer'>Send</Button>

          </div>
      </div>
    </div>
</div>
  )
}

export default ChatComp