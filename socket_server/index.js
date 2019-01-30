var http = require('http').Server();
var io = require('socket.io')(http);
var port = process.env.PORT || 4000;

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
 
  socket.on('retrieveSocketIds', function(socketIds) {
    var socketIds = Object.keys(io.sockets.server.eio.clients);
    // console.log(socketIds)
    io.emit('retrieveSocketIds', socketIds)
  })
});

http.listen(port, function(){
  console.log('listening on Port:' + port);
});
