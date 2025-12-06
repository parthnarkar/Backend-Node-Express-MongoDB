const fs = require('fs');

fs.writeFile('output.txt', "Writing File" , (err) => {
  if(err) throw err;
  console.log('File created successfully');
});