var http = require('http'),
    bl = require('bl'),
    urls = process.argv.slice(2, process.argv.length),
    dataHold = [],
    counter = urls.length;

urls.map(function(url, idx){
  http.get(url, function(response){
    response.pipe(bl(function(err, data){
      if(err){
        console.error(err);
      }else{
        data = data.toString();
        dataHold[idx] = data;
        counter--;
        if(counter===0){
          dataHold.map(function(stnc){console.log(stnc)});
        }
      }
    }));
  });
});
