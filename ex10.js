var net = require('net'),
    port = process.argv[2];


var server = net.createServer(function(socket){
  socket.on('data', write(data));
  console.log(data);
  socket.end();
});

server.listen(port);
