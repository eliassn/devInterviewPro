const app = require("express")()
const server = require("http").createServer(app)
const cors = require("cors")
const io = require("socket.io")(server,{
    cors:{
        origin:"*",
        method:["GET","POST"],
    }
})
app.use(cors())
const PORT = process.env.PORT || 9000
server.listen(PORT,(err)=>{
    try {
        console.log(`server listening on port: ${PORT}`)
    } catch (error) {
        console.error(error.message)
    }
})
io.on("connection",(socket)=>{
    socket.emit("me",socket.id)
    socket.on("disconnect",()=>{
        socket.broadcast.emit("Call Ended")
    })
    socket.on("calluser",({userToCall,signalData,from,name})=>{
   io.to(userToCall).emit("calluser",{signal:signalData,from,name})
    })
    socket.on("Answercall",(data)=>{
        io.to(data.to).emit("Callaccepted",data.signal)
    })
})
app.get('/',(req,res)=>{
    res.send('working')
})
