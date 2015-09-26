var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    source = process.argv[3];

var server = http.createServer(function(req, res){
  var readStream = fs.createReadStream(source);

  readStream.on('open', function(){
    readStream.pipe(res);
  });

  readStream.on('err', function(err){
    res.end(err);
  })
});

server.listen(port);
