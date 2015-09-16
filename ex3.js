var fs = require('fs');

var newLineCount = function(filePath){
  var binFileContents = fs.readFileSync(filePath);
  var strFileContents = binFileContents.toString();

  var newLineArray = strFileContents.split('\n');

  return newLineArray.length - 1
};

console.log(newLineCount(process.argv[2]));
//console.log(newLineCount(process.argv[0]));
