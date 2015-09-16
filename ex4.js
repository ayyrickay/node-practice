var fs = require('fs');

fs.readFile(process.argv[2], countLines);

function countLines(error, fileText){
  if (error){
    return console.error(error);
  }else{
    var strFileContents = fileText.toString();
    var newLineArray = strFileContents.split('\n');

    return console.log(newLineArray.length - 1);
  }
};

//console.log(newLineCount(process.argv[0]));
