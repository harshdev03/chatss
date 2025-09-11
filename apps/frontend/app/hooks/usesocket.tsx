"use client"
import MessageType from '@/lib/constants'
import {useEffect, useRef, useState} from 'react'



export const useSocket = (url : string) => {
    const socket = useRef<WebSocket | null>(null)
    const [messages , setMessages] = useState<MessageType[]>([])

    useEffect(()=>{
        const ws = new WebSocket(url)
        socket.current = ws
        
        ws.onopen = () => {
          console.log("Connected to server")
        }
        
        ws.onmessage = (e)=>{
           try{
            
             const messages: MessageType = JSON.parse(e.data)
             setMessages((m) => [...m , messages])

           }catch(err){
            console.log("Error while getting Chats",err)
           }     
        }

        return ()=>{
            ws.close()
        }

    },[url])

    const sendMessage =(payload : MessageType) =>{
        socket.current?.send(JSON.stringify(payload))
    }

    return {messages , sendMessage}

}