const fs = require('fs');

fs.readFile('index.txt','utf-8',(err,data) => {
  console.log(err,data);
})
