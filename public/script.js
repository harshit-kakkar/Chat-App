
const socket = io()

socket.on('connect',() =>{
    console.log('Connected '+socket.id)
})

socket.on('chat_rcvd',(data) =>{
    $('#chats').append(
        $('<li>').text(
            `${data.username} : ${data.msg}`
        )
    )
})
let user;
$(() => {
    $('#chatbox').hide()
    // $('#wel').hide()
    
  
    $('#login').click(() => {
      socket.emit('login', {
        // user =  $('#username').val()
        username: $('#username').val()
      })
     
      $('#wel').append(
        $('<h1>').text(
          'Hey, ' + $('#username').val()
        )
      )

      $('#head1').hide();
      
    })  
    
    


    socket.on('loggedin', () => {
      console.log('Login successful')
      $('#loginform').hide()
      $('#chatbox').show()
      // $('#wel').show()
    })
  
    $('#send').click(() => {
      console.log('Sending chat')
      socket.emit('chat', {msg: $('#msg').val()})
    })
  })