module.exports = function(dir, ext, callback){
  var fs = require('fs'),
      path = require('path'),
      fileList = [];

  fs.readdir(dir, printLines);

  function printLines(error, fileSet){
    if (error){
      return callback(error);
    }else{

      for(var i = 0; i < fileSet.length; i++){
        if(path.extname(fileSet[i]) === "." + ext){
          fileList.push(fileSet[i]);
        }
      };
    }
    callback(null, fileList);
  };
}
