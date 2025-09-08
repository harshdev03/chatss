"use client"
import React, { useEffect, useState } from "react"

type ChatMessage = {
  user: string
  text: string
}

export default function ChatComp() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [username, setUsername] = useState("")
  const [tempName, setTempName] = useState("")
  const [input, setInput] = useState("")

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    ws.onopen = () => setSocket(ws)
    ws.onmessage = e => {
      try {
        const msg: ChatMessage = JSON.parse(e.data)
        setMessages(prev => [...prev, msg])
      } catch {
        console.log("Received non-JSON:", e.data)
      }
    }
    return () => ws.close()
  }, [])

  const sendMessage = () => {
    if (!socket || !input.trim() || !username) return
    const payload: ChatMessage = { user: username, text: input }
    socket.send(JSON.stringify(payload))
    setInput("")
  }

  if (!username) {
    return (
      <div className="p-4 space-y-2">
        <input
          value={tempName}
          onChange={e => setTempName(e.target.value)}
          placeholder="Enter your name..."
          className="border p-2 rounded"
        />
        <button
          onClick={() => setUsername(tempName.trim())}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Join
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md flex justify-center mx-auto p-4">
      <div className="h-80 overflow-y-auto border p-3 mb-3 rounded">
        {messages.map((m, i) => (
          <div key={i} className="mb-1">
            <strong>{m.user}:</strong> {m.text}
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border p-2 rounded"
          onKeyDown={(e) => {
            if (e.key === "Enter"){
                sendMessage()
            }
          }}
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  )
}