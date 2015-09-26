var net = require('net'),
    port = process.argv[2];

var putZero = function(num){
  return ((num < 10) ? "0" : "" ) + num;
};

var server = net.createServer(function(socket){
  var date = new Date();
  var cleanDate = date.getFullYear() + "-" + putZero(date.getMonth() + 1)+"-"+putZero(date.getDate()) + " " + putZero(date.getHours()) + ":" + putZero(date.getMinutes());
  socket.write( cleanDate + "\n" );
  socket.end();
});

server.listen(port);
