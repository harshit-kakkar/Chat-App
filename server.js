const express =require('express')
const http = require('http')
const socketio =require('socket.io')
const port = process.env.PORT || 3333
const app =express()
const server =http.Server(app)
const io=socketio(server)

let idUserMap ={}

io.on('connection',(socket) =>{
    console.log('connected '+ socket.id)

    socket.on('login',(data) =>{
        idUserMap[socket.id] = data.username
        socket.emit('loggedin')
    })


    socket.on('chat',(data) => {
        // console.log(socket.id +' says '+ data.msg)
        // socket.broadcast.emit('chat_rcvd', data)
        io.emit('chat_rcvd', {
            username: idUserMap[socket.id],
            msg: data.msg

        })
    })
})

app.use('/', express.static(
    __dirname + '/public'
  ))

server.listen(port,() => {
    console.log(`Server started on `+port)
})