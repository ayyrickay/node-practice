var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

var server = http.createServer(function(req,res){
  if(req.method === 'POST'){
    req.pipe(map(function(chunk){
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }else{
    console.log("The request ", req, " is not a POST request.")
    res.end();
  }
});

server.listen(port);
