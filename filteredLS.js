var fs = require('fs');

fs.readdir(process.argv[2], function callback ( err, list) {
  if (err) return console.error(err);
  var extensionsFound = list.filter( file => {
    return file.split('.')[1] === process.argv[3];
  })
  extensionsFound.forEach(ext => {
    console.log(ext);
  })
})
