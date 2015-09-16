module.exports = function(dir, ext, callback){
  var fs = require('fs');
      path = require('path');

  fs.readdir(process.argv[2], countLines);

  function printLines(error, fileSet){
    if (error){
      return console.error(error);
    }else{
      for(var i = 0; i < fileSet.length; i++){
        if(path.extname(fileSet[i]) == "." + process.argv[3]){
          console.log(fileSet[i]);
        }
      }
    }
  };
}

  //console.log(newLineCount(process.argv[0]));
