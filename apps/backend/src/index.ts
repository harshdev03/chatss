import express from "express"
import { WebSocketServer } from "ws"
const app = express()
const PORT = process.env.PORT || 8080
const httpServer = app.listen(PORT)


const wss = new WebSocketServer({server : httpServer})


wss.on("connection" , (ws) => {
        ws.on('error' , console.error)

        ws.on('message' , (data) => {
            const msg = JSON.parse(data.toString())
           wss.clients.forEach((client)=>{

            if(client.readyState === WebSocket.OPEN){
                 client.send(JSON.stringify(msg))
            }
            
           })
        })

        ws.send("Hello server")
})