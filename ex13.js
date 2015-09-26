var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var timeParser = function(time, path){
  var timeData = new Date(time);

  //instatiating clock object
  var clock = {};

  //Accounting for unixtime and parsetime paths
  if(path === '/api/unixtime'){

    clock.unixtime = timeData.getTime()
  }else{
    //Capturing hours, minutes, and seconds in clock object
    clock.hour = timeData.getHours();
    clock.minute = timeData.getMinutes()
    clock.second = timeData.getSeconds()
  }
  
  //return stringified JSON
  return JSON.stringify(clock);
};

var server = http.createServer(function(req,res){
  if(req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    var currentPath = url.parse(req.url, true).pathname;
    var currentTime = url.parse(req.url, true).query.iso;

    res.end(timeParser(currentTime, currentPath));
  }else{
    console.log("The request ", req, " is not a POST request.")
    res.end();
  }
});

server.listen(port);
