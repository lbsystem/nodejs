const net = require('net')

const server = net.createServer((socket)=>{
    console.log("start.....")
        socket.on('data',(data)=>{
        console.log(data.toString())
        socket.write(`server send: ${data}`)
            socket.end()
    })

})



server.listen(8088,()=>{
    console.log("listen")
})

server.on("connection",socket => {
       console.log(socket.remoteAddress)
        socket.write("fdfdfdfdfdfdfd")
    })
