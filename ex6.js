var filterFiles = require('./filterFiles'),
    file = process.argv[2],
    ext = process.argv[3];

filterFiles(file, ext, function printLines(err, result){
  if(err){
    return console.error(err);
  }else{
    for(var dataFile = 0; dataFile < result.length; dataFile++){
      console.log(result[dataFile]);
    }
  }
});
