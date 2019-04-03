const fs = require('fs');

fs.readFile('./lorem.txt', 'utf-8', function(err, resTxt){
  console.log(resTxt);
})