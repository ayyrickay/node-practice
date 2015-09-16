var http = require('http'),
    bl = require('bl'),
    url = process.argv[2];

http.get(url, function(response){
  response.pipe(bl(function(err, data){
    if(err){
      console.error(err);
    }else{
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }
  }));
});
